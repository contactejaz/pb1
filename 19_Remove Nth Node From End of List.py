class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeNthFromEnd(head, n):
    dummy = ListNode(0)
    dummy.next = head
    first = dummy
    second = dummy
    
    # Move first pointer ahead by n+1 steps
    for _ in range(n + 1):
        first = first.next
    
    # Move both pointers until first reaches the end
    while first is not None:
        first = first.next
        second = second.next
    
    # Remove the nth node from the end
    second.next = second.next.next
    
    return dummy.next

# Example usage
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

new_head = removeNthFromEnd(head, 2)
while new_head:
    print(new_head.val, end=" ")
    new_head = new_head.next