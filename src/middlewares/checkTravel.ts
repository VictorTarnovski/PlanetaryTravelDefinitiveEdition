import { Request, Response, NextFunction } from "express";

export default function CheckTravel(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("Middleware Accessed");
  let checkTravelBody = req.body;
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
  }else {
    console.log("Middleware Passed");
    return next();
  }
}
