def uniquePathsWithObstacles(obstacleGrid):
    # Check if the starting point is an obstacle
    if obstacleGrid[0][0] == 1:
        return 0
    
    m, n = len(obstacleGrid), len(obstacleGrid[0])
    
    # Create a 2D dp array initialized to 0
    dp = [[0] * n for _ in range(m)]
    
    # Set the starting point
    dp[0][0] = 1
    
    # Fill the first row
    for i in range(1, n):
        dp[0][i] = dp[0][i - 1] if obstacleGrid[0][i] == 0 else 0
    
    # Fill the first column
    for i in range(1, m):
        dp[i][0] = dp[i - 1][0] if obstacleGrid[i][0] == 0 else 0
    
    # Fill the rest of the dp array
    for i in range(1, m):
        for j in range(1, n):
            if obstacleGrid[i][j] == 0:
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            else:
                dp[i][j] = 0
    
    return dp[m - 1][n - 1]

# Example test cases
obstacleGrid1 = [[0,0,0],[0,1,0],[0,0,0]]
obstacleGrid2 = [[0,1],[0,0]]

print(uniquePathsWithObstacles(obstacleGrid1))  # Output: 2
print(uniquePathsWithObstacles(obstacleGrid2))  # Output: 1