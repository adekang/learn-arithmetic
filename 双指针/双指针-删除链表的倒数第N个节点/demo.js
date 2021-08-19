var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode();
      dummy.next = head;  
  let quickp = dummy,
      slowp = dummy;
  for (let i = 0; i <= n; i++) {
    quickp = quickp.next;
  }
  while (quickp !== null) {
    slowp = slowp.next;
    quickp = quickp.next;
  }
  slowp.next = slowp.next.next;
  return dummy.next;
};