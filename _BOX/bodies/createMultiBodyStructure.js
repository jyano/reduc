w.perch = w.skyPerch = function (col) {
	var w = this
	col = col || 't'
	w.S(200, 50, col, 300, 20) //top
	w.S(200, 360, col, 300, 20) //bottom
	w.S(60, 240, col, 20, 260) //left
	w.S(340, 320, col, 20, 100)//right
	return w
}