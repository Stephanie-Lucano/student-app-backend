const express = require("express");
const {repeatNTimesWithSpace, capitalizeFirstLetter} = require("../utils/stringUtils");
const controller = express.Router();

controller.get('/capitalizeName/:name/', (request, response) => {
    try {
        // get name
        const name = request.params.name
        console.log(name)
        // get result of repeatNTimesWithSpace
        const capitalizedName = capitalizeFirstLetter(name);

        // send string response of result 
        response.send(capitalizedName);

    } catch (err){
        response.send("There was an error.")
    }
})

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