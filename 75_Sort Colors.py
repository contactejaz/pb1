def sortColors(nums):
    low, mid, high = 0, 0, len(nums) - 1

    while mid <= high:
        if nums[mid] == 0:
            # Swap the current element with the element at 'low' and move both pointers forward
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 1:
            # If it's a 1, just move the 'mid' pointer forward
            mid += 1
        else:
            # If it's a 2, swap the current element with the element at 'high' and move the 'high' pointer backward
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1

# Test cases
nums1 = [2, 0, 2, 1, 1, 0]
sortColors(nums1)
print(nums1)  # Output: [0, 0, 1, 1, 2, 2]

nums2 = [2, 0, 1]
sortColors(nums2)
print(nums2)  # Output: [0, 1, 2]
