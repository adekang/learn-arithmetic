const sort = numbers => {
  if (numbers.length <= 1) {
    return numbers;
  }
  let left = [];
  let right = [];
  let centerIndex = Math.floor(numbers.length / 2);
  let pivot = numbers.splice(centerIndex, 1)[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < pivot) {
      left.push(numbers[i]);
    } else {
      right.push(numbers[i]);
    }
  }

  return sort(left).concat([pivot], sort(right));
};

let a = [2, 22, 556, 12, 15, 2, 52, 22];

console.log(sort(a));
