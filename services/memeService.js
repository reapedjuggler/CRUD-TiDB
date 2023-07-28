let utils = require("../utils/dbQuery")
let connection = require("../database/db")
const { createTableQuery,selectTableQuery,showTables,dropTableQuery} = require("../utils/dbQuery")
let giveRandomMeme = () => {
    try {
        let resp = ""; // database query to get random meme

        return {
            success: true,
            message: resp
        }
    } catch (err) {
        console.log("Error in giveRandomMeme service", err)
        return {
            success: false,
            message: err.message
        }
    }
}

let uploadMeme = (image, imageName) => {
    try {
        let resp;
        console.log(image, " . ", imageName)
        const createTableQuery = `
            CREATE TABLE images (
            IMAGEDATA TEXT,
            IMAGENAME VARCHAR(255)
        )
        `;
        const selectTableQuery = `
            SELECT * FROM images
        `
        // connection.executeQuery(createTableQuery)
        // connection.executeQuery(dropTableQuery)
        // connection.executeQuery(showTables)
        // connection.executeQuery(insertTableQuery) 
        let IMAGE = "IMAGEDATA"
        connection.executeQuery(selectTableQuery).then((val) => {
            console.log(val[0][IMAGE], " . ", typeof (val[0]));
            return {
                success: true,
                message: val
            }
        }).catch((err) => {
            console.log(err);
            return {
                success: false,
                error: err.message
            }
        })

        const insertTableQuery = `INSERT INTO images VALUES('${image}', '${imageName}')`;

        connection.executeQuery(insertTableQuery).then((val) => {
            console.log(val);
            return {success: true, message: val};
        }).catch((err) => {
            return {success: false, message: err.message}
        })

        // conection.executeQuery(selectTableQuery).then((val) => {
        //     console.log(val[0][IMAGE], " . ", typeof (val[0]));
        //     return {
        //         success: true,
        //         message: val
        //     }
        // }).catch((err) => {
        //     console.log(err);
        //     return {
        //         success: false,
        //         error: err.message
        //     }
        // })
        return {
            success: true,
            message: resp
        }
    } catch (err) {
        console.log("Error in uploadMeme", err);
    }
}

module.exports = exports = {
    giveRandomMeme,
    uploadMeme
}