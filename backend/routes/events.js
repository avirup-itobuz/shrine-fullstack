import { hero, events } from "../data/events.js";

export function getEventsHeroData(route) {
  route.get("/hero", (req, res) => {
    res.status(200).json(hero);
  });
}
export function getEvents(route) {
  route.get("/allevents", (req, res) => {
    res.status(200).json(events);
  });
}
export function getOneEvent(route) {
  route.get("/events/:id", (req, res) => {
    console.log(req.params.id);
    events.forEach((ele) => {
      console.log(ele.id);
      if (Number(ele.id) === Number(req.params.id)) res.status(200).json(ele);
    });
    res.status(404).json("not found");
  });
}
