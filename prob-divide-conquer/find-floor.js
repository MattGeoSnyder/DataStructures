function findFloor(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right)/2);

    if (mid === 0 || mid === arr.length -1) {
      return arr[mid] <= target ? arr[mid] : -1;
    }

    if (arr[mid] > target && arr[mid-1] <= target) {
      return arr[mid-1];
    }


    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

module.exports = findFloor