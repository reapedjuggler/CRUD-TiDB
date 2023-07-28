const route = require('express').Router();
const service = require("../services/memeService")
const multer = require('multer');
const os = require("os")
const axios = require("axios")
const uploadController = require("../controllers/upload");

const requestIp = require("request-ip");
var geoip = require('geoip-lite');


const upload = multer({
    storage: multer.memoryStorage()
});

route.get('/', (req, res) => {

});

route.get("/random-base64-meme", async (req, res) => {
    try {
        const ip = requestIp.getClientIp(req);

        const geo = geoip.lookup(ip);
        console.log("ip: ", ip);
        console.log("country", geo.country);
        // axios if US send req to us.memecdn.me and return response
        if(geo.country == "US") {
            axios.get("us.memecdn.me/random").then((resp) => {
                console.log(resp);
                res.send(resp);
            }).catch((err) => {
                console.log(err);
            })
        }
       let meme = await service.giveRandomMeme();
       if (meme.success == false) {
           throw new Error(meme.message);
       }
       const memeData = JSON.stringify(meme.message);
	  res.send(memeData);
    } catch (err) {
        console.log(err, "Error in routes");
        res.end("No meme sorry")
    }
});

route.get("/random", (req, res) => {
    res.sendFile("random.html", {root: "./public"});
})

route.post("/postMeme", upload.single('image'), uploadController.uploadFiles)

exports = module.exports = {
    route,
};
