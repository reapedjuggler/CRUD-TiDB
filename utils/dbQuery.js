const connection = require("../database/db").connection
// let insertQuery = (file) => {
//     try {
        
//     } catch (err) {
//         console.log("Error in insertQuery");
//     }
// }

const createTableQuery = `
            CREATE TABLE images (
            IMAGEDATA TEXT,
            IMAGENAME VARCHAR(255)
            )
        `;
const selectTableQuery = `
            SELECT * FROM images
        `
const insertTableQuery = (image, imageName) => {
    return `INSERT INTO images VALUES('${image}', '${imageName}')`;
}
// const insertTableQuery = `INSERT INTO images VALUES('image','imageName)`;

const showTables = `
            show tables;
        ` 

module.exports = exports = {
    // insertQuery,
    createTableQuery,
    selectTableQuery,
    insertTableQuery,
    showTables,
    // dropTableQuery
}
