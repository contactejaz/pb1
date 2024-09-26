def minPathSum(grid):
    # Get the number of rows and columns
    m, n = len(grid), len(grid[0])
    
    # Create a 2D dp array where dp[i][j] represents the minimum path sum to reach grid[i][j]
    dp = [[0] * n for _ in range(m)]
    
    # Initialize the top-left corner
    dp[0][0] = grid[0][0]
    
    # Fill in the first row (can only come from the left)
    for j in range(1, n):
        dp[0][j] = dp[0][j-1] + grid[0][j]
    
    # Fill in the first column (can only come from above)
    for i in range(1, m):
        dp[i][0] = dp[i-1][0] + grid[i][0]
    
    # Fill in the rest of the dp array
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
    
    # The bottom-right corner will contain the minimum path sum
    return dp[m-1][n-1]

# Example usage
grid1 = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]
grid2 = [[1, 2, 3], [4, 5, 6]]
print(minPathSum(grid1))  # Output: 7
print(minPathSum(grid2))  # Output: 12
