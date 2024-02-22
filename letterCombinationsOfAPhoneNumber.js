const letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    
    const phoneMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    
    const result = [];
    
    const backtrack = (index, current) => {
        if (index === digits.length) {
            result.push(current);
            return;
        }
        
        const letters = phoneMap[digits[index]];
        for (let letter of letters) {
            backtrack(index + 1, current + letter);
        }
    };
    
    backtrack(0, '');
    
    return result;
};

// Example usage
console.log(letterCombinations("23"));  // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations(""));   // Output: []
console.log(letterCombinations("2"));   // Output: ["a","b","c"]