const express = require("express");
const bodyParser = require("body-parser");
require("./database/db")

require("dotenv").config();
const db = require("./database/db");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	limit: "100mb",
	extended: true
}));

const userRoutes = require("./routes/index").route;
app.use("/", userRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, (req, res) => {
	console.log("Server running on " + PORT);
})