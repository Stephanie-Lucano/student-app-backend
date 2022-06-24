const express = require("express");
const controller = express.Router();

const studentData = require("../studentsData.json")

controller.get("/", (request, response) => {

    // how do i handle a query string 
    let {limit=25} = request.query //> "10"

    limit = Number(limit) //> 10

    console.log(limit)

    // how do i change the student data according to the limit

    // studentData.students = [ 25 items ]

    studentData.students = studentData.students.slice(0, limit)

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