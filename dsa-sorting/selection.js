function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        let newMin = { idx: i, val: arr[i]}
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < newMin.val){
                newMin = { idx: j, val: arr[j]};
            }
        }
        if (newMin.val < min) {
            arr[newMin.idx] = min;
            arr[i] = newMin.val;
        }
    }
    return arr;
}

module.exports = selectionSort;