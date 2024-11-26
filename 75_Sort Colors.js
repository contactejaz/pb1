function sortColors(nums) {
    let low = 0, mid = 0, high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap nums[mid] with nums[low] and move both pointers forward
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // If it's 1, just move the mid pointer forward
            mid++;
        } else {
            // If it's 2, swap nums[mid] with nums[high] and move the high pointer backward
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
}

// Test cases
let nums1 = [2, 0, 2, 1, 1, 0];
sortColors(nums1);
console.log(nums1);  // Output: [0, 0, 1, 1, 2, 2]

let nums2 = [2, 0, 1];
sortColors(nums2);
console.log(nums2);  // Output: [0, 1, 2]
