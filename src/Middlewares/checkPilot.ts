import { NextFunction, Request, Response } from "express";
import GetName from "./Gets/getName";

export default async function PilotExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let pilot = req.body.Pilot;
  let existingPilots: any;
  existingPilots = await GetName(pilot);
  if (pilot == existingPilots) {
    console.log("Piloto existe na SWAPI");
    next();
  } else {
    console.log("Piloto não existe na SWAPI");
    res.status(404).json("Pilot does not exist on the SWAPI");
  }
}
