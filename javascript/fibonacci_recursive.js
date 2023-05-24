function fibonacci(n) {
  if (n < 2) return n;
  let numberList = [ 0, 1 ]
  for (let i = 2; i <= n; i++) {
    numberList[i] = numberList[i -2] + numberList[i - 1]
  }
  return parseInt(numberList.slice(-1))
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
