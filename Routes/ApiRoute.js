const express = require("express")
const ApiData = require("../Api/ApiData")

const data = express.Router();
data.route("/").get(ApiData.apiController)
//data.get("/", ApiData)
module.exports = data;
