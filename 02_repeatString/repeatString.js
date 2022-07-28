const repeatString = function(phrase, num) {
    let word = ''
    let i = 0
    if (num < 0){
        return 'ERROR'
    }
    else while (i < num ) {
        word += phrase;
        i++;
    }
    return word

};

// Do not edit below this line
module.exports = repeatString;
