import dbConnect from "../Database/dbConnection";
import { Travel } from "../Database/Models/Travel"

export async function UpdateTravelService(TravelID: string,ControllerBody: any) {
  dbConnect();
  await Travel.findOneAndUpdate({ _id: TravelID },ControllerBody);
  return TravelID
}