const palindromes = function (string) {
    let stripped = string.replace(/[^a-z0-9]/gi, '').toLowerCase()
    const array =  [...stripped];
    let reverseArray = array.reverse()
    let reverseString = reverseArray.join('');
    return stripped === reverseString
 };

// Do not edit below this line
module.exports = palindromes;
