# Multitul  


## Base64ify Modules
1. ```encode```
takes a single string argument and returns it in base64 encoded format.
Usage:
```
var encoded = base64ify.encode("your string");
```

2. ```decode```
takes a single string argument and returns it in base64 decoded format.
Usage:
```
var decoded = base64ify.decode("your base 64 encoded string");
```

-------

## Randomize Modules
1. ```array```
takes an array and returns it in randomized order. Optionally you can provide a boolean as a second argument to specifiy which version of the array randomizer to use (ram or cpu). The default mode is ram.
Usage:
```
var randomizedArrayRamMode = randomize.array(myArr);
var anotherRandomizedArrayCpuMode = randomize.array(myArr, true);
```


2. ```arbitrary```
takes a min and max integer and returns a float within that range. This one is straight from MDN see the file for url.
Usage:
```
var randomFloat = randomize.arbitrary(min, max);
```

3. ```arbitraryInt```
same as the arbitrary function but it parses the float into a int using Math.floor().
Usage:
```
var randomInt = randomize.arbitraryInt(min, max);
```

4. ```randString```
takes one argument (a string) and randomizes the order of it's characters. Each character is used only once (if e is in the string twice there will be only 2 'e');
Usage:
```
var randomized = randomize.randString(str);
```