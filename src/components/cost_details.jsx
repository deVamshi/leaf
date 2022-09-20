import React from "react";
import { Label, TextInput, Checkbox, Button, Card } from "flowbite-react";

function CostDetails() {
  const getInsideTitle = (title) => {
    return <span className="text-xl text-green-500 mt-2">{title}:</span>;
  };

  const getTextField = (label) => {
    return (
      <div>
        <div className="mb-2 block">
          <Label value={label} />
        </div>
        <TextInput placeholder="" required={true} />
      </div>
    );
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-semibold mt-2 mb-6">
        Enter Cultivation Cost Details:
      </h1>

      <Card>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Serial No:" />
            </div>
            <TextInput id="serialno" placeholder="" required={true} />
          </div>
          {getInsideTitle("Crop Details")}
          {getTextField("Crop")}
          {getTextField("Growth Period")}
          {getTextField("Seed in kg/acre")}
          {getTextField("Sowing Date")}
          {getTextField("Expected Harvest Date")}
          {getTextField("Yield/Acre")}

          {/* // New Section */}
          {getInsideTitle("Operational Cost")}
          {getTextField("Human Labour")}
          {getTextField("Animal Labour")}
          {getTextField("Seed")}
          {getTextField("Fertilizers & Manure")}
          {getTextField("Crop Protection Charges")}
          {getTextField("Irrigation Charges Charges")}
          {getTextField("Interest on working capital")}
          {/* // New Section */}
          {getInsideTitle("Fixed Cost")}
          {getTextField("Fixed Cost")}
          {getTextField("Sub Total (Operational Cost)")}
          {getTextField("Managerial Cost")}
          {getTextField("Total Cost")}
          {/* // New Section */}
          {getInsideTitle("Fert & Manure Details")}
          {getTextField("Fertilizer in kg/acre")}
          {getTextField("Manure in kg/acre")}
          {getTextField("Pesticide in ltrs/acre")}
          {getTextField("Weedicide in ltrs/acre")}
          <div className="flex space-x-4">
            <Button type="submit">Submit</Button>
            <Button color={"light"}>Reset</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default CostDetails;
