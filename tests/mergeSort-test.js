const assert = require('chai').assert;
const mergeSort = require('../lib/mergeSort.js');
const generateArray = require('../lib/generator.js');
const checkSorted = require('../lib/sortCheck.js');

describe('mergeSort', function() {

  it('should be a function', function() {
    assert.isFunction(mergeSort);
  });

  it('should return an array', function() {
    let array = [10, 42, 18];
    let arraySorted = mergeSort(array);
    assert.isArray(arraySorted);
  });

  it('should return an array with the same numbers', function() {
    let array = [10, 42, 18];
    let arraySorted = mergeSort(array);
    assert.sameMembers(array, arraySorted, 'have same numbers');
  });

  it('should return an array with the same length', function() {
    let array = [10, 42, 18];
    let arrayLength = array.length;
    let arraySorted = mergeSort(array);
    assert.equal(arraySorted.length, arrayLength);
  });

  it('should return a sorted Array', function() {
    let array = [10, 42, 18, 21, 92];
    let arraySorted = mergeSort(array);
    assert.equal(checkSorted(arraySorted), true);
  });

  it('should sort an array with negative values', function() {
    let array = generateArray(100, -500, -1);
    let sortedArray = mergeSort(array);
  });

  it('should sort an array with 5 values', function() {
    let array = generateArray(5, 100, 1);
    let sortedArray = mergeSort(array);
  });

  it('should sort an array with 100 values', function() {
    let array = generateArray(100, 100, 1);
    let sortedArray = mergeSort(array);
  });

  it('should sort an array with 1,000 values', function() {
    let array = generateArray(1000, 1000, 1);
    let sortedArray = mergeSort(array);
  });

  it('should sort an array with 10,000 values', function() {
    let array = generateArray(10000, 10000, 1);
    let sortedArray = mergeSort(array);
  });

  it('should sort an array with 50,000 values', function() {
    let array = generateArray(50000, 50000, 1);
    let sortedArray = mergeSort(array);
  });

  it('should sort an array with 100,000 values', function() {
    let array = generateArray(100000, 100000, 1);
    let sortedArray = mergeSort(array);
  });

  it('should sort an array with 126,500 values', function() {
    let array = generateArray(126500, 126500, 1);
    let sortedArray = mergeSort(array);
  });
  
});