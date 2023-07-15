const fs = require("fs");
const service = require("../services/memeService")

const uploadFiles = async (req, res) => {
    try {
        console.log(req.file);

        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }
        imageName = Date.now() + "/" + req.file.originalname
        image = req.file.buffer.toString("base64")
        // console.log(image, " ", " image")
        let resp = service.uploadMeme(image, imageName);
        res.send("Successfully uploaded")
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }
};

module.exports = {
    uploadFiles,
};