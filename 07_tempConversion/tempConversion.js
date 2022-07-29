/*
[°F] = [°C] × 9⁄5 + 32
[°C] = ([°F] − 32) × 5⁄9
*/

const ftoc = function(deg) {
  return Number(((deg - 32) * (5/9)).toFixed(1));
};

const ctof = function(deg) {
  return Number((((deg * 9/5) + 32)).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
