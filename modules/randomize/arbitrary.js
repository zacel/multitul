//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function float(min, max) {
    return Math.random() * (max - min) + min;
}

function int(min, max) {
    return Math.floor(float(min, max));
}

exports.float = float;
exports.int =  int;