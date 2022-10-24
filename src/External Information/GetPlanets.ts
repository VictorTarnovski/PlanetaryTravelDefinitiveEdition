import axios from "axios";
import { Request, Response } from "express";

export default async function GetPlanets(req: Request, res: Response) {
  let axiosGet: any = await axios.get("https://swapi.dev/api/planets/");
  let axiosGetData = axiosGet.data;
  res.json(axiosGetData);
  console.log(axiosGetData);
}
