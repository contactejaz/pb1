def minDistance(word1: str, word2: str) -> int:
    # Get lengths of the words
    m, n = len(word1), len(word2)
    
    # Initialize a (m+1) x (n+1) DP table
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Fill the base cases
    for i in range(m + 1):
        dp[i][0] = i  # Cost of deleting all characters from word1
    for j in range(n + 1):
        dp[0][j] = j  # Cost of inserting all characters to word1
    
    # Fill the DP table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                # Characters match, no extra cost
                dp[i][j] = dp[i - 1][j - 1]
            else:
                # Characters don't match, choose the best option
                dp[i][j] = 1 + min(
                    dp[i - 1][j],    # Delete
                    dp[i][j - 1],    # Insert
                    dp[i - 1][j - 1] # Replace
                )
    
    # The result is in the bottom-right cell
    return dp[m][n]

# Example Usage
word1 = "horse"
word2 = "ros"
print(minDistance(word1, word2))  # Output: 3

word1 = "intention"
word2 = "execution"
print(minDistance(word1, word2))  # Output: 5
