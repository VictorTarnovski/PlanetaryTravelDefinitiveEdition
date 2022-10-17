import { Request, Response } from "express";
import GetName from "../../Tests/getName";

export default async function PilotExists(req: Request, res: Response) {
  let looper = 1;
  let PilotExist: boolean = false;
  let Pilot = req.body.Pilot;
  let ExistingPilots: any;
  while (PilotExist == false) {
    ExistingPilots = await GetName(looper);
    if (Pilot == ExistingPilots) {
      console.log(Pilot + " é igual á " + ExistingPilots);
      PilotExist = true;
      res.status(200).json("Piloto existe na SWAPI");
      break;
    } else {
      console.log(Pilot + " não é igual á " + ExistingPilots);
      looper++;
      if (looper == 17) {
        looper = looper + 1;
      }
      if (looper > 83) {
        console.log("Piloto informado não existe na SWAPI");
        res.status(404).json("Piloto informado não existe na SWAPI");
        break;
      }
    }
  }
  return PilotExist;
}
