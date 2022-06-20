// import code for express
const express = require("express");

// initialize app
const app = express();

const studentsController = require("./controllers/studentsController");
const nameController = require("./controllers/nameController");

app.use("/students", studentsController);
app.use("/names", nameController)

// route
app.get("/", (request, response) => {
    response.send("Hello World!")
})

// export app
module.exports = app;