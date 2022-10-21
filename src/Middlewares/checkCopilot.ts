import { NextFunction, Request, Response } from "express";
import GetName from "./Gets/getName";

export default async function CopilotExists(req: Request, res: Response,next:NextFunction) {
  let copilot = req.body.Copilot;
  let existingPilots: any;
  existingPilots = await GetName(copilot);
    if (copilot == existingPilots) {
      console.log("Copiloto existe na SWAPI");
      next()
    } else {
      console.log("Copiloto não existe na SWAPI");
      res.status(404).json("Copilot does not exist on the SWAPI")
  }
  }

  
