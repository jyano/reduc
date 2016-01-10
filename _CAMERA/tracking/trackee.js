w.setTrackeeCallback = function (fn) {
	this.trackeeCb = fn;
	return this
}
w.trackeeX = w.tX = function (t) {
	var w = this, g = G(arguments)
	if (g.u) {
		return w.trackeeSprite.X()
	}
	w.trackeeSprite.X.apply(w.trackeeSprite, arguments)
	return w
}
w.trackeeY = w.tY = function (t) {
	var w = this, g = G(arguments)
	if (g.u) {
		return w.trackeeSprite.Y()
	}
	w.trackeeSprite.Y.apply(w.trackeeSprite, arguments)
	return w
}
w.trackeeXY = w.tXY = function (x, y) {
	var w = this
	if (U(x)) {
		return {x: w.tX(), y: w.tY()}
	}
	y = N(y) ? y : x
	return w.tX(x).tY(y)
}