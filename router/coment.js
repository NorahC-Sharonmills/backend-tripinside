const express = require("express");
const ComentRouter = express.Router();

const ComentModel = require("../models/pushcomment")

ComentRouter.post("/:id/:iduser", (req, res) => {
    const newComent = req.body;
    ComentModel.create(newComent, (err, comentCreate) => {
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.status(201).json({
            success: 1,
            message: "Post Success"
        });
    });
});

ComentRouter.get("/:id", (req, res) => {
    ComentModel.findById(req.params.id, {})
    .populate({
        path: "author",
        select: {
            username: 1,
            image: 1,
            fullname: 1
        }
    }).exec((err, data) => {
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.json(data);
    });
});

module.exports = ComentRouter;