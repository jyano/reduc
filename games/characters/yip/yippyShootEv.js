function shootEv() {
	TOW = TOWARD = function () {
		W({g: 0}).C('z').Y()
		ball = w.D(500, 300, 'r', 100)
		bY = w.y('b', 100, 200, 6, '-')
		bY.shtEv(.2)
		//y.aD(1).lD(1).r(0).fr(1).K('guy')
		T.t(function () {
			bY.tow(ball.X(), ball.Y(), 9)
			bY.rTow(y)
		})
		return
		_.t(5, function () {
			w.y('b', R(500, 50), R(500, 50))
		})
		w.b(function (cx) {
			cx.w('ship', 'bul', function (bul, cx) {
				this.kill()
			})
		})
		w.D(200, 200, 'b', 80).d(1).K('bad')
		w.D(200, 200, 'r', 150, 150).d(1).K('bad')
		w.cl('bul', 'bad', function (b) {
			if (this.B()) {
				this.B().kill()
			}
			if (b.B()) {
				b.B().kill()
			}
		})
	}
	WAR = function () {
		W({g: 0})
		var n = 0, x = 150, Y = 150
		w.cl('bul', 'bad', function (bad) {
			this.B().kill();
			bad.B().kill()
		})
		_.t(15, function () {
			w.y($r(), x += 4, Y += 2, 3, '-')
					.K('bad').rt(R(90))
					.push(20, '+')
					.shtEv(300, 'deathBall')
		})
	}
	b.shtEv = function (ms, k) {
		var b = this //= b.shootOnInt
		_.ev(N(ms / 1000, 0.4), function () {
			if (b.IsActive()) {
				b.sht(k)
			}
		})
		return b
	}
	TRAP = function () {
		W(0).C('r')
		co = w.tCo()
		y = w.y()
		rot = 45
		bg = w.y('b', 500, 300, '-')
		bg.shtEv()
		bg.stat()
		T.t(function () {
			bg.rTow(y)
		})
		_.t(3, function () {
			co.B(
					w.y('z', R(500, 50), R(300, 50), '-').lV(10, 20).lD(0)
					//  w.D(400,300, 'z',10,10)
			)
		})
	}
	TOW = TOWARD = function () {
		W({g: 0}).C('z').Y()
		ball = w.D(500, 300, 'r', 100)
		bY = w.y('b', 100, 200, 6, '-')
		bY.shtEv(.2)
		//y.aD(1).lD(1).r(0).fr(1).K('guy')
		T.t(function () {
			bY.tow(ball.X(), ball.Y(), 9)
			bY.rTow(y)
		})
		return
		_.t(5, function () {
			w.y('b', R(500, 50), R(500, 50))
		})
		w.b(function (cx) {
			cx.w('ship', 'bul', function (bul, cx) {
				this.kill()
			})
		})
		w.D(200, 200, 'b', 80).d(1).K('bad')
		w.D(200, 200, 'r', 150, 150).d(1).K('bad')
		w.cl('bul', 'bad', function (b) {
			if (this.B()) {
				this.B().kill()
			}
			if (b.B()) {
				b.B().kill()
			}
		})
	}
	BLUE = function () {
		W({g: 0})
		y = w.y('b', 200, 300, 6).aD(1).lD(1).r(0).fr(1).K('guy')
		_.t(5, function () {
			w.y(R(600, 50), 300, 3, '-').K('bad').rt(45)
					.push('+')
					.shtEv('badBul')
		})
		w.cl('badBul', function (f) {
			this.B().kill()
			//if(f.of('bad')){
			f.B().kill()
			//}
		})
	}
	TRAP = function () {
		W(0).C('r')
		y = w.y()
		bg = w.y('b', 500, 300, '-')
		bg.shtEv(2000)
		bg.stat()
		T.t(function () {
			bg.rtAt(y)
		})
	}
	YIP = SHIP = STUMBLE = STUM = function () {
		W({g: 3});
		b = w.BOX(200, 200, 150, 150).de(1)
		w.b(function (cx) {
			if (cx.w('bul', 'bad')) {
				cx.a().K('destroy');
				cx.b().K('destroy')
			}
			else if (cx.w('bul') && !cx.w('yip')) {
				cx.destroyIf('bul')
			}
		})
		y = w.yShip('b', 100, 200, 6).con('thrust').K('yip')
		y.aD(1).lD(1).re(0).fr(1)
		y.shootEv(1)
		y = w.ship().XY(500, 300).K('yip')
		_.t(5, stumble)
		function stumble() {
			var stum = w.yShip('r', 300, 400, 3).K('bad')
			_.ev(.05, function () {
				var v = stum.gWV(V(0, 90))
				stum.I(0, v.y / 10).rt(3, '+')
			})
		}
	}
	WAR = function () {
		x = 50
		y = 50
		W0()
		y = w.yShip('b', 100, 200, 6).aD(1).lD(1).re(0).fr(1).K('guy')
				.shootOnSpace('guyBul')
				.con('thrust')
		_.t(10, function () {
			w.yShip(x += 30, Y += 60, 3).chug(4).K('bad').shootEv(1, 'bul').rt(45)
		})
		w.b(function (cx) {
			if (cx.w('bul', 'bad')) {
				cx.destroyBoth()
			}
			if (cx.w('badBul', 'guy')) {
				cx.destroyBoth()
			}
		})
	}// cx.w(k,k) destroyBoth
	TRAP = function () {
		W(0).C('r')
		co = w.tCo()
		y = w.y()
		rot = 45
		bg = w.y('b', 500, 300, '-')
		bg.shtEv()
		bg.stat()
		T.t(function () {
			bg.rTow(y)
		})
		_.t(3, function () {
			co.B(
					w.y('z', R(500, 50), R(300, 50), '-').lV(10, 20).lD(0)
					//  w.D(400,300, 'z',10,10)
			)
		})
	}
	WAR = function () {
		W({g: 0})
		var n = 0, x = 150, Y = 150
		w.cl('bul', 'bad', function (bad) {
			this.B().kill();
			bad.B().kill()
		})
		_.t(15, function () {
			w.y($r(), x += 4, Y += 2, 3, '-')
					.K('bad').rt(R(90))
					.push(20, '+')
					.shtEv(300, 'deathBall')
		})
	}
	b.shtEv = function (ms, k) {
		var b = this //= b.shootOnInt
		_.ev(N(ms / 1000, 0.4), function () {
			if (b.IsActive()) {
				b.sht(k)
			}
		})
		return b
	}
	WAR = function () {
		W({g: 0})
		var n = 0, x = 150, Y = 150
		w.cl('bul', 'bad', function (bad) {
			this.B().kill();
			bad.B().kill()
		})
		_.t(15, function () {
			w.y($r(), x += 4, Y += 2, 3, '-')
					.K('bad').rt(R(90))
					.push(20, '+')
					.shtEv(2000, 'deathBall')
		})
	}
	b._shootEv = b.shootOnInt = function (n, k) {
		var b = this
		n = N(n) ? n : 1000
		_.sI(function () {
			if (b.IsActive()) {
				b.shoot(k)
			}
		}, n)
		return b
	}
	b.shootEv = function (secs, k) {
		return this._shootEv(secs * 1000, k)
	}
	b.shtEv = function (ms, k) {
		ms = N(ms / 1000, 0.4)
		var b = this //= b.shootOnInt
		_.ev(ms, function () {
			if (b.IsActive()) {
				b.sht(k)
			}
		})
		return b
	}
}
 
b.shoot = b.sht = function (k) {
	var g = G(arguments)
	var bulXY = this.wP(0, -200) //action: shoots FROM just above b
	var bul = w.bul(bulXY)
	var bulLV = this.vec().m(100)//action: set speed
	bul.lV(bulLV).d(.5).lD(0).fR()
	if (k) {
		bul.K(k)
	}
	return bul
}
b.makeShooter = b.shootOnSpacebar = b.shtSp = function (k) {
	var b = this
	$.space(function () {
		b.shoot(k)
	})
	return b
}
b.shootOnSpace = function (k) {
	var y = this
	$.space(function () {
		y.shoot(k)
	})
	return this
}
b.webGuyShoot = function (k) {
	var y = this;
	k = k || 'bul'
	var dist = y.dir().m(100)
	var bul = w.BALL(y.X() + dist.x, y.Y() + dist.y, 6, 'w')
	bul.K(k)
	var v = y.GetWorldVector(V(0, -100))
	bul.I(v.x / 4, v.y / 4)
	_.in(.4, function () {
		bul.kill()
	})
	return bul
}
b.shoot = function () {
	var b = this, w = b.W(), g = G(arguments)
	var pt = b.GWV(V(0, -100))
	var pel = w.pellet(b.aboveGlobally())
			.I(pt.x / 20, pt.y / 20)
	if (g.m) {
		pel.bS('me', 0.15)
	}
	return pel
}
GRAVITYRANGE = GRR = function () {
	w = b2d.W({g: 10})
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	range = w.prism(
			w.brick(600, 300, 220, 20),
			w.box(600, 300, 20, 250).linDamp(10)
	).lm(-100, 100)
	w.show(function () {
		return 'Welcome to Gravity Range: Current gravity is ' + range.val()
	})
	y = w.yShip().thrustControl().angDamp(1).shootOnSpace()
	cjs.tick(function () {
		w.grav(range.val())
		y.linDamp(10)
	})
}
STABTRAP = function () {
	w = b2d.W({g: 0}).debug();
	co = w.tensor();
	//  _.times(100, function(){co.body(w.circ(400,300, 15, 'w').lV(10,20).linDamp(0))})
	y = w.ship()
	rot = 45
	bg = w.yShip('blue', 500, 300).stat().shootOnInt(200)
	bg.rotTowardsShip = function () {
		var yX = y.X(), yY = y.Y(),
				bgX = bg.X(), bgY = bg.Y(),
				dX = yX - bgX, dY = yY - bgY,
				ang = -Math.toDegrees(Math.atan(dX / dY))
		if (y.Y() > this.Y()) {
			ang += 180
		}
		this.rot(ang)
	}
	cjs.tick(function () {
		bg.rotTowardsShip()
	})
}
ship.shoot = function (kind) {
	kind = kind || 'bul'
	var vec, bullet, dist, y = this
	dist = y.wVec().mult(100)
	bullet = w.circ(y.X() + dist.x, y.Y() + dist.y, 6, 'w').K(kind)
	vec = y.GetWorldVector(V(0, -100))
	bullet.impulse(vec.x / 4, vec.y / 4)
	setTimeout(function () {
		bullet.kill()
	}, 400)
	return bullet
}
ship.shootOnSpace = function (kind) {
	var y = this
	$.space(function () {
		y.shoot(kind)
	})
	return this
}
ship.shootOnInt = function (int, kind) {
	var y = this, int = N(int) ? int : 1000
	setInterval(function () {
		if (y.IsActive()) {
			y.shoot(kind)
		}
	}, int)
	return this
} 
b.shootX = function () {
	var vec, bullet
	bullet = this.GetWorld().bullet(abovePlayerGlobally(this)).bindSprite('me', 0.15)
	vec = this.GetWorldVector(b2.V(0, -100))
	bullet.impulse(vec.x / 20, vec.y / 20)
}
w.pel = w.pell = w.pellet = w.bullet = function (x, y, r) {
	var w = this, g = G(arguments), o
	//p.bullet = function(x,y){return this.ball(x,y,10).K('bullet')}
	// can pass in (x,y,r) | ({x:x,y:y},r )
	o = O(g.f) ? {x: g.f.x, y: g.f.y, r: g.s} :
	{x: g.f, y: g.s, r: g.t}
	o.x = N(o.x) ? o.x : 0
	o.y = N(o.y) ? o.y : 0
	o.r = N(o.r) ? o.r : 10
	var bul = w.BALL(o.x, o.y, o.r, 'w').de(.3)
	// to do: set as isBullet true!!! duh! (its the nominal use case ;) )
	bul.K('bul')
	return bul
}
b.aboveGlobally = b.aboveMeGlobally = b.aboveMe = b.above = function () {
	return this.wPt(0, -100)// -p.sprite.H()/2
}
w.bu = w.bul = function () {
	var w = this, g = G(arguments), o, bu
	o = g.O_ ?  //pass {x,y},rad  OR x,y,rad
	{x: g.f.x, y: g.f.y, r: g.s} :
			N(g.s) ? {x: g.f, y: g.s, r: g.t} :
			{r: g.f}
	bu = Bul(o.x, o.y).fr(0).d(.1).r(.5)
	bu.cl(onColl)
	return bu.lD(0).aD(0)
	function Bul(x, y, rad, c) {
		c = c || 'w'
		rad = N(rad, 8)
		var bu = w.D(x, y, c, rad).K('bul bu')
		bu.SetBullet(true)
		return bu
	}
	
	function onColl(f) {
		if (!g.n) {
			this.xB()
		}
		if (g.p) {
			if (O(f) && F(f.xB)) {
				f.xB()
			}
		}
	}
}
b.bu = b.bul = function () {
	var b = this, g = G(arguments)
	if (g.p) {
		b.SetSensor(true)
	}
	return b
}
b.sht = function () {
	var b = this, g = G(arguments),
			o = {k: g.f},
	//just above b
			bu = w.bu(
					this.wP(0, -200)
			)
	bu.lV(b.vec().m(100))
	bu.d(.5).lD(0).fR()
	bu.K(o.k)
	return bu
}
b.shtSp = function (k) {
	var b = this
	$.space(function () {
		b.sht(k)
	})
	return b
}
b.polyBul = function () {
	alert('polyBul')
	var vec = this.GetWorldVector(V(0, -100)), point = this.worldPoint(0, -50)
	bullet = this.W().polyBul(point.x, point.y, 4, 4, 'w').K('polyBul')
			.den(1).linDamp(0).linVel(vec.x / 5, vec.y / 5)
	w.end(function (cx) {
		cx.destroyIf('polyBul')
	})
	return bullet
}
w.bu = w.bul = function () {
	var w = this, g = G(arguments), o, bu
	o = g.O_ ?  //pass {x,y},rad  OR x,y,rad
	{x: g.f.x, y: g.f.y, r: g.s} :
			N(g.s) ? {x: g.f, y: g.s, r: g.t} :
			{r: g.f}
	bu = Bul(o.x, o.y).fr(0).d(.1).r(.5)
	bu.cl(onColl)
	return bu.lD(0).aD(0)
	function Bul(x, y, rad, c) {
		c = c || 'w'
		rad = N(rad, 8)
		var bu = w.D(x, y, c, rad).K('bul bu')
		bu.SetBullet(true)
		return bu
	}
	
	function onColl(f) {
		if (!g.n) {
			this.xB()
		}
		if (g.p) {
			if (O(f) && F(f.xB)) {
				f.xB()
			}
		}
	}
}
b.bu = b.bul = function () {
	var b = this, g = G(arguments)
	if (g.p) {
		b.SetSensor(true)
	}
	return b
}
b.sht = function () {
	var b = this, g = G(arguments),
			o = {k: g.f},
	//just above b
			bu = w.bu(
					this.wP(0, -200)
			)
	bu.lV(b.vec().m(100))
	bu.d(.5).lD(0).fR()
	bu.K(o.k)
	return bu
}
b.shtSp = function (k) {
	var b = this
	$.space(function () {
		b.sht(k)
	})
	return b
}
function boxBul() {
	b.setBul = function (sB) {
		this.SetBullet(sB ? true : false);
		return this
	}
	b.makeBul = function () {
		return this.setBul(1)
	}
	w._bul = function (x, y, r, c) {
		return this.D(x, y, c || 'w', N(r, 8)).K('bul bu')
				.makeBul().fr(0).d(.1).bo(.5).lD(0).aD(0)
	}
}
function spazBul() {
	G.cir = function (g) {
		return g.O ? g.f : g.O_ ? {x: g.f.x, y: g.f.y, r: g.s} :
				N(g.s) ? {x: g.f, y: g.s, r: g.t} :
				{r: g.f}
	}
	w.bul = w.bu = function () {
		var w = this, g = G(arguments), o = G.cir(g)
		var bul = w._bul(o.x, o.y)
		if (g.d) {
			bul.cl(function () {
				this.B().kill()
			})
		}
		if (g.m) {
			bul.cl(function (f) {
				f.B().kill()
			})
		}
		return bul
		//instructions: can pass   {x,y,r} ||  {x,y},rad  ||  x,y,rad 
	}
}
w.altBul = w.blackSquareBul = function () {
	return this.D(400, 300, 'z', 10, 10)
}
 