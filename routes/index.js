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
    var ip = req.headers['x-forwarded-for'] ||
    req.socket.remoteAddress ||
    null;
    // logic to get ip 
    res.send(`Client IP Address: ${ip}`);

});

route.get("/random", async (req, res) => {
    try {
        const ip = requestIp.getClientIp(req);

        const geo = geoip.lookup(ip);
        console.log("ip: ", ip);
        console.log("country", geo.country);
       let meme = service.giveRandomMeme();
       if (meme.success == false) {
           throw new Error(meme.message);
       }
        //res.send(meme.message)
	  res.send("Hello")
    } catch (err) {
        console.log(err, "Error in routes");
        res.end("No meme sorry")
    }
});

route.post("/postMeme", upload.single('image'), uploadController.uploadFiles)

exports = module.exports = {
    route,
};
