const connection = require("../database/db").connection
let insertQuery = (file) => {
    try {
        connection.connect(function(err) {
        if (err) {
            throw err
        }
        connection.query('SELECT DATABASE();', function(err, rows) {
            if (err) {
            throw err
            }
            console.log("Successfully connected")
            // createTable();
            connection.query("CREATE TABLE files (id INT, fileName VARCHAR);")
            connection.query("INSERT INTO (id,  (id, filename)filename)files VALUES(1,'sad');")
            console.log("->", connection.query("SELECT * FROM files;"))
            // connection.end()
        })})
    } catch (err) {
        console.log("Error in insertQuery");
    }
}

let getRandomMeme = () => {
    try {

    } catch (err) {

    }
}

let createTable = () => {
    try {
        connection.query("CREATE TABLEes (id INTEGER, fileName VARCHAR)")
    } catch (err) {
        console.log("Error in createTable");
    }
}

module.exports = exports = {
    insertQuery
}