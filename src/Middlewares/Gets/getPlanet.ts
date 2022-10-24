import axios from "axios";

export default async function GetPlanet(name: string) {
  let planetGet = await axios.get(
    `https://swapi.dev/api/people/?search=${name}`
  );
  let planetGetData = planetGet.data;
  if (planetGetData.count != 0) {
    let planetGetDataResults = planetGetData.results[0];
    let planetGetDataResultsName = planetGetDataResults.name;
    return planetGetDataResultsName;
  }
}
