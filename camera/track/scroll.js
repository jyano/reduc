w.dumbScrollX = w.CAMX = function (x) {
	var w = this;
	if (U(x)) {
		return -w.stgX()
	}
	return w.stgX(-x)
}
w.dumbScrollY = w.CAMY = function (y) {
	var w = this;
	if (U(y)) {
		return -w.stgY()
	}
	w.stgY(-y)
	return w
}
 