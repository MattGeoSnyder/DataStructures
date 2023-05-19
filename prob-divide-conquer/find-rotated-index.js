function findRotatedIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right)/2);
        let newLeft;
        let newRight;

        if (arr[mid] === target) return mid;

        if (arr[mid] > target && arr[left] <= target) {
            newRight = mid - 1;
        }

        if (arr[mid] > target && arr[left] >= target) {
            newLeft = mid + 1;
        }

        if (arr[left] <= target && arr[mid] > target) {
            newRight = mid - 1;
        }

        if (arr[left] <= target && arr[mid] < target) {
            newLeft = mid + 1;
        }

        left = newLeft || left;
        right = newRight || right;
    }

    return -1;
}

findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)

module.exports = findRotatedIndex