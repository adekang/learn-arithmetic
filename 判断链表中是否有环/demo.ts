// 判定链表中是否有环，关键在于这个链表是不是可以一直循环走下去。
// 那么可以设置两个指针，快指针和慢指针，一个走两步，一个走一步。如果链表中有环，
// 那么它们迟早是会相遇的，而且复杂度恒定为O(1)。
// 如果链表为null，单节点，双节点，都不会有环，直接返回false就行了。

// 慢指针针每次走一步，快指针每次走两步，如果相遇就说明有环，如果有一个为空说明没有环。
function hasCycle(head) {
	let fast = head
	let slow = head
	while (fast != null && fast.next != null) {
		slow = slow.next
		fast = fast.next.next
		if (fast === slow) {
			return true
		}
	}
	return false
}
