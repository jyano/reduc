function fromSpaz(){
	function joint() {
		w.J = w.joint = w.createJoint = w.j = w.cJ = function (a) {
			var j = this.CreateJoint(a)
			return j
		}
		f.q = j.fq = j.freq = function (a) {
			if (U(a)) {
				return this.GetFrequency()
			}
			this.SetFrequency(a)
			return this
		}
		j.l = j.len = function (a) {
			var g = G(arguments),
					len = this.GetLength() * 30
			if (U(a = g[0])) {
				return len
			}
			this.SetLength(
					$.update(len, a, g) / 30
			)
			return this
		}
		j.dm = j.damp = function (a) {
			if (U(a)) {
				return this.GetDampingRatio()
			}
			this.SetDampingRatio(a)
			return this
		}
		jd.coll = jd.collide = jd.cC = function (a) {
			this.collideConnected = a;
			return this
		}
		b.dist = function (nextBody) {
			var body = this
			this.W().dist(body, nextBody)
			return nextBody
		}
		$dJ = function (o) {
			var dJ = new b2d.Joints.b2DistanceJointDef()
			if (o) {
				dJ.init.apply(dJ, arguments)
			}
			return dJ
		}
		$dJColl = function () {
			return $dJ.apply(null, arguments).coll(true)
		}
		w.dstJ = w.dist = function (a, b) {
			return this.J($dJ(a, b)).len(1).fq(1000).dm(1000)
		}
		w.dstJColl = function () {
			return this.J($dJColl.apply(null, arguments))
		}
		jd.init = function (b1, b2) {
			this.Initialize(b1, b2, b1.wC().d(), b2.wC().d())
			return this
		}
	}
}
w.dist = function (a, b, b1OffV, b2OffV, len, freq, damp) {
//location pams are optional, and be default to their center ponts
// note: if you passe them in, pass them as relative(local to body) coords
//BOX2D requires them as WORLD points - for some reason.. (but i think my way has more use cases)
//there is also distColl for 'collideConnected=true' joints
	var b1V = a.wCent(),
			b2V = b.wCent(),
			jd = b2d.dJ(), j
	if (O(b1OffV)) {
		b1V = b1V.add(b1OffV)
	}
	if (O(b2OffV)) {
		b2V = b2V.add(b2OffV)
	}
	jd.init(a, b, b1V.div(), b2V.div())
	j = w.J(jd)
	if (N(b1OffV)) {
		damp = len;
		freq = b2OffV;
		len = b1OffV
	}
	if (N(len)) {
		j.len(len)
	}
	if (N(freq)) {
		j.freq(freq)
	}
	if (N(damp)) {
		j.damp(damp)
	}
	return j
}
w.tightDist = function (piece, newPiece) {
	return this.dist(piece, newPiece, 1, 1000, 1000)
}
w.fixts = function (x, y, f) {
	var w = this
	f = b2d.fixts[f]
	return w.B(x, y, f)
}
w.distColl = function (a, b, b1OffV, b2OffV) {
	var b1V = a.wCent(),
			b2V = b.wCent(),
			jd = b2d.dJ(), j
	if (O(b1OffV)) {
		b1V = b1V.add(b1OffV)
	}
	if (O(b2OffV)) {
		b2V = b2V.add(b2OffV)
	}
	jd.init(a, b, b1V.div(), b2V.div()).coll(true)
	j = w.J(jd)
	return j
}
w.rod = function (a, b, len) {
	a = a || this.ball(150, 150)
	b = b || this.brick(180, 150)
	len = N(len) ? len : 200
	return this.distColl(a, b).len(len)
}
w.spring = function (a, b) {
	return this.dist(a, b).len(1).freq(2)//.damp(.1)
}
w.boxes = function () {
	var w = this
	_.each(arguments, function (arg) {
		w.box.apply(w, arg)
	})
	return this
}
w.boxesStat = function () {
	var w = this
	_.each(arguments, function (arg) {
		w.box.apply(w, arg).stat()
	})
	return this
}
w.Revolute = function (a, b, c, d, e, f) {
	var g = G(arguments)
	//pass in body1, body2, world-bV = body1-center
	//can also pass body1, body2, world-x, world-y
	//or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y
	var j = SuperJointDef(new b2d.Joints.b2RevoluteJointDef())
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
			joint.enableMotor(1)
		}
		return joint
	}
	joint.limits = joint.lm = function (lowAng, upAng, enable) {
		joint.lowAng(lowAng).upAng(upAng)
		if (enable != '-') {
			joint.enableLimits(1)
		}
		return joint
	}
	if (U(c)) {
		c = a.wCent()
	}
	if (O(c)) {
		joint.init(a, b, c)
	}
	else if (N(e)) {
		joint.A(a).B(b).lAA(bV(c / 30, d / 30)).lAB(bV(e / 30, f / 30))
	}
	else if (N(c)) {
		joint.init(a, b, bV(c / 30, d / 30))
	}
	this.createJoint(joint)
	return joint
}
w.Rev = function (a, b, c, d) {
	return this.createJoint(
			RevoluteJointDef(a, b, c, d)
	)
}
w.Prism = function (a, b, c, d, e, f, g, h) {
	var joint = this.J(b2d.prism(a, b, c, d, e, f, g, h))
	return joint
}
w.rev = function (body1, body2, c, d, e, f) {
	var g = G(arguments)
	//pass in body1, body2, world-bV = body1-center
	//can also pass body1, body2, world-x, world-y
	//or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y
	var joint = new BXJ.b2RevoluteJointDef()
	__jd = joint
	if (U(c)) {
		c = body1.worldCenter()
	}
	if (O(c)) {
		joint.init(body1, body2, c)
	}
	else if (N(e)) {
		joint.A(body1).B(body2).lAA(V(c / 30, d / 30)).lAB(V(e / 30, f / 30))
	}
	else if (N(c)) {
		joint.init(body1, body2, V(c / 30, d / 30))
	}
	//SuperJointDef( joint )
	__joint = joint = this.J(joint)
	return joint
}
w.weld = function () {
	return this.J(
			b2d.weld.apply(null, arguments)
	)
}
w.prism = function (a, b, x, y, rot) {
	var jd = new b2d.Joints.b2PrismaticJointDef(), j
	if (A(a)) {
		jd.bodyA = a[0]
		if (O(a[1])) {
			jd.localAnchorA = a[1]
		}
		else if (N(a[1])) {
			jd.localAnchorA = V(a[1] / 30, (a[2] || 0) / 30)
		}
	}
	else {
		jd.bodyA = a
	}
	if (A(b)) {
		jd.bodyB = b[0]
		if (O(b[1])) {
			jd.localAnchorB = b[1]
		}
		else if (N(a[1])) {
			jd.localAnchorB = V(b[1] / 30, (b[2] || 0) / 30)
		}
	}
	else {
		jd.bodyB = b
	}
	if (N(x)) {
		jd.localAxisA.Set(x, y || 0);
		jd.localAxisA.Normalize()
		if (rot) {
			jd.referenceAngle = Math.toRadians(rot)
		}
	}
	if (O(x)) {
		jd.localAxisA.Set(x.x || 0, x.y || 0);
		jd.localAxisA.Normalize()
		if (y) {
			jd.referenceAngle = Math.toRadians(y)
		}
	}
	__joint = j = this.J(jd)
	return j
}
w.Gear = function (a, b, c) {
	return world.createJoint(Gear(a, b, c))
	function Gear(bA, bB, ratio) {
		var gearJoint = new b2d.Joints.b2GearJointDef()
		gearJoint.joint1 = bA
		gearJoint.joint2 = bB
		gearJoint.bodyA = bA.GetBodyA()
		gearJoint.bodyB = bB.GetBodyA()
		gearJoint.ratio = N(ratio) ? ratio : 1
		return gearJoint
	}
}
function color() {
 
}

j.wind = function () {
	var that = this, wound = false
	cjs.tick(function () {
		if (wound == false) {
			that.len(that.len() * 0.99)
		}
		else {
			that.len(that.len() * 1.01)
		}
		that.W().s.pen('len: ' + that.len())
		if (that.len() < 5) {
			wound = true
		}
		if (that.len() > 200) {
			wound = false
		}
	})
}
b2d.dJ = b2d.distJ = b2d.distDef = b2d.distanceDef = DistanceJoint = Joints.distance = dJt = function (o) {
	var jd = new b2d.Joints.b2DistanceJointDef()
	//this initialize function for distance, not revolute
	jd.init = function (b1, b2, b1V, b2V) {
		if (U(b1V)) {
			b1V = b1.worldCenter()
		}
		if (U(b2V)) {
			b2V = b2.worldCenter()
		}
		this.Initialize(b1, b2, b1V, b2V)
		return this
	}
	if (O(o)) { // ever used?
		if (o.init) {
			j.init.apply(j, o.init)
		}
		if (N(o.len)) {
			j.len(o.len)
		} else {
			j.len(1)
		}
		if (N(o.freq)) {
			j.freq(o.freq)
		} else {
			j.freq(3)
		}
		if (N(o.damp)) {
			j.dampRat(o.damp)
		} else {
			j.dampRat(.1)
		}
		if ((o.coll)) {
			j.collide(true)
		} else {
			j.collide(false)
		}
		return w.J(jd)
	}
// dont ever set a dJ().len(0)
	return jd
}
PulleyJoint = pJt = function () {
	bPJD = BXJ.b2PulleyJointDef
	bPJ = BXJ.b2PulleyJoint
	var j = SuperJoint(new BXJ.b2PulleyJointDef())
	j.init = j.i = function () {
		j.Initialize.apply(j, G(arguments))
		return j
	}
	j.lenA = j.lA = function (a) {
		j.lengthA = a;
		return j
	}
	j.lenB = j.lB = function (a) {
		j.lengthB = a;
		return j
	}
	j.maxLenA = j.mLA = function (a) {
		j.maxLengthA = a;
		return j
	}
	j.maxLenB = j.mLB = function (a) {
		j.maxLengthB = a;
		return j
	}
	return j
}
SuperPulleyJoint = sPJ = function (x, y) {
	x = N(x) ? x : 100
	y = N(y) ? y : x
	b11 = w.A(bx1 = b2d.dynamicDef(x, y), fix())
	b22 = w.A(bx2 = b2d.dynamicDef(x, y), fix())
	var pulley = PulleyJoint()
			.init(
			b11,
			b22,
			b2d.V(15, 1),
			b2d.V(15, 2),
			b11.worldCenter(),
			b22.worldCenter(),
			1
	)
			.lenA(8)
			.lenB(4)
			.maxLenA(10)
			.maxLenB(5)
	w.J(pulley)
}
//SuperPulleyJoint.$$=function(){x.$$(sPJ)} 
flipDen = function (r) {
	var d = r.den()
	if (d == 0) {
		r.den(1)
	} else {
		r.den(0)
	}
}
flipStage = function () {
	if (w.s.X() == 0 && w.s.Y() == 0) {
		w.s.XY(10000, 10000)
	}
	else {
		w.s.XY(0, 0)
	}
}
b.glue = function (b2) {
	return this.wor().weld(this, b2, b2.X() - this.X(), b2.Y() - this.Y())
}
b.rev = function (nextBody) {
	var body = this
	this.wor().rev(body, nextBody)
	return nextBody
}
b.dist = function (nextBody) {
	var body = this
	this.wor().dist(body, nextBody)
	return nextBody
}
Joints = {}//need this????
//Stuff={}
 
/*
 A joint edge:
 -connects bodies and joints together in a joint graph
 (each body is a node and each joint is an edge)

 -belongs to a doubly linked list maintained in each attached body
 (Each joint has two joint nodes, one for each attached body)


 //these are all obj refs, not functions

 .joint
 .other(other body)
 .prev(b2JointEdge):the previous joint edge in the body's joint list
 .next(b2JointEdge):the next joint edge in the body's joint list
 */  