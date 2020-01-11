var Randomize = require('../modules/randomize');

describe('arbitrary.float returns a random float in a given range', () => {
    const max = 5;
    const min = 0;
    var result = Randomize.arbitrary.float(min, max);
    test(` returns a number less then ${max}`, () => {
        expect(result < max).toEqual(true)
    });    
    test(` returns a number greater then ${min}`, () => {
        expect(result > min).toEqual(true);
    });
});

describe('arbitrary.int returns a random int in a given range', () => {
    const max = 5;
    const min = 0;
    var result = Randomize.arbitrary.int(min, max);
    test(` returns a number less to then ${max}`, () => {
        expect(result < max).toEqual(true)
    });    
    test(` returns a number greater or equal then ${min}`, () => {
        //since we use math.floor this can be equal to the min
        expect(result >= min).toEqual(true);
    });
});

