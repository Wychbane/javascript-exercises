const palindromes = function (string) {
    let stripped = string.replace(/[^a-z0-9]/gi, '').toLowerCase()
    const array =  [...stripped];
    let reverseArray = array.reverse()
    let reverseString = reverseArray.join('');
    return stripped === reverseString
 };

 /*
const palindromes = function(string) {
  processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );
};
 */

// Do not edit below this line
module.exports = palindromes;
