const findTheOldest = function (objArray) {
  return objArray.reduce(getOldest);
};

function getOldest(oldestPerson, currentPerson) {
  let currentYear = new Date();
  let oldestPersonAge = 0;
  let currentPersonAge = 0;

  if (oldestPerson.yearOfDeath === undefined) {
    oldestPersonAge = currentYear.getFullYear() - oldestPerson.yearOfBirth;
  } else {
    oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
  }
  if (currentPerson.yearOfDeath === undefined) {
    currentPersonAge = currentYear.getFullYear() - currentPerson.yearOfBirth;
  } else {
    currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
  }

  if (oldestPersonAge < currentPersonAge) {
    return (oldestPerson = currentPerson);
  } else {
    return oldestPerson;
  }
}

// Do not edit below this line
module.exports = findTheOldest;
