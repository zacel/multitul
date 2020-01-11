var array = require('./array');

const rString = (str) => {
    str = str.split('');
    return array.array(str).join("");
      
}

exports.rString = rString;