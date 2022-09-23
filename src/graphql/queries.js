/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFarmer = /* GraphQL */ `
  query GetFarmer($sno: ID!) {
    getFarmer(sno: $sno) {
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
export const listFarmers = /* GraphQL */ `
  query ListFarmers(
    $sno: ID
    $filter: ModelFarmerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFarmers(
      sno: $sno
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getLand = /* GraphQL */ `
  query GetLand($id: ID!) {
    getLand(id: $id) {
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
export const listLands = /* GraphQL */ `
  query ListLands(
    $filter: ModelLandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSample = /* GraphQL */ `
  query GetSample($id: ID!) {
    getSample(id: $id) {
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
export const listSamples = /* GraphQL */ `
  query ListSamples(
    $filter: ModelSampleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSamples(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCropManure = /* GraphQL */ `
  query GetCropManure($id: ID!) {
    getCropManure(id: $id) {
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
export const listCropManures = /* GraphQL */ `
  query ListCropManures(
    $filter: ModelCropManureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCropManures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSampleDetails = /* GraphQL */ `
  query GetSampleDetails($id: ID!) {
    getSampleDetails(id: $id) {
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
export const listSampleDetails = /* GraphQL */ `
  query ListSampleDetails(
    $filter: ModelSampleDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSampleDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSampleCategory = /* GraphQL */ `
  query GetSampleCategory($id: ID!) {
    getSampleCategory(id: $id) {
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
export const listSampleCategories = /* GraphQL */ `
  query ListSampleCategories(
    $filter: ModelSampleCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSampleCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSampleRemarks = /* GraphQL */ `
  query GetSampleRemarks($id: ID!) {
    getSampleRemarks(id: $id) {
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
export const listSampleRemarks = /* GraphQL */ `
  query ListSampleRemarks(
    $filter: ModelSampleRemarksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSampleRemarks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCropIO = /* GraphQL */ `
  query GetCropIO($id: ID!) {
    getCropIO(id: $id) {
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
export const listCropIOS = /* GraphQL */ `
  query ListCropIOS(
    $filter: ModelCropIOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCropIOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
