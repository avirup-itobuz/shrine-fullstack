import { carousel, members } from "../data/pastorTeam.js";
// console.log(carousel);

export function getPastorCarouselData(route) {
  route.get("/carousel", (req, res) => {
    res.status(200).json(carousel);
  });
}
export function getPastorTeamData(route) {
  route.get("/members", (req, res) => {
    res.status(200).json(members);
  });
}
