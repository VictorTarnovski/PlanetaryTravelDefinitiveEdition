import dbConnect from "../Database/dbConnection";
import { Travel } from "../Database/models/Travel";

export async function CreateTravelService(ControllerBody: any) {
  console.log("Service Acessed....");
  console.log("Trying to comunicate with the Database");
  dbConnect();
  Travel.create(ControllerBody);
}
