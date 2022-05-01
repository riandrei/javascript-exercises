const findTheOldest = function (objArray) {
  return objArray.reduce(getOldest);
};

function getOldest(oldestPerson, currentPerson) {
  let currentYear = new Date();
  let oldestPersonAge = 0;
  let currentPersonAge = 0;

  oldestPersonAge =
    oldestPerson.yearOfDeath === undefined
      ? currentYear.getFullYear() - oldestPerson.yearOfBirth
      : oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;

  currentPersonAge =
    currentPerson.yearOfDeath === undefined
      ? currentYear.getFullYear() - currentPerson.yearOfBirth
      : currentPerson.yearOfDeath - currentPerson.yearOfBirth;

  if (oldestPersonAge < currentPersonAge) {
    return (oldestPerson = currentPerson);
  } else {
    return oldestPerson;
  }
}

// Do not edit below this line
module.exports = findTheOldest;
