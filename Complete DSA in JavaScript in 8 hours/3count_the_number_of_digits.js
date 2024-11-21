// count the number of digits of a number

// ex:  34567 = 5  ,  -8989843=7

const countDigits = (num) => {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
};

console.log(countDigits(2423423));
