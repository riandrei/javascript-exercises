const removeFromArray = function () {
  const array = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    let filterValues = array.indexOf(arguments[i]);
    if (filterValues >= 0) {
      array.splice(filterValues, 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
