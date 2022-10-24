import { Request, Response } from "express";

import GetTravelByID from "../Services/GetTravelByID";

export async function GetTravelbyIDController(req: Request, res: Response) {
  console.log("Get Travels Controller Acessed");
  const travelID = req.params.id;
  const travelByID = await GetTravelByID(travelID);
  return res.json(travelByID).status(200);
}
