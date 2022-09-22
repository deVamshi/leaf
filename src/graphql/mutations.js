/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFarmer = /* GraphQL */ `
  mutation CreateFarmer(
    $input: CreateFarmerInput!
    $condition: ModelFarmerConditionInput
  ) {
    createFarmer(input: $input, condition: $condition) {
      sno
      name
      address
      village
      sub_district
      district
      pin
      aaddhar_no
      mobile
      daeo
      createdAt
      updatedAt
      owner
    }
  }
`;

export const updateFarmer = /* GraphQL */ `
  mutation UpdateFarmer(
    $input: UpdateFarmerInput!
    $condition: ModelFarmerConditionInput
  ) {
    updateFarmer(input: $input, condition: $condition) {
      sno
      name
      address
      village
      sub_district
      district
      pin
      aaddhar_no
      mobile
      daeo
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteFarmer = /* GraphQL */ `
  mutation DeleteFarmer(
    $input: DeleteFarmerInput!
    $condition: ModelFarmerConditionInput
  ) {
    deleteFarmer(input: $input, condition: $condition) {
      sno
      name
      address
      village
      sub_district
      district
      pin
      aaddhar_no
      mobile
      daeo
      createdAt
      updatedAt
      owner
    }
  }
`;
