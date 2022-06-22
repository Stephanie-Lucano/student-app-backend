const app = require("../../app.js")
const supertest = require("supertest")

describe("returns json data for all students", () => {
    it("returns an object with all students", async () => {

        await supertest(app).get("/students")
            .expect(200)
            .then((response) => {
                expect(response.body.students[0].firstName).toBe("Ingaberg")
            })
    })
})