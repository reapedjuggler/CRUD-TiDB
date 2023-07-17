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
//const insertTableQuery = `INSERT INTO images VALUES('${image}', '${imageName}')`;

function insertTable(image,imageName){
    const insertTableQuery = `INSERT INTO images VALUES('image','imageName)`;
    console.log(insertTableQuery);
}

const showTables = `
            show tables;
        `
const dropTableQuery = "DROP TABLE images"

module.exports = exports = {
    insertQuery,
    createTableQuery,
    selectTableQuery,
    insertTableQuery,
    showTables,
    dropTableQuery
}