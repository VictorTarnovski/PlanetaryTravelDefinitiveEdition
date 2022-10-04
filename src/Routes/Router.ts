import { Router, Request, Response } from "express";

import { CreateTravelService } from "../Services/CreateTravel";

const TravelRouter = Router();

TravelRouter.post("/travels/create", CreateTravelService);

export { TravelRouter };
