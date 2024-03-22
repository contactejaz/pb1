from itertools import permutations

def permute(nums):
    return list(permutations(nums))

# Example usage
nums1 = [1, 2, 3]
print(permute(nums1))  # Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

nums2 = [0, 1]
print(permute(nums2))  # Output: [[0, 1], [1, 0]]

nums3 = [1]
print(permute(nums3))  # Output: [[1]]