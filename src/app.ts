import bodyParser from "body-parser";
import Express, { Response, Request } from "express";

import { TravelRouter } from "./Routes/Router";

const app = Express();

app.use(Express.json());

app.use("/", TravelRouter);

app.get("/", (req: Request, res: Response) => {
  res.json("Server is running");
});

export { app };
