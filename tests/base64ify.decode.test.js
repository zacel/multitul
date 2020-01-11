var base64ify = require('../modules/base64ify');


describe ("base64ify.decode encodes a string in base64 format", () => {
    test ('base64ify.decode is a function', () => {
        expect(typeof(base64ify.decode)).toEqual("function");
    }); 
    
    var result = base64ify.decode("dGVzdA==");
    test("returns b64 decoded string", () => {
         expect(result).toEqual("test");
     });
})
