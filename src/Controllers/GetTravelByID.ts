import { Request, Response } from "express";

import GetTravelByID from "../Services/GetTravelByID";

export async function GetTravelbyIDController(req: Request, res: Response) {
  const travelID = req.params.id;
  const travelByID = await GetTravelByID(travelID);
  return res
    .json(travelByID)
    .status(200);
}
