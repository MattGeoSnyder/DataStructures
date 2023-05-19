function countZeroes(arr) {
  let left = 0;
  let right = arr.length -1;
  
  while (left<= right) {
    let mid = Math.floor((right + left)/2);
    
    if (mid === 0) {
      return arr[mid] === 0 ? arr.length : arr.length - 1;
    }

    if ((arr[mid] === 0 && arr[mid-1] === 1)) {
      return arr.length - mid;
    }

    if(arr[mid] === 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

  }

  return 0;
}

countZeroes([1, 0, 0, 0, 0])

module.exports = countZeroes