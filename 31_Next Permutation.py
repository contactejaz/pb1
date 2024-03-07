def nextPermutation(nums):
    # Find the largest index k such that nums[k] < nums[k + 1]
    k = len(nums) - 2
    while k >= 0 and nums[k] >= nums[k + 1]:
        k -= 1

    # If no such index exists, the permutation is the last permutation
    if k == -1:
        nums.reverse()
        return nums

    # Find the largest index l greater than k such that nums[k] < nums[l]
    l = len(nums) - 1
    while l > k and nums[l] <= nums[k]:
        l -= 1

    # Swap nums[k] and nums[l]
    nums[k], nums[l] = nums[l], nums[k]

    # Reverse the sub-array nums[k + 1:]
    nums[k + 1:] = nums[k + 1:][::-1]

    return nums

# Example usage
nums1 = [1, 2, 3]
nums2 = [3, 2, 1]
nums3 = [1, 1, 5]

print(nextPermutation(nums1))  # Output: [1, 3, 2]
print(nextPermutation(nums2))  # Output: [1, 2, 3]
print(nextPermutation(nums3))  # Output: [1, 5, 1]