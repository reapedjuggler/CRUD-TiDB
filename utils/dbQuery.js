const connection = require("../database/db").connection
let insertQuery = (file) => {
    try {
        
    } catch (err) {
        console.log("Error in insertQuery");
    }
}

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
const showTables = `
            show tables;
        `
const dropTableQuery = "DROP TABLE images"

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
    insertQuery,
    createTableQuery,
    selectTableQuery,
    insertTableQuery,
    showTables,
    dropTableQuery
}