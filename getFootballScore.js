/*
In a simplified game of American football, teams score points by either achieving a touchdown (7 points) or a field goal (3 points).


Input:  10
Output: 2

Explanation: For a score of 10, the output would be 2. The 2 ways to arrive at
this score is to:

1) Score a field goal (3 points) and then touchdown (7 points)
2) Score a touchdown (7 points) and then field goal (3 points)


Input: 21
Output: 2

Explanation: For a score of 21, the output would be 2. The 2 ways to arrive at
this score is to:

1) Score 7 field goals (3 * 7 points)
2) Score 3 touchdowns (7 * 3 points)


Input:  16
Output: 4

Explanation: For a score of 16, the output would be 4. The 4 ways to arrive at
this score is to:

1) Score 1 touchdown (7 points) and 3 field goals (3 * 3 points)
2) Score 1 field goal (3 points), then 1 touchdown (7 points), and then 2 field goals (2 * 3 points)
3) Score 2 field goals (2 * 3 points), then 1 touchdown (7 points), and lastly 1 field goal (3 points)
4) Score 3 field goals (3 * 3 points) and then 1 touchdown (7 points)


                        10
                    (FG) /      \  (TD)
                      7          3
                    /  \
              (FG)4     0(TD)
                /  \
            (FG)1  (TD)-3

*/                        
##base : if we 0 then return 1
##      if we get < 0 return 0
##input - 7 or input -3
"""
def recursion(n):
  if n < 0:
    return 0
  if n == 0:
    return 1
    
  FG = recursion(n-3)
  TD = recursion(n-7)
  
  return FG + TD

print(recursion(16))

