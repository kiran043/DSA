const findMissingNumber = (arr, n) => {
  let neSet = new Set(arr);
  let missingNumber = [];
  for (let i = 1; i < n; i++) {
    if (!neSet.has(i)) {
      missingNumber.push(i);
    }
  }
  return missingNumber;
};

console.log(findMissingNumber([1, 2, 4, 5, 7, 8], 10));
