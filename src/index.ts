import { app } from "../app";

const port = 1824;
const hostname = "http://127.0.0.1:";

app.listen(port, () => {
  console.log(`Server is running on ${hostname}${port}`);
});
