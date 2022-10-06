import { Request, Response } from "express";
import { CreateTravelService } from "../Services/CreateTravel";

export async function CreateTravelController(req: Request, res: Response) {
  console.log("Controller Accessed");
  let ControllerBody = req.body;
  CreateTravelService(ControllerBody);
  return res.status(200).json("Travel Created");
}
