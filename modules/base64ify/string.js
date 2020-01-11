function encode(str) {
        var b = new Buffer.from(str);
        return b.toString('base64');
}

function decode(str) {
    var b = new Buffer.from(str, "base64");
    return b.toString();
}

exports.encode = encode;
exports.decode = decode;
