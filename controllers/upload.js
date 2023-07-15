const fs = require("fs");

const uploadFiles = async (req, res) => {
    try {
        console.log(req.file);

        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }
        image = req.file.buffer.toString("base64")
        console.log(image, " ", data)
        // console.log(req.file, " file ")
        // // fs.writeFileSync(
        // //     __dirname + "/resources/static/assets/tmp/" + req.file.,
        // //     image.data
        // // );
        // let data = fs.readFileSync(
        //     __dirname + "/resources/static" + req.file.filename, "utf8"
        // )
        // console.log("data -> ", data)
        // // Image.create({
        // //   type: req.file.mimetype,
        // //   name: req.file.originalname,
        // //   data: fs.readFileSync(
        // //     __basedir + "/resources/static/assets/uploads/" + req.file.filename
        // //   ),
        // // }).then((image) => {
        // //   fs.writeFileSync(
        // //     __basedir + "/resources/static/assets/tmp/" + image.name,
        // //     image.data
        // //   );

        // //   return res.send(`File has been uploaded.`);
        // // });
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }
};

module.exports = {
    uploadFiles,
};