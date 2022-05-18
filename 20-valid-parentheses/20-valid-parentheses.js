/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  /*
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
   */

  //I -  a string containing only (), [], or {}
  //O - a boolean determining if string is valid or not
  //C -  none
  //E - empty string

  /*
Strategy- loop through string by increments of two, checking each parens
for its matching partner. Can use a helper func for this.
If loop completes, return true. Else return false

*/
  if (s.length % 2 !== 0) {
    return false;
  }
  let stack = [];
  let result = false;
    
  for (i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
      switch(s[i]) {
          case ')':
              (stack.pop() === '(') ? result = true: result = false;
              break;
          case ']':
               stack.pop() === '[' ? result = true: result = false;
              break;
          case '}':
               stack.pop() === '{' ? result = true: result = false;
              break;
          default: 
              break;
      }
      if (result === false) {
        return result;
      }
    }
  }
    if ( stack.length > 0) {
        return false;
    }
  return result;
};