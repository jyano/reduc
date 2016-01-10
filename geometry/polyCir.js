b._pC = function () {
	var b = this, g = G(arguments), o
	o = g.O ? g.f :
			g.S_ ? {col: g.f, rad: g.s, num: g.t}
					: {rad: g.f, num: g.s}
	o.col = o.col || 'v'
	b.pol($pC(o.rad, o.num))
	return b.C(o.col)
}
b.pC = function () {
	var b = this, g = G(arguments), o,
			vs = [], p
	o = O(g[0]) ? g[0] :
			S(g[0]) ? {c: g[0], r: g[1], n: g[2]}
					: {r: g[0], n: g[1]}
	o.r = N(o.r, 20)
	o.a = 2 * M.PI / o.n
	_.t(N(o.n, 20), function (i) {
		var v
		v = V(M.c(o.a * i) * o.r, M.s(o.a * i) * o.r)
		vs.push([v.x, v.y])
	})
	if (g.n) {
		return vs
	}
	p = b.pol(vs)
	p.C(o.c || $r())
	return b
	function alt() {
		b.polCir = b.pC = function () {
			var b = this, g = G(arguments), o,
					vs = [], p
			o = O(g[0]) ? g[0] :
					S(g[0]) ? {c: g[0], r: g[1], n: g[2]}
							: {r: g[0], n: g[1]}
			o.r = N(o.r, 20)
			o.a = 2 * M.PI / o.n
			_.t(N(o.n, 20), function (i) {
				var v
				v = V(M.c(o.a * i) * o.r, M.s(o.a * i) * o.r)
				vs.push([v.x, v.y])
			})
			if (g.n) {
				return vs
			}
			p = b.pol(vs)
			p[0].C(o.c || $r())
			return b
		}
	}
}
b.mPC = b.minusPolyCirc = function (x, y, r, sides) {
	var b = this, pC, p
	pC = $pC(r, sides)
	p = _.m(pC, function (v) {
		v = V(v)
		return [v.x + x, v.y + y]
	})
	vs = $DIF(b, p).ps(b)
	//b.clear()
	b.pol(vs)
	return b
}
w.pC = function () {
	var w = this, g = G(arguments), o
	if (g.O) {
		return w.D(g.f.x, g.f.y).pC(g.f)
	}
	var b = w.D(g.f, g.s)
	b.pC.apply(b, _.r(g, 2))
	return b
	function alt() {
		w.polCir = w.pC = function (x, y, pC0, pC1, pC2) {
			var w = this, g = G(arguments), o
			if (g.O) {
				o = g[0]
				return w.D(o.x, o.y).pC(o)
			}
			return w.D(x, y).pC(pC0, pC1, pC2)
		}
	}
}
f.pC = function (n) {
	var f = this, g = G(arguments)
	var pC = f
	if (f.isCir()) {
		pC = $pC(f.rad(), N(n, 10))
	}
	if (g.n) {
		return pC
	}
	return M.p(pC)
	function alt() {
		f.polCir = f.pC = function (n) {
			var f = this, g = G(arguments), pC
			pC = f.iC() ? b2d.pC(f.rad(), N(n, 10))
					: f
			return g.m ? M.p(pC) : pC
		}
	}
}
b2d.pC = b2d.polCir = function () {
	var g = G(arguments), //b2d.polyCirc =
			vs = [],
			r = N(g[0], 20),
			n = N(g[1], 20),
			a = 2 * M.PI / n
	_.t(n, function (i) {
		var v = V(
				M.c(a * i) * r,
				M.s(a * i) * r)
		vs.push(g.p ? v : [v.x, v.y])
	}) //returns an arr of rel verts
	return vs
	function alt() {
		b2d.polyCirc = function (r, n) {
			var g = G(arguments), vs = [], a
			r = N(r, 20)
			n = N(n, 20)
			a = 2 * M.PI / n
			_.t(n, function (i) {
				vs.push(V(r * M.c(a * i), r * M.s(a * i)))
			})
			return vs
		}
	}
}
$pC = function (rad, numVxs) {
	var g = G(arguments)
	rad = N(rad, 50)
	numVxs = N(numVxs, 5)
	var ang = 2 * M.PI / numVxs
	var vxs = []
	//alpha: _.arr = function(){var g=G(arguments), arr=[]}
	_.t(numVxs, function (vx) {
		vx = V(
				M.cos(ang * vx) * rad,
				M.sin(ang * vx) * rad)
		vxs.push(g.p ? vx : [vx.x, vx.y])
	})
	//returns an arr of rel verts
	return vxs
}
PC = BPC = FPC = function () {
	W({w: 0}).C('o')
	_.fnEv(.5,
			function penta() {
				w.S(200, 300).pC('r', 60, 5)
				w.S(400, 300).pC('b', 80, 10)
			},
			function polDeca() {
				w.pC(700, 300, 'y', 120, 15)
				w.S(600, 500).pol(
						w.S(800, 500, 'w', 50).f().pC(10, '*')
				)
			})
}
WPC = function () {
	W().C('w')
	w.pC(300, 300, 'b', 120, 5)
	w.pC(300, 300, 'r', 120, 4)
	w.pC(300, 300, 'x', 120, 3)
	w.pC(300, 300, 'x', 120, 2)
}
PCD = function () {
	W(600, 600).C('y').$$fall()
	blue = b = victim = w.pC(300, 300, 'b').stat().al(.5)
	vic = victim.pD()
	red = r = bullet = w.pC(290, 330, 'r').stat().rt(10).al(.5)
	bul = bullet.pD()
	res = vic.difference(bul)
	res2 = bul.difference(vic)
	vs = res.tlNeg(bullet).vs()
	vs2 = res.tlNeg(victim).vs()
	_.inx(2, function () {
		victim.kill()
		bullet.kill()
		w.pol(300, 400, vs2).C('b').stat()
		w.pol(300, 400, vs).C('r')//.stat()
	})
}
PCI = function () {
	W(600, 600).C('y').$$fall()
	blue = victim = w.pC(300, 300, 'b').stat().al(.5)
	vic = victim.pD()
	red = bullet = w.pC(290, 330, 'r').stat().rt(10).al(.5)
	bul = bullet.pD()
	u = vic.union(bul)
	d = vic.difference(bul)
	i = vic.intersection(bul)
	x = vic.xor(bul)
	_.in(.2, function () {
		victim.al(.3)
		bullet.al(.3)
		dif()
		int()
		uni()
		xorT()
		xorB()
	})
	function dif() {
		var vs0 = d.tlNeg(blue).vs()
		var b = w.S(100, 300)
		b.pol(vs0)
		b.C('b')
		b.fs(function (f) {
			f.al(.5)
		})
		_.in(function () {
			b.dyn()
		})
	}
	
	function int() {
		var vs1 = i.tlNeg(blue).vs()
		var b = w.S(100, 300)
		b.pol(vs1)
		b.C('r').al(.5)
		_.in(function () {
			b.dyn()
		})
	}
	
	function uni() {
		var vs1 = u.tlNeg(blue).vs()
		var b = w.S(300, 100)
		b.pol(vs1)
		b.C('g')
		b.fs(function (f) {
			f.al(.5)
		})
		_.in(function () {
			b.dyn()
		})
	}
	
	function xorT() {
		var vs1 = x.getPoly(1).tlNeg(blue).vs()
		var b = w.S(400, 300)
		b.pol(vs1)
		b.C('a')
		b.fs(function (f) {
			f.al(.5)
		})
		_.inx(function () {
			b.dyn()
		})
	}
	
	function xorB() {
		var vs1 = x.tlNeg(blue).vs()
		var b = w.S(400, 300)
		b.pol(vs1)
		b.C('a')
		b.fs(function (f) {
			f.al(.5)
		})
		_.inx(function () {
			b.dyn()
		})
	}
}
PCH = function () {
	W(600, 600).C('y').$$fall()
	blue = victim = w.pC(300, 300, 'b').stat().al(.5)
	vic = victim.pD()
	red = bullet = w.pC(300, 300, 'r', 30).stat().rt(10).al(.5)
	bul = bullet.pD()
	d = vic.difference(bul)
	hol = d.g(1)
	ho = hol.tlNeg(blue)
	vs = ho.vs()
	//blue.kill()
	//red.kill()
	b = w.S(100, 300)
	b.pol(vs.reverse())
	b.C('z')
	_.in(function () {
		b.fs(function (f) {
			f.al(.5)
		})
		//b.dyn()
	})
}
w.pC__ = function () {
	return this.S(830, 270).pC('z', 80, 10)
}
TANKWHEELS = function () {
	w = b2d.W({g: 0}).debug()
	grv = V(0, 1000)
	dir = 12
	car = w.B(300, 300, 'r', 100, 5)
	w1 = w.rev(w.B(250, 300, 'b', [_.map(b2d.polyCirc(45, 10),
			function (v) {
				return [v.x, v.y]
			}
	)]).den(5), car).mot(10)
	w2 = w.rev(w.B(350, 300, 'b', [_.map(b2d.polyCirc(45, 10),
			function (v) {
				return [v.x, v.y]
			}
	)]).den(5), car).mot(10)
	w.click(function () {
		dir *= -1
		w1.mot(dir);
		w2.mot(dir)
		grv = V(-grv.x, -grv.y)
	})
	cjs.tick(function () {
		car.F(grv)
	})
	w.right.coll(function () {
		grv = V(-1000, 0)
	})
	w.left.coll(function () {
		grv = V(1000, 0)
	})
	w.roof.coll(function () {
		grv = V(0, -1000)
	})
	w.floor.coll(function () {
		grv = V(0, 1000)
	})
}
POLYCIRC = function () {
	w = b2d.W()
	w.polyCirc(400, 300, 100, 8)
}
 
b2d.polyCirc = function (rad, prec) {
	rad = N(rad) ? rad : 20
	prec = N(prec) ? prec : 20
	var arr = [],
			ang = 2 * Math.PI / prec
	_.times(prec, function (i) {
		arr.push(V(rad * Math.cos(ang * i), rad * Math.sin(ang * i)))
	})
	return arr
}
w.polyCirc = function (x, y, r, sides) {
	var w = this,
			b = w.D(x, y)
	b.pol({v: b2d.polyCirc(r, sides)})
	return b
}
w.polyCirc = function (x, y, r, sides) {
	var w = this,
			b = w.D(x, y)
	b.pol({v: b2d.polyCirc(r, sides)})
	return b
}
//wall
STANDMEUP = function () {
	w = b2d.W({})
	//y= w.ship(500,200)
	dir = 12
	car = w.B(300, 300, 'r', 200, 45)
	w1 = w.rev(
			w.B(250, 300, 'b', [_.map(b2d.polyCirc(45, 10),
							function (v) {
								return [v.x, v.y]
							}
					)]
			).den(5),
			car).mot(10)
	w2 = w.rev(w.B(350, 300, 'b',
					[_.map(b2d.polyCirc(45, 10),
							function (v) {
								return [v.x, v.y]
							}
					)]
			).den(5)
			, car).mot(10)
	x = function () {
		dir *= -1
		w1.mot(dir)
		w2.mot(dir)
	}
	w.click(x)
}
$pC = b2d.polyCirc = function (rad, prec) {
	rad = N(rad) ? rad : 20
	prec = N(prec) ? prec : 20
	var arr = [],
			ang = 2 * Math.PI / prec
	_.times(prec, function (i) {
		arr.push(V(rad * Math.cos(ang * i), rad * Math.sin(ang * i)))
	})
	return arr
	function alt() {
		w.polyCirc = function (x, y, rad, sides) {
			var b = this.dyn(x, y),
					pc = b2d.polyCirc(rad, sides)
			b.poly.apply(b, pc)
			return b
		}
	}
}
w.polyCirc = function (x, y, rad, sides) {
	var b = this.dyn(x, y),
			pc = b2d.polyCirc(rad, sides)
	b.poly.apply(b, pc)
	return b
}
b2d.pC = b2d.polyCirc = function (r, prec) {
	var g = G(arguments), vv = [], a
	r = _.tN(r, 20)
	prec = _.tN(prec, 20)
	a = 2 * M.PI / prec
	_.t(prec, function (i) {
		vv.push(V(M.c(a * i) * r, M.s(a * i) * r))
	})
	return vv
}
SEB = function () {
	W({g: 1})//w.show(function(){return b.num()})
	b = w.D(800, 300, 'r', 200, 800).stat().K('terr')
	y = w.y().lD(3).X(1100)
	p = w.p(200, 400).K('jason');
	//setTimeout(function () {p.sprite.sXY(.5)}, 1000)
	can = true
	w.b(function (cx) {
		var fixt, j, bull, terr, bX, bY, br
		if (fixt = cx.w('bul', 'terr')) {
			bull = fixt[0].B()
			terr = fixt[1].B()
			bX = bull.X()
			bY = bull.Y()
			bull.kill()
			if (can) {
				can = false
				b.minusPolyCirc(bX, bY, 100, 7)
				poly = M.p(_.m(b2d.pC(100, 7), function (v) {
					return [v.x + b.X(), v.y + b.Y()]
				}))
				verts = b.sub(poly)
				br = w.pC(bX, bY, 100, 7)  // b.sub(br) // b.verts not working :(
				b.sub(br, '-') // br.kill()
				//  b.color('r')
				can = true
			}
		}
		else if (fixt = cx.w('jason', 'bul')) {
			$l('bullet hit jason!!!!');
			j = fixt[0].body();
			j.sprite.tw([{sxy: 20, r: 100}, 1000])
		}
	})
	f = function () {
		v = h.verts()
		v.unshift('b')
		v.unshift(200)
		v.unshift(200)
		w.B.apply(w, v)
	}
	killIfSmallx = function (f) {
		var area = f.area();
		if (area < 20) {
			$l('too small: ' + area);
			f.kill()
		}
	}
}
CIRCTOPOLY = function () {
	w = b2d.W()
	b = w.S(300, 300, 50)
	w.B(600, 400).poly(b2d.polyCirc(b.fixt().rad(), 10))
}
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