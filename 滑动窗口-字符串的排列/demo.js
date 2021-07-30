/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (t, s) {
  let need = {}; // 需要凑齐的字符
  let window = {}; // 记录窗口中的字符
  for (let i = 0; i < t.length; i++) {
    need[t[i]] ? need[t[i]]++ : (need[t[i]] = 1);
  }

  let left = 0,
    right = 0;
  // 如果 valid 和 need.size 的大小相同，则说明窗口已满足条件，已经完全覆盖了串 T
  let valid = 0; // valid 变量表示窗口中满足 need 条件的字符个数
  // 记录最小覆盖子串的起始索引及长度
  while (right < s.length) {
    // c 是将移入窗口的字符
    let c = s[right];
    // 扩大 右移窗口
    right++;
    // 进行窗口内数据的一系列更新
    // if (need[c]) {
    window[c] ? window[c]++ : (window[c] = 1);
    if (window[c] === need[c]) {
      valid++;
    }
    // }

    // 判断左侧窗口是否要收缩
    // 如果 valid 和 need.size 的大小相同，则说明窗口已满足条件，已经完全覆盖了串 T
    // 剩下就是处理最优解
    // 为什么是right-left===t.length
    // 我们要的子串字符串是2  s1 = "ab" s2 = "eidbaooo"
    // 这样可以限制住它们连在一起
    while (right - left === t.length) {
      if (valid === Object.keys(need).length) {
        return true;
      }
      // d 是将移出窗口的字符
      let d = s[left];
      // 左移窗口
      left++;
      // 进行窗口内数据的一系列更新
      // 移除的刚好是需要凑齐的字符
      // if (need[d]) {
      if (window[d] == need[d]) valid--;
      window[d]--;
      // }
    }
  }
  return false;
};
