function isNumeric(n) {
  return (typeof n == 'number' && !isNaN(n));
}

function sum(a, b) {
  if (!isNumeric(a) || !isNumeric(b)) {
    throw new TypeError();
  }

  return a + b;
}

module.exports = sum;
