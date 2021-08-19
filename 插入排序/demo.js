function insertionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		const temp = arr[i]
		let j = i
		while (j > 0) {
			if (arr[j - 1] > temp) {
				arr[j] = arr[j - 1]
			} else {
				break
			}
			j--
		}
		arr[j] = temp
	}
	return arr
}

let a = [2, 22, 556, 12, 15, 2, 52, 22]

console.log(insertionSort(a))
