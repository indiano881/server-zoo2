import express from "express";
import * as path from 'path';
const app= express();

const port= 3000;

const __dirname = path.resolve();

app.set('views', path.join(__dirname, 'views'));

app.get("/", (req,res)=> {
    res.render("pages/home.ejs") //like this just a s aplace holder
})


app.listen(port, console.log("SERVER STARTED"))
app.use(express.static("public"));
//app.use("view engine", "ejs"); för ejs