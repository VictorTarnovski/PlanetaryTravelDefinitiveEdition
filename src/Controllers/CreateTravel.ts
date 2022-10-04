import { Request, Response } from "express";
import { CreateTravelService } from "../Services/CreateTravel";

export async function CreateTravelController(req: Request, res: Response) {
  const { Starship, Pilot, Copilot, OrigPlanet, DestPlanet } = req.body;
  const travel = await CreateTravelService({
    Starship,
    Pilot,
    Copilot,
    OrigPlanet,
    DestPlanet,
  });
}
