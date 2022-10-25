import { Request, Response } from "express";

import { CreateTravelService } from "../Services/CreateTravel";

export async function CreateTravelController(req: Request, res: Response) {
  let controllerBody = req.body;
  let travelID = await CreateTravelService(controllerBody);
  return res
    .status(200)
    .send(`Travel created with the ID: ${travelID}`);
}