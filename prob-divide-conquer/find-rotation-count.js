function findRotationCount(arr, left=0, right=arr.length-1) {
    if (right < left) return 0;
    if (right === left) return left;
    
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[mid-1]) return mid;

    if (arr[right] > arr[mid]) return findRotationCount(arr, left, mid - 1);
    return findRotationCount(arr, mid + 1, right);
}

module.exports = findRotationCount