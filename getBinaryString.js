/*
Given a positive integer n, return an array of all the binary strings of length n that DO NOT contain consecutive 1s.


Input: 2
Output: ["00", "01", "10"]

Input: 3
Output: ["000", "001", "010", "100", "101"]
"""

                             ''
                (add 1)  /        \ (add 0)
                      '1'         '0'
                add 1 /  \ add 0 /     \
                  '11'    '10' '01'    '00'  
base case: return when the length equals to the input value n
rescursive case

*/
helper()
