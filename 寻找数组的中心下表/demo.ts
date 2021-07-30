// 中心下标是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

function pivotIndex(arr: number[]) {
	let sum = arr.reduce((sum, curr) => {
		return curr + sum
	}, 0)
	let total = 0
	for (let i = 0; i < arr.length; i++) {
		total += arr[i]
		if (total === sum) {
			return i
		}
		sum = sum - arr[i]
	}
	return -1
}

let arr = [1, 7, 3, 6, 5, 6]

pivotIndex(arr)
