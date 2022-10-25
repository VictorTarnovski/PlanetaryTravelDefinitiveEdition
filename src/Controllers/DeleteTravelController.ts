import { Request, Response } from "express";

import { DeleteTravelService } from "../Services/DeleteTravel";

export async function DeleteTravelController(req: Request, res: Response) {
  let travelId: string = req.params.id
  if (await DeleteTravelService(travelId) === true) {
    return res
      .status(201)
      .send(`Travel ${travelId} deleted`);
  }
}