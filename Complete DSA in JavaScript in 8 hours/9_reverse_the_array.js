const arr = [3, 4, 5, 6, 2, 5];
const result = arr.reverse();
console.log(result);

const arr2 = [8, 3, 5, 3, 5];
const reverseArr = arr2.reduce((acc, curr) => [curr, ...acc], []);
console.log(reverseArr);

//without builtin mwthod we can write this
const arr1 = [7, 4, 8, 9];
const rev = [];
for (let i = arr1.length - 1; i >= 0; i--) {
  rev.push(arr1[i]);
}
console.log(rev);
