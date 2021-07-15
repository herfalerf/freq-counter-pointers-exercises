// add whatever parameters you deem necessary
function isSubsequence(subStr, str) {
  let subStrIdx = 0;
  let strIdx = 0;

  if (!subStr) return true;
  while (strIdx < str.length) {
    if (str[strIdx] === subStr[subStrIdx]) {
      subStrIdx++;
    }
    if (subStrIdx === subStr.length) return true;
    strIdx++;
  }
  return false;
}

module.exports = isSubsequence;
