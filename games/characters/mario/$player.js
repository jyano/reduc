b.polBu = b.polyBul = function () {
	alert('b.polBu polyBul')
	var b = this, w = b.W(), v, pt, bu
	v = b.vec(-20)
	pt = b.wP(0, -50)
	bu = w.polBu(pt.x, pt.y, 4, 4, 'w').d(1).lD(0).lV(v)
	return bu.K('polBu')
}
b2d.cn.sl = b2d.cn.slidey = function (p) {
	alert('slidy')
	var k = $.K
	if (p.onG) {
		if (k.u) {
			if (k.r) {
				p.I(20, -60)
			}
			else if (k.l) {
				p.I(-20, -60)
			}
			else {
				p.I(0, -100)
			}
		}
		else {
			if (k.l) {
				p.dir(0);
				p.I(-20, 0)
			}
			if (k.r) {
				p.dir(1);
				p.I(20, 0)
			}
		}
	}
	else {
		if (k.l) {
			p.dir(0);
			p.I(-10, 0)
		}
		if (k.r) {
			p.dir(1);
			p.I(10, 0)
		}
	}
	/*
	
	 p.I(p.onG&&k.u ? V(0, -70)
	
	 : k.r ? V(30, 0)
	 : k.l ? V(-30, 0)
	 : V(0, 0)  )*/
	return p
}
b2d.cn.h = b2d.cn.hop = function (p) {
	alert('hop')
	var k = $.K
	if (p.onGround) {
		if (k.l) {
			p.I(-30, -120)
		}
		if (k.r) {
			p.I(30, -120)
		}
	}
	else {
		if (k.d) {
			p.I(0, 20)
		}
	}
}
b2d.cn.power = function (p) {
	alert('power')
	var K = $.K
	if (K.u) {
		p.I(0, -45)
	}
	if (K.l) {
		p.I(-20, 0)
	}
	if (K.r) {
		p.I(20, 0)
	}
}
b2d.cn.powX = function (p) {
	alert('powX')
	var K = $.K
	if (K.u) {
		p.I(0, -4500)
	}
	if (K.l) {
		p.I(-2000, 0)
	}
	if (K.r) {
		p.I(2000, 0)
	}
	if (K.d) {
		p.I(0, 4500)
	}
}
b.diffx = b.difx = function (x, y) {
	alert('b.diffx difx')
	var b = this// compare with DIF  - achtung!
	return {
		x: x - b.X(),
		y: y - b.Y()
	}
}
w.p1 = w.player1 = function (x, y, sc, cn) {
	alert('w.p1 player1')
	var w = this, g = G(arguments), p,
			o = g.S_ ?
			{cn: g.f} :
					N(g.t) ? {x: g.f, y: g.s, sc: g.t, cn: g[3]} :
					{x: g.f, y: g.s, cn: g.t}
	o.x = N(o.x, w.hW)
	o.y = N(o.y, w.hH)
	o.sc = N(o.sc, 4)
	p = w.me(o.x, o.y, o.sc)
	if (g.p) {
		p.track()
	}
	p.cn(o.cn)
	p.speed = 40
	p._dir = 'r'
	p.dir = function (d) {
		var p = this
		if (U(d)) {
			return p._dir
		}
		p._dir = d;
		return p
	}
	p.moveInDir = function () {
		var p = this, g = G(arguments)
		if (g.n) {
			return p.move(-p.speed)
		}
		//n = _.tN(g[0], p.speed)// ?
		if (p.dir()) {
			p.I(3, 0)
		} else {
			p.I(-3, 0)
		}
		return p
	}
	p.SetBullet(true)
	w.cl('feet',
			function (f) {
				if (!f.sen()) {
					p.onG = 1
				}
			}
	)
	w.end(function (cx) {
		cx.w('feet', function (f) {
			if (!f.sen()) {
				p.onG = 0
			}
		})
	})
	$.testJump = 1
	if ($.testJump) {
		T.t(function () {
			if (p.onG) {
				$l('onG')
			}
			else {
				$l('in air')
			}
		})
		w.show(function () {
			return p.onG
		})
	}
	T.t(function () {
		p.I(0, 500)
	})
	return p
}
b.jumping = function (y, x) {
	alert('b.jumping')
	var b = this, k = $.K
	if (k.u) {
		if (k.r) {
			b.lV(x, -(y - x))
		}
		else if (k.l) {
			b.lV(-x, -(y - x))
		}
		else {
			b.lV(0, -y)
		}
	}
	return b
}
b.arrowMove = function () {
	alert('b.arrowMove')
	var b = this
	$.key({
		l: function () {
			b.dir('l').move()
		},
		r: function () {
			b.dir('r').move()
		},
		u: function () {
			if (b.dir() == 'l') {
				b.I(5, -12)
			}
			else if (b.dir() == 'r') {
				b.I(-5, -12)
			}
		}
	})
	return b
}
b.pWarping = function () {
	alert('b.pWarping')
	var p = this, b = this
	cjs.t(function () {
		if (p.Y() < 0) {
			p.Y(300)
		}
		if (p.Y() > 300) {
			p.Y(0)
		}
		if (p.X() < 0) {
			p.X(600)
		}
		if (p.X() > 600) {
			p.X(0)
		}
	})
	return b
}
//w.left and w.up move all objects in world
//i think only used in 1 game (talk?)
//end allert
w.up = function (n) {
	alert('w.up')
	var w = this;
	n = N(n, 4)
	w.e(function (b) {
		b.Y(n, '-')
	})
}//=w.vert
b.thr = function () {
	alert('b.thr')
	this.cn('thrust')
}
b2d.cn.jet = function (p) {
	alert('jet')
	var k = $.K, vec = p.GetWorldVector(V(0, -100))
	p.fixRot()
	if (k.left) {
		p.rot(8, '-').I(0, -5)
	}
	if (k.right) {
		p.rot(8, '+').I(0, -5)
	}
	p.I(
			k.up ? vec.div(1) : k.down ? vec.div(-100) : V(0, 0)
	)
}
b.moveInCircle = function (rad, speed) {
	var g = G(arguments), rad = N(g[0]) ? g[0] : 100,
			speed = N(g[1]) ? g[1] : 2,
			toRad = Math.toRadians, cos = Math.cos, sin = Math.sin,
			b = this,
			ang = 0,
			x = b.X(),
			y = b.Y(),
			bX,
			bY
	cjs.tick(function () {
		ang += toRad(speed)
		bX = rad * cos(ang)
		bY = rad * sin(ang)
		if (g.p) {
			bY *= 2
		}
		if (g.n) {
			bX *= 2
		}
		b.XY(bX + x, bY + y)
	})
	return this
}
//b.relPos=function(){return this.X() + this.stg().X()}
b.byI = b.byImp = function (i) {
	var k = cjs.Keys
	if (k.right) {
		this.I(i, 0)
	}
	else if (k.left) {
		this.I(-i, 0)
	}
	return this
}
b.byV = b.byVel = function (v) {
	var k = cjs.Keys
	if (k.right) {
		p.lV(v, 0)
	}
	else if (k.left) {
		p.lV(-v, 0)
	}
	return this
}
//move towards x,y (or body?)
b.towards = function (x, y, speed) {  //if(isBody(x)){return self(x.X(), x.Y(), y)}
	speed = !N(speed) ? 5 : speed > 10 ? 10 : speed
	speed = (11 - speed) * 20
	var b = this,
			lV = V(
					x - b.X(),
					y - b.Y()
			).div(speed)
	return this.lV(lV)
	//more realistic to accelerate, via forces?
}
TOWARDS = function () {
	w = b2d.W({g: 0})
	b = w.B(500, 300, 100)
	y = w.ship()
	cjs.tick(function () {
		b.towards(y.X(), y.Y(), 9)
	})
}
b.marioJumping = function () {
	var p = this, k = cjs.Keys
	p.fixRot().trig('feet')
	cjs.tick(function () {
		if (p.trig.feet && k.up) {
			if (k.right) {
				p.lV(20, -60)
			}
			else if (k.left) {
				p.lV(-20, -60)
			}
			else {
				p.lV(0, -80)
			}
		}
		if (k.right) {
			p.lV(40, -10)
		} else if (k.left) {
			p.lV(-40, 10)
		}
		if (k.down) {
			p.trig.feet = 'true'
			p.I(0, 20)
		}
	})
	return this
}
b.jumping = function (y, x) {
	var k = cjs.Keys
	if (k.up) {
		if (k.right) {
			this.lV(x, -(y - x))
		}
		else if (k.left) {
			this.lV(-x, -(y - x))
		}
		else {
			this.lV(0, -y)
		}
	}
	return this
}
b.polyBul = function () {
	var vec = this.GetWorldVector(V(0, -100)),
			point = this.worldPoint(0, -50)
	bullet = this.W()
			.polyBul(point.x, point.y, 4, 4, 'w')
			.den(1)
			.lD(0)
			.lV(vec.div(5))
	w.end(function (cx) {
		cx.destroyIf('polyBul')
	})
	return bullet.K('polyBul')
}
b.thrustify = function () {
	var p = this //takes a spritebox!//uses cjs.watchKeys()
	this.angDamp(.5)
	cjs.Keys({
		l: function () {
			p.rot(8, '-')
		},
		r: function () {
			p.rot(8, '+')
		},
		d: function () {
			p.I().p('thrust')
		},
		u: function () {
			p.p('shoot')
		}
	})
	return this
}
b.thrustControl = function () {
	var body = this
	cjs.tick(function () {
		b2d.controls.thrust(body)
	})
	return body
}
b.shoot = function () {
	var vec, bullet
	bullet = this.wor().bullet(abovePlayerGlobally(this)).bindSprite('me', 0.15)
	vec = this.GetWorldVector(V(0, -100))
	bullet.I(vec.div(20))
}
b.bindKeyboard = function (cont) { //p.moveListener=
	var that = this
	control = (b2d.controls[cont] || b2d.controls.trickJump )
	control()
	cjs.tick(function () {
		that.rot(0)
		that.world().each(
				function (body) {
					if (body.is('destroy')) {
						body.destroy()
					}
				}
		)
	})
}  //b.warpToTopLeft=function(){ return this.XY(200, 100)}
b.controlMe = function (control) {
	var that = this
	cjs.tick(function () {
		b2d.controls[control || 'standard'](that)
	})
	return this
}
b.marioWarping = function () {
	var p = this
	cjs.tick(function () {
		if (p.Y() < 0) {
			p.Y(300)
		}
		if (p.Y() > 300) {
			p.Y(0)
		}
		if (p.X() < 0) {
			p.X(600)
		}
		if (p.X() > 600) {
			p.X(0)
		}
	})
	return this
}
w.webMe = function (x, y) {
	sw = cjs.stopWatch()
	var p = this.addMe(4).XY(x, y).rest(0).den(.1).fric(100).fixRot().K('player')
	p.isConnected = function () {
		var res, that = this
		if (!A(this.webs)) {
			return false
		}
		res = _.findWhere(that.webs, {connected: true})
		return true && res && true
	}
	p.bulRight = function (x, y) {
		var bul = this.wor().circ(this.X() + 80, this.Y() - 20, 6, 'w')
		if (N(y)) {
			bul.I(x, y)
		}
		return this
	}
	p.bulLeft = function (x, y) {
		var bul = this.wor().circ(this.X() - 80, this.Y() - 20, 6, 'w')
		if (N(y)) {
			bul.I(x, y)
		}
		return this
	}
	p.getTime = function () {
		var p = this, time = p.shotClock()
		p.shotClock.reset()
		return time
	}
	p.getForce = function () {
		var time = p.getTime(),
				force = (time > 2500) ? 2000 : (time > 500) ? time - 500 : 0
		force = force / 30
		if (force > 66) {
			force = 66
		}
		return force
	}
	p.shootRight = function () {
		var force = this.getForce(),
				iX = 100 - (force * 1.5),
				iY = -force
		//$l('time: ' + time + ' - force: ' + force.toFixed(2) + '- iX: ' + iX.toFixed(2) + ', iY: '+ iY.toFixed(2))
		this.bulRight(iX, iY)
	}
	p.shootLeft = function () {
		var force = this.getForce(),
				iX = -100 + (force * 1.5),
				iY = -force
		//$l('time: ' + time + ' - force: ' + force.toFixed(2) + '- iX: ' + iX.toFixed(2) + ', iY: '+ iY.toFixed(2))
		this.bulLeft(iX, iY)
	}
	return p
}
 b.warp = b.warp2 = function (p) {
	var p = this
	cjs.tick(function () {
		if (p.Y() < 0) {
			p.Y(600)
		}
		if (p.Y() > 600) {
			p.Y(0)
		}
		if (p.X() < 0) {
			p.X(1200)
		}
		if (p.X() > 1200) {
			p.X(0)
		}
	})
	return this
}
b.mario = function () {
	var b = this
	b.canJump = true
	b.onGround = false
	b.fixRot()
	cjs.tick(function () {
		var k = cjs.Keys
		if (b.onGround) {// if on ground
			if (k.up) {// if jumping
				if (b.canJump == true) {
					b.p('jump').I(0, -44);
					b.canJump = false
				}
			}
			else { // if not jumping
				if (k.left) {
					b.I(-20, 0)
				} // p.dir(0)
				if (k.right) {
					b.I(20, 0)
				}
			}
		} //p.dir(1)
		else {// if in air !!!
			if (k.left) {
				b.dir(0);
				b.I(-1, 0)
			}
			if (k.right) {
				b.dir(1);
				b.I(1, 0)
			}
		}
	})
	b.wor().beg(function () {  // ???
		b.canJump = true
		b.p('walk')
	})
	return this
}
b.arrowMove = function () {
	var body = this
	$.key({
		l: function () {
			body.dir('left').move()
		},
		r: function () {
			body.dir('right').move()
		},
		u: function () {
			if (body.dir() == 'left') {
				body.I(5, -12)
			}
			else if (body.dir() == 'right') {
				body.I(-5, -12)
			}
		}
	})
	return this
}
 

	w.P = function (x, y) {
		var w = this
		x = N(x) ? x : 300
		y = N(y) ? y : 500
		p = w.jumper(x, y)
		return w
	}

b.polBu = b.polyBul = function () {
	alert('b.polBu polyBul')
	var b = this, w = b.W(), v, pt, bu
	v = b.vec(-20)
	pt = b.wP(0, -50)
	bu = w.polBu(pt.x, pt.y, 4, 4, 'w').d(1).lD(0).lV(v)
	return bu.K('polBu')
}
b2d.cn.sl = b2d.cn.slidey = function (p) {
	alert('slidy')
	var k = $.K
	if (p.onG) {
		if (k.u) {
			if (k.r) {
				p.I(20, -60)
			}
			else if (k.l) {
				p.I(-20, -60)
			}
			else {
				p.I(0, -100)
			}
		}
		else {
			if (k.l) {
				p.dir(0);
				p.I(-20, 0)
			}
			if (k.r) {
				p.dir(1);
				p.I(20, 0)
			}
		}
	}
	else {
		if (k.l) {
			p.dir(0);
			p.I(-10, 0)
		}
		if (k.r) {
			p.dir(1);
			p.I(10, 0)
		}
	}
	/*
	
	 p.I(p.onG&&k.u ? V(0, -70)
	
	 : k.r ? V(30, 0)
	 : k.l ? V(-30, 0)
	 : V(0, 0)  )*/
	return p
}
b2d.cn.h = b2d.cn.hop = function (p) {
	alert('hop')
	var k = $.K
	if (p.onGround) {
		if (k.l) {
			p.I(-30, -120)
		}
		if (k.r) {
			p.I(30, -120)
		}
	}
	else {
		if (k.d) {
			p.I(0, 20)
		}
	}
}
b2d.cn.power = function (p) {
	alert('power')
	var K = $.K
	if (K.u) {
		p.I(0, -45)
	}
	if (K.l) {
		p.I(-20, 0)
	}
	if (K.r) {
		p.I(20, 0)
	}
}
b2d.cn.powX = function (p) {
	alert('powX')
	var K = $.K
	if (K.u) {
		p.I(0, -4500)
	}
	if (K.l) {
		p.I(-2000, 0)
	}
	if (K.r) {
		p.I(2000, 0)
	}
	if (K.d) {
		p.I(0, 4500)
	}
}
b.diffx = b.difx = function (x, y) {
	alert('b.diffx difx')
	var b = this// compare with DIF  - achtung!
	return {
		x: x - b.X(),
		y: y - b.Y()
	}
}
w.p1 = w.player1 = function (x, y, sc, cn) {
	alert('w.p1 player1')
	var w = this, g = G(arguments), p,
			o = g.S_ ?
			{cn: g.f} :
					N(g.t) ? {x: g.f, y: g.s, sc: g.t, cn: g[3]} :
					{x: g.f, y: g.s, cn: g.t}
	o.x = N(o.x, w.hW)
	o.y = N(o.y, w.hH)
	o.sc = N(o.sc, 4)
	p = w.me(o.x, o.y, o.sc)
	if (g.p) {
		p.track()
	}
	p.cn(o.cn)
	p.speed = 40
	p._dir = 'r'
	p.dir = function (d) {
		var p = this
		if (U(d)) {
			return p._dir
		}
		p._dir = d;
		return p
	}
	p.moveInDir = function () {
		var p = this, g = G(arguments)
		if (g.n) {
			return p.move(-p.speed)
		}
		//n = _.tN(g[0], p.speed)// ?
		if (p.dir()) {
			p.I(3, 0)
		} else {
			p.I(-3, 0)
		}
		return p
	}
	p.SetBullet(true)
	w.cl('feet',
			function (f) {
				if (!f.sen()) {
					p.onG = 1
				}
			}
	)
	w.end(function (cx) {
		cx.w('feet', function (f) {
			if (!f.sen()) {
				p.onG = 0
			}
		})
	})
	$.testJump = 1
	if ($.testJump) {
		T.t(function () {
			if (p.onG) {
				$l('onG')
			}
			else {
				$l('in air')
			}
		})
		w.show(function () {
			return p.onG
		})
	}
	T.t(function () {
		p.I(0, 500)
	})
	return p
}
b.jumping = function (y, x) {
	alert('b.jumping')
	var b = this, k = $.K
	if (k.u) {
		if (k.r) {
			b.lV(x, -(y - x))
		}
		else if (k.l) {
			b.lV(-x, -(y - x))
		}
		else {
			b.lV(0, -y)
		}
	}
	return b
}
b.arrowMove = function () {
	alert('b.arrowMove')
	var b = this
	$.key({
		l: function () {
			b.dir('l').move()
		},
		r: function () {
			b.dir('r').move()
		},
		u: function () {
			if (b.dir() == 'l') {
				b.I(5, -12)
			}
			else if (b.dir() == 'r') {
				b.I(-5, -12)
			}
		}
	})
	return b
}
b.pWarping = function () {
	alert('b.pWarping')
	var p = this, b = this
	cjs.t(function () {
		if (p.Y() < 0) {
			p.Y(300)
		}
		if (p.Y() > 300) {
			p.Y(0)
		}
		if (p.X() < 0) {
			p.X(600)
		}
		if (p.X() > 600) {
			p.X(0)
		}
	})
	return b
}
//w.left and w.up move all objects in world
//i think only used in 1 game (talk?)
//end allert
w.up = function (n) {
	alert('w.up')
	var w = this;
	n = N(n, 4)
	w.e(function (b) {
		b.Y(n, '-')
	})
}//=w.vert
b.thr = function () {
	alert('b.thr')
	this.cn('thrust')
}
b2d.cn.jet = function (p) {
	alert('jet')
	var k = $.K, vec = p.GetWorldVector(V(0, -100))
	p.fixRot()
	if (k.left) {
		p.rot(8, '-').I(0, -5)
	}
	if (k.right) {
		p.rot(8, '+').I(0, -5)
	}
	p.I(
			k.up ? vec.div(1) : k.down ? vec.div(-100) : V(0, 0)
	)
}
function walking(){
	b.moveRight = function () {
		var b = this
		b.direction = 'right'
		b.x += b.speed
		return b
	}
	b.walk = function () {
		var b = this
		$t(tick)
	}
	msPassed = function () {
	}
	function tick() {
		if (b.direction === 'right') {
			b.x += b.speed
		}
	}
	
	b.stopWalking = function () {
		var b = this
		b.direction = null
		return b
	}
}