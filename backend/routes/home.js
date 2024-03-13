import { members, events, churchInfo } from "../data/homeData.js";

export function getChurchMembers(route) {
  route.get("/churchmembers", (req, res) => {
    res.status(200).json(members).end();
  });
}
export function getEventsData(route) {
  route.get("/eventsdata", (req, res) => {
    res.status(200).json(events).end();
  });
}
export function getChurchDetails(route) {
  route.get("/churchdetails", (req, res) => {
    res.status(200).json(churchInfo).end();
  });
}
