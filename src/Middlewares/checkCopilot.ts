import { NextFunction, Request, Response } from "express";
import GetName from "./Gets/getName";

export default async function CopilotExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let copilot = req.body.Copilot;
  let existingPilots: any;
  existingPilots = await GetName(copilot);
  if (copilot == existingPilots) {
    console.log("Found the Copilot on the API");
    next();
  } else {
    console.log("Did not found the Copilot on the API");
    res.status(404).json("Copilot does not exist on the SWAPI");
  }
}
