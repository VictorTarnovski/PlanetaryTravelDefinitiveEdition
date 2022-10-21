import { Request, Response, NextFunction } from "express";

import GetSpecie from "./Gets/getSpecie";

let specieUrl: string = "https://swapi.dev/api/species/2/";

export default async function CheckTravel(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("Middleware Accessed");
  let checkTravelBody = req.body;
  let pilotSpecie = await GetSpecie(checkTravelBody.Pilot);
  let copilotSpecie = await GetSpecie(checkTravelBody.Copilot);
  if (checkTravelBody.Pilot === checkTravelBody.Copilot) {
    console.log("Blocked by the Middleware");
    return res
      .status(400)
      .json("You can't have only one person guiding the Starship!");
  } else if (checkTravelBody.OrigPlanet === checkTravelBody.DestPlanet) {
    console.log("Blocked by the Middleware");
    res
      .status(400)
      .json("The Origin Planet and the Destination Planet can't be the same!");
  } else if (pilotSpecie != specieUrl && copilotSpecie != specieUrl) {
    console.log("Blocked by the Middleware");
    res
      .status(400)
      .json("The Pilot or Copilot must be from the Droid Species!");
  } else {
    console.log("Middleware Passed");
    return next();
  }
}
