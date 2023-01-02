import Express, { Response, Request } from "express";

import { TravelRouter } from "./Routes/Router";

const app = Express();

app.use(Express.json());

app.use("/", TravelRouter);

app.get("/", (req: Request, res: Response) => {
  let response_message = {
    message : "Server is running"
  }
  res.json(response_message)
});

export { app };
