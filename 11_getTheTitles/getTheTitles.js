const getTheTitles = function (objectArray) {
  const titleArray = [];
  for (let i = 0; i < objectArray.length; i++) {
    titleArray.push(objectArray[i].title);
  }
  return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
