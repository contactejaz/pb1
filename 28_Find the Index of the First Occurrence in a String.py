def find_first_occurrence(haystack: str, needle: str) -> int:
    return haystack.find(needle)

# Example 1
haystack1 = "sadbutsad"
needle1 = "sad"
print(find_first_occurrence(haystack1, needle1))  # Output: 0

# Example 2
haystack2 = "leetcode"
needle2 = "leeto"
print(find_first_occurrence(haystack2, needle2))  # Output: -1
