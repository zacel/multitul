var Randomize = require('../modules/randomize');

describe('array cpuMode randomizes a array order', () => {
    const testArr = [1,2,4,5];
    var result = Randomize.array(testArr, true);
    test(`given "${testArr}" returns a different array order`, () => {
        expect(result[0]+result[1]).not.toEqual(3);
    });    
    test(`given "${testArr}" returns a string with same length`, () => {
        expect(result.length).toEqual(4);
    });
});
 
describe('array ram mode randomizes a array order', () => {
    const testArr = [1,2,4,5];
    var result = Randomize.array(testArr);
    test(`given "${testArr}" returns a different array order. Because it's random this test might sometimes fail if the array randomizes into the original order`, () => {
        expect(result).not.toEqual(testArr);
    });    
    test(`given "${testArr}" returns a string with same length`, () => {
        expect(result.length).toEqual(4);
    });
});