w.left = w.horiz = function (num) {
	num = N(num) ? num : 4
	this.each(function (b) {
		b.X(num, '-')
	})
}
w.up = w.vert = function (num) {
	num = N(num) ? num : 4
	this.each(function (b) {
		b.Y(num, '-')
	})
}