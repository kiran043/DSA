//The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones,
//usually starting with 0 and 1. The sequence goes like this:
// example : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

const fibonacciSerice = (n) => {
  const serice = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextNumner = serice[i - 1] + serice[i - 2];
    serice.push(nextNumner);
  }

  return serice;
};

console.log(fibonacciSerice(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
