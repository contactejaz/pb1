def combinationSum2(candidates, target):
    def backtrack(remain, start, path):
        if remain == 0:
            res.append(path[:])
            return
        elif remain < 0:
            return
        for i in range(start, len(candidates)):
            if i > start and candidates[i] == candidates[i - 1]:
                continue  # skip duplicates
            path.append(candidates[i])
            backtrack(remain - candidates[i], i + 1, path)
            path.pop()
    
    candidates.sort()
    res = []
    backtrack(target, 0, [])
    return res

# Example usage
candidates = [10, 1, 2, 7, 6, 1, 5]
target = 8
print(combinationSum2(candidates, target))
# Output: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]

candidates = [2, 5, 2, 1, 2]
target = 5
print(combinationSum2(candidates, target))
# Output: [[1, 2, 2], [5]]