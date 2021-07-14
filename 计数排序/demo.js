const sort = arr => {
  let hashTable = {},
    max = 0,
    result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in hashTable)) {
      hashTable[arr[i]] = 1;
    } else {
      hashTable[arr[i]] += 1;
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let j = 0; j <= max; j++) {
    if (j in hashTable) {
      for (let i = 0; i < hashTable[j]; i++) { // 出现2次 push 2次
        result.push(j);
      }
    }
  }
  return result;
};

let a = [2, 22, 556, 22, 15, 2, 52, 22];

console.log(sort(a));
