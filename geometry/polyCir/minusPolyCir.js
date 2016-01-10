b.minusPolyCirc = function (x, y, rad, sides) {
	var b = this
	poly = Math.poly(_.map(b2d.polyCirc(rad, sides),
			function (v) {
				return [v.x + x, v.y + y]
			}))
	verts = b.rel(b.polyVerts().difference(poly))
	b.clear().conc(verts)
	return this
}