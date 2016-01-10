w.yShipEquilateral = function (color, x, y, scale) {
	alert('w.yShipEquilateral')
	var halfSide, side, ship
	if (!S(color)) {
		scale = y;
		y = x;
		x = color;
		color = 'y'
	}
	color = oO('c', color)
	scale = N(scale) ? scale : 4
	halfSide = scale * 4
	side = halfSide * 2
	ship = this.dyn(x, y)
	ship.convex(color, [[-side, halfSide], [0, -side], [side, halfSide]])
	ship.poly(4, 20, 0, -side)  //w,h,x,y ..is that my preferred pam order? other places have x,y come first.. no?
	// ship.bindSprite2(  w.s.poly( 0,-side,   4,20, 'b'))
//        ship.bindSprite2(   cjs.rect(4,20,'o').XY(0,-side)    )
	/////////////
	ship.dir = function () {
		return this.wVec()
	}
	//methods
	ship.push = function (n) {
		var k, dir
		n = N(n) ? n : 1
		k = 0.1
		dir = this.wVec()
		this.I(
				dir.x * n * k,
				dir.y * n * k
		);
		return this
	}
	ship.chug = function (n) {
		var that = this
		I(function () {
			that.push(n)
		}, 100)
		return this
	}
	ship.going = function () {
		var lv = this.lV(), x = lv.x, y = lv.y, a = this.aV()
		return (M.abs(x) > 0.5) || (M.abs(y) > 0.5) || ( M.abs(a) > 0.5)
	}
}
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
	var w = this, g = G(arguments), hS, side, ship, y, o
	o = g.O ? g.f :  //pass opOb
		//pass {c='y'}, x=100, y=100, sc=4
			g.S_ ? {c: g.f, x: g.s, y: g.t, sc: g[3]} :
			{x: g.f, y: g.s, sc: g.t}
	o.c = o.c || 'y';
	o.sc = N(o.sc, 4);
	o.x = N(o.x, 100);
	o.y = N(o.y, 100)
	y = makeShip(o.x, o.y, o.sc * 4, o.c)
	y.push = function (frc) {
		$l('y.push')
		var y = this, g = G(arguments)
		frc = N(g.f, 1)
		ev = .5
		if (g.p) {
			_.ev(ev
					, function () {
						y.push(frc)
					})
		}
		else {
			y.I(y.vec().m(frc * 40))
		}
		return y
	}
	y.going = function () {
		var y = this,
				lv = y.lV()
		return M.a(lv.x) > 0.5 || M.a(lv.y) > 0.5 || M.a(y.aV()) > 0.5
	}
	if (!g.n) {
		y.cn('thrust')
	}
	y.shtSp()
	if (g.p) {
		y.tr()
	}
	return y.K('ship yip y').aD(0).r(.8)
	function makeShip(x, y, hS, c) {
		var side = hS * 2, y
		y = w.D(x, y)
		y.pol(oO('c', c), [
			[-hS, hS], [0, -side * 2], [hS, hS]
		])
		y.fixedRot(false)
		y.SetBullet(true)
		return y
	}
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
w.y = w.ship = function () {
	var w = this, g = G(arguments), hS, side, ship, y, o
	o = g.O ? g.f :  //pass opOb
		//pass {c='y'}, x=100, y=100, sc=4
			g.S_ ? {c: g.f, x: g.s, y: g.t, sc: g[3]} :
			{x: g.f, y: g.s, sc: g.t}
	o.c = o.c || 'y';
	o.sc = N(o.sc, 4);
	o.x = N(o.x, 100);
	o.y = N(o.y, 100)
	y = makeShip(o.x, o.y, o.sc * 4, o.c)
	y.push = function (frc) {
		$l('y.push')
		var y = this, g = G(arguments)
		frc = N(g.f, 1)
		ev = .5
		if (g.p) {
			_.ev(ev
					, function () {
						y.push(frc)
					})
		}
		else {
			y.I(y.vec().m(frc * 40))
		}
		return y
	}
	y.going = function () {
		var y = this,
				lv = y.lV()
		return M.a(lv.x) > 0.5 || M.a(lv.y) > 0.5 || M.a(y.aV()) > 0.5
	}
	if (!g.n) {
		y.cn('thrust')
	}
	y.shtSp()
	if (g.p) {
		y.tr()
	}
	return y.K('ship yip y').aD(0).r(.8)
	function makeShip(x, y, hS, c) {
		var side = hS * 2, y
		y = w.D(x, y)
		y.pol(oO('c', c), [
			[-hS, hS], [0, -side * 2], [hS, hS]
		])
		y.fixedRot(false)
		y.SetBullet(true)
		return y
	}
}
$L('boxBul', 'controls', 'spazBul', 'worVec', 'aiTrack')
 
YELLOWSHIP = YEL = function () {
	W({g: 3})
	yellow()
	_.in(5, function () {
		w.C('v')
		_.ev(1, yellow)
	})
	function yellow() {
		y = w.yShip(300, 400, 3).rt(90)
		y1 = w.yShip(600, 400, 3).rt(90)
		_.in(.5, onTime)
	}
	
	function onTime() {
		y.I(0, -4);
		y1.I(4, 0)
	}
	
	function onInt() {
		y.I(0, -.7).rt(4, '+');
		y1.lV(0, -3).rt(4, '+')
	}
}
 
function worVec() {
	b.vec = b.v = function () {
		var b = this, g = G(arguments), o, vec
		o = g.O ? g.f :
				g.s ? {x: g.f, y: g.s} : //this not error
				{y: g.f}
		vec = V(N(o.x, 0), N(o.y, -1))
		return b.GetWorldVector(vec)
	}//the current direction of that vector in world coordinates
	b.vec = b.v = function () {
		var b = this, g = G(arguments), o, vec
		o = g.O ? g.f :
				g.s ? {x: g.f, y: g.s} : //this not error
				{y: g.f}
		vec = V(N(o.x, 0), N(o.y, -1))
		return b.GetWorldVector(vec)
	}//the current direction of that vector in world coordinates
	b.GWV = function (vec) {
		return this.GetWorldVector(vec)
	}
	b.gWV = function (vec) {
		return this.GetWorldVector(vec || V(0, -1))
	}
	b.vec = b.wVec = b.wV = b.worVec = b.worldVec = function (v, y) {
		y = N(y) ? V(v, y) : v
		return this.gWV(y)
	}
	b.gWV = function (vec, y) {
		vec = O(vec) ? vec : V(vec, y)
		return this.GetWorldVector(vec)
	}
	G.vec = function (g) {
		var o = g.O ? g.f : g.s ? {x: g.f, y: g.s} : //this not error
		{y: g.f}
		o.x = N0(o.x)
		o.y = N(o.y, -1)
		return o
	}
	b.vec = b.v = function () {
// the current direction of that vector in world coordinates
		var g = G(arguments)
		var vec = G.vec(g)
		return this.gWV(vec)
	}
	v.tD = function () {
		var v = this
		return V(M.tD(v.x), M.tD(v.y))
	}
	w.arm = function () {
		w.S(300, 300, 20, 200);
		var arm = w.S(300, 300, [['b', 200, 50, 100, 0]]);
		_.ev(.1, function () {
			arm.rt(1, '+')
		})
		return arm
	}
	STUM = BVEC = function () {
		W({g: 3})
		y = w.y(300, 400, 3, '-')
		_.ev(.1, function () {
			var vec = y.vec(0, 1.5).tD()
			y.I(0, vec.y / 5)
			y.rt(2, '+')
		})
		w.arm()
	}
} 

SHIP = function () {
	W(10).Y()
	_.t(20, function () {
		w.S(R(500), R(500), $r(), 20)
	})
}
GROUPTCO = COLSHIP = function () {
	W().G(1)//.C('z').pen('welcome to tensor (damping) controller - the timing here is amazing!')
	y = w.y()
	co = w.tCo()
	co.B(
			r = w.D(100, 100, 'r', 100).lV(10, 20).grp(-1).lD(.2),
			b = w.D(500, 500, 'b', 90).lV(-10, -20).grp(-1).lD(.2),
			y = w.D(300, 300, 'y', 70).lV(-10, -20).grp(-1).lD(.2)
	)
	o = w.D(300, 300, 'o', 70).lV(-10, -20).grp(-1).lD(.2)
	_.t(30, function () {
		var b = w.D(400, R(300, 100), 'o', 20)
		b.lV(10, 20).lD(0)
		b.lV(10, 20)
		b.f().grp(-1)
		co.B(b)
	})
	y.grp('-1')
	w.r_.cl(function (f) {
		f.C('b');
		co.xB(f)
	})
	l = w.m_controllerList.GetBodyList()
}
COLLIDE = BULLETS = BUL = function () {
	W({g: 0}).C('z')
	w.D(200, 200, 'b', 80).d(1).K('bad')
	w.D(200, 200, 'r', 150, 150).d(1).K('bad')
	_.t(5, function () {
		w.y('b', R(500, 50), R(500, 50))
	})
	w.b(function (cx) {
		cx.w('ship', 'bul', function (bul, cx) {
			this.kill()
		})
	})
	w.cl('bul', 'bad', function (b) {
		this.B() && this.B().kill()
		b.B() && b.B().kill()
	})
}
YIPPY = function () {
	_.ev(1, function () {
		W({g: 4})
		y = w.y(300, 400, 3, '-').rt(90)
		y1 = w.y(600, 400, 3, '-').rt(90)
		_.ev(1.5, function () {
			y.I(0, -.7).rt(4, '+')
			y1.I(4, 0).lV(0, -3).rt(4, '+')
		})
	})
	//ok this is crazy cool.. but something is wrong.
	// something is not getting reset,
	// because force gets bigger each time
}
OBST = OBSTACLES = function () {
	W(10).Y()
	_.t(20, function () {
		w.S(R(500), R(500), $r(), 20)
	})
}
OBST = OBSTACLES = function () {
	W(10).Y()
	_.t(20, function () {
		w.S(R(500), R(500), $r(), 20)
	})
}
BIG = BIGSHIP = function () {
	W([1200, 600, 2400, 600], {g: 0})
	w.y({
		c: 'b',
		sc: 20
	}, '+')
}
BIG = BIGSHIP = function () {
	W([1200, 600, 2400, 600], {g: 0})
	w.y({
		c: 'b',
		sc: 20
	}, '+')
}
COLSHIP = function () {
	W().G(1)//.C('z').pen('welcome to tensor (damping) controller - the timing here is amazing!')
	y = w.y()
	co = w.tCo()
	co.B(
			r = w.D(100, 100, 'r', 100).lV(10, 20).grp(-1).lD(.2),
			b = w.D(500, 500, 'b', 90).lV(-10, -20).grp(-1).lD(.2),
			y = w.D(300, 300, 'y', 70).lV(-10, -20).grp(-1).lD(.2)
	)
	o = w.D(300, 300, 'o', 70).lV(-10, -20).grp(-1).lD(.2)
	_.t(30, function () {
		var b = w.D(400, R(300, 100), 'o', 20)
		b.lV(10, 20).lD(0)
		b.lV(10, 20)
		b.f().grp(-1)
		co.B(b)
	})
	y.grp('-1')
	w.r_.cl(function (f) {
		f.C('b');
		co.xB(f)
	})
	l = w.m_controllerList.GetBodyList()
}
COLSHIP = function () {
	W().G(1)//.C('z').pen('welcome to tensor (damping) controller - the timing here is amazing!')
	y = w.y()
	co = w.tCo()
	co.B(
			r = w.D(100, 100, 'r', 100).lV(10, 20).grp(-1).lD(.2),
			b = w.D(500, 500, 'b', 90).lV(-10, -20).grp(-1).lD(.2),
			y = w.D(300, 300, 'y', 70).lV(-10, -20).grp(-1).lD(.2)
	)
	o = w.D(300, 300, 'o', 70).lV(-10, -20).grp(-1).lD(.2)
	_.t(30, function () {
		var b = w.D(400, R(300, 100), 'o', 20)
		b.lV(10, 20).lD(0)
		b.lV(10, 20)
		b.f().grp(-1)
		co.B(b)
	})
	y.grp('-1')
	w.r_.cl(function (f) {
		f.C('b');
		co.xB(f)
	})
	l = w.m_controllerList.GetBodyList()
}
TRAB = function () {
	w = b2d.W({g: 0}).debug();
	co = w.tensor();
	//  _.times(100, function(){co.body(w.circ(400,300, 15, 'w').lV(10,20).linDamp(0))})
	y = w.ship()
	rot = 45
	bg = w.yShip('blue', 500, 300).stat()
	bg.rotToVec = function (vec) {
		var wVec = bg.worldVec(vec),
				rot = vec.x / vec.y
		rot = 360 - (Math.abs(rot) * 10)
		$l(rot)
		this.rot(rot)
		return this
	}
	bg.rotTowardsShip = function () {
		var yX = y.X(), yY = y.Y(),
				bgX = bg.X(), bgY = bg.Y(),
				dX = bgX - yX,
				dY = bgY = yY,
				vec = V(dX, dY)
		this.rotToVec(vec)
	}
	cjs.tick(function () {
		bg.rotTowardsShip()
	})
}
STAB = function () {
	W({g: 0})
	w.S(200, 200, 'b', 50, 260)
	w.S(140, 200, 'd', 140, 50)
	co = w.tCo();
	_.t(10, function () {
		co.B(
				w.D(R(1000, 100), 300, 'x', 30).lV(10, 20).lD(0))
	})
	hits = 0
	y = w.y().K('ship').lD(5)
	bg = w.y('b', 500, 300, '-').d(3).lD(2).K('bg').aD(.2)
	bg.rotTowards = function (y) {
		var b = this, a
		a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
		if (y.Y() > b.Y()) {
			a += 180
		}
		b.rt(R(40, a - 20))
	}
	_.ev(.5, function () {
		bg.aV(0);
		bg.rotTowards(y)
	})
	bg.push(50, '+')
	T.t(function () {
		_.t(20, function () {
			bg.I()
		})
	})
	w.b(function (cx) {
		var i
		if (cx.w('ship', 'bg')) {
			i = cx.m().m_points[0].m()
			_.in(.1,
					(
					M.lD(V(i.x, i.y), V(y.X(), y.Y())) >
					M.lD(V(i.x, i.y), V(bg.X(), bg.Y()))
					) ?
							function () {
								hits++;
								w.C('g');
								bg.XY(300, 300);
								y.XY(700, 400)
							}
							:
							function () {
								w.C('p');
								bg.XY(700, 400);
								y.XY(100)
							})
		}
	})
	//w.show(function(){return 'hits: '+ hits})
}
STAB = function () {
	W({g: 0})
	w.S(200, 200, 'b', 50, 260)
	w.S(140, 200, 'd', 140, 50)
	co = w.tCo();
	_.t(10, function () {
		co.B(
				w.D(R(1000, 100), 300, 'x', 30).lV(10, 20).lD(0))
	})
	hits = 0
	y = w.y().K('ship').lD(5)
	bg = w.y('b', 500, 300, '-').d(3).lD(2).K('bg').aD(.2)
	bg.rotTowards = function (y) {
		var b = this, a
		a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
		if (y.Y() > b.Y()) {
			a += 180
		}
		b.rt(R(40, a - 20))
	}
	_.ev(.5, function () {
		bg.aV(0);
		bg.rotTowards(y)
	})
	bg.push(50, '+')
	T.t(function () {
		_.t(20, function () {
			bg.I()
		})
	})
	w.b(function (cx) {
		var i
		if (cx.w('ship', 'bg')) {
			i = cx.m().m_points[0].m()
			_.in(.1,
					(
					M.lD(V(i.x, i.y), V(y.X(), y.Y())) >
					M.lD(V(i.x, i.y), V(bg.X(), bg.Y()))
					) ?
							function () {
								hits++;
								w.C('g');
								bg.XY(300, 300);
								y.XY(700, 400)
							}
							:
							function () {
								w.C('p');
								bg.XY(700, 400);
								y.XY(100)
							})
		}
	})
	//w.show(function(){return 'hits: '+ hits})
}
STAB = function () {
	W({g: 0})
	w.S(200, 200, 'b', 50, 260)
	w.S(140, 200, 'd', 140, 50)
	co = w.tCo();
	_.t(10, function () {
		co.B(
				w.D(R(1000, 100), 300, 'x', 30).lV(10, 20).lD(0))
	})
	hits = 0
	y = w.y().K('ship').lD(5)
	bg = w.y('b', 500, 300, '-').d(3).lD(2).K('bg').aD(.2)
	bg.rotTowards = function (y) {
		var b = this, a
		a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
		if (y.Y() > b.Y()) {
			a += 180
		}
		b.rt(R(40, a - 20))
	}
	_.ev(.5, function () {
		bg.aV(0);
		bg.rotTowards(y)
	})
	bg.push(50, '+')
	T.t(function () {
		_.t(20, function () {
			bg.I()
		})
	})
	w.b(function (cx) {
		var i
		if (cx.w('ship', 'bg')) {
			i = cx.m().m_points[0].m()
			_.in(.1,
					(
					M.lD(V(i.x, i.y), V(y.X(), y.Y())) >
					M.lD(V(i.x, i.y), V(bg.X(), bg.Y()))
					) ?
							function () {
								hits++;
								w.C('g');
								bg.XY(300, 300);
								y.XY(700, 400)
							}
							:
							function () {
								w.C('p');
								bg.XY(700, 400);
								y.XY(100)
							})
		}
	})
	//w.show(function(){return 'hits: '+ hits})
}
w.Y = function () {
	var w = this, g = G(arguments)
	y = $a(w, 'y', g)
	if (g.p) {
		y.track()
	}
	return w
}
w.Y = function () {
	var w = this, g = G(arguments)
	y = $a(w, 'y', g)
	if (g.p) {
		y.track()
	}
	return w
}
w.Y = function () {
	var w = this, g = G(arguments)
	y = $a(w, 'y', g)
	if (g.p) {
		y.track()
	}
	return w
}
 
w.C = function (color) {
	var w = this
	$(w.st.canvas).C(color)
	return w
}
//w.circ(200,130, 6).stat()
//w.circ(100,200, 6).stat()
//iceGround(  800   )
// grassGround(  300   )
/// 0:1,  300:1.1, 600:1.2
//  cjs.Tween.get(w.s).to({scaleX:1.3,scaleY:1.3}, 2000).to({scaleX:.7,scaleY:.7}, 6000).to({scaleX:1,scaleY:1}, 3000)
//cjs.Tween.removeAllTweens()
// w.st.tween(  [{x: p.dif().x},  000]   )
// w.st.tween(  [{y: p.dif().y},  1000]   )
//  cjs.Tween.get(w.s, {override:true}).to({y: p.dif().y}, 5000)
// cjs.Tween.get(w.s , {override:true}  ).to({  y: p.dif().y * w.st.scaleY }, 2000)
function tCont() {
	TCOYIP = function () {
		W().Y()
		co = w.tCo()
		_.t(3, function () {
			co.B(w.y('z', R(500, 50), R(300, 50), '-').lV(10, 20).lD(0))
		})
	}
}