/*
Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u).

Input: n (Integer)
Output: Integer

Input: n = 1
Output: 5
Explanation: The strings that consist of vowels only are ["a","e","i","o","u"].

Input: n = 2
Output: 25
Explanation: The 25 strings that consist of vowels are
["aa","ae","ai","ao","au","ea", ee","ei","eo","eu","ia","ie","ii","io","iu","oa","oe","oi",
"oo","ou","ua", "ue", "ui", "uo" "uu"].

*/

/*

1)  n =2 | Output: vowels combination (both ways)
2) output = array of all the combinations
3) Notes:
4) Base case:

- input is one integer (+ve)
- no limits to the number
- 
                2
              /  \
    1 of(aeiou)   1 of(aeiou) 

                        4
          /       |           |             \
  1 of(aeiou) 1 of(aeiou) 1 of(aeiou) 1 of(aeiou)

                ''
                |
                1
          / |  |  |  \
         a  e  i  o   u
                2
          |
aa  ae  ai  ao  au                
                3
|
aaa aae aai aao aau
- 
                    ""
                    1
      /         |    |    |   \
    a           e    i    o    u   
                    2
aa ae ai ao au 
              ea ee ia oa ua
                            ia ie ii io iu
                                          oa oe oi oo ou
                                                        ua ue ui uo uu
                   
Pseudocode:

function(n)
  arr;
  n>0
  helper('', 0)
  
  
  helper():
   if length_of_string = n 
   {   
     add to array 
     return
   }
   if (n > 0) recurse
   helper (s + vowel, length_of_string++)
   n=1
   arr = a e i o u
  
  for each vowel
    helper (s + vowel, length_of_string++)

code:
*/

function getVowel(n) {

  let arr = [];
  let vowel = "aeiou";

  function helper(s) {

    if (s.length == n) {
      arr.push(s);
      return;
    }

    for (let j = 0; j < vowel.length; j++) {
      helper(s + vowel[j]);
    }
  }

  helper('');
  return arr.length;
}

console.log(getVowel(2));
