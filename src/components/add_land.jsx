import { GoogleMap, LoadScript, DrawingManager } from "@react-google-maps/api";
import { Button, Label, Select, Toast } from "flowbite-react";
import { logger } from "../helper";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { API, graphqlOperation } from "aws-amplify";
import { createLand } from "../graphql/mutations";
import { getFarmer } from "../graphql/queries";

import CustomTextField from "../components/custom_text_field";

const loadScriptArr = ["drawing"];
const places = {
  Ooty: {
    lat: 11.4102,
    lng: 76.695,
  },
  Bangalore: {
    lat: 12.9716,
    lng: 77.5946,
  },
  Madanapalle: {
    lat: 13.556,
    lng: 78.501,
  },
};

export const AddLand = () => {
  const [isMapReady, setIsMapReady] = useState(false);
  const [center, setCenter] = useState({
    lat: places["Ooty"]["lat"],
    lng: places["Ooty"]["lng"],
  });
  const [area, setArea] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [cordsStr, setCordsStr] = useState("");
  const [region, setRegion] = useState("Ooty");
  const [mapInstance, setMapInstance] = useState(null);

  const mapContainerStyle = {
    height: "400px",
    width: "800px",
  };

  const onPolylineComplete = (poly) => {
    let polyLine = poly.getPath();

    // Setting the area
    setArea(
      (google.maps.geometry.spherical.computeArea(polyLine) / 4047).toFixed(2)
    );

    toast.info("Please verify the calculated area!");

    var coordStr = "";
    for (var i = 0; i < polyLine.getLength(); i++)
      coordStr += polyLine.getAt(i).toUrlValue(6) + ";";

    logger(coordStr);
    setCordsStr(coordStr);
  };

  const handleOnCoordsSubmit = (e) => {
    e.preventDefault();
    const latLongData = new FormData(e.target);
    setCenter({
      lat: parseFloat(latLongData.get("latitude")),
      lng: parseFloat(latLongData.get("longitude")),
    });
  };

  useEffect(() => {
    setCenter(places[region]);
  }, [region]);

  const handlePlaceSelectChange = (e) => setRegion(e.target.value);

  const handleOnSNOSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // check if the entered serial no is valid or not
    const isValidSNO = async (id) => {
      const result = await API.graphql(
        graphqlOperation(getFarmer, { sno: id })
      );
      return result.data.getFarmer;
    };

    if (await isValidSNO(formData.get("sno"))) {
      setSerialNo(formData.get("sno"));
    } else toast.error("Invalid Serial No.");
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();

    const getMapUrl = () => {
      let staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap";
      const mapOptions = {
        center: mapInstance.getCenter(),
        zoom: mapInstance.getZoom(),
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        marker: true,
      };
      //Set the Google Map Center.
      staticMapUrl +=
        "?center=" + mapOptions.center.lat() + "," + mapOptions.center.lng();
      staticMapUrl += "&zoom=" + mapOptions.zoom;
      staticMapUrl += "&size=500x400";
      staticMapUrl +=
        "&path=color:0xff0000cd%7Cweight:3%7Cfillcolor:0x0000ff9a%7C";
      staticMapUrl += cordsStr.slice(0, -1).replaceAll(";", "|");
      staticMapUrl += "&maptype=" + mapOptions.mapTypeId;
      staticMapUrl += "&key=" + import.meta.env.VITE_GMAPS_API_KEY;
      return staticMapUrl;
    };

    const formData = new FormData(e.target);
    logger("Map Snapshot Link:");
    logger(getMapUrl());
    try {
      const result = await API.graphql(
        graphqlOperation(createLand, {
          input: {
            sno: serialNo,
            survey_no: formData.get("surveyno"),
            area: formData.get("area"),
            water_source: formData.get("watersource"),
            lat: mapInstance.getCenter().lat(),
            long: mapInstance.getCenter().lng(),
            poly: cordsStr,
            region: region,
            url: getMapUrl(),
          },
        })
      );
      logger(result);
      toast.success("Land added successfully");
    } catch (err) {
      logger(err);
      toast.error("Something went wrong, Please check the input values");
    }
  };

  // UI
  return (
    <div>
      <h1 className="text-2xl font-semibold mt-2 border-b-2 ">
        Farm Land Details:
      </h1>
      <div className="flex space-x-3">
        {/* Left Section */}
        <div>
          <h1 className="text-1xl text-green-600 mt-4 ">
            1. Navigate to the farmland:
          </h1>
          <div className="max-w-xs my-3">
            <div id="select">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Select City" />
              </div>
              <Select onChange={handlePlaceSelectChange}>
                {Object.entries(places).map(([place, v]) => (
                  <option key={place} value={place}>
                    {place}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          <p className=" text-slate-400">- Or -</p>
          <form onSubmit={handleOnCoordsSubmit}>
            <div className="flex mb-4 space-x-4 align-bottom">
              <CustomTextField
                type="number"
                stepValue={"any"}
                name="latitude"
                label="Enter Latitude"
                defaultValue={center.lat}
                key={center.lat}
              />
              <CustomTextField
                type="number"
                stepValue={"any"}
                name="longitude"
                label="Enter Longitude"
                defaultValue={center.lng}
                key={center.lng}
              />
            </div>
            <div className="mt-2 mb-4">
              <Button type="submit" size="xs">
                Search
              </Button>
            </div>
          </form>

          <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GMAPS_API_KEY}
            libraries={loadScriptArr}
          >
            <GoogleMap
              onLoad={(mapInst) => {
                setMapInstance(mapInst);
                mapInst.setMapTypeId("satellite");
                setInterval(function () {
                  setIsMapReady(true);
                }, 10);
                console.log("Map is ready");
              }}
              id="drawing-manager-example"
              mapContainerStyle={mapContainerStyle}
              zoom={18}
              center={center}
            >
              {isMapReady ? (
                <DrawingManager
                  className="invisible"
                  onPolylineComplete={onPolylineComplete}
                  drawingMode={"polyline"}
                />
              ) : (
                <div></div>
              )}
            </GoogleMap>
          </LoadScript>
          <div className="mt-2">
            <CustomTextField
              label={"Poly Line Co-Ordinates"}
              currValue={cordsStr}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-grow px-12">
          <h1 className="text-1xl text-green-600 mt-4">
            2. Enter farmland details:
          </h1>
          <form onSubmit={handleOnSNOSubmit}>
            <CustomTextField
              name={"sno"}
              label={"Serial No."}
              onChange={() => setSerialNo("")}
            />
            <div className="my-4">
              <Button type="submit" size="xs">
                Verify
              </Button>
            </div>
          </form>

          <fieldset
            disabled={!serialNo.length}
            style={{ opacity: serialNo.length ? 1 : 0.5 }}
            className="pt-4"
          >
            <form onSubmit={handleFinalSubmit}>
              <div className="border-t-2 ">
                <CustomTextField label={"Survey No."} name={"surveyno"} />
                <CustomTextField
                  type={"number"}
                  stepValue={"any"}
                  label={"Size in acres"}
                  name={"area"}
                  key={area}
                  defaultValue={area}
                />
                <div id="select">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="Water Source" />
                  </div>
                  <Select name="watersource" required={true}>
                    <option value="Rain Fed">Rain Fed</option>
                    <option value="Irrigated">Irrigated</option>
                  </Select>
                </div>

                <div className="my-4">
                  <Button size="md" type="submit">
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default AddLand;
