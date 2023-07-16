const connection = require("../database/db").connection
let insertQuery = (file) => {
    try {
        
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