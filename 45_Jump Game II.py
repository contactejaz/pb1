def jump(nums):
    n = len(nums)
    if n == 1:
        return 0
    
    jumps = 0
    cur_end = 0
    cur_farthest = 0
    
    for i in range(n - 1):
        cur_farthest = max(cur_farthest, i + nums[i])
        if i == cur_end:
            jumps += 1
            cur_end = cur_farthest
            if cur_end >= n - 1:
                break
    
    return jumps

# Example usage
nums1 = [2, 3, 1, 1, 4]
print(jump(nums1))  # Output: 2

nums2 = [2, 3, 0, 1, 4]
print(jump(nums2))  # Output: 2