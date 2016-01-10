 
// dif
f.sub = f.DIF = f.DIFF = function (b2) {
	var f = this, g = G(arguments), b2 = g[0]
	f.body().conc(f.minus(b2))
	f.kill()
	if (g.n) {
		b2.kill()
	}
	return this
}
f.minus = f.diff = function (bOrF) {
	var f = this, b = f.body(), verts, poly
	//can handle a fixt OR a body! or even a gPoly itself!
	poly = f.polyVerts().difference(b2d.isGPoly(bOrF) ? bOrF : bOrF.polyVerts())
	_.each(_.rest(arguments), function (bOrF) {
		poly = poly.difference(b2d.isGPoly(bOrF) ? bOrF : bOrF.polyVerts())
	})
	if (b2d.hasVerts(poly)) {
		return b.rel(poly)
	}
}
/// uni
f.union = function (f2) {
	var f = this,
			b = f.body(), p //can handle a fixt OR a body!
	if (A(f2)) {
		return this.union.apply(this, f2)
	}
	p = f.polyVerts().union(
			f2.polyVerts()
	)
	_.each(_.rest(arguments), function (f) {
		p = p.union(f.polyVerts())
	})
	return b.rel(p)
}
FVS = function () {
	W()
	b = w.D(300, 300, 'r', [[80, 40, 0, 0, 3]])
	f = b.f()
	//f1 = b.cir(20)
	f.vs()
}
b.polyClone = function (x, y, rot) {
	x = N(x) ? x : this.X()
	y = N(y) ? y : this.Y()
	rot = N(rot) ? rot : this.rot()
	var that = this,
			b = w.B(x, y).type(that.type()).rot(rot)
	_.each(that.fixts(), function (f) {
		b.poly.apply(b, _.map(f.verts(), function (v) {
			return [v.x, v.y]
		}))
	})
	return b
}
b.clone = function (x, y, rot) {
	x = N(x) ? x : this.X()
	y = N(y) ? y : this.Y()
	rot = N(rot) ? rot : this.rot()
	var that = this,
			b = w.B(x, y).type(that.type()).rot(rot)
	_.each(that.fixts(), function (f) {
		var h, x, y, r
		if (f.isCirc()) {
			h = f.shape()
			x = h.m_p.x * 30
			y = h.m_p.y * 30
			r = h.m_radius * 30
			b.circ(r, x, y)
		}
		else {
			b.poly(f.verts())
		}
	})
	return b
}
 
b.toPositivePoints = b.mapToGPoly = b.reg = b.rel = function (p) {
	$l('b.reg')
	var b = this
	//my poly operations can only work with POSITIVE vertices
	//but box2d needs fixt vertices specified relative to a body
	//so this allows the body that the operation was based on to take responsibility
	//for converting them back
	//you can pass in the verts, or the gPoly itself!
	var vs = gpc.iP(p) ? p.vs() : p
	return _.m(vs, function (v) {
		v = V(v);
		return V(v.x - b.X(), v.y - b.Y())
	})
	//this returns [V,V,V...]
}
b2d.add = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).add(p)
	})
}
b2d.glu = function (a, b) {
	return a.glu(b)
}
function boxUni() {
	b.uni = function () {
		var b = this, g = G(arguments), n, fs
		fs = b.fs()
		if (g.u) {
			return g.p ? UNI(fs).reg(b) : b2d.u(fs)
		}
		//unite with fixt or first-fixt(of body)
		if (O(g.f) && !F(g.s)) {
			return b.f().uni(b2d.tF(g.f))
		}
	}
	f.uni = function () {
		var f = this,
				b = f.B(), g = G(arguments), p, n
		//can handle a fixt OR a body!
		//-> [f]
		if (g.A) {
			return $a(f, 'uni', g.f)
		}
		p = M.p(f).U(g.f)
		g.eR(function (f) {
			p = p.U(f)
		})
		return p.reg(b)
		//n= p.getNumInnerPoly()
		//to do now!
		//if it receives a body, i should uni all thatbody's fixs against it
		//dont worry about rebuilding the body first? hmm....
	}
	b.sum = function (b1) {
		return $uni(this, b1).vs(this, '-')
	}
	w.polU = function (x, y, p1, p2) {
		return this.pol(x, y, M.p(p1).U(p2))
	}
	w.polS = function () {
		alert('you found w.polS');
		var w = this, g = G(arguments), b, o
		if (g.A) {
			return w.pol.apply(w, g.f)
		}
		if (O(g.f) && O(g.s)) {
			g.e(function (g) {
				w.pol(g).stat()
			})
			return w
		}
		o = O(g.f) ? g.f : N(g.f) ? {x: g.f, y: g[1], p: g[2]} : {p: g.f}
		o.x = N(o.x, w.hW);
		o.y = N(o.y, w.hH)
		b = w.D(o.x, o.y)
		if (!g.p) {
			return b.pol(o.p)
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
	b2d.glu = function (a, b) {
		return a.glu(b)
	}
	b.uni = function () {
		var b = this, g = G(arguments), n, fs
		fs = b.fs()
		if (g.u) {
			return g.p ? UNI(fs).reg(b) : b2d.u(fs)
		}
		//unite with fixt or first-fixt(of body)
		if (O(g[0]) && !F(g[0])) {
			return b.f().uni(b2d.tF(g[0]))
		}
	}
	f.uni = function () {
		var f = this,
				b = f.B(), g = G(arguments), p, n
		//can handle a fixt OR a body!
		//-> [f]
		if (g.jA) {
			return $a(f, 'uni', g.f)
		}
		p = M.p(f).U(g.f)
		g.eR(function (f) {
			p = p.U(f)
		})
		return p.reg(b)
//n= p.getNumInnerPoly()
		//to do now!
		//if it receives a body, i should uni all thatbody's fixs against it
		//dont worry about rebuilding the body first? hmm....
	}
	b.sum = function (b1) {
		var b = this
		return UNI(b, b1).vs(b, '-')
	}
	b.sum = function (b1) {
		return $UNI(this, b1).vs(this, '-')
	}
	b.U = function () {
		var b = this, g = G(arguments)
		var pD = b.pD()
		g.e(function (arg) {
			pD = pD.U(arg)
		})
		return pD.tlNeg(b)
	}
	b.uni = function () {
		var b = this, g = G(arguments)
		var fs = b.fs()
		if (g.u) {
			return !g.n ? $UNI(fs).tlNeg(b) :
					$UNI(fs)
		}
		//unite with fixt or first-fixt(of body)
		if (O(g.f) && !F(g.s)) {
			return b.f().uni(b2d.tF(g.f))
		}
	}
	w.polU = function (x, y, p1, p2) {
		var w = this, p
		p = w.pol(x, y, M.p(p1).U(p2))
		return p
	}
	w.polU = function (x, y, p1, p2) {
		//alert('w.polU')
		return this.pol(x, y, M.p(p1).U(p2))
	}
	f.uni = function () {
		var f = this,
				b = f.B(), g = G(arguments), p, n
		//can handle a fixt OR a body!
		//-> [f]
		if (g.A) {
			return $a(f, 'uni', g.f)
		}
		p = M.p(f).U(g.f)
		g.eR(function (f) {
			p = p.U(f)
		})
		return p.tlNeg(b)
		//n= p.getNumInnerPoly()
		//to do now!
		//if it receives a body, i should uni all thatbody's fixs against it
		//dont worry about rebuilding the body first? hmm....
	}
}
b.clone = function (x, y, a) {
	var b = this
	x = N(x, b.X())
	y = N(y, b.Y())
	a = N(a, b.rot())
	b1 = w.D(x, y).type(b.type()).rot(a)
	arr = []
	b.fs(function (f) {
		var h, x, y, r
		arr.push(f)
		_.e(arr, function (f) {
			if (f.iC()) {
				h = f.H()
				x = h.m_p.x * 30
				y = h.m_p.y * 30
				r = h.m_radius * 30
				b1.cir(r, x, y, $r())
			}
			else {
				b1.pol({c: $r(), v: f.vs()})
			}
		})
	})
	return b1
}
b.polyClone = function (x, y, a) {
	var b = this, b1
	x = N(x, b.X())
	y = N(y, b.Y())
	a = N(a, b.rot())
	b1 = w.B(x, y).type(b.type()).rot(a)
	b.fs(function (f) {
		b1.pol(_.m(f.vs(), function (v) {
			return [v.x, v.y]
		}))
	})
	return b1
}
b.copy = function (x, y) {
	var b = this, w = b.W(), g = G(arguments)
	return w.pol(x, y, b)
}
b.clone = function (x, y, a) {
	var b = this
	x = N(x, b.X())
	y = N(y, b.Y())
	a = N(a, b.rot())
	b1 = w.D(x, y).type(b.type()).rot(a)
	arr = []
	b.fs(function (f) {
		var h, x, y, r
		arr.push(f)
		_.e(arr, function (f) {
			if (f.iC()) {
				h = f.H()
				x = h.m_p.x * 30
				y = h.m_p.y * 30
				r = h.m_radius * 30
				b1.cir(r, x, y, $r())
			}
			else {
				b1.pol({c: $r(), v: f.vs()})
			}
		})
	})
	return b1
}
b.polyClone = function (x, y, a) {
	var b = this, b1
	x = N(x, b.X())
	y = N(y, b.Y())
	a = N(a, b.rot())
	b1 = w.B(x, y).type(b.type()).rot(a)
	b.fs(function (f) {
		b1.pol(_.m(f.vs(), function (v) {
			return [v.x, v.y]
		}))
	})
	return b1
}
b.copy = function (x, y) {
	return this.W().pol(x, y, this)
}
f.cloneTo = function (b) {

// *makes pol
// * gets the verts from its shape..  conver it to an array of arrs,
// and it will polif the specified body with that vsA
// (lets you 'stamp' in a specified body)
	var f = this
	if (f.isCir()) {
		var h = f.H()
		var x = h.m_p.x * 30
		var y = h.m_p.y * 30
		b.cir(h.rad(), x, y, $r())
	}
	else {
		b.pol({c: $r(), v: f.vs()})
		// alt??! b.pol( f.vsA() )
		// maybe both work???
	}
	return f
}
b.clone = function (x, y, rt) {
	var b = this
	x = N(x, b.X())
	y = N(y, b.Y())
	rt = N(rt, b.rt())
	var ty = b.ty()
	//make a new body at the right 'transform' (copying this body)
	var b1 = w.D(x, y).ty(ty).rt(rt)
	//then.. for each of this body's fixtures....
	// stamp it 'on' that damn body
	// when u are done.. it will be just like you !!!
	return b.cloneTo(b1)
} //= b.cloneNew = b.pClone = b.polyClone
CLO = function () {
	W([400, 400]).G(100)
	b = w.D(200, 200, 'r', 30, 30)
	b.clone(300, 300).C('g')
}
b.cloneTo = function (b1) {

// b.polEachF will take a different body..
// and it will polif that body with EACH if its fs
	this.fs(function (f) {
		f.cloneTo(b1)
	})
	return b1
}
function copy() {
	b.copy = function (x, y) {
		var b = this, w = b.W()
		return w.pol(x, y, b)
	}
	COP = function () {
		W([400, 400]).G(100)
		b = w.D(200, 200, 'r', 30, 30)
		b.copy(300, 300).C('g')
	}
} 