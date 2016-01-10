
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
function trackee() {
	w.t = w._t = w._t || w.S(w.hW, w.hH, 'w', [[20, 2, '-']]).r(.8) //trackee
	w.i.A(w.tSpr = $Ct().XY(w.t.X(), w.t.Y())) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)
	T.t(track)
}

w.setTrackeeCallback = function (fn) {
	this.trackeeCb = fn;
	return this
}