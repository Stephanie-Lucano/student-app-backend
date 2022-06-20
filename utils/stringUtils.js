

// write a function that takes a string and a number, and repeats the string n times with a space in the middle of each time

// "Jordan, 3 => "Jordan Jordan Jordan"

function repeatNTimesWithSpace (string, n) {
    return (string + " ").repeat(n);
}

module.exports = repeatNTimesWithSpace;