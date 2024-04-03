const stringToNumberArray = require('./stringToNumberArray')
const generateUUID = require('./generateUUID')
const arrayAverage = require('./arrayAverage')
const isOddNumber = require('./isOddNumber')

module.exports = (str) => {
    return str.split("").reverse().join("");
  }