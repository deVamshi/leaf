import React, { useState } from "react";
import CustomTextField from "./custom_text_field";

import { Button, Table } from "flowbite-react";
import { logger } from "../helper";

const permissibleValues = {
  pH: { low: 6.5, high: 8.0 },
  "EC(mS/cm)": { low: 0.8, high: 2.5 },
  "MACRO NUTRIENTS": { low: 6.5, high: 8.0 }, // ask sir for these values
  "OC(%)": { low: 0.4, high: 0.75 },
  "AvN(kg/ha)": { low: 240.0, high: 480.0 },
  "Phos(kg/ha)": { low: 11, high: 22 },
  "Pot(kg/ha)": { low: 110.0, high: 280.0 },
  "Sulph(mg/kg)": { low: 10, high: 20 },
  "MICRO NUTRIENTS": { low: 6.5, high: 8.0 }, // again this
  "Zinc(mg/kg)": { low: 1.0, high: 3.0 },
  "Boron(mg/kg)": { low: 0.5, high: 1.0 },
  "Iron(mg/kg)": { low: 4.5, high: 9.0 },
  "Mangan(mg/kg)": { low: 1.0, high: 2.0 },
  "Copper(mg/kg)": { low: 0.2, high: 1.0 },
};

const SampleDetails = () => {
  const [nutriValue, setNutriValue] = useState({});

  const calcCategory = (category) => {
    const inputValue = nutriValue[category];
    if (inputValue == undefined || inputValue == "") return "";

    const limits = permissibleValues[category];
    let calculatedCategoy = "medium";
    if (inputValue < limits.low) calculatedCategoy = "low";
    if (inputValue > limits.high) calculatedCategoy = "high";

    return calculatedCategoy;
  };

  const buildRow = (rowLabel) => {
    return (
      <Table.Row
        key={rowLabel}
        className="bg-white dark:border-gray-700 dark:bg-gray-800"
      >
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {rowLabel}
        </Table.Cell>
        <Table.Cell>
          <CustomTextField
            name={(1 + rowLabel).toString()}
            key={(1 + rowLabel).toString()}
            type="number"
            stepValue={"any"}
            onChange={(e) => {
              const updateNutriValue = {};
              for (const key in nutriValue)
                updateNutriValue[key] = nutriValue[key];
              updateNutriValue[rowLabel] = e.target.value;
              setNutriValue(updateNutriValue);
            }}
          />
        </Table.Cell>
        <Table.Cell>
          <CustomTextField
            id={(2 + rowLabel).toString()}
            name={(2 + rowLabel).toString()}
            defaultValue={calcCategory(rowLabel)}
            key={nutriValue[rowLabel]}
          />
        </Table.Cell>
        <Table.Cell>
          <CustomTextField name={(3 + rowLabel).toString()} />
        </Table.Cell>
      </Table.Row>
    );
  };

  const rowLabels = [
    "pH",
    "EC(mS/cm)",
    // "MACRO NUTRIENTS",
    "OC(%)",
    "AvN(kg/ha)",
    "Phos(kg/ha)",
    "Pot(kg/ha)",
    "Sulph(mg/kg)",
    // "MICRO NUTRIENTS",
    "Zinc(mg/kg)",
    "Boron(mg/kg)",
    "Iron(mg/kg)",
    "Mangan(mg/kg)",
    "Copper(mg/kg)",
  ];

  const bulkDetails = () => {
    return (
      <div className="mt-6">
        <Table>
          <Table.Head>
            <Table.HeadCell>Parameter</Table.HeadCell>
            <Table.HeadCell>Value</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Recommendations</Table.HeadCell>
          </Table.Head>
          {rowLabels.map((label) => buildRow(label))}
          <Table.Body className="divide-y"></Table.Body>
        </Table>
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mt-2 mb-6">
        Enter Sample Details:
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const fD = new FormData(e.target);

          const sampleTable = {
            sno: fD.get("sno"),
            card_no: fD.get("card_no"),
            date_collected: fD.get("date_collected"),
            date_tested: fD.get("date_tested"),
            survey_no: fD.get("survey_no"),
          };

          const cropManureTable = {
            card_no: fD.get("card_no"),
            crop: fD.get("crop"),
            manure: fD.get("manure"),
            dap: fD.get("dap"),
            urea: fD.get("urea"),
            mop: fD.get("mop"),
          };

          const threeTables = [];

          for (let i = 1; i < 4; i++) {
            const data = {
              card_no: fD.get("card_no"),
              ph: fD.get((i + "pH").toString()),
              ec: fD.get((i + "EC(mS/cm)").toString()),
              oc: fD.get((i + "OC(%)").toString()),
              avn: fD.get((i + "AvN(kg/ha)").toString()),
              phos: fD.get((i + "Phos(kg/ha)").toString()),
              pot: fD.get((i + "Pot(kg/ha)").toString()),
              sulph: fD.get((i + "Sulph(mg/kg)").toString()),
              zinc: fD.get((i + "Zinc(mg/kg)").toString()),
              boron: fD.get((i + "Boron(mg/kg)").toString()),
              iron: fD.get((i + "Iron(mg/kg)").toString()),
              mangan: fD.get((i + "Mangan(mg/kg)").toString()),
              copper: fD.get((i + "Copper(mg/kg)").toString()),
            };
            if (i == 1) {
              for (const key in data) {
                if (key != undefined && key != "" && key != "card_no")
                  data[key] = parseFloat(data[key]);
              }
            }
            threeTables.push(data);
          }

          logger(sampleTable);
          logger(cropManureTable);
          logger(threeTables);
        }}
      >
        <div>
          <div className="flex mb-4 space-x-4 align-bottom">
            <CustomTextField name={"sno"} label="Serial No." required />
            <CustomTextField name={"survey_no"} label="Survery No." />
            <div className="self-end mb-3">
              <Button size="sm">Verify</Button>
            </div>
          </div>

          <div className="flex space-x-5  pb-3">
            <div className="flex-grow max-w-xs">
              <CustomTextField
                name={"card_no"}
                label="Health Card No."
                required
              />
            </div>
            <div className="flex-grow max-w-xs">
              <CustomTextField
                name={"date_collected"}
                label="Sample Collected Date:"
              />
            </div>
            <div className="flex-grow max-w-xs">
              <CustomTextField
                name={"date_tested"}
                label="Sample Tested On:"
                required
              />
            </div>
          </div>

          {/* Crop Related Info */}

          {/* <h2 className="my-2 text-green-700">Crop Info:</h2> */}

          <div className="flex space-x-5">
            <div className="flex-grow max-w-xs">
              <CustomTextField name={"crop"} label="Crop:" />
            </div>
            <div className="flex-grow max-w-xs">
              <CustomTextField name={"manure"} label="Manure tonnes/acre" />
            </div>
            <div className="flex-grow max-w-xs">
              <CustomTextField name={"dap"} label="DAP kg/acre" />
            </div>
            <div className="flex-grow max-w-xs">
              <CustomTextField name={"urea"} label="Urea kg/acre" />
            </div>
            <div className="flex-grow max-w-xs">
              <CustomTextField name={"mop"} label="MOP kg/acre" />
            </div>
          </div>

          {/* Buld Details */}
          {bulkDetails()}
          <div className="flex justify-between my-4 px-2">
            <Button type="submit" size="sm">
              Verify
            </Button>
            <Button size="sm" color={"gray"} outline>
              Reset
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SampleDetails;
