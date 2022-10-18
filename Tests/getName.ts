import axios from "axios";

export default async function GetName(name: string) {
  let nameGet = await axios.get(`https://swapi.dev/api/people/?search=${name}`)
  let nameGetData = nameGet.data;
  let nameGetDataResults = nameGetData.results[0];
  let nameGetDataResultsName = nameGetDataResults.name
  return nameGetDataResultsName;
}
