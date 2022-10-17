import axiosGet from "axios";

export default async function GetName() {
    console.log("GetName Controller Acessado")
    let nameGet = await axiosGet('https://swapi.dev/api/people/1/');
    let nameGetData = nameGet.data;
    let nameGetDataName = nameGetData.name;
    console.log("Saído do axiosGet")
    console.log(nameGetDataName);
    return(nameGetDataName)
}