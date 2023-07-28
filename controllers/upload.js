const fs = require("fs");
const service = require("../services/memeService")
const getDBSize = require("../services/memeService").getDBSize;

const uploadFiles = async (req, res) => {
    try {
        // console.log(req.file);

        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }
        // imageName = Date.now() + "/" + req.file.originalname
        let cnt = await getDBSize();
        console.log(cnt,  " cnt ");
        imageName = "image" + cnt;
        console.log(imageName, " ", imageName);
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