import { Router } from "express";
import {
  getChurchMembers,
  getEventsData,
  getChurchDetails,
  sendSubscribtionMail,
} from "../routes/home.js";
import { getAboutData, getHappyPrayers } from "../routes/about.js";
import { getFaqCarouselData, getFaq } from "../routes/faq.js";
import {
  getPastorCarouselData,
  getPastorTeamData,
} from "../routes/pastorTeam.js";
import { getGalleryHeroImages, getGalleryImages } from "../routes/gallery.js";
import { getVideoHeroImages, getVideos } from "../routes/videos.js";
import { getEventsHeroData, getEvents } from "../routes/events.js";

export function manageHomeRoute() {
  const route = Router();
  getChurchDetails(route);
  getChurchMembers(route);
  getEventsData(route);
  sendSubscribtionMail(route);
  return route;
}

export function manageAboutRoute() {
  const route = Router();
  getAboutData(route);
  getHappyPrayers(route);
  return route;
}

export function manageFaqRoute() {
  const route = Router();
  getFaqCarouselData(route);
  getFaq(route);
  return route;
}

export function managePastorTeam() {
  const route = Router();
  getPastorCarouselData(route);
  getPastorTeamData(route);
  return route;
}

export function manageGalleryRoute() {
  const route = Router();
  getGalleryHeroImages(route);
  getGalleryImages(route);
  return route;
}

export function manageVideoRoute() {
  const route = Router();
  getVideoHeroImages(route);
  getVideos(route);
  return route;
}

export function manageEventsPageRoute() {
  const route = Router();
  getEventsHeroData(route);
  getEvents(route);
  return route;
}
