def uniquePaths(m, n):
    # Create a 2D list to store the number of ways to reach each cell
    dp = [[1] * n for _ in range(m)]

    # Start filling the dp array from cell (1,1) because the first row and column are always 1
    for i in range(1, m):
        for j in range(1, n):
            # The number of ways to reach cell (i, j) is the sum of the number of ways to reach
            # the cell directly above it and the cell directly to the left of it
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

    # The bottom-right corner will have the total number of unique paths
    return dp[m - 1][n - 1]

# Example test cases
print(uniquePaths(3, 7))  # Output: 28
print(uniquePaths(3, 2))  # Output: 3