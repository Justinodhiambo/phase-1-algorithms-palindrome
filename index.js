function isPalindrome(str) {
    str = str.toLowerCase();
    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }

/* Pseudocode:
  1. Convert the input string to lowercase.
  2. Initialize two pointers, one at the beginning and one at the end of the string.
  3. Use a loop to compare characters from the outer edges towards the center.
  4. If any characters don't match, return false (not a palindrome).
  5. If the loop completes without returning false, return true (it's a palindrome).
*/

/*
  The code converts the input string to lowercase for case-insensitive comparison. It then uses two pointers, `left` and `right`, to compare characters from the start and end of the string. If any characters don't match during the loop, the function returns `false` to indicate that it's not a palindrome. If the loop completes without finding any mismatches, the function returns `true`, indicating that the input string is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Custom test cases
  console.log(isPalindrome("abba")); 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}



module.exports = isPalindrome;
