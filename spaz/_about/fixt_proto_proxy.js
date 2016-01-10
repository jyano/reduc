//fixt proxy methods
b.den = function (den) {
	if (U(den)) {
		return this.list().GetDensity()
	}
	this.each(function (f) {
		f.SetDensity(den)
	})
	this.ResetMassData()
	return this
}
b.fric = function (fric) {
	if (U(fric)) {
		return this.list().GetFriction()
	}
	this.each(function (f) {
		f.SetFriction(fric)
	})
	return this
}
b.bo = b.rest = function (rest) {
	if (U(rest)) {
		return this.list().GetRestitution()
	}
	this.each(function (f) {
		f.SetRestitution(rest)
	})
	return this
}
b.grp = function (i) {
	f = this.fixt()
	if (U(i)) {
		return f.grp()
	}
	f.grp(i);
	$l('set to ' + i)
	return this
}
b.fixtClass = function (k) {
	var b = this, f = b.fixt()
	if (U(k)) {
		return f.getClass()
	}
	f.K(k);
	return b
}
b.shp = b.shape = b.getShape = function () {
	return this.fixt().shape()
}
b.rad = function () {
	return this.shp().m_radius * 30
}
b.sensor = b.iS = function (isSensor) {
	var f = this.fixt()
	if (U(isSensor)) {
		return f.m_isSensor
	}
	f.m_isSensor = isSensor
	return this
}
//turns on
b.sense = b.sens = function () {
	this.list().sensor(true);
	return this
}
//toggles
b.sen = function () {
	return this.sensor(!this.sensor())
}