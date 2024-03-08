def search(nums, target):
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if nums[mid] == target:
            return mid

        # Check which side is normally ordered
        if nums[left] <= nums[mid]:
            # Left side is normally ordered
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            # Right side is normally ordered
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1

    return -1

# Example usage
nums1 = [4, 5, 6, 7, 0, 1, 2]
target1 = 0
target2 = 3
nums2 = [1]
target3 = 0

print(search(nums1, target1))  # Output: 4
print(search(nums1, target2))  # Output: -1
print(search(nums2, target3))  # Output: -1