/*
/**
 *  Anagram Pair
 *
 *  Given two strings, determine if the strings are anagrams of one another.
 *
 *  Two words are anagrams of one another if they contain the same letters.
 *
 *  Parameters
 *  Input: str1 {String}
 *  Input: str2 {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *  With N as the length of the first string, and M as the length of the second string.
 *
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  "cat", "act" --> true
 *  "cat", "dog" --> false
 *  "racecar", "aaccrres" --> false
 */

/*

string1 or string 2 is different in length: anagram is false
string1 and string 2 is blank: anagram is true
string1 and string 2 is single letter and same: anagram is true
string1 or string 2 is single letter and different: anagram is false

string1 or string 2 is more than 1 letter: 
  string[0] exists in string2 : No -> anagram is false
  pop string[0] and pop string2 first letter os string1
  recurse (string1, string 2)
*/

function anagramPair(s1, s2) {
  
  let t;
  let str;

  function recurse() {
    let i = 0;  
    if (s1.length != s2.length){      
      
      return 0;
    }
    
   //console.log('.' + s1.length + '. length .' + s2.length + '.');
    
    if ((s1.length == 0) && (s2.length == 0)){
      //console.log('ej'); 
      return 1;
    }

    if ((s1.length) == 1 && (s2.length == 1)){  
      if (s1 == s2){
        return 1;
      }else{
        
        return 0;
      }
    }
    
    if (s2.search(s1[0]) < 0) {      
      return 0;
    }else {
      //s1 = s1.shift();
      t = s1[0];
      //console.log(s1 + ' ' + s2);// + ' ' + i + ' ' + t);
      s1 = s1.slice(i + 1, s1.length);
      //console.log(s1 + ' ' + s2 + ' ' + i + ' ' + t);
      
      i = s2.indexOf(t);
      //console.log(s1 + ' ' + s2 + ' ' + i + ' ' + t);
      
      str=s2;
      s2 = str.slice(0, i) + str.slice(i+1, str.length); 
      
      //console.log(s1 + ' ' + s2 + ' ' + str);
      
      //console.log(s2 + ' ' + i);      
      //console.log(s1 + ' ' + s2);// + ' ' + i + ' ' + t);
      return recurse();
    }

    
  }
  //console.log(s1 + ' ' + s2);
  //console.log('.' + s1.length + '. length .' + s2.length + '.');
  return recurse();
 
}

console.log(anagramPair('abcdjkl', 'lkjdbac'));
