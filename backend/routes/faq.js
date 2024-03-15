import { accordionFAQs, carouselImagesData } from "../data/faqData.js";

export function getFaqCarouselData(route) {
  route.get("/carousel", (req, res) => {
    res.status(200).json(carouselImagesData);
  });
}
export function getFaq(route) {
  route.get("/accordionfaq", (req, res) => {
    res.status(200).json(accordionFAQs);
  });
}
