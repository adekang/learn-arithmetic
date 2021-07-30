function ReverseList(head) {
	let prev = null
	let curr = head
	while (curr) {
		next = curr.next
		curr.next = prev
		prev = curr
		curr = next
	}
	return prev
}

// 递归查询
function ReverseList02(head) {
	if (head === null || head.next === null) {
		return head
	}
	let new_head = ReverseList02(head.next)
	head.next.next = head
	head.next = null
	return new_head
}
