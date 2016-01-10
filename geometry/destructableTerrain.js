b.pDWo = b.gPolWo = function (gPol) {
	this.fs(function (f) {
		gPol = gPol.D(f)
	})
	return gPol
}
//b.pos = function () {
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
b.explosion = b.exp = function () {//alert('b.exp is random!')
	var b = this, xy
	xy = b.pos()
	b.kill()
//	return R() ? b2d.sep(b2d.pC(20, 7)).XY(xy) : w.D(xy.x, xy.y).rec( 60, 60).rot(45)
	return w.D(xy.x, xy.y).rec(60, 60).rot(45)
}
b.expl = function (col) {
	var b = this
	b.cl(function (f) {
		b.subPolAtFxt('expl', f, '-')._colorize(col)
	})
	return b
//alt way to handle explosion sub
//w.rad(bulletX, bulletY, 15, function (terrainFxt) {terrainFxt.sub( explosionPol )})
}
b.expl = function (c) {

// is body.Isactive??
//alt way to handle explosion sub
//w.rad(bulletX, bulletY, 15, function (terrainFxt) {terrainFxt.sub( explosionPol )})
	var b = this
	var victim = b
	victim.cl(function (f) {
		var bulletF = f, bulletB = f.B()
		victim.subF('expl', bulletB.killXY())
		if (c) {
			victim.C(c === '*' ? $r() : c)
		}
	})
	return b
}
w.ter = function () {
	var w = this, ter = []
	_.t(13, function (i) {
		_.t(8, function (j) {
			var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
			ter.push({
				b: b,
				vs: b.f().vs(),
				p: M.p([
					V(i * 25 + 410, j * 25 + 210),
					V(i * 25 + 410, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 210)])
			})
		})
	})
	return ter
}
w.destructableBricks = w.ter = function () {
	var w = this, ter = []
	_.t(13, function (i) {
		_.t(8, function (j) {
			var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
			ter.push({
				b: b,
				vs: b.f().vs(),
				p: M.p([V(i * 25 + 410, j * 25 + 210), V(i * 25 + 410, j * 25 + 190), V(i * 25 + 430, j * 25 + 190), V(i * 25 + 430, j * 25 + 210)])
			})
		})
	})
	return ter
}
w.withBul = w.withCollideBul = w.cxBul = function (k, fn) {
	var w = this
	this.b(function (cx) {
		cx.w('bul', k, fn)
	})
}
pD.hasAtLeastOnePoly = function () {
	return this.m_List.get(0)
}
pD.isPolyless = pD.hasNoPolys = function () {
	return !this.hasAtLeastOnePoly()
}
pD.D = function () {
	var pD = this
	G(arguments).e(function (polOrBod) {
		pD = b2d.iB(polOrBod) ? polOrBod.pDWo(pD) :
				pD.difference(gpc.p(polOrBod))
	})
	return pD
}
pD.points = pD.vs = function (fn) {
	var pD = this,
			g = G(arguments),
			o = g.F ? {fn: g.f} : {num: g.f, fn: g.s},
			vs = []
	_.t(pD.n(), function (i) {
		vs.push([pD.x(i), pD.y(i)])
	})
	vs = g.n ? b2d.sub(vs, o.num) :
			g.p ? b2d.add(vs, o.num) :
					vs
	if (o.fn) {
		_.e(vs, o.fn);
		return pD
	}
	return vs
}//used in MEET
//f.dif does the math and returns the answer (vs)
//returns pD with array of pS's ( pD.m_List )
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
f.A = f.area = function () {
	return M.p(this).getArea()
}
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
Pol = function (vs) {
	this.v = this.vs = vs
}
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
w.md1 = function (fn) {
	return this.md(function (a, b, c) {
		if (self.used) {
			return
		}
		fn(a, b, c)
		self.used = 1
	})
}//
w.polD = function (x, y, p1, p2) {
	return this.pol(x, y, M.p(p1).D(p2))
}
pD.butHere = pD.to = pD.at = pD.ger = function (x, y) {
	return this.reg(-V(x, y).x, -V(x, y).y)
}
pD.maybeHere = function (xy) {
	return xy ? this.butHere(xy) : this
}
pD.from = pD.cameFrom = pD.reg = pD.rel = function (x, y) {
	return M.p(b2d.sub(this.vs(), V(x, y)))
}//you can pass in the verts, // or the gPoly itself! //what about a f?
b.killXY = b.KPos = b.KXY = b.kXY = function () {
	var b = this
	var xy = b.XY();
	b.kill();
	return xy
}