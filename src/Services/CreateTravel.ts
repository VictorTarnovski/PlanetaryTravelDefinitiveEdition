import dbConnect from "../Database/dbConnection";
import { Travel } from "../Database/models/Travel";

export async function CreateTravelService(ControllerBody: any) {
  console.log("Service Acessed....");
  console.log("Trying to comunicate with the Database");
  dbConnect();
  Travel.create(ControllerBody, (error: Error) => {
    if (error) {
      console.log("Were found problems within the Database communication");
    } else {
      console.log("Travel Created sucessfuly");
    }
    console.log("Process finished");
  });
}
