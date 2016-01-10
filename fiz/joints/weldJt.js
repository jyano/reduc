function _weld(){
	b2d.WeldJointDef = b2d.Joints.b2WeldJointDef
	$wJ = $wJD = function (a, b) {
		var jD = new b2d.WeldJointDef()
		jD.bodyA = a
		jD.bodyB = b
		return jD
	}
	w.wed = function () {
		var w = this, g = G(arguments)
		_wed = function (a, b, ancA, ancB, ang, c, d) {
			var g = G(arguments)
			// can set 2 local anchor points and a reference angle
			var jd = $wJ()
			var o = {a: g.f, b: g.s}
			jd.bodyA = o.a
			jd.bodyB = o.b
			if (N(g.t)) {
				o.ancA = V(g.t, g.fo)
				o.ancB = V(g.fi, g.si)
				o.ang = g.se
				return jd
			}
			if (g.t) {
				jd.localAnchorA = o.ancA.d()
			}
			if (o.ancB) {
				jd.localAnchorB = o.ancB.d()
			}
			if (N(o.ang)) {// use ang to set a 'referenceAngle'
				jd.referenceAngle = M.tR(o.ang)
			}
			return jd
		}
		return w.J(_wed.apply(null, g))
	}
	b.dX = function (b1) {
		return this.X() - b1.X()
	}
	b.glu = function (b1) {
		var b = this, w = b.W()
		return w.wed(b, b1, -b.dX(b1), -b.Y(b1))
	}
	j.form = function () {
		var j = this, w = j.W(), a = j.A(), b = j.B()
		if (j.T() == 8) {
			$l('J.T()==8:COMMENCE WEDDING ' + (n++))
			return w.wed(a, b)
		}
	}
	b.jointList = b.jtLs = b.j = function () {
		return this.GetJointList()
	}
	WED = BIT = LUMP = function () {
		W(5)//.Y()
		w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		_.t(38, function () {
			w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		})
		y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
		fn = _.th(function () {
			var xx = y.X(),
					yy = y.Y()
			_.in(1, function () {
				w.S(xx, yy, 'b', 15)
			})
		}, 100)
		y.cl(fn)
		_.e([[400, 500], [300, 500], [400, 300],
			[300, 100], [400, 200], [100, 300],
			[300, 300]
		], function glb(v) {
			return w.D(v[0], v[1], 'z', 20).K('glb')
		})
		y.cl('glb', function (f) {
			var glb = f.B()
			if (!glb.j()) {
				glb.glu(y)
			}
		})
		w.wed(
				w.D(100, 200, 'x', 100, 200).r(1),
				w.D(200, 100, 'u', 200, 100).r(1))
		w.wed(
				w.D(300, 400, 'w', 50, 100),
				w.D(300, 400, 'v', 100, 50))
		w.t_.bit(1, [8])
	}
	W1 = function () {
		W([1500, 1000], {g: 0})
		w.wed(
				w.D(300, 300, 'r', 130),
				w.D(300, 650, 'b', 130, 400)
		)
		w.wed(w.S(200, 100, 'x', 30),
				w.D(200, 100, 'v', 30), 0, 10)
		w.wed(w.S(300, 100, 'l', 30),
				w.D(300, 200, 'x', 30), 0, -10)
	}
	W2 = function () {
		W()
		w.wed(w.S(400, 100, 'g', 30), w.D(400, 300, 'x', 30), 10, 10)
		w.wed(w.S(500, 100, 'x', 30), w.D(500, 100, 'v', 30), 10, -10)
		w.wed(w.S(600, 100, 'x', 30), w.D(600, 100, 'v', 30), 10, -20)
		w.wed(w.S(700, 100, 'x', 30), w.D(700, 100, 'v', 30), 10, -30)
		w.wed(w.S(800, 100, 'x', 30), w.D(800, 100, 'v', 30), -10, -40)
		w.wed(w.S(900, 100, 'x', 30), w.D(900, 100, 'v', 30), -10, -50)
		/*
		 w.wed(w.S(100,200,'x',30), w.S(100,200,'v',30),0,0)
		 w.wed(w.S(200,200,'x',30), w.S(200,200,'v',30),0,10)
		 w.wed(w.S(300,200,'x',30), w.S(300,200,'v',30),0,-10)
		 w.wed(w.S(400,200,'x',30), w.S(400,200,'v',30),10,10)
		 w.wed(w.S(500,200,'x',30), w.S(500,200,'v',30),10,-10)
		 w.wed(w.S(600,200,'x',30), w.S(600,200,'v',30),10,-20)
		 w.wed(w.S(700,200,'x',30), w.S(700,200,'v',30),10,-30)
		 w.wed(w.S(800,200,'x',30), w.S(800,200,'v',30),-10,-40)
		 w.wed(w.S(900,200,'x',30), w.S(900,200,'v',30),-10,-50)
		
		 w.wed(w.D(100,500,'x',30), w.S(100,500,'v',30),0,0)
		
		 w.wed( w.D(200,500,'x',30), w.S(200,500,'v',30) )
		
		
		 w.wed(
		 w.D(300,500, 'o', 30),
		 w.D(300,500,'g', 50,50),
		
		 V(0,-10)
		 )
		
		 w.wed(w.D(400,500,'x',30), w.S(400,500,'v',30), V(10,10))
		 w.wed(w.D(500,500,'x',30), w.S(500,500,'v',30),V(10,-10))
		 w.wed(w.D(600,500,'x',30), w.S(600,500,'v',30),10,-20)
		 w.wed(w.D(700,500,'x',30), w.S(700,500,'v',30),10,-30)
		 w.wed(w.D(800,500,'x',30), w.S(800,500,'v',30),-10,-40)
		 w.wed(w.D(900,500,'x',30), w.S(900,500,'v',30),-10,-50)
		 */
	}
	JOINTTRANSLATION = JTT = function () {
		W({g: 300}).P()
		p.XY(100, 550).track()
		j = w.pJ(
				w.S(400, 200, 's', 140, 240).K('cart'),
				w.D(200, 100, 'b', 40, 40).K('ride')
		)
		j.tran = function () {
			return this.GetJointTranslation() * 30
		}
		_.ev(1, function () {
			$l('j.tran: ' + j.tran())
		})
	}
	VSGLUE = VSG = NUMPOLYS = function () {
		W(5000).dot('d', 600, 400)
		u = $UNI(
				w.S(100, 100, 'r', 50, 50), w.S(120, 120, 'b', 50, 50)
		).vs()
		_.t(3, function () {
			w.D(R(400, 300), 100).pol($r(), u)
		})
		b = w.S(300, 400, 'r', [-80, -40], [0, -200], [100, 50]).dot()
		p = $UNI(
				w.S(300, 280, 'y', 100, 100).f(),
				w.S(400, 420, 'o', 100, 100).f()
		)
		$l('p numPolys: ' + p.numPolys())
		b1 = w.D(800, 200, 'x', [p.g(0).reg(b).vs()])
		b1.glu(w.D(800, 200, 'u', [p.g(1).reg(b).vs()]))
	}
	b2d.glu = function (a, b) {
		alert('b2d.glu depped.. use a.glu(b)')
		return a.glu(b)
	}
	CRUSHREWED = CRW = function () {
		W([1200, 600, 1400, 600], {}).C('p').P().P().P().P().P()
		n = 0
		p.track()//.cir({r: 10, c: 'y'}).bS('sun')
		j = w.wed(
				w.D(100, 200, 'x', 100, 200).r(1.5),
				w.D(200, 100, 'u', 200, 100))
		_.ev(2, function () {
			if (!j.destroyed) {
				j.destroy()
			}
			else {
				j = j.W().wed(j.A(), j.B())
			}
		})
	}
}
w.wed = function () {
	var w = this, g = G(arguments)
	b2d.wed = function (a, b, ancA, ancB, ang, c, d) {
		
		// can set 2 local anchor points and a reference angle
		b2d.WeldJointDef = b2d.Joints.b2WeldJointDef
		var g = G(arguments),
				jd = new b2d.WeldJointDef()
		o = {a: a, b: b}
		jd.bodyA = o.a
		jd.bodyB = o.b
		if (N(g[2])) {
			o.ancA = V(g[2], g[3])
			o.ancB = V(g[4], g[5])
			o.ang = g[6]
			return jd
		}
		if (g[2]) {
			jd.localAnchorA = o.ancA.div()
		}
		if (o.ancB) {
			jd.localAnchorB = o.ancB.div()
		}
		if (N(o.ang)) {// use ang to set a 'referenceAngle'
			jd.referenceAngle = M.tR(o.ang)
		}
		return jd
	}
	return w.J(
			b2d.wed.apply(null, g))
}

b.dX = function (b1) {
	return this.X() - b1.X()
}

b.glu = function (b1) {
	var b = this, w = b.W()
	return w.wed(b, b1, -b.dX(b1), -b.Y(b1))
}

j.form = function () {
	var j = this, w = j.W(), a = j.A(), b = j.B()
	if (j.T() == 8) {
		$l('J.T()==8:COMMENCE WEDDING ' + (n++))
		return w.wed(a, b)
	}
}
WED = function () {
	W([1500, 1000], {g: 0})
	w.wed(
			w.D(300, 300, 'r', 130),
			w.D(300, 650, 'b', 130, 400)
	)
	w.wed(w.S(200, 100, 'x', 30),
			w.D(200, 100, 'v', 30), 0, 10)
	w.wed(w.S(300, 100, 'l', 30),
			w.D(300, 200, 'x', 30), 0, -10)
	w.wed(w.S(400, 100, 'g', 30),
			w.D(400, 300, 'x', 30), 10, 10)
	w.wed(w.S(500, 100, 'x', 30), w.D(500, 100, 'v', 30), 10, -10)
	w.wed(w.S(600, 100, 'x', 30), w.D(600, 100, 'v', 30), 10, -20)
	w.wed(w.S(700, 100, 'x', 30), w.D(700, 100, 'v', 30), 10, -30)
	w.wed(w.S(800, 100, 'x', 30), w.D(800, 100, 'v', 30), -10, -40)
	w.wed(w.S(900, 100, 'x', 30), w.D(900, 100, 'v', 30), -10, -50)
	/*
	 w.wed(w.S(100,200,'x',30), w.S(100,200,'v',30),0,0)
	 w.wed(w.S(200,200,'x',30), w.S(200,200,'v',30),0,10)
	 w.wed(w.S(300,200,'x',30), w.S(300,200,'v',30),0,-10)
	 w.wed(w.S(400,200,'x',30), w.S(400,200,'v',30),10,10)
	 w.wed(w.S(500,200,'x',30), w.S(500,200,'v',30),10,-10)
	 w.wed(w.S(600,200,'x',30), w.S(600,200,'v',30),10,-20)
	 w.wed(w.S(700,200,'x',30), w.S(700,200,'v',30),10,-30)
	 w.wed(w.S(800,200,'x',30), w.S(800,200,'v',30),-10,-40)
	 w.wed(w.S(900,200,'x',30), w.S(900,200,'v',30),-10,-50)
	
	 w.wed(w.D(100,500,'x',30), w.S(100,500,'v',30),0,0)
	
	 w.wed( w.D(200,500,'x',30), w.S(200,500,'v',30) )
	
	
	 w.wed(
	 w.D(300,500, 'o', 30),
	 w.D(300,500,'g', 50,50),
	
	 V(0,-10)
	 )
	
	 w.wed(w.D(400,500,'x',30), w.S(400,500,'v',30), V(10,10))
	 w.wed(w.D(500,500,'x',30), w.S(500,500,'v',30),V(10,-10))
	 w.wed(w.D(600,500,'x',30), w.S(600,500,'v',30),10,-20)
	 w.wed(w.D(700,500,'x',30), w.S(700,500,'v',30),10,-30)
	 w.wed(w.D(800,500,'x',30), w.S(800,500,'v',30),-10,-40)
	 w.wed(w.D(900,500,'x',30), w.S(900,500,'v',30),-10,-50)
	 */
}
JOINTTRANSLATION = JTT=function () {
	W({g: 300}).P()
	p.XY(100, 550).track()
	j = w.pJ(
			w.S(400, 200, 's', 140, 240).K('cart'),
			w.D(200, 100, 'b', 40, 40).K('ride')
	)
	j.tran = function () {
		return this.GetJointTranslation() * 30
	}
}
b.jointList= b.jtLs=b.j = function () {
	return this.GetJointList()
}

function weld_(){
	b2d.WJD = b2d.Js.b2WeldJointDef
	_$wJ = function (a, b, c, d, e) {
		var j = new b2d.WJD()
		//j.i = function () {var g = G(arguments); _a(j.Initialize, g, j); return j}
		if (a) {
			j.A(a)
		}
		if (b) {
			j.B(b)
		}
		if (c) {
			j.XYA(c)
		}
		if (d) {
			j.XYB(d)
		}
		if (N(e)) {
			j.referenceAngle = M.tR(e)
		}
		return j
	}
	$wJ = function (a, b, c, d, e, f, g) {
		return _$wJ(a, b, V00(c, d).d(), V00(e, f).d(), g || 10)
	}
	w.wJ = function () {
		return this.CJ(
				$wJ.apply(null, arguments))
	}
	WELD = WE1 = function () {
		W()
		baBas([100, 100, 100, 100, 0, 0],
				[200, 100, 100, 100, 0, 10],
				[300, 100, 300, 100, 0, -10],
				[400, 100, 400, 100, 10, 10],
				[500, 100, 500, 100, 10, -10],
				[600, 100, 600, 100, 10, -20],
				[700, 100, 700, 100, 10, -30],
				[800, 100, 800, 100, -10, -40],
				[900, 100, 900, 100, -10, -50]
		)
		w.wJ(w.bal(100, 200, 10), w.box(100, 200), 0, 0) //
		w.wJ(w.bal(200, 200), w.box(200, 200), 0, 10)
		w.wJ(w.bal(300, 200), w.box(300, 200), 0, -10)
		w.wJ(w.bal(400, 200), w.box(400, 200), 10, 10)
		w.wJ(w.bal(500, 200), w.box(500, 200), 10, -10)
		w.wJ(w.bal(600, 200), w.box(600, 200), 10, -20)
		w.wJ(w.bal(700, 200), w.box(700, 200), 10, -30)
		w.wJ(w.bal(800, 200), w.box(800, 200), -10, -40)
		w.wJ(w.bal(900, 200), w.box(900, 200), -10, -50)
		w.wJ(w.bal(100, 500), w.box(100, 500), 0, 0)
		w.wJ(w.bal(200, 500, 10), w.box(200, 500), 0, 10) //
		w.wJ(w.bal(300, 500), w.box(300, 500), 0, -10)
		w.wJ(w.bal(400, 500), w.box(400, 500), 10, 10)
		w.wJ(w.bal(500, 500), w.box(500, 500), 10, -10)
		w.wJ(w.bal(600, 500), w.box(600, 500), 10, -20)
		w.wJ(w.bal(700, 500), w.box(700, 500), 10, -30)
		w.wJ(w.bal(800, 500), w.box(800, 500), -10, -40)
		w.wJ(w.bal(900, 500), w.box(900, 500), -10, -50)
	}
	baBa = function (x, y, x1, y1, e, f) {
		w.wJ(w.bal(x, y), w.bal(x1, y1), e, f)
	}
	baBi = function (x, y, x1, y1, e, f) {
		w.wJ(w.bal(x, y), w.box(x1, y1), e, f)
	}
	baBas = function () {
		_.e(arguments, function (bB) {
			baBa.apply(null, bB)
		})
	}
}
b2d.weld = function (a, b, ancA, ancB, ang, c, d) {
	
	// can set 2 local anchor points and a reference angle
	var jd = new b2d.Joints.b2WeldJointDef()
	jd.bodyA = a
	jd.bodyB = b
	if (N(ancA)) {
		ancA = V(ancA, ancB)
		ancB = V(ang, c)
		ang = d
	}
	if (ancA) {
		jd.localAnchorA = ancA.div()
	}
	if (ancB) {
		jd.localAnchorB = ancB.div()
	}
	if (N(ang)) {
		jd.referenceAngle = Math.toRadians(ang)
	}
	return jd
}
WELDS = function () {
	W()
	w.weld(
			w.S(100, 100, 'r', 30),
			w.D(100, 100, 'b', 30),
			0, 0)
	w.weld(w.S(200, 100, 'x', 30), w.D(200, 100, 'v', 30), 0, 10)
	w.weld(w.S(300, 100, 'l', 30), w.D(300, 100, 'x', 30), 0, -10)
	w.weld(w.S(400, 100, 'g', 30), w.D(400, 100, 'x', 30), 10, 10)
	/*
	 w.J(weld(w.S(500,100,'x',30), w.D(500,100,'v',30),10,-10))
	 w.J(weld(w.S(600,100,'x',30), w.D(600,100,'v',30),10,-20))
	 w.J(weld(w.S(700,100,'x',30), w.D(700,100,'v',30),10,-30))
	 w.J(weld(w.S(800,100,'x',30), w.D(800,100,'v',30),-10,-40))
	 w.J(weld(w.S(900,100,'x',30), w.D(900,100,'v',30),-10,-50))
	
	 w.J(weld(w.S(100,200,'x',30), w.S(100,200,'v',30),0,0)) //
	 w.J(weld(w.S(200,200,'x',30), w.S(200,200,'v',30),0,10))
	 w.J(weld(w.S(300,200,'x',30), w.S(300,200,'v',30),0,-10))
	 w.J(weld(w.S(400,200,'x',30), w.S(400,200,'v',30),10,10))
	 w.J(weld(w.S(500,200,'x',30), w.S(500,200,'v',30),10,-10))
	 w.J(weld(w.S(600,200,'x',30), w.S(600,200,'v',30),10,-20))
	 w.J(weld(w.S(700,200,'x',30), w.S(700,200,'v',30),10,-30))
	 w.J(weld(w.S(800,200,'x',30), w.S(800,200,'v',30),-10,-40))
	 w.J(weld(w.S(900,200,'x',30), w.S(900,200,'v',30),-10,-50))
	
	 w.J(weld(w.D(100,500,'x',30), w.S(100,500,'v',30),0,0))
	
	 w.weld( w.D(200,500,'x',30), w.S(200,500,'v',30) ) //
	
	
	 w.weld(
	 w.D(300,500, 'o', 30),
	 w.D(300,500,'g', 50,50),
	
	 V(0,-10)
	 )
	
	 w.weld(w.D(400,500,'x',30), w.S(400,500,'v',30), V(10,10))
	 w.weld(w.D(500,500,'x',30), w.S(500,500,'v',30),V(10,-10))
	 w.weld(w.D(600,500,'x',30), w.S(600,500,'v',30),10,-20)
	 w.weld(w.D(700,500,'x',30), w.S(700,500,'v',30),10,-30)
	 w.weld(w.D(800,500,'x',30), w.S(800,500,'v',30),-10,-40)
	 w.weld(w.D(900,500,'x',30), w.S(900,500,'v',30),-10,-50)
	 */
}
REWELDING = function () {
	W().C('p')
	j = w.weld(
			w.B(100, 200, 'x', 100, 200).rest(1),
			w.B(200, 100, 'u', 200, 100).rest(1)
	)
	I(2, function () {
		if (j.destroyed) {
			j = j.form()
		}
		else {
			j.destroy()
		}
	})
}
GLUEBALLS = function () {
	w = W(0).Y(500)
	w.glueBall = function (x, y) {
		var w = this
		var bl = w.B(x, y, 'z', 20).K('bl')
		w.beg(function (cx) {
			cx.with('bl', function (othF) {
				var bl = this.B()
				if (!bl.GetJointList()) {
					bl.glue(othF.B())
				}
			})
		})
		return bl
	}
	bl = w.glueBall(400, 500)
	w.glueBall(300, 500)
	w.glueBall(400, 300)
	w.glueBall(300, 100)
	w.glueBall(400, 200)
	w.glueBall(100, 300)
	w.glueBall(300, 300)
}
LUMPS = function () {
	W(0).Y()
	y.coll(w.left, function () {
		var yx = y.X(), yy = y.Y()
		T(function () {
			w.S(yx, yy, 'b', 10)
		})
	})
}

