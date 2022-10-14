import { jitteredBackoff } from "@aws-amplify/core";
import React from "react";
import { takeScreenShot } from "../helper";
import "./health_card.css";
import logoImage from "../assets/logo.png";
const HealthCard = () => {
  const imageLink =
    "https://maps.googleapis.com/maps/api/staticmap?center=11.4740766504398,76.6138330272111&zoom=18&size=500x400&path=color:0xff0000cd%7Cweight:3%7Cfillcolor:0x0000ff9a%7C11.474087,76.613822|11.474492,76.613903|11.473782,76.614922|11.473483,76.614665|11.474077,76.613833&maptype=satellite&key=AIzaSyC0obu5PB8s6Yoi73G9XtKXFnTAA8nmPxs";

  const soilResultTitles = [
    "pH",
    "EC (mS/cm)",
    "Organic Carbon - OC (%)	",
    "Nitrogen - N (Kg/ha)",
    "Phosporous - P (Kg/ha)",
    "Potassium - K (Kg/ha)",
    "Sulphur - S (Mg/kg)",
    "Zinc - Zn (Mg/kg)",
    "Boron - B (Mg/kg)",
    "Iron - Fe (Mg/kg)",
    "Manganese - Mn (Mg/kg)",
    "Copper - Cu (Mg/kg)",
  ];

  const title = (title) => {
    return (
      <h2 className="p-2 my-2 bg-blue-500 text-center    text-lg font-bold">
        {title}
      </h2>
    );
  };

  const soilResultRow = (sno, parameter, value, rating) => {
    return (
      <tr key={sno} style={{ width: "100%" }}>
        <td>{sno}</td>
        <td style={{ width: "70%" }}>{parameter}</td>
        <td>
          <input
            className="px-2 py-1 bg-blue w-24"
            defaultValue={value}
          ></input>
        </td>
        <td>
          <input className="px-2 py-1 w-36 " defaultValue={rating}></input>
        </td>
      </tr>
    );
  };

  const soilResultTable = () => {
    return (
      <table style={{ width: "100%" }} className="max-w-md">
        <thead>
          <tr>
            <th>Sno</th>
            <th style={{ width: "70%" }}>Parameter</th>
            <th>Value</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {soilResultTitles.map((title, ind) => {
            return soilResultRow(ind + 1, title, 4.6, "low");
          })}
        </tbody>
      </table>
    );
  };

  const threeColumnTable = (c1, c2, c3) => {
    return (
      <table style={{ width: "100%" }} className=" my-2">
        <thead>
          <tr>
            <th>{c1}</th>
            <th style={{ width: "70%" }}>{c2}</th>
            <th>{c3}</th>
          </tr>
        </thead>
        <tbody>
          {soilResultTitles.slice(0, 4).map((title, ind) => {
            return threeColumnDataRow(ind + 1, title, 4.7);
          })}
        </tbody>
      </table>
    );
  };

  const threeColumnDataRow = (c1, c2, c3) => {
    return (
      <tr key={c1}>
        <td>{c1}</td>
        <td>{c2}</td>
        <td>
          <input className="px-2 py-1 w-14 " defaultValue={c3}></input>
        </td>
      </tr>
    );
  };

  const rowTemplate = (firstTit, firstVal, secTit, secVal) => {
    const rowClas = "px-2 py-1 w-36";
    return (
      <tr>
        <td>{firstTit}</td>
        <td>
          <input className={rowClas} defaultValue={firstVal} />
        </td>
        <td>{secTit}</td>
        <td>
          <input className={rowClas} defaultValue={secVal} />
        </td>
      </tr>
    );
  };

  const farmerDetailsTable = () => {
    return (
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input
                className="px-2 py-1 w-36"
                defaultValue={"Charles"}
              ></input>
            </td>
          </tr>
          {rowTemplate("Village", "3jfeowi", "Pin", "fejoj")}
          {rowTemplate("Sub-District", "3jfeowi", "District", "fejoj")}
          {rowTemplate("ID Proof No", "3jfeowi", "Mobile", "fejoj")}
        </tbody>
      </table>
    );
  };

  const sampleDetails = () => {
    return (
      <table style={{ width: "100%" }}>
        <tbody>
          {rowTemplate("Sample Tested", "3jfeowi", "Crop", "fejoj")}
          {rowTemplate("Survery No", "3jfeowi", "Farm Size", "fejoj")}
          {rowTemplate("Latitude", "3jfeowi", "Longitude", "fejoj")}
        </tbody>
      </table>
    );
  };

  const docDetails = () => {
    return (
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ width: "40%" }}>Card No</td>
            <td>
              <input
                defaultValue={"Charles"}
                className="w-36 px-2 py-1"
              ></input>
            </td>
          </tr>
          {rowTemplate("Credit Ref #", "3jfeowi", "NBFC Name", "fejoj")}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <button
        onClick={() => {
          takeScreenShot("health-card");
        }}
      >
        Take Screen Shot
      </button>
      <div id="link"></div>
      <div className="max-w-fit bg-green-100 flex" id="health-card">
        <div className="basis-1/3 max-w-xl p-2">
          <img className="block mx-auto mb-2" src={logoImage} />
          {title("Soil Health Card")}
          {docDetails()}
          {title("Farmer Details")}
          {farmerDetailsTable()}
          {title("Sample Details")}
          {sampleDetails()}
          <img src={imageLink} />
        </div>
        <div className="basis-2/3   p-2">
          {title("Soil Details")}
          {soilResultTable()}
          {threeColumnTable("Sno", "Test Recommendations", "Kg/Acre")}
          {threeColumnTable("Sno", " Recommendations", "Kg/Acre")}
        </div>
      </div>
    </div>
  );
};

export default HealthCard;
