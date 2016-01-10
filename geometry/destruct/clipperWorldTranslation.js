pD.butHere = pD.to = pD.at = pD.ger = function (x, y) {
	return this.reg(-V(x, y).x, -V(x, y).y)
}
pD.maybeHere = function (xy) {
	return xy ? this.butHere(xy) : this
}
pD.from = pD.cameFrom = pD.reg = pD.rel = function (x, y) {
	return M.p(b2d.sub(this.vs(), V(x, y)))
}//you can pass in the verts, // or the gPoly itself! //what about a f?
