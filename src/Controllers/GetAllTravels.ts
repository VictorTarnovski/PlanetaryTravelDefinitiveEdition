import { Request, Response } from 'express';

import GetAllTravels from "../Services/GetAllTravels"

export async function GetAllTravelsController(req: Request, res: Response) {
    console.log("Get Travels Controller Acessed");
    const Travels = await GetAllTravels();
    return res.json(Travels).status(200)
}