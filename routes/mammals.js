import express from "express";
import { birds } from "../public/data/animals.js";
import { mammals } from "../public/data/animals.js";
import { reptiles } from "../public/data/animals.js";

const mammalsRouter = express.Router();
const day= new Date().getDay();
mammalsRouter.get("/", (req, res) => {
  res.render("pages/main_groups.ejs", {
    className: "mammals",
    mammals: mammals,
    birds: birds,
    reptiles: reptiles,
    dayOfTheWeek: day
  });
});

export default mammalsRouter;
