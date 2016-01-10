w.C = function (c) {
	var w = this
	w.bg.h().c(c || $r()).dr(0, 0, w.w, w.h)
	return w
}