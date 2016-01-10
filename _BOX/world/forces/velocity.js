b.lC = function () {
	var b = this, w = b.W(), g = G(arguments)
	//gives {x,y}, but of its CENTER-OF-MASS
	if (g.p) {
		return b.XY(w.hW, w.hH)
	}
	return b.GetLocalCenter().m()
}
b.lVL = b.linVelLoc = function (v, y) {
//lin vel from local point ... use case?
	v = V(v, y)
	return this.GetLinearVelocityFromLocalPoint(v.div()).mult().dec(2)
}
b.vX = function (x) {
	var b = this, g = G(arguments),
			v = b.lV()
	if (g.u) {
		return v.x
	}
	b.lV(x, v.y)
	return b
	function alt() {
		b.vX = function (x) {
			if (U(x)) {
				return this.lV().x
			}
			return this.lV(x, this.lV().y)
		}
	}
}
b.vY = function (y) {
	function alt() {
		b.vY = function (y) {
			if (U(y)) {
				return this.lV().y
			}
			return this.lV(this.lV().x, y)
		}
	}
	
	var b = this
	if (U(y)) {
		return b.lV().y
	}
	return b.lV(b.lV().x, y)
}
b.lVW = b.linVelWor = function (v, y) {//lin vel from world point
	v = V(v, y)
	return this.GetLinearVelocityFromWorldPoint(v.div()).mult().dec(2)
}
b.GLV = function () {
	return this.GetLinearVelocity()
}
b.GAV = function () {
	return this.GetAngularVelocity()
}
b.SLV = function (lV) {
	this.SetLinearVelocity(lV);
	return this
}
b.SAV = function (aV) {
	this.SetAngularVelocity(aV)
	return this
} 