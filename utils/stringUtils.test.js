const {repeatNTimesWithSpace, capitalizeFirstLetter} = require("./stringUtils")

describe("take a string and number and repeat string same number of times separated by spaces", () => {
    
    it("handles an empty string", () => {
        expect(repeatNTimesWithSpace("", 0)).toBe("");
        expect(repeatNTimesWithSpace("", 5)).toBe("");
    })

    it("handles a string with 1 or more character", () => {
        expect(repeatNTimesWithSpace("a", 1)).toBe("a");
        expect(repeatNTimesWithSpace("a", 5)).toBe("a a a a a");
    })

})

describe("take a string and format the first letter of a name as a upper cased letter", () => {
    
    it("handles an empty string", () => {
        expect(capitalizeFirstLetter("")).toBe("");
    })

    it("handles a string with 1 or more character", () => {
        expect(capitalizeFirstLetter("stephanie")).toBe("Stephanie");
    })

})