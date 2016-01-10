DES = function () {
	W(0)
	b = w.S(300, 300, 'b', 300, 200).c('b')
	r = w.S(200, 400, 'r', 300, 200).c('r')
	y = w.S(240, 200, 'y', 200, 300, 0, 0, 100).c('y')
	cB = circ = w.D(700, 200)
	cF = circ.pC(50, 10).C('o')
	u1 = cB.uni()
	u = _.m(u1.vs(), function (v) {
		v = V(v)
		return [v.x + cB.X(), v.y + cB.Y()]
	})
	w.pol(600, 300, [u]).C('y')
	_.in(function () {
		b.sub(y, '-');
		//b.f().C('r').kill()
	})
	return
	_.in(function () {
		newBod = w.D(600, 100)
		r.ps(function (v) {
			newBod.pol('d', v)
		})
	})
	f = b.f()
	p = $DIF(f, r.f())
	p.ps(b, function (p) {
		b.pol(p)
	})
	f.kill()
	r.kill()
	circ.dyn().sub(rect)
	rect.sub(u)
	rect.dyn()
	pC.dyn()
}
MEETMORE = function () {
	b.explosion = b.exp = function () {//alert('b.exp is random!')
		var b = this, xy
		xy = b.pos()
		b.kill()
//	return R() ? b2d.sep(b2d.pC(20, 7)).XY(xy) : w.D(xy.x, xy.y).rec( 60, 60).rot(45)
		return w.D(xy.x, xy.y).rec(60, 60).rot(45)
	}
	W()
	y2 = w.y(400, 300).C('x').rot(180)
	w.S(200, 300, 'b', 200, 800).cl('bul', function (bulletFxt) {
		var bulletBody = bulletFxt.B(),
				bulPos = bulletBody.pos(),
				bulX = bulPos.x,
				bulY = bulPos.y
		bulletBody.kill()
		gPol = gpc.p([[0, 50], [-50, 0], [0, -50], [50, 0]])
		var pol = w.S(bulX, bulY),
				polFxt = pol.pol(gPol)
	})
	w.S(800, 300, 'r', 200, 800).cl('bul', function (bu) {
		this.sub(bu.B().exp(), '-')
	})
}
TERREASEL = TEE = function () {
	z()
	s = stage = $St(1600, 600).A()
	h = s.h()
	h.f('b').dc(200, 200, 10)
	h2 = s.h().X(700)
	h2.f('b').dc(0, 0, 10)
	tile = function (i, j) {
		return [V(-5 + i, 130 + j), V(-5 + i, 80 + j), V(45 + i, 80 + j), V(45 + i, 130 + j)]
	}   // lower left //upper left//upper right//lower right
	draw = function () {
		terr = []
		_.t(13, function (i) {
			_.t(8, function (j) {
				terr.push(tile(i * 50, j * 50))
			})
		})
		h.drawPolygons(terr, 'b', 'r')
	}
	draw()
	t = M.p(terr[101])
	doExplosion = function (e) {
		v = V(e.stageX, e.stageY)
		exP = circ(v, 100)
		h.drawPolygon(exP, 'z')
		c = Math.p(exP) // for each existing terrain polygon, check the difference between the polygon itself and the
		// explosion polygon. This should be optimized in some way, checking only for terrain polygons
		// which are actually affected by the explosion.
		// Then we remove the terrain polygon from the array, and we add the resulting polygon(s) after
		// difference is calculated.
		iX = c.intersection(t)
		h2.drawPolygon(iX.verts())
		for (var i = terr.length - 1; i >= 0; i--) {
			totalArea = 0
		}
	} // resultPolygons =   terr[i].intersection(exP)// terr.splice(i,1)// for (var j =0; j<resultPolygons.length; j++) {terr.push(resultPolygons[j])}
	circ = function (v, rad, prec) {
		prec = N(prec) ? prec : 20
		arr = [];
		ang = 2 * Math.PI / prec
		_.times(prec, function (i) {
			pX = v.x + rad * Math.cos(ang * i)
			pY = v.y + rad * Math.sin(ang * i)
			arr.push(V(pX, pY))
		})
		return arr
	} // listeners: basically we destroy the terrain with a mouse click or a mouse drag
	// stage.on('mousedown', function(){stage.on('mousemove', doExplosion)})
	// stage.on('mouseup', function(){stage.off('mousemove', doExplosion)})
	stage.on('click', doExplosion)
	vv = [V(645, 480), V(595, 480), V(595, 430), V(645, 430)] //lower right//lower left//upper left//upper right
	h.drawPolygon(vv, 'z')
	vvv = [V(645, 380), V(595, 380), V(595, 372), V(617, 369), V(645, 373)]
	h.drawPolygon(vvv, 'z')
}
TER = function () {
	W().C('z')
	terr = w.ter()
	w.dot(420, 200);
	w.dot(410, 210)
	t = terr[103]
	fn = function (f) {
		f.B().kill()
	}
	o = {x1: 550, y1: 250, x2: 600, y2: 500, fn: fn}
	// w.Q(o)
	w.rad(550, 250, 35, fn)
}
DES = function () {
	W(0)
	b = w.S(300, 300, 'b', 300, 200).c('b')
	r = w.S(200, 400, 'r', 300, 200).c('r')
	y = w.S(240, 200, 'y', 200, 300, 0, 0, 100).c('y')
	cB = circ = w.D(700, 200)
	cF = circ.pC(50, 10).C('o')
	u1 = cB.uni()
	u = _.m(u1.vs(), function (v) {
		v = V(v)
		return [v.x + cB.X(), v.y + cB.Y()]
	})
	w.pol(600, 300, [u]).C('y')
	_.in(function () {
		b.sub(y, '-');
		b.f().C('r').kill()
	})
	_.in(function () {
		newBod = w.D(600, 100)
		r.ps(function (v) {
			newBod.pol('d', v)
		})
	})
	f = b.f()
	p = DIF(f, r.f())
	p.ps(b, function (p) {
		b.pol(p)
	})
	f.kill()
	r.kill()
	circ.dyn().sub(rect)
	rect.sub(u)
	rect.dyn()
	pC.dyn()
}
MEETMORE = function () {
	W()
	y2 = w.y(400, 300).C('x').rot(180)
	w.S(200, 300, 'b', 200, 800).cl('bul', function (bulletFxt) {
		var bulletBody = bulletFxt.B(),
				bulPos = bulletBody.pos(),
				bulX = bulPos.x,
				bulY = bulPos.y
		bulletBody.kill()
		gPol = gpc.p([[0, 50], [-50, 0], [0, -50], [50, 0]])
		var pol = w.S(bulX, bulY),
				polFxt = pol.pol(gPol)
	})
	w.S(800, 300, 'r', 200, 800).cl('bul', function (bu) {
		this.sub(bu.B().exp(), '-')
	})
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
TERREASEL = function () {
	z()
	s = stage = $St(1600, 600).A()
	h = s.h()
	h.f('b').dc(200, 200, 10)
	h2 = s.h().X(700)
	h2.f('b').dc(0, 0, 10)
	tile = function (i, j) {
		return [V(-5 + i, 130 + j), V(-5 + i, 80 + j), V(45 + i, 80 + j), V(45 + i, 130 + j)]
	}   // lower left //upper left//upper right//lower right
	draw = function () {
		terr = []
		_.t(13, function (i) {
			_.t(8, function (j) {
				terr.push(tile(i * 50, j * 50))
			})
		})
		h.drawPolygons(terr, 'b', 'r')
	}
	draw()
	t = M.p(terr[101])
	doExplosion = function (e) {
		v = V(e.stageX, e.stageY)
		exP = circ(v, 100)
		h.drawPolygon(exP, 'z')
		c = Math.p(exP) // for each existing terrain polygon, check the difference between the polygon itself and the
		// explosion polygon. This should be optimized in some way, checking only for terrain polygons
		// which are actually affected by the explosion.
		// Then we remove the terrain polygon from the array, and we add the resulting polygon(s) after
		// difference is calculated.
		iX = c.intersection(t)
		h2.drawPolygon(iX.verts())
		for (var i = terr.length - 1; i >= 0; i--) {
			totalArea = 0
		}
	} // resultPolygons =   terr[i].intersection(exP)// terr.splice(i,1)// for (var j =0; j<resultPolygons.length; j++) {terr.push(resultPolygons[j])}
	circ = function (v, rad, prec) {
		prec = N(prec) ? prec : 20
		arr = [];
		ang = 2 * Math.PI / prec
		_.times(prec, function (i) {
			pX = v.x + rad * Math.cos(ang * i)
			pY = v.y + rad * Math.sin(ang * i)
			arr.push(V(pX, pY))
		})
		return arr
	} // listeners: basically we destroy the terrain with a mouse click or a mouse drag
	// stage.on('mousedown', function(){stage.on('mousemove', doExplosion)})
	// stage.on('mouseup', function(){stage.off('mousemove', doExplosion)})
	stage.on('click', doExplosion)
	vv = [V(645, 480), V(595, 480), V(595, 430), V(645, 430)] //lower right//lower left//upper left//upper right
	h.drawPolygon(vv, 'z')
	vvv = [V(645, 380), V(595, 380), V(595, 372), V(617, 369), V(645, 373)]
	h.drawPolygon(vvv, 'z')
}
TERR = function () {
	W()
	explosion = function (x, y) {
		var c, b
		c = w.pC(x, y, 30, 5)
		b = b2d.sep(circ(V(0, 0), 30, 5)).XY(x, y)
		return {c: c, b: b}
	}
	sep = b2d.sep()
	terr = w.ter()
	w.dot(420, 200);
	w.dot(410, 210)
	t = terr[103]
	/*
	
	
	
	 s = b2d.sep(t.b.f().vs()).stat()//.XY(100,100)
	 exp = explosion(740, 395)
	 M.p(exp.cir)
	
	 dif = t.poly.D(exp.cir)
	
	 t.b.f().kill()
	
	
	 bb = b2d.sep(t.b, dif.vs()).stat().XY(0, 0)
	
	
	 // setTimeout( function(){ t.bod.X(20) }, 2000)
	
	 */
}
TER = function () {
	W().C('z')
	terr = w.ter()
	w.dot(420, 200);
	w.dot(410, 210)
	t = terr[103]
	fn = function (f) {
		f.B().kill()
	}
	o = {x1: 550, y1: 250, x2: 600, y2: 500, fn: fn}
	// w.Q(o)
	w.rad(550, 250, 35, fn)
}
DIMS = function () {
	W([600, 400, 1400, 400], {g: 10})
	y = w.y(100, 200).tr()
	//	w.i.dot(300, 400)
//	w.i.dot(300, 200)
//$l(t.cen())
	wd = w.i.W();
	$l('w.i.W() : ' + wd)
	ht = w.i.H();
	$l('w.i.H() : ' + ht)
}
WPOLS = function () {
	W(50).C('w')
	p1 = M.p(sqr)
	p2 = M.p(combo)
	w.polS([300, 300, p1], [300, 300, p2])
}
BPOL = function () {
	W()
	w.D(200, 400).pol(vs1)
	w.D(800, 400).pol($pD(vs1))
	w.D(800, 400).pol('o', $pD(vs1))
	w.D(500, 400).pol({vs: vs1, c: 'r'})
	w.D(800, 400).pol({vs: $pD(vs1), c: 'b'})
}
POL = function () {
	W(50).C('w')
	p1 = M.p(sqr)
	p2 = M.p(combo)
	w.D(300, 300).pol({v: p1.U(p2)})
	w.D(400, 300).pol({v: p1.D(p2)})
	w.D(500, 300).pol({v: p1.I(p2)})
	w.D(600, 300).pol({v: p1.X(p2)})
	w.pol(300, 300, p2)
	_.e([
				[500, 200, p1.U(p2)],
				[600, 200, p1.D(p2)],
				[700, 200, p1.I(p2)], [800, 200, p1.X(p2)]],
			function (args) {
				w.pol.apply(w, args)
			})
}
PDPS = function () {
	W(10).roof.kill()
	b = w.brick(300, 200, 30, 30)
	pD = b.pD()
	pD.polies(function (pD) {
		w.D(300, 400).pol(pD).tlNeg(b)
	})
}
TERREASEL = function () {
	z()
	s = stage = cjs.stg(1600, 600).A()
	h = s.shape()
	h.f('b').dc(200, 200, 10)
	h2 = s.shape().X(700)
	h2.f('b').dc(0, 0, 10)
	tile = function (i, j) {
		return [V(-5 + i, 130 + j), V(-5 + i, 80 + j), V(45 + i, 80 + j), V(45 + i, 130 + j)]
	}   // lower left //upper left//upper right//lower right
	draw = function () {
		terr = []
		_.times(13, function (i) {
			_.times(8, function (j) {
				terr.push(tile(i * 50, j * 50))
			})
		})
		h.drawPolygons(terr, 'b', 'r')
	};
	draw()
	t = Math.poly(terr[101])
	doExplosion = function (e) {
		v = V(e.stageX, e.stageY)
		exP = circ(v, 100)
		h.drawPolygon(exP, 'z')
		c = Math.poly(exP) // for each existing terrain polygon, check the difference between the polygon itself and the
		// explosion polygon. This should be optimized in some way, checking only for terrain polygons
		// which are actually affected by the explosion.
		// Then we remove the terrain polygon from the array, and we add the resulting polygon(s) after
		// difference is calculated.
		iX = c.intersection(t)
		h2.drawPolygon(iX.verts())
		for (var i = terr.length - 1; i >= 0; i--) {
			totalArea = 0
		}
	} // resultPolygons =   terr[i].intersection(exP)// terr.splice(i,1)// for (var j =0; j<resultPolygons.length; j++) {terr.push(resultPolygons[j])}
	circ = function (v, rad, prec) {
		prec = N(prec) ? prec : 20
		arr = [];
		ang = 2 * Math.PI / prec
		_.times(prec, function (i) {
			pX = v.x + rad * Math.cos(ang * i)
			pY = v.y + rad * Math.sin(ang * i)
			arr.push(V(pX, pY))
		})
		return arr
	} // listeners: basically we destroy the terrain with a mouse click or a mouse drag
	// stage.on('mousedown', function(){stage.on('mousemove', doExplosion)})
	// stage.on('mouseup', function(){stage.off('mousemove', doExplosion)})
	stage.on('click', doExplosion)
	vv = [V(645, 480), V(595, 480), V(595, 430), V(645, 430)] //lower right//lower left//upper left//upper right
	h.drawPolygon(vv, 'z')
	vvv = [V(645, 380), V(595, 380), V(595, 372), V(617, 369), V(645, 373)]
	h.drawPolygon(vvv, 'z')
}
TERR = function () {
	w = b2d.W()
	sep = b2d.separator()
	terr = []
	circ = function (v, rad, prec) {
		prec = N(prec) ? prec : 20
		arr = []
		ang = 2 * Math.PI / prec
		_.times(prec, function (i) {
			pX = v.x + rad * Math.cos(ang * i)
			pY = v.y + rad * Math.sin(ang * i)
			arr.push(V(pX, pY))
		})
		return arr
	}
	explosion = function (x, y) {
		var cir, bod
		cir = Math.poly(circ(V(x, y), 30, 5))
		bod = sep(circ(V(0, 0), 30, 5)).XY(x, y)
		return {cir: cir, bod: bod}
	}
	_.times(13, function (i) {
		_.times(8, function (j) {
			var bod = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
			terr.push({
				bod: bod,
				verts: bod.fixt().verts(),
				poly: Math.poly([
					V(i * 25 + 410, j * 25 + 210),
					V(i * 25 + 410, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 210)
				])
			})
		})
	})
	// w.dot(420,200); w.dot(410,210)
	t = terr[103]
	s = sep(
			t.bod.fixt().verts()
	).stat()//.XY(100,100)
	exp = explosion(740, 395)
	Math.poly(exp.cir)
	dif = t.poly.difference(exp.cir)
	t.bod.fixt().remove()
	bb = sep(t.bod, dif.verts()).stat().XY(0, 0)
	// setTimeout( function(){ t.bod.X(20) }, 2000)
}
//destructable terrain
DEST = function () {
	w = b2d.W({g: 1})
	y = w.ship().linDamp(10)
	b = w.brick(800, 300, 200, 800).K('terr')
	can = true
	w.s.X(5000)
	w.beg(function (cx) {
		var fixt
		if (fixt = cx.with('bul', 'terr')) {
			bull = fixt[0].B()
			terr = fixt[1].B()
			bX = bull.X()
			bY = bull.Y()
			bull.kill()
			if (can) {
				can = false
				setTimeout(function () {// br =  w.brick(bX,bY,60,60).rot(45)
					br = b2d.conc(
							b2d.polyCirc(20, 7)
					).XY(bX, bY)
					b.each(function (f) {
						f.DIFF(br)
					})
					br.kill()
					can = true
				}, 10)
				killIfSmall = function (f) {
					var area = this.area()
					if (area < 20) {
						$l('too small: ' + area)
						f.kill()
					}
				}
			}
		}
	})
	w.show(function () {
		return b.num()
	})
}