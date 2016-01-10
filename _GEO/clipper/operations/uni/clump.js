 
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
UNIF = function () {
	W()
	b = w.S(300, 400, [['b', 100, 40, 40, 40, 39]])
	x = w.S(300, 400, [['x', 30, 40]])
	vs = b.U(x.pD())
	w.pol(300, 300, vs)
}
$UNI = function () {
	var g = G(arguments)
	if (g.A) {
		return g.ap($UNI)
	}// << return $a($UNI,g.f)
	var pD = M.p(g.f)
	g.eR(function (pol) {
		pD = pD.U(M.p(pol))
	})
	return pD
}
GER3 = function () {
	W().D(1050, 500).pol(
			w.S(900, 500, [
				['g', 30, 80],
				['b', 40, 50, 20, 0],
				['r', 50, 20, 50, 0, 20]]).uni()
	)
}
U1 = function () {
	W().D(230, 150).pol('y',
			w.S(200, 200, [['r', 50, 50], ['o', 10, 100]]).uni())
}
 
UNII = function () {
	W(50).Y()
	p1 = M.p(sqr)
	p2 = M.p(combo)
	pol1 = M.p(p1)
	pol = pol1.U(p2)
	p = w.pol(300, 300, pol)
	p1 = w.pol({x: 300, y: 200, v: pol1})
	p0 = w.pol({x: 300, y: 200, v: p1})
	p.XY(500, 200)
	w.polU(500, 200, p1, p2)
	w.polD(600, 200, p1, p2)
	b = w.S(520, 120, 'b', 50, 50)
	r = w.S(500, 100, 'r', 50, 50)
	w.polU(500, 200, b, r)
	d = w.S(500, 200)//.dot('y')
	f = d.pol({c: 'w', C: 'z', l: 5, v: b.sum(r)})
	f[0].C('z');
	f[2].C('o')//f is an ARRAY OF FIXTS!!!
}
GER = function () {
	W(30)
	b = w.S(500, 200, 'b', 100, 100)
	vs = b.U(
			w.D(600, 400, 'B', 100, 100).pD()
	)//.dot(w)
	//x=	$UNI(w.S(700, 200, 'x', 100, 100), w.D(750, 250, 'r', 100, 100))//.dot(w)
//	vs = b.U( x )
	w.pol(300, 200, vs)
}
GER1 = function () {
	W(30)
	$UNI(
			w.S(900, 200, 'r', 100, 100),
			w.S(1000, 200, 'b', 100, 100)
	)//.dot(w)
	w.D(1000, 350).pol({
		c: 'x',
		v: w.S(1000, 450, [
			['o', 60, 60, 100, 0],
			['r', [[-20, 0], [0, -50], [100, 10]]],
			['g', 20, 100, 50, -50]
		]).uni()
	})
}
SAUCERS = SAU = function () {
	W(0).roof.kill()
	b = w.S(300, 300, [['g', 30, 30], ['b', 100, 6], ['o', 100, 6, 0, 30]])
	//one way
	b1 = w.D(400, 300).vX(-10)
	_.e(b.p(), function (v) {
		b1.pol({x: 300, y: 399, c: 'r', v: v})
	})
	return
	//better way
	b1 = w.D(500, 500).vX(10)
	b.ps(function (v) {
		b1.pol({v: v})
	})
	//best way below.. next ex:
}
BEST = function () {
	W(0).roof.kill()
	b = w.S(300, 300, [['g', 30, 30], ['b', 100, 6], ['o', 100, 6, 0, 30]])
	b.copy(500, 450)
	//b.vY(-10)
	return
	pD = $UNI(
			w.S(400, 280, 'y', 30, 30),
			w.S(420, 300, 'o', 30, 30),
			w.S(420, 300, 'g', 100, 6),
			w.S(420, 310, 'g', 100, 6, 0, 30))
	p = pD.ps(420, 300)
	w.$(function (o) {
		w.D(o.x, o.y).pol({v: p}).aV(2)
	})
}
GERN = function () {
	W({g: 0}).Y()
	w.p(200, 200)
	ter = w.S(400, 400, 'g', 300, 300).K('ter')
	w.cxBul('ter', function (tFx) {
		var bu = this.B()
		_.in(1, function () {
			var exp = w.S(bu.X(), bu.Y(), 'g', 100, 100).K('ter')
			t.sub(exp)
			_.in(10, function () {
				exp.kill()
			})
		})
	})
}
WALLZ = function () {
	W(10).Y()
	x = w.S(900, 450, 'r', 250, 200)
	bb = w.S(w.w, w.h / 2, 'w', 200, 400)
	return
	w.right.scrape(bb)
	w.r_.C('o')
	bb.kill()
	b = w.S(1200, 300, 'p', 200, 100)
	b1 = w.S(1200, 300)
	return
	$DIF(w.r_.f(), b.f())
			.ps(b, function (p) {
				b1.pol(p)
			})
	b.kill()
}
STAMP = function () {
	W({w: 'U', g: 50})
	soda = w.S(300, 300, 'b', 300, 200)//.c('b')
	r = w.S(200, 400, 'r', 300, 200)//.c('r')
	y = w.S(240, 200, 'y', 200, 300, 0, 0, 100)//.c('y')
	_.in(1, function () {
		soda.sub(y) //, '-')
		//soda.f().C('o')
		//f = soda.f()
	})
	return
	soda.kill()
	_.in(3, function () {
		$DIF(f, r.f())
				.ps(soda, function (p) {
					soda.pol(p)
				})
	})
	w.D(800, 100).pol('g', w.D(800, 300, 'r', 100, 20))
	cross = w.D(600, 300, 'z', [
		['r', 100, 20],
		['b', 80, 30, 0, 0, 80]
	])
	cross = cross.uni().reg(cross)
	w.$(function (o) {
		w.D(o.x, o.y).pol(cross)
		w.pol(o.x, o.y, soda)
		o.f.kill()
		r.kill()
		soda.dyn()
	})
} // w.S(...).c NOT FUNC
STAMP = function () {
	W({w: 'U', g: 50})
	soda = w.S(300, 300, 'b', 300, 200).c('b')
	r = w.S(200, 400, 'r', 300, 200).c('r')
	y = w.S(240, 200, 'y', 200, 300, 0, 0, 100).c('y')
	_.in(1, function () {
		soda.sub(y, '-')
		soda.f().C('o')
		f = soda.f()
	})
	soda.kill()
	_.in(3, function () {
		DIF(f, r.f())
				.ps(soda, function (p) {
					soda.pol(p)
				})
	})
	w.D(800, 100).pol('g', w.D(800, 300, 'r', 100, 20))
	cross = w.D(600, 300, 'z', [
		['r', 100, 20],
		['b', 80, 30, 0, 0, 80]
	])
	cross = cross.uni().reg(cross)
	w.$(function (o) {
		w.D(o.x, o.y).pol(cross)
		w.pol(o.x, o.y, soda)
		o.f.kill()
		r.kill()
		soda.dyn()
	})
} // w.S(...).c NOT FUNC
SAUCERS = function () {
	W(0)
	b = w.S(300, 300, [['g', 30, 30], ['b', 100, 6], ['o', 100, 6, 0, 30]])
	//one way
	b1 = w.D(700, 300).vX(-10)
	ps = b.ps();
	_.e(ps, function (v) {
		b1.pol({c: 'r', v: v})
	})
	//better way
	b1 = w.D(500, 500).vX(10)
	b.ps(function (v) {
		b1.pol({v: v})
	})
	//best way
	b.copy(500, 450).vY(-10)
	p = UNI(
			w.S(400, 280, 'y', 30, 30),
			w.S(420, 300, 'o', 30, 30),
			w.S(420, 300, 'g', 100, 6),
			w.S(420, 310, 'g', 100, 6, 0, 30))
			.ps(420, 300)
	w.$(function (o) {
		w.D(o.x, o.y).pol({v: p}).aV(2)
	})
}
VSGLUE = function () {
	W(5)
	u = UNI(
			w.S(100, 100, 'r', 50, 50),
			w.S(120, 120, 'b', 50, 50)
	).vs()
	_.t(3, function () {
		w.D(R(200, 50), 100).pol($r(), u)
	})
	b = w.S(300, 400, 'r', [-80, -40], [0, -200], [100, 50]).dot()
	p = UNI(
			w.S(300, 280, 'y', 100, 100).f(),
			w.S(400, 420, 'o', 100, 100).f())
	b2d.glu(
			w.D(100, 400, 'x', [p.g(0).reg(b).vs()]),
			w.D(100, 400, 'u', [p.g(1).reg(b).vs()])
	)
	w.dot('d', 600, 400)
	UNI(
			w.S(500, 200, 'b', 100, 100),
			w.S(600, 400, 'd', 100, 100)
	)//.dot(w)
	UNI(
			w.S(700, 200, 'o', 100, 100),
			w.S(750, 250, 'g', 100, 100)
	)//.dot(w)
	UNI(
			w.S(900, 200, 'r', 100, 100),
			w.S(1000, 200, 'b', 100, 100)
	)//.dot(w)
	w.D(1000, 350).pol({
		c: 'x',
		v: w.S(1000, 450, [
			['o', 60, 60, 100, 0],
			['r', [[-20, 0], [0, -50], [100, 10]]],
			['g', 20, 100, 50, -50]
		]).uni()
	})
	w.D(1050, 500).pol(w.S(900, 500, [
		['g', 30, 80],
		['b', 40, 50, 20, 0],
		['r', 50, 20, 50, 0, 20]]).uni())
}
UNII = function () {
	W(50).Y()
	p0 = w.pol({v: p1})
	//pol1 = M.p(p1)
	// p1 = w.pol({v: pol1})
//	pol = pol1.U(p2)
//	p = w.pol( pol  )
	//p.XY(500,200) 
	//w.polU(500, 200, p1, p2)
	//w.polD(600, 200, p1, p2)
//	b = w.S(520, 120, 'b', 50, 50)
	//r = w.S(500, 100, 'r', 50, 50)
	//	w.polU(500, 200, b, r)
	//	d = w.S(500,200)//.dot('y')
	//f = d.pol({c:'w',C:'z',l:5,v:b.sum(r)})  //f[0].C('z');f[2].C('o')//f is an ARRAY OF FIXTS!!!
}
UNIII = function () {
	W()
	b = w.S(100, 400, 'r', [-40, -20], [0, -100], [50, 25])
	r = b.f()
	o = w.S(150, 420, 'o', 50, 50).f()
	y = w.S(100, 340, 'y', 50, 50)
	w.D(200, 400).pol({v: r.uni(o)})
	w.D(350, 400).pol(r.uni(y.f()))
	w.D(440, 400).pol('d', r.uni(o, y.f()))
	w.D(600, 300).pol(y.uni(o))
	w.D(230, 150).pol('w',
			w.S(200, 200, [['r', 50, 50], ['o', 10, 100]]).uni('+'))
	w.S(800, 350).pol({
		c: 'y',
		v: w.S(1000, 300, [['g', 50, 200], ['o', 200, 50], ['r', 100, 100]]).uni('+')
	})
}
GERN = function () {
	W({g: 0}).Y()
	w.p(200, 200)
	ter = w.S(400, 400, 'g', 300, 300).K('ter')
	w.cxBul('ter', function (tFx) {
		var bu = this.B()
		_.in(1, function () {
			var exp = w.S(bu.X(), bu.Y(), 'g', 100, 100).K('ter')
			t.sub(exp)
			_.in(10, function () {
				exp.kill()
			})
		})
	})
}
UNIONNOTTOUCHING = function () {
	w = b2d.W()
	b = w.B(200, 200, 100, 100).stat()
	b2 = w.B(400, 400, 100, 100).stat()
	p = b.polyVerts().union(b2.polyVerts())
	_.each(p.verts(), function (v) {
		w.dot(v[0], v[1])
	})
	v1 = b2.polyVerts().verts()
	v2 = p.verts()
	_.isEqual(v1, v2) // true
	p2 = b2.polyVerts().union(b.polyVerts())
	_.each(p2.verts(), function (v) {
		w.dot('r', v[0], v[1])
	})
	b3 = w.B(500, 200, 100, 100).stat()
	b4 = w.B(550, 250, 100, 100).stat()
	p3 = b3.polyVerts().union(b4.polyVerts())
	_.each(p3.verts(), function (v) {
		w.dot(v[0], v[1])
	})
	b5 = w.B(700, 200, 100, 100).stat()
	b6 = w.B(800, 200, 100, 100).stat()
	p4 = b5.polyVerts().union(b6.polyVerts())
	_.each(p4.verts(),
			function (v) {
				w.dot(v[0], v[1])
			})
}