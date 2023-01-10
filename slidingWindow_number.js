/*
Given an array of positive integers and a target value, return true if there is a subarray of consecutive elements that sum up to this target value.

Input: Array of integers, target value
Output: Boolean

Input: [6,12,1,7,5,2,3], 14      	=>	Output: true (7+5+2)
Input: [8,3,7,9,10,1,13], 50		=>	Output: false

*/

/*

limit of consecutive elements: no 

14
6,12,1,7,5,2,3
6+12 (18) > target so discard first
12+1 (13)
12+1+7 (20) > target so discard first
1+7+5 (13)
1+7+5+2 (15) > target so discard first
7+5+2 (14) = target return true, exit


findCons(arr, target)
left=0, right=1, result=false
loop i 0 ... arr.length
  sum=0
  loop j i ... arr.length
    sum = sum + arr[i] + arr[j]
    if sum > target then 
      left++    
      exit loop
    end    
    if sum == target 
      return true
      exit
    end
    - right++    
  end loop
end loop

*/

function findCons(arr, target){
  let left=0; 
  let right=1;
  let sum;
  
  for (i=0; i<arr.length; i++){
    sum = 0;
    for (j = i+1; j < arr.length; j++) {
      sum = sum + arr[i] + arr[j];
      if (sum > target) { 
        left++;    
        break;
      }    
      if (sum == target ){
        return true;
        break;
      }
      right++;
    }
  }
  return false;
}

console.log(findCons([8,3,7,9,10,1,13], 50));
