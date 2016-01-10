STUM = function () {
	W({g: 3})
	y = w.y(300, 400, 3, '-')
	_.ev(.1, function () {
		var v = y.vec(0, 1.5)
		v = V(
				M.tD(v.x),
				M.tD(v.y)
		)
		y.I(0, v.y / 5).rt(2, '+')
	})
	//arm
	b = w.S(300, 300, 20, 200)
	a = w.S(300, 300, [['b', 200, 50, 100, 0]])
	_.ev(.1, function () {
		a.rt(1, '+')
	})
}
b.tow = b.towards = function (x, y, sp) {
	$l('b.tow')
	var b = this, lV
	__sp = function (s) {
		s = N(s, 5)
		s = 11 - (  s > 10 ? 10 : s )
		s *= 20
		return s
	}
	sp = N(sp, 5)
	sp = 11 - (  sp > 10 ? 10 : sp )
	sp *= 20
	lV = V(x - b.X(), y - b.Y()).d(sp)
	return b.lV(lV)
	//if(isBody(x)){return self(x.X(), x.Y(), y)}
//move towards x,y (or body?)
	//more realistic to accelerate, via forces?
	//these just thrust and dont
//otherwise apply forces to neighbors.  but what if
//they 'SUCKED' instead of 'thrusted' ?
//is that the same as having a gravitational inwards force?
//  y = $ys(300, 200, 3).angDamp(0).linDamp(1)
}
b.rTow = function (y) {
	$l('b.rTow')
	var b = this,
			a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
	if (y.Y() > b.Y()) {
		a += 180
	}
	b.rt(a)
	return b
}
b.cn = function (cn, o) {
	var b = this, w = b.W()
	//stop a current 'controls', if any
	if (F(b._cn)) {
		w.s.off('tick', b._cn)
	}
	if (U(cn)) {
		return
	}
	if (S(cn)) {
		cn = b2d.cn[cn]
	}
	if (F(cn)) {
		b._cn = w.s.t(
				function () {
					cn(b, o)
				}
		)
	}
	return b
}
b2d.cn.thr = b2d.cn.thrust = b2d.cn.t = function (p, mult) {
	var vec
	mult = N(mult, 200)
	if ($.K.u) {
		vec = p.vec().m(mult)
		p.I(vec)
	}
	p.aV($.K.r ? 15 : $.K.l ? -15 : 0)
	//  $l('vec: '+ parseInt(vec.x) + ', '+ parseInt(vec.y))
}
function power() {
	$con.thrustGrav = function (p) {
		p.turnFlyImp(8, 20, 100)
				.impRun(5)
	}
	$con.thrust = function (p) {
		p.turnFlyImp(15, -.1, 100).nRt()
	}
	w.killTim = function () {
		this.b(function (cx) {
			var a = cx.a(), b = cx.b()   // if either a or b is a bullet..
			// and neither is the guy (if a bullet hits a non-guy...) 
			// destroy the bullet, and if it hit tim, destroy tim too
			if (cx.w('bul') && b2d.neither(a, b).is('guy')) {
				if (a.is('bul')) {
					a.setDestroy();
					b.setDestroyIf('tim')
				}
				else {
					b.setDestroy();
					a.setDestroyIf('tim')
				}
			}
		})
	}
	w.playerVsTim = function () {
		this.b(function (cx) {
			if (cx.btwn('player', 'tim')) {
				cx.setDestroyIf('player')
			}
			if (
					cx.exIn('player', 'bul')) {
				cx.setDestroyIf('tim', 'bul')
			}
		})
		return w
	}
	w.shipTri = w.yShip = function () {
		//can pass: col x,y,sc OR x,y,sc
		//this returns JUST a coloroed physics body with no actions
		var w = this, g = G(arguments), o
		o = S(g.f) ? {col: g.f, x: g.s, y: g.t, sc: g[3]} :
		{x: g.f, y: g.s, sc: g.t}
		o.col = o.col || 'y'
		var base = N(o.sc) ? o.sc * 8 : 32
		var hB = base / 2
		var y = this.D(o.x, o.y)
		y.poly([-hB, hB], [0, -base * 2], [hB, hB])
		//y.POLY(o.col, [[-hB, hB], [0, -base * 2], [hB, hB]])
		return y.de(.5)
	}
	SHIPSPRITE = SSP = function () {
		w._ship = function (x, y, z, col) {
			z = N(z, 8)
			col = col || 'b'
			var bird = w.D(x, y).makeBul()
			var pol = [[-z, z], [0, -z * 4], [z, z]]
			bird.pol(col, pol)
			return bird
		}
		G.ship = function (g) {
			var o = g.O ? g.f :  //pass opOb
				//pass {c='y'}, x=100, y=100, sc=4
					g.S_ ? {c: g.f, x: g.s, y: g.t, sc: g[3]} :
					{x: g.f, y: g.s, sc: g.t}
			o.c = o.c || 'y';
			o.sc = N(o.sc, 4);
			o.x = N(o.x, 100);
			o.y = N(o.y, 100)
			return o
		}
		w.y = w.ship = function () {
			var w = this, g = G(arguments), o = G.ship(g)
			var y = w._ship(o.x, o.y, o.sc * 4, o.c)
					.aD(0).r(.8).K('ship yip y')
			if (!g.n) {
				y.cn('thrust')
			} else if (g.p) {
				y.tr()
			}
			y.shtSp()
			return y
		}
		b.chug = function (n) {
			var b = this
			_.ev(.1, function () {
				b.push(n)
			})
			return b
		}
		b.going = function () {
			var lv = this.lV(), x = lv.x, y = lv.y, a = this.aV()
			return (M.abs(x) > 0.5) || (M.abs(y) > 0.5) || ( M.abs(a) > 0.5)
		}
		MINIWALLS = BIRDCAGE = THRUSTPLAYER = BCG = function () {
//gotta make guy heavier
//thrust is good with grav 10 !!!!
// , walls:b2d.miniWalls
			W({
				g: 10, W: 500, H: 400, w: function () {
					w.brick(200, 50, 300, 20) //top
					w.brick(200, 360, 300, 20) //bottom
					w.brick(60, 240, 20, 260) //left
					w.brick(340, 320, 20, 100)
				}
			})
			w.p(2).con('thrust')
			w.ball(300, 100, 12)
			g = b.bS('guy', .2).aD(.8)
			$t(function () {
						g.rt(0)
					}
			)
		}
		W({g: 1})
		//w.chalk('spritebox example')
		sp = w.spriteBox({
			"framerate": 24,
			"images": ["thrusty.png"],
			"frames": [
				[0, 0, 512, 512, 0, -53, -36],
				[512, 0, 512, 512, 0, -53, -36],
				[1024, 0, 512, 512, 0, -53, -36],
				[0, 512, 512, 512, 0, -53, -36],
				[512, 512, 512, 512, 0, -53, -36],
				[1024, 512, 512, 512, 0, -53, -36],
				[0, 1024, 512, 512, 0, -53, -36],
				[512, 1024, 512, 512, 0, -53, -36],
				[1024, 1024, 512, 512, 0, -53, -36],
				[0, 1536, 512, 512, 0, -53, -36],
				[512, 1536, 512, 512, 0, -53, -36]],
			"animations": {
				"die": {"speed": 1, "frames": [8, 9, 10], next: false},
				"shoot": {"speed": 1, "frames": [1, 2, 3, 4, 0], next: false},
				"thrust": {"speed": 1, "frames": [5, 6, 7, 0], next: false}
			}
		})
		sp.thrustify()
		sp.con('thrust')
	}
	w.Y = w.y = w.ship = function () {
		var y = this.yShip.apply(this, arguments)
		y.con('thrust')
		y.shootOnSpace()
		return y
	}
	function controls() {
		b.controls = b.cn = function (cn, o) {
			var b = this, w = b.W()
			//stop a current 'controls', if any
			if (F(b._cn)) {
				w.s.off('tick', b._cn)
			}
			if (U(cn)) {
				return
			}
			if (S(cn)) {
				cn = b2d.cn[cn]
			}
			if (F(cn)) {
				b._cn = w.s.t(
						function () {
							cn(b, o)
						}
				)
			}
			return b
		}
		b2d.cn.thr = b2d.cn.thrust = b2d.cn.t = function (p, mult) {
			var vec
			mult = N(mult, 200)
			if ($.K.u) {
				vec = p.vec().m(mult)
				p.I(vec)
			}
			p.aV($.K.r ? 15 : $.K.l ? -15 : 0)
			//  $l('vec: '+ parseInt(vec.x) + ', '+ parseInt(vec.y))
		}
	}
	
	KILLTIM = PSYCHOTHRUSTER = NOCLEAR = PSY = function () {
		W({g: 0, clear: false}).db()//false is needed
		p = w.p().con('thrust').aD(10000)
		w.dude(3)
		w.killTim()
		$.kD('s', function () {
			var pt = p.wPt(0, -75)
			var b = w.ba(pt.x, pt.y, 10).bS('me', 0.1)
			var v = p.vec()
			b.I(v.x / 40, v.y / 40)
		})
		_.ev(3, function () {
			w.st.clear()
		})
	}
	TAPSHOOT = TAP = function () {
		W(0).tim(7)
		p = w.me().X(50)
		$.$(function (e) {   //  po= p.wP(0, -75)
			var bul = p.shoot()
			if (M.r() * 5 < 1) {
				bul.bS('sun', .2)
			}
			var dx = e.pageX - p.X()
			var dy = e.pageY - p.Y()
			//thrust ship
			p.I(dx / 20, dy / 20)
			//rotate ship
			p.rt(M.tD(M.atan(dy / dx)) + (dx > 0 ? 90 : 270))
		})
		w.playerVsTim()
	}
}
b.thrustify = function () {
	var b = this.aD(.5)
	//takes a spritebox!
	//uses cjs.watchKeys()
	K({
		l: function () {
			b.rt(8, '-')
		},
		r: function () {
			b.rt(8, '+')
		},
		d: function () {
			b.push(.2).p('thrust')
		},
		u: function () {
			b.p('shoot')
		}
	})
	return b
}
FLOCK = function () {
	W({g: 0})//.P()
	w.D(300, 100, 'r', 50)
	w.D(500, 100, 'y', 50)
	w.D(700, 100, 'b', 50)
	w.D(900, 100, 'g', 50)
	var n = 0
	_.t(8, function () {
		w.y('o'//,'-'
		)//.push('+')
	})
	//y=w.y('b',100,100,5)
	_.evx(.5, function () {
		if (y.going()) {
			// w.C('p')
		}
		else {
			// w.C('z')
		}
	})
}
FLOCKING = FLK = function () {
	
	//these just thrust and dont
	//otherwise apply forces to neighbors.  but what if
	//they 'SUCKED' instead of 'thrusted' ?
	//is that the same as having a gravitational inwards force?
	var w = b2d.W({g: 0})
	//  y = $ys(300, 200, 3).angDamp(0).linDamp(1)
	var n = 0
	_.times(40, function () {
		window['y' + n++] = w.yShip().chug()
	})
	y = w.yShip('o').thrustControl()
	_.times(40, function () {
		window['y' + n++] = w.yShip().chug()
	})
	I(function () {
		if (y.going()) {
			w.s.c.C('p')
		} else {
			w.s.c.C('z')
		}
	}, 100)
	w.debug()
}
b.cn = function (cn, o) {
	var b = this, w = b.W()
	//stop a current 'controls', if any
	if (F(b._cn)) {
		w.s.off('tick', b._cn)
	}
	if (U(cn)) {
		return
	}
	if (S(cn)) {
		cn = b2d.cn[cn]
	}
	if (F(cn)) {
		b._cn = w.s.t(
				function () {
					cn(b, o)
				}
		)
	}
	return b
}
b2d.cn.thr = b2d.cn.thrust = b2d.cn.t = function (p, mult) {
	var vec
	mult = N(mult, 200)
	if ($.K.u) {
		vec = p.vec().m(mult)
		p.I(vec)
	}
	p.aV($.K.r ? 15 : $.K.l ? -15 : 0)
	//  $l('vec: '+ parseInt(vec.x) + ', '+ parseInt(vec.y))
}
STUM = function () {
	W({g: 3})
	y = w.y(300, 400, 3, '-')
	_.ev(.1, function () {
		var v = y.vec(0, 1.5)
		v = V(
				M.tD(v.x),
				M.tD(v.y)
		)
		y.I(0, v.y / 5).rt(2, '+')
	})
	//arm
	b = w.S(300, 300, 20, 200)
	a = w.S(300, 300, [['b', 200, 50, 100, 0]])
	_.ev(.1, function () {
		a.rt(1, '+')
	})
}
b.tow = b.towards = function (x, y, sp) {
	$l('b.tow')
	var b = this, lV
	__sp = function (s) {
		s = N(s, 5)
		s = 11 - (  s > 10 ? 10 : s )
		s *= 20
		return s
	}
	sp = N(sp, 5)
	sp = 11 - (  sp > 10 ? 10 : sp )
	sp *= 20
	lV = V(x - b.X(), y - b.Y()).d(sp)
	return b.lV(lV)
	//if(isBody(x)){return self(x.X(), x.Y(), y)}
//move towards x,y (or body?)
	//more realistic to accelerate, via forces?
	//these just thrust and dont
//otherwise apply forces to neighbors.  but what if
//they 'SUCKED' instead of 'thrusted' ?
//is that the same as having a gravitational inwards force?
//  y = $ys(300, 200, 3).angDamp(0).linDamp(1)
}
b.rTow = function (y) {
	$l('b.rTow')
	var b = this,
			a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
	if (y.Y() > b.Y()) {
		a += 180
	}
	b.rt(a)
	return b
}
b.fly = function (n) {
	return this.I(this.wVec()
			.d(N(n) ? -n : -20))
}
b.push = function (n) {
	return this.I(this.wVec()
			.m(N(n) ? n : .1))
}
b.steer = b.turnRot = b.turnRt = function (rt) {
	var b = this
	rt = rt || 15
	if (K.l) {
		b.rt(rt, '-')
	}
	if (K.r) {
		b.rt(rt, '+')
	}
	return b
}
b.impFly = function (u, d) {
	var b = this
	u = N(u) ? u : 20;
	d = N(d) ? d : u
	if (K.u) {
		b.fly(u)
	}
	if (K.d) {
		b.fly(d)
	}
	return b
}
b.turnFlyImp = function (rot, up, down) {
	return this.steer(rot).impFly(up, down)
}
b.pushEv = function (forc, ev) {
	var b = this
	forc = N(forc, this.vec().m(40))
	_.ev(N(ev, .5), function () {
		b.push(forc)
	})
	return this
}
b.push = function (forc) {
	$l('push')
	var g = G(arguments)
	return g.p ? this.pushEv() :
			this.I(this.vec().m(N(forc, 1) * 40))
}
b.isMoving = b.going = function () {
	$l('going')
	lv = this.lV()
	return M.abs(lv.x) > 0.5 ||
			M.abs(lv.y) > 0.5 ||
			M.abs(this.aV()) > 0.5
}
function aiTrack() {
	b.minusMyXY = function (x, y) {
		return V(x - this.X(), y - this.Y())
	}
	v.bDif = v.bodDif = v.bodXYDif = function (bod) {
		return V(this.x - bod.X(), this.y - bod.Y())
	}
	b.vDif = function (v, y) {
		var vec = O(v) ? v : V(v, y)
		return V(vec.x - this.X(), vec.y - this.Y())
	}
	b.getGoAt = function () {
	}
	b.goAt = b.tow = b.towards = function (x, y, sp) {
		var lV = V(x - this.X(), y - this.Y())
		sp = N(sp, 5)
		lV.div(11 - (  sp > 10 ? 10 : sp ) * 20)
		this.lV(lV)
		return this
		//if(isBody(x)){return self(x.X(), x.Y(), y)}
//move towards x,y (or body?)
		//more realistic to accelerate, via forces?
		//these just thrust and dont
//otherwise apply forces to neighbors.  but what if
//they 'SUCKED' instead of 'thrusted' ?
//is that the same as having a gravitational inwards force?
//  y = $ys(300, 200, 3).angDamp(0).linDamp(1)
	}
	b.getRtAt = function (bod) {
		var rt = -M.tD(M.atan(bod.X() - this.X() / bod.Y() - this.Y()))
		if (bod.Y() > this.Y()) {
			rt += 180
		}
		return rt
	}
	b.rtAt = b.rotateTowards = b.rTow = function (bod) {
		this.rt(this.getRtAt(bod))
		return this
	}
	TOW = TOWARD = function () {
		W({g: 0}).C('z')
	}
	BIG = BIGSHIP = function () {
		W([1000, 800, 4000, 2000], {g: 0})
		r = w.y({c: 'r', sc: 20}).XY(300, 300)
		w.D(500, 300, 'r', 100)
		y = w.y('y', 100, 200, 6, '-').track()
		r.aD(1).lD(1).r(0).fr(1).K('guy')
		T.t(function () {
			y.goAt(r.X(), r.Y(), 9).rtAt(r)
		})
	}
}
 