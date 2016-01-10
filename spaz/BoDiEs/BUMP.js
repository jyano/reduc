w.BMP = w.BUMP = function (x, y, r, c) {
	var w = this,
			g = G(arguments)
	//	var wd = w.st.W(), ht = w.st.H()
	//x = N(x) ? x : _.pI(M.r() * (wd - 100)) + 60
	//y = N(y) ? y : 50
	//r = N(r) ? r : _.ran(14) + 8
	c = oO('c', c || 'y')
	return w.bump(x, y, r, g.o).bS2($cGx(r, c))
}// = w.circStat = w.cSt
w.circStat = function (x, y, radius, color) {
	var wd = this.s.W(),
			ht = this.s.H()
	x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60
	y = N(y) ? y : 50
	radius = N(radius) ? radius : _.random(14) + 8
	color = oO('c', color || $r())
	return this.bump(x, y, radius).bindSprite2(
			cjs.circ(radius, color).XY(x, y)
	).linDamp(2)
}
w.circStat = function (x, y, radius, color) {
	var wd = this.s.W(),
			ht = this.s.H()
	x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60
	y = N(y) ? y : 50
	radius = N(radius) ? radius : _.random(14) + 8
	color = oO('c', color || $r())
	return this.bump(x, y, radius).bindSprite2(
			cjs.circ(radius, color).XY(x, y)
	).linDamp(2)
}