import Express, { Response, Request } from "express";

import { TravelRouter } from "./src/Routes/Router";

const app = Express();

app.use(Express.json());

app.use("/", TravelRouter);

app.get("/", (req: Request, res: Response) => {
  res.json("Server is running");
});

export { app };
