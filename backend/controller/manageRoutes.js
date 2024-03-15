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

export function manageGalleryRoute(){
  const route = Router();
  // getHeroImages(route);
  // getImages(route);
  return route
}

