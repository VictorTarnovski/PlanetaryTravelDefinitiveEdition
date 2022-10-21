import mongoose from "mongoose";

export async function dbConnect() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Planetary-Travels")
    .then(() => {
      console.log("Database connection accepted");
    })
    .catch((error: Error) => {
      console.log(error);
    });
}

export default dbConnect;
