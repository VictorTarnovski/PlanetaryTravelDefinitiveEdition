import axiosGet from "axios";

export default async function GetName(looper: Number) {
  let nameGet = await axiosGet(`https://swapi.dev/api/people/${looper}/`);
  let nameGetData = nameGet.data;
  let nameGetDataName = nameGetData.name;
  return nameGetDataName;
}
