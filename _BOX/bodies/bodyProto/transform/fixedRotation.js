b.fR = b.sFR = function (bool) {
	this.SetFixedRotation(bool ? true : false)
	return this
}
b.fR1 = b.fixRot = function () {
	return this.fixedRot(true)
}
b.fR0 = b.FR = function () {
	return this.fixedRot(false)
}
b.fixedRot = b.sFR = b.fR = function (bool) {
	this.SetFixedRotation(bool ? true : false)
	return this
}
b.SFR = function (fR) {
	this.SetFixedRotation(fR)
	return this
}
b.IFR = function () {
	return this.IsFixedRotation()
} 