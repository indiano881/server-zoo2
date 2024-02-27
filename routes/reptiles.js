import express from "express";
import { reptiles } from "../public/data/animals.js";

const reptilesRouter = express.Router();
const day = new Date().getDay();
reptilesRouter.get("/", (req, res) => {
  res.render("pages/main_groups.ejs", {
    className: "reptiles",
    targetSidebar: "sidebar-reptiles.ejs",
    reptiles: reptiles,
    dayOfTheWeek: day,
    url: req.url,
  });
});

export default reptilesRouter;
