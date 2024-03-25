def permute(nums):
    def backtrack(path, used):
        if len(path) == len(nums):
            permutations.append(path.copy())
            return
        for i in range(len(nums)):
            if not used[i]:
                used[i] = True
                path.append(nums[i])
                backtrack(path, used)
                path.pop()
                used[i] = False

    permutations = []
    used = [False] * len(nums)
    backtrack([], used)
    return permutations

# Example usage
nums1 = [1, 2, 3]
print(permute(nums1))  # Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

nums2 = [0, 1]
print(permute(nums2))  # Output: [[0, 1], [1, 0]]

nums3 = [1]
print(permute(nums3))  # Output: [[1]]