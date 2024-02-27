import express from "express";
import { mammals } from "../public/data/animals.js";

const mammalsRouter = express.Router();
const day = new Date().getDay();
mammalsRouter.get("/", (req, res) => {
  res.render("pages/main_groups.ejs", {
    className: "mammals",
    targetSidebar: "sidebar-mammals.ejs",
    mammals: mammals,
    dayOfTheWeek: day,
    url: req.url,
  });
});

export default mammalsRouter;
