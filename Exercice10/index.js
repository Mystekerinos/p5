// printNumbers.js
function printNumbers(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    if (i > 1) {
      result += " ";
    }
    result += i;
  }
  return result;
}

export default printNumbers;
