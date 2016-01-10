bD.GFR = function () {
	return this.fixedRotation
}
bD.SFR = function (fR) {
	this.fixedRotation = fR
	return this
}
bD.fR = bD.FR = bD.fixedRot = function (fR) {
	return U(fR) ? this.GFR() : this.SFR(fR ? true : false)
	bD.fixedRotAlt = bD.fRalt = function (isFixed) {
		if (U(isFixed)) {
			return this.fixedRotation
		}
		this.fixedRotation = isFixed;
		return this
	}
}
bD.fR1 = bD.r0 = bD.nRt = bD.mFR = function (rt) {
	if (N(rt)) {
		this.rt(rt)
	}
	return this.fR(1)
}
bD.fR0 = bD.r1 = function (rt) {
	if (N(rt)) {
		this.rt(rt)
	}
	return this.fR(0)
}
 