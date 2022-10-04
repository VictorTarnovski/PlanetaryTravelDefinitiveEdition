import Express, { Response, Request } from "express";

import { TravelRouter } from "./Routes/Router";
import { dbConnect } from "./Database/dbConnection";

const app = Express();
app.use("/", TravelRouter);

app.get("/", (req: Request, res: Response) => {
  res.json("Server is running");
  dbConnect();
});
export { app };
