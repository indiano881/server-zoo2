import express from "express";

const app= express();

const port= 3000;

app.get("/", (req,res)=> {
    res.write("home page connected") //like this just a s aplace holder
})


app.listen(port, console.log("SERVER STARTED"))
app.use(express.static("public"));
//app.use("view engine", "ejs"); för ejs