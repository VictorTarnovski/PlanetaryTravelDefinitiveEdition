import { Travel } from "../Database/models/Travel";

export async function CreateTravelService({
  Starship,
  Pilot,
  Copilot,
  OrigPlanet,
  DestPlanet,
}: any) {
  const travel = new Travel();
  travel.Starship = Starship;
  travel.Pilot = Pilot;
  travel.Copilot = Copilot;
  travel.OrigPlanet = OrigPlanet;
  travel.DestPlanet = DestPlanet;
  Travel.create(travel);
}
