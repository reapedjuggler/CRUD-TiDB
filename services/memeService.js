let utils = require("../utils/dbQuery")
let connection = require("../database/db")
const { createTableQuery,selectTableQuery,showTables,dropTableQuery} = require("../utils/dbQuery")
const countQuery = `SELECT COUNT(*) FROM images`

let getDBSize = async () => {
    try {
        console.log("hehe")
        let res = connection.executeQuery(countQuery).then((val)=>{
            console.log(" Success ", val);
            console.log(val[0]["COUNT(*)"],  " ");
            return val[0]["COUNT(*)"];
        }).catch((err) => {
            console.log(err, " err ")
            return -1;
        }) 
        return res;
    } catch (err) {
        console.log(err);
    }
}
let giveRandomMeme = () => {
    try {
        let resp = ""; // database query to get random meme
            // gen a random no
            // suffix it with image1 -> base64
            // retrieve base64, send it to front end 
            // while displaying decode base64 to jpg

            
            const selectTableQuery = `
                SELECT * FROM images
            `
            connection.executeQuery(insertTableQuery).then((val)=>{
                console.log(" Success ");
            }).catch((err) => {
                console.log(err, " err ")
            }) 
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
        console.log(image.length)
        const createTableQuery = `
            CREATE TABLE images (
            IMAGEDATA TEXT,
            IMAGENAME VARCHAR(255)
        )
        `;
        const selectTableQuery = `
            SELECT * FROM images
        `
        const insertTableQuery = `INSERT INTO images VALUES('${image}', '${imageName}')`;
        // connection.executeQuery(createTableQuery)
        // connection.executeQuery(dropTableQuery)
        // connection.executeQuery(showTables)
        connection.executeQuery(insertTableQuery).then((val)=>{
            console.log(" Success ");
        }).catch((err) => {
            console.log(err, " err ")
        }) 
        let IMAGE = "IMAGEDATA"
        // connection.executeQuery(countQuery).then((val) => {
        //     console.log(val, " . ", typeof (val[0]));
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


        // connection.executeQuery(insertTableQuery).then((val) => {
        //     console.log(val);
        //     return {success: true, message: val};
        // }).catch((err) => {
        //     return {success: false, message: err.message}
        // })

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
    uploadMeme,
    getDBSize
}