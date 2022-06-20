const express = require("express");
const controller = express.Router();

const studentData = require("../studentsData.json")

controller.get("/", (request, response) => {
    response.json(studentData)
})

controller.get("/:studentID", (request, response) => {
    try {

        const {studentID} = request.params;
        
        if (!/[0-9]/.test(studentID)) {
            response.send("Student id must be a number")
            return

        };
        
        const singleStudent = studentData.students.find(student => {
            return student.id === studentID

        });
        console.log(singleStudent);
        
        if (singleStudent) {
            response.json(singleStudent);

        } else {
            response.send("Student not found");

        };

    } catch (error) {
        response.status(500).send("An error occurred");
        
    }
})

module.exports = controller;