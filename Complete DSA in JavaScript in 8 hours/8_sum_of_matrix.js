const sumOfMatrix = (num) => {
  sum = 0;
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num[i].length; j++) {
      sum = sum + num[i][j];
    }
  }
  return sum;
};

console.log(
  "sumOfMatrix",
  sumOfMatrix([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // 21

/** 
* ! Explanation of the Code:
* ? Initialization (let sum = 0):

 The sum variable is initialized to zero to accumulate the total sum of all elements in the matrix.
 Outer Loop (for (let i = 0; i < num.length; i++)):

 The outer loop iterates over each row (sub-array) of the matrix.
 num.length gives the number of rows in the matrix.
 Inner Loop (for (let j = 0; j < num[i].length; j++)):

 The inner loop iterates over each element within the current row (num[i]).
 num[i].length gives the number of elements in the current row.
 Adding the Current Element to sum (sum = sum + num[i][j]):

 In each iteration of the inner loop, the current element (num[i][j]) is added to the sum.
 Returning the Total Sum (return sum):

 Once all the elements have been processed, the function returns the total sum.
 Output:
 The output of this code will be the sum of all elements in the matrix, which is 63.


 
* ! Time Complexity Analysis:
 Let m be the number of rows and n be the number of columns in the matrix.
 The outer loop runs m times, iterating over each row.
 The inner loop runs n times for each row, iterating over each column.
 Since both loops together visit every element in the matrix exactly once, the total number of iterations is m * n.

 Thus, the time complexity is O(m * n), where:

 m is the number of rows.
 n is the number of columns.

m = 2 (number of rows)
n = 3 (number of columns)
* ? The total number of iterations will be 2 * 3 = 6, making the time complexity O(m * n).

*/
