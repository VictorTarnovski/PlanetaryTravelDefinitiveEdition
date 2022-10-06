import { Request, Response, NextFunction } from "express";

export default function checkTravel(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { Starship, Pilot, Copilot, OrigPlanet, DestPlanet } = req.body;
  if (req.body.Pilot === req.body.Copilot) {
    res.status(400);
    res.json("You can't have only one person guiding the Starship!");
  } else if (req.body.OrigPlanet === req.body.DestPlanet) {
    res.status(400);
    res.json("The Origin Planet and the Destination Planet can't be the same!");
  }
  next();
}
