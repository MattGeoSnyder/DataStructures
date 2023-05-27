function radixSort(arr) {
    let ret = arr;
    let i = 0;

    let lengths = arr.map((val) => Math.floor(Math.log10(val)));
    let length = Math.max(...lengths) + 1;

    for (let k = 0; k < length; k++) {
        let newArr = [];
        let buckets = [];

        for (let j = 0; j < 10; j++) {
            buckets[j] = [];
        }

        let digits = ret.map((val) => Math.floor((val/Math.pow(10, i))) % 10);
        
        for (let n = 0; n < digits.length; n++) {
            buckets[digits[n]].push(ret[n]);
        }

        for (let bucket of buckets) {
            newArr = [...newArr, ...bucket];
        }

        ret = newArr;
        i++;
    }

    return ret;
}

radixSort([8, 6, 1, 12])

module.exports = radixSort;