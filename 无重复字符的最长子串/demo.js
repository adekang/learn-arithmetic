/**
 * @param {string} s
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 字符字典
  const dic = new Map();
  // 左指针
  let minIndex = 0;
  // 历史最大长度
  let maxLength = 0;
  // 当前字符在 map 中存放的索引
  // 即当前字符上次出现的索引
  let curIndex;
  for (let i = 0; i < s.length; i++) {
    curIndex = dic.get(s[i]);
    // 如果上次出现的索引比左指针大，则证明字符重复发生在窗口内，重复有效
    if (curIndex >= minIndex) {
      // 将左指针移动到上此出现的索引的下一位，缩小当前窗口
      minIndex = curIndex + 1;
    }
    // 将当前字符存放到 map 中，并记录最新索引
    dic.set(s[i], i);
    // 将当前统计的不重复字符串的长度与历史不重复字符串的长度对比，存储最大值
    maxLength = Math.max(i + 1 - minIndex, maxLength);
  }
  return maxLength;
};

let s = "abcabcbb";

lengthOfLongestSubstring(s);
