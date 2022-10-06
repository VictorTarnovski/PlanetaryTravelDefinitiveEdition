import { Router } from "express";
import checkTravel from "../Middlewares/checkTravel";

import { CreateTravelController } from "../Controllers/CreateTravel";

const TravelRouter = Router();

TravelRouter.post("/travels/create", checkTravel, CreateTravelController);

export { TravelRouter };
