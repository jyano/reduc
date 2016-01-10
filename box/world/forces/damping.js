b.GD = b.GDf = function () {
	return this.GetDefinition()
}
b.GLD = function () {
	return this.GetLinearDamping()
}
b.GAD = function () {
	return this.GetAngularDamping()
}
b.SLD = function (lD) {
	this.SetLinearDamping(lD);
	return this
}
b.SAD = function (aD) {
	this.SetAngularDamping(aD);
	return this
} 