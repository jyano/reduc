jd = joint = b2d.Joints.b2RevoluteJointDef.prototype
//just a shortcut to call initialze.  have i ever even done that?  laaaame waaah waaaaah
jd.init = joint.i = function () {
	this.Initialize.apply(this, G(arguments))
	return this
}
//convenience functions
jd.mot = jd.motor = function (speed, torque, enable) {
	this.speed(speed)
	this.maxTorque(N(torque) ? torque : 100)
	if (enable != '-') {
		this.enableMotor = true
	}
	return this
}
jd.limits = joint.lm = function (lowAng, upAng, enable) {
	this.lowAng(lowAng).upAng(upAng)
	if (enable != '-') {
		this.enableLimit = true
	}
	return this
}
j = b2d.Joints.b2RevoluteJoint.prototype
j.lim = j.limits = function (a, b) {
	var g = G(arguments);
	a = g[0], b = g[1]
	if (a === true) {
		this.EnableLimit(true);
		return
	}
	this.SetLimits(Math.toRadians(a), Math.toRadians(b))
	if (g.N) {
		this.EnableLimit(true)
	}
	return this
}
j.mot = j.motor = function (speed, torque, enable) {
	this.SetMotorSpeed(speed)
	this.SetMaxMotorTorque(N(torque) ? torque : 100000)
	if (enable != '-') {
		this.EnableMotor(true)
	}
	return this
}
$.inASec = function (func) {
	return setTimeout(func, 1000)
}
cjs.waitFor = function (time) {
	time = N(time) ? time : 1000
	cjs.wait = true
	setTimeout(function () {
		cjs.wait = false
	}, time)
}
w.spinner = spinner = function (x, y, s, t) {
	x = N(x) ? x : 500
	y = N(y) ? y : 200
	s = N(s) ? s : 100
	t = N(t) ? t : 100
	dial = w.box(x, y, 200, 40)//w.a(dBD(x,y), pFx(200,40))
	rock = w.brick(x, y, 10, 10)//w.a(sBD(x,y), pFx(10,10))
	return w.rev(dial, rock).mot(s, t) // rJt({  i:[rock, dial, dial.c()],  eM:1,  mS:-10,  mMT:100  })
}
w.seesaw = seesaw = function () {
	anc = world.bi(400, 300, 60, 60)
	lev = world.bi(400, 300, 300, 20)
	world.createJoint(
			RevoluteJointDef(
					anc, lev, anc.worldCenter(), lev.worldCenter()
			).collide(0)
	)
}
w.link = function self(x, y) {
	var that = this, l
	l = w.rect(x, y, 4, 20).den(4).rest(2)
	l.l = function (num) {
		num = N(num) ? num : 1
		var lk
		_.times(num, function () {
			lk = self(l.X(), l.Y() + 15)
			that.Rev(l, lk)
			l = lk
		})
		return l.K('leaf')
	}
	return l
}
makeCar = function () {
	var car = w.rect(240, 350, 90, 30)
	w.rev(w.circ(300, 400, 30), car).mot(4)
	w.rev(w.circ(200, 400, 30), car).mot(4)
	return car
}
shrink = function () {
	_.each(ropeJoints, function (j) {
		j.shrink()
	})
}
REVJ = function () {
	w = b2d.W().db()
	revJoint = function () {
		return w.rev(w.B(300, 300, 'd', 20), w.B(300, 300, 'h', 20, 20))
	}
	revJoint()
	box = w.B(150, 150, 'n', 40)
	w.rev(w.S(20, 20, 'w', 20), box)
	w.rev(box, w.B(130, 130, 'p', 50))
	j = w.rev(
			w.S(400, 200, 'o', 100).den(1),
			w.B(400, 200, 'o', 100, 100).den(1)
	)
	j.motor(true).speed(2000)
	j.EnableMotor(true)
	j.SetMaxMotorTorque(10000000)
	j.SetMotorSpeed(-2)
	w.rev(
			w.B(120, 50, 'y', 50, 50),
			w.B(100, 50, 'x', 50, 50)
	).motor(2)
	w.rev(
			w.B(400, 30, 'g', 30, 50),
			w.B(400, 30, 'g', 30, 50)).motor(3)
	fido = w.rev(
			w.B(400, 30, 'u', 10, 80),
			w.B(400, 30, 'r', 20, 160)
	).motor(10)
	w.rev(
			w.B(400, 30, 'p', 50),
			w.B(400, 30, 'o', 20, 160)
	).motor(7)
}
ROULETTE = function () {
	w = b2d.W().db()
	b = w.B(300, 300, 'r', [[50], [10, 80, 20, 160]])
	b2 = w.S(300, 300, 'y', 100)
	j = w.rev(b, b2)
}
DEMOREV = function () {
	w = b2d.W()
	w.rev(
			w.S(100, 100, 20),
			w.B(100, 100, 100, 40)
	).motor(5, 1)
	/*
	 w.rev( w.S(250,100,20), w.B(250,100,100,40) ).motor(5, 2) )
	 w.rev( w.S(400,100,20), w.B(400,100,100,40)) .motor(5, 10000)
	
	
	
	 w.rev( baa(550,100), bi(550,100,100,40)) .mt(20,5))
	 w.rev( baa(700,100), bi(700,100,100,40)) .mt(20, 10))
	 w.rev( baa(850,100), bi(850,100,100,40)) .mt(20, 10000) )
	
	 w.rev( baa(100,220), bi(100,220,100,40)).limits(0, 0) )
	 w.rev( baa(250,220), bi(250,220,100,40)).limits(0,10)  )
	
	 w.rev( baa(400,220), bi(400,220,100,40)).lm(0,180)  )
	 w.rev( baa(550,220), bi(550,220,100,40)).lm(-180,0)  )
	 w.rev( baa(700,220), bi(700,220,100,40)).lm(-360,180)  )
	 w.rev( baa(850,220), bi(850,220,100,40)).lm(0,1000)  )
	
	 w.rev( baa(100,340), bi(100,340,100,40)).lm(0,0).mt(5,1) )
	 w.rev( baa(250,340), bi(250,340,100,40)).lm(0,10).mt(5,2)  )
	 w.rev( baa(400,340), bi(400,340,100,40)).lm(0,180).mt(5,10000)  )
	 w.rev( baa(550,340), bi(550,340,100,40)).lm(-180,0).mt(20,5)  )
	 w.rev( baa(700,340), bi(700,340,100,40)).lm(-360,180).mt(20,10)  )
	 w.rev( baa(850,340), bi(850,340,100,40)).lm(0,1000).mt(20,10000)  )
	
	
	 w.rev( baa(100,460), bi(100,460,100,40)).lm(0,0).mt(-5,1) )
	
	 w.rev( baa(250,460), bi(250,460,100,40)).lm(0,10).mt(-5,2)  )
	
	 w.rev( baa(400,460), bi(400,460,100,40)).lm(0,180).mt(-5,10000)  )
	
	
	
	 w.rev(
	 baa(550,460), bi(550,460,100,40)
	 )
	 .lm(-180,0).mt(-20,5)  )
	
	 w.rev( baa(700,460), bi(700,460,100,40)).lm(-360,180).mt(-20,10)  )
	
	
	 w.rev(   baa( 850, 460 ), bi( 850, 460, 100, 40 )  ).lm( 0, 1000 ).mt( -20, 10000 )
	
	 )
	 */
}
CHANGELIMITS = function () {
	w = b2d.W()
	j = w.rev(
			w.S(400, 220, 20),
			w.B(500, 220, 200, 40))
	j.limits(0, 30)
	j.EnableLimit(true)
	setTimeout(function () {
		j.limits(0, 200)
	}, 2000)
}
CHANGEMOTOR = function () {
	w = b2d.W()
	j = w.rev(
			w.S(400, 280, 20),
			w.B(500, 280, 200, 40))
	j.speed(4).torque(1000000).motor(1)
	setInterval(function () {
		j.speed(-j.speed())
	}, 4000)
	w.player('thrustgrav')
}
CARS = function () {
	w = b2d.W()
	car = function (x, y, wheel1, wheel2) {
		wheel1 = wheel1 || 2
		wheel2 = wheel2 || wheel1
		var car = w.B(x, y, 90, 30).bindSprite('me')
		w.rev(
				w.B(x - 40, y + 50, 30), car
		).mot(wheel1)
		w.rev(
				w.B(x + 60, y + 50, 30),
				car
		).mot(wheel2)
		return car
	}
	car(100, 350, -2, 2)
	car(440, 350, 2, -2)
	setTimeout(function () {
		car(440, 350, 4)
		car(540, 350, 2)
	}, 5000)
}
DEMOGEAR = function () {
	makeWorld()
	world.Gear(
			w.rev(w.baa(100, 220, 40), w.bi(100, 220, 100, 20)),
			w.rev(w.baa(250, 220), w.bi(250, 220, 100, 20)),
			.5
	)
}
REVPRISMGEAR = function () {
}
LEASH = function () {
	w = b2d.W()
	p = w.player(300, 200)
	link = function (x, y) {
		var l = w.B(x, y, 'y', 5, 10).den(1).rest(.5)
		l.l = function (num) {
			num = N(num) ? num : 1
			var lk
			_.times(num, function () {
				lk = link(l.X(), l.Y() + 15)
				w.rev(l, lk)
				l = lk
			})
			return l
		}
		return l
	}
	base = link(300, 20).stat()
	l = base.l(10)
	w.rev(l, p)
}
TRAPEZE = function () {
	w = b2d.W().db() //marionette game?
	p = w.player(300, 200)
	link = function (x, y) {
		var l = w.rect(x, y, 5, 10, 'y').den(4).rest(2)
		l.l = function (num) {
			num = N(num) ? num : 1
			var lk
			_.times(num, function () {
				lk = link(l.X(), l.Y() + 20)
				r = w.rev(l, lk)
				r.collideConnected = true
				l = lk
			})
			return l
		}
		return l
	}
	base = link(300, 20).stat()
	l = base.l(10)
	w.rev(l, p.XY(l.X(), l.Y()))
	base = link(100, 20).stat()
	l = base.l(10)
	w.rev(l, p.XY(l.X(), l.Y()))
}
FIREFLY = function () {
	w = b2d.W().db()
	p = w.player(300, 200)
	link = function (x, y) {
		var l = w.B(x, y, 'y', 5, 10).den(4).rest(2)
		l.l = function (num) {
			num = N(num) ? num : 1
			_.times(num, function () {
				l = link(l.X(), l.Y() + 20)
			})
			return l
		}
		return l
	}
	base = link(100, 20).stat()
	l = base.l(10)
	w.rev(l, p.XY(l.X(), l.Y()))
}
BLINDS = function () {
	w = b2d.W()
	p = w.player(500, 200)
	link = function (x, y) {
		var l = w.rect(x, y, 50, 10).den(4).rest(2)
		l.l = function (num) {
			num = N(num) ? num : 1
			var lk
			_.times(num, function () {
				lk = link(l.X(), l.Y() + 24)
				r = w.rev(l, lk)
				r.collideConnected = false
				l = lk
			})
			return l
		}
		return l
	}
	base = link(300, 20).stat()
	l = base.l(10)
	// w.Rev(l, p.XY(l.X(), l.Y()))
	link = function (x, y) {
		var l = w.B(x, y, 50, 10).den(4).rest(2)
		l.l = function (num) {
			num = N(num) ? num : 1
			var lk
			_.times(num, function () {
				lk = link(l.X(), l.Y() + 24)
				r = w.rev(l, lk)
				r.collideConnected = true
				l = lk
			})
			return l
		}
		return l
	}
	base = link(100, 20).stat()
	l = base.l(10)
	w.rev(l, p.XY(l.X(), l.Y()))
}
VINE = function () {
	w = b2d.W()
	p = w.player(300, 200)
	p.SetFixedRotation(true)
	w.vine(100, 10, 15)
	w.vine(200, 10, 12)
	w.vine(500, 10)
}
VINETRAP = function () {
	w = b2d.W()
	p = w.player(300, 200)
	p.X(60)
	trap = function (x) {
		w.vine(x, 10, 12)
		w.vine(x + 10, 10, 4)
		w.vine(x + 20, 10, 6)
		w.vine(x + 30, 10, 8)
		w.vine(x + 40, 10, 10)
		w.vine(x + 50, 10, 12)
		w.vine(x + 60, 10, 10)
		w.vine(x + 70, 10, 8)
		w.vine(x + 80, 10, 6)
		w.vine(x + 90, 10, 4)
	}
	trap(200)
	//trap(300)
}
BOXCANNON = function () {
	w = b2d.W() // hmm.. want to matchs screen size
	a = w.S(300, 600, 200)
	b = w.B(300, 400, 100, 100)
	w.rev(a, b)
}
EASELCANNON = function () {
	s = cjs.S().A(
			cjs.circ(200, 'red', 'brown').rXY(100).XY(400, 700),
			rect = cjs.rect(100, 100, 'blue', 'orange').XY(300, 600).rXY(50, 250)
	)
	RTT(rect)
}
EASELBOXCANNON = function () {
	w = b2d.W()
	w.rev(
			dome = w.baa(300, 600, 200),
			cannon = w.bi(300, 400, 100, 100))
	w.s.A(
			cjs.circ(200, 'red', 'blue').rXY(100).XY(400, 700),
			rect = cjs.rect(100, 100, 'blue', 'red').XY(300, 600).rXY(50, 250)
	)
	RTT(rect)
	cjs.tick(function () {
		if (rect.rot() > 60) {
			rect.rot(60)
		}
		if (rect.rot() < -60) {
			rect.rot(-60)
		}
		cannon.aF(V(0, -420), cannon.worldCenter())
	})
}
BIONIC = function () {
	w = b2d.W().randRects()
	isHooked = false
	distJ = false
	hero = w.rect(320, 460, 20, 20, 'b')
	$can = superCanvas($(w.s.HUD.canvas))
	$can.MD(function (x, y) {
		w.QueryPoint(function (fixture) {
			var touchedBody = fixture.body()
			if (touchedBody.isStat()) {
				distJ = w.dist(hero, touchedBody, hero.GetWorldCenter(), V(x, y).div()) //collideConnected=true
				isHooked = true
			}
			return false
		}, V(x, y).div())
	}) //if(distJ){w.DestroyJoint(distJ)}
	$can.MU(function () {
		if (distJ) {
			w.DestroyJoint(distJ)
		}
	})   // if I release the mouse, I destroy the distance joint
	cjs.tick(function () {// as long as the hook is active, I shorten a bit joint distance
		if (isHooked) {
			hero.SetAwake(true) // BODY MUST BE AWAKE!!!!!!
			distJ.SetLength(distJ.GetLength() * 0.97)  //distJ.len(97,'%') //len('97%')
		}
	})
}
ROPEY = function () {
	w = b2d.W().dg()
	w.roof.kill()
	body = w.rect(255, 50, 60, 15, 'g').stat()
	link = body
	for (var i = 1; i <= 10; i++) {
		func(i)
	}
	function func(i) {
		body = w.rect(255, i * 30, 3, 15, 'w').den(1).fric(0).rest(2)
		w.rev(link, body)//, V(255,i*30-15))
		link = body
	}
	
	body = w.circ(255, 330, 20, 'd').den(1).fric(0).rest(2)
	w.rev(link, body)
}
BODYREVWORKS = function () {
	w = b2d.W().db();
	w.floor.rest(0)
	prev = top = w.B(255, 50, 'g', 60, 15).stat()
	_.times(10, function (i) {
		var next = link(255, (i + 1) * 30)
		prev = prev.rev(next)
	})
	//body.rev(body2) returns body2 !!!!!
	function link(x, y) {
		return w.B(x, y, 'w', 3, 15).den(1).fric(0).rest(0)
	}
	
	w.rev(prev,
			w.B(255, 330, 'd', 20).den(1).rest(0)
	)
	//ship
	y = w.ship().XY(400, 170).rot(265).stat()
	w.beg(function (cx) {
		var fixt
		if (fixt = cx.with('bul')) {
			if (fixt.body() != y) {
				fixt.body().kill()
			}
		}
	})
}
WEBO1 = function () {
	w = b2d.W().randRects()
	p = w.rect(400, 500, 40, 40, 'o').rest(0).den(.1).fric(100).fixRot().K('player')
	p.hanging = false
	p.makeWeb = function () {
		var p = this, w = p.wor(), y = p.Y() - 1, x = p.X(), piece
		p.ropePieces = []
		piece = w.ropePiece(x, y)
		w.tightDist(p, piece)
		p.ropePieces.push(piece)
		T(9, function (i) {
			var newPiece
			newPiece = w.ropePiece(x, y - i)
			w.tightDist(piece, newPiece)
			p.ropePieces.push(newPiece)
			piece = newPiece
		})
		p.web = w.circ(x, y - 10, 10, 'd').K('web').den(1).rest(0).fric(100)
		w.tightDist(piece, p.web)
		return p
	}
	p.destroyWeb = function () {
		var p = this
		p.web.kill()
		_.each(p.ropePieces, function (piece) {
			piece.kill()
		})
	}
	$.key({
		left: function () {
			p.I(-100, 0)
		},
		right: function () {
			p.I(100, 0)
		},
		down: function () {
			if (p.hanging) {
				p.destroyWeb()
				p.hanging = false
			}
		},
		up: function () {
			if (!p.hanging) {
				p.makeWeb()
				p.web.I(0, -100)
			}
			else {
				p.I(0, -100)
			}
		}
	})
	w.beg(function (cx) {
		var fixt
		if ((fixt = cx.with('web', 'randomRect')) && !p.hanging) {
			p.hanging = w.tightDist(fixt[1].body(), p.web)
		}
		if (cx.with('web', 'floor')) {
			p.destroyWeb();
			p.hanging = false
		}
	})
}
WEBOBEARD = function () {
	w = b2d.W().randRects()
	p = w.addMe(4).XY(300, 300).rest(0).den(.1).fric(100).fixedRot(true).K('player')
	p.isConnected = function () {
		var res, that = this
		if (!A(this.webs)) {
			return false
		}
		res = _.findWhere(that.webs, {connected: true})
		return true && res && true
	}
	$.key({
		left: function () {
			if (p.isConnected()) {
				p.I(-2, 0)
			}
			else {
				p.I(-20, 0)
			}
		},
		right: function () {
			if (p.isConnected()) {
				p.I(2, 0)
			}
			else {
				p.I(20, 0)
			}
		},
		down: function () {
			var connectedWebs
			if (p.isConnected()) {
				connectedWebs = _.where(p.webs, {connected: true})
				_.last(connectedWebs).die()
			}
		},
		up: function () {
			if (!p.isConnected()) {
				p.web().ball.I(0, -100)
			}
			else {
				p.I(0, -10)
			}
		}
	})
	p.web().ball.I(0, -100)
	w.floor.kill()
	w.beg(function (cx) {
		var fixt, web
		if ((fixt = cx.with('webBall', 'randomRect'))) {
			var ball = fixt[0].body(), rect = fixt[1].body(),
					web = _.findWhere(p.webs, {ball: ball})
			if (!web.connected) {
				web.attach(rect)
			}
		}
		if (cx.with('web', 'floor')) {
		}
	})
	w.show(function () {
		return 'is p connected?... ' + p.isConnected()
	})
}
WEBO = function () {
	w = b2d.W()
	w.roof.kill()
	w.right.kill()
	w.left.kill()
	_.times(40, function (i) {
		w.rect(Math.random() * 1100 + 20, Math.random() * 1000 - 950,
				Math.random() * 30 + 15, Math.random() * 30 + 15
		).stat().K('randomRect')
	})
	p = w.addMe(4).XY(300, 300).rest(0).den(.1).fric(100).fixedRot(true).K('player')
	p.isConnected = function () {
		var res, that = this
		if (!A(this.webs)) {
			return false
		}
		res = _.findWhere(that.webs, {connected: true})
		return true && res && true
	}
	p.killWebs = function () {
	}
	$.key({
		left: function () {
			if (p.isConnected()) {
				p.F(-100, 0)
			} else {
				p.I(-20, 0)
			}
		},
		right: function () {
			if (p.isConnected()) {
				p.F(100, 0)
			} else {
				p.I(20, 0)
			}
		},
		down: function () {
			var connectedWebs;
			if (p.webs[0]) {
				_.last(p.webs).die()
			}
		},
		up: function () {
			if (!p.isConnected()) {
				p.web().ball.I(0, -100)
			} else {
				p.I(0, -10)
			}
		}
	})
	w.beg(function (cx) {
		var fixt, web
		if ((fixt = cx.with('webBall', 'randomRect'))) {
			var ball = fixt[0].body(), rect = fixt[1].body(),
					web = _.findWhere(p.webs, {ball: ball})
			if (!web.connected) {
				web.attach(rect)
			}
		}
	})
	//p.web().ball.I(0, -100)
	cjs.tick(function () {
		w.s.Y(510 - p.Y())
	})
	w.debug()
}
//Stuff={}
RevoluteJointDefX = revX = function (a, b, c, d, e, f) {
	var g = G(arguments)
	//pass in body1, body2, world-bV = body1-center
	//can also pass body1, body2, world-x, world-y
	//or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y
	var j = new BXJ.b2RevoluteJointDef()
	var joint = j
	joint.init = joint.i = function () {
		joint.Initialize.apply(joint, G(arguments))
		return joint
	}
	//convenience functions
	joint.motor = joint.mt = function (speed, torque, enable) {
		joint.speed(speed)
		joint.maxTorque(N(torque) ? torque : 100)
		if (enable != '-') {
			joint.enableMotor = true
		}
		return joint
	}
	joint.limits = joint.lm = function (lowAng, upAng, enable) {
		joint.lowAng(lowAng).upAng(upAng)
		if (enable != '-') {
			joint.enableLimit = true
		}
		return joint
	}
	if (U(c)) {
		c = a.worldCenter()
	}
	if (O(c)) {
		joint.init(a, b, c)
	}
	else if (N(e)) {
		joint.A(a).B(b).lAA(V(c / 30, d / 30)).lAB(V(e / 30, f / 30))
	}
	else if (N(c)) {
		joint.init(a, b, V(c / 30, d / 30))
	}
	//SuperJointDef( joint )
	return joint
}
function rev() {
	$L()
	jD.lowAng = jD.lA = function (a) {
		this.lowerAngle = M.tR(a);
		return this
	}
	jD.upAng = jD.uA = function (a) {
		this.upperAngle = M.tR(a);
		return this
	}
	jD.mt = jD.mot = jD.motor = function (sp, tor, enable) {
		var jD = this
		jD.speed(sp)
		jD.SMMT(N(tor) ? tor : 100)
		if (enable != '-') {
			jD.m1()
		}
		return jD
	}
	jD.limits = jD.lm = function (lowAng, upAng) {
		var jD = this, g = G(arguments)
		this.lowAng(lowAng).upAng(upAng)
		if (!g.n) {
			this.enableLimit = true
		}
		return this
	}
	j.mt = j.mot = j.motor = function (sp, tor) {
		var j = this, g = G(arguments)
		j.SMS(sp).SMMT(N(tor) ? tor : 100000)
		return g.n ? j : j.m1()
	}
//just a shortcut to call initialze.  have i ever even done that?  laaaame waaah waaaaah
	jD.init = jD.i = function () {
		this.Initialize.apply(this, G(arguments))
		return this
	}
	j.lim = j.limits = function (a, b) {
		var g = G(arguments);
		a = g[0], b = g[1]
		if (a === true) {
			this.EnableLimit(true);
			return
		}
		this.SetLimits(Math.toRadians(a), Math.toRadians(b))
		if (g.N) {
			this.EnableLimit(true)
		}
		return this
	}
	j.lowAng = j.lA = function (a) {
		j.lowerAngle = tRad(a);
		return j
	}
	j.upAng = j.uA = function (a) {
		j.upperAngle = tRad(a);
		return j
	}
	b.rJ = b.rev = function (nextBody) {
		var b = this
		this.W().rev(b, nextBody)
		return nextBody
	}
	$rev = function (a, b, c, d, e, f) {
		var g = G(arguments)
		//pass in body1, body2, world-bV = body1-center
		//can also pass body1, body2, world-x, world-y
		//or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y
		var j = new b2d.b2RevoluteJointDef()
		var jt = j
		jt.init = jt.i = function () {
			jt.Initialize.apply(jt, G(arguments))
			return jt
		}
		//convenience functions
		jt.motor = jt.mt = function (speed, torque, enable) {
			jt.speed(speed)
			jt.MT(N(torque) ? torque : 100)
			if (enable != '-') {
				jt.enableMotor = true
			}
			return jt
		}
		jt.limits = jt.lm = function (lowAng, upAng, enable) {
			jt.lowAng(lowAng).upAng(upAng)
			if (enable != '-') {
				jt.enableLimit = true
			}
			return jt
		}
		if (U(c)) {
			c = a.worldCenter()
		}
		if (O(c)) {
			jt.init(a, b, c)
		}
		else if (N(e)) {
			jt.A(a).B(b).lAA(V(c / 30, d / 30)).lAB(V(e / 30, f / 30))
		}
		else if (N(c)) {
			jt.init(a, b, V(c / 30, d / 30))
		}
		//SuperJointDef( jt )
		return jt
	}
	w.Rev = function (a, b, c, d, e, f) {
		var w = this, g = G(arguments)
		//pass in body1, body2, world-bV = body1-center
		//can also pass body1, body2, world-x, world-y
		//or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y
		var j = SuperJointDef(new b2d.Joints.b2RevoluteJointDef())
		var jt = j
		jt.init = jt.i = function () {
			jt.Initialize.apply(jt, G(arguments))
			return jt
		}
		//convenience functions
		jt.motor = jt.mt = function (speed, torque, enable) {
			var g = G(arguments)
			jt.speed(speed)
			jt.MT(N(torque) ? torque : 100)
			return g.n ? jt : jt.m1()
		}
		jt.limits = jt.lm = function (lowAng, upAng, enable) {
			var g = G(arguments)
			jt.lowAng(lowAng).upAng(upAng)
			return g.n ? jt : jt.m1()
		}
		if (U(c)) {
			c = a.GWC().m()
		}
		if (O(c)) {
			jt.init(a, b, c)
		}
		else if (N(e)) {
			jt.A(a).B(b).lAA(bV(c / 30, d / 30)).lAB(bV(e / 30, f / 30))
		}
		else if (N(c)) {
			jt.init(a, b, bV(c / 30, d / 30))
		}
		w.CJ(jt)
		return jt
	}
	w.$rev = function (a, b, c, d) {
		return this.CJ(
				$rJ.apply(null, arguments)
		)
	}
//pass in body1, body2, world-bV = body1-center
//can also pass body1, body2, world-x, world-y
//or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y
	w.rJ = w.rev = function (body1, body2, c, d, e, f) {
		var g = G(arguments)
		var jt = new b2d.Joints.b2RevoluteJointDef()
		if (U(c)) {
			c = body1.worldCenter()
		}
		if (O(c)) {
			jt.init(body1, body2, c)
		}
		else if (N(e)) {
			jt.A(body1).B(body2).lAA(V(c / 30, d / 30)).lAB(V(e / 30, f / 30))
		}
		else if (N(c)) {
			jt.init(body1, body2, V(c / 30, d / 30))
		}
		return this.CJ(jt)
	}
	w.link = function self(x, y) {
		var that = this, l
		l = w.box(x, y, 4, 20).de(4).re(2)
		l.l = function (n) {
			n = N(n) ? n : 1
			var lk
			_.t(n, function () {
				lk = self(l.X(), l.Y() + 15)
				that.Rev(l, lk)
				l = lk
			})
			return l.K('leaf')
		}
		return l
	}
	w.spinner = spinner = function (x, y, s, t) {
		x = N(x) ? x : 500
		y = N(y) ? y : 200
		s = N(s) ? s : 100
		t = N(t) ? t : 100
		dial = w.box(x, y, 200, 40)//w.a(dBD(x,y), pFx(200,40))
		rock = w.brick(x, y, 10, 10)//w.a(sBD(x,y), pFx(10,10))
		return w.rev(dial, rock).mot(s, t) // rJt({  i:[rock, dial, dial.c()],  eM:1,  mS:-10,  mMT:100  })
	}
	w.seesaw = seesaw = function () {
		anc = world.bi(400, 300, 60, 60)
		lev = world.bi(400, 300, 300, 20)
		world.createJoint(
				RevoluteJointDef(
						anc, lev, anc.worldCenter(), lev.worldCenter()
				).collide(0)
		)
	}
	shrink = function () {
		_.e(ropeJoints, function (j) {
			j.shrink()
		})
	}
	rJ.lm = rJ.sL = function (a, b) {
		var j = this
		a = N(a) ? a : 20
		b = N(b) ? b : 180
		j.SetLimits(M.tR(a), M.tR(b))
		return j
	}
	LEASH = LSH = function () {
		//b2d.level()
		W()
		link = function (x, y) {
			var l = w.box(x, y, 5, 10, 'y').re(.5)
			l.l = function (n) {
				n = N(n) ? n : 1
				var lk
				_.t(n, function () {
					lk = link(l.X(), l.Y() + 15)
					w.rJ(l, lk)
					l = lk
				})
				return l
			}
			return l
		}
		base = link(300, 20).stat()
		l = base.l(10)
		//w.Rev(l, p)
	}
	TRAPEZE = BABY = function () {
		b2d.level()
		link = function (x, y) {
			var l = w.box(x, y, 5, 10, 'y').den(4).rest(2)
			l.l = function (n) {
				n = N(n) ? n : 1
				var lk
				_.t(n, function () {
					lk = link(l.X(), l.Y() + 20)
					r = w.rev(l, lk)
					r.collideConnected = true
					l = lk
				})
				return l
			}
			return l
		}
		base = link(300, 20).stat()
		l = base.l(10)
		w.rev(l, p.XY(l.X(), l.Y()))
		base = link(100, 20).stat()
		l = base.l(10)
		w.rev(l, p.XY(l.X(), l.Y()))
	}
	FIREFLY = FLY = function () {
		b2d.level()
		link = function (x, y) {
			var l = w.box(x, y, 5, 10, 'y').de(4).re(2)
			l.l = function (n) {
				n = N(n) ? n : 1
				_.t(n, function () {
					l = link(l.X(), l.Y() + 20)
				})
				return l
			}
			return l
		}
		base = link(100, 20).stat()
		l = base.l(10)
		w.rev(l, p.XY(l.X(), l.Y()))
	}
	WINDOWBLINDS = WBL = function () {
		W()
		link = function (x, y) {
			var l = w.box(x, y, 50, 10).de(4).re(2)
			l.l = function (n) {
				n = N(n) ? n : 1
				var lk
				_.t(n, function () {
					lk = link(l.X(), l.Y() + 24)
					r = w.rJ(l, lk)
					r.collideConnected = false
					l = lk
				})
				return l
			}
			return l
		}
		base = link(300, 20).stat()
		l = base.l(10)
		// w.Rev(l, p.XY(l.X(), l.Y()))
		link = function (x, y) {
			var l = w.box(x, y, 50, 10).de(4).re(2)
			l.l = function (n) {
				n = N(n) ? n : 1
				var lk
				_.t(n, function () {
					lk = link(l.X(), l.Y() + 24)
					r = w.rev(l, lk)
					r.collideConnected = true
					l = lk
				})
				return l
			}
			return l
		}
		base = link(100, 20).stat()
		l = base.l(10)
		//w.Rev(l, p.XY(l.X(), l.Y()))
	}
	VIN = function () {
		W()
		p = w.p().r0()
		w.vine(100, 10, 15)
		w.vine(200, 10, 12)
		w.vine(500, 10)
	}
	VNT = function () {
		W()
		p = w.p().X(60)
		trap = function (x) {
			w.vine(x, 10, 12)
			w.vine(x + 10, 10, 4)
			w.vine(x + 20, 10, 6)
			w.vine(x + 30, 10, 8)
			w.vine(x + 40, 10, 10)
			w.vine(x + 50, 10, 12)
			w.vine(x + 60, 10, 10)
			w.vine(x + 70, 10, 8)
			w.vine(x + 80, 10, 6)
			w.vine(x + 90, 10, 4)
		}
		trap(200)
		//trap(300)
	}
	BXC = function () {
		W() // hmm.. want to matchs screen size
		a = w.bmp(300, 600, 200)
		b = w.box(300, 400, 100, 100)
		w.rev(a, b)
	}
	ECN = function () {
		s = cjs.S().A(
				cjs.circ(200, 'r', 'n').rXY(100).XY(400, 700),
				box = cjs.rect(100, 100, 'b', 'o').XY(300, 600).rXY(50, 250)
		)
		RTT(box)
	}
	EC1 = function () {
		W()
		w.rJ(
				dome = w.baa(300, 600, 200),
				cannon = w.bi(300, 400, 100, 100))
		w.st.A(
				cjs.circ(200, 'r', 'b').rXY(100).XY(400, 700),
				box = cjs.rect(100, 100, 'b', 'r').XY(300, 600).rXY(50, 250)
		)
		RTT(box)
		$t(function () {
			if (box.rt() > 60) {
				box.rt(60)
			}
			if (box.rt() < -60) {
				box.rt(-60)
			}
			cannon.aF(V(0, -420), cannon.GWC())
		})
	}
	BIO = function () {
		W().randRects()
		isHooked = false
		distJ = false
		hero = w.box(320, 460, 20, 20)
		$can = $(w.st.canvas)
		/*
		 $can.mousedown(function (x, y) {
		 w.QueryPoint(function (f) {
		 var touchedBody = f.B()
		 if (touchedBody.iS()) {
		 distJ = w.dJ(hero, touchedBody,
		 hero.GWC(),
		 V(x, y).d()) //collideConnected=true
		 isHooked = true
		 }
		 return false
		 }, V(x, y).div())
		 }) //if(distJ){w.DestroyJoint(distJ)}
		 $can.mouseup(function () {
		 if (dJ) {w.DJ(dJ)}
		 })   // if I release the mouse, I destroy the distance jt
		 */
		$t(function () {// as long as the hook is active, I shorten a bit jt distance
			if (isHooked) {
				hero.aw(1) // BODY MUST BE AWAKE!!!!!!
				dJ.l(dJ.l() * 0.97)  //distJ.len(97,'%') //len('97%')
			}
		})
	}
	RPY = function () {
		W()
		w.roof.kill()
		body = w.brk(255, 50, 60, 15)
		link = body
		for (var i = 1; i <= 10; i++) {
			func(i)
		}
		function func(i) {
			body = w.box(255, i * 30, 3, 15).fr(0).re(2)
			w.rJ(link, body)//, V(255,i*30-15))
			link = body
		}
		
		body = w.bal(255, 330, 20).fr(0).re(2)
		w.rJ(link, body)
		y = w.ship().XY(400, 170).rt(265).stat()
		/*
		 w.cl('bul', function(f){
		 if (f.B() != y) {
		 f.B().kill()//.setDestroy()
		 }
		 })
		
		 */
	}//good rope
	CAT = function () {
		W()
		cat = w.A(
				$dB(350, 200), [
					$pF(125, 20, 0, 0, 0),
					$pF(20, 60, -80, -40, 200)
				])
		cat_arm = w.A($dB(210, 210), [
			$pF(150, 10, 0, 0, 0, 1),
			$pF(10, 20, -140, -30, 0, 1)
		])
		j = w.rev(cat, cat_arm, V(0, 0))
				.lAA(V(-80, -90))
		//.eM(1).eL(1).lAB(bV(60, 0)).sMS(1000).sL(-180, 60).sMMT(1)
		cannonball = w.A($dB(90, 90), $cF(10, 20))
		// s.$(fire=function(e){ the_jt.sMMT(10000)})
//  draw_box=function(px,py,w,h,d,ud):void {
//
//   ground = new dBD(px,py)
//
//ground.position.Set(px, py);
//if (d) {
//    ground.type=b2Body.b2_dynamicBody;
//}
//
//my_box = pSh().sAB(w/2, h/2)
//
//  my_fixture  = fDf(my_box)
//
//
//
//the_ground =w.cB(ground);
//
//the_ground.sUD(ud);
//the_ground.cF(my_fixture);
	} //ok
	ROU = function () {
		W()
		b = w.D(300, 300).A(
				$cF(50),
				$pF(10, 80, 20, 160)
		)
		w.rJ(w.bmp(300, 300, 100), b)
	}//ok
	REV = function () {
		W()
		w.rJ(
				w.bmp(100, 100),
				w.box(100, 100, 100, 40)
		).mt(5, 1)
		return
		w.j(w.rev(w.baa(250, 100), w.bi(250, 100, 100, 40)).motor(5, 2))
		w.j(w.rev(w.baa(400, 100), w.bi(400, 100, 100, 40)).motor(5, 10000))
		w.j(w.rev(w.baa(550, 100), w.bi(550, 100, 100, 40)).mt(20, 5))
		w.j(w.rev(w.baa(700, 100), w.bi(700, 100, 100, 40)).mt(20, 10))
		w.j(w.rev(w.baa(850, 100), w.bi(850, 100, 100, 40)).mt(20, 10000))
		w.j(w.rev(w.baa(100, 220), w.bi(100, 220, 100, 40)).limits(0, 0))
		w.j(w.rev(w.baa(250, 220), w.bi(250, 220, 100, 40)).limits(0, 10))
		w.j(w.rev(w.baa(400, 220), w.bi(400, 220, 100, 40)).lm(0, 180))
		w.j(w.rev(w.baa(550, 220), w.bi(550, 220, 100, 40)).lm(-180, 0))
		w.j(w.rev(w.baa(700, 220), w.bi(700, 220, 100, 40)).lm(-360, 180))
		w.j(w.rev(w.baa(850, 220), w.bi(850, 220, 100, 40)).lm(0, 1000))
		w.j(w.rev(w.baa(100, 340), w.bi(100, 340, 100, 40)).lm(0, 0).mt(5, 1))
		w.j(w.rev(w.baa(250, 340), w.bi(250, 340, 100, 40)).lm(0, 10).mt(5, 2))
		w.j(w.rev(w.baa(400, 340), w.bi(400, 340, 100, 40)).lm(0, 180).mt(5, 10000))
		w.j(w.rev(w.baa(550, 340), w.bi(550, 340, 100, 40)).lm(-180, 0).mt(20, 5))
		w.j(w.rev(w.baa(700, 340), w.bi(700, 340, 100, 40)).lm(-360, 180).mt(20, 10))
		w.j(w.rev(w.baa(850, 340), w.bi(850, 340, 100, 40)).lm(0, 1000).mt(20, 10000))
		w.j(
				rev(w.baa(100, 460), w.bi(100, 460, 100, 40)).lm(0, 0).mt(-5, 1))
		w.j(
				rev(w.baa(250, 460), w.bi(250, 460, 100, 40)).lm(0, 10).mt(-5, 2))
		w.j(
				rev(w.baa(400, 460), w.bi(400, 460, 100, 40)).lm(0, 180).mt(-5, 10000))
		world.createJoint(
				rev(
						baa(550, 460), w.bi(550, 460, 100, 40)
				)
						.lm(-180, 0).mt(-20, 5))
		world.createJoint(
				rev(w.baa(700, 460), w.bi(700, 460, 100, 40)).lm(-360, 180).mt(-20, 10))
		world.createJoint(
				rev(w.baa(850, 460), w.bi(850, 460, 100, 40)).lm(0, 1000).mt(-20, 10000)
		)
	}//ok
	RLM = function () {
		W()
		j = w.rJ(w.bmp(400, 220), w.box(500, 220, 200, 40))
		j.limits(0, 30)
		j.l1()
		_.in(2, function () {
			j.limits(0, 200)
		})
	} //good lims
	REVJOINT = RJT = function () {
		W()
		//w.rev(  w.ball(),   w.box()   )
		w.rJ(
				w.bmp(200, 200),
				box = w.box(150, 150)
		)
		w.rJ(box, w.bal(130, 130))
		j = w.rJ(
				w.bmp(400, 200, 100),
				w.box(400, 200, 100)
		)
		//j.motor(true).speed(2000)
		j.SetMaxMotorTorque(10000000)
		j.SetMotorSpeed(-2)
		j.EnableMotor(true)
		return
		w.rJ(
				w.box(120, 50, 50, 50),
				w.box(100, 50, 50, 50)
		).mt(2)
		w.rJ(
				w.box(400, 30, 30, 50),
				w.box(400, 30, 30, 50)
		).mt(3)
		fido = w.rJ(
				w.box(400, 30, 10, 80),
				w.box(400, 30, 20, 160)
		).mt(10)
		w.rJ(
				w.bal(400, 30, 50),
				w.box(400, 30, 20, 160)
		).motor(7)
	}//ok
	function _pre() {
		jD = jd = b2d.Joints.b2JointDef.prototype
		rJD = b2d.Joints.b2RevoluteJointDef.prototype
//j = b2d.Joints.b2Joint.prototype
		rJ = b2d.Joints.b2RevoluteJoint.prototype
//convenience functions\\\
		rJ.GJS = function () {
			return this.GetJointSpeed()
		}
		rJ.GJA = function () {
			return this.GetJointAngle()
		}
		b2d.RJD = b2d.Js.b2RevoluteJointDef
		b2d.RJ = b2d.Js.b2RevoluteJoint
		rJD = b2d.RJD.prototype
		rJ = b2d.RJ.prototype
	}
}
//shifman youtube https://www.youtube.com/watch?v=SUVH8Bh4ruw ..doesnt say much

b2d.p()

//localAnchorA - the point in body A around which it will rotate
//localAnchorB - the point in body B around which it will rotate
//referenceAngle - an angle between bodies considered to be zero
// for the joint angle
rJD.init = rJD.i = function () {
	var jd = this, g = G(arguments)
	//just a shortcut to call initialze.  
	// have i ever even done that?  laaaame waaah waaaaah
	jd.Initialize.apply(jd, g)
	return jd
}
//rev joints need 'anchor point'

rJ.limits = rJ.lm = function () {
	var j = this, g = G(arguments),
			a = g[0], b = g[1]
	if (a === true) {
		j.EnableLimit(true);
		return
	}
	j.SetLimits(M.tR(a), M.tR(b))
	if (g.N) {
		j.EnableLimit(true)
	}
	return j
}
rJ.motor = rJ.mt = function (s, tor) {
	var j = this, g = G(arguments)
	j.SetMotorSpeed(s)
	j.SetMaxMotorTorque(_.tN(tor, 100000))
	if (g.N) {
		j.EnableMotor(true)
	}
	return j
}
rJ.speed = rJ.sp = function (s) {
	var j = this
	if (U(s)) {
		return j.GetMotorSpeed()
	}
	j.SetMotorSpeed(s);
	return j
}
 
$rJD = function(a,b){
	var jD =  new b2d.RevoluteJointDef
	jD.bodyA  = a
	jD.bodyB = b
	return jD
}


G.jt=function(g){
	var o = b2d.iB(g.f) ? {a: g.f, b: g.s} : g.f
	 o= o|| {}
	return o
}

w._rJ = function () {

	var w = this, g=G(arguments), o = G.jt(g)
	return w.J( $rJD(o.a, o.b) )
}




w.rJDemo=function(x,y){var w=this, g=G(arguments),  
		 
	b = (g.p?b1:g.m?b2:b3)(x,y)  
	
	return  g.d ? b.stat() : b

	function b1(x, y) {return w.D(x, y, 'y', 10, 10).den(1).bo(.5)}
	function b2(x, y) {return w.D(x, y, $r(), 50, 15)}
	function b3(x, y) {return w.D(x, y, 'r', 4, 20).den(4).bo(2)}
}

 
w.rJ = function () {var w = this, g = G(arguments), o, jd; if (g.N_ || ( b2d.iB(g.f) && U(g.s) )) {var v = V(g.f, g.s); return w.rJDemo(v.x, v.y)}
	
	if (g.p) { g.s.XY(g.f) }
	
	o = b2d.iB(g.f) ? {a: g.f, b: g.s} : g.f
	
	jd = $rJD(o.a, o.b)
	if ( N(g.fo ) ) {
		jd.lAA(g.t, g.fo)
		if (N(g.si) ) { jd.lAB(g.fi, g.si) }
	} else if ( O(g.fo) ) { jd.lAA( g.fo )
		if ( O(g.fi) ){ jd.lAB( g.fi ) }
	}
	else {
		var a = o.a.wC()
		var	b = o.b.wC()
		var xDif= b.x - a.x
		var yDif= b.y - a.y
		//this is the halfway point of the line connecting their world centers!!!
		jd.lAA(xDif, yDif)	//bCenter - aCenter (in world verts)
	}
	
	if ( g.m ) { jd.cl(true) }
	return w.J(jd)
}

b.rJ = function (b1, yOff) {
	var b = this, w = b.W(), g = G(arguments), c, cc
	if (b2d.iF(b1)) {
		b1 = b1.B()
	}
	if (b2d.iB(b1)) {
		b1.XY(b.X(), b.Y())
		w.rJ(b, b1)
		return b1
	}
	if (R()) {
		c = 'r'
		cc = 1
	}
	else {
		c = 'g'
	}
	_.t(N(g[0], 1), function () {
		var nB = w.rJ(b)
		nB.Y(N(g[1], 8), '+')
		w.rJ(b, nB)
		b = nB
	})
	
	return b
	//pad=N(pad,15)
}



b.revPin = b.pin = function () {
	var b = this, w = b.W(), j,
			b1 = w.S(b.X(), b.Y())
	w.rJ(b1, b)
	return b
}

// rev joint uses:  wheels or rollers,  chains or swingbridges (using multiple revolute joints), rag-doll joints,  rotating doors, catapults, levers

WRJ = REVJ = function () {
	W()
	c = w.D(300, 300)
	c.cir({r: 60, c: 'd', rf: 1})
	w.rJ(c, w.D(300, 300, 'h', 30, 300))
	box = w.D(150, 150, 'n', 80, 40)
	w.rJ(
			box,
			w.D(130, 130, 'p', 50))
}
REVMOTORS = RJM = RVM = function () {
	W()
	w.rJ(
			w.S(400, 200, 'o', 60).d(1),
			w.D(400, 200, 'o', 200, 40).d(1)).mt(-2)
	w.rJ(
			w.D(400, 30, 'g', 30, 50),
			w.D(400, 30, 'g', 30, 50)).mt(3)
}
RVM2 = function () {
	W()
	w.rJ(
			w.D(400, 30, 'u', 10, 80),
			w.D(400, 30, 'r', 20, 160)
	).mt(10)
	w.rJ(
			w.D(400, 30, 'p', 50),
			w.D(400, 30, 'o', 20, 160)
	).mt(7)
	w.rJ(
			w.D(120, 50, 'y', 50, 50),
			w.D(100, 50, 'x', 50, 50)
	).mt(2)
}
REVSPEED = RVS = function () {
	W()
	j = w.rJ(w.S(700, 280), w.D(800, 280, 'r', 200, 40)).mt(4, 100000)
	_.in2(function () {
		j.lm(0, 200)
	})
	_.ev4(function () {
		j.sp(-j.sp())
	})
}
WPIN = ROUL = function () {
	W().Y()
	w.D(400, 200, 'b', [
		[60],
		[100, 50, 0, 200]
	]).pin()
}
CLICKPIN = function () {
	W()
	y = w.D(800, 200, 'y', [
		[60],
		[40, 80, 0, 60]])
	x = w.D(500, 200, 'x', 50)
	w.$$(function () {
		j1 = w.rJ(y, x)
	})
}
REVGUY = function () {
	w.rJ(
			w.D(350, 200, [
				['b', 125, 20],
				['o', 20, 60, -80, -40, 200]
			]),
			w.D(210, 210, [
				['g', 150, 10, 0, 0, 0, 1],
				['r', 10, 20, -140, -30, 0, 1]
			]),
			-80, -90, 60, 0
	).mt(10)
}
BINOTAFUNCTION = DEMOREV = REV = function () {
	W()
	w.rJ(a = w.S(100, 100, 20), b = w.D(100, 100, 100, 40)).mt(5, 1)
	w.rJ(w.S(250, 100, 20), w.D(250, 100, 100, 40)).mt(5, 2)
	w.rJ(w.S(400, 100, 20), w.D(400, 100, 100, 40)).mt(5, 10000)
	w.rJ(w.baa(550, 100), w.bi(550, 100, 100, 40)).mt(20, 5)
	w.rJ(w.baa(700, 100), w.bi(700, 100, 100, 40)).mt(20, 10)
	w.rJ(a2 = w.baa(850, 100), b2 = w.bi(850, 100, 100, 40, 'o')).mt(20, 10000)
	w.rJ(w.baa(100, 220), w.bi(100, 220, 100, 40)).lm(0, 0)
	w.rJ(w.baa(250, 220), w.bi(250, 220, 100, 40)).lm(0, 10)
	w.rJ(w.baa(400, 220), w.bi(400, 220, 100, 40)).lm(0, 180)
	w.rJ(w.baa(550, 220), w.bi(550, 220, 100, 40)).lm(-180, 0)
	w.rJ(w.baa(700, 220), w.bi(700, 220, 100, 40)).lm(-360, 180)
	w.rJ(w.baa(850, 220), w.bi(850, 220, 100, 40)).lm(0, 1000)
	w.rJ(w.baa(100, 340), w.bi(100, 340, 100, 40)).lm(0, 0).mt(5, 1)
	w.rJ(w.baa(250, 340), w.bi(250, 340, 100, 40)).lm(0, 10).mt(5, 2)
	w.rJ(w.baa(400, 340), w.bi(400, 340, 100, 40)).lm(0, 180).mt(5, 10000)
	w.rJ(w.baa(550, 340), w.bi(550, 340, 100, 40)).lm(-180, 0).mt(20, 5)
	w.rJ(w.baa(700, 340), w.bi(700, 340, 100, 40)).lm(-360, 180).mt(20, 10)
	w.rJ(w.baa(850, 340), w.bi(850, 340, 100, 40)).lm(0, 1000).mt(20, 10000)
	w.rJ(w.baa(100, 460), w.bi(100, 460, 100, 40)).lm(0, 0).mt(-5, 1)
	w.rJ(w.baa(250, 460), w.bi(250, 460, 100, 40)).lm(0, 10).mt(-5, 2)
	w.rJ(w.baa(400, 460), w.bi(400, 460, 100, 40)).lm(0, 180).mt(-5, 10000)
	w.rJ(
			w.baa(550, 460), w.bi(550, 460, 100, 40)
	)
			.lm(-180, 0).mt(-20, 5)
	w.rJ(w.baa(700, 460), w.bi(700, 460, 100, 40)).lm(-360, 180).mt(-20, 10)
	w.rJ(w.baa(850, 460), w.bi(850, 460, 100, 40)).lm(0, 1000).mt(-20, 10000)
}
BALLBALL = EYEBALLTETHERBALL = CARNOTDEFINED = HORSE = HOR = function () {
	W({w: 'L'}).P()
	s = w.D(300, 400, 'b', 90, 30).d(1000).stat()
	//w.rJ(w.D(300-40, 400+50,'o',30), s)//.mt( 2)
	b = w.D(300 + 60, 400 + 50)
	b.cir({c: 'x', r: 30, rf: 1})
	w.rJ(b, s)//.mt(2)
	//   w.car(100, 350, -2, 2)
	//  w.car(440, 350, 2, -2)
	// w.car(440,350,4)
	// w.car(540,350,2)
//w.makeCar()
	//car = w.car()
	w.dst(p, car).len(0)
	w.floor.fr(.1)
	w.roller()
	//_.t(3, function(){w.roller()})
//    _.ev(2000, function(){w.roller()})
	//  p.X(1750)
}
REVPIN = PIN = function () {
	W({m: 0, g: 0}).Y()
	//  p1 = V(300,300) ;w.dot(p1)
	//  p2 = V(360,360) ;w.dot(p2)
	//  p3 = V(450,450) ;w.dot(p3)
	b = w.D(300, 300).lV(2).aV(1)
	b.cir({r: 150, lf: ['x', 'u']}).d(1)
	w.rJ(b,
			w.D(300, 300, 'b', 500, 40, 0, 0, 30)
	)
	//blue pin spinner in middle
	b1 = w.D(600, 300, 'b', 100, 50).pin()
	r1 = w.D(600, 300, 'r', 100, 100)
	w.$$(function () {
		w.rJ(b1, r1)
	})
}
function revJ() {
	PINBALL = function () {
		W([420, 600], {})
		w.floor.kill()
		w.S(215, 520, 'r', 30).K('bump').DBF(10, .8, 0)
		w.S(215, 100, 'b', 100, 10).K('shelf')
		w.D(215, 90, 'r', 20)
				.bS('sun', .24)
				.K('sun')
				.rot(10, 100)
		flip = w.flips(100, 430)
		$.tap(function () {
					var b = w.D(R(300, 40), 160, 'g', 20).DBF(1, .2, 2)
					if (!R(10)) {
						b.bS('me', .24)
					}
					flip()
				}
		)
	}
	TRICYCLE = function () {
		W([1200, 600, 10000, 600], {})
		//yy=w.y().aD(5000)//.fixRot()
		dir = 12
		car = w.D(300, 300, 'r', [
			[200, 20],
			[20, 165, -50, -50, 45],
			[20, 165, 50, -50, -45]
		]).fr(5).track()
		_.t(30, function () {
			w.me(R(9000, 500), 100, R(2, .5))
		})
		wh = wheel(250, 300).C('b').bS('me', .7)
		j = w.rJ(
				wh, //.lD(100).aD(100).fr(100),
				car,
				0,
				0,
				100,
				0
		)
		w.rJ(
				wh2 = wheel(250, 300, 50, 10).C('g')
						.bS('me', .4).aD(10).fr(2),
				car, 0, 0, -100, 0
		)
		j = w.rJ(
				wh3 = wheel(250, 300, 25, 6).C('y').bS('me', .2).lD(100).aD(100).fr(100),
				car, 0, 0, 0, -100
		)
		function wheel(x, y, r, n) {
			r = N(r, 80)
			n = N(n, 15)
			pC = [b2d.pC(r, n)]
			return w.D(x, y, 'w', pC)//.d(5).r(0).lD(100).aD(100).fr(100)
		}
		
		// j.mt(-50)
		T.t(function () {
			var K = $.K
			car.I(0, 5000)
			if (K.r) {
				wh.ApplyTorque(3500)
				wh2.ApplyTorque(3500)
				wh3.ApplyTorque(150)
			}
			if (K.l) {
				wh.ApplyTorque(-3500)
				wh2.ApplyTorque(-3500)
				wh3.ApplyTorque(-150)
			}
			if (K.u) {
				wh.ApplyTorque(1500)
				wh3.ApplyTorque(-500)
			}
			if (K.d) {
				wh2.ApplyTorque(-500)
				wh3.ApplyTorque(1500)
			}
		})
		//car.aD(1000).lD(1000)
	}
	SPERCH = function () {
		W([1200, 600, 1200, 1200], {}).P()
		p.tr()
		w.perch()
		w.seesaw(600, 1100)
		w.seesaw(600, 700)
		w.seesaw(600, 500)
		w.spinner(400, 900)
		w.spinner(800, 900, '-')
	}
	ELEVS = function () {
		W([1200, 600, 2400, 1200], {}).P(100, w.h - 200)
		//p.d(.1).fr(1)
		p.K('p').track()
		speed = 10
		j = w.pJ({
			a: w.S(400, w.h - 200, 's', [[40, 40, '-']]).d(1).fr(1),
			b: w.D(500, w.h - 300, 'd', 200, 40).d(.1).K('elv'),
			lm: [-250, 100]
		}).mt(speed)
		w.cl('elv', _.debounce(function () {
			j.mt(speed *= -1)
		}, 200, true))
		speed2 = -100
		j2 = w.pJ({
			a: w.S(800, 300, 's', 40, 40).d(1).fr(1),
			aV: [-30, 2],
			b: w.D(800, 200, 'd', 200, 40).d(1).K('box'),
			ax: V(0, 1),
			rA: 45
		}).mt(speed2)
		w.cl('box', 'p', function () {
			speed2 *= -1
			j2.mt(speed2)
		})
		w.p(500, 200, 'thrust').K('p').d(.02)
		w.pJ(
				w.S(1000, 800, 'y', 40, 40).d(1).fr(1),
				w.D(1100, 900, 'b', 200, 40).d(1), [1, -.5], 25
		).L(-300).U(200).lm('+')
		j3 = w.pJ({
			a: w.S(240, 150, 's', 180, 90),
			b: w.D(200, 200, 'd', 200, 20),
			aV: V(100, 10),
			rA: 5
		})
		j3.mt(-10)
		_.in(2, function () {
			j3.mt('-')
		})
		_.in(4, function () {
			j3.mt('+')
		})
	}
}
 function _revolute(){
	 rJ.SMMT = function (fo) {
		 this.SetMaxMotorTorque(fo);
		 return this
	 }
	 rJ.GMT = function () {
		 return this.GetMotorTorque()
	 }
	 rJ.mT = rJ.mF = pJ.mMFo = pJ.max = function (fo) {
		 var pJ = this
		 return U(fo) ? pJ.m_maxMotorTorque :
				 pJ.SMMT(fo)
	 }
	 rJ.lm = function () {
		 var j = this, g = G(arguments)
		 return j.SL(M.tR(g.s), M.tR(g.f)).l1()
	 }
	 rJ.tor = rJ.fo = function (fo) {
		 var pJ = this
		 if (U(fo)) {
			 return pJ.GMT()
		 }
		 //pJ -> apply a tor f
		 return pJ
	 }
	 rJ.mt = pJ.mot = function () {
		 var pJ = this, g = G(arguments)
		 pJ.mT(N(g.s, 1000)).sp(g.f)
		 return g.n ? pJ : pJ.m1()
	 }
	 RML = function () {
		 W().y()
		 j = w.hammer(400, 260)
		 j.m1().mT(300).sp(10)
		 //	j1=w.hammer(600, 260)
		 //	j2=w.hammer(700, 260)
		 //w.cubes()
	 }
	 $L('lim', 'mot')
	 rJD.init = rJD.i = function () {
		 var jd = this, g = G(arguments)
		 //just a shortcut to call initialze.  
		 // have i ever even done that?  laaaame waaah waaaaah
		 jd.Initialize.apply(jd, g)
		 return jd
	 }
	 $rJD = function (a, b) {
		 var jD = new b2d.RevoluteJointDef
		 jD.bodyA = a
		 jD.bodyB = b
		 return jD
	 }
	 G.jt = function (g) {
		 var o = b2d.iB(g.f) ? {a: g.f, b: g.s} : g.f
		 o = o || {}
		 return o
	 }
	 w._rJ = function () {
		 var w = this, g = G(arguments), o = G.jt(g)
		 return w.J($rJD(o.a, o.b))
	 }
	 b.revPin = b.pin = function () {
		 var b = this, w = b.W(), j,
				 b1 = w.S(b.X(), b.Y())
		 w.rJ(b1, b)
		 return b
	 }
	 RJ = function () {
		 W()
		 x = w.D(800, 200, 'x', [
			 [60],
			 [40, 80, 0, 60]])
		 xx = w.D(500, 200, 'x', 50)
		 w.$$(function () {
			 j1 = w.rJ(
					 x, xx
			 )
		 })
		 b = blue = w.D(300, 300)
		 b.cir({
			 r: 60, c: 'b'//, rf: 1
		 })
		 w.rJ(b,
				 w.D(300, 300, 'b', 30, 300))
		 r = red = w.rJ(w.D(450, 150, 'r', 180, 40), w.D(130, 130, 'r', 50))
		 y = yellow = w.D(800, 200, 'y', [
			 [60], [100, 50, 0, 200]
		 ]).pin()
	 }
	 PIN = function () {
		 W({m: 0, g: 0}).Y()
		 //  p1 = V(300,300) ;w.dot(p1)
		 //  p2 = V(360,360) ;w.dot(p2)
		 //  p3 = V(450,450) ;w.dot(p3)
		 b = w.D(300, 300).lV(2).aV(1)
		 b.cir({r: 150, lf: ['x', 'u']}).d(1)
		 w.rJ(b, w.D(300, 300, 'b', 500, 40, 0, 0, 30))
		 //blue pin spinner in middle
		 b1 = w.D(600, 300, 'b', 100, 50).pin()
		 r1 = w.D(600, 300, 'r', 100, 100)
		 w.$$(function () {
			 w.rJ(b1, r1)
		 })
	 }
	 RMT = function () {
		 W()
		 w.rJ(
				 w.S(400, 200, 'o', 60).d(1),
				 w.D(400, 200, 'o', 200, 40).d(1)).mt(-2)
		 w.rJ(
				 w.D(400, 30, 'g', 30, 50),
				 w.D(400, 30, 'g', 30, 50)).mt(3)
	 }//nice
	 RVG = function () {
		 W()
		 w.rJ(
				 w.D(350, 200, [['b', 125, 20], ['o', 20, 60, -80, -40, 200]]),
				 w.D(210, 210, [['g', 150, 10, 0, 0, 0, 1], ['r', 10, 20, -140, -30, 0, 1]]),
				 -80, -90, 60, 0
		 ).mt(10)
	 }//AWESOME
	 PNB = function () {
		 W([420, 600], {})
		 w.floor.kill()
		 w.S(215, 520, 'r', 30).K('bump').DBF(10, .8, 0)
		 w.S(215, 100, 'b', 100, 10).K('shelf')
		 w.D(215, 90, 'r', 20)
				 .bS('sun', .24)
				 .K('sun')
				 .rot(10, 100)
		 flip = w.flips(100, 430)
		 $.tap(function () {
					 var b = w.D(R(300, 40), 160, 'g', 20).DBF(1, .2, 2)
					 if (!R(10)) {
						 b.bS('me', .24)
					 }
					 flip()
				 }
		 )
	 }//coolo
	 TRI = function () {
		 W([1200, 600, 10000, 600], {})
		 //yy=w.y().aD(5000)//.fixRot()
		 dir = 12
		 car = w.D(300, 300, 'r', [
			 [200, 20],
			 [20, 165, -50, -50, 45],
			 [20, 165, 50, -50, -45]
		 ]).fr(5).track()
		 _.t(30, function () {
			 w.me(R(9000, 500), 100, R(2, .5))
		 })
		 wh = wheel(250, 300).C('b').bS('me', .7)
		 j = w.rJ(
				 wh, //.lD(100).aD(100).fr(100),
				 car,
				 0,
				 0,
				 100,
				 0
		 )
		 w.rJ(
				 wh2 = wheel(250, 300, 50, 10).C('g')
						 .bS('me', .4).aD(10).fr(2),
				 car, 0, 0, -100, 0
		 )
		 j = w.rJ(
				 wh3 = wheel(250, 300, 25, 6).C('y').bS('me', .2).lD(100).aD(100).fr(100),
				 car, 0, 0, 0, -100
		 )
		 function wheel(x, y, r, n) {
			 r = N(r, 80)
			 n = N(n, 15)
			 pC = [b2d.pC(r, n)]
			 return w.D(x, y, 'w', pC)//.d(5).r(0).lD(100).aD(100).fr(100)
		 }
		
		 // j.mt(-50)
		 T.t(function () {
			 var K = $.K
			 car.I(0, 5000)
			 if (K.r) {
				 wh.ApplyTorque(3500)
				 wh2.ApplyTorque(3500)
				 wh3.ApplyTorque(150)
			 }
			 if (K.l) {
				 wh.ApplyTorque(-3500)
				 wh2.ApplyTorque(-3500)
				 wh3.ApplyTorque(-150)
			 }
			 if (K.u) {
				 wh.ApplyTorque(1500)
				 wh3.ApplyTorque(-500)
			 }
			 if (K.d) {
				 wh2.ApplyTorque(-500)
				 wh3.ApplyTorque(1500)
			 }
		 })
		 //car.aD(1000).lD(1000)
	 }//netao
	 SPERCH = ERC = function () {
		 W([1200, 600, 1200, 1200], {}).P()
		 p.tr()
		 w.perch()
		 w.seesaw(600, 1100)
		 w.seesaw(600, 700)
		 w.seesaw(600, 500)
		 w.spinner(400, 900)
		 w.spinner(800, 900, '-')
	 }//NICE
	 EVS = function () {
		 W([1200, 600, 2400, 1200], {}).P(100, w.h - 200)
		 //p.d(.1).fr(1)
		 p.K('p').track()
		 speed = 10
		 j = w.pJ({
			 a: w.S(400, w.h - 200, 's', [[40, 40, '-']]).d(1).fr(1),
			 b: w.D(500, w.h - 300, 'd', 200, 40).d(.1).K('elv'),
			 lm: [-250, 100]
		 }).mt(speed)
		 w.cl('elv', _.debounce(function () {
			 j.mt(speed *= -1)
		 }, 200, true))
		 speed2 = -100
		 j2 = w.pJ({
			 a: w.S(800, 300, 's', 40, 40).d(1).fr(1),
			 aV: [-30, 2],
			 b: w.D(800, 200, 'd', 200, 40).d(1).K('box'),
			 ax: V(0, 1),
			 rA: 45
		 }).mt(speed2)
		 w.cl('box', 'p', function () {
			 speed2 *= -1
			 j2.mt(speed2)
		 })
		 w.p(500, 200, 'thrust').K('p').d(.02)
		 w.pJ(
				 w.S(1000, 800, 'y', 40, 40).d(1).fr(1),
				 w.D(1100, 900, 'b', 200, 40).d(1), [1, -.5], 25
		 ).L(-300).U(200).lm('+')
		 j3 = w.pJ({
			 a: w.S(240, 150, 's', 180, 90),
			 b: w.D(200, 200, 'd', 200, 20),
			 aV: V(100, 10),
			 rA: 5
		 })
		 j3.mt(-10)
		 _.in(2, function () {
			 j3.mt('-')
		 })
		 _.in(4, function () {
			 j3.mt('+')
		 })
	 }//NICE
	 function err() {
		 REVSPEED = RVS = function () {
			 W()
			 j = w.rJ(w.S(700, 280),
					 w.D(800, 280, 'r', 200, 40)).mt(4, 100000)
			 _.in2(function () {
				 j.lm(0, 200)
			 })
			 j.sp(10)
			 _.ev(1, function () {
				 j.sp(j.sp() * -2)
			 })
		 }//ko
		 BINOTAFUNCTION = DEMOREV = REV = function () {
			 W()
			 w.rJ(a = w.S(100, 100, 20), b = w.D(100, 100, 100, 40)).mt(5, 1)
			 w.rJ(w.S(250, 100, 20), w.D(250, 100, 100, 40)).mt(5, 2)
			 w.rJ(w.S(400, 100, 20), w.D(400, 100, 100, 40)).mt(5, 10000)
			 w.rJ(w.baa(550, 100), w.bi(550, 100, 100, 40)).mt(20, 5)
			 w.rJ(w.baa(700, 100), w.bi(700, 100, 100, 40)).mt(20, 10)
			 w.rJ(a2 = w.baa(850, 100), b2 = w.bi(850, 100, 100, 40, 'o')).mt(20, 10000)
			 w.rJ(w.baa(100, 220), w.bi(100, 220, 100, 40)).lm(0, 0)
			 w.rJ(w.baa(250, 220), w.bi(250, 220, 100, 40)).lm(0, 10)
			 w.rJ(w.baa(400, 220), w.bi(400, 220, 100, 40)).lm(0, 180)
			 w.rJ(w.baa(550, 220), w.bi(550, 220, 100, 40)).lm(-180, 0)
			 w.rJ(w.baa(700, 220), w.bi(700, 220, 100, 40)).lm(-360, 180)
			 w.rJ(w.baa(850, 220), w.bi(850, 220, 100, 40)).lm(0, 1000)
			 w.rJ(w.baa(100, 340), w.bi(100, 340, 100, 40)).lm(0, 0).mt(5, 1)
			 w.rJ(w.baa(250, 340), w.bi(250, 340, 100, 40)).lm(0, 10).mt(5, 2)
			 w.rJ(w.baa(400, 340), w.bi(400, 340, 100, 40)).lm(0, 180).mt(5, 10000)
			 w.rJ(w.baa(550, 340), w.bi(550, 340, 100, 40)).lm(-180, 0).mt(20, 5)
			 w.rJ(w.baa(700, 340), w.bi(700, 340, 100, 40)).lm(-360, 180).mt(20, 10)
			 w.rJ(w.baa(850, 340), w.bi(850, 340, 100, 40)).lm(0, 1000).mt(20, 10000)
			 w.rJ(w.baa(100, 460), w.bi(100, 460, 100, 40)).lm(0, 0).mt(-5, 1)
			 w.rJ(w.baa(250, 460), w.bi(250, 460, 100, 40)).lm(0, 10).mt(-5, 2)
			 w.rJ(w.baa(400, 460), w.bi(400, 460, 100, 40)).lm(0, 180).mt(-5, 10000)
			 w.rJ(w.baa(550, 460), w.bi(550, 460, 100, 40)).lm(-180, 0).mt(-20, 5)
			 w.rJ(w.baa(700, 460), w.bi(700, 460, 100, 40)).lm(-360, 180).mt(-20, 10)
			 w.rJ(w.baa(850, 460), w.bi(850, 460, 100, 40)).lm(0, 1000).mt(-20, 10000)
		 }//ERR bi
		 BALLBALL = EYEBALLTETHERBALL = CARNOTDEFINED = HORSE = HOR = function () {
			 W({w: 'L'}).P()
			 s = w.D(300, 400, 'b', 90, 30).d(1000).stat()
			 //w.rJ(w.D(300-40, 400+50,'o',30), s)//.mt( 2)
			 b = w.D(300 + 60, 400 + 50)
			 b.cir({c: 'x', r: 30, rf: 1})
			 w.rJ(b, s)//.mt(2)
			 //   w.car(100, 350, -2, 2)
			 //  w.car(440, 350, 2, -2)
			 // w.car(440,350,4)
			 // w.car(540,350,2)
//w.makeCar()
			 //car = w.car()
			 w.dst(p, car).len(0)
			 w.floor.fr(.1)
			 w.roller()
			 //_.t(3, function(){w.roller()})
//    _.ev(2000, function(){w.roller()})
			 //  p.X(1750)
		 }//ERR car
	 }
	
	 function _pre() {
		 w.hammer = function (x, y) {
			 var w = this
			 var b = w.S(x, y, 'r', 30, 40)
			 var b1 = w.D(x, y - 60, 'g', [[20, 200], [80, 80, 0, 100]])
			 return w.rJ(b, b1)
		 }
		 w.cubes = function (n) {
			 var w = this
			 _.t(N(n, 10), function () {
				 w.D(R(w.st.W() - 100, 50), R(w.st.H() - 100, 50),
						 $r(), 30, 30).aV(3).lV(30).re(1)
			 })
		 }
		 b2d.RJD = b2d.RevoluteJointDef
//shifman youtube https://www.youtube.com/watch?v=SUVH8Bh4ruw ..doesnt say much
		 b2d.p()
//localAnchorA - the point in body A around which it will rotate
//localAnchorB - the point in body B around which it will rotate
//referenceAngle - an angle between bodies considered to be zero
// for the joint angle
	 }

//rev joints need 'anchor point'
// rev joint uses:  wheels or rollers,  chains or swingbridges (using multiple revolute joints), rag-doll joints,  rotating doors, catapults, levers
	 RVM = function () {
		 W()
		 w.rJ(
				 w.D(400, 30, 'u', 10, 80),
				 w.D(400, 30, 'r', 20, 160)
		 ).mt(10)
		 w.rJ(
				 w.D(400, 30, 'p', 50),
				 w.D(400, 30, 'o', 20, 160)
		 ).mt(7)
		 w.rJ(
				 w.D(120, 50, 'y', 50, 50),
				 w.D(100, 50, 'x', 50, 50)
		 ).mt(2)
	 }//nice
 }
 
 function links(){
	 w.vn = w.vn = w.vin = w.vine = function (x, y, l) {
		 var w = this
		 var l = w.lk(x, y, '/').l(N(l, 10))
		 w.cl('player', 'leaf', function () {
			 var j = w.rJ(l, p.XY(l.X(), l.Y()))
			 $.kD('d', function () {
				 w.DJ(j)
			 })
		 })
	 }
	 w.lk = function (x, y) {
		 var w = this
		 return w.box(x, y, 10, 15).fr(0).re(0)
	 }
	 w.tramp = function (x, re, fq, dR) {
		 var w = this, g = G(arguments)
		 x = N(x, 290)
		 re = N(re, 75)
		 fq = N(fq, 6)
		 dR = N(dR, 0)
		 //w.brk(x - 120, 290, 40, 300 ).fr(0)
		 //w.brk(x + 120, 290, 40, 300 ).fr(0)
		 var b = w.brk(x, 280, 20, 20)
		 var b1 = w.box(x, 200, 200, 20)
		 b1.re(re).fr(0)
		 b1.r0()
		 var j = w.dJ(b, b1)
		 j.l(115).fq(fq).dR(dR)
		 return j
	 }
	 w.brg = w.bridge = function (x, y) {
		 var w = this
		 var b1 = w.bmp(N(x, 400), N(y, 100), 10)
		 var b2 = wood(), b3 = wood(), b4 = wood(), b5 = wood(),
				 b6 = wood(), b7 = wood(), b8 = wood(), b9 = wood(),
				 b10 = w.bmp(x + 700, y, 10)
		 pieces([b1, b2], [b2, b3], [b3, b4], [b4, b5], [b5, b6], [b6, b7], [b7, b8], [b8, b9], [b9, b10])
		 function wood() {
			 return w.box(100, 100, 90, 60).de1().fR1()
		 }
		
		 function piece(a, b) {
			 w.dJ(a, b, '+').l(6).fq(5)
		 }
		
		 function pieces() {
			 _.e(arguments, function (g) {
				 piece(g[0], g[1])
			 })
		 }
	 }
	 DSJ = function () {
		 W()
		 y = w.ship().XY(400, 170).rt(265)
		 //w.cl('bul', function(f) {if (f.B() != y) {f.B().dyn()}})
		 base = w.brk(255, 50, 60, 15)
		 w.rev(base, body = w.lk(255, 60));
		 prev = body
		 w.rev(prev, body = w.lk(255, 90));
		 prev = body
		 w.rev(prev, body = w.lk(255, 120));
		 prev = body
		 bef = body = w.lk(255, 150, 'b')
		 w.rev(prev, body);
		 prev = body
		 red = body = w.lk(255, 180, 'r')
		 j1 = w.rev(prev, body);
		 prev = body
		 aft = body = w.lk(255, 210, 'a')
		 j2 = w.rev(prev, body);
		 prev = body
		 je = aft.GetJointList()
		 w.rev(prev, body = w.lk(255, 240));
		 prev = body
		 w.rev(prev, body = w.lk(255, 270));
		 prev = body
		 w.rev(prev, body = w.lk(255, 300));
		 prev = body
		 w.rev(prev, body = w.lk(255, 330));
		 prev = body
		 ball = w.bal(255, 330, 20, 'd').re(0);
		 w.rev(prev, ball)
	 }//ok
	 ROD = function () {
		
		
		 // here i bind bodies with fixtures that are alredy out of line
		 W(20)
		 w.rod(
				 w.bal(300, 100, 20),
				 w.D(300, 150, $pF(20, 20, 15, 15, 45)),
				 1
		 )
		 w.rod(w.bal(350, 100, 20), w.D(350, 150, $pF(20, 20, -15, -15, 300)), 1)
		 w.rod(w.bal(380, 100, 20), w.D(380, 150, $pF(20, 20, -15, -15, 225)), 1)
		 w.rod(w.bal(400, 100, 20), w.D(400, 150, $pF(20, 20, 15, 15, 225)), 1)
		 w.rod(w.bal(100, 100, 20), w.box(110, 120, 20, 20), 30)
		 w.rod(w.bmp(200, 200, 20), w.box(200, 200, 20, 20), 2)
	 }//
	 SGS = function () {
		 b2d.levelScrollX()
		 // w.right.kill()
		 //freq is SPEED of oscillation
		 //damp is STRENGTH of oscillation
		 // so bodies cant rotate if they dont have density???
		 j = w.spg(
				 w.bmp(200, 100, 10).s1(),
				 w.box(200, 250, 250, 10).K('rect')
		 ).fq(3).dm(.1)
		 w.spg(w.bmp(500, 100, 10).s1(),
				 w.box(500, 250, 250, 10).K('rect'))
				 .fq(3).dm(1)
		 w.spg(w.bmp(800, 50, 10).s1(), w.box(800, 200, 250, 10).K('rect')).fq(2).dm(50)
		 w.spg(w.bmp(1200, 125, 10).s1(), w.box(1200, 275, 250, 10).K('rect')).fr(10).dm(.5)
		 w.cl('rect', function (f) {
			 if (f) {
				 b = f.B()
				 j = b.joint()
				 //w.s.pen($l('freq: ' + j.fq() + ', dampening: ' + j.dm()))
			 }
		 })
	 }//ok
	 SPRINGINSPACE = SIS = function () {
		 W({g: 0})
		 var spring = function (bx, by) {
			 bx = N(bx, 400)
			 by = N(by, 300)
			 var x = w.brk(500, 300, 40, 200)
			 var b = w.bal(bx, by)
			 var j = w.dJ(x, b)
			 //w.st.dot(500, 300)
			 //w.st.dot(bx, by)
			 //w.st.dot('r', 500 - ((500 - bx) / 2), 300 - ((300 - by) / 2))
			 return j
		 } //try with and without grav
		 ball = w.bal(200, 200, 50) // notice it bounces off wall, but NOT off x (neither have rest by default)
		 rect = w.brk(200, 250, 250, 10)
		 j = spring(480, 300)
		 j.l(20).fq(2).dm(1)
		 // ok so freq is how much strngth u need to pull it??
		 // as freq gets low.. u can pull it farther away
		 // its the strength of the spring
	 }
	 BOUNCESPRING = BSG = function () {
		 W().roof.kill()
		 p = w.p().XY(285, 0)
		 //default freq is 0.  but thats like freq 10000000
//freq is tightness.  the default (0) is all the way tight.
//if u want to start to loosen it.  change from 0 to a very high number!
//try 50.. then u will see that it budges just a little.
		 //ok.. now keep going down..
		 // eventually it is too loose to fight against gravity
		 // hahaha then its just flat and usesless
		 // ok all this assumed a default damp of 0.
		 // now set the freq to a good oscillation (3 or 4)
		 // then play with the damp
		 // damp is like a tightner on your looseness
		 // it makes you less stretchy?
		 // just leave damp at 0 for now, and play with freq
		 w.tramp(200, 0, 6)// not bouncy
		 w.tramp(500, 1.2, 6)// too bouncy
		 w.tramp(800, .75, 6)// mid bouncy, mid freq
		 w.tramp(1100, .75, 2)//low freq
		 w.tramp(1400, .75, 12)//high freq
		 _.ev(1, function () {
			 p.I(0, -150)
		 })//game:: he autojumps.  u jump to give him a double jump!
		 _.in(10, function () {
			 w.addHundBalls()
		 })//w.st.flash();
	 }
	 SPG = function () {
		 W()
		 j1 = w.J(
				 jd = $dJ(w.bal(30, 200, 20, 'r'), w.box()
				 ).lfd(200, 5, .1)
		 )
		 $t(function () {
			 if (j1.l() > 1) {
				 j1.l(j1.l() - 1)
			 }
		 })
		 j2 = w.spg(w.bal(100, 300, 30, 'w'), w.box(), '-').lfd(20, 5, .1)
		 j3 = w.spg(w.bal(130, 250, 30, 'b'), w.brk(), '-').lfd(120, 5, 0)
	 } //ok
	 BRIDGE = BRG = BDG = function () {
		 W(30).roof.kill()
		 w.p().XY(400, -300)
		 w.bridge(100, 310)
		 _.in(3, function () {
			 //w.st.flash();
			 p.XY(500, 0)
		 })
	 }//ok
	 function revLinks() {
		 w.vine = function (x, y, n, m) {
			 n = N(n, 10)
			 return this.rJ(x, y, n, '/').rJ(n, m).K('leaf')
		 }
		 w.trap = function (x, y) {
			 var w = this
			 x = N(x, 300);
			 y = N(y, 50)
			 w.vine(x, 100, 5)
			 w.vine(x + 20, y, 6)
			 w.vine(x + 40, y, 10)
			 w.vine(x + 60, y, 10)
			 w.vine(x + 80, y, 6)
			 w.vine(x + 90, y, 4)
			 return w
		 }
		 w.link1 = function self(x, y, n) {
			 var g = G(arguments),
					 b = w.rJ(x, y, '*')
			 b.add = function (n) {
				 var b = this
				 _.t(N(n, 1), function () {
					 var nB
					 nB = w.rJ(b.X(), b.Y() + 24, '*')
					 w.rJ(b, b = nB)
				 })
				 return b
			 }
			 if (g.p) {
				 b.stat()
			 }
			 if (N(g[2])) {
				 b.add(g[2])
			 }
			 return b
		 }
//shrink = function(){_.e(ropeJoints, function(j){j.shrink()})}
//marionette game?
		 w.vertRopeFact = w.verticalRopeFactory = function (x, radius, colorDf) {
			 $l('rf')
			 var w = this
			 //  u must specify location, which is just x
			 // and optionally, a radius
			 radius = N(radius, 10)
			 return function (y, color) {
				 var g = G(arguments), bod
				 // u must specify location, which is just y
				 // and optionally, a color
				 color = color || colorDf || $r()
				 bod = w.D(x, y, color, radius)
				 if (g.n || g.d) {
					 bod.stat()
				 }
				 return bod
			 }
		 }
		 VERTREVROPE = VRR = function () {
			 W({m: 0, g: 0}).Y()
			 lk = w.vertRopeFac(600)// previously: function Link(y){return w.D(600,y,$r(),10)}
			 b = lk(100, '/')
			 l = lk(120)
			 w.rJ(b, l)
			 w.rJ(l, l = lk(140))
			 w.rJ(l, l = lk(160))
			 w.rJ(l, l = lk(200))
		 }
		 REVROPE = PEARLS = RRP = RVP = function () {
			 W(300).C('z')
			 link = w.S(100, 120, 'z', 20, 20)
			 js = []
			 _.t(19, function () {
				 js.push(
						 w.rJ(
								 link,
								 link = w.D(
										 link.X(),
										 link.Y() + 10, 'w', 3).d(3000)))
			 })
			 link.rJ(w.p().cn('jump'))
			 j = js[3]
		 }
		 REVROPEALT = RVO = function () {
			 W()
			 w.S(600, 300, 'z', 50, 50).rJ(25).C('z').rJ(w.y(300, 300).cn('thrust'))
			 p = w.p(300, 200).cn('thrust').r(2)
			 base = Link(300, 20, 10)//.stat()
			 link = base.rJ(10)
			 w.rJ(link, p.XY(link.X(), link.Y()))
			 base = Link(100, 20).stat();
			 l = base.rJ(10);
			 w.rJ(l, p.XY(l.X(), l.Y()))
		 }
		 REVROPEREDUCED = RVP = function () {
			 W(300).C('z').P();
			 p1 = w.p()
			 l = w.S(100, 120, 'o', 20, 20)
			 js = []
			 _.t(20, function () {
				 js.push(rJt())
			 })
			 l.rJ(p)
			 j = js[3]
			 function rJt() {
				 var x = l.X()
				 var y = l.Y() + 10
				 var bod = w.D(x, y, 'w', 4)
				 bod.den(3000)
				 var jt = w.rJ(l, bod)
				 l = bod
				 return jt
			 }
		 }
//not working... freezes actually
//tries to call rJ right of a joint ???!
		 REDROPE = RED = function () {
			 W([1200, 600], {g: 0})
			 anchor = w.S(600, 300, 'z', 50, 50)
			 anchor.rJ(15).C('z').rJ(w.y(300, 100).cn('thrust'))
		 }
		 REDROPEALT = RRAA = function () {
			 W([1200, 600], {g: 0})
			 w.S(200, 100, 'z', 50, 50)
					 .rJ(200, 150, 'b', 30)//.rJ(200, 180, 'r', 30).rJ(200, 260, 'o', 10)
		 }
		 function _revLinks() {
			 $L()
			 b.diffX = function (b1) {
				 return this.wC().x - b1.wC().x
			 }
			 b.diffY = function (b1) {
				 return this.wC().y - b1.wC().y
			 }
			 w.rJ = function () {
				 var w = this, g = G(arguments), o
				 o = b2d.iB(g.f) ? {a: g.f, b: g.s} : g.f
				 //if (g.p) {g.s.XY(g.f)}
				 var jD = $rJD(o.a, o.b)
				 if (N(g.fo)) {
					 jD.lAA(g.t, g.fo)
					 if (N(g.si)) {
						 jD.lAB(g.fi, g.si)
					 }
				 }
				 else if (O(g.fo)) {
					 jD.lAA(g.fo)
					 if (O(g.fi)) {
						 jD.lAB(g.fi)
					 }
				 }
				 else {
					 jD.aV(o.b.diffX(o.a), o.b.diffY(o.a))
				 }
				 //if (g.m) {jD.cl(true)}
				 return w.J(jD)
			 }
			 w.rJ_ = function (a, b) {
				 var w = this
				 var j = w.rJ.apply(w, arguments)
				 return j.B()
			 }
			 b.rJ_ = function (b1) {
				 var b = this, w = b.W()
				 return w.rJ_(b, b1)
			 }
			 b.addLk = function (gap, fn) {
				 var b = this, w = b.W()
				 var b1 = fn(b.X(), b.Y()).Y(N(gap, 10), '+')
				 return b.rJ_(b1)
			 }
			 b.addLks = function (n, gap, lkFn) {
				 var b = this, w = b.W()
				 var l = b
				 _.tValue(n, function () {
					 return l = l.addLk(gap, lkFn)
				 })
				 return l
			 }
			 w.Chain = function (gap, lkFn) {
				 return function (x, y, n) {
					 var lk = lkFn(x, y).stat()
					 return lk.addLks(n, gap, lkFn)
				 }
			 }
			 VRV = function () {
				 W()
				 ys = $arr(3, function () {
					 return w.y(300, R(100, 100))
				 })
				 lk = w.zBrk(400, 300).lks(8, 15)
				 w.Chain(10, $lkFn.pearl)(100, 120, 19)
				 cir = $lkFn.cir
				 w.rJ_(w.rJ_(w.rJ_(w.rJ_(cir(600, 100).stat(), cir(600, 120)),
						 cir(600, 140)), cir(600, 160)), cir(600, 200))
				 _.in(5, function () {
					 _.e(ys, function (y) {
						 y.rJ(lk)
					 })
				 })
			 }
			 KLL = function () {
				 W().G(0)
				 w.hook({x: 200, y: 100, numLks: 10, h: 10, space: 20}, '/')
				 w.hook({x: 400, y: 100, numLks: 10, h: 10, space: 0}, '/')
				 $.rulers()
			 }
			 b.lks = function (y, n) {
				 var b = this
				 y = N(y, 8)
				 _.t1(n, function () {
					 b = w.rJ_(
							 b,
							 $lkFn.red(b.X(), b.Y()).Y(y, '+'))
				 })
				 return b
			 }
			 w.link1 = function () {
				 var w = this, g = G(arguments)
				 var b = w.rJ(g.f, g.s, '*')
				 if (g.p || g.d) {
					 b.stat()
				 }
				 if (N(g.t)) {
					 b.add(g.t)
				 }
				 return b
			 }
			 w.vine = function (x, y, n, m) {
				 n = N(n, 10)
				 return this.rJ(x, y, n, '/').rJ(n, m).K('leaf')
			 }
			 w.trap = function (x, y) {
				 var w = this
				 x = N(x, 300);
				 y = N(y, 50)
				 w.vine(x, 100, 5)
				 w.vine(x + 20, y, 6)
				 w.vine(x + 40, y, 10)
				 w.vine(x + 60, y, 10)
				 w.vine(x + 80, y, 6)
				 w.vine(x + 90, y, 4)
				 return w
			 }
			 w.hookBall = function (x, y) {
				 return this.D(x, y, 'b', 20).DFB(1, 0, 1.1)
			 }
			 w.hookLink = function (x, y, ht) {
				 ht = N(ht, 15)
				 return this.D(x, y, 'y', 3, ht).DFB(1, 0, 0)
			 }
			 w.hook = function () {
				 var w = this, g = G(arguments), o, lk
				 o = g.O ? g.f : {x: g.f, y: g.s, numLks: g.t, h: g.fo, space: g.fi}
				 o.space = N(o.space, 20)
				 lk = w.hookLink(o.x, o.y, o.h)
				 if (g.d) {
					 lk.stat()
				 }
				 _.t(o.numLks - 1, function (i) {
					 lk = lk.hook(
							 o.x,
							 lk.Y() + o.h + o.space,
							 o.h)
				 })
				 w.rJ(lk, w.hookBall(o.x, o.numLks * (o.h + o.space) + o.y))
				 //hook 
// pass x , y, num links
//l = l.hook(  w.hookLink(x, i * 30 + y)  )
//w.rJ( l,  l = w.hookLink(x,i * 30 + y) )
			 }
			 w.rJt = function () {
				 var w = this
				 var x = l.X()
				 var y = l.Y() + 10
				 var bod = w.D(x, y, 'w', 4)
				 bod.de(3000)
				 var jt = w.rJ(l, bod)
				 l = bod
				 return jt
			 }
			 b.rJ = function () {
				 var b = this, w = b.W(), g = G(arguments), o, n
				 o = {b1: b2d.tB(g.f), yOff: g.s}
				 return o.b1 ?
						 w.rJ_(b, o.b1.XY(b.X(), b.Y())) :
						 b.lks(g.s, g.f)
			 }
			 b.chainLink = function (yOffset) {
				 yOffset = N(yOffset, 24)
				 var b = this, w = b.W()
				 return w.rJ(b.X(), b.Y() + yOffset, '*')
			 }
			 b.add = function (n) {
				 var b = this
				 _.t(N(n, 1), function () {
					 w.rJ(b, b = b.chainLink())
				 })
				 return b
			 }
			 b.hook = function (x, y, ht) {
				 var b = this, w = b.W()
				 var lk = O(x) ? x : w.hookLink(x, y, ht)
				 j = w.rJ(b, lk)
				 //$l('l: '+ j.l())
				 return lk
			 }
			 b.go = function (b1) {
				 return this.XY(b1.X(), b1.Y())
			 }
			 function _pre() {
				 $arr = function (n, fn) {
					 var arr = []
					 _.t(n, function (i) {
						 arr.push(fn(i, arr))
					 })
					 return arr
				 }
				 _.t1 = function () {
					 var g = G(arguments)
					 var o = g.N_ ? {n: g.f, fn: g.s} : {fn: g.f}
					 _.t(N(o.n, 1), o.fn)
					 return _
				 }
				 w.zBrk = function (x, y) {
					 return this.S(x, y, 'z', 50, 50)
				 }
				 _.tValue = function (n, fn) {
					 var res
					 _.t(n, function (n, i) {
						 res = fn(n, i)
					 })
					 return res
				 }
				 $lkFn = {}
				 $lkFn.w = $lkFn.white = $lkFn.pearl = function (x, y) {
					 return w.D(x, y, 'b', 8).d(300)
				 }
				 $lkFn.r = $lkFn.red = function (x, y) {
					 return w.D(x, y, 'r', 4, 20).de(4).bo(2)
				 }
				 $lkFn._ = $lkFn.cir = function (x, y) {
					 return w.D(x, y, $r(), 10)
				 }
//b1 = function (x, y) {return w.D(x, y, 'y', 10, 10).de(1).bo(.5)}
//b2 = function (x, y) {return w.D(x, y, $r(), 50, 15)}
			 }
			
			 function more() {
				 b.rJHere = function (b1) {
					 return this.rJ(b1.go(this))
				 }
				 w.chain = function (x, y, gap, lkFn, n) {
					 var w = this
					 var Chain = w.Chain(gap, lkFn)
					 return Chain(x, y, n)
				 }
			 }
		 }
	 }
 }
 function cars(){
	 jD._sMMT = function (tor) {
		 this.maxMotorTorque = tor
		 return this
	 }
	 jD._gMMT = function () {
		 return this.maxMotorTorque
	 }
	 jD.MMT = jD.mMT = function (tor) {
		 return U(tor) ? this._gMMT() : this._sMMT(tor)
	 }
	 rJ.SMMT = function () {
		 this.SetMaxMotorTorque.apply(null, arguments)
		 return this
	 }
	 rJ.GMT = function () {
		 return this.GetMotorTorque()
	 }
	 rJ.tor = rJ.mMT = function (tor) {
		 return U(tor) ? this.GMT() : this.SMMT(tor)
	 }
	 w._car = function (x, bA, bB) {
		 var w = this
		 var car = w.box(x, 150, 90, 30)
		 car.j1 = bA
		 car.j2 = bB
		 car.bal = function (x) {
			 var car = this, w = car.W()
			 return w.rJ(w.bal(x, 150, 30), car)
		 }
		 car.bA = function (x, mx, tor) {
			 var car = this
			 car.j1 = car.bal(x).m1(mx, tor)
			 return car
		 }
		 car.bB = function (x, mx, tor) {
			 var car = this
			 car.j2 = car.bal(x).m1(mx, tor)
			 return car
		 }
		 return car
	 }
	 rJ.m1 = function (mMt, mSp) {
		 var rJ = this
		 rJ.EM(1)
		 if (N(mMt)) {
			 rJ.mMT(mMt)
		 }
		 if (N(mSp)) {
			 rJ.mSp(mSp)
		 }
		 return rJ
	 }
	 w.car = function () {
		 var w = this;
		 return w._car(150)
				 .bA(150, 100, 120)
				 .bB(100, 40000, -500)
	 }
	 w.rol = w.roller = function () {
		 var w = this;
		 return w._car(250)
				 .bA(300, 1000000, 6)
				 .bB(200, 40, -500)
	 }
	 CAR = function () {
		 W(10).right.kill()
		 w.roof.kill()
		 w.floor.fr(.1)
		 w.dJ(w.ship(), w.car()).l(0)
		 w.dJ(w.p('mar').XY(400, -200), w.rol()).l(0)
		 _.ev(4, function () {
			 w.rol()
		 })
	 }
	 makeCar = function () {
		 var car = w.box(240, 350, 90, 30)
		 w.rev(w.bal(300, 400, 30), car).mot(4)
		 w.rev(w.bal(200, 400, 30), car).mot(4)
		 return car
	 }
	 CHANGEMOTOR = CMT = function () {
		 W()
		 j = w.Rev(
				 w.baa(400, 280),
				 w.bi(500, 280, 200, 40))
		 j.speed(4).torque(1000000).mot(1)
		 _.ev(4, function () {
			 j.speed(-j.speed())
		 })
		 w.player('thrustGrav')
	 }
	 car = function (x, y, wheel1, wheel2) {
		 wheel1 = wheel1 || 2
		 wheel2 = wheel2 || wheel1
		 var car = w.box(x, y, 90, 30).bS('me')
		 w.rev(
				 w.bal(x - 40, y + 50, 30), car).mot(wheel1)
		 w.rev(
				 w.bal(x + 60, y + 50, 30), car).mot(wheel2)
		 return __car = car
	 }
	 CARS = function () {
		 W()
		 car(100, 350, -2, 2)
		 car(440, 350, 2, -2)
		 _.in(5, function () {
			 car(440, 350, 4)
			 car(540, 350, 2)
		 })
	 }
	 WARPING = function () {
		 W()
		 w.p()
		 w.b(function (cx) {
			 var a = cx.A(), b = cx.B()
			 cx.w('foot', 'tramp', function () {
				 p.I(0, -150)
			 })
			 cx.w('feet', 'warp', function () {
				 STATE.warping = true
			 })
		 })
		 $t(function () {
			 if (STATE.warping) {
				 p.warpToTopLeft();
				 STATE.warping = false
			 }
		 })
	 }
	 w.spinner = function (x, y, s, t) {
		 var g = G(arguments)
		 x = N(g[0], 500)
		 y = N(g[1], 200)
		 s = N(g[2], 10)
		 t = N(g[3], 100)
		 if (g.n) {
			 s *= -1
		 }
		 w.rJ(
				 dial = w.D(x, y, 'r', 200, 40), rock = w.S(x, y, 'b', 10, 10)
		 ).mt(s, t)
		 //<- rJt({  i:[rock, dial, dial.c()],  eM:1,  mS:-10,  mMT:100  })
	 }
	 w.perch = function (c) {
		 var w = this //specific structure, birdage in sky
		 c = c || 't'
		 w.S(200, 50, c, 300, 20) //top
		 w.S(200, 360, c, 300, 20) //bottom
		 w.S(60, 240, c, 20, 260) //left
		 w.S(340, 320, c, 20, 100)//right
		 return w
	 }
	 w.seesaw = function (x, y) {
		 var w = this,
				 anc = w.S(x, y, 'h', 60, 60),
				 lev = w.D(x, y, 'g', 300, 20)
		 w.rJ(anc, lev).lm(-30, 30)
	 }
	 w.car = function (x, y, sp1, sp2) {
		 var w = this, b
		 s = w.D(x, y, 'b', 90, 30)//.bS('me')
		 sp1 = sp1 || 2;
		 sp2 = sp2 || sp1
		 w.rJ(w.D(x - 40, y + 50, 'o', 30), s).mt(sp1)
		 b = w.D(x + 60, y + 50)
		 b.cir({c: 'x', r: 30, rf: 1})
		 w.rJ(b, s).mt(sp2)
		 return s
	 }
	 w.car1 = function () {
		 var w = this, s = sus(150, 150)
		 wh(w.D(200, 150, 'r', 30), 120)
		 wh(w.D(100, 150, 'b', 30), 150)
		 return s
	 }
	 w.roller = function () {
		 var w = this, s = sus(250, 150)
		 a = w.D(300, 150, 'r', 30)
		 wh(a, 6)
		 // wh(w.D(200, 150, 'r', 30), -500)
		 return s
	 }
	 w.makeCar = function () {
		 var w = this, s = sus(240, 350)
		 wh(w.D(300, 400, 'r', 30), 4)
		 wh(w.D(200, 400, 'y', 30), 4)
		 return s
	 }
	 w.makeWheel = w.wh = function () {
		 var w = this, g = G(arguments), wh, o
		 o = O(g[0]) ? g[0]
				 : {x: g[0], y: g[1], r: g[2], n: g[3]}
		 o.r = N(o.r, 40)
		 o.c = o.c || 'x'
		 wh = w.D(o.x, o.y)
		 wh.cir({c: o.c, r: o.r, C: 'w', l: 10, lf: 1})
		 return wh
	 }
	 w.pWheel = w.pWh = function () {
		 var w = this, g = G(arguments), wh, o
		 o = O(g[0]) ? g[0]
				 : {x: g[0], y: g[1], r: g[2], n: g[3]}
		 o.r = N(o.r, 40)
		 o.n = N(o.n, 15)
		 o.c = o.c || 'x'
		 wh = b2d.pC(o.r, o.n)
		 return w.D(o.x, o.y, o.c, [wh])
	 }
	 b.wheel = function () {
		 var b = this, w = b.W(), g = G(arguments), o,
				 j, wh
		 o = O(g[0]) ? g[0]
				 : {x: g[0], y: g[1]}//,r:g[2],n:g[3]}
		 wh = w.wheel(600, 300)
		 j = w.rJ(wh, b, 0, 0, o.x, o.y)
		 return j
	 }
	 j.motorTorque = j.M = function (t) {
		 this.SetMaxMotorTorque(t)
		 return this
	 }
	 wh = function (wh, sp) {
		 var j = w.rev(wh.fr(0).d(1), s)
		 if (N(j)) {
			 j.mt(sp)
		 }
		 return j
	 }
	 w.sus = function (x, y) {
		 return this.D(x, y, 'b', 90, 30)
	 }
	 function _revWhell() {
		 w.spinner = function (x, y, s, t) {
			 var g = G(arguments)
			 x = N(g[0], 500)
			 y = N(g[1], 200)
			 s = N(g[2], 10)
			 t = N(g[3], 100)
			 if (g.n) {
				 s *= -1
			 }
			 w.rJ(
					 dial = w.D(x, y, 'r', 200, 40), rock = w.S(x, y, 'b', 10, 10)
			 ).mt(s, t)
			 //<- rJt({  i:[rock, dial, dial.c()],  eM:1,  mS:-10,  mMT:100  })
		 }
		 w.perch = function (c) {
			 var w = this //specific structure, birdage in sky
			 c = c || 't'
			 w.S(200, 50, c, 300, 20) //top
			 w.S(200, 360, c, 300, 20) //bottom
			 w.S(60, 240, c, 20, 260) //left
			 w.S(340, 320, c, 20, 100)//right
			 return w
		 }
		 w.seesaw = function (x, y) {
			 var w = this,
					 anc = w.S(x, y, 'h', 60, 60),
					 lev = w.D(x, y, 'g', 300, 20)
			 w.rJ(anc, lev).lm(-30, 30)
		 }
		 w.car = function (x, y, sp1, sp2) {
			 var w = this, b
			 s = w.D(x, y, 'b', 90, 30)//.bS('me')
			 sp1 = sp1 || 2;
			 sp2 = sp2 || sp1
			 w.rJ(w.D(x - 40, y + 50, 'o', 30), s).mt(sp1)
			 b = w.D(x + 60, y + 50)
			 b.cir({c: 'x', r: 30, rf: 1})
			 w.rJ(b, s).mt(sp2)
			 return s
		 }
		 w.car1 = function () {
			 var w = this, s = sus(150, 150)
			 wh(w.D(200, 150, 'r', 30), 120)
			 wh(w.D(100, 150, 'b', 30), 150)
			 return s
		 }
		 w.roller = function () {
			 var w = this, s = sus(250, 150)
			 a = w.D(300, 150, 'r', 30)
			 wh(a, 6)
			 // wh(w.D(200, 150, 'r', 30), -500)
			 return s
		 }
		 w.makeCar = function () {
			 var w = this, s = sus(240, 350)
			 wh(w.D(300, 400, 'r', 30), 4)
			 wh(w.D(200, 400, 'y', 30), 4)
			 return s
		 }
		 w.makeWheel = w.wh = function () {
			 var w = this, g = G(arguments), wh, o
			 o = O(g[0]) ? g[0]
					 : {x: g[0], y: g[1], r: g[2], n: g[3]}
			 o.r = N(o.r, 40)
			 o.c = o.c || 'x'
			 wh = w.D(o.x, o.y)
			 wh.cir({c: o.c, r: o.r, C: 'w', l: 10, lf: 1})
			 return wh
		 }
		 w.pWheel = w.pWh = function () {
			 var w = this, g = G(arguments), wh, o
			 o = O(g[0]) ? g[0]
					 : {x: g[0], y: g[1], r: g[2], n: g[3]}
			 o.r = N(o.r, 40)
			 o.n = N(o.n, 15)
			 o.c = o.c || 'x'
			 wh = b2d.pC(o.r, o.n)
			 return w.D(o.x, o.y, o.c, [wh])
		 }
		 b.wheel = function () {
			 var b = this, w = b.W(), g = G(arguments), o,
					 j, wh
			 o = O(g[0]) ? g[0]
					 : {x: g[0], y: g[1]}//,r:g[2],n:g[3]}
			 wh = w.wheel(600, 300)
			 j = w.rJ(wh, b, 0, 0, o.x, o.y)
			 return j
		 }
		 j.motorTorque = j.M = function (t) {
			 this.SetMaxMotorTorque(t)
			 return this
		 }
		 wh = function (wh, sp) {
			 var j = w.rev(wh.fr(0).d(1), s)
			 if (N(j)) {
				 j.mt(sp)
			 }
			 return j
		 }
		 w.sus = function (x, y) {
			 return this.D(x, y, 'b', 90, 30)
		 }
		 MOTORS = function () {
			 W().P().P().P().Y()
			 w.rJ(
					 w.D(800, 300, 'r', 20, 300),
					 w.D(800, 300, [['b', 100], ['y', 50, 10, 100, 0]])
			 ).mt(10)
			 dir = 10
			 car = w.S(300, 300, 'r', 200, 20)
			 b = w.D(250, 300, 'b', 40).d(5).bS('me')
			 j = w.rJ(b, car)//.mt(10)
			 b2 = w.D(350, 300, 'b', 40).d(5)
			 b2.bS('me')
			 j1 = w.rJ(b2,
					 car).mt(10)
			 w.$(function () {
				 dir *= -1
				 j.mt(dir)
				 j1.mt(dir)
			 })
			 _.ev(1, function () {
				 w.D(300, 500, 'y', 20)
			 })
		 }
		 WAGON = function () {
			 W([1200, 600, 4000, 600], {}).P()
			 p.d(.2).track().cl(function () {
				 p.onGround = true
			 })
			 x = w.D(600, 300, 'r', 300, 50).d(2).fr(3)
			 wh = w.D(500, 320)
			 wh.cir({r: 20, lf: 'x'})
			 w.rJ(x, wh)
			 wh = w.D(550, 320)
			 wh.cir({r: 20, lf: 'x'})
			 w.rJ(x, wh)
			 wh = w.D(600, 320)
			 wh.cir({r: 20, lf: 'x'})
			 w.rJ(x, wh)
			 wh = w.D(650, 320)
			 wh.cir({r: 20, lf: 'x'})
			 w.rJ(x, wh)
			 wh = w.D(700, 320)
			 wh.cir({r: 20, lf: 'x'})
			 w.rJ(x, wh)
		 }
		 STAND = function () {
			 W([600, 1000, 600, 1200], {}).P('+')
			 //y= w.ship(500,200)
			 dir = 12
			 car = w.D(300, 300, 'r', 200, 45)
			 w1 = w.rJ(
					 wheel(250, 300),
					 car
			 ).mt(10)
			 w2 = w.rJ(
					 wheel(350, 300), car
			 ).mt(10)
			 car3 = w.D(500, 300, 'r', 200, 45)
			 w.rJ(wheel(450, 300), car3).mt(-10)
			 w.rJ(wheel(550, 300), car3)
			 car3 = w.D(700, 300, 'r', 200, 45)
			 w.rJ(wheel(650, 300), car3).mt(-10)
			 w.rJ(wheel(750, 300), car3).mt(-10)
			 function wheel(x, y) {
				 pC = [b2d.pC(45, 10)]
				 return w.D(x, y, 'b', pC).d(5)
			 }
			
			 w.$(function () {
				 dir *= -1
				 w1.mt(dir)
				 w2.mt(dir)
			 })
		 }
		 WHEEL = function () {
			 W([1200, 600, 2400, 600], {g: 50}).P()
			 p.track()
			 yy = w.y().aD(5000)//.fixRot()
			 dir = 12
			 pC = [b2d.pC(45, 10)]
			 car = w.D(300, 300, 'r', 200, 45).fr(5)
			 w.rJ(
					 wheel(250, 300),
					 car, 0, 0, 100, 0
			 ).mt(-10)
			 w.rJ(
					 wheel(250, 300),
					 car, 0, 0, -100, 0)
			 /*
			  car= w.D(800,300, 'r', 200,45).fr(5)
			  w.rJ(
			  wheel(850, 300),
			  car,0,0,100,0
			  )
			  w.rJ(
			  wheel(850, 300),
			  car,0,0,-100,0).mt(10)
			
			  */
			 function wheel(x, y) {
				 return w.D(x, y, 'b', pC).d(5)
			 }
		 }
		 TANK = function () {
			 W({g: 0}).P()
			 g = V(0, 1000)
			 dir = 12
			 car = w.S(300, 300, 'r', 100, 5)
			 w1 = w.rJ(
					 w.D(250, 300, 'b',
							 [b2d.pC(45, 10)]).d(5), car)//.mt(10)
			 w2 = w.rJ(
					 w.D(350, 300, 'b', [b2d.pC(45, 10)]).d(5), car)//.mt(10)
			 /*
			  w.$(function(){
			  dir*=-1
			  w1.mt(dir)
			  w2.mt(dir)
			  g = V(-g.x,-g.y)
			
			  })
			
			  cjs.t(function(){
			  car.F( g )
			  })
			  w.right.cl(function(){g=V(-1000,0)})
			  w.left.cl(function(){g=V(1000,0)})
			  w.roof.cl(function(){g=V(0,-1000)})
			  w.floor.cl(function(){g=V(0,1000)})
			  */
		 }
		 WALLWHEELS = function () {
			 W(0).Y()
			 x = w.S(600, 300, 'r', 500, 500, '-')
			 wh = w.pWh({
				 x: 450,
				 y: 50,
				 c: 'z',
				 r: 50,
				 n: 9
			 })
			 w.rJ(x, wh, 50, -100)
			 wh = w.pWh({
				 x: 450, y: 50,
				 c: 'b',
				 r: 50,
				 n: 5
			 })
			 w.rJ(x, wh, 0, 100)  //  x.rev(wh,0,100)
			 wh = w.wh({
				 x: 450,
				 y: 50,
				 c: 'z',
				 r: 50,
				 n: 9
			 })
			 w.rJ(x, wh, -150, -50)
			 /*
			  x.wheel(0,0)
			
			  x.wheel({
			  x:450, y:50,
			  c:'b',
			  r:50,
			  n:5
			  })
			  */
		 }
		 BOOTCAN = function () {
			 W({g: 0})
			 w.rJ(w.S(300, 600, 'a', 200),
					 w.D(300, 400, 'b', 100, 100))
			 b = w.D(270, 500, 'o', 40).r(.5)
			 r = w.S(300, 300, 'g', 100, 20).d(.1).damp(1000, 1000).rt(100).dyn()
			 r.rec('g', 20, 40, 60, -20)
			 cjs.t(function () {
				 b.F(0, 400)
			 })
		 }
	 }
	
	 w.shrink = shrink = function (jts) {
		 jts = jts || ropeJoints
		 _.e(jts, function (j) {
			 j.shrink()
		 })
	 }
	 MOTORS = function () {
		 W().P().P().P().Y()
		 w.rJ(
				 w.D(800, 300, 'r', 20, 300),
				 w.D(800, 300, [['b', 100], ['y', 50, 10, 100, 0]])
		 ).mt(10)
		 dir = 10
		 car = w.S(300, 300, 'r', 200, 20)
		 b = w.D(250, 300, 'b', 40).d(5).bS('me')
		 j = w.rJ(b, car)//.mt(10)
		 b2 = w.D(350, 300, 'b', 40).d(5)
		 b2.bS('me')
		 j1 = w.rJ(b2,
				 car).mt(10)
		 w.$(function () {
			 dir *= -1
			 j.mt(dir)
			 j1.mt(dir)
		 })
		 _.ev(1, function () {
			 w.D(300, 500, 'y', 20)
		 })
	 }
	 WAGON = function () {
		 W([1200, 600, 4000, 600], {}).P()
		 p.d(.2).track().cl(function () {
			 p.onGround = true
		 })
		 x = w.D(600, 300, 'r', 300, 50).d(2).fr(3)
		 wh = w.D(500, 320)
		 wh.cir({r: 20, lf: 'x'})
		 w.rJ(x, wh)
		 wh = w.D(550, 320)
		 wh.cir({r: 20, lf: 'x'})
		 w.rJ(x, wh)
		 wh = w.D(600, 320)
		 wh.cir({r: 20, lf: 'x'})
		 w.rJ(x, wh)
		 wh = w.D(650, 320)
		 wh.cir({r: 20, lf: 'x'})
		 w.rJ(x, wh)
		 wh = w.D(700, 320)
		 wh.cir({r: 20, lf: 'x'})
		 w.rJ(x, wh)
	 }
	 STAND = function () {
		 W([600, 1000, 600, 1200], {}).P('+')
		 //y= w.ship(500,200)
		 dir = 12
		 car = w.D(300, 300, 'r', 200, 45)
		 w1 = w.rJ(
				 wheel(250, 300),
				 car
		 ).mt(10)
		 w2 = w.rJ(
				 wheel(350, 300), car
		 ).mt(10)
		 car3 = w.D(500, 300, 'r', 200, 45)
		 w.rJ(wheel(450, 300), car3).mt(-10)
		 w.rJ(wheel(550, 300), car3)
		 car3 = w.D(700, 300, 'r', 200, 45)
		 w.rJ(wheel(650, 300), car3).mt(-10)
		 w.rJ(wheel(750, 300), car3).mt(-10)
		 function wheel(x, y) {
			 pC = [b2d.pC(45, 10)]
			 return w.D(x, y, 'b', pC).d(5)
		 }
		
		 w.$(function () {
			 dir *= -1
			 w1.mt(dir)
			 w2.mt(dir)
		 })
	 }
	 WHEEL = function () {
		 W([1200, 600, 2400, 600], {g: 50}).P()
		 p.track()
		 yy = w.y().aD(5000)//.fixRot()
		 dir = 12
		 pC = [b2d.pC(45, 10)]
		 car = w.D(300, 300, 'r', 200, 45).fr(5)
		 w.rJ(
				 wheel(250, 300),
				 car, 0, 0, 100, 0
		 ).mt(-10)
		 w.rJ(
				 wheel(250, 300),
				 car, 0, 0, -100, 0)
		 /*
		  car= w.D(800,300, 'r', 200,45).fr(5)
		  w.rJ(
		  wheel(850, 300),
		  car,0,0,100,0
		  )
		  w.rJ(
		  wheel(850, 300),
		  car,0,0,-100,0).mt(10)
		
		  */
		 function wheel(x, y) {
			 return w.D(x, y, 'b', pC).d(5)
		 }
	 }
	 TANK = function () {
		 W({g: 0}).P()
		 g = V(0, 1000)
		 dir = 12
		 car = w.S(300, 300, 'r', 100, 5)
		 w1 = w.rJ(
				 w.D(250, 300, 'b',
						 [b2d.pC(45, 10)]).d(5), car)//.mt(10)
		 w2 = w.rJ(
				 w.D(350, 300, 'b', [b2d.pC(45, 10)]).d(5), car)//.mt(10)
		 /*
		  w.$(function(){
		  dir*=-1
		  w1.mt(dir)
		  w2.mt(dir)
		  g = V(-g.x,-g.y)
		
		  })
		
		  cjs.t(function(){
		  car.F( g )
		  })
		  w.right.cl(function(){g=V(-1000,0)})
		  w.left.cl(function(){g=V(1000,0)})
		  w.roof.cl(function(){g=V(0,-1000)})
		  w.floor.cl(function(){g=V(0,1000)})
		  */
	 }
	 WALLWHEELS = function () {
		 W(0).Y()
		 x = w.S(600, 300, 'r', 500, 500, '-')
		 wh = w.pWh({
			 x: 450,
			 y: 50,
			 c: 'z',
			 r: 50,
			 n: 9
		 })
		 w.rJ(x, wh, 50, -100)
		 wh = w.pWh({
			 x: 450, y: 50,
			 c: 'b',
			 r: 50,
			 n: 5
		 })
		 w.rJ(x, wh, 0, 100)  //  x.rev(wh,0,100)
		 wh = w.wh({
			 x: 450,
			 y: 50,
			 c: 'z',
			 r: 50,
			 n: 9
		 })
		 w.rJ(x, wh, -150, -50)
		 /*
		  x.wheel(0,0)
		
		  x.wheel({
		  x:450, y:50,
		  c:'b',
		  r:50,
		  n:5
		  })
		  */
	 }
	 BOOTCAN = function () {
		 W({g: 0})
		 w.rJ(w.S(300, 600, 'a', 200),
				 w.D(300, 400, 'b', 100, 100))
		 b = w.D(270, 500, 'o', 40).r(.5)
		 r = w.S(300, 300, 'g', 100, 20).d(.1).damp(1000, 1000).rt(100).dyn()
		 r.rec('g', 20, 40, 60, -20)
		 cjs.t(function () {
			 b.F(0, 400)
		 })
	 }
 }