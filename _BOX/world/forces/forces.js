b.GI = function () {
	return this.GetInertia()
}
b.AF = function (v, c) {
	this.ApplyForce(v, c);
	return this
}
 
b.AI = function () {
	this.ApplyImpulse.apply(this, arguments)
	return this
}

 

b.I = function (imp , pt, pt2) {
/*
 //apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center
 if (g.A) {return b.I.apply(b, g.f)}
 o = N(g.s) ? {i: V(g.f, g.s), v: g.t} : {i: g.f, v: g.s}
 o.i = o.i || b.v().d(40)
 o.v = o.v || b.wC()
 b.ApplyImpulse(o.i, o.v.div())
 */
	var b=this,g=G(arguments), o
	b.imp = function (imp, pt) {
		return this.AI(imp, pt || this.GWC())
	}
	o = O(g.f)? {imp: g.f, pt: g.s}: 
	{imp: V(g.f, g.s), pt : g.t}
	o.imp = o.imp ||  b.worldVec().d(40)
	return b.imp(o.imp, o.pt)
}


b.F = function (v, c, c2) {
	if (N(c)) {
		return this.F(V(v, c), c2)
	}
	if (U(c)) {
		c = this.GWC()
	}
	this.ApplyForce(v, c)
	return this
}
b.lD = function (damp) {
	if (U(damp)) {
		return this.GetLinearDamping()
	}
	this.SetLinearDamping(damp)
	return this
}
b.aD = function () {
	var b = this, g = G(arguments),
			d = g[0]
	if (U(d)) {
		return b.GetAngularDamping()
	}
	if (d == '++') {
		d = 10000
	}
	b.SetAngularDamping(d)
	return b
	function alt() {
		b.aD = function (damp) {
			if (U(damp)) {
				return this.GetAngularDamping()
			}
			this.SetAngularDamping(damp)
			return this
		}
	}
}
b.aV = function (vel) {
	if (U(vel)) {
		return this.GetAngularVelocity()
	}
	this.SetAngularVelocity(vel)
	return this
}
b.lV = b.lV$ = function (lV, y) {
	var b = this
	var v = this.GetLinearVelocity()
	if (U(lV)) {
		return v
	}
	if (N(y)) {
		lV = V(lV, y)
	}
	else if (N(lV)) {
		lV = V(lV, v.y)
	}
	else if (g.m) {
		return this.lV(R() ? 1 : -1, R() ? 1 : -1)
	}
	this.SetLinearVelocity(lV)
	return this.wakeUp()
	function alt() {
		b.lV = function () {
			var b = this, g = G(arguments),
					v = b.GetLinearVelocity(), o, lV
			// can pass in V | x,y
			// or if u pass JUST x, it will set ONLY x, keeping y UNTOUCHED
			//(same as vX) .. but why? eh.. can be better, if u already hav vX, no need to default to it
			if (g.u) {
				return v
			}
			lV = U(g[1]) ? V(g[0], v.y) : V(g[0], g[1])
			b.SetLinearVelocity(lV)
			return b.wakeUp()
		}
		b.lV = function (vel, n2) {
			if (U(vel)) {
				return this.GetLinearVelocity()
			}
			if (N(vel)) {
				vel = V(vel, n2)
			}
			this.SetLinearVelocity(vel)
			return this
		}
	}
}

b.F = function () {
	function alt() {
		b.F = b.constF = function (v, c, c2) {//b.applyForce = b.aF  =
			var b = this, g = G(arguments), v = g[0], c = g[1], c2 = g[2]
			if (N(c)) {
				return b.F(V(v, c), c2)
			}
			if (U(c)) {
				c = b.worldCenter()
			} // gotta adjust this
			b.ApplyForce(v, c)
			if (g.p) {
				cjs.tick(function () {
					b.ApplyForce(v, c)
				})
			}
			return b
		}      //apply force. pass impulse as two nums, or obj //and pass in location, defaults to body center
	}
	
	//apply force. pass impulse as two nums, or obj
// and pass in location, defaults to body center
	var b = this, g = G(arguments), o
	o = N(g[1]) ? {f: V(g[0], g[1]), wP: g[2]}
			: {f: V(g[0]), wP: g[1]}
	o.wP = o.wP || b.wC()
	b.ApplyForce(o.f, o.wP)
	if (g.p) {
		cjs.t(function () {
			b.ApplyForce(o.f, o.wP)
		})
	}
	return b
}
b.mass = function (m) {
	if (U(m)) {
		return ( this.GetMass() * 900 ) / 100
	}
}
b.lVL = function (x, y) {
	var b = this
	b.GLVFLP = function (v) {
		return this.GetLinearVelocityFromLocalPoint(v)
	}
	return this.GLVFLP(V(x, y, '-'))
}
b.lVW = function (x, y) {
	var b = this
	b.GLVFWP = function (v) {
		return this.GetLinearVelocityFromWorldPoint(v)
	}
	return this.GLVFWP(V(x, y, '-'))
}
   