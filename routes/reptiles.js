import express from "express";
import { reptiles } from "../public/data/animals.js";

const reptilesRouter = express.Router();

reptilesRouter.get("/", (req, res) => {
  res.render("pages/main_groups.ejs", {
    className: "reptiles",
    targetSidebar: "sidebar-reptiles.ejs",
    reptiles: reptiles,
    url: req.url,
  });
});

export default reptilesRouter;
