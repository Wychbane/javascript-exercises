const add = function (a, b) {
  return a + b;
};

const subtract = function(a ,b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.length ?
  array.reduce((firstItem, nextItem) => firstItem * nextItem) : 0;
};

const power = function(int, ord) {
  return int**ord;
  //return Math.pow(int, ord);
};

const factorial = function(num) {
  if (num === 0) return 1;
	let total = 1;
  for (let i= num; i > 0; i--) {
    total *= i;
  }
  return total;
};

const recursiveFactorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n-1);
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
