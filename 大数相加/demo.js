/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

//  创建指针 i 指向 nums1 末位数字，jj 指向 nums2 末位数字。
//  i, j 数字相加，用进位就用 carry来记录进位值，无则为 0。
//  若产生进位，则当前数字为 (i+j) \% 10(i+j)%10 的值。
//  若遍历过程中，nums1 或 nums2当前已无数字，则用 0 补位来计算。

var addStrings = function (num1, num2) {
	let i = num1.length - 1,
		j = num2.length - 1,
		carry = 0,
		ans = []
	while (i >= 0 || j >= 0 || carry !== 0) {
		let c1 = i >= 0 ? num1.charAt(i) - '0' : 0,
			c2 = j >= 0 ? num2.charAt(j) - '0' : 0
		let sum = c1 + c2 + carry
		ans.push(sum % 10)
		carry = Math.floor(sum / 10)
		i--
		j--
	}
	return ans.reverse().join('')
}
