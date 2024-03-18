import { hero, events } from "../data/events.js";

export function getEventsHeroData(route) {
  route.get("/hero", (req, res) => {
    res.status(200).json(hero);
  });
}
export function getEvents(route) {
  route.get("/events", (req, res) => {
    res.status(200).json(events);
  });
}
