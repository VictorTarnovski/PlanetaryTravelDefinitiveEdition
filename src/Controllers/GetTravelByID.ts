import { Request, Response } from 'express';

import GetTravelByID from "../Services/GetTravelByID"

export async function GetTravelbyIDController(req: Request, res: Response) {
    console.log("Get Travels Controller Acessed");
    const TravelID = req.params.id
    const TravelbyID = await GetTravelByID(TravelID);
    return res.json(TravelbyID).status(200)
}