const repeatString = function (inputString, repeatNum) {
  let input = inputString;

  for (let i = 1; i < repeatNum; i++) {
    input += inputString;
  }

  if (repeatNum == 0) {
    return ``;
  } else if (repeatNum < 0) {
    return `ERROR`;
  } else {
    return input;
  }
};

// Do not edit below this line
module.exports = repeatString;
