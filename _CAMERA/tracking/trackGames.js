T1 = ZSC = ZOOMSCALE = function () {
	W([1000, 1000], {g: 0}).levelScrollCirs()
	w.drag()
	r = $._range90(800, 500)
	r.wValOnTk(function (val) {
		w.ZOOM(val)
	})
	w.textDsp(function text() {
		var txt = 'scale: ' + r.val()
		return txt
	})
}
ZIP = T11 = ZOOMINPLACE = function () {
	W([1000, 1000], {g: 0}).levelScrollCirs()
	stg = w.stage
	o = {lastZm: 1, stgX: 0, stgY: 0}
	r = $._range90(800, 500)
	r.wValOnTk(function (zm) {
		o.x = stg.x
		o.y = stg.y
		if (zm != w.zoom()) {
			zoomChanged(zm, o)
		}
		o.zoom = w.zoom()
	})
	function zoomChanged(zm, o) {
		var oldZm = w.zoom()
		var zmRat = zm / oldZm
		w.ZOOM(zm)
		o.stgX = o.stgX - (10 * zmRat)
		stg.X(o.stgX)
	}
	
	$.mouseup(function () {
		var zm = w.zoom()
		o.stgX = stg.x
		o.stgY = stg.y
		o.zmDif = o.lastZm - zm
		o.lastZm = zm
	})
	w.$cvM({
		mD: function (x, y) {
			o.dx = x - stg.x;
			o.dy = y - stg.y
		},
		pM: function (x, y) {
			stg.x = x - o.dx;
			stg.y = y - o.dy
		}
	})
	_.ev(function () {
		console.log(o)
	})
}
ZSC1 = function () {
	W([1000, 1000], {g: 0}).levelScrollCirs().drag()
	r = $._range90(800, 500)
	r.wValOnTk(function (val) {
		w.zoom(val)
	})
	w.textDsp(function text() {
		var txt = 'range val: ' + r.val() + ', zoom: ' + w.zoom()
		return txt
	})
}
T2 = ZOM = function () {
	W().G(10)
	_.t(4, function () {
		w.ship().Y(120)
	})
	_.in(function () {
		w.ZOOM(2)
		_.in(function () {
			w.camXY(400, 4000)
		})
	})
	w.bt('zoom out (again)', function () {
		w.ZOOM(1).capCamPos()
	})
}
T3 = ZIN = function () {
	W().scrollLevel()
	$t(function () {
		w.callTrackeeCb()
	})
	_.in(function () {
		w.zoomIn()
	})
	w.textDsp(function text() {
		return 'zoom: ' + w.zoom()
	})
	w.bt('zoomOut', function () {
		w.zoomOut()
	})
}
T8 = SLOOM = function () {
	_level_()
	y = w.ship(200, 200)
	w.track(y)
	$t(function () {
		w.callTrackeeCb()
	})
	w.dot(600, 300)
	w.hud.dot(600, 300)
	w.dot(1200, 600)
	w.hud.dot(1200, 600)
	w.showOff()
	w.bt('my face', function () {
		y.bindSprite('me', .5)
	}, 10000)
}
T4 = PAN = function () {
	_level_()
	w.pan = function (a) {
		var w = this
		var left = false
		var minX = 100
		var maxX = w.worldW - 100
		$t(function () {
			a.X(20, left ? '-' : '+')
			if (a.X() < minX) {
				left = false
			}
			else if (a.X() > maxX) {
				left = true
			}
		})
		return w
	}
	tee = w.S(w.gameW / 2, w.gameH / 2, 'w', [[40, 40, '-']]).track()
	w.pan(tee)
}
T5 = FBL = FIREBALL = function () {
	$FIREBALL().track()
}
T6 = KISS = function () {
	$FIREBALL()
	y = w.ship().C('b').track()
	yy = w.ship(400, 400).C('o')
	_.ev(2, function () {
		if (w.follA) {
			w.track(yy);
			w.follA = 0
		}
		else {
			w.track(y);
			w.follA = 1
		}
	})
}
T7 = SNL = SCROLLNOLIM = function () {
	$FIREBALL()
	w.zoom(.8).dragScale()
			.ship()._track(600, 300, function (d) {
				w.stgXY(d.x, d.y)
			})
}
NOT = NOTRACKEE = function () {
	W({t: 0})
}
CUPBALL = function () {//should zoom in when near cup
	CUPS()
	b = w.D(w.W / 2, w.H / 2, 'w', [[10]]).r(.8).track()
	cjs.tick(function () {
		b.F(0, -20)
	})
	w.showOff()
}
TRACKEE = function () {
	W([1200, 600, 2400, 600], {g: 10})
	w.S(400, 2500, 'r', 200, 100)
	w.S(800, 2300, 'z', 100, 100)
	w.S(1200, 2300, 'b', 300, 100)
	w.S(1600, 2300, 'z', 100, 100)
	w.S(2000, 2300, 'r', 200, 100)
	_.times(10, function (i) {
		w.D(100 + i * 100, 100, $r(), 35).den(.1)
	})
	y = w.ship(50, 50).mid()
	y2 = w.ship(100, 300).C('x').rot(180)
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	w.tRightLeft()
	w.showOff()
	setTimeout(function () {
		setInterval(function changeT() {
			if (w.t == y2) {
				w.C('b');
				w.t = y
			} else {
				w.C('z');
				w.t = y2
			}
		}, 5000)
	}, 5000)
}
CAMFOLLOW = function () {
	W(500, 500, 1600, 1000).G(0)
	a = w.ship().C('b')
	b = w.ship(400, 400).C('o').track()
	I(5, function () {
		if (w.follA) {
			b.track();
			w.follA = 0
		}
		else {
			a.track();
			w.follA = 1
		}
	})
}
CB = TRACKEECB = function () {
	W([1200, 600, 2400, 1200], {g: 300})
	_.t(10, function (i) {
		w.D(100 + i * 100, 100, $r(), 35).d(.1)
	})
	w.Z('-')
	p = w.p(1175, 100)
	w.t = p // no need to call track?
	_.ev(1, function () {
		w.t.cb = function () {
			w.Z(w.z + .001)
		}
	})
}
CHANGETRACKEE = KEE = function () {
	W([600, 600, 1200, 600])
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	//  y = w.ship(50,50 ).C('d').mid().track()
	y2 = w.y(100, 300).C('x')
	y = w.y(100, 300).C('u')
	_.ev(1,
			function () {
				if (w.t == y2) {
					w.C('x');
					w.t = y
				}
				else {
					w.C('u');
					w.t = y2
				}
			})
}
SCG = SCROLLGAME = function () {
	
	//no buffer to worry about
	//it lets u gradually move past the target point.. until hits limit
	W([1200, // x
		600,
		4800, // x
		1200
	], {g: 0, t: 0})
	w.S(1200, 300, 'r', 400, 100)
	w.S(1200, 900, 'r', 400, 100)
	w.S(1200, 600, 'w', [[400, 500, '-']])
	y = w.ship(200, 200).rot(120).damp(1, 10)
	w.track(y, 600, 300)
	// w.dot(600,300)
	//w.hud.dot(600,300)
//    w.dot(1200,600)
	//   w.hud.dot(1200,600)
	y.XY(1400, 600).rot(90).lD(0).lV(1)
}
SLOOM = function () {
	W([800, 500, 2400, 500], {g: 0}).Z(1.5)
			.Y(200, 200).showOff().bricks(
			[400, 300, 'r', 200, 100], [800, 300, 'z', 100, 100],
			[1200, 300, 'b', 300, 100], [1600, 300, 'z', 100, 100],
			[2000, 300, 'r', 200, 100]
	)
	y.damp(1, 10).track()
	_.in(4, function () {
		y.bS('me', .5)
	})
	_.t(5, function () {
		w.p(100, 100)
	})
}
KISS = function () {
	W([1200, 600, 2400, 600], {g: 10})
	w.D(800, 300).cir({
		r: 120,
		C: 'y', l: 2, bf: 'me', ls: ['y', 'x']//?
	}).den(.1)
	y = w.ship(50, 50).C('d').mid()
	y2 = w.ship(100, 300).C('x').rot(180)
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	w.tRightLeft()
	w.showOff()
	I(function changeT() {
		if (w.t == y2) {
			w.C('w');
			w.t = y
		} else {
			w.C('z');
			w.t = y2
		}
	}, 5000)
	b = w.D(100, 300)
	pf = b.pol({s: 1, C: 'y', v: [[-200, -100], [0, -200], [100, -100]]})
	pfs = b.pol({s: 1, C: 'o', v: [[-100, 0], [0, -200], [100, 20], [0, -150]]})
	cf = b.cir({k: 'cir', r: 100, x: 200, y: -100, d: .2, b: .8, f: 100, C: 'x'})
	rf = b.rec({x: 100, y: 100, w: 10, h: 100, C: 'x'})
	w.D(200, 300).pol({
		v: [[0, 100], [0, -100], [200, -150], [200, 150]],
		c: 'y', C: 'w', l: 5,
		bm: 1
	})
	//FROM POL ->0, -100]] })
	w.D(800, 300).pol({
		v: [
			[[5, 100], [0, -100], [200, -150], [200, 150]],
			[[-50, 50], [-50, -100], [450, -50], [450, 50]]
		],
		c: 'b', C: 'X',
		bm: 1
	})
}
WORLDPAN = function () {
	W([1200, 600, 2400, 600], {g: 0})
	w.S(400, 300, 'r', 200, 100)
	w.S(800, 300, 'z', 100, 100)
	w.S(1200, 300, 'b', 300, 100)
	w.S(1600, 300, 'z', 100, 100)
	w.S(2000, 300, 'r', 200, 100)
	b = w.D(100, 100, 'b', 30).lV(-10, -20).rest(.2)
	co = w.tCo().B(b.tr())
	_.t(10, function (i) {
		co.B(w.D(100 + 30 * i, 100, 'r', 30).lV(10, 20).r(.2))
	})
	y = w.y(100, 100).rt(120).aD(100)
	w.pan('*')
}
ZOOM = SCORE = ADV = ADVENTURE = function () {
	W([1200, 600, 2400, 1200])//.P('+')
	//$.test=true
	w.Z(.1)
	w.roof.kill()
	w.S(100, 570, 'w', 200, 30).r(0).fr(0)
	w.S(325, 570, 'g', 230, 30).r(.3).fr(10)
	w.S(550, 570, 'r', 200, 30).r(.7).fr(.3)
	w.S(100, 400, 'g', 230, 30).r(.3).fr(10)
	w.plat([800, 300, 100], [260, 240, 60], [550, 250, 100], [1350, 550, 100], [300, 200, 100], [300, 500, 60, 30], [150, 400, 60, 30])
	w.S(1200, 500, 'w', 100, 100)
	w.S(1240, 450, 'w', 180, 30)
	w.S(1420, 500, 'y', 180, 30)
	w.S(1560, 450, 'y', 300, 30)
	w.S(1600, 500, 'y', 180, 30)
	w.S(1960, 450, 'w', 300, 30)
	w.S(1900, 500, 'w', 180, 30)
	w.S(11300, 200, 'w', 180, 30)
	speed = 1
	//  p.tr()
	p = w.p().cn('jump').tr()
	w.p(100, 100, .8)
	w.p(100, 100, .8)
	w.p(100, 100, .8)
	w.p(100, 100, .8)
	//p.lD(1)
///    w.show(function(){ return  'in air: '+ p.inAir() })
	//w.goomba(400).fr(0)
	setup = function () {
		score = 0
		p.XY(150, 100).lV(0, 0)
		w.s.XY(0, 0)
	}
	setup()
	T.t(function () {
		w.s.X(speed, '-')//.pen(score++)
		if (p.Y() > 600) {
			setup()
		}
	})
}
CAMBALL = TRACKEE = function () {
	
	//W([1200,600,2400,600],{g:[10,10]}).Y()
	W([1200, 600, 2400, 600], {g: 100}).Y()
	mick(700, 100, {c1: 'b', c2: 'X'})
	mick(700, 300, {c2: 'b'})
	//  mick(100,100, { y2:10 })
	//  mick(100,200, { y2:200 })
	//  mick(100,300, { x2:100 })
	function mick(x, y, lf) {
		var g = G(arguments)
		w.i.h(x, y, '+').c({l: 20, C: 0, lf: lf || 1})
				.dc([50], [200, 0, 100], [100, 100, 100])
		if (g.p) {
			w.i.h(x, y).c({l: 20, C: 0, ls: lf || 1})
					.dc([50], [200, 0, 100], [100, 100, 100])
		}
	}
	
	y.i.c('y').dc(100, 100, 30)
			.c('o').dc(100, 100, 10)
			.c('X', 'g', 8)
			.mt([
				[100, 100], [300, 300], [400, 100],
				[500, 300], [450, 450]],
			[[500, 0], [600, 100]])
			.cir(600, 300, 'u', 'g', 10)
	h = w.i.h(600, 300, '+')
	h.cir(105, 100, 20, 'b')
			.cir(100, 20, 100, 'g')
			.cir(105, 100, 8, 'z')
			.cir(200, 100, 20, 'b')
			.cir(200, 100, 8, 'z')
	w.t = b = w.D(300, 300, 'r', 80).bo(.8).den(.1)
}
ZOM = function () {
	W([1200, 600, 2400, 600], {g: 10})//.manyBalls(); //_.t(10, function (i) {w.D(100 + i * 100, 100, $r(), 35).de(.1)})
	y = w.ship(50, 50).track()
	_.in(2, function () {
		w.zoom(1.4)
	})
}
SHOWOFF = SHO = function () {
	W([1200, 600, 2400, 600], {g: 10})//.manyBalls(); //_.t(10, function (i) {w.D(100 + i * 100, 100, $r(), 35).de(.1)})
	w.showOff()
	y = w.ship(50, 50).track()
}
CUPBALL = CPB = function () {

//purpose: shows 'track'-ing a  body
//purpose2: demonstrates 'showOff
//should zoom in when near cup
	CUPS()
	w.showOff()
	w.G(-100)
	x = w.W / 2
	y = w.H / 2
	ball = w.D(x, y, 'w', [[10]]).lV(100)//.re(.8)
	ball.trackBasic()
}
CAMFOLLOW = CMF = function () {
	W(500, 500, 1600, 1000).G(0)
	b = w.y(400, 400).C('o').track()
//	a = w.y().C('b')
	_.evx(5, function () {
		if (w.follA) {
			b.track();
			w.follA = 0
		}
		else {
			a.track();
			w.follA = 1
		}
	})
}
TRACKEE = TRK = function () {
	W()
	w.balls()
	y = w.ship(50, 50).mid()
	y2 = w.ship(100, 300).C('x').rot(180)
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	w.tRightLeft()
	w.showOff()
	_.in(5, function () {
		_.ev(5, function changeT() {
			if (w.t == y2) {
				w.C('b');
				w.t = y
			}
			else {
				w.C('z');
				w.t = y2
			}
		})
	})
}
CB = TRACKEECB = function () {
	W([1200, 600, 2400, 1200], {g: 300}).balls()
	w.zoom('-')
	w.t = p = w.p(1175, 100) // no need to call track?
	_.ev(1, function () {
		w.trackee.cb = function () {
			w.zoom(w._zoom + .001)
		}
	})
}
CHANGETRACKEE = KEE = function () {
	W([600, 600, 2000, 600])
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	//  y = w.ship(50,50 ).C('d').mid().track()
	y2 = w.y(100, 300).C('x')
	y = w.y(100, 300).C('u')
	_.ev(1, function () {
		if (w.t == y2) {
			w.C('z');
			w.t = y
		}
		else {
			w.C('w');
			w.t = y2
		}
	})
}
function bufferOb() {
	STREET1 = ST1 = function () {
		W([1200, 600, 1400, 1200], {
			g: 300//, t: 0
		})
		w.S(700, 1000, 'r', 800, 20)
		w.S(500, 800, 'g', 200, 20)
		w.S(900, 600, 'x', 200, 20)
		w.p(700, 600).track(600, 400, {
			x: 700, mX: 1.5,
			y: 1000,
			w: 700, h: 600
		})
	}
	SLY = function () {
		W([1200, 600, 2400, 1000], {g: 300}).P()
		w.right.kill();
		w.left.kill()
		w.track(p, 300, 400, {
			x: 1200, y: 700,
			w: 800, h: 500,
			mX: 10, mY: 10
		})
	}
	SPUFF1 = function () {
		W(800, 600, 800, 800).G(100)
		w.S(200, 500, 'g', 100, 100);
		w.S(500, 500, 'w', 100, 100);
		w.S(1000, 500, 'r', 100, 100);
		w.S(1500, 500, 'g', 100, 100)
		y = w.y(100, 100).rt(200)
		bfOb = {x: 1000, y: 1000, w: 400, h: 400}
		w.track(y//, 500, 500, bfOb
		)
	}
	BUFFER = function () {
		W([1200, 600, 4800, 1600], {g: 0, t: 0})//.mark()//.dot(600,300,'*').dot(1200,600,'*')
		y = w.ship(100, 100).damp(1, 10).rot(90).lD(2).aD(2)
				.rot(120)//.lV(1)
		//w.bufFoll(y, 600, 300, {x: 800, y: 300, mX: .8, mY: .8, w: 200, h: 200})
		// w.zoom(.8)
	}
}
function trackNeg() {
	NOTKE = ZOOMSCALE = ZSC = function () {
		W([1000, 1000], {g: 0, t: 0}).jukeBox().y(100, 100).rt(200)
		w.drag()
		r = $.tallRange()
		$t(function () {
			zoom = function () {
				return r.val() / 25 + 1
			}
			w.zoom(zoom())
		})
	}
	W.TEMPLE = function () {
		W([1200, 600, 2400, 1200], {g: 0})
		w.S(1200, 300, 'r', 400, 100)
		w.S(1200, 600, 'w', [[100, 100, '-']])
		w.S(1200, 900, 'r', 400, 100)
		return w
	}
	DRAGSCALE = SCROLLNOLIM = SNL = function () {
		W.TEMPLE()
		w.dragScale()
		w.zoom(.8)
				.y(500, 500)
				.track(100, 300, '-')
	}
}
//i can leave the world-centering in fw
// can optionally filter it with scale itself
//  has limits now!  and more..
// tis is the ultimate!
AUTO = AUTOSCROLL = function () {
	function help() {
		w.guy = function () {
			return this.D(800, 100, 'r', 50, 50).bS('guy')
		}
		w.left = function (n) {
			var w = this;
			n = N(n, 4)
			w.e(function (b) {
				b.X(n, '-')
			})
		}
		b.byI = b.byImp = function (i) {
			var k = $.K
			if (k.right) {
				this.I(i, 0)
			}
			else if (k.left) {
				this.I(-i, 0)
			}
			return this
		}
		b.byV = b.byVel = function (v) {
			alert('b.byV')
			var k = $.K
			if (k.right) {
				p.lV(v, 0)
			}
			else if (k.left) {
				p.lV(-v, 0)
			}
			return this
		}
		w.plat = function (x, y, W, H) {
			var w = this//=brk=brick=
			x = N(x) ? x : 60;
			y = N(y) ? y : x
			W = N(W) ? W : 30;
			H = N(H) ? H : W
			return w.S(x, y, 'w', W, H).r(.3).K('plat')
		}
		w.fivePlats = function () {
			var w = this
			w.plat(800, 500, 600, 100)
			w.plat(300, 530, 100, 100)
			w.plat(1400, 300, 600, 100)
			w.plat(1800, 500, 1000, 100)
			w.plat(1900, 200, 600, 100)
			return w
		}
		W.PLATS = function () {
			return W({g: 300, w: 0}).P(300, -300).fivePlats().p(300, -100)
		}
		b.playMe = function () {
			var p = this
			if (p.Y() > 2000) {
				p.XY(300, -300)
			} //comeback
			if (b2d.onG) {
				if ($.K.u) {
					p.jumping(180, 30)
				}
				else {
					p.byVel(40)
				}
			}
			else {
				p.byImp(10)
			}
			return p
		}
	}
	
	help()
	W.PLATS()
	$t(function () {
		w.left(4)
		p.playMe()
		w.guy()
	})
}
STREET = function () {
	W([1200, 600, 1400, 1200], {g: 300, t: 0})
	w.S(700, 1000, 'r', 800, 20)
	w.S(500, 800, 'g', 200, 20)
	w.S(900, 600, 'x', 200, 20)
	p = w.p(700, 600)
	w.fg.A(p.sp())
	w.track(p, 600, 400,
			{x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
}
SPUFF = function () {
	W(800, 600, 800, 800).G(0)
	w.S(200, 500, 'g', 100, 100);
	w.S(500, 500, 'w', 100, 100);
	w.S(1000, 500, 'r', 100, 100);
	w.S(1500, 500, 'g', 100, 100)
	y = w.ship(100, 100).rt(200)
	w.track(y, 500, 500, {x: 1000, y: 1000, w: 400, h: 400})
	BUFFER = function () {
		W([1200, 600, 4800, 1600], {g: 0, t: 0})//.mark()//.dot(600,300,'*').dot(1200,600,'*')
		y = w.ship(100, 100).damp(1, 10).rot(90).lD(2).aD(2)
				.rot(120)//.lV(1)
		w.bufFoll(y, 600, 300, {
			x: 800, y: 300, mX: .8, mY: .8, w: 200, h: 200
		})
		// w.Z(.8)
	}
}
SLY = function () {
	W([1200, 600, 2400, 1000], {g: 300}).P()
	w.right.kill();
	w.left.kill()
	w.track(p, 300, 400, {
		x: 1200, y: 700,
		w: 800, h: 500,
		mX: 10, mY: 10
	})
}
SCROLLNOLIM = function () {
	W([1200, 600, 2400, 1200], {g: 0})
	w.S(1200, 300, 'r', 400, 100)
	w.S(1200, 600, 'w', [[100, 100, '-']])
	w.S(1200, 900, 'r', 400, 100)
	y = w.ship(100, 100).rot(120).damp(1, 10)
	w.Z(.8)
	w.track(y, 600, 300, '-')
	w.dragScale = function () {
		var w = this,
				pX = 0, pY = 0, pmX, pmY, o = {}
		c = $(w.i.canvas)
		c.mousedown(function (e) {
			o.Scl = w.z
			o.Y = e.clientY
		})
		c.pressmove(function (e) {
			var x = e.clientX,
					y = e.clientY,
					newSc = o.Scl + (o.Y - e.clientY) * .005
			newSc = newSc > 5 ? 5 : newSc < .8 ? .8 : newSc
			w.Z(newSc)
		})
		return this
	}
	w.dragScale()
}//fix
SHOWOFF = function () {
	W([1200, 600, 2400, 600], {g: 10})
	y = w.ship(50, 50).track()//.P(100,1000)
	w.S(400, 2500, 'r', 200, 100)
	w.S(800, 2300, 'z', 100, 100)
	w.S(1200, 2300, 'b', 300, 100)
	w.S(1600, 2300, 'z', 100, 100)
	w.S(2000, 2300, 'r', 200, 100)
	_.times(10, function (i) {
		w.D(100 + i * 100, 100, $r(), 35).den(.1)
	})
	w.showOff()
}
ZOOMSCALE = function () {
	W([1000, 1000], {
		g: 0, t: 0
	})
	w.dragX = function () {
		var w = this, d
		w.i.c.m({
			mD: function (x) {
				d = x - w.s.x
			},
			pM: function (x) {
				w.s.x = x - d
			}
		})
		return w
	}
	w.dragY = function () {
		var w = this, d
		w.i.c.m({
			mD: function (x, y) {
				d = y - w.s.y
			},
			pM: function (x, y) {
				w.s.y = y - d
			}
		})
		return w
	}
	w.drag = function () {
		return this.dragX().dragY()
	}
	// w.s.HUD.dot(500, 500)
	y = w.ship(100, 100).rot(200)
	w.S(500, 500, 'o', 200)
	w.S(500, 500, 'r', 10)
	w.S(200, 200, 'm', 40)
	w.S(800, 200, 'b', 60)
	w.S(800, 800, 'l', 80)
	w.S(200, 800, 'g', 100)
	//w.inout()
	w.drag()
	r = $.rg().A() //range
	r.abs(775, 500)
	r.css('transform', 'rotate(90deg)')
	r.W(500).val(0)
	T.t(function () {
		w.Z(r.val() / 25 + 1)
	})
}
AUTO = AUTOSCROLL = function () {
	w.left = function (n) {
		var w = this;
		n = N(n, 4)
		w.e(function (b) {
			b.X(n, '-')
		})
	}
	b.byI = b.byImp = function (i) {
		var k = $.K
		if (k.right) {
			this.I(i, 0)
		}
		else if (k.left) {
			this.I(-i, 0)
		}
		return this
	}
	b.byV = b.byVel = function (v) {
		alert('b.byV')
		var k = $.K
		if (k.right) {
			p.lV(v, 0)
		}
		else if (k.left) {
			p.lV(-v, 0)
		}
		return this
	}
	W({g: 300, w: 0}).P(300, -300)
	w.plat = function (x, y, W, H) {
		var w = this//=brk=brick=
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 30;
		H = N(H) ? H : W
		return w.S(x, y, 'w', W, H).r(.3).K('plat')
	}
	w.plat(800, 500, 600, 100)
	w.plat(300, 530, 100, 100)
	w.plat(1400, 300, 600, 100)
	w.plat(1800, 500, 1000, 100)
	w.plat(1900, 200, 600, 100)
	w.p(300, -100)
	T.t(function () {
		w.left(4)
		if (p.Y() > 2000) {
			p.XY(300, -300)
		} //comeback
		if (b2d.onG) {
			if ($.K.u) {
				p.jumping(180, 30)
			}
			else {
				p.byVel(40)
			}
		}
		else {
			p.byImp(10)
		}
	})
	w.D(800, 100, 'r', 50, 50).bS('guy')
}
 