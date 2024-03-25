def jump(nums):
    n = len(nums)
    if n == 1:
        return 0

    jumps = 1
    curr_max = nums[0]
    next_max = nums[0]
    
    for i in range(1, n):
        if curr_max < i:
            jumps += 1
            curr_max = next_max
        next_max = max(next_max, i + nums[i])

    return jumps

# Example usage
nums1 = [2, 3, 1, 1, 4]
print(jump(nums1))  # Output: 2

nums2 = [2, 3, 0, 1, 4]
print(jump(nums2))  # Output: 2