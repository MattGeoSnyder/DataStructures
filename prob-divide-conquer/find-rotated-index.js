function findRotatedIndex(arr, target, left=0, right=arr.length-1) {

    let mid = Math.floor((left + right)/2);

    if (arr[mid] === target) return mid;
    if (arr[left] === target) return left;
    if (arr[right] === target) return right;

    if (target > arr[left]) return findRotatedIndex(arr, target, left + 1, mid - 1);
    if (target < arr[right]) return findRotatedIndex(arr, target, mid + 1, right - 1);
    
    return -1;
}

findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)

module.exports = findRotatedIndex