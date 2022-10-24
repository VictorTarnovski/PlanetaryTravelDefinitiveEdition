import axios from "axios";

export default async function GetSpecie(name: string) {
  let specieGet = await axios.get(
    `https://swapi.dev/api/people/?search=${name}`
  );
  let specieGetData = specieGet.data;
  if (specieGetData.count != 0) {
    let specieGetDataResults = specieGetData.results[0];
    let specieGetDataResultsSpecie = specieGetDataResults.species[0];
    console.log(specieGetDataResultsSpecie);
    return specieGetDataResultsSpecie;
  }
}
