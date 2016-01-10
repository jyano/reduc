w.scaled = function (a) {
	return a * this.zoom()
}
w.zHalf = w.scaledHalf = function (a) {
	return this.scaled(a / 2)
}
w.scaledDouble = function (a) {
	return this.scaled(a * 2)
}
w.zDif = w.scaledDif = function (a, b) {
	return this.scaled(a - b)
}
w.scaledSum = function (a, b) {
	return this.scaled(a + b)
}
w.scaledQuotient = function (a, b) {
	return this.scaled(a / b)
}
w.scaledProduct = function (a, b) {
	return this.scaled(a * b)
}
w.scaledWorldW = function () {
	return this.scaled(this.worldW)
}
w.scaledWorldH = function () {
	return this.scaled(this.worldH)
}
w.zDif = w.scaledDif = function (a, b) {
	return this.scaled(a - b)
}
w.gameH = function () {
	return this.H
} 