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
export const createLand = /* GraphQL */ `
  mutation CreateLand(
    $input: CreateLandInput!
    $condition: ModelLandConditionInput
  ) {
    createLand(input: $input, condition: $condition) {
      sno
      survey_no
      lat
      long
      water_source
      url
      poly
      area
      region
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateLand = /* GraphQL */ `
  mutation UpdateLand(
    $input: UpdateLandInput!
    $condition: ModelLandConditionInput
  ) {
    updateLand(input: $input, condition: $condition) {
      sno
      survey_no
      lat
      long
      water_source
      url
      poly
      area
      region
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteLand = /* GraphQL */ `
  mutation DeleteLand(
    $input: DeleteLandInput!
    $condition: ModelLandConditionInput
  ) {
    deleteLand(input: $input, condition: $condition) {
      sno
      survey_no
      lat
      long
      water_source
      url
      poly
      area
      region
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSample = /* GraphQL */ `
  mutation CreateSample(
    $input: CreateSampleInput!
    $condition: ModelSampleConditionInput
  ) {
    createSample(input: $input, condition: $condition) {
      sno
      card_no
      date_collected
      date_tested
      survey_no
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSample = /* GraphQL */ `
  mutation UpdateSample(
    $input: UpdateSampleInput!
    $condition: ModelSampleConditionInput
  ) {
    updateSample(input: $input, condition: $condition) {
      sno
      card_no
      date_collected
      date_tested
      survey_no
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSample = /* GraphQL */ `
  mutation DeleteSample(
    $input: DeleteSampleInput!
    $condition: ModelSampleConditionInput
  ) {
    deleteSample(input: $input, condition: $condition) {
      sno
      card_no
      date_collected
      date_tested
      survey_no
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCropManure = /* GraphQL */ `
  mutation CreateCropManure(
    $input: CreateCropManureInput!
    $condition: ModelCropManureConditionInput
  ) {
    createCropManure(input: $input, condition: $condition) {
      card_no
      crop
      manure
      dap
      urea
      mop
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCropManure = /* GraphQL */ `
  mutation UpdateCropManure(
    $input: UpdateCropManureInput!
    $condition: ModelCropManureConditionInput
  ) {
    updateCropManure(input: $input, condition: $condition) {
      card_no
      crop
      manure
      dap
      urea
      mop
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCropManure = /* GraphQL */ `
  mutation DeleteCropManure(
    $input: DeleteCropManureInput!
    $condition: ModelCropManureConditionInput
  ) {
    deleteCropManure(input: $input, condition: $condition) {
      card_no
      crop
      manure
      dap
      urea
      mop
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSampleDetails = /* GraphQL */ `
  mutation CreateSampleDetails(
    $input: CreateSampleDetailsInput!
    $condition: ModelSampleDetailsConditionInput
  ) {
    createSampleDetails(input: $input, condition: $condition) {
      card_no
      ph
      ec
      oc
      avn
      phos
      pot
      sulph
      zinc
      boron
      iron
      mangan
      copper
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSampleDetails = /* GraphQL */ `
  mutation UpdateSampleDetails(
    $input: UpdateSampleDetailsInput!
    $condition: ModelSampleDetailsConditionInput
  ) {
    updateSampleDetails(input: $input, condition: $condition) {
      card_no
      ph
      ec
      oc
      avn
      phos
      pot
      sulph
      zinc
      boron
      iron
      mangan
      copper
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSampleDetails = /* GraphQL */ `
  mutation DeleteSampleDetails(
    $input: DeleteSampleDetailsInput!
    $condition: ModelSampleDetailsConditionInput
  ) {
    deleteSampleDetails(input: $input, condition: $condition) {
      card_no
      ph
      ec
      oc
      avn
      phos
      pot
      sulph
      zinc
      boron
      iron
      mangan
      copper
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSampleCategory = /* GraphQL */ `
  mutation CreateSampleCategory(
    $input: CreateSampleCategoryInput!
    $condition: ModelSampleCategoryConditionInput
  ) {
    createSampleCategory(input: $input, condition: $condition) {
      card_no
      ph
      ec
      oc
      avn
      phos
      pot
      sulph
      zinc
      boron
      iron
      mangan
      copper
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSampleCategory = /* GraphQL */ `
  mutation UpdateSampleCategory(
    $input: UpdateSampleCategoryInput!
    $condition: ModelSampleCategoryConditionInput
  ) {
    updateSampleCategory(input: $input, condition: $condition) {
      card_no
      ph
      ec
      oc
      avn
      phos
      pot
      sulph
      zinc
      boron
      iron
      mangan
      copper
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSampleCategory = /* GraphQL */ `
  mutation DeleteSampleCategory(
    $input: DeleteSampleCategoryInput!
    $condition: ModelSampleCategoryConditionInput
  ) {
    deleteSampleCategory(input: $input, condition: $condition) {
      card_no
      ph
      ec
      oc
      avn
      phos
      pot
      sulph
      zinc
      boron
      iron
      mangan
      copper
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSampleRemarks = /* GraphQL */ `
  mutation CreateSampleRemarks(
    $input: CreateSampleRemarksInput!
    $condition: ModelSampleRemarksConditionInput
  ) {
    createSampleRemarks(input: $input, condition: $condition) {
      card_no
      ph
      ec
      oc
      avn
      phos
      pot
      sulph
      zinc
      boron
      iron
      mangan
      copper
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSampleRemarks = /* GraphQL */ `
  mutation UpdateSampleRemarks(
    $input: UpdateSampleRemarksInput!
    $condition: ModelSampleRemarksConditionInput
  ) {
    updateSampleRemarks(input: $input, condition: $condition) {
      card_no
      ph
      ec
      oc
      avn
      phos
      pot
      sulph
      zinc
      boron
      iron
      mangan
      copper
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSampleRemarks = /* GraphQL */ `
  mutation DeleteSampleRemarks(
    $input: DeleteSampleRemarksInput!
    $condition: ModelSampleRemarksConditionInput
  ) {
    deleteSampleRemarks(input: $input, condition: $condition) {
      card_no
      ph
      ec
      oc
      avn
      phos
      pot
      sulph
      zinc
      boron
      iron
      mangan
      copper
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCropIO = /* GraphQL */ `
  mutation CreateCropIO(
    $input: CreateCropIOInput!
    $condition: ModelCropIOConditionInput
  ) {
    createCropIO(input: $input, condition: $condition) {
      serial
      crop
      period
      seed
      sdate
      hdate
      yield
      human
      animal
      machine
      scost
      fert
      protection
      irrigation
      interest
      fixed
      managerial
      total
      fert_kg
      manure_kg
      pest_ltr
      weed_ltr
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCropIO = /* GraphQL */ `
  mutation UpdateCropIO(
    $input: UpdateCropIOInput!
    $condition: ModelCropIOConditionInput
  ) {
    updateCropIO(input: $input, condition: $condition) {
      serial
      crop
      period
      seed
      sdate
      hdate
      yield
      human
      animal
      machine
      scost
      fert
      protection
      irrigation
      interest
      fixed
      managerial
      total
      fert_kg
      manure_kg
      pest_ltr
      weed_ltr
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCropIO = /* GraphQL */ `
  mutation DeleteCropIO(
    $input: DeleteCropIOInput!
    $condition: ModelCropIOConditionInput
  ) {
    deleteCropIO(input: $input, condition: $condition) {
      serial
      crop
      period
      seed
      sdate
      hdate
      yield
      human
      animal
      machine
      scost
      fert
      protection
      irrigation
      interest
      fixed
      managerial
      total
      fert_kg
      manure_kg
      pest_ltr
      weed_ltr
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
