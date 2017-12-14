const assert = require('chai').assert;
const quickSort = require('../lib/quickSort.js');
const generateArray = require('../lib/generator.js');
const checkSorted = require('../lib/sortCheck.js');

describe('quickSort', function() {

  it('should be a function', function() {
    assert.isFunction(quickSort);
  });

  it('should return an array', function() {
    let array = [10, 42, 18];
    let arraySorted = quickSort(array);
    assert.isArray(arraySorted);
  });

  it('should return an array with the same numbers', function() {
    var array = [10, 42, 18];
    let arraySorted = quickSort(array);
    assert.sameMembers(array, arraySorted);
  });

  it('should return an array with the same length', function() {
    let array = [10, 42, 18];
    let arrayLength = array.length;
    let arraySorted = quickSort(array);
    assert.equal(arraySorted.length, arrayLength);
  });

  it('should return a sorted Array', function() {
    let array = [10, 42, 18, 21, 92];
    let arraySorted = quickSort(array);
    assert.equal(checkSorted(arraySorted), true);
  });

  it('should sort an array with negative values', function() {
    let array = generateArray(100, -500, -1);
    let sortedArray = quickSort(array);
  });

  it('should sort an array with 5 values', function() {
    let array = generateArray(5, 100, 1);
    let sortedArray = quickSort(array);
  });

  it('should sort an array with 100 values', function() {
    let array = generateArray(100, 100, 1);
    let sortedArray = quickSort(array);
  });

  it('should sort an array with 1,000 values', function() {
    let array = generateArray(1000, 1000, 1);
    let sortedArray = quickSort(array);
  });

  it('should sort an array with 10,000 values', function() {
    let array = generateArray(10000, 10000, 1);
    let sortedArray = quickSort(array);
  });

  it('should sort an array with 50,000 values', function() {
    let array = generateArray(50000, 50000, 1);
    let sortedArray = quickSort(array);
  });
  
  it('should sort an array with 60,000 values', function() {
    let array = generateArray(60000, 60000, 1);
    let sortedArray = quickSort(array);
  });

});