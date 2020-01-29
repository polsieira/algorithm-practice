// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //Solution 1:
  // const reversed = str.split('').reverse().join('');
  // return reversed === str;

  //Solution 2:
  return str.split('').every((character, index, array) => {
    return character === array[array.length - 1 - index];
  });
}

module.exports = palindrome;
