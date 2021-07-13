/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let numbers = [2, 7, 11, 15],
  target = 9;
var twoSum = function (numbers, target) {
  let dp = new Map(),
    len = numbers.length;
  for (let i = 0; i < len; i++) {
    let tmp = target - numbers[i];
    if (dp.has(tmp)) {
      return [dp.get(tmp) + 1, i + 1];
    }
    dp.set(numbers[i], i);
  }
};

let a = twoSum(numbers, target);

console.log(a);