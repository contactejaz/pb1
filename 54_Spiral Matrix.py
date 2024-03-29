def spiralOrder(matrix):
    if not matrix:
        return []

    rows, cols = len(matrix), len(matrix[0])
    left, right, top, bottom = 0, cols - 1, 0, rows - 1
    result = []

    while left <= right and top <= bottom:
        # Traverse top row
        for j in range(left, right + 1):
            result.append(matrix[top][j])
        top += 1

        # Traverse right column
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
        right -= 1

        # Traverse bottom row
        if top <= bottom:
            for j in range(right, left - 1, -1):
                result.append(matrix[bottom][j])
            bottom -= 1

        # Traverse left column
        if left <= right:
            for i in range(bottom, top - 1, -1):
                result.append(matrix[i][left])
            left += 1

    return result

# Example usage
matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
matrix2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

print(spiralOrder(matrix1))  # Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
print(spiralOrder(matrix2))  # Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]