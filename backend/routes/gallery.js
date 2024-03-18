import { allImages, heroImagesData } from "../data/gallery.js";

export function getHeroImages(route) {
  route.get("/hero", (req, res) => {
    res.status(200).json(heroImagesData);
  });
}
export function getGalleryImages(route) {
  route.get("/images", (req, res) => {
    res.status(200).json(allImages);
  });
}
