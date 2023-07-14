let connection = require("../database/db").connection
let giveRandomMeme = () => {
    try {
        let resp = "";  // database query to get random meme
        return {success: true, message: resp}
    } catch (err) {
        console.log("Error in giveRandomMeme service", err)
        return {success: false, message: err.message}
    }
}

let uploadMeme = () => {
     try {
        let resp = "";  // database query to get random meme
        connection.connect(function(err) {
        if (err) {
            throw err
        }
        connection.query('SELECT DATABASE();', function(err, rows) {
            if (err) {
            throw err
            }
            console.log("Successfully connected")
            console.log(rows[0]['DATABASE()']);
            connection.end()
        })})
        return {success: true, message: "Connected successfully"}
    } catch (err) {
        
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