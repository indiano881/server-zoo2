import express from "express";

const birdsRouter = express.Router();

birdsRouter.get("/", (req, res)=> {
    res.render(
        "pages/main_groups.ejs",
        {
            className: "birds",
        }
    )
})

export default birdsRouter;