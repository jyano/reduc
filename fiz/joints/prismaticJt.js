$L()
jD.lTl = jD.lowTrans = jD.lT = function (a) {
	this.lowerTranslation = a;
	return this
}
jD.uTl = jD.upTrans = jD.uT = function (a) {
	this.upperTranslation = a;
	return this
}
jD.LcA = function (x, y) {
	var jD = this
	jD.LAA(V(x || 0, y || 0));
	jD.LAA().Normalize()
	return jD
}
jD.LcB = function (x, y) {
	var jD = this
	jD.LAB(V(x || 0, y || 0));
	jD.LAB().Normalize()
	return jD
}
jD.SL = function (l, u) {
	this.SetLimits(l, u);
	return this
}
pJ.GUL = function () {
	return this.GetUpperLimit()
}
pJ.GLL = function () {
	return this.GetLowerLimit()
}
pJ.SL = function () {
	this.SetLimits.apply(this, arguments)
	return this
}
pJ.uT = pJ.uL = pJ.U = function (u) {
	var pJ = this
	return U(u) ? (pJ.GUL() * 30) :
			pJ.SL(pJ.L(), u / 30)
}
pJ.lT = pJ.lL = pJ.L = function (l) {
	var pJ = this
	return U(l) ? pJ.GLL() * 30 :
			pJ.SL(l / 30, pJ.U())
}
pJ.LU = function (l, u) {
	var pJ = this
	pJ.lL(l)
	pJ.uL(u)
	return pJ
}
pJ.UL = function (u, l) {
	return this.lm(l, u)
}
pJ.lm = function (l, u) {
	var pJ = this, g = G(arguments)
	pJ.SL(g.f / 30, (g.s + 1) / 30)
	pJ.lT(l)
	pJ.uT(u)
	return g.n ? pJ : pJ.l1()
}
pJ.lms = function (l, u) {
	return this.SL(l / 30, u / 30).l1()
}
pJ.mt = function (a, b) {
	var pJ = this, g = G(arguments)
	pJ.mS(g.f)
	pJ.mMF(N(g.s, 100))
	return g.n ? pJ : pJ.m1()
}
_$pJ = function (a, b) {
	var j = new b2d.PJD()
	j.A(a)
	j.B(b)
	return j
}
$pJ = function (b1, b2, lXA, lAA, lAB, rA) {//b2d.prismaticJointDef = PrismaticJointDef = prJt=
	var g = G(arguments)
	var jD = _$pJ(b1, b2)
	//local direction A ? the angle of the actual slider joint
	jD.lXA(D(lXA) ? lXA : V(0, 1))
	//local axis A
	jD.lAA(D(lAA) ? lAA : b1.GWC())
	//local axis B
	jD.lAB(D(lAB) ? lAB : b2.GWC())
	// something with rotation
	if (D(rA)) {
		jD.rA(rA)
	}
	return jD
}
w._pJ = function () {
	return this.CJ($pJ.apply(null, arguments))
}
w.pJ = function () {
	var w = this, g = G(arguments), o//a, b, x, y, rt
	o = O(g.t) ? {
		x: g.t.s, y: g.t.y, an: g.fo
	} : {
		x: g.t, y: g.fo, an: g.fi
	}
	var jD = _$pJ()
	A(g.f) ? jD.A(g.f[0]).vA(g.f[1], g.f[2]) : jD.A(g.f)
	A(g.s) ? jD.B(g.s[0]).vA(g.s[1], g.s[2]) : jD.B(g.s)
	jD.LcA(o.x, o.y)
	N(o.an) ? jD.rA(o.an) : 0
	return w.CJ(jD)
}
RPP = function () {
	W(20)
	x = 100;
	y = 300
	b = w.brk(x, y)
	b1 = w.bal(x, y)
	j = w.pJ(b, b1, V(1, 0), b.GWC(),
			b1.GWC()).lm(-100, 100)
	j.m1().mF(1).spd(100)
	_.in(4, function () {
		b.dyn()
	})
}//ok
JTL = function () {
	W()
	b = w.S(300, 400).A($rF(300, 50, 20, 0, 12))
	b1 = w.D(300, 400).A($cF(30))
	j = w.pJ(b, b1)
}//ok
PLM = function () {
	W({g: 5})
	x = w.brk(400, 300, 40, 40).fr(1)
	b = w.box(500, 200, 200, 40).K('box')
	var jD = _$pJ(x, b).rA(55)
	jD.localAxisA = V(1, 1)
	jD.upperTranslation = -200
	jD.lowerTranslation = 200
	// j = w.pJ([x,-30,2], b, V(1,-2), 45)
	j = w.CJ(jD).l1()
	p = w.p('thrust').de(0)
	var speed = 10
	j.mt(speed)
	j.LU(-100, 300)
	j.SetLimits(-50, 10)
	j.l1()
}//ok
BMP = function () {
	W(30)
	b = Ride(600).bS('me')
	j1 = w.CJ(
			$pJ(
					Ride(200),
					Cart(200)
			).ax(V(0, -1))
	)
	//.limits(-30, 60).speed(-100).motor(1).maxForce(1000)
	j2 = w.CJ(
			$pJ(
					Ride(400),
					Cart(400)
			).ax(V(0, -1))
	)
	//.limits(-30, 60).speed(-100).maxForce(1000).motor(1)
	//.limits(-30, 60).spd(-100).mt(1).MF(1000)
	w.CJ(
			$pJ(b,
					Cart(600)
			).ax(V(0, -1))
	)
	w.cl('cart', function () {
		w.eB(function (b) {
			// $l('cart')
			if (b.of('ride')) {
				//$l('ride')
				b.I(0, -1000)
			}
		})
	})
	w.bal(200, 200, 100)
	function Ride(x) {
		return w.bal(x, 500, 40).K('ride')
	}
	
	function Cart(x) {
		return w.brk(x, 500, 40, 40).K('cart')
	}
}//ok
PR1 = function () {
	W()
	b = w.box(500, 200, 20, 20).K('cart')
	b1 = w.brk(540, 150, 180, 90).K('ride')
	jD = $pJ(
			b,
			b1,
			V(1, .3), //.Normalize()
			V(b1.GWC().d().x, b1.GWC().d().y + 5),
			b.GWC().d(),
			5
	)
	jD.mS(-100000)
	jD.lT(-12)
	jD.uT(12.5)
	//jD.l1()
	jD.m1()
	jD.mMF(10)
	j = w.CJ(jD)
} //ok
ELV = function () {
	p = W().p()
	w.elv = function (x) {
		var w = this
		var elv = {}
		elv.plat = w.box(x, 100, 100, 10).K('elv')
		elv.base = w.brk(x, 150, 1, 100, '-').fr(100)
		elv.j = w.CJ($pJ(elv.plat, elv.base).ax(V(0, 1)))
		elv.speed = 2
		elv.j.mt(elv.speed)
		elv.flip = _.throttle(function () {
			var elv = this;
			elv.j.mt(elv.speed *= -1)
		}, 200, {trailing: false})
		elv.plat.cl(function () {
			elv.flip()
		})
		elv.plat.cl('player', function (p) {
			p.B().lV(0)
		})
		return elv
	}
	w.elv(200)
	w.elv(400)
	w.elv(600)
	w.elv(750)
	w.elv(900)
	/* w.elv(1000)
	 w.elv(1100)
	 w.elv(1200)
	 w.elv(1300)
	 w.elv(1400)
	 w.elv(1500)
	 w.elv(1600)
	 w.elv(1700)
	 w.elv(1800)
	 w.elv(1900)
	 w.elv(2000)
	 //these fall into the abyss when there is no floor (or ceiling)
	 w.elv(2100)
	 w.elv(2200)
	 w.elv(2300)
	 w.elv(2400)
	 w.elv(2500)
	 w.elv(2600)
	 w.elv(2700)
	 w.elv(2800)
	 w.elv(2900)
	 w.elv(2000)*/
} //ok
PR3 = function () {
	W({g: 5})
	x = w.brk(400, 300, 40, 40).fr(1)
	b = w.box(500, 200, 200, 40).K('box')
	//var jD = __$pJ(x,b).cC1().rA(.5)//jd.motorSpeed=100 //jd.maxMotorForce=1000 // jD.localAxisA= V(1,1) //jD.upperTranslation=20
	j = w.pJ([x, -30, 2], b, V(1, -2), 45) //j =  w.J(jd) //j.EnableMotor(true)
	p = w.p('thrust').de(1).fr(1)
	_.in(5, function () {
		j.mt(spd = 10)
		w.b(function (cx) {
			cx.w('box', function () {
				spd *= -1
			});
			j.mt(spd)
		})
	})
}//ok
PR2 = CHANGEPRISMLIMANDMOTOR = function () {
	W({//w:0
	}).G(30)
	cart = w.box(300, 200, 20, 20).re(1)
	ride = w.brk(340, 150, 180, 90)
	cen = ride.GWC().m()
	jD = $pJ(ride, cart)
	jD.xyA(30, 90)
	jD.vB(cen.x, cen.y + 5)//, cart.GWC().d(), 5
	jD.ax(V(.3, 1))
	j = w.CJ(jD)
	j.mF(100)
	j.spd(-100).m1()
	_.in(5, function () {
		w.C('g');
		j.m0()
	})
}//ok
//pd.i=function(){this.Initialize.apply(this, G(arguments));return this}
function _pre() {
	b2d.PJD = b2d.Js.b2PrismaticJointDef
	b2d.PJ = b2d.Js.b2PrismaticJoint
	pD = b2d.PJD.prototype
	pJ = b2d.PJ.prototype
}
function _prism(){
	/*
	 localAxisA - the axis (line) of movement (relative to bodyA)
	 referenceAngle - the angle to be enforced between the bodies
	
	
	 localAnchorA - a point in body A to keep on the axis line
	 localAnchorB - a point in body B to keep on the axis line
	
	
	 enableLimit - whether the joint limits will be active
	 lowerTranslation - position of the lower limit
	 upperTranslation - position of the upper limit
	
	 enableMotor - whether the joint motor will be active
	 motorSpeed - the target speed of the joint motor
	 maxMotorForce - the maximum allowable force the motor can use
	 */
	pJ = b2d.Joints.b2PrismaticJoint.prototype
//pj.limits = function(low, up){this.SetLimits(low/30, up/30); this.enableLimit(true); return this }
	pJ.lm = function (lowerLimit, upperLimit) {
		var g = G(arguments), l = g[0], u = g[1]
		this.SetLimits(l / 30, (u + 1) / 30)
		if (g.N) {
			this.EnableLimit(true)
		}
		return this
	}
	pJ.val = function (val) {
		if (U(val)) {
			return parseInt(this.GetJointTranslation() * 30)
		}
	}
	pd = b2d.Joints.b2PrismaticJointDef.prototype
//pd.i=function(){this.Initialize.apply(this, G(arguments));return this}
	b2d.prism = b2d.prismDef = function (b1, b2, lXA, lAA, lAB, rA) {//b2d.prismaticJointDef = PrismaticJointDef = prJt=
		var j = new b2d.Joints.b2PrismaticJointDef()
		j.mt = function (a, b, c) {
			j.mS(a)
			j.mMF(N(b) ? b : 100)
			if (c != '-') {
				j.eM(1)
			}
			return j
		}
		j.lm = function (lT, uT, enableLimit) {
			j.lT(lT).uT(uT)
			if (enableLimit != '-') {
				j.eL(true)
			}
			return j
		}
		if (D(b1)) {
			j.A(b1)
		}
		if (D(b2)) {
			j.B(b2)
		}
		//local direction A ? the angle of the actual slider joint
		j.lXA(D(lXA) ? lXA : V(0, 1))
		//local axis A
		j.lAA(D(d) ? lAA : b1.worldCenter())
		//local axis B
		j.lAB(D(e) ? lAB : b2.worldCenter())
		// something with rotation
		if (D(rA)) {
			j.rA(rA)
		}
		return j
	}
	RandomPrismPair = sPrJ = function (x, y) {
		x = N(x) ? x : 100
		y = N(y) ? y : x
		var firstBody = w.FixBody(x, y)
		var secondBody = w.FixBody(x, y)
		j = world.Prism(firstBody, secondBody, b2.V(1, 0), firstBody.worldCenter(),
				secondBody.worldCenter()).limits(-100, 100)  //j.maxForce(1).speed(100).motor(1)
		return j
	}//makes random shaped prismatic joint
	function JointGetJointTranslation() {
		var axis = this.m_bodyA.GetWorldVector(this.m_localXAxis1),
				p1 = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
				p2 = this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
		return axis.x * (p2.x - p1.x) + axis.y * (p2.y - p1.y)
	}//box2d source
	NEWPRISM = function () {
		w = b2d.mW({grav: 5})
		x = w.brick(400, 300, 40, 40).den(1).fric(1)
		b = w.box(500, 200, 200, 40).den(1).K('box')
		jd = new b2d.Joints.b2PrismaticJointDef()
		jd.collideConnected = true
		//jd.motorSpeed=100
		//jd.maxMotorForce=1000
		jd.bodyA = x
		jd.bodyB = b
		jd.referenceAngle = .5
		// jd.localAxisA= V(1,1)
		//jd.upperTranslation=20
		j = w.prism([x, -30, 2], b, V(1, -2), 45)
		//j =  w.J(jd)
		//j.EnableMotor(true)
		p = w.player('thrust').den(1).fric(1)
		var speed = 10
		j.mot(speed)
		w.begin(function (cx) {
			if (cx.with('box')) {
				speed *= -1
			}
			j.mot(speed)
		})
	}
	MARIOELEVATOR = function () {
		b2d.levelScrollX()
		w.elev(200)
		w.elev(400)
		w.elev(600)
		w.elev(750)
		w.elev(900)
		w.elev(1000)
		w.elev(1100)
		w.elev(1200)
		w.elev(1300)
		w.elev(1400)
		w.elev(1500)
		w.elev(1600)
		w.elev(1700)
		w.elev(1800)
		w.elev(1900)
		w.elev(2000)
		//these fall into the abyss when there is no floor (or ceiling)
		w.elev(2100)
		w.elev(2200)
		w.elev(2300)
		w.elev(2400)
		w.elev(2500)
		w.elev(2600)
		w.elev(2700)
		w.elev(2800)
		w.elev(2900)
		w.elev(2000)
	}
	PRISM = function () {
		b2d.W()
		cart = w.box(500, 200, 20, 20)
		ride = w.brick(540, 150, 180, 90)
		rC = ride.worldCenter()
		cC = cart.worldCenter()
		jd = b2d.prism(
				ride,
				cart,
				V(1, .3), //.Normalize()
				V(rC().x, rC.y + 5),
				cC,
				5)
		jd.mS(-100000).lT(-12).uT(12.5).eL(true).eM(true).mMF(10)//works
		j = w.J(jd)
	}
	PRISM2 = CHANGEPRISMLIMANDMOTOR = function () {
		world = b2d.W()
		cart = world.box(500, 200, 20, 20)
		ride = world.brick(540, 150, 180, 90)
		j = w.Prism(
				ride,
				cart,
				V(1, .3), //.Normalize()
				V(ride.worldCenter().x, ride.worldCenter().y + 5),
				cart.worldCenter(),
				5
		)
		j.maxForce(10000).speed(-100).motor(1)
		setTimeout(function () {
			j.motor(false)
		}, 2000)
		setTimeout(function () {
			j.motor(true)
		}, 5000)
	}
	BUMPER = function () {
		w = b2d.mW()
		var circle = w.ball(600, 500, 40).K('ride').bindSprite('me')
		j1 = w.prism(
				w.brick(200, 500, 40).K('ride'),
				w.brick(200, 500, 40, 40).K('cart')
		)//.limits(-30, 60).speed(-100).motor(1).maxForce(1000)
		j2 = w.prism(
				w.ball(400, 500, 40).K('ride'),
				w.brick(400, 500, 40, 40).K('cart')
		)//.limits(-30, 60).speed(-100).maxForce(1000).motor(1)
		w.prism(circle, w.brick(600, 500, 40, 40).K('cart')
		).limits(-30, 60).speed(-100).motor(1).maxForce(1000)
		w.begin(function (contact) {
			if (contact.with('cart')) {
				w.each(
						function (b) {
							if (b.is('ride')) {
								b.I(0, -1000)
							}
						}
				)
			}
		})
		w.ball(200, 200, 100)
	}
	PRISMLIMITS = function () {
		w = b2d.mW({grav: 5})
		x = w.brick(400, 300, 40, 40).den(1).fric(1)
		b = w.box(500, 200, 200, 40).den(1).K('box')
		jd = new b2d.Joints.b2PrismaticJointDef()
		//jd.collideConnected=true
		jd.bodyA = x
		jd.bodyB = b
		jd.referenceAngle = .5
		// jd.localAxisA= V(1,1)
		// jd.upperTranslation=-200
		//  jd.lowerTranslation=200
		// j = w.prism([x,-30,2], b, V(1,-2), 45)
		j = w.J(jd)
		//  j.EnableLimit(true)
		p = w.player('thrust').den(1).fric(1)
		p.den(0)
		var speed = 10
		// j.mot(speed)
		j.U = function (u) {
			if (U(u)) {
				return this.GetUpperLimit() * 30
			}
			this.SetLimits(this.L(), u / 30)
			return this
		}
		j.L = function (l) {
			if (U(l)) {
				return this.GetLowerLimit() * 30
			}
			this.SetLimits(l / 30, this.U())
			return this
		}
		j.UL = function (u, l) {
			return this.U(u).L(l)
		}
		j.LU = function (l, u) {
			return this.L(l).U(u)
		}
		j.LU(-100, 300)
		//j.SetLimits(-50,10)
		j.EnableLimit(true)
	}
}
function prismatic(){
	b2d.p()
	pJD.ax = pJD.axis = pJD.lAA = function () {
		var pJD = this, g = G(arguments),
				v = V(g[0], g[1])
		pJD.localAxisA.Set(v.x, v.y)
		pJD.localAxisA.Normalize()
		return pJD
	}
	pJD.refRot = pJD.refAng = pJD.rt = pJD.rA = pJD.ang = function (a) {
		var pJD = this
		if (N(a)) {
			pJD.referenceAngle = M.tR(a)
		}
		return pJD
	}
	pJ.lm = pJ.limits = function () {
		var pJ = this,
				g = G(arguments), v, l, u
		if (U(g[0])) {
			if (g.p) {
				pJ.EnableLimit(true);
				return pJ
			}
			else if (g.n) {
				pJ.EnableLimit(false);
				return pJ
			}
			else if (g.d) {
				pJ.lm(pJ.lm());
				return pJ
			}
			return pJ.m_enableLimit
		}
		v = V(g[0], g[1]).div()
		pJ.SetLimits(v.x, v.y) // ? pJ.SetLimits(l/30, (u+1)/30) ?
		if (g.N) {
			pJ.EnableLimit(true)
		}
		return pJ
	}
	pJ.maxMotForc = pJ.max = function (f) {
		var pJ = this
		if (U(f)) {
			return pJ.m_maxMotorForce
		}
		pJ.SetMaxMotorForce(f)
		return pJ
	}
	pJ.speed = pJ.motSpeed = pJ.sp = function (s) {
		var pJ = this
		if (U(s)) {
			return pJ.GetMotorSpeed()
		}
		pJ.SetMotorSpeed(s)
		return pJ
	}
	pJ.moFo = pJ.getMotForc = pJ.gMotForc = pJ.motForc = pJ.F = function (f) {
		var pJ = this
		if (U(f)) {
			return pJ.GetMotorForce()
		}
		//pJ -> apply a force f
		return pJ
	}
	pJ._eM = pJ.EnableMotor
	pJ.eM = function (eM) {
		this._eM(eM ? true : false)
		return this
	}
	pJ.mt = function () {
		var pJ = this, g = G(arguments)
		if (N(g[0])) {
			pJ.SetMotorSpeed(g[0])
			pJ.SetMaxMotorForce(N(g[1], 1000))
			if (g.N) {
				pJ.EnableMotor(true)
			}
		}
		else if (g.n) {
			pJ.EnableMotor(false)
		}
		else if (g.p) {
			pJ.EnableMotor(true)
		}
		return pJ
	}
	pJ.uL = pJ.U = function (uL) {
		var j = this
		if (U(uL)) {
			return j.GetUpperLimit() * 30
		}
		j.lm(j.lL(), uL)
		return j
	}
	pJ.lL = pJ.L = function (l) {
		var j = this
		if (U(l)) {
			return j.GetLowerLimit() * 30
		}
		j.lm(l, j.U())
		return j
	}
	pJ.UL = function (u, l) {
		return this.U(u).L(l)
	}
	pJ.LU = function (l, u) {
		return this.L(l).U(u)
	}
	pJ.tl = pJ.val = pJ.tran = function (val) {
		return parseInt(this.GetJointTranslation() * 30)
	}
	pJ.limits = pJ.enLim = pJ.lm = function () {
		var j = this, g = G(arguments), o
		o = A(g[0]) ? {
			lL: g[0][0],
			uL: g[0][1]
		} :
		{lL: g[0], uL: g[1]}
		if (g[0] == 1) {
			j.EnableLimit(true);
			return
		}
		if (g[0] == 0) {
			j.EnableLimit(false);
			return
		}
		j.SetLimits(o.lL / 30, o.uL / 30)
		if (g.N) {
			j.EnableLimit(true)
		}
		return j
	}
	w.prism = function (a, b, x, y, rot) {
		var w = this, jd, j
		jd = new b2d.Joints.b2PrismaticJointDef()
		a = A(a) ? a : [a]
		jd.bodyA = a[0]
		jd.localAnchorA = O(a[1]) ? a[1].div() : V(a[1], a[2], '-')
		b = A(b) ? b : [b]
		jd.bodyB = b[0]
		jd.localAnchorB = O(b[1]) ? b[1].div() : V(b[1], b[2], '-')
		jd.axis(x, y)
		jd.ang(O(x) ? y : rot)
		o = O(g[0] && !b2d.iB(g[0])) ? g[0]
				: _.x({b1: g[0], b2: g[0]},
				O(g[2]) ? {axis: g[2], a: g[3]} : {axis: V(g[2], g[3]), a: g[4]})
		g[0] = A(g[0]) ? g[0] : [g[0]]
		g[1] = A(g[1]) ? g[1] : [g[1]]
		o.A = g[0][0]
		o.aV = O(g[0][1]) ? g[0][1].div() : V(g[0][1], g[0][2], '-')
		o.B = g[1][0]
		o.bV = O(g[1][1]) ? g[1][1].div() : V(g[1][1], g[1][2], '-')
		jd.axis = V(g[2], g[3])
		jd.a = O(g[2]) ? g[3] : g[4]
		if (A(o.a)) {
			o.aV = V(o.a[1], o.a[2])
			o.a = o.a[0]
		}
		if (A(o.a)) {
			jd.bodyA = o.a[0]
			if (O(o.a[1])) {
				jd.localAnchorA = o.a[1]
			}
			else if (N(o.a[1])) {
				jd.localAnchorA = V(o.a[1], o.a[2], '-')
			}
		}
		else {
			jd.bodyA = o.a
		}
		jD.bodyA = o.a
		if (A(o.b)) {
			o.bV = V(o.b[1], o.b[2])
			o.b = o.b[0]
		}
		if (A(o.b)) {
			jd.bodyB = o.b[0]
			if (O(o.b[1])) {
				jd.localAnchorB = o.b[1]
			}
			else if (N(o.a[1])) {
				jd.localAnchorB = V(o.b[1], o.b[2], '-')
			}
		}
		else {
			jd.bodyB = o.b
		}
		jD.bodyB = o.b
		o.aV = o.aV || o.a.wC();
		jD.localAnchorA = o.aV.div()
		o.bV = o.bV || o.b.wC();
		jD.localAnchorB = o.bV.div()
		if (N(o.x)) {
			jd.ax(o.x, o.y).rA(o.a)
		}
		else if (O(o.x)) {
			jd.ax(x.x, x.y).rA(y)
		}
		jD.axis(o.ax)
		jD.rt(o.rA)
		return w.J(jd)
	}
	w.pJ = function () {
		var w = this, g = G(arguments), o, j,
				jd = new b2d.PrismaticJointDef
		o = b2d.iB(g.f) ?
		{a: g.f, b: g[1], ax: g[2], rA: g[3]} : g[0]
		jd.bodyA = o.a
		jd.bodyB = o.b
		o.aV = o.aV || [0, 0];
		jd.aV(o.aV)
		o.bV = o.bV || [0, 0];
		jd.bV(o.bV)
		o.ax = o.ax || [0, 1];
		jd.ax(o.ax)
		o.rA = o.rA || 0;
		jd.rA(o.rA)
		j = w.J(jd)
		if (o.lm) {
			j.lm(o.lm)
		}
		return j
	}
	w.Elv = function (x, y, H) {
		var w = this, elv, wire, j, speed = 10
		x = N(x, 400)
		j = w.pJ({
			a: wire = w.S(x, w.h - 200, 's', [[60, 60, '-']]).d(1).fr(1),
			b: elv = w.D(x + 100, w.h - 300, 'd', 200, 40).d(.1).K('elv'),
			lm: [-250, 100]
		}).mt(speed)
		elv.cl(
				_.debounce(reverse, 200, true)
		)
		function reverse() {
			j.mt(speed *= -1)
		}
	}
	ELV = function () {
		W()
		w.Elv()
	}
	w.elev = function (x, yy, H) {
		var w = this,
				y = w.h - yy,
				elv,
				speed = 5,
				wire, j
		j = w.pJ(
				wire = w.S(x, y - H / 2, 'w', [[100, H, '-']]),
				elv = w.S(x, y - 300, 'm', 30).r(3).K('elv').bS('sun'),
				V(0, 1)
		).lm(-H / 2, H / 2).mt(-100)
		elv.cl(_.th(function () {
			j.mt(speed *= -1)
		}, 200, {trailing: false}))
		elv.cl(function (p) {
			p.B().lV(0)
		})
	}
	ELEVS = function () {
		W([1200, 600, 2400, 1200], {g: 400})
		w.p(100, 300, '+')
		w.elev(300, 100, 300)
		w.elev(600, 100, 500)
		w.elev(900, 300, 400)
		w.elev(200, 500, 300)
		w.elev(400, 800, 200)
		w.elev(600, 600, 500)
		w.elev(750, 700, 300)
		w.elev(900, 900, 300)
	}
	BUMPER = function () {
		W().P(800)
		j1 = w.pJ(w.D(200, 500, 'z', 60).K('ride'),
				w.S(200, 500, 's', 40, 150).K('cart'))//.lm(-30, 60).speed(-100).motor(1).maxForce(1000)
				.lm(-30, 60).mt(-10)//.speed(-100).maxForce(1000)
		j2 = w.pJ(w.D(400, 500, 'z', 110).K('ride'),
				w.S(400, 500, 's', 40, 300).K('cart'))
				.lm(-30, 60).mt(10)//.speed(-100).maxForce(1000)
		w.pJ(
				w.D(600, 500, 'z', 80).K('ride'),
				w.S(600, 500, 's', 40, 250).K('cart')
		).lm(-30, 60).mt(-100)//.speed(-100).maxForce(1000)
		w.b(function (cx) {
			cx.w('cart', function () {
				w.e(function (b) {
					if (b.of('ride')) {
						b.I(0, -1000)
					}
				})
			})
		})
	}
	//// OLD //////
	PRISM0 = function () {
		W(5)
		p = w.player(500, 200, 'thrust').den(1).fric(1)
		j = w.pJ({
			a: w.S(400, 300, 's', 40, 40).den(1).fric(1),
			aV: [-30, 2],
			b: w.D(500, 200, 'd', 200, 40).den(1).K('box'),
			ax: V(1, -2),
			rA: 45
		})
		speed = 10
		j.mt(speed)
		w.beg(function (cx) {
			cx.with('box',
					function () {
						speed *= -1
					})
			j.mt(speed)
		})
	}
	//jd.mS(-100000).lT(-12).uT(12.5).eL(true).eM(true).mMF(10)//works
	b2d.pJ = function (b1, b2, lXA, lAA, lAB, rA) {//b2d.prismaticJointDef = PrismaticJointDef = prJt=
		var j = new b2d.Joints.b2PrismaticJointDef()
		j.mt = function (a, b, c) {
			j.mS(a)
			j.mMF(N(b) ? b : 100)
			if (c != '-') {
				j.eM(1)
			}
			return j
		}
		j.lm = function (lT, uT, enableLimit) {
			j.lT(lT).uT(uT)
			if (enableLimit != '-') {
				j.eL(true)
			}
			return j
		}
		if (D(b1)) {
			j.A(b1)
		}
		if (D(b2)) {
			j.B(b2)
		}
		//local direction A ? the angle of the actual slider joint
		j.lXA(D(lXA) ? lXA : V(0, 1))
		//local axis A
		j.lAA(D(d) ? lAA : b1.worldCenter())
		//local axis B
		j.lAB(D(e) ? lAB : b2.worldCenter())
		// something with rotation
		if (D(rA)) {
			j.rA(rA)
		}
		return j
	}
	w.Prism = function (a, b, c, d, e, f, g, h) {
		return this.J(b2d.pJ(a, b, c, d, e, f, g, h))
	}
	w.elevx = function (x) {
		var elev = {}
		elev.plat = this.rect(x, 100, 100, 10).den(1).K('elev')
				.coll(function () {
					elev.flip()
				})
				.collWithKind('player', function (p) {
					p.linVel(0)
				})
		elev.base = this.brickSensor(x, 150, 1, 100).den(1).fric(100)
		elev.j = this.prism(elev.plat, elev.base, V(0, 1))
		elev.speed = 2
		elev.j.mt(elev.speed)
		elev.flip = _.throttle(function () {
			this.j.mt(this.speed *= -1)
		}, 200, {trailing: false})
		return elev
	}
	/*
	 enableLimit - whether the joint limits will be active
	 lowerTranslation - position of the lower limit
	 upperTranslation - position of the upper limit
	
	 enableMotor	- whether
	 the
	 joint
	 motor
	 will
	 be
	 active
	 motorSpeed - the
	 target
	 speed
	 of
	 the
	 joint
	 motor
	 maxMotorForce - the
	 maximum
	 allowable
	 force
	 the
	 motor
	 can
	 use
	 * /
	 JointGetJointTranslation=function() {
	 var axis = this.m_bodyA.GetWorldVector(this.m_localXAxis1),
	 p1 = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
	 p2 = this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
	 return axis.x * (p2.x - p1.x) + axis.y * (p2.y - p1.y)
	 }//box2d source
	 /*
	
	 pJD.maxForce= j.mMF=function(a){var j=this
	 j.maxMotorForce = a; return j
	 }
	
	
	 pJD.speed=j.mS=function(a){this.motorSpeed = a; return this}
	 pJD.motor=j.eM=function(a){
	 this.enableMotor = a?true:false; return this}
	 pJD.maxSpeed =j.mMS=function(a){ this.maxMotorSpeed=a; return this }
	
	
	
	 pJD.lowTrans=j.lT=function(a){
	 this.lowerTranslation=a;return this}
	 pJD.upTrans=j.uT=function(a){
	 this.upperTranslation=a;
	 return this}
	
	 pJD.lm=function(a){ this.enableLimit=a?true:false;return this}
	
	 -----
	
	
	 pJ.speed = function (speed) {//j.mS
	 this.SetMotorSpeed(speed)
	 return this
	 }
	
	
	
	 */
	function _prismatic() {
		$L('lim', 'mot')
		pJD.ax = pJD.axis = pJD.lAA = function () {
			var pJD = this, g = G(arguments),
					v = V(g[0], g[1])
			pJD.localAxisA.Set(v.x, v.y)
			pJD.localAxisA.Normalize()
			return pJD
		}
		pJD.refRot = pJD.refAng = pJD.rt = pJD.rA = pJD.ang = function (a) {
			var pJD = this
			if (N(a)) {
				pJD.referenceAngle = M.tR(a)
			}
			return pJD
		}
		function mot() {
			pJ.SMMF = function (fo) {
				this.SetMaxMotorForce(fo);
				return this
			}
			pJ.GMF = function () {
				return this.GetMotorForce()
			}
			pJ.fo = function (fo) {
				var pJ = this
				if (U(fo)) {
					return pJ.GMF()
				}
				//pJ -> apply a force f
				return pJ
			}
			pJ.mF = pJ.mMFo = pJ.maxMotForc = pJ.max = function (fo) {
				var pJ = this
				return U(fo) ? pJ.m_maxMotorForce :
						pJ.SMMF(fo)
			}
			pJ.mt = pJ.mot = function () {
				var pJ = this, g = G(arguments)
				pJ.mF(N(g.s, 1000)).sp(g.f)
				return g.n ? pJ : pJ.m1()
			}
		}
		
		function lim() {
			pJ.uL = pJ.U = function (uL) {
				var j = this
				if (U(uL)) {
					return j.GetUpperLimit() * 30
				}
				j.lm(j.lL(), uL)
				return j
			}
			pJ.lL = pJ.L = function (l) {
				var j = this
				if (U(l)) {
					return j.GetLowerLimit() * 30
				}
				j.lm(l, j.U())
				return j
			}
			pJ.UL = function (u, l) {
				return this.U(u).L(l)
			}
			pJ.LU = function (l, u) {
				return this.L(l).U(u)
			}
			pJ.tl = pJ.val = pJ.tran = function (val) {
				return parseInt(this.GetJointTranslation() * 30)
			}
			pJ.lm = function () {
				var pJ = this,
						g = G(arguments), v, l, u
				if (U(g[0])) {
					if (g.p) {
						pJ.EnableLimit(true);
						return pJ
					}
					else if (g.n) {
						pJ.EnableLimit(false);
						return pJ
					}
					else if (g.d) {
						pJ.lm(pJ.lm());
						return pJ
					}
					return pJ.m_enableLimit
				}
				v = V(g[0], g[1]).div()
				pJ.SetLimits(v.x, v.y) // ? pJ.SetLimits(l/30, (u+1)/30) ?
				if (g.N) {
					pJ.EnableLimit(true)
				}
				return pJ
			}
			pJ.lm = function () {
				var j = this, g = G(arguments), o
				o = A(g[0]) ? {
					lL: g[0][0], uL: g[0][1]
				} : {lL: g[0], uL: g[1]}
				if (g[0] == 1) {
					j.EnableLimit(true);
					return
				}
				if (g[0] == 0) {
					j.EnableLimit(false);
					return
				}
				j.SetLimits(o.lL / 30, o.uL / 30)
				if (g.N) {
					j.EnableLimit(true)
				}
				return j
			}
		}
		
		w.prism = function (a, b, x, y, rot) {
			var w = this, jd, j
			jd = new b2d.Joints.b2PrismaticJointDef()
			a = A(a) ? a : [a]
			jd.bodyA = a[0]
			jd.localAnchorA = O(a[1]) ? a[1].div() : V(a[1], a[2], '-')
			b = A(b) ? b : [b]
			jd.bodyB = b[0]
			jd.localAnchorB = O(b[1]) ? b[1].div() : V(b[1], b[2], '-')
			jd.axis(x, y)
			jd.ang(O(x) ? y : rot)
			o = O(g[0] && !b2d.iB(g[0])) ? g[0]
					: _.x({b1: g[0], b2: g[0]},
					O(g[2]) ? {axis: g[2], a: g[3]} :
					{axis: V(g[2], g[3]), a: g[4]})
			//
			g[0] = A(g[0]) ? g[0] : [g[0]]
			g[1] = A(g[1]) ? g[1] : [g[1]]
			o.A = g[0][0]
			o.B = g[1][0]
			//
			o.aV = O(g[0][1]) ? g[0][1].d() : V(g[0][1], g[0][2]).d()
			o.bV = O(g[1][1]) ? g[1][1].d() : V(g[1][1], g[1][2]).d()
			//
			jd.axis = V(g[2], g[3])
			jd.a = O(g[2]) ? g[3] : g[4]
			if (A(o.a)) {
				o.aV = V(o.a[1], o.a[2])
				o.a = o.a[0]
			}
			if (A(o.a)) {
				jd.bodyA = o.a[0]
				if (O(o.a[1])) {
					jd.localAnchorA = o.a[1]
				}
				else if (N(o.a[1])) {
					jd.localAnchorA = V(o.a[1], o.a[2], '-')
				}
			}
			else {
				jd.bodyA = o.a
			}
			jD.bodyA = o.a
			if (A(o.b)) {
				o.bV = V(o.b[1], o.b[2])
				o.b = o.b[0]
			}
			if (A(o.b)) {
				jd.bodyB = o.b[0]
				if (O(o.b[1])) {
					jd.localAnchorB = o.b[1]
				}
				else if (N(o.a[1])) {
					jd.localAnchorB = V(o.b[1], o.b[2], '-')
				}
			}
			else {
				jd.bodyB = o.b
			}
			jD.bodyB = o.b
			o.aV = o.aV || o.a.wC();
			jD.localAnchorA = o.aV.d()
			o.bV = o.bV || o.b.wC();
			jD.localAnchorB = o.bV.d()
			if (N(o.x)) {
				jd.ax(o.x, o.y).rA(o.a)
			}
			else if (O(o.x)) {
				jd.ax(x.x, x.y).rA(y)
			}
			jD.axis(o.ax)
			jD.rt(o.rA)
			return w.J(jd)
		}
		w.pJ = function () {
			var w = this, g = G(arguments), o
			var jd = new b2d.PrismaticJointDef
			o = b2d.iB(g.f) ? {a: g.f, b: g.s, ax: g.t, rA: g.fo} : g.f
			jd.bodyA = o.a
			jd.bodyB = o.b
			o.ax = o.ax || [0, 1];
			jd.ax(o.ax)
			o.rA = o.rA || 0;
			jd.rA(o.rA)
			o.aV = o.aV || [0, 0];
			jd.aV(o.aV)
			o.bV = o.bV || [0, 0];
			jd.bV(o.bV)
			var j = w.J(jd)
			if (o.lm) {
				j.lm(o.lm)
			}
			return j
		}
		ELV = function () {
			W()
			w.Elv()
		}
		w.elev = function (x, yy, H) {
			var w = this,
					y = w.h - yy,
					elv,
					speed = 5,
					wire, j
			j = w.pJ(
					wire = w.S(x, y - H / 2, 'w', [[100, H, '-']]),
					elv = w.S(x, y - 300, 'm', 30).r(3).K('elv').bS('sun'),
					V(0, 1)
			).lm(-H / 2, H / 2).mt(-100)
			elv.cl(_.th(function () {
				j.mt(speed *= -1)
			}, 200, {trailing: false}))
			elv.cl(function (p) {
				p.B().lV(0)
			})
		}
		ELEVS = function () {
			W([1200, 600, 2400, 1200], {g: 400})
			w.p(100, 300, '+')
			w.elev(300, 100, 300)
			w.elev(600, 100, 500)
			w.elev(900, 300, 400)
			w.elev(200, 500, 300)
			w.elev(400, 800, 200)
			w.elev(600, 600, 500)
			w.elev(750, 700, 300)
			w.elev(900, 900, 300)
		}
		BUMPER = function () {
			W().P(800)
			j1 = w.pJ(w.D(200, 500, 'z', 60).K('ride'),
					w.S(200, 500, 's', 40, 150).K('cart'))//.lm(-30, 60).speed(-100).motor(1).maxForce(1000)
					.lm(-30, 60).mt(-10)//.speed(-100).maxForce(1000)
			j2 = w.pJ(w.D(400, 500, 'z', 110).K('ride'),
					w.S(400, 500, 's', 40, 300).K('cart'))
					.lm(-30, 60).mt(10)//.speed(-100).maxForce(1000)
			w.pJ(
					w.D(600, 500, 'z', 80).K('ride'),
					w.S(600, 500, 's', 40, 250).K('cart')
			).lm(-30, 60).mt(-100)//.speed(-100).maxForce(1000)
			w.b(function (cx) {
				cx.w('cart', function () {
					w.e(function (b) {
						if (b.of('ride')) {
							b.I(0, -1000)
						}
					})
				})
			})
		}
//// OLD //////
		PRISM0 = function () {
			W(5)
			p = w.p(500, 200, 'thrust').de(1).fr(1)
			j = w.pJ({
				a: w.S(400, 300, 's', 40, 40).de(1).fr(1),
				aV: [-30, 2],
				b: w.D(500, 200, 'd', 200, 40).de(1).K('box'),
				ax: V(1, -2),
				rA: 45
			})
			speed = 10
			j.mt(speed)
			w.b(function (cx) {
				cx.with('box',
						function () {
							speed *= -1
						})
				j.mt(speed)
			})
		}
//jd.mS(-100000).lT(-12).uT(12.5).eL(true).eM(true).mMF(10)//works
		b2d.pJ = function (b1, b2, lXA, lAA, lAB, rA) {//b2d.prismaticJointDef = PrismaticJointDef = prJt=
			var j = new b2d.Joints.b2PrismaticJointDef()
			j.mt = function (a, b, c) {
				j.mS(a)
				j.mMF(N(b) ? b : 100)
				if (c != '-') {
					j.eM(1)
				}
				return j
			}
			j.lm = function (lT, uT, enableLimit) {
				j.lT(lT).uT(uT)
				if (enableLimit != '-') {
					j.eL(true)
				}
				return j
			}
			if (D(b1)) {
				j.A(b1)
			}
			if (D(b2)) {
				j.B(b2)
			}
			//local direction A ? the angle of the actual slider joint
			j.lXA(D(lXA) ? lXA : V(0, 1))
			//local axis A
			j.lAA(D(d) ? lAA : b1.worldCenter())
			//local axis B
			j.lAB(D(e) ? lAB : b2.worldCenter())
			// something with rotation
			if (D(rA)) {
				j.rA(rA)
			}
			return j
		}
		w.Prism = function (a, b, c, d, e, f, g, h) {
			return this.J(b2d.pJ(a, b, c, d, e, f, g, h))
		}
		w.elevx = function (x) {
			var elev = {}
			elev.plat = this.rect(x, 100, 100, 10).den(1).K('elev')
					.coll(function () {
						elev.flip()
					})
					.collWithKind('player', function (p) {
						p.linVel(0)
					})
			elev.base = this.brickSensor(x, 150, 1, 100).den(1).fric(100)
			elev.j = this.prism(elev.plat, elev.base, V(0, 1))
			elev.speed = 2
			elev.j.mt(elev.speed)
			elev.flip = _.throttle(function () {
				this.j.mt(this.speed *= -1)
			}, 200, {trailing: false})
			return elev
		}
		/*
		 enableLimit - whether the joint limits will be active
		 lowerTranslation - position of the lower limit
		 upperTranslation - position of the upper limit
		
		 enableMotor	- whether
		 the
		 joint
		 motor
		 will
		 be
		 active
		 motorSpeed - the
		 target
		 speed
		 of
		 the
		 joint
		 motor
		 maxMotorForce - the
		 maximum
		 allowable
		 force
		 the
		 motor
		 can
		 use
		 * /
		 JointGetJointTranslation=function() {
		 var axis = this.m_bodyA.GetWorldVector(this.m_localXAxis1),
		 p1 = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
		 p2 = this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
		 return axis.x * (p2.x - p1.x) + axis.y * (p2.y - p1.y)
		 }//box2d source
		 /*
		
		 pJD.maxForce= j.mMF=function(a){var j=this
		 j.maxMotorForce = a; return j
		 }
		
		
		 pJD.speed=j.mS=function(a){this.motorSpeed = a; return this}
		 pJD.motor=j.eM=function(a){
		 this.enableMotor = a?true:false; return this}
		 pJD.maxSpeed =j.mMS=function(a){ this.maxMotorSpeed=a; return this }
		
		
		
		 pJD.lowTrans=j.lT=function(a){
		 this.lowerTranslation=a;return this}
		 pJD.upTrans=j.uT=function(a){
		 this.upperTranslation=a;
		 return this}
		
		 pJD.lm=function(a){ this.enableLimit=a?true:false;return this}
		
		 -----
		
		
		 pJ.speed = function (speed) {//j.mS
		 this.SetMotorSpeed(speed)
		 return this
		 }
		
		
		
		 */
//lets look at w.Elv
// pass in x/y, and height.. i guess width set
		w.Elv = function (x, y, H) {
			x = N(x, 400)
			var speed = 4000
			var w = this
			var wire = w.S(x,
					w.h - 200,
					'y', [[60, 60, '-']]
			).fr(1)
			var elv = w.D(x + 100, w.h - 300, 'b', 200, 40)
					.d(.1)
					.K('elv')
			var j = w.pJ({
				a: wire, b: elv,
				lm: [-250, 100]
			}).mt(speed)
			elv.cl(_.debounce(reverse, 200, true))
			function reverse() {
				j.mt(speed *= -1)
			}
		}
		/*
		 debounce_.debounce(function, wait, [immediate]) 
		 Creates and returns a new debounced version of the passed function which will postpone its execution until after wait milliseconds have elapsed since the last time it was invoked. Useful for implementing behavior that should only happen after the input has stopped arriving. For example: rendering a preview of a Markdown comment, recalculating a layout after the window has stopped being resized, and so on.
		
		 Pass true for the immediate argument to cause debounce to trigger the function on the leading instead of the trailing edge of the wait interval. Useful in circumstances like preventing accidental double-clicks on a "submit" button from firing a second time.
		
		 var lazyLayout = _.debounce(calculateLayout, 300);
		 $(window).resize(lazyLayout);
		
		 */
		function _pre() {
			N100 = function (n) {
				return N(n, 100)
			}
			b2d.p()
		}
	}
}