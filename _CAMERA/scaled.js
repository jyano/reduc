w.scaled = function (a) {
	return a * this.zoom()
}
w.zDif = w.scaledDif = function (a, b) {
	return this.scaled(a - b)
}
