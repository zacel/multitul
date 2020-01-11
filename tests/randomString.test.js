var Randomize = require('../modules/randomize');

describe('randomString randomizes a string', () => {
    const testString = "hello alice";
    var result = Randomize.string(testString);
    test(`given "${testString}" returns a different string`, () => {
        expect(result).not.toEqual(testString)
    });    
    test(`given "${testString}" returns a string with same length`, () => {
        expect(result.length).toEqual(11);
    });
});
