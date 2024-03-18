import { hero, videos } from "../data/videos.js";
export function getVideoHeroImages(route) {
  route.get("/hero", (req, res) => {
    res.status(200).json(hero);
  });
}
export function getVideos(route) {
  route.get("/videos", (req, res) => {
    res.status(200).json(videos);
  });
}
