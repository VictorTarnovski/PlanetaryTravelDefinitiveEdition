import { app } from "./app";

const port = 66;
const hostname = "127.0.0.1:";

app.listen(port, () => {
  console.log(`Server is running on ${hostname}${port}`);
});
