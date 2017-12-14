function generateArray(valCount, maxNum, minNum) {
  var array = [];

  for(var i = 0; i < valCount; i++) {
    array.push(Math.floor(Math.random() * (maxNum - minNum)) + minNum);
  }

  return array;
}

module.exports = generateArray;