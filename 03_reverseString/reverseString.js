const reverseString = function(string) {
    let reverse = ''
    let length = string.length
    for (i = length ; i >= 0 ; i--){
        letter = string.slice(i-1,i);
        reverse += letter;
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
