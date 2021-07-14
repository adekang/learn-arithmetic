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


console.log(sort(a));
