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

// route.post("/postMeme", (req, res) => {
//     try {
//         let resp = service.uploadMeme(req.body);
//         if (resp.success == false) {
//             throw new Error("Error uploading the meme");
//         }
//         let imageData;
//         req.on("data", async (data) => {
//             imageData = data
//         })
//         console.log(imageData, " . ", typeof (imageData));
//         res.send("Meme uploaded successfully")
//     } catch (err) {
//         console.log(err, "Error in postMeme route");
//         res.send("No upload for you")
//     }
// })

// route.post('/postMeme', upload.single('image'), function (req, res) {
//     try {
//         console.log(req.file, " Uploaded file ", typeof (req.file))
//     } catch (err) {
//         console.log(err, "Error in postMeme route");
//         res.end("Error uploading the meme");
//     }
// });

route.post("/postMeme", upload.single('image'), uploadController.uploadFiles)

exports = module.exports = {
    route,
};