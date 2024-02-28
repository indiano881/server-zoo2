import express from "express";
import birdsRouter from "./routes/birds.js";
import mammalsRouter from "./routes/mammals.js";
import reptilesRouter from "./routes/reptiles.js";
import animalsRouter from "./routes/animal-details.js"
import { mammals } from "./public/data/animals.js";
import { reptiles } from "./public/data/animals.js";
import { birds } from "./public/data/animals.js";
import { day } from "./public/data/animals.js";
import * as path from "path";

const app = express();

const port = process.env.PORT || 3000;

const __dirname = path.resolve();

app.set("views", path.join(__dirname, "views"));
app.use((req, res, next) => {
  res.locals.url = req.url;
  next();
});

app.get("/", (req, res) => {
  res.render("pages/home.ejs", {
    pageTitle: "Welcome to D^3+B Zoo!",
    mammals: mammals,
    birds: birds,
    reptiles: reptiles,
    url: req.url,
    dayOfTheWeek: day
  });
});

app.use(express.static("public"));

app.set("view engine", "ejs");
app.use("/birds", birdsRouter);
app.use("/mammals", mammalsRouter);
app.use("/reptiles", reptilesRouter);
app.use("/animaldetails", animalsRouter);

app.listen(port, console.log("SERVER STARTED"));
