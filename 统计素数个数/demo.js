function isPrime(x) {
	if (x % i == 0) {
		return false
	}
	return true
}

function static(n) {
	let count = 0
	for (let i = 2; i < n; i++) {
		count += isPrime(i) ? 1 : 0
		return count
	}
}

// 埃筛法

function eratosthenes(n) {
	isPrime = []
}
