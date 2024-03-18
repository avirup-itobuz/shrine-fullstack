import express from "express";
import cors from "cors";
import {
  manageHomeRoute,
  manageAboutRoute,
  manageFaqRoute,
  managePastorTeam,
  manageGalleryRoute,
  manageVideoRoute,
} from "./controller/manageRoutes.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use("/assets", express.static("assets"));

app.use("/api/homepage", manageHomeRoute());
app.use("/api/about", manageAboutRoute());
app.use("/api/pastorTeam", managePastorTeam());
app.use("/api/faq", manageFaqRoute());
app.use("/api/gallery", manageGalleryRoute());
app.use("/api/videolisting", manageVideoRoute());

app.get("*", (req, res) => {
  res.status(404).send("invalid req");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
