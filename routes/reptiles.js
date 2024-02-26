import express from "express";

const reptilesRouter = express.Router();

reptilesRouter.get("/", (req, res)=> {
    res.render(
        "pages/main_groups.ejs",
        {
            className: "reptiles",
        }
    )
})

export default reptilesRouter;