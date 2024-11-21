//Sum of all natural number

function sumofNaturalNumber(num) {
  let sum = 0;
  for (i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}
//or
function sumofNaturalNumber1(num) {
  return (num * (num + 1)) / 2;
}

console.log(sumofNaturalNumber(6));
console.log(sumofNaturalNumber1(6));
