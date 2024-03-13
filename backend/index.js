import { members, events, churchInfo } from "./data/homeData.js";
import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());

app.get("/api/homepage/churchmembers", (req, res) => {
  res.status(200).json(members);
});
app.get("/api/homepage/eventsdata", (req, res) => {
  res.status(200).json(events);
});
app.get("/api/homepage/churchdetails", (req, res) => {
  res.status(200).json(churchInfo);
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
