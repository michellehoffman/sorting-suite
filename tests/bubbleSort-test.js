const assert = require('chai').assert;
const bubbleSort = require('../lib/bubbleSort.js');
const generateArray = require('../lib/generator.js');
const checkSorted = require('../lib/sortCheck.js');

describe('bubbleSort', function() {

  it('should be a function', function() {
    assert.isFunction(bubbleSort);
  });

  it('should return an array', function() {
    let array = [10, 42, 18];
    let arraySorted = bubbleSort(array);
    assert.isArray(arraySorted);
  });

  it('should return an array with the same numbers', function() {
    let array = [10, 42, 18];
    let arraySorted = bubbleSort(array);
    assert.sameMembers(array, arraySorted, 'have same numbers');
  });

  it('should return an array with the same length', function() {
    let array = [10, 42, 18];
    let arrayLength = array.length;
    let arraySorted = bubbleSort(array);
    assert.equal(arraySorted.length, arrayLength);
  });

  it('should return a sorted Array', function() {
    let array = [10, 42, 18, 21, 92];
    let arraySorted = bubbleSort(array);
    assert.equal(checkSorted(arraySorted), true);
  });

  it('should sort an array with negative values', function() {
    let array = generateArray(100, -500, -1);
    let sortedArray = bubbleSort(array);
  });

  it('should sort an array with 5 values', function() {
    let array = generateArray(5, 100, 1);
    let sortedArray = bubbleSort(array);
  });

  it('should sort an array with 100 values', function() {
    let array = generateArray(100, 100, 1);
    let sortedArray = bubbleSort(array);
  });

  it('should sort an array with 1,000 values', function() {
    let array = generateArray(1000, 1000, 1);
    let sortedArray = bubbleSort(array);
  });

  it('should sort an array with 10,000 values', function() {
    let array = generateArray(10000, 10000, 1);
    let sortedArray = bubbleSort(array);
  });

  it('should sort an array with 11,750 values', function() {
    let array = generateArray(11750, 20000, 1);
    let sortedArray = bubbleSort(array);
  });

});