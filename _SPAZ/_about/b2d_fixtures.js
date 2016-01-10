b2d.isFD = b2d.isFixtDef = function (fD) {
	return O(fD) && fD.b2FixtureDef
}
b2d.isFixt = function (fixt) {
	if (!fixt) {
		return false
	}
	return fixt.constructor.name == "b2Fixture"
}
b2d.isGPoly = function (a) {
	return O(a) && F(a.isHole)
}
//
b2d.AH = b2d.AShape = function (pam, p2) {//dep .. use polyH
	var ag, arr, h
	ag = (p2) ? arguments : pam
	arr = _.m(ag, function (v) {
		return V(v).div()
	})
	h = b2d.pH()
	h.arr(arr)
	return h
}
//make a circle SHAPE
b2d.cH = b2d.circH = b2d.circShape = b2d.circleShape = b2d.cSh = function me(r, x, y) {
	var g = G(arguments), h
	if (A(g[0])) {
		return me.apply(b2d, g[0])
	} //?
	r = _.tN(r, 25)
	h = new b2d.CircleShape(r / 30);
	h.xy(x, y)
	return h
}
b2d.H = b2d.shape = function () {
	var g = G(arguments)
	return g[1] ?
			b2d.pH(g)
			: b2d.cH(g[0])
}
//make a circle FIXTURE
b2d.cir = b2d.circ = function (r, x, y, d) {//hmm.. fixt doesnt have a rel loc.. its shape does
	//what if u want to change 'shape' of shape, but keep its rel loc?
	var g = G(arguments),
			x = _.tN(g[1]), y = _.tN(g[2]),
			r = _.tN(g[0], 50),
			d = _.tN(d, 1),
			f
	f = b2d.f(b2d.cH(r).xy(x, y)).den(d)
	if (g.n) {
		f.isSensor = true
	}
	return f
}
//MAKES A FIXTURE AND A SHAPE FOR IT
b2d.f = b2d.fixt = b2d.fixtC = function (h) {
	var g = G(arguments),
			l = g.length, f = new b2d.FixtureDef, h  // simply makes one fixt,
	// tries to set its shape
	// and returns it
	//you can pass in a pre-made shape
	//or..
	// if you pass it an array, it makes a polyH from it
	// from verts/arr (confirmed)
	// or if you passed in anything (number(s))
	// it makes a circle or poly shape, depending on how many numbers you passed
	if (b2d.isShape(g[0])) {
		h = g[0]
	}
	else {
		h = A(g[0]) ? b2d.pH.apply(b2d, g)
				: (l == 1 || l == 3) ? b2d.cH.apply(b2d, g)
				: b2d.pH.apply(b2d, g)
	}
	f.shape = h
	return f
}
//make a rec or arr SHAPE
b2d.pH = b2d.polyH = function me(W, H, x, y, a) {
	var g = G(arguments), p
	//if(A(g[0] )){return me.apply(b2d, g[0])}
	p = new b2d.PolygonShape()
	if (N(g[0])) {
		p.box(W, H, x, y, a)
	}
	else if (O(g[0])) {
		p.arr.apply(p, g)
	}
	return p
}
//make a rec or arr FIXTURE
b2d.poly = function () {
	var g = G(arguments),
			pH = b2d.pH.apply(null, g),
			f = b2d.f(pH).den(1).fric(.2).rest(.2)
	if (g.n) {
		f.isSensor = true
	}
	return f
}
//make a rec or arr FIXTURE (SENSOR = TRUE)
b2d.polySens = function (k) {
	var g = G(arguments)//necessary?
	var p = b2d.poly.apply(null, _.r(g))
	p.sensor(true).K(k)
	return p
}
b2d.A = b2d.Arr = function () {
	var g = G(arguments);
	return b2d.f(b2d.AH.apply(null, g)).den(.1)
}
b2d.pC = b2d.polyCirc = function (r, prec) {
	var g = G(arguments), vv = [], a
	r = _.tN(r, 20)
	prec = _.tN(prec, 20)
	a = 2 * M.PI / prec
	_.t(prec, function (i) {
		vv.push(V(M.c(a * i) * r, M.s(a * i) * r))
	})
	return vv
}
//
b2d.hasVerts = function (poly) {
	return poly.m_List.get(0)
}
b2d.overlapping = function (b1, b2) {
	var v1 = b1.polyVerts(),
			v2 = b2.polyVerts()
	var p = v1.union(v2)
	return !(_.isEqual(p.verts(), v1.verts()) || _.isEqual(p.verts(), v2.verts()))
}
b2d.rec1 = function (W, H, x, y, a, d) {
	var g = G(arguments), r, f, o,
			p = new b2d.PolygonShape()
	if (O(g[0])) {
		p.arr.apply(p, g)
	}
	else if (N(g[0])) {
		o = {w: g[0], h: g[1], x: g[2], y: g[3], a: g[4], d: g[5]}
		o.w = _.tN(o.w, 50)
		o.h = _.tN(o.h, 50)
		p.box(o.w, o.h, o.x, o.y, o.a)
	}
	f = b2d.f(p).d(o.d || .5)
	if (g.n) {
		f.isSensor = true
	}
	return f
}
b2d.polyDot = function (V) {// see f.dots
	var t = 0
	_.e(A(V) ? V : V.verts(), //combine with b2d.verts
			function (v) {
				setTimeout(function () {
					w.dot(V(v))
				}, t) // w?????
				t += 100
			}
	)
} //w???
 