import { Request, Response } from "express";

import GetAllTravels from "../Services/GetAllTravels";

export async function GetAllTravelsController(req: Request, res: Response) {
  const travels = await GetAllTravels();
  return res
    .json(travels)
    .status(200);
}
