function removeDuplicates(arr: number[]): number {
	if (arr.length === 0) return
	let i = 0
	for (let j = 1; j < arr.length; j++) {
		if (arr[j] !== arr[i]) {
			i++
			arr[i] = arr[j]
		}
	}
	return i + 1
}
