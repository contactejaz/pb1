def length_of_longest_substring(s):
    if not s:
        return 0

    char_map = {}
    max_length = start = 0

    for i, char in enumerate(s):
        if char in char_map and char_map[char] >= start:
            start = char_map[char] + 1
        else:
            max_length = max(max_length, i - start + 1)
        char_map[char] = i

    return max_length

# Example usage
s1 = "abcabcbb"
print(length_of_longest_substring(s1))  # Output: 3

s2 = "bbbbb"
print(length_of_longest_substring(s2))  # Output: 1

s3 = "pwwkew"
print(length_of_longest_substring(s3))  # Output: 3