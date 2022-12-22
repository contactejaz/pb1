/*
input 6 => 0,1,1,2,3,5,8 output: 8

                  ''
                  1(0)
                  0

                  2 (1)
                0  1

                 3 (1)
              0  1  1

                  4 (2)
              0  1  1  2

base: 
-find numbers till the count of numbers == input (return)
-next number == sum of last two numbers
-return last number found
-save only 3 numbers - n-2 minus2, n-1 minus1 and n


input 6 => 0,1,1,2,3,5,8 output: 8
           0 1 2 3 4 5 6   
*/  

function getNthFibonacci(n) {

  function helper(index) {
    if (index < 2) {
      return index;
    } else {
      return helper(index - 2) + helper(index - 1);
    }
  }
  return helper(n);
}

console.log(getNthFibonacci(6));
