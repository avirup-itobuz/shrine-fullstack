import { Router } from "express";
import {
  getChurchMembers,
  getEventsData,
  getChurchDetails,
  sendSubscribtionMail,
} from "../routes/home.js";
import { getAboutData, getHappyPrayers } from "../routes/about.js";
const route = Router();

export function manageHomeRoute() {
  getChurchDetails(route);
  getChurchMembers(route);
  getEventsData(route);
  sendSubscribtionMail(route);
  return route;
}

export function manageAboutRoute() {
  getAboutData(route);
  getHappyPrayers(route);
  return route;
}
