class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def rotateRight(head, k):
    if not head or not head.next or k == 0:
        return head
    
    # Calculate the length of the linked list
    length = 1
    current = head
    while current.next:
        current = current.next
        length += 1
    
    # Connect the tail to the head to make it circular
    current.next = head
    
    # Find the new tail: (length - k % length - 1)th node
    k = k % length
    steps_to_new_tail = length - k
    new_tail = head
    for _ in range(steps_to_new_tail - 1):
        new_tail = new_tail.next
    
    # Find the new head: (length - k % length)th node
    new_head = new_tail.next
    
    # Break the circle
    new_tail.next = None
    
    return new_head

# Helper function to create a linked list from a list
def create_linked_list(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

# Helper function to convert linked list to a Python list
def linked_list_to_list(head):
    result = []
    current = head
    while current:
        result.append(current.val)
        current = current.next
    return result

# Example 1
head1 = create_linked_list([1, 2, 3, 4, 5])
k1 = 2
rotated_head1 = rotateRight(head1, k1)
print(linked_list_to_list(rotated_head1))  # Output: [4, 5, 1, 2, 3]

# Example 2
head2 = create_linked_list([0, 1, 2])
k2 = 4
rotated_head2 = rotateRight(head2, k2)
print(linked_list_to_list(rotated_head2))  # Output: [2, 0, 1]