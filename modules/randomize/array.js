var arbitrary = require("./arbitrary");


function array(arr, cpuMode=false) {
  if (cpuMode) {
    return cpu(arr);
  } else {
    return ram(arr);
  }
}

function ram(arr) {
  var copy = arr.slice();
  return arr.map(element => {
    var i = arbitrary.int(0, copy.length - 1);
    var v = copy.splice(copy.indexOf(copy[i]), 1);
    return v[0];
  });
}

function cpu(arr) {
     arr.forEach(element => {
        var i = arbitrary.int(0, arr.length - 1);
        var p = arbitrary.int(0, arr.length - 1);
        var swapP = arr[p];
        var swapI = arr[i];
        arr[p] = swapI;
        arr[i] = swapP;
    });
    return arr;
  }
exports.array = array;
exports.cpu = cpu;
exports.ram = ram;
