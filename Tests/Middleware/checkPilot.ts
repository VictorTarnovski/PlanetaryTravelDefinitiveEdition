import { Request, Response } from "express";
import GetName from "../../Tests/getName";

export default async function PilotExists(req: Request, res: Response) {
  let PilotExist: boolean = false;
  let Pilot = req.body.Pilot;
  let ExistingPilots: any;
  while (PilotExist == false) {
    ExistingPilots = await GetName(Pilot);
    if (Pilot == ExistingPilots) {
      console.log("Encontrei o piloto")
      PilotExist = true;
      res.status(200).json("Piloto existe na SWAPI");
      break;
    } else {
      console.log("Não encontrei o piloto");
      }
  }
  return PilotExist;
  }
  
