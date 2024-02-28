import express from "express";
import { allAnimals } from "../public/data/animals.js";
import { day } from "./../public/data/animals.js";

const animalsRouter = express.Router();

animalsRouter.get("/", (req, res) => {
  res.render("pages/animal-details.ejs", {
    className: "animal-details",
    pageTitle: "Animal Details",
    animals: allAnimals,
    url: req.url,
    dayOfTheWeek: day
  });
});

export default animalsRouter;
