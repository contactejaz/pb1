class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def rotateRight(head: ListNode, k: int) -> ListNode:
    if not head or not head.next or k == 0:
        return head

    # Step 1: Calculate the length of the list and get the tail
    length = 1
    tail = head
    while tail.next:
        tail = tail.next
        length += 1

    # Step 2: Make the list circular
    tail.next = head

    # Step 3: Calculate the effective number of rotations
    k = k % length
    if k == 0:
        tail.next = None
        return head

    # Step 4: Find the new tail (length - k - 1) and new head (length - k)
    new_tail = head
    for _ in range(length - k - 1):
        new_tail = new_tail.next

    new_head = new_tail.next
    new_tail.next = None  # Break the circle

    return new_head

# Helper function to create a linked list from a list
def create_linked_list(lst):
    if not lst:
        return None
    head = ListNode(lst[0])
    current = head
    for value in lst[1:]:
        current.next = ListNode(value)
        current = current.next
    return head

# Helper function to print the linked list
def print_linked_list(head):
    current = head
    values = []
    while current:
        values.append(current.val)
        current = current.next
    print(values)

# Example usage
head = create_linked_list([1, 2, 3, 4, 5])
k = 2
rotated_head = rotateRight(head, k)
print_linked_list(rotated_head)  # Output: [4, 5, 1, 2, 3]

head = create_linked_list([0, 1, 2])
k = 4
rotated_head = rotateRight(head, k)
print_linked_list(rotated_head)  # Output: [2, 0, 1]