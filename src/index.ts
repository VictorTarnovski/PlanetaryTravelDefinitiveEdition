import { app } from "./app";

const port = 66;
const hostname = "https://ec2-18-229-141-143.sa-east-1.compute.amazonaws.com:";

app.listen(port, () => {
  console.log(`Server is running on ${hostname}${port}`);
});
