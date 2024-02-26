import express from "express";
import { birds } from "../public/data/animals.js";
import { mammals } from "../public/data/animals.js";
import { reptiles } from "../public/data/animals.js";

const birdsRouter = express.Router();

birdsRouter.get("/", (req, res) => {
  res.render("pages/main_groups.ejs", {
    className: "birds",
    mammals: mammals,
    birds: birds,
    reptiles: reptiles,
  });
});

export default birdsRouter;
