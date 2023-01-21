"""
Merge K Sorted Arrays
Given an array of sorted arrays of numbers, return the result of merging all those sorted arrays into a single sorted array

Input: arrays , Array of Arrays of Ints, [[Int]]
Output: [Int]

Example:
Input:
arr = [
0    1   2   3    len = 4
[1, 1.5, 11, 15],
[2, 4,  9,  14],
[5, 6,  8,  16],
[3, 7,  12, 13]
]

min_heap = [1 2 3 5]
pop -> 1, [2 3 5], add this item(1) to result
push the next element of the item you picked, which is 1.5 [1.5, 2, 3, 5]
until we exaust the 2d array
return result

[14, 16, 13]

Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


arr
- pick min of first element of all columns  => arr [0]
- pick min of second element of the item I picked and first element of all columns => arr[1]

- continue until array.length

  min_heap = []
  # create min heap
  heapq.heapify(min_heap)

  # push item to heap
  heapq.heappush(min_heap, arr[0][0])

  # pop item from heap, remove
  heapq.heappop(min_heap)
  
"""

import heapq 


def merge(arr):
  min_heap = []
  result = []
  # row
  # col = 0
  heapq.heapify(min_heap)

  #loop through rows and get the first items in the heap

  # for i <= arr.length i++:
  for i in range(len(arr)):
    # row = i
    # push only the value, what if we push the value, row and col: tuple (val, row, col)
    # min_heap.push((arr[i][0], i, 0))
    heapq.heappush(min_heap, (arr[i][0], i, 0))
  
  # while len(min_heap) >= 0:
  while len(min_heap) > 0:
    # item = min_heap.pop
    item = heapq.heappop(min_heap)
    val = item[0]
    row = item[1]
    col = item[2]

    result.append(val)
    if col+1 < len(arr[row]):
      # min_heap.push(arr[item[1][item[2]+1]], item[1], item[2]+1)
      heapq.heappush(min_heap, (arr[row][col + 1], row, col+1))
    
  return result    
    
    

arr = [
[1, 10, 11, 15],
[2, 4,  9,  14],
[5, 6,  8,  16],
[3, 7,  12, 13]
]

print(merge(arr))
