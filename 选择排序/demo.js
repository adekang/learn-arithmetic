let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

let minIndex = numbers => {
  let index = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[index]) {
      index = i;
    }
  }
  return index;
};
let sort = numbers => {
  for (let i = 0; i < numbers.length - 1; i++) {
    let index = minIndex(numbers.slice(i)) + i;
    if (index !== i) {
      swap(numbers, index, i);
    }
  }
  return numbers;
};

let a = [2, 22, 556, 12, 15, 2, 52, 22];

console.log(sort(a));
