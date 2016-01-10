w.sH = function (h) {
	var w = this, wH = w.H()
	if (U(h)) {
		return wH * w.s.scaleY
	}
	w.s.scaleY = h / wH
	return w
}