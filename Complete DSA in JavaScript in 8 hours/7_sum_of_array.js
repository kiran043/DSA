// sum of array  [1,2,4] = 7
// how to find time complexity

const sumOfArray = (arr) => {
  let sum = 0; // runs one time (1)
  for (let i = 0; i < arr.length; i++) {
    // runs n number of time
    sum += arr[i];
    // sum = sum + arr[i];
  }
  return sum; // runs one time (1)
};

console.log(sumOfArray([1, 2, 3]));

// time complexity of algo is   N+2 ~ O(N+2)
// rules whenever there is a constant term time 2 in the above we can ignore them then it will -
//become O(N)
