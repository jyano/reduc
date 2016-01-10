//https://en.wikipedia.org/wiki/Bounding_volume
 
bx.mat22 = function (v1, v2) {
	var m = new bx.Mat22()
	m.SetVV(v1, v2)
	return m
}
bx.AB= bx.C.b2AABB
ab = bx.AB.prototype
ab.LB=  function (x, y) {
	this.lowerBound.Set(x, y)
	return this
}
ab.UB= function (x, y) {
	this.upperBound.Set(x, y)
	return this
}
ab.lUB = function () {
	var ab = this, g = G(arguments),
			o = {
				x1: g.f, y1: g.s,
				x2: g.t, y2: g.fo
			}
	if (g.n) {
		o.x1 /= 30;
		o.y1 /= 30;
		o.x2 /= 30;
		o.y2 /= 30
	}
	ab.LB(o.x1, o.y1)
	ab.UB(o.x2, o.y2)
	return ab
}
ab.pt = function (x, y) {
	var g = G(arguments)
	return this.lUB(alg(x, '-'), alg(y, '-'), alg(x), alg(y))
	function alg() {
		var g = G(arguments)
		return g.f / 30 + (g.n ? -.01 : .01)
	}
}

 $AB= function(a,b,c,d,e,f){
	 return new bx.AB()
 }