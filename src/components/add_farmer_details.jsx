import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createFarmer } from "../graphql/mutations";
import { listFarmers } from "../graphql/queries";
import { Label, TextInput, Button, Card } from "flowbite-react";

function AddFarmerDetails() {
  const addFarmerDetails = async (formData) => {
    const result = await API.graphql(
      graphqlOperation(createFarmer, {
        input: {
          sno: formData.get("serialno"),
          name: formData.get("name"),
          daeo: formData.get("daeo"),
          address: formData.get("address"),
          village: formData.get("village"),
          sub_district: formData.get("subdistrict"),
          district: formData.get("district"),
          pin: formData.get("pincode"),
          aaddhar_no: formData.get("idproof"),
          mobile: formData.get("mobile"),
        },
      })
    );

    console.log("Creation of add farmer details done");
    console.log(result);
  };

  const buildInputField = (label, name, required) => {
    return (
      <div>
        <div className="mb-2 block">
          <Label value={label} />
        </div>
        <TextInput name={name} required={required} />
      </div>
    );
  };

  const getAllFarmers = async () => {
    const result = await API.graphql(graphqlOperation(listFarmers));
    console.log("List of all farmers:");
    console.log(result);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    addFarmerDetails(data);
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-semibold mt-2 mb-6">Add Farmer Details:</h1>
      <Card>
        <form className="flex flex-col gap-4" onSubmit={handleSumbit}>
          {buildInputField("Serial No:", "serialno", true)}
          {buildInputField("Farmer Name:", "name", true)}
          {buildInputField("DAEO Name:", "daeo", true)}
          {buildInputField("Address:", "address", true)}
          {buildInputField("Village:", "village", true)}
          {buildInputField("Sub-District:", "subdistrict", true)}
          {buildInputField("District:", "district", true)}
          {buildInputField("Pincode:", "pincode", true)}
          {buildInputField("ID Proof No:", "idproof", true)}
          {buildInputField("Mobile No:", "mobile", true)}
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddFarmerDetails;
