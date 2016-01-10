b.SAw = function (sA) {
	this.SetAwake(sA);
	return this
}//return  _.set(b, 'SetAwake', sA)
b.IAw = function () {
	return this.IsAwake()
}
b.SSA = function (sA) {
	this.SetSleepingAllowed(sA);
	return this
}
b.ISA = function () {
	return this.IsSleepingAllowed()
}
b.SAc = function (ac) {
	this.SetActive(ac);
	return this
}
b.IAc = function () {
	return this.IsActive()
}
b.awake = function () {
	var g = G(arguments)
	this.SetAwake(g.n ? false : true)
	return this
}
b.aw1 = b.wake = b.wakeUp = function () {
	this.SetAwake(true);
	return this
}
b.aw0 = b.sleep = function () {
	this.SetAwake(false);
	return this
}