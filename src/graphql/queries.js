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
  query GetLand($sno: ID!) {
    getLand(sno: $sno) {
      sno
      survey_no
      lat
      long
      water_source
      url
      poly
      area
      region
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listLands = /* GraphQL */ `
  query ListLands(
    $sno: ID
    $filter: ModelLandFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLands(
      sno: $sno
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
