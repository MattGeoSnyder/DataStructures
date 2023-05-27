/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start=0, end=arr.length - 1){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    let pivot = arr[start];
    let idx = start
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            idx++;
            swap(arr, idx, i);
        }
    }

    swap(arr, start, idx);
    return idx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left=0, right=arr.length-1) {
    if (left < right) {
        let idx = pivot(arr, left, right);
        quickSort(arr, 0, idx - 1);
        quickSort(arr, idx + 1, arr.length);
    }
    return arr;
}

// quickSort([4, 20, 12, 10, 7, 9])

  

module.exports = { quickSort, pivot };