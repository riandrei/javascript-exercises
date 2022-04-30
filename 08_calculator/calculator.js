const add = (firstNum, secondNum) => firstNum + secondNum;

const subtract = (firstNum, secondNum) => firstNum - secondNum;

const sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function (array) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

const power = function (num, pow) {
  let result = num;
  for (let i = 1; i < pow; i++) {
    result *= num;
  }
  return result;
};

const factorial = function (num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
