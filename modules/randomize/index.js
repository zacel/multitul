var rString = require("./randomString");
var arbitrary = require("./arbitrary");
var array = require('./array');


var Randomize = (module.exports = {
    string: rString.rString,
    arbitrary: arbitrary,
    array: array.array
});