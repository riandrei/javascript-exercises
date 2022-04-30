const sumAll = function (startNum, lastNum) {
  let sum = 0;
  const startNumber = startNum;
  const lastNumber = lastNum;
  const firstError = startNumber < 0 || lastNumber < 0;
  const secondError = typeof startNumber && typeof lastNumber != `number`;

  if (firstError || secondError) {
    return `ERROR`;
  } else {
    if (startNumber < lastNumber) {
      for (let i = startNumber; i <= lastNumber; i++) {
        sum += i;
      }
    } else {
      for (let i = startNumber; i >= lastNumber; i--) {
        sum += i;
      }
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
