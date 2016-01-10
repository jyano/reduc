b.pDWo = b.gPolWo = function (gPol) {
	this.fs(function (f) {
		gPol = gPol.D(f)
	})
	return gPol
} 
b.pos = function () {
 
f.wV = function () {
	return b2d.tA(b2d.add(this.vs(), this.B()))
} 

//b2d.hV = b2d.hasVerts = gpc.hV


f._vs = function () {
	return b2d.m(this.H().m_vertices)
}
f.pts = f.points = f.verts = f.vertices = f.vs = function () {
	var f = this, b = f.B(), g = G(arguments),
			vs = _.m(f._vs(), g.n ?
							function (a) {
								return a
							} :
							function (v) {
								return v.rt(b.rt())
							}
			)
	return b2d.tA(vs)
}
 