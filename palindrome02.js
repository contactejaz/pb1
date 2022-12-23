/**
 *  Anagram Palindrome
 *
 *  Given a string, determine if the string can be rearranged to form a palindrome.
 *
 *  A palindrome is a word that is the same as its reversed. For example: "racecar"
 *  and "noon" are palindromes because they match their reversed version
 *  respectively. On the other hand, "cat" is not a palindrome because "cat"
 *  does not equal "tac".
 *
 *  Parameters
 *  Input: str {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *
 *  Assume the string only contains lowercase letters and no spaces.
 *
 *  Time: O(N)
 *  Space: O(1)
 *
 *  Examples
 *  `"carrace" --> true ("carrace" can be rearranged to "racecar")`
 *  `"cat" --> false`
 */

/*
1 letter: true
0 letter: true

length even: 
  every letter count is even
  if odd return false
length odd: 
  every letter count is even and 1 letter count is odd
  if more than one odd return false

make hash with counts

ett -> tet


*/

function anagramPalindrome(s) {
  let hash = {};
  let result = 1;

  function recurse(i) {


    if (hash[s[i]] > 0) {
      hash[s[i]] = hash[s[i]] + 1;
    } else {
      hash[s[i]] = 1;
    }
    
    if (i == 0) {
      result = 1;
      return;
    }
    //console.log(i + ' ' + s[i]);


    /*
    if (s.length % 2 == 0) { //even
            
    }else{ //odd
      
    }
    */

    recurse(i - 1);
  }

  recurse(s.length - 1);

  //console.log(hash);

  var foundOddOne = 0;
  

  //even length - all counts should be even
  //console.log(result);
  
  //console.log(s.length + ' ' + s.length % 2);
  for (i = 0; i < s.length-1; i++) {
    let key = s[i];
    //console.log(hash[key] + ' ' + key);
    
    //even
    if (s.length % 2 == 0) {
      if (hash[key] % 2 != 0){
        result = 0;
        return result;
      }    
    }
    
    if (s.length % 2 != 0) {
      
      if (hash[key] % 2 != 0){
        //console.log('ej ' + hash[key] + ' ' + key);
        foundOddOne = foundOddOne + 1;
        if (foundOddOne > 1){
          result = 0;
          return result;
        }
      }
    }
  }


  
  //odd length only one can be odd rest all counts to be even

  return (result);
}

console.log(anagramPalindrome('ddtt'));
