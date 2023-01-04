import axios from "axios";
import { Request, Response } from "express";

let url = 'https://swapi.dev/api/people/?page='

export default async function GetPeople(req: Request, res: Response) {
  let pilots: any = []
  for (let index = 1; index < 10; index++) {
    let axiosGet: any = await axios.get(`${url}${index}`);
    let axiosGetPeopleArray = axiosGet.data.results
    for (let index = 0; index < axiosGetPeopleArray.length; index++) {
      const people = axiosGetPeopleArray[index];
      const peopleName = people.name
      pilots.push(peopleName)
    }
  }
  res.json(pilots);
}
