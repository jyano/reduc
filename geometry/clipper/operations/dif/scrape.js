w.polD = function (x, y, p1, p2) {
	var w = this
	return w.pol(x, y, M.p(p1).D(p2))
}
f.dif = function () {
	var f = this, b = f.B(), g = G(arguments), p
//f.dif does the math and returns the answer (vs)
	p = M.p(f)
	g.e(function (g) {
		if (b2d.iB(g)) {
			g.fs(function (f) {
				p = p.D(f)
			})
		}
		else {
			p = p.D(g)
		}
	})
	if (!b2d.hV(p)) {
		$l('!hV(p)')
		return
	}
	p = p.reg(f)
	if (g.n) {
		p = p.reg(f.B())
	}
	return p
}
f.sub = function () {
	var f = this, b = f.B(), g = G(arguments),
			p
//f.sub uses f.dif and replaces itself on a body
// with its (potentially) 'slimmer' self
	p = f.dif(g[0], '-') //vs is f minus something
	if (p && !M.p(p).hH()) {
		f.kill() //then f goes away
		if (M.p(p).getArea() < 2000) {
			return
		}
		b.pol(p)//the body makes a new f, from the the vs
	}
	if (g.n) {
		g[0].kill()
	}
	if (g.p) {
		g[0].dyn()
	} //can optionally delete the 'something'
	return f
}
b.dif = function (o) {
	var b = this, g = G(arguments),
			f = b.f(), fs = b.fs(), p
	if (b.n() == 1) {
		return b.f().dif(o, '-')
	}
	p = DIF(b, o).reg(b)
	if (g.n) {
		if (b2d.iB(o) || b2d.iF(o)) {
			o.kill()
		}
		else {
			b.kill()
		}
	}
	return p
}
f.sub = function (f1) {
	var f = this, b = f.B(), g = G(arguments)
	var pD = f.dif(f1, '-')   //   kill THIS f
	if (g.n) {
		f1.kill()
	}
	if (g.p) {
		f1.dyn()
	}
	if (pD.bigEnough() || g.m) {
		b.pol(pD)
	}
	return f
}
b.subF = function (f1, x, y) {
	var b = this
	var v = V(x, y)
	b.fs(function (f) {
		f.sub($pol(f1, v))
	})
	return b
}
b.subB = function (b1) {
	return this.fs(function (f) {
		b1.sub(f)
	})
}
b.sub1 = function (pD) {
	var b = this, g = G(arguments)
	if (b2d.iF(pD)) {
		b.subF(pD)
	}
	else if (b2d.iB(pD)) {
		b.subB(pD)
	}
	if (g.n) {
		pD.kill()
	}
	return b
}
b.sub = function () {
	var b = this, g = G(arguments)
	g.e(function (pD) {
		b.sub1(pD, g.o)
	})
	if (g.f !== 0) {
		//	b.C(g.f || b.c())
	}
	return b
}
w.polD = function (x, y, p1, p2) {
	return this.pol(x, y, M.p(p1).D(p2))
}
b.sub = function () {
	var b = this, gg = G(arguments), c = b.c()
	gg.e(function (g) {
		if (b2d.iF(g)) {
			b.fs(function (f) {
				f.sub(g)
			})
			if (gg.n) {
				g.kill()
			}
		}
		else if (b2d.iB(g)) {
			g.fs(function (f) {
				b.sub(f)
			})
			if (gg.n) {
				g.kill()
			}
		}
	})
	b.C(b.c())
	return b
}
f.dif = function () {
	var f = this, g = G(arguments)
	var pD = f.tGP()
	g.e(function (v) {
		pD = pD.D(v)
	})
	pD = pD.tlNeg(f.B())
	if (g.n) {
		f.kill()
	}
	return pD.ifHasPol()
	function docs() {
		//f.dif does the math and returns the answer (vs)
//returns pD with array of pS's ( pD.m_List )
//you can pass in the verts, 
// or the gPoly itself! //what about a fxt?
	}
}
b.dif = b.without = function (o) {
	var b = this, g = G(arguments)
	var f = b.f(), fs = b.fs()
	if (b.count() == 1) {
		return b.f().dif(o, '-')
	}
	if (g.n) {
		if (b2d.iB(o) || b2d.iF(o)) {
			o.kill()
		}
		else {
			b.kill()
		}
	}
	return $DIF(b, o).tlNeg(b)
}
//
b.dff = function (b2) {
	var b = this
	var p = Math.poly(b.V())
	return p.difference(Math.poly(b2.V()))
}
 
b.DIF = function (b2) {
	var g = G(arguments),
			b2 = g[0]
	this.eachFixt(function (f) {
		f.DIFF(b2)
	})
	if (g.n) {
		b2.kill()
	}
	return this
}
 
b.union = function () {
	var num = this.num(),
			fs = this.fixts()
	if (num == 0) {
		return
	}
	if (num == 1) {
		return fs[0].polyVerts()
	}
	return fs[0].union(_.rest(fs))
}
b.minus = function (fOrB) {
	return this.rel(
			this.polyVerts().difference(fOrB.polyVerts())
	)
}
 
b.subtract = function (a) {
	var g = G(arguments), a = g[0]
	_.each(this.fixts(),
			function (f) {
				f.sub(a)
			})
	if (g.n) {
		a.kill()
	}
	return this
}
b.rel = function (gPoly) {
	var b = this
	//my poly operations can only work with POSITIVE vertices
	//but box2d needs fixt vertices specified relative to a body
	//so this allows the body that the operation was based on to take responsibility
	//for converting them back
	//you can pass in the verts, or the gPoly itself!
	var verts = b2d.isGPoly(gPoly) ? gPoly.verts() : gPoly
	return _.map(verts,
			function (v) {
				return V(v[0] - b.X(), v[1] - b.Y())
			})
}
b2d.ptsMinus = b2d.vertsMinus = b2d.sub = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).sub(p)
	})
}
b.gPolWithout = b.gPolWo = function (pD) {
	this.fs(function (f) {
		pD = pD.D(f)
	})
	return pD
	function doc() {
		// =b.cutPol = b.difFromPol = b.difPol = b.subMe = b.scrapeMeWithPol = b.pDWo
	}
}
f.dif = function () {
	var f = this, b = f.B(), g = G(arguments)
	var pD = f.GP()
	g.e(function (ob) {
		pD = bx.iB(ob) ? ob.gPolWithout(pD) :
				pD.D(ob)})
	if (!pD.hasAtLeastOnePoly()) {
		alert('f.dif (scrape.js?)')}
	var toBeRegged= g.n ? b : f
	return pD.reg(f).reg(toBeRegged)
	if(g.n){
		_.in(function(){
			f.kill()
		})
	}
	function doc() {
		//can take a body.. or a poly
		//   what about fixts? answer: p.D can consume a fixt
	}
}
f.difKill = function (difWhat) {
	var f = this, g = G(arguments)
	var difdFxt = f.dif(difWhat) //vs is f minus something
	_.in(function () {
		f.kill()
		//then f goes away
	})
	return difdFxt
}
f.scrapeWith = f.sub = function () {var f = this, b = f.B(), g = G(arguments)
	var difdFxt = f.difKill(g.f)
	function bigEnough(f) {
		//otionally put a min size to allow it to be replaced
		//i guess if it's too small, don't bother
		//but calculating area could also be bottleneck?
		return M.p(f).getArea() > 2000
	}
	if (!bigEnough(difdFxt)) {
		return
	}
	b.pol(difdFxt)
	if (g.n) {
		//now that other thing that we subtracted from our fixt before it was killed and replaced..
		//..letst talk about that thing
		//we can optionally kill that thing too!!
		//it may have been a real manufactured body or fixt
		//... though there should be a better way than that!!! !!!! :=)(+
		what.kill()
	}
	if (g.p) {//and  aparently we can also optionally dynamize it!
		what.dyn()
	}
	return f
	//f.sub uses f.dif and replaces itself on a body
	// with its (potentially) 'slimmer' self
	//lets begin:
	// we get the dif of the this and the thing we are subtracting from it...
	// then we kill THIS fixt
	//here, body makes a new f from the dif (hence, it might be slimmer)
	//again... it is fixtizing the result of the gPol subtraction operation
	// it subtracted something from this... killed itself..
	// .. and now is adding a NEW fixture to replace itself..
	//but the new fixture is the difference result of subtracting something else, from it
	//so after that subtraction, it killed itself, and and now 
	// we are replacing the body that held that fixt, replaces it with the resutl
	// of the difference between it and another fixt
}
b.without = b.dif = function (o) {
	var b = this, g = G(arguments),
			f = b.f(), fs = b.fs(), p
	if (b.n() == 1) {
		return b.f().dif(o, '-')
	}
	p = $dif(b, o).reg(b)
	if (g.n) {
		if (b2d.iB(o) || b2d.iF(o)) {
			o.kill()
		}
		else {
			b.kill()
		}
	}
	return p
}
b.scrapeWith = b.subFrom = function (fromWhat) {

var b=this

	b.fs(function (f) {
		fromWhat.sub(f)
	})
	
	
	return b
}
b.scrapeWithFxt = b.subFxt = b.subF = b._sub = function (f) {
	var b = this
	b.fs(function (fxt) {
		fxt.sub(f)
	})
	return b
}
b.scrapeWithBod = b.subBod = b.subB = function (b) {
	return this.subFrom(bod)
}
b.scrape = b.sub = function () {

/// hhi im here ///////////////////////////////////////////////////////
	var b = this, g = G(arguments), col = g.f
	g.e(function (ob) {
		b2d.iF(ob) ? b.subF(ob) : b2d.iB(ob) ? b.subB(ob) : null
		if (g.n) {
			ob.kill()
		}
	})
	if (col !== 0) {
		b.C(col || b.c())
	}
	return b
}
f.scrapeBodWith = f.subFromBod = function (bod) {
	bod.fs(function (f) {
		f.sub(bod)
	})
}
 
w.destructableBricks = w.ter = function () {
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
					V(i * 25 + 430, j * 25 + 210)
				])
			})
		})
	})
	return ter
}
f.scrapeBodWith = f.subFromBod = function (b) {
	b.fs(function (f) {
		f.sub(b)
	})
}
DF8 = function () {
	W({w: 0})
	y = w.S(500, 100, 'y', [[100, 100], [100, 100, 0, 0, 45]]).rt(20)
	ggg = w.S(550, 150, 'g', [[100, 100], [100, 100, 0, 0, 45]])
	y1 = w.S(700, 100, 'y', [[100, 100], [100, 100, 0, 0, 45]]).rt(20)
	g1 = w.S(750, 150, 'g', [[100, 100], [100, 100, 0, 0, 45]])
	w.md1 = w.mouseDownOnce = function (fn) {
		return this.md(function (a, b, c) {
			if (self.used) {
				return
			}
			fn(a, b, c)
			self.used = 1
		})
	}
	w.md1(function () {
		ggg.subB(y.killXY())
		ggg.dyn()
		y1.sub(g1)
		y1.dyn()
	})
}
DF1 = function () {
	W()
	var white = w.S(700, 400, 'w', 100, 100),
			red = w.S(700, 400),
			f = red.pol({
				c: 'r', o: .2,
				v: [[-100, 10], [-80, -40], [0, -200], [100, -60]]
			}),
			yellow = w.S(930, 300, 'y', [[100, 100], [100, 100, 0, 0, 45]]),
			green = w.S(1030, 400, 'g', 200, 200)
	w.md(function () {
		white.sub(red, '-')
		red.dyn()
		green.sub(yellow, '-').dyn().lV(-60, -10)
	})
	recV = function () {
		w.pol(400, 300,
				w.S(200, 350, 'b',
						[-80, 10], [0, -150],
						[100, 100]).dif(
						b2d.recV(280, 420, 100, 100)))
	};
	//recV()
}
SUB = function () {
	W(20).Y();
	y.rot(90).XY(20, 50)
	face = w.S(300, 400, 'b', 100, 100)
	hat = w.S(300, 400, 'w', [
		[[-100, 10], [-80, -40], [0, -200], [100, 0]],
		[20, 50]
	])
	redRec = w.S(900, 350, 'r', 200, 100)
	blueBody = w.S(1000, 300)
	fixt1 = blueBody.rec({c: 'b', w: 100, h: 100})
	fixt2 = blueBody.rec({c: 'b', w: 100, h: 100, x: 30, y: 30})
	_.in(2, function () {
		face.f().sub(hat, '-')
		redRec.f().sub(blueBody, '-')
		redRec.C('r')
	})
	a = w.S(140, 140, 100, 100).rot(20)
	b = w.S(100, 100, 100, 100).rot(45)
	d = w.S(650, 420, 'b', 100, 100)
	b9 = w.S(610, 380, [
		['b', 40, 70, 20, -20],
		['o', 40, 70, -20, 20, '-']
	]).rot(-20)
	fs = b9.fs()
	_.in(3, function () {
		w.S(720, 400).pol(d.sub(b9, '-'))
	})
	//does not keep color!
	c = w.S(450, 300, 'w', 100, 100)
	c.minusPolyCirc(550, 300, 100, 20)
}
SENSUB = function () {
	W(0).Y()
	r = w.D(600, 350, 'r', 400, 200).grp(-1)
	b = w.D(1000, 300, [['b', 100, 100],
		['b', 100, 100, 30, 30]]).grp(-1)
	w.$$(function () {
		r.fs(function (f) {
			f.sub(b)
		})
		r.grp(-1)
		b.kill()
		r.C('r')
		b = w.D(1000, 300, [['b', 100, 100],
			['b', 100, 100, 30, 30]]).grp(-1)
	})
}


SUBCOL = function () {
	W(0)
	/*
	 b=w.S(300,300,'b',300,200).c('b')
	
	 r=w.S(200,400,'r',300,200).c('r')
	
	 y=w.S(240,200,'y',200,300,0,0,100).c('y')
	
	
	 _.in(function(){
	
	 y.sub(b)//.C( y.c() )
	
	 b.kill()
	
	 //b.sub(b1,'-').C('b')
	 })
	 */
	fn = function () {
		var b, p, b1
		b = w.D(900, 200, [
			['p', 200, 100], ['b', 100, 200]])
		b1 = w.D(900, 400)
		$DIF(b.fs(1), b.fs(0)).ps(b, function (p) {
			b1.pol(p)
		})
	};
	fn()
}
DFFF = function () {
	W(10)
	w.S(900, 450, 'r', 250, 200).f().sub(w.D(850, 460, 'w', 200, 100, 0, 0, -20).f())
	b = w.S(1100, 100, 'r', 100, 100)
	b1 = w.S(1050, 120, 'b', 100, 40)
	w.$$(function () {
		w.D(500, 100).pol('r',
				b.f().dif(b1.f(), '-')
		)
		b.kill()
		b1.kill()
	})
	fn = function () {
		var b = w.S(100, 100, 'r', 100, 100),
				b1 = w.S(130, 100, 'b', 100, 80)
		_.in(function () {
			b.sub(b1, '-')
		})
	}//;fn()
	fn = function () {
		var b = w.S(300, 100, 'r', 100, 100),
				b1 = w.S(330, 100, 'b', 100, 80)
		w.$$(function () {
			w.D(300, 200).pol(b.f().dif(b1, '-'))
		})
	};//fn()
	fn = function () {
		var b, o, p
		b = w.S(200, 400, 'b', [-80, -40], [0, -200], [100, 50])
		o = w.S(280, 420, 'o', 100, 100)
		p = b.dif(o)
		w.D(300, 300).pol(p)
		w.dot(300, 300)
	}//;fn()
	fn = function () {
		white = w.S(700, 400, 'w', 100, 100)
		red = w.S(700, 400)
		f = red.pol({
			c: 'r',
			v: [[-100, 10], [-80, -40],
				[0, -200], [100, -60]]
		})
		yellow = w.S(930, 300, 'y', [
			[100, 100],
			[100, 100, 0, 0, 45]])
		yel = yellow.pD().reg(yellow)
		green = w.S(1030, 400, 'g', 200, 200)
		w.md1(function () {
			red.sub(white, '-').dyn().lV(-60, -10)
			yellow.sub(green).dyn().lV(-60, -10)
			w.$(function () {
				yellow.lV(-60, -10)
			})
			_.in(2, function () {
				green.sub(w.S(930, 300).pol(yel))
			})
		})
	};//fn()
}
SUB = function () {
	W(20).Y();
	y.rot(90).XY(20, 50)
	face = w.S(300, 400, 'b', 100, 100)
	hat = w.S(300, 400, 'w', [
		[[-100, 10], [-80, -40], [0, -200], [100, 0]],
		[20, 50]
	])
	redRec = w.S(900, 350, 'r', 200, 100)
	blueBody = w.S(1000, 300)
	fixt1 = blueBody.rec({c: 'b', w: 100, h: 100})
	fixt2 = blueBody.rec({c: 'b', w: 100, h: 100, x: 30, y: 30})
	_.in(2, function () {
		face.f().sub(hat, '-')
		redRec.f().sub(blueBody, '-')
		redRec.C('r')
	})
	a = w.S(140, 140, 100, 100).rot(20)
	b = w.S(100, 100, 100, 100).rot(45)
	d = w.S(650, 420, 'b', 100, 100)
	b9 = w.S(610, 380, [
		['b', 40, 70, 20, -20],
		['o', 40, 70, -20, 20, '-']
	]).rot(-20)
	fs = b9.fs()
	_.in(3, function () {
		w.S(720, 400).pol(d.sub(b9, '-'))
	})
	//does not keep color!
	c = w.S(450, 300, 'w', 100, 100)
	c.minusPolyCirc(550, 300, 100, 20)
}
SENSUB = function () {
	W(0).Y()
	r = w.D(600, 350, 'r', 400, 200).grp(-1)
	b = w.D(1000, 300, [['b', 100, 100], ['b', 100, 100, 30, 30]]).grp(-1)
	w.$$(function () {
		r.fs(function (f) {
			f.sub(b)
		})
		r.grp(-1)
		b.kill()
		r.C('r')
		b = w.D(1000, 300, [['b', 100, 100], ['b', 100, 100, 30, 30]]).grp(-1)
	})
}
SUBCOL = function () {
	W(0)
	/*
	 b=w.S(300,300,'b',300,200).c('b')
	
	 r=w.S(200,400,'r',300,200).c('r')
	
	 y=w.S(240,200,'y',200,300,0,0,100).c('y')
	
	
	 _.in(function(){
	
	 y.sub(b)//.C( y.c() )
	
	 b.kill()
	
	 //b.sub(b1,'-').C('b')
	 })
	 */
	fn = function () {
		var b, p, b1
		b = w.D(900, 200, [
			['p', 200, 100], ['b', 100, 200]])
		b1 = w.D(900, 400)
		DIF(b.fs(1), b.fs(0)).ps(b, function (p) {
			b1.pol(p)
		})
	};
	fn()
}
DFF = function () {
	W(10)
	w.S(900, 450, 'r', 250, 200).f().sub(w.D(850, 460, 'w', 200, 100, 0, 0, -20).f())
	b = w.S(1100, 100, 'r', 100, 100)
	b1 = w.S(1050, 120, 'b', 100, 40)
	w.$$(function () {
		w.D(500, 100).pol('r',
				b.f().dif(b1.f(), '-')
		)
		b.kill()
		b1.kill()
	})
	fn = function () {
		var b = w.S(100, 100, 'r', 100, 100),
				b1 = w.S(130, 100, 'b', 100, 80)
		_.in(function () {
			b.sub(b1, '-')
		})
	}//;fn()
	fn = function () {
		var b = w.S(300, 100, 'r', 100, 100),
				b1 = w.S(330, 100, 'b', 100, 80)
		w.$$(function () {
			w.D(300, 200).pol(b.f().dif(b1, '-'))
		})
	};//fn()
	fn = function () {
		var b, o, p
		b = w.S(200, 400, 'b', [-80, -40], [0, -200], [100, 50])
		o = w.S(280, 420, 'o', 100, 100)
		p = b.dif(o)
		w.D(300, 300).pol(p)
		w.dot(300, 300)
	}//;fn()
	fn = function () {
		white = w.S(700, 400, 'w', 100, 100)
		red = w.S(700, 400)
		f = red.pol({
			c: 'r',
			v: [[-100, 10], [-80, -40],
				[0, -200], [100, -60]]
		})
		yellow = w.S(930, 300, 'y', [
			[100, 100],
			[100, 100, 0, 0, 45]])
		yel = yellow.pD().reg(yellow)
		green = w.S(1030, 400, 'g', 200, 200)
		w.md1(function () {
			red.sub(white, '-').dyn().lV(-60, -10)
			yellow.sub(green).dyn().lV(-60, -10)
			w.$(function () {
				yellow.lV(-60, -10)
			})
			_.in(2, function () {
				green.sub(w.S(930, 300).pol(yel))
			})
		})
	};//fn()
}
MOREDFF = function () {
	W()
	fn = function () {
		var white = w.S(700, 400, 'w', 100, 100),
				red = w.S(700, 400),
				f = red.pol({
					c: 'r', o: .2,
					v: [[-100, 10], [-80, -40], [0, -200], [100, -60]]
				}),
				yellow = w.S(930, 300, 'y', [[100, 100], [100, 100, 0, 0, 45]]),
				green = w.S(1030, 400, 'g', 200, 200)
		w.md(function () {
			white.sub(red, '-')
			red.dyn()
			green.sub(yellow, '-').dyn().lV(-60, -10)
		})
	};
	fn()
	recV = function () {
		w.pol(400, 300,
				w.S(200, 350, 'b',
						[-80, 10], [0, -150],
						[100, 100]).dif(
						b2d.recV(280, 420, 100, 100)))
	};
	recV()
	y = w.S(500, 100, 'y', [[100, 100], [100, 100, 0, 0, 45]]).rot(20)
	g = w.S(550, 150, 'g', [[100, 100], [100, 100, 0, 0, 45]])
	y1 = w.S(700, 100, 'y', [[100, 100], [100, 100, 0, 0, 45]]).rot(20)
	g1 = w.S(750, 150, 'g', [[100, 100], [100, 100, 0, 0, 45]])
	w.md1(function () {
		g.sub(y).dyn()
		y1.sub(g1).dyn()
	})
} 
REDUCE = function () {
	w = b2d.W()
	b = w.dyn(300, 400).stat()
	f = b.poly(100, 200)
	f1 = b.poly(200, 100, 100, 0)
	f2 = b.poly(200, 100, 100, 0, 36)
	f3 = b.poly(20, 20, 200, 0)
	// u =  f.union( [f1,f2] )
	u = b.union()
	b2 = w.stat(600, 300).conc(u).dyn()
	// body.polyVerts() does an automatic union of ALL its verts! i think :)
}
 