import dbConnect from "../Database/dbConnection";
import { Travel } from "../Database/Models/Travel";

export default async function GetAllTravels() {
  dbConnect();
  const travels = await Travel.find({});
  return travels;
}
