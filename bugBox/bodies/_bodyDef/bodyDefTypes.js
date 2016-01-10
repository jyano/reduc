bD.STy = function (ty) {
	this.type = ty;
	return this
}
bD.ty = function (ty) {
	return U(ty) ? this.type : this.STy(ty)
}
bD.dyn = function () {
	return this.T(2)
}
bD.stat = function () {
	return this.T(0)
}
bD.kin = function () {
	return this.T(1)
}
bD.ty = bD.T = bD.typ = bD.kind = function (type) {
	if (U(type)) {
		return this.type
	}
	this.type = type
	return this
}
bD.stat = function () {
	return this.T(0)
}
bD.dyn = function () {
	return this.T(2)
}
bD.T = bD.typ = bD.kind = function (type) {
	if (U(type)) {
		return this.type
	}
	this.type = type
	return this
}