 
f.lV = function () {
	var f = this, b = f.B(), g = G(arguments)
	b.lV.apply(b, g)
	return f
}
f.B = f.body = function () {
	return this.GetBody()
}
f.W = function () {
	return this.B().W()
}
f.rt = f.rot = function (rot, g) {
	return this.B().rot(rot, g)
}
f.de = f.den = f.d = function (den) {
	if (U(den)) {
		return this.GetDensity()
	}
	this.SetDensity(den)
	this.body().ResetMassData()
	return this
}
f.re = f.rest = f.r = f.bo = function (rest) {
	if (U(rest)) {
		return this.GetRestitution()
	}
	this.SetRestitution(rest);
	return this
}
f.fr = f.f = f.fric = function (fric) {
	if (U(fric)) {
		return this.GetFriction()
	}
	this.SetFriction(fric);
	return this
}
f.sen = function (s) {
	var f = this
	if (U(s)) {
		return f.IsSensor()
	}
	if (s == '/') {
		s = f.SetSensor(!f.IsSensor())
	}
	else {
		f.SetSensor(s ? true : false)
	}
	return f
	function alt() {
		f.sen = f.sensor = function (sen) {
			var f = this
			if (U(sen)) {
				sen = !f.m_isSensor
			}
			f.m_isSensor = sen
			return this
		}
	}
}
f.isSen = function (isSensor) {
	return this.m_isSensor
}
 
	f.kin = function () {
		var b = this.B();
		b.kin.apply(b, arguments);
		return this
	}
	f.stat = function () {
		var b = this.B();
		b.stat.apply(b, arguments);
		return this
	}
 
 
f.GN = f.N = f.next = function () {
	return this.GetNext()
}
f.dyn = function () {
	var b = this.B();
	b.dyn.apply(b, arguments);
	return this
}
f.stat = function () {
	var b = this.B();
	b.stat.apply(b, arguments);
	return this
}
f.bTy = f.bType = function () {
	return this.B().GetType()
}
f.isBType = f.isType = function (t) {
	var f = this
	if (t) {
		return f.bType() == t
	}
}
f.iS = f.iSt = function () {
	return this.B().iS()
}
f.iD = f.iDy = function () {
	return this.B().iD()
}