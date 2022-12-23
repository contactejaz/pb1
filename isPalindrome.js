/*

                            ROTOR
                           /     \
                          R       R (1) 
                            OTOR
                           /    \
                          O      R (0)
                             TO
                            /  \
                           T    O (0)


Base:
if the string is made up of no letters or just one letter its a palindrome
otherwise compare the first and last letter of string

if  first and last letters differ - not a palindrome
otherwise if first and last letters are same strip them off and determine if remaining string is a palindrome
if 1 letter left is palindrome
*/

function palindrome(s){
  let i;
  let result = true;

  function recurse(s1){
    if (s1.length == 0 || s1.length == 1){
      return;
    }

    if (s1[0] != s1[s1.length-1]){
      result = false;
      return;      
    }else{
      //console.log('s1=' + s1);
      recurse(s1.substr(1, s1.length-2));
      return;
    }
  
    //console.log(s1);
  
  }
  i = recurse(s);
  //console.log(recurse(s));
  //return recurse(s);
  return result;
}

console.log(palindrome('ROTOR'));
