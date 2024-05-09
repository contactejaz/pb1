def insertInterval(intervals, newInterval):
    merged = []
    i = 0
    
    # Add all intervals that come before newInterval
    while i < len(intervals) and intervals[i][1] < newInterval[0]:
        merged.append(intervals[i])
        i += 1
    
    # Merge overlapping intervals
    while i < len(intervals) and intervals[i][0] <= newInterval[1]:
        newInterval[0] = min(newInterval[0], intervals[i][0])
        newInterval[1] = max(newInterval[1], intervals[i][1])
        i += 1
    
    # Add the merged interval
    merged.append(newInterval)
    
    # Add all intervals that come after newInterval
    while i < len(intervals):
        merged.append(intervals[i])
        i += 1
    
    return merged

# Example usage:
intervals1 = [[1,3],[6,9]]
newInterval1 = [2,5]
print(insertInterval(intervals1, newInterval1))  # Output: [[1,5],[6,9]]

intervals2 = [[1,2],[3,5],[6,7],[8,10],[12,16]]
newInterval2 = [4,8]
print(insertInterval(intervals2, newInterval2))  # Output: [[1,2],[3,10],[12,16]]