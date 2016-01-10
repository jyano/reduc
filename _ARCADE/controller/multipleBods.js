w.boxes = function () {
	var w = this, g = G(arguments)
	_.e(g, function (g) {
		w.box.apply(w, g)
	})
	return w
}
w.brcks = w.boxesStat = function () {
	var w = this, g = G(arguments)
	_.e(g, function (g) {
		w.brick.apply(w, g)
	})
	return w
}