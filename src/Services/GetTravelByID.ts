import dbConnect from "../Database/dbConnection";
import { Travel } from "../Database/models/Travel"

export default async function GetTravelByID(id:string) {
    console.log("Get Travel by ID Acessed")
    console.log("Connecting to the Database");
    dbConnect();
    const TravelbyID = await Travel.findById({id});
    return TravelbyID
}