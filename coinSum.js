/*
Given an array of coins and a target total, return how many unique ways there are to use the coins to make up that total.

Input/Output

Input: coins {Integer Array}, total {Integer}
Output: {Integer}

Example 1:

Input: [1,2,3], 4
Output: 4
Possible Combinations:
1+1+1+1
1+3
1+1+2
2+2

Example 2:

Input: [2,5,3,6], 10
Output: 5
Possible Combinations:
2+3+5
5+5
2+3+2+3
2+2+6
2+2+2+2+2

Notes
1). You have an unlimited number of each coin type. All coins in the
coin array will be unique
2). Order does not matter. Ex: One penny and one nickel to create six
cents is equivalent to one nickel and one penny


Input   Output
[1 2 3] 4 
  
base: 
- if reach 0 return 1
- if reach < 0 return 0

Updated base: 
total > 0 && arr.length === 0 return 0
// total = 0 && arr.length > 0 return 1
total === 0 return 1



                            4, [1,2,3]
            subtract 1/                      \ pop 1
              3, [1,2,3]                   4, [1,2]
              /        \               /             \
      2, [1,2,3]      3,[1,2]      3,[1,2]          4,[1]
      /        \                  /        \        /      \
   1,[1,2,3]    2, [1,2]      2, [1,2]     3,[1]   3,[1]   4,[]
      /         \               /
   0,[1,2,3]    2,[1]        1[1,2]
                            /
                        0[1,2]




function recurs(arr, total){
let combination = 0

  recurse(total, ){
    // 
  }
}

coinSum(total, coins)

helper:
  if total < 0 return 0
  if total > 0 and arr.length ==0 return 0
  if total == 0 return 1
  
  
  left = helper (total - coin[0],coins)
  coins.pop
  right = total, coins
  coins.push
  
  return left + right;
}

return helper 
*/

function coinSum(totalMain, coinsMain) {
  let hash = {}

  function recurse(total, coins) {
    let key = total+"_"+coins;

    if(key in hash) {
      return hash[key];
    }

    if (total < 0) {
      return 0;
    }
    
    if (total > 0 && coins.length == 0) {
      return 0;
    }

    if (total === 0 && coins.length > 0) {
      return 1;
    }
    
    
    let left = recurse(total - coinsMain[coins.length - 1], coins);
    let coinPopped = coins.pop();
    let right = recurse(total, coins);
    coins.push(coinPopped);

    hash[key] = left + right;

    return left + right;

  }
  
  return recurse(totalMain, coinsMain);
}

console.log(coinSum(1000, [2,5,3,6,7,8,9,10]));
