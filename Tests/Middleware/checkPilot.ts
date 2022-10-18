import { Request, Response } from "express";
import GetName from "../../Tests/getName";

export default async function PilotExists(req: Request, res: Response) {
  let PilotExist: boolean = false;
  let Pilot = req.body.Pilot;
  let ExistingPilots: any;
  while (PilotExist == false) {
    ExistingPilots = await GetName(Pilot);
    if (Pilot == ExistingPilots) {
      PilotExist = true;
      res.status(200).json("Piloto existe na SWAPI");
      break;
    } else {
      res.status(404).json("Piloto não existe na SWAPI");
      break;
      }
  }
  return PilotExist;
  }
  
