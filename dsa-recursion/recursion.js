/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1;
  return nums[i]*product(nums, i+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  if (i === words.length) return -1;
  return Math.max(words[i].length, longest(words, i+1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  let char = i % 2 === 0 ? str[i] : "";
  if (i === str.length) return "";
  return char + everyOther(str, i+1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left=0, right=str.length-1) {
  if (right < left) {
    return true;
  } else if (left <= right && str[left] === str[right]) {
    return isPalindrome(str, left+1, right-1);
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i === arr.length) {
    return -1;
  } else if (arr[i] === val) {
    return i;
  } else {
    return findIndex(arr,val, i+1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0) {
  if (i === str.length) return "";
  return revString(str, i+1) + str[i];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  console.log(obj);
  let strs = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') strs.push(obj[key]);
    if (typeof obj[key] === 'object') {
      strs = strs.concat(gatherStrings(obj[key]));
    }
  }
  return strs;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length -1) {
  const mid = Math.floor((right + left)/2);
  if (right < left) return -1;
  if (arr[mid] === val) return mid;
  if (arr[mid] < val) {
    return binarySearch(arr,val, mid + 1, right);
  } else {
    return binarySearch(arr, val, left, mid - 1);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
