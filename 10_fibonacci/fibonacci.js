const fibonacci = function(n) { 
    if (typeof(n) === 'string'){
        n = Number(n);
    }
    if (n < 1 ) {
        return 'OOPS';
    }
    else if (n === 1){
        return 1;
    } else if (n === 2){
        return 1;
    }
    return (fibonacci(n-2) + fibonacci(n-1));
};

/* 
const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};
*/

// Do not edit below this line
module.exports = fibonacci;
