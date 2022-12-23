/**
 * Word Count
 *
 * Given an body of text, return a hash table of the frequency of each word.
 *
 * Parameters
 * Input: text {String}
 * Output: {Hash Table}
 *
 * Constraints
 *
 * Capital and lower case versions of the same word should be counted is the same word.
 *
 * Remove punctuations from all words.
 *
 * Time: O(N)
 * Space: O(N)
 * Where N is the number of characters in the string.
 *
 * **Examples**
 * 'The cat and the hat.' --> '{ the: 2, cat: 1, and: 1, hat: 1 }'`
 * 'As soon as possible.' --> '{ as: 2, soon: 1, possible: 1 }'`
 * 'It's a man, it's a plane, it's superman!' --> '{ its: 3, a: 2, man: 1, plane: 1, superman: 1 }'`
 */

/*
senetence read word by word 
push in hash with word as key the frequency

*/

function wordCount(sentence) {
  let hash = {};

  sentence = sentence.replace(/[?.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  //console.log(sentence.length);
  
  function recurse(i){

    if (i >= sentence.length){
      return 0;
    }
    if (i < 0){
      return 0;
    }
    
    let j = sentence.indexOf(' ', i+1);    
    if (j < 0 && i > 0){
      j = sentence.length;
    }
    word = sentence.substr(i, j-i).trim().toLowerCase();
        
   //console.log(i + ' '+ j + ' .' + word + '.');
    
    if (!hash[word] >0) {
      hash[word] = 1;  
    }else{
      hash[word] = hash[word] + 1;
    }
    recurse(j);
    
  }
  
  recurse(0);
  
  //console.log(hash);  
  return hash;
}

/*
The cat and   the hat
01234567891011

*/
console.log(wordCount('The cat and the hat'));
