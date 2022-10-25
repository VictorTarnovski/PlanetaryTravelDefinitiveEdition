import dbConnect from "../Database/dbConnection";
import { Travel } from "../Database/Models/Travel"

export async function DeleteTravelService(TravelID: string) {
  dbConnect();
  await Travel.findOneAndDelete({ _id: TravelID });
  return true
}