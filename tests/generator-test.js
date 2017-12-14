const assert = require('chai').assert;
const generateArray = require('../lib/generator.js');

describe('generateArray', function() {

  it('should be a function', function() {
    assert.isFunction(generateArray);
  });

  it('should return an array', function() {
    assert.isArray(generateArray());
  });

  it('should return an array with a certain number of values', function() {
    var genArray = generateArray(5, 10, 1);

    assert.equal(genArray.length, 5);
  });

});