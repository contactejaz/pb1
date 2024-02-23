def three_sum_closest(nums, target):
    nums.sort()
    closest_sum = float('inf')
    
    for i in range(len(nums) - 2):
        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == target:
                return total
            if abs(target - total) < abs(target - closest_sum):
                closest_sum = total
            if total < target:
                left += 1
            else:
                right -= 1
    
    return closest_sum

# Example usage
nums = [-1, 2, 1, -4]
target = 1
print(three_sum_closest(nums, target))  # Output: 2

nums = [0, 0, 0]
target = 1
print(three_sum_closest(nums, target))  # Output: 0