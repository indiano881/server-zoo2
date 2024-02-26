import express from "express";
import birdsRouter from "./routes/birds.js";
import mammalsRouter from "./routes/mammals.js";
import reptilesRouter from "./routes/reptiles.js";

const app= express();

const port= 3000;

app.get("/", (req,res)=> {
    res.render(
        "pages/home.ejs",
        {
            pageTitle: "Welcome to D^3+B Zoo!"
        })
    });


app.listen(port, console.log("SERVER STARTED"))

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/birds", birdsRouter);
app.use("/mammals", mammalsRouter);
app.use("/reptiles", reptilesRouter)

