function insertionSort(array) {
  for(var i = 1; i < array.length; i++) {
    for(var j = i; j > 0 && array[j] < array[j - 1]; j--) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
    }
  }
  return array;
}

module.exports = insertionSort;