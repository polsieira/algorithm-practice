// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // Solution 1:
  const count = str.split('').reduce((acc, character) => {
    if (!acc[character]) {
      acc[character] = 1;
    } else {
      acc[character]++;
    }
    return acc
  }, {})

  let maxCharacter;

  Object.keys(count).forEach((character, index) => {
    if (index === 0) {
      maxCharacter = character;
    } else {
      if (count[character] > maxCharacter) {
        maxCharacter = character;
      }
    }
  })
  return maxCharacter;
}

module.exports = maxChar;
