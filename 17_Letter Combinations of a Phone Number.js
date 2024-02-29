const letterCombinations = function(digits) {
    if (!digits) return [];
    
    const mapping = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const result = [];
    
    const backtrack = (index, current) => {
        if (index === digits.length) {
            result.push(current);
            return;
        }
        
        const letters = mapping[digits[index]];
        for (let i = 0; i < letters.length; i++) {
            backtrack(index + 1, current + letters[i]);
        }
    };
    
    backtrack(0, '');
    
    return result;
};

// Test cases
console.log(letterCombinations("23")); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations(""));  // Output: []
console.log(letterCombinations("2"));  // Output: ["a","b","c"]