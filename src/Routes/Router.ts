import { Router } from "express";

import PilotExists from "../Middlewares/checkPilot";
import CopilotExists from "../Middlewares/checkCopilot";
import CheckTravel from "../Middlewares/checkTravel";
import { CreateTravelController } from "../Controllers/CreateTravel";
import { GetAllTravelsController } from "../Controllers/GetAllTravels";
import { GetTravelbyIDController } from "../Controllers/GetTravelByID";

const TravelRouter = Router();

TravelRouter.post(
  "/travels/create",
  PilotExists,
  CopilotExists,
  CheckTravel,
  CreateTravelController
);
TravelRouter.get("/travels", GetAllTravelsController);
TravelRouter.get("/travels/:id", GetTravelbyIDController);

export { TravelRouter };
