bD.Set = function () {
// actual sig: bD.position.Set(x, y)
	var bD = this
	bD.position.Set.apply(bD.position, arguments)
	return bD
}
bD.GXY = bD.GP = function () {
	return this.position
}
bD.SP = function (x, y) {
	this.position = V(x, y)
	return this
}
bD.SXY = function (x, y) {
	var v = V(x, y)
	return this.Set(v.x, v.y)
}
bD.GX = function () {
	return this.GP().x
}
bD.GY = function () {
	return this.GP().y
}
bD._X = bD.SX = function (x) {
	return this.SXY(x, this.GY())
}
bD._Y = bD.SY = function (y) {
	return this.SXY(this.GX(), y)
}
bD.gXY = bD.gP = function () {
	return this.GP().m()
}
bD.gX = function () {
	return this.gXY().x
}
bD.gY = function () {
	return this.gXY().y
}
bD.sXY = bD.set = function (x, y) {
	var v = V(x, y).d()
	this.Set(v.x, v.y)
	return this
}
bD.sX = function (x) {
	return this.sXY(x, this.gY())
}
bD.sY = function (y) {
	return this.sXY(this.gX(), y)
}
bD.X = function (x) {
	return U(x) ? this.gX() :
			this.sX(x)
}
bD.Y = function (y) {
	return U(y) ? this.gY() :
			this.sY(y)
}
bD.XY = bD.p = bD.ps = bD.xy = function () {
	var bD = this, g = G(arguments)
	return g.u ? bD.gXY() : bD.sXY(g.f, g.s)
//if (x === '*') {x = M.r() * 10 * 60}
//if (y === '*') {y = M.r() * 10 * 60}
//if(O(x)){this.position=x;return this}
}
bD.A = bD.ang = bD.Ang = function (an) {
	var bD = this
	bD.GA = function () {
		return this.angle
	}
	bD.SA = function (an) {
		this.angle = an;
		return this
	}
	return U(an) ? this.GA() : this.SA(an)
}
bD.rt = bD.rot = function (rt) {
	//The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?
	return U(rt) ? M.toD(this.Ang()) : this.Ang(M.toR(rt))
}
  