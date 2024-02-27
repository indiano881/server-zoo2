import express from "express";
import { birds } from "../public/data/animals.js";

const birdsRouter = express.Router();
const day = new Date().getDay();
birdsRouter.get("/", (req, res) => {
  res.render("pages/main_groups.ejs", {
    className: "birds",
    targetSidebar: "sidebar-birds.ejs",
    birds: birds,
    reptiles: reptiles,
    dayOfTheWeek: day,
    url: req.url,
  });
});

export default birdsRouter;
