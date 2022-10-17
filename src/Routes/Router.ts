import { Router } from "express";

import checkTravel from "../Middlewares/checkTravel";
import { CreateTravelController } from "../Controllers/CreateTravel";
import { GetAllTravelsController } from "../Controllers/GetAllTravels";
import { GetTravelbyIDController } from "../Controllers/GetTravelByID";

import PilotExists from "../../Tests/Middleware/checkPilot";

const TravelRouter = Router();

TravelRouter.post("/travels/create", checkTravel, CreateTravelController);
TravelRouter.get("/travels", GetAllTravelsController);
TravelRouter.get("/travels/:id", GetTravelbyIDController);
TravelRouter.post("/pilot", PilotExists);

export { TravelRouter };
