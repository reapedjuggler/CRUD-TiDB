const route = require('express').Router();
const service = require("../services/randomGen")

route.get('/', (req, res) => {
    try {
        res.render("index");
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
        res.send("Sad")
    } catch (err) {
        console.log(err, "Error in routes");
        res.send("No meme sorry")
    }
});

route.post("/postMeme", (req, res) => {
    try {
        let resp = service.uploadMeme(req.body);
        if (resp.success == false) {
            throw new Error("Error uploading the meme");            
        }
        res.send("Meme uploaded successfully")
    } catch (err) {
        console.log(err, "Error in postMeme route");
        res.send("No upload for you")
    } 
})

exports = module.exports = {
    route,
}; 