import { members, events, churchInfo } from "../data/homeData.js";
import * as EmailValidator from "email-validator";
import { sendMail } from "../helper/sendMail.js";

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
export function sendSubscribtionMail(route) {
  route.post("/sendMail", (req, res) => {
    console.log(req.body);
    if (EmailValidator.validate(req.body.email)) {
      const reponse = sendMail(req.body.email);
      console.log(reponse);
      if (reponse) res.send({ satus: "valid" });
      else res.send({ status: "error sending email" });
    } else {
      res.send({ status: "invalid" });
    }
  });
}
