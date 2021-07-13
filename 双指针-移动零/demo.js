/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//  解题思路
// 左指针左边均为非零数；
// 右指针左边直到左指针处均为零。
// 因此每次交换，都是将左指针的零与右指针的非零数交换，且非零数的相对顺序并未改变
let a = [1, 0, 12, 5, 0, 1, 0, 5];
// 方法一 O(n^2)
var moveZeroes1 = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

//  方法二
const moveZeroes = nums => {
  const length = nums.length;
  let left = 0;
  let right = 0;
  while (right < length) {
    if (nums[right]) {
      const temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      left++;
    }
    right++;
  }
};