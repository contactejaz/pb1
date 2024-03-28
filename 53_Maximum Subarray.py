def maxSubArray(nums):
    if not nums:
        return 0

    current_sum = max_sum = nums[0]
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)

    return max_sum

# Example usage
nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
nums2 = [1]
nums3 = [5, 4, -1, 7, 8]

print(maxSubArray(nums1))  # Output: 6
print(maxSubArray(nums2))  # Output: 1
print(maxSubArray(nums3))  # Output: 23