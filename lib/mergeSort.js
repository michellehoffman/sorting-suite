function mergeSort(array) {
  if(array.length <= 1) {
    return array;
  }
  
  const half = Math.floor(array.length / 2);
  const left = array.slice(0, half);
  const right = array.slice(half);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let array = [];
  while(left.length > 0 && right.length > 0) {
    if(left[0] < right[0]) {
      let lowest = left.shift();
      array.push(lowest);
    } else {
      let lowest = right.shift();
      array.push(lowest);
    }
  }
  if(left.length) {
    array = [...array, ...left];
  } else if(right.length) {
    array = [...array, ...right];
  }
  return array;
}

module.exports = mergeSort;