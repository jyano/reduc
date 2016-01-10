bD.sl = bD.aSl = function (aS) {
	return this.ASl(aS ? true : false)
}
bD.s1 = bD.dS = bD.dAS = bD.mAS = function () {
	return this.sl(1)
}
bD.s0 = function () {
	return this.sl(0)
}
bD.ASl = function (aS) {
	var bD = this;
	bD.allowSleep = aS;
	return bD
}
bD.sleepy = bD.aS = function (canSleep) {
	this.allowSleep = canSleep ? true : false
	return this
}
 