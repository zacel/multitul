var Mutlitul = require("../index");

describe ("modules are accessible from main index file", () => {
    const Base64ify = Mutlitul.Base64ify;
    const Randomize = Mutlitul.Randomize;
    test ('Base64ify exists', () => {
        expect(typeof(Base64ify)).toEqual("object");
    }); 
    test ('Randomize exists', () => {
        expect(typeof(Randomize)).toEqual("object");
    }); 
});