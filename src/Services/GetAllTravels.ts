import dbConnect from "../Database/dbConnection";
import { Travel } from "../Database/Models/Travel";

export default async function GetAllTravels() {
  console.log("Get All Travels Service Acessed");
  console.log("Connecting to the Database");
  dbConnect();
  const travels = await Travel.find({});
  return travels;
}
