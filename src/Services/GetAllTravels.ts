import dbConnect from "../Database/dbConnection";
import { Travel } from "../Database/models/Travel"

export default async function GetAllTravels() {
    console.log("Get All Travels Service Acessed")
    console.log("Connecting to the Database")
    dbConnect();
    const Travels = await Travel.find({});
    return Travels
}
   

