/*
input 7 => 0,1,1,2,3,5,8 output: 8

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
*/

function getNthFibonacci(n) {
  let arr = [];
  let i = 0;

  function helper() {
    if (i <= 1) {
      arr[i] = i;
    }
    if (i > 1 && i < n) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
    if (i == n - 1) {
      return;
    }
    i++;
    helper();
  }
  helper();
  return arr[n - 1];
}

console.log(getNthFibonacci(7));
