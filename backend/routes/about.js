import { about, happyPrayers } from "../data/aboutData.js";

export function getAboutData(route) {
  route.get("/aboutdata", (req, res) => {
    res.status(200).json(about);
  });
}
export function getHappyPrayers(route) {
  route.get("/happyprayers", (req, res) => {
    res.status(200).json(happyPrayers);
  });
}
