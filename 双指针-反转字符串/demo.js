/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let right = s.length - 1;
  for (let left = 0; left < right; left++, right--) {
    [s[left], s[right]] = [s[right], s[left]];
  }
  return s;
};

let s = ["h", "e", "g"];

console.log(reverseString(s));
