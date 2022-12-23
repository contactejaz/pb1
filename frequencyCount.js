/*
 *  Homework - Frequency Count
 */

/*
 * Utilize the frequency count pattern to solve these problems.  Use a Hash Set
 * or an Array instead of a Hash Table where applicable.
 *
 * Unique
 *
 * Given an array of integers, return an array with all duplicates removed.*
 *
 * Parameters
 * Input: arr {Array of Integers}
 * Output: {Array of Integers}
 *
 * Constraints
 *
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * [1, 2, 4, 4, 5, 6] --> [1, 2, 4, 5, 6]
 * [1, 1, 2, 2, 3, 3]' --> [1, 2, 3]
 * [1, 2, 3, 1, 2] --> [1, 2, 3]
 */

/*
              [3,5,5,7]
              /        \

get each member put in hash as key and increment frequency
return all keys
                  

*/

'use strict';

function unique(arr) {
  let hash = {};
  let key;

  function recurse(i) {
    if (i == arr.length) {
      return 0;
    }
  
    if (hash[arr[i]] > 0) {
      hash[arr[i]] = hash[arr[i]] + 1;
    }else{
      hash[arr[i]] = 1; 
    }
    return recurse(i + 1);
  }

  recurse(0);
  return Object.keys(hash);

}
console.log(unique([1, 2, 4, 4, 5, 6]));
