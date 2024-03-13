import express from "express";
import cors from "cors";
import { manageHomeRoute } from "./routes/manageHomeRoute.js";

const app = express();
const port = 8000;

app.use(cors());

// app.get("/api/homepage/churchmembers", (req, res) => {
//   res.status(200).json(members).end();
// });
// app.get("/api/homepage/eventsdata", (req, res) => {
//   res.status(200).json(events).end();
// });
// app.get("/api/homepage/churchdetails", (req, res) => {
//   res.status(200).json(churchInfo).end();
// });
app.use("/api/homepage", manageHomeRoute());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
