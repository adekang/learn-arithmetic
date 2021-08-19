// 思路
// 先把数组一分二，在接着二分四，最后分成每个数组只有一个
// 然后再比大小合并
const mergeSort = arr => {
	let len = arr.length
	if (len === 1) {
		return arr
	}
	let left = arr.slice(0, Math.floor(len / 2))
	let right = arr.slice(Math.floor(len / 2))

	return merge(mergeSort(left), mergeSort(right))
}

let merge = (a, b) => {
	if (a.length === 0) return b
	if (b.length === 0) return a
	return a[0] > b[0] ? [b[0]].concat(merge(a, b.slice(1))) : [a[0]].concat(merge(a.slice(1), b))
}
let a = [2, 22, 556, 12, 15, 2, 52, 22]

console.log(mergeSort(a))
