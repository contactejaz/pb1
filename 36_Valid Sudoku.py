def isValidSudoku(board):
    # Check rows
    for row in board:
        if not is_valid(row):
            return False

    # Check columns
    for col in range(9):
        column = [board[row][col] for row in range(9)]
        if not is_valid(column):
            return False

    # Check 3x3 sub-boxes
    for i in range(0, 9, 3):
        for j in range(0, 9, 3):
            sub_box = [board[r][c] for r in range(i, i + 3) for c in range(j, j + 3)]
            if not is_valid(sub_box):
                return False

    return True

def is_valid(nums):
    seen = set()
    for num in nums:
        if num != '.' and num in seen:
            return False
        seen.add(num)
    return True

# Example usage
board1 = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

board2 = [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

print(isValidSudoku(board1))  # Output: True
print(isValidSudoku(board2))  # Output: False