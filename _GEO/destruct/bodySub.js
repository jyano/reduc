b.subAll = function (poly) {
	return this.fs(function (f) {
		f.sub(poly)
	})
}
b.subPol = b.subPoly = b.subP = function (poly, xy) {
	return this.subAll($pol(poly, xy))
}
b.subPolAtFxt = function (pol, fxt) {
	var g = G(arguments)
	var xy = g.n ? fxt.B().kXY() : fxt.B()
	this.subPol(pol, xy)
	return this
}
 