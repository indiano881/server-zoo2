import express from "express";
import { birds } from "../public/data/animals.js";
import { day } from "./../public/data/animals.js";
const birdsRouter = express.Router();

birdsRouter.get("/", (req, res) => {
  res.render("pages/main_groups.ejs", {
    className: "birds",
    pageTitle: "Birds",
    targetSidebar: "sidebar-birds.ejs",
    birds: birds,
    url: req.url,
    dayOfTheWeek: day,
  });
});

export default birdsRouter;
