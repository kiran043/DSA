// Palindrome means  "level" reverse should me same

const palindrome = (inputStr) => {
  let str = inputStr.toString();
  let resultInput = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultInput = resultInput + str[i];
  }

  //   return resultInput === str ? "true" : "false";
  return resultInput === str;
};

console.log(palindrome("level"));
console.log(palindrome(121));

// second method with built in method
function isPalindrome(str) {
  // Convert the string to lowercase
  const lowerStr = str.toLowerCase();
  // Reverse the string
  const reversedStr = lowerStr.split("").reverse().join("");
  // Check if the original string is equal to the reversed string
  return lowerStr === reversedStr;
}

// Test the function
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("121"));
