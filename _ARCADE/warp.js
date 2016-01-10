w.warp = function () {
	var w = this
	w.eEv(function (b) {
		if (b.X() < 10) {
			b.X(w.W - 10)
		}
		if (b.X() > w.W - 10) {
			b.X(10)
		}
		if (b.Y() < 10) {
			b.Y(w.H - 10)
		}
		if (b.Y() > w.H - 10) {
			b.Y(10)
		}
	})
	return w
}