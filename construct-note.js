// add whatever parameters you deem necessary
function createFrequencyCounter(str) {
  let freqs = {};

  for (let char of str) {
    let charCount = freqs[char] || 0;
    freqs[char] = charCount + 1;
  }
  return freqs;
}

function constructNote(str1, str2) {
  let str1Freqs = createFrequencyCounter(str1);
  let str2Freqs = createFrequencyCounter(str2);

  if (str2 === "") return false;

  for (let key in str1Freqs) {
    if (str2Freqs[key] === false) return false;

    if (str2Freqs[key] < str1Freqs[key]) return false;
  }
  return true;
}

module.exports = { createFrequencyCounter, constructNote };
