import express from "express";

const mammalsRouter = express.Router();

mammalsRouter.get("/", (req, res)=> {
    res.render(
        "pages/main_groups.ejs",
        {
            className: "mammals",
        }
    )
})

export default mammalsRouter;