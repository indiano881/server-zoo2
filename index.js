import express from "express";
import birdsRouter from "./routes/birds.js";
import mammalsRouter from "./routes/mammals.js";
import reptilesRouter from "./routes/reptiles.js";

const app= express();

const port= 3000;

app.get("/", (req,res)=> {
    res.write("home page connected") //like this just a s aplace holder
})


app.listen(port, console.log("SERVER STARTED"))

app.use(express.static("public"));
app.use("view engine", "ejs");
app.use("/birds", birdsRouter);
app.use("/mammals", mammalsRouter);
app.use("/reptiles", reptilesRouter)

