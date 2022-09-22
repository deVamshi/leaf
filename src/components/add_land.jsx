import { GoogleMap, LoadScript, DrawingManager } from "@react-google-maps/api";
import { Button, Label, Select, Toast } from "flowbite-react";
import { logger } from "../helper";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { HiCheckCircle } from "react-icons/hi";

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

  const mapContainerStyle = {
    height: "400px",
    width: "800px",
  };

  const mapOptions = {};

  const [polycoords, setpolycoords] = useState([]);

  const onPolylineComplete = (poly) => {
    let polyLine = poly.getPath();

    // Setting the area
    setArea(
      (google.maps.geometry.spherical.computeArea(polyLine) / 4047).toFixed(2)
    );

    toast.info("Please verify the calculated area!", {
      position: "top-center",
    });

    let currPoly = [];

    for (var i = 0; i < polyLine.length - 1; i++) {
      var point = {
        lat: polyLine.getAt(i).lat(),
        lng: polyLine.getAt(i).lng(),
      };
      currPoly.push(point);
    }
    // setpolycoords(currPoly);
    console.log(currPoly);
  };

  const handleOnCoordsSubmit = (e) => {
    e.preventDefault();
    const latLongData = new FormData(e.target);
    setCenter({
      lat: parseFloat(latLongData.get("latitude")),
      lng: parseFloat(latLongData.get("longitude")),
    });
  };

  const handlePlaceSelectChange = (e) => {
    setCenter(places[e.target.value]);
  };

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
                name="latitude"
                label="Enter Latitude"
              />
              <CustomTextField
                type="number"
                name="longitude"
                label="Enter Longitude"
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
                mapInst.setMapTypeId("satellite");
                setInterval(function () {
                  setIsMapReady(true);
                }, 10);
                console.log("Map is ready");
              }}
              options={mapOptions}
              id="drawing-manager-example"
              mapContainerStyle={mapContainerStyle}
              zoom={18}
              center={center}
            >
              {isMapReady ? (
                <DrawingManager
                  className="invisible"
                  onPolylineComplete={onPolylineComplete}
                  // {onPolylineComplete}
                  drawingMode={"polyline"}
                />
              ) : (
                <div></div>
              )}
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Right Section */}
        <div className="flex-grow px-12">
          <h1 className="text-1xl text-green-600 mt-4">
            2. Enter farmland details:
          </h1>
          <CustomTextField label={"Serial No."} />
          <div className="my-4">
            <Button size="xs">Verify</Button>
          </div>

          <div className="border-t-2 ">
            <CustomTextField label={"Survey No."} />
            <CustomTextField label={"Size in acres"} defaultValue={area} />

            <div id="select">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Water Source" />
              </div>
              <Select id="countries" required={true}>
                <option>Rain Fed</option>
                <option>Irrigated</option>
              </Select>
            </div>

            <div className="my-4">
              <Button size="md">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLand;
