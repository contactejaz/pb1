def combinationSum(candidates, target):
    def backtrack(remain, start, path):
        if remain == 0:
            res.append(path[:])
            return
        elif remain < 0:
            return
        for i in range(start, len(candidates)):
            path.append(candidates[i])
            backtrack(remain - candidates[i], i, path)
            path.pop()
    
    res = []
    candidates.sort()
    backtrack(target, 0, [])
    return res

# Example usage
candidates = [2, 3, 6, 7]
target = 7
print(combinationSum(candidates, target))  # Output: [[2, 2, 3], [7]]

candidates = [2, 3, 5]
target = 8
print(combinationSum(candidates, target))  # Output: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

candidates = [2]
target = 1
print(combinationSum(candidates, target))  # Output: []