import React from "react";
import CustomTextField from "./custom_text_field";

import { Button, Table } from "flowbite-react";

const SampleDetails = () => {
  const buildRow = (rowLabel) => {
    return (
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {rowLabel}
        </Table.Cell>
        <Table.Cell>
          <CustomTextField />
        </Table.Cell>
        <Table.Cell>
          <CustomTextField />
        </Table.Cell>
        <Table.Cell>
          <CustomTextField />
        </Table.Cell>
      </Table.Row>
    );
  };

  const rowLabels = [
    "pH",
    "EC(mS/cm)",
    "MACRO NUTRIENTS",
    "OC(%)",
    "AvN(kg/ha)",
    "Phos(kg/ha)",
    "Pot(kg/ha)",
    "Sulph(mg/kg)",
    "MICRO NUTRIENTS",
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

      <div>
        <div className="flex mb-4 space-x-4 align-bottom">
          <CustomTextField label="Serial No." />
          <CustomTextField label="Survery No." />
          <div className="self-end mb-3">
            <Button size="sm">Verify</Button>
          </div>
        </div>

        <div className="flex space-x-5  pb-3">
          <div className="flex-grow max-w-xs">
            <CustomTextField label="Serial No." />
          </div>
          <div className="flex-grow max-w-xs">
            <CustomTextField label="Serial No." />
          </div>
          <div className="flex-grow max-w-xs">
            <CustomTextField label="Serial No." />
          </div>
        </div>

        {/* Crop Related Info */}

        {/* <h2 className="my-2 text-green-700">Crop Info:</h2> */}

        <div className="flex space-x-5">
          <div className="flex-grow max-w-xs">
            <CustomTextField label="Serial No." />
          </div>
          <div className="flex-grow max-w-xs">
            <CustomTextField label="Serial No." />
          </div>
          <div className="flex-grow max-w-xs">
            <CustomTextField label="Serial No." />
          </div>
          <div className="flex-grow max-w-xs">
            <CustomTextField label="Serial No." />
          </div>
        </div>

        {/* Buld Details */}
        {bulkDetails()}
        <div className="flex justify-between my-4 px-2">
          <Button size="sm">Verify</Button>

          <Button size="sm" color={"gray"} outline>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SampleDetails;
