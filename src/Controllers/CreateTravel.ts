import { Request, Response } from "express";

import { CreateTravelService } from "../Services/CreateTravel";

export async function CreateTravelController(req: Request, res: Response) {
  let controllerBody = req.body;
  let travel = await CreateTravelService(controllerBody);
  return res
    .status(201)
    .send(travel);
}
