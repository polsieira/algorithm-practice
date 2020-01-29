// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // Solution 1:
  const aCharMap = createCharacterMap(stringA);
  const bCharMap = createCharacterMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let character in aCharMap) {
    if (aCharMap[character] !== bCharMap[character]) {
      return false;
    }
  }

  return true;

  // Solution 2:
  // return cleanString(stringA) === cleanString(stringB);
}

const createCharacterMap = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').reduce((map, character) => {
    map[character] = map[character] ? map[character] + 1 : 1;
    return map;
  }, {})
}

const cleanString = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
