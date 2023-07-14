let utils = require("../utils/dbQuery")
let connection = require("../database/db")
let giveRandomMeme = () => {
    try {
        let resp = "";  // database query to get random meme
        return {success: true, message: resp}
    } catch (err) {
        console.log("Error in giveRandomMeme service", err)
        return {success: false, message: err.message}
    }
}

let uploadMeme = (body) => {
     try {
        let resp = utils.insertQuery(body.meme)
        return {success: true, message: resp}
    } catch (err) {
        console.log("Error in uploadMeme", err);
    }
}

//   });
//   // connection.query("CREATE DATABASE aaryan", (err, resp) => {
//     if (err) {
//       console.log(`Inside err + ${err}`)
//       throw err
//     }
//     console.log("resp -> ", resp)
//   // })
//   connection.query("SHOW DATABASES;", (err, resp) => {

//   })
//   connection.query("INSERT INTO person VALUES(1,'sad','hehe');")

  // console.log("->", connection.query("SELECT * FROM person"))
// });


//         return {success: true, message: resp}
//     } catch (err) {
//         console.log("Error in uploadMeme service", err)
//         return {success: false, message: err.message}
//     }
// }

module.exports = exports = {
    giveRandomMeme,
    uploadMeme
}