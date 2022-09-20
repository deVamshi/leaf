import { GoogleMap, LoadScript, DrawingManager } from "@react-google-maps/api";
import { Button, Label, Select } from "flowbite-react";

import React, { useState } from "react";

import CustomTextField from "../components/custom_text_field";
const loadScriptArr = ["drawing"];

export const AddLand = () => {
  const [isMapReady, setIsMapReady] = useState(false);

  const mapContainerStyle = {
    height: "400px",
    width: "800px",
  };

  const center = {
    lat: 11.4102,
    lng: 76.695,
  };

  const mapOptions = {};

  const [polycoords, setpolycoords] = useState([]);

  const [polyLineDrawn, setPolyLineDrawn] = useState(true);

  // const onPolygonComplete = async (polygon) => {
  //   var polygonBounds = polygon.getPath();
  //   let currPoly = [];

  //   for (var i = 0; i < polygonBounds.length; i++) {
  //     var point = {
  //       lat: polygonBounds.getAt(i).lat(),
  //       lng: polygonBounds.getAt(i).lng(),
  //     };
  //     currPoly.push(point);
  //   }
  //   setIsMapReady(false);
  //   setpolycoords(currPoly);
  //   console.log(isMapReady);
  // };

  const onPolylineComplete = (poly) => {
    let polyLine = poly.getPath();
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
              <Select id="countries" required={true}>
                <option>Ooty</option>
                <option>Kothagiri</option>
                <option>Bangalore</option>
                <option>Jaipu</option>
              </Select>
            </div>
          </div>
          <p className=" text-slate-400">- Or -</p>
          <div className="flex mb-4 space-x-4 align-bottom">
            <CustomTextField label="Enter Latitude" />
            <CustomTextField label="Enter Longitude" />
          </div>

          <div className="mt-2 mb-4">
            <Button size="md">Search</Button>
          </div>

          <LoadScript
            googleMapsApiKey="AIzaSyC0obu5PB8s6Yoi73G9XtKXFnTAA8nmPxs"
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
          <CustomTextField label={"Area"} disabled={true} />

          <CustomTextField label={"Serial No."} />
          <div className="my-4">
            <Button size="md">Verify</Button>
          </div>

          <div className="border-t-2 ">
            <CustomTextField label={"Survey No."} />
            <CustomTextField label={"Size in acres"} />

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
              <Button size="md">Save</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLand;
