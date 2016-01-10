w.pol = function () {
	var w = this, g = G(arguments), b, o
	if (g.A) {
		return $a(w, 'pol', g.f)
	}
	if (g.OO) {
		g.e(function (g) {
			w.pol(g)
		});
		return w
	}
	// if(g.N_ && N(g.s) && O(g.t) &&U(g[3])){return w.D(g.f,g.s).pol(g.t)}
	if (g.N_ && N(g.s) && O(g.t)) {
		b = w.D(g.f, g.s) // if(iB(g[2])){ g[2]= g[2].wV()} //M.p(g[2]).vs()
		_.e(g.t, function (p) {
			b.pol({v: p})
		})
		return g.m ? M.p(b) : b
	}
	o = g.O ? g.f : N(g.f) ? {x: g.f, y: g.s, p: g.t} : {p: g.f}
	o.x = N(o.x, w.hW)
	o.y = N(o.y, w.hH)
	o.p = M.p(o.p)
	b = w.D(o.x, o.y)
	if (!g.p) {
		if (b2d.iB(o.p)) {
			o.p = M.p(o.p)
		}
		_p = o.p
		b.pol(o.p)
		if (g.m) {
			b = M.p(b)
		}
		return b
	}
	if (o.rg) {
		o.p.ps(o.rg, function (p) {
			b.pol(o)
		})
	}
	else {
		o.p.ps(function (p) {
			b.pol(o)
		})
	}
	return b.f()
}
w.POLY = w.poly = w.verts = w.vs = function (x, y, arrs) {
	alert('w.poly verts vs  worldcreate.js')
	var w = this
	var b = w.dB(x, y)
	_.e(arrs, function (arr) {
		b.POLY(arr[0], _.r(arr))
		//  bod.convex( fixt )
		//	b.convex.apply(b, arr)
	})
	return b
}
w.pol1 = function () {
	var w = this, g = G(arguments), o
	var v = V(g.f, g.s)
	var b = w.D(v.x, v.y)
	b.pol({v: g.t})
	return b
}
w.ps = w.poliees = function (x, y, pS) {
	pS.ps(this.D(x, y), function (pS) {
		b1.pol(pS)
	})
}
w.ps = function (x, y, p) {
	var w = this, b
	b = w.D(x, y)
	p.ps(b, function (p) {
		b1.pol(p)
	})
}
w.polies = w.ps = function (x, y, p) {
	p.ps(this.D(x, y), function (p) {
		b1.pol(p)
	})
}
 