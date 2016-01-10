b.GCxL = function () {
	return this.GetContactList()
}
b.GCoL = function () {
	return this.GetControllerList()
}
b.GJL = function () {
	return this.GetJointList()
}
b.M = function () {
	return this.Merge.apply(this, arguments) || this
}
b.S = function () {
	return this.Split.apply(this, arguments) || this
}
b.GMD = function () {
	return this.GetMassData()
}
b.SMD = function (mD) {
	this.SetMassData(mD);
	return this
}
b.RMD = function () {
	this.ResetMassData();
	return this
}
b.GM = function () {
	return this.GetMass()
}
b.GLVFLP = b.GlVLP = function () {
	return this.GetLinearVelocityFromLocalPoint.apply(this, arguments)
}
b.GLVFWP = function () {
	return this.GetLinearVelocityFromWorldPoint.apply(this, arguments)
}
b.wV = b.worldVec = function (v, y) {
	if (N(v) && N(y)) {
		v = V(v, y)
	}
	if (U(v)) {
		v = V(0, -100)
	}
	return this.GetWorldVector(v)
}
b.GLV2 = function () {
	return this.GetLocalVector()
}
b.GWV2 = function () {
	return this.GetWorldVector()
}
b.wPt = b.wPoint = b.worldPoint = b.wP = function (x, y) {
	return this.GetWorldPoint(V(x, y).div()).mult()
}
b.GLP = function () {
	return this.GetLocalPoint.apply(this, arguments)
}
b.GWP = b.GWPt = function () {
	return this.GetWorldPoint.apply(this, arguments)
} 