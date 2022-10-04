import { Router} from "express";

import { CreateTravelController } from "../Controllers/CreateTravel";

const TravelRouter = Router();

TravelRouter.post("/travels/create", CreateTravelController);

export { TravelRouter };
