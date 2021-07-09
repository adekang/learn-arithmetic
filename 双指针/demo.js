// 解题思路
// 原数组是有序的吗，但有负数
// 所以平方后，可能出现最大的数在两边
// 定义双指针分别指向nums的头和尾
// 比较头尾数的绝对值大小
// 若头大，头进入res，左指针右移;尾大类似。
// 注意：从头进入res，也就是进入到res的尾部

const sortedSquares = nums => {
  const res = [];
  let [left, right] = [0, nums.length - 1];
  while (left <= right) {
    const leftNum = Math.abs(nums[left]);
    const rightNum = Math.abs(nums[right]);
    if (leftNum > rightNum) {
      res.unshift(leftNum * leftNum);
      left++;
    } else {
      res.unshift(rightNum * rightNum);
      right--;
    }
  }
  return res;
};

const a = [-4, -1, 0, 3, 10];

console.log(sortedSquares(a));
