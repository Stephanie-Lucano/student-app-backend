const express = require("express");
const controller = express.Router();

controller.get("/", (request, response) => {
    response.send({hello: "world"})
})

module.exports = controller;