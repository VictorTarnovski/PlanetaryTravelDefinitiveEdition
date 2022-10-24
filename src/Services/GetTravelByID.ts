import dbConnect from "../Database/dbConnection";
import { Travel } from "../Database/Models/Travel";

export default async function GetTravelByID(id: string) {
  dbConnect();
  const travelbyID = await Travel.findById(id);
  return travelbyID;
}
