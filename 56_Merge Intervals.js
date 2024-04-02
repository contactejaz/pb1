function merge(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    let merged = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        let lastMergedInterval = merged[merged.length - 1];
        
        if (currentInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            merged.push(currentInterval);
        }
    }
    
    return merged;
}

// Example usage
let intervals1 = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals1)); // Output: [[1,6],[8,10],[15,18]]

let intervals2 = [[1,4],[4,5]];
console.log(merge(intervals2)); // Output: [[1,5]]