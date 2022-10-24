import axios from "axios";
import { Request, Response } from "express";

export default async function GetPeople(req: Request, res: Response) {
  let axiosGet: any = await axios.get("https://swapi.dev/api/people/");
  let axiosGetData = axiosGet.data;
  res.json(axiosGetData);
}
