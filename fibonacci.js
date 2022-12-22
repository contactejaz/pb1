/*
input 7 => 0,1,1,2,3,5,8

                  ''
                  1
                  0

                  2
                0  1

                 3
              0  1  1

                  4
              0  1  1  2

base: 
-find numbers till the count of numbers == input (return)
-next number == sum of last two numbers
*/

function getFibonacci(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    if (i > 1) {
      arr[i] = arr[i - 1] + arr[i - 2];
    } else {
      arr[i] = i;
    }
  }
  return arr;
}

console.log(getFibonacci(5));
