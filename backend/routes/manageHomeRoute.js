import { Router } from "express";
import { getChurchMembers, getEventsData, getChurchDetails } from "./home.js";
const route = Router();

export function manageHomeRoute() {
  getChurchDetails(route);
  getChurchMembers(route);
  getEventsData(route);
  return route;
}
