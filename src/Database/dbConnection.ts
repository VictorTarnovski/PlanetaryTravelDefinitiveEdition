import mongoose from "mongoose";
// Conexão com o Banco
export async function dbConnect() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Tests")
    .then(() => {
      console.log("Database connection accepted");
    })
    .catch((error: Error) => {
      console.log(error);
    });
}

export default dbConnect;
