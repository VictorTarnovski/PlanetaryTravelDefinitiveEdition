import { Request, Response } from "express";

import { UpdateTravelService } from "../Services/UpdateTravel";

export async function UpdateTravelController(req: Request, res: Response) {
  let controllerBody : any = req.body;
  let travelId : string = req.params.id
  let travel : any = await UpdateTravelService(travelId,controllerBody);
  return res
    .status(201)
    .send(travel._id);
}
