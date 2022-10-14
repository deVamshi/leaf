import React from "react";
import { Label, TextInput, Checkbox, Button, Card } from "flowbite-react";
import { logger } from "../helper";
import { API, graphqlOperation } from "aws-amplify";
import { createCropIO } from "../graphql/mutations";
import { toast } from "react-toastify";

function CostDetails() {
  
  const getInsideTitle = (title) => {
    return <span className="text-xl text-green-500 mt-2">{title}:</span>;
  };

  const getTextField = (label, name, required) => {
    return (
      <div>
        <div className="mb-2 block">
          <Label value={label} />
        </div>
        <TextInput name={name} placeholder="" required={required} />
      </div>
    );
  };

  // OOT263
  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = {};
    const fD = new FormData(e.target);
    fD.forEach((val, key) => {
      finalData[key] = val;
    });

    try {
      const result = await API.graphql(
        graphqlOperation(createCropIO, {
          input: finalData,
        })
      );
      // logger(result);
      toast.success("Successfully added crop details");
    } catch (err) {
      logger(err);
      const msg = "Something went wrong while submitting cost details";
      toast.error(msg);
    }
    logger(finalData);
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-semibold mt-2 mb-6">
        Enter Cultivation Cost Details:
      </h1>

      <Card>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label value="Serial No:" />
            </div>
            <TextInput name="serial" placeholder="" required={true} />
          </div>
          {getInsideTitle("Crop Details")}
          {getTextField("Crop", "crop")}
          {getTextField("Growth Period", "period")}
          {getTextField("Seed in kg/acre", "scost")}
          {getTextField("Sowing Date", "sdate")}
          {getTextField("Expected Harvest Date", "hdate")}
          {getTextField("Yield/Acre", "yield")}
          {/* // New Section */}
          {getInsideTitle("Operational Cost")}
          {getTextField("Human Labour", "human")}
          {getTextField("Animal Labour", "animal")}
          {getTextField("Machine Power", "machine")}
          {getTextField("Seed", "seed")}
          {getTextField("Fertilizers & Manure", "fert")}
          {getTextField("Crop Protection Charges", "protection")}
          {getTextField("Irrigation Charges Charges", "irrigation")}
          {getTextField("Interest on working capital", "interest")}
          {/* // New Section */}
          {getInsideTitle("Fixed Cost")}
          {getTextField("Fixed Cost", "fixed", true)}
          {getTextField("Sub Total (Operational Cost)")}
          {getTextField("Managerial Cost", "managerial")}
          {getTextField("Total Cost", "total")}
          {/* // New Section */}
          {getInsideTitle("Fert & Manure Details")}
          {getTextField("Fertilizer in kg/acre", "fert_kg")}
          {getTextField("Manure in kg/acre", "manure_kg")}
          {getTextField("Pesticide in ltrs/acre", "pest_ltr")}
          {getTextField("Weedicide in ltrs/acre", "weed_ltr")}
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
