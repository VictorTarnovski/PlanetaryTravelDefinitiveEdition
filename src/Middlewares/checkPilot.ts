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
    console.log("Found the Pilot on the API!");
    next();
  } else {
    console.log("Did not found the Pilot on the API");
    res.status(404).json("Pilot does not exist on the SWAPI");
  }
}
