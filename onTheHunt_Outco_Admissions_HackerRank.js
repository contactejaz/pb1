'use strict';

/*
 * Complete the 'on_the_hunt' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING_ARRAY arr
 *  3. STRING csv
 */
//console.log (on_the_hunt("abcde", ["d", "a", "f", "g", "e"], "d,a,g,e,b"));
console.log(on_the_hunt("abcdefghiasashasahsa", ["d", "a", "f", "g", "e"], "d,a,g,e,b"));


function on_the_hunt(s, arr, csv) {
  // Write your code here

  var i, j, k;
  var s1 = '';
  var s2 = '';
  var sReturn = '';

  for (i = 0; i < arr.length; i++) {
    s1 = s1 + arr[i];
  }

  s2 = csv;
  for (i = 0; i < csv.length; i++) {
    s2 = s2.replace(',', ' ');
  }


  for (i = 0; i < s.length; i++) {
    if ((s1.search(s[i]) != -1) && (s2.search(s[i]) != -1)) {
      sReturn = sReturn + s[i];
    }
  }
  return sReturn;
}

