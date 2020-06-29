var multiply = (x = 0, y = x) => {
  return x * y;
};

// Refactor the code below to use an arrow function
const fibonacciRecursive = (n) =>
  n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

module.exports = { multiply, fibonacciRecursive };
