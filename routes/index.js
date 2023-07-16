const route = require('express').Router();
const service = require("../services/memeService")
const multer = require('multer');
const os = require("os")
const uploadController = require("../controllers/upload");

const upload = multer({
    storage: multer.memoryStorage()
});

route.get('/', (req, res) => {
    try {
        res.render("index")
    } catch (err) {
        res.send("Problem in starting the server");
    }
});

route.get("/random", (req, res) => {
    try {
        let meme = service.giveRandomMeme();
        if (meme.success == false) {
            throw new Error(meme.message);
        }
        res.send(meme.message)
    } catch (err) {
        console.log(err, "Error in routes");
        res.end("No meme sorry")
    }
});

route.post("/postMeme", upload.single('image'), uploadController.uploadFiles)

exports = module.exports = {
    route,
};