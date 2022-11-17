import mongoose from "mongoose";

export async function dbConnect() {
  mongoose
    .connect("mongodb+srv://Tarnovski:E1u2t3u4@tarnovskiprojects.jrmrspf.mongodb.net/Applications")
    .then(() => {
      console.log("Database connection accepted");
    })
    .catch((error: Error) => {
      console.log(error);
    });
}

export default dbConnect;