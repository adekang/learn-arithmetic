const sort = arr => {
  let hashTable = {},
    max = 0, // 存放最大值
    result = []; // 存放输出结果
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in hashTable)) {
      hashTable[arr[i]] = 1; // hash里面没有就放进去，记录一
    } else {
      hashTable[arr[i]] += 1; //如果有就将它多次记录
    }
    if (arr[i] > max) {
      max = arr[i]; // 找到数组里面最大值
    }
  }
  for (let j = 0; j <= max; j++) {
    if (j in hashTable) {
      // hash 里面有就循环打印出来
      for (let i = 0; i < hashTable[j]; i++) {
        // 出现2次 push 2次
        result.push(j);
      }
    }
  }
  return result;
};

let a = [2, 22, 556, 22, 15, 2, 52, 22];

console.log(sort(a));


