// add whatever parameters you deem necessary
function freqCounter(num) {
  let freqs = {};

  for (let val of num) {
    let valCount = freqs[val] || 0;
    freqs[val] = valCount + 1;
  }
  return freqs;
}

function sameFrequency(num1, num2) {
  let numStr1 = num1.toString();
  let numStr2 = num2.toString();

  if (numStr1.length !== numStr2.length) return false;

  let nums1Freqs = freqCounter(numStr1);
  let nums2Freqs = freqCounter(numStr2);

  for (let key in nums1Freqs) {
    if (nums1Freqs[key] !== nums2Freqs[key]) return false;
  }

  return true;
}

module.exports = { freqCounter, sameFrequency };
