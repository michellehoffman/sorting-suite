function checkSorted(array) {
  for(var i = 1; i < (array.length - 1); i++) {
    if(array[i - 1] > array[i] && array[i] > array[i + 1]) {
      return false;
    }
    return true;
  }
}

module.exports = checkSorted;