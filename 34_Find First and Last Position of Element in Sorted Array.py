def searchRange(nums, target):
    def binary_search_left(nums, target):
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return left

    def binary_search_right(nums, target):
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] <= target:
                left = mid + 1
            else:
                right = mid - 1
        return right

    left_idx = binary_search_left(nums, target)
    right_idx = binary_search_right(nums, target)

    if left_idx <= right_idx:
        return [left_idx, right_idx]
    else:
        return [-1, -1]

# Example usage
nums = [5, 7, 7, 8, 8, 10]
target = 8
print(searchRange(nums, target))  # Output: [3, 4]

target = 6
print(searchRange(nums, target))  # Output: [-1, -1]

nums = []
target = 0
print(searchRange(nums, target))  # Output: [-1, -1]