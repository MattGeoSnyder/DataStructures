function sortedFrequency(arr, target, left=0, right=arr.length-1) {
    if (arr[left] === arr[right]) return right - left + 1;
    if (left === right || target > arr[right] || target < arr[left]) return -1;

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        let newLeft = arr[left] === target ? left : left + 1;
        let newRight = arr[right] === target ? right : right - 1;
        return sortedFrequency(arr, target, newLeft, newRight);
    } else {
        if (target < mid) return sortedFrequency(arr, target, left, mid - 1);
        return sortedFrequency(arr, target, mid + 1, right);
    }

}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)

module.exports = sortedFrequency