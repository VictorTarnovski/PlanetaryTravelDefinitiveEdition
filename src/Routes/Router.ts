import { Router } from "express";

const TravelRouter = Router();

// Controllers
import { CreateTravelController } from "../Controllers/CreateTravel";
import { GetAllTravelsController } from "../Controllers/GetAllTravels";
import { GetTravelbyIDController } from "../Controllers/GetTravelByID";
import { UpdateTravelController } from "../Controllers/UpdateTravel";
import { DeleteTravelController } from "../Controllers/DeleteTravelController";

// Middlewares / Travel Validations
import PilotExists from "../Middlewares/checkPilot";
import CopilotExists from "../Middlewares/checkCopilot";
import CheckTravel from "../Middlewares/checkTravel";

// External API Get's
import GetPeople from "../External Information/GetPeople";
import GetStarships from "../External Information/GetStarships";
import GetPlanets from "../External Information/GetPlanets";
import GetSpecies from "../External Information/GetSpecies";

// Routes

// Database Insertion
TravelRouter.post(
  "/travels/create",
  PilotExists,
  CopilotExists,
  CheckTravel,
  CreateTravelController
);

// Database Get's
TravelRouter.get("/travels", GetAllTravelsController);
TravelRouter.get("/travels/:id", GetTravelbyIDController);

// Database Modelation
TravelRouter.put(
  "/travels/:id",
  PilotExists,
  CopilotExists,
  CheckTravel,
  UpdateTravelController
);
TravelRouter.delete("/travels/:id", DeleteTravelController);

// External Get's
TravelRouter.get("/people", GetPeople);
TravelRouter.get("/starships", GetStarships);
TravelRouter.get("/planets", GetPlanets);
TravelRouter.get("/species", GetSpecies);

export { TravelRouter };
