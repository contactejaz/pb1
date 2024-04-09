function mergeIntervals(intervals) {
    // Sort the intervals based on start time
    intervals.sort((a, b) => a[0] - b[0]);

    let mergedIntervals = [];
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let nextInterval = intervals[i];

        // If current interval overlaps with the next interval
        if (currentInterval[1] >= nextInterval[0]) {
            // Merge the intervals
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
            // If no overlap, push the current interval and update currentInterval
            mergedIntervals.push(currentInterval);
            currentInterval = nextInterval;
        }
    }

    // Push the last remaining interval
    mergedIntervals.push(currentInterval);

    return mergedIntervals;
}

// Test cases
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])); // Output: [[1, 6], [8, 10], [15, 18]]
console.log(mergeIntervals([[1, 4], [4, 5]])); // Output: [[1, 5]]