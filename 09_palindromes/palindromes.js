const palindromes = function (palindromeInput) {
  let isPalindrome;
  const palindrome = palindromeInput
    .replace(/\s/g, ``)
    .replace(/\W/g, ``)
    .toLowerCase();
  let j = palindrome.length - 1;

  for (let i = 0; i < palindrome.length / 2; i++) {
    if (palindrome[i] == palindrome[j]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
      break;
    }
    j--;
  }

  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
