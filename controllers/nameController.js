const express = require("express");
const repeatNTimesWithSpace = require("../utils/stringUtils");
const controller = express.Router();

controller.get("/:name/:times", (request, response) => {
    try {

        // get name
        const {name} = request.params;

        // get times
        const {times} = request.params;

        // get results of repeatNTimesWithSpace
        const repeatedNames = repeatNTimesWithSpace(name, times);

        // send string response of result
        response.send(repeatedNames);

    } catch (error) {
        response.send("There is an error.")
    }
})

module.exports = controller;