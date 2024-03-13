import { members, events, churchInfo } from "./data/homeData.js";
import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());

app.get("/api/homepage/churchmembers", (req, res) => {
  res.status(200).json(members);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});