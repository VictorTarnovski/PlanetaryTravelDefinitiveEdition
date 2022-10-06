<<<<<<< HEAD
import { Router } from "express";
=======
import { Router} from "express";
>>>>>>> c37ea98c641304a972695daf91bcad068f591d4a

import { CreateTravelController } from "../Controllers/CreateTravel";

const TravelRouter = Router();

TravelRouter.post("/travels/create", CreateTravelController);

export { TravelRouter };
