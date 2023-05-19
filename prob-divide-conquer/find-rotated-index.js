function findRotatedIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right)/2);

        if (arr[mid] === target) return mid;

        if (arr[mid] > target && arr[left] <= target) {
            right = mid - 1;
        }

        if (arr[mid] > target && arr[left] >= target) {
            left = mid + 1;
        }

        if (arr[left] <= target && arr[mid] > target) {
            right = mid - 1;
        }

        if (arr[left] <= target && arr[mid] < target) {
            left = mid + 1;
        }
    }

    return -1;
}

module.exports = findRotatedIndex