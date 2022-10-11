import dbConnect from "../Database/dbConnection";
import { Travel } from "../Database/models/Travel";

export default async function GetTravelByID(id: Object) {
  console.log("Get Travel by ID Service Acessed");
  console.log("Connecting to the Database");
  dbConnect();
  const TravelbyID = await Travel.findById({ id });
  console.log(id);
  console.log(TravelbyID);
  return TravelbyID;
}
