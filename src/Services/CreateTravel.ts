import { ObjectId } from "mongodb";
import dbConnect from "../Database/dbConnection";
import { Travel } from "../Database/Models/Travel";

export async function CreateTravelService(ControllerBody: any) {
  dbConnect();
  let travel = await Travel.create(ControllerBody);
  return travel
}
