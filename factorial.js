/*
Factorial
Find the factorial of a nonnegative integer.

Helper Method Recursion
This problem can be solved in a multitude of ways. We will explore how to achieve a solution using helper method recursion.

0. Overview of steps
1. instantiate scope variables
2. return result
3. a) create helper method
   b) invoke helper method
4. base case
5. recursive case



input - output - base

              0 (0)
              1 (1)
              2 (1 * 2)
              3 (1 * 2 * 3)
              4 (1 * 2 * 3 * 4)
              5 (1 * 2 * 3 * 4 * 5)
base: if n = 1 return
else result = i * helper (i-1)
*/

function factorial(n) {

  function helper(i) {
    if (i == 1) {
      return 1;
    } else {
      return i * helper(i - 1);
    }
  }
  return helper(n);
}

console.log(factorial(3));
