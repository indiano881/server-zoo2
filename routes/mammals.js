import express from "express";
import { mammals } from "../public/data/animals.js";

const mammalsRouter = express.Router();

mammalsRouter.get("/", (req, res) => {
  res.render("pages/main_groups.ejs", {
    className: "mammals",
    pageTitle: "Mammals",
    targetSidebar: "sidebar-mammals.ejs",
    mammals: mammals,
    url: req.url,
  });
});

export default mammalsRouter;
