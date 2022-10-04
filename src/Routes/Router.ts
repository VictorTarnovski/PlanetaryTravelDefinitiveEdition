import { Router, Request, Response } from "express";

import { CreateTravelController } from "../Controllers/CreateTravel";

const TravelRouter = Router();

TravelRouter.post("/travels/create", CreateTravelController);

export { TravelRouter };
