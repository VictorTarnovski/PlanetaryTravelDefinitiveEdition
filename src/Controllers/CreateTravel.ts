import { Request, Response } from "express";

import { CreateTravelService } from "../Services/CreateTravel";

export async function CreateTravelController(req: Request, res: Response) {
  console.log("Create Travel Accessed");
  let controllerBody = req.body;
  CreateTravelService(controllerBody);
  return res.status(200).json("Travel Created");
}
