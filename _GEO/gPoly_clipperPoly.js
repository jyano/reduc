 
b2d.gpcPD = M.p = function () {
	//it expects worldVerts....
//it works with worldVerts...
//it was designed with
//that in
//mind
	var g = G(arguments), p, b, fs, vs
	if (b2d.iGP(g[0])) {
		return g[0]
	}
	p = new PolyDefault()
	if (b2d.iB(g[0])) {
		fs = g[0].fs()
		vs = fs[0].wV()
		_.eR(fs, function (v) {
			vs = vs.uni(v)
		})
	}
	else {
		vs = b2d.iF(g[0]) ? g[0].wV() :
				g[0]
	}
	p.A(vs)
	return p
}
b2d.iG = b2d.iGP = b2d.isGPoly = function (a) {
	return O(a) && F(a.isHole)
}
 
 
POLGEMS = function () {
	W()
	verts = [[[5, 100], [0, -100], [200, -150], [200, 150]],
		[[-50, 50], [-50, -100], [450, -50], [450, 50]]]
	w.i.h(400, 300, '+').bV({v: verts})
	w.D(800, 300).pol({
		v: verts,
		c: 'r', C: 'y', l: 10,
		bf: 'me'
	})
}
Pol = function (vs) {this.v = this.vs = vs}
 
pD.polygons = pD.polys = pD.ps = pD.hs = pD.pols = function () {
	$l('pD.polys')
	var pD = this, g = G(arguments),
			o = b2d.iB(g.f) ? {
				polys: b2d.reg(this._polys(), g.f),
				fn: g.s
			} :
					g.N_ ? {
						polys: b2d.reg(this._polys(), V(g.f, g.s)),
						fn: g.t
					} :
					{fn: g.f}
	if (g.p) {
		o.polys = _.m(o.polys, M.p)
	}
	if (F(o.fn)) {
		_.e(o.polys, o.fn);
		return this
	}
	;
	return o.polys
} // used in MEET