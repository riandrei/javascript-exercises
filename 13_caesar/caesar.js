const caesar = function (inputString, shiftValue) {
  let characterCodes = [];

  for (let i = 0; i < inputString.length; i++) {
    characterCodes[i] = inputString.charCodeAt(i);

    if (isAWord(String.fromCharCode(characterCodes[i]))) {
      characterCodes[i] = shiftCharacterCode(characterCodes[i], shiftValue);
    }

    characterCodes[i] = String.fromCharCode(characterCodes[i]);
  }
  const outputString = characterCodes.join(``);

  return outputString;
};

function isAWord(inputCharacter) {
  let outputCharacter = inputCharacter;
  let notAWord = outputCharacter.replace(/\W/g, `%`);

  if (notAWord == `%`) {
    return false;
  }

  return true;
}

function shiftCharacterCode(charCode, shiftValue) {
  if (
    charCode + shiftValue > 64 &&
    charCode + shiftValue < 91 &&
    shiftValue > 0
  ) {
    return charCode + shiftValue;
  }

  if (
    charCode + shiftValue > 96 &&
    charCode + shiftValue < 123 &&
    shiftValue > 0
  ) {
    return charCode + shiftValue;
  }

  if (charCode > 64 && charCode < 91) {
    while (shiftValue > 26) {
      shiftValue -= 26;
    }
    if (charCode + shiftValue > 90) {
      return (charCode += shiftValue - 26);
    }
    if (charCode + shiftValue < 65) {
      return (charCode += shiftValue + 26);
    }
    return (charCode += shiftValue);
  }

  if (charCode > 96 && charCode < 123) {
    while (shiftValue > 26) {
      shiftValue -= 26;
    }
    if (charCode + shiftValue > 122) {
      return (charCode += shiftValue - 26);
    }
    if (charCode + shiftValue < 97) {
      return (charCode += shiftValue + 26);
    }
    return (charCode += shiftValue);
  }
}
// Do not edit below this line
module.exports = caesar;
