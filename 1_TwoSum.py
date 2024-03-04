def two_sum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i

# Example usage
nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))  # Output: [0, 1]

nums = [3, 2, 4]
target = 6
print(two_sum(nums, target))  # Output: [1, 2]

nums = [3, 3]
target = 6
print(two_sum(nums, target))  # Output: [0, 1]