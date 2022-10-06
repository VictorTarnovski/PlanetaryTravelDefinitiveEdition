import { Request, Response } from "express";
import { CreateTravelService } from "../Services/CreateTravel";

export async function CreateTravelController(req: Request, res: Response) {
  console.log("Controller acessado");
  let ControllerBody = req.body;
  res.send(ControllerBody);
}
