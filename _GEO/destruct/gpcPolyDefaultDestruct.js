pD.hasAtLeastOnePoly = function () {
	return this.m_List.get(0)
}
pD.isPolyless = pD.hasNoPolys = function () {
	return !this.hasAtLeastOnePoly()
}
pD.D = function () {
	var pD = this
	G(arguments).e(function (polOrBod) {
		pD = b2d.iB(polOrBod) ? polOrBod.pDWo(pD) :
				pD.difference(gpc.p(polOrBod))
	})
	return pD
}

 

pD.points = pD.vs = function (fn) {
	var pD = this,
			g = G(arguments),
			o = g.F ? {fn: g.f} : {num: g.f, fn: g.s},
			vs = []
	_.t(pD.n(), function (i) {
		vs.push([pD.x(i), pD.y(i)])
	})
	vs = g.n ? b2d.sub(vs, o.num) :
			g.p ? b2d.add(vs, o.num) :
					vs
	if (o.fn) {
		_.e(vs, o.fn);
		return pD
	}
	return vs
}//used in MEET
//f.dif does the math and returns the answer (vs)
//returns pD with array of pS's ( pD.m_List )