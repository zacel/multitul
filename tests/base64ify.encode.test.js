var base64ify = require('../modules/base64ify');


describe ("base64ify.encode encodes a string in base64 format", () => {
    test ('base64ify.encode is a function', () => {
        expect(typeof(base64ify.encode)).toEqual("function");
    }); 
    
    var result = base64ify.encode("test");
    test("returns b64 encoded string", () => {
         expect(result).toEqual("dGVzdA==");
     });
})
