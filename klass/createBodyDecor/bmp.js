w.bmp = w.bump = w.cS = w.bu = w.baa = function (x, y) {
	var g = G(arguments)
	var b = w.S(x, y)
	b.cF.apply(b, _.r(g, 2))
	return b.decor(g).K('bump')
	w.bumpAlt = function (x, y, r) {
		x = x || 100
		y = N(y) ? y : x
		r = r || 20
		return this.A(b2d.stat(x, y),
				$cF(r)).K('bumper')
	}
}
