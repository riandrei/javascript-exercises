const fibonacci = function (nthFibonacci) {
  const array = [0, 1];
  if (nthFibonacci < 0) {
    return `OOPS`;
  }
  for (let i = 2; i <= nthFibonacci + 2; i++) {
    array[i] = array[i - 2] + array[i - 1];
  }
  return array[nthFibonacci];
};

// Do not edit below this line
module.exports = fibonacci;
