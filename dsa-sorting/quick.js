/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start=0, end=arr.length){
    let pivot = arr[start];
    let idx = start
    for (let i = start + 1; i < end; i++) {
        if (arr[i] < pivot) {
            arr[idx] = arr[i];
            idx++
            let j = i;
            while (j > idx) {
                arr[j] = arr[j-1];
                j--;
            }
            arr[idx] = pivot;
        }
    }
    return idx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left=0, right=arr.length) {
    if (right - left + 1 <= 1) {
        return;
    }
    let idx = pivot(arr, left, right);
    quickSort(arr, 0, idx - 1);
    quickSort(arr, idx + 1, arr.length);
    return arr;
}

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
pivot(arr1);

module.exports = { quickSort, pivot };