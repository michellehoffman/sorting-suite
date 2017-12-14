function quickSort(array) {
  if(array.length <= 1) {
    return array;
  }
  let pivot = array.pop();
  let left = [];
  let right = [];
  
  while(array.length >= 1) {
    let num = array.shift();
    
    if(num < pivot) {
      left.push(num);
    } else {
      right.push(num);
    } 
  }
 return merge(quickSort(left), quickSort(right), pivot);
}

function merge(left, right, pivot) {
  let array = [...left, pivot, ...right];

  return array;
}

module.exports = quickSort;