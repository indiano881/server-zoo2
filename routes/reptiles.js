import express from "express";
import { birds } from "../public/data/animals.js";
import { mammals } from "../public/data/animals.js";
import { reptiles } from "../public/data/animals.js";

const reptilesRouter = express.Router();
const day= new Date().getDay();
reptilesRouter.get("/", (req, res) => {
  res.render("pages/main_groups.ejs", {
    className: "reptiles",
    mammals: mammals,
    birds: birds,
    reptiles: reptiles,
    dayOfTheWeek: day
  });
});

export default reptilesRouter;
