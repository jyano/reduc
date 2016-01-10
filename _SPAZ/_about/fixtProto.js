 
f.n = f.next = function () {
	return this.GetNext()
}
f.d = f.den = function (den) {
	if (U(den)) {
		return this.GetDensity()
	}
	this.SetDensity(den)
	this.body().ResetMassData()
	return this
}
f.f = f.fric = function (fric) {
	if (U(fric)) {
		return this.GetFriction()
	}
	this.SetFriction(fric);
	return this
}
f.bo = f.r = f.rest = function (rest) {
	if (U(rest)) {
		return this.GetRestitution()
	}
	this.SetRestitution(rest);
	return this
}
f.hType = function () {
	return this.shp().m_type
}
f.isCirc = function () {
	return this.hType() == 0
}
f.rad = function () {
	return this.shp().m_radius * 30
}
f.pos = function () {
	var h = this.shp()
	return V(h.m_p.x, h.m_p.y).mult()
}  // for circs
f.pX = function () {
	return this.pos().x
}
f.pY = function () {
	return this.pos().y
}
f.H = f.shp = f.shape = function (h) {
	var f = this//should let user specify dimensions of shape, not just have to pass formed shape in
	if (U(h)) {
		return f.GetShape()
	}
	f.m_shape = h // it DOES WORK!  but is this much different than just replacing the fixt?
	return f
}
f.mid = f.cen = f.cent = f.center = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments),
			b = f.GetAABB(),
			v = Math.lineCenter(b.lowerBound, b.upperBound).mult()
	if (g.p) {
		w.dot(v)
	}
	return v
}//center point of its BOUNDING BOX
f.tP = f.hit = f.testPoint = f.test = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments),     //
			v = V(g[0], g[1])
	if (g.p) {
		w.dot(v)
	}
	return f.H().tP(b.tf(), v.div()) //is a point within the fixture // very accurate
}
 
f.grp = function (i) {
	var f = this,
			fl = f.GetFilterData()
	if (U(i)) {
		return fl.groupIndex
	}
	fl.groupIndex = i
	f.SetFilterData(fl)
	return f //get/set for groupIndex
}
f.coll = function (k, fn) {
	var f = this
	//ultimate func for FIXTURE COLL
	// you can specify what happens when a fixture hits:
	//ANYTHING
	// body/fixt of certain kind
	// specific fixt
	// specific body
	//but it its callback ALWAYS passed back the other fixt that was actually hit
	// and 'this' is set to THIS fixt within the cb
	//should cover class AND fixt AND body cases!!!
	if (F(k)) {
		fn = k;
		k = ''
	}
	fn = _.b(fn, f)
	w.beg(function (cx) {
		var fA = cx.A(), fB = cx.B()
		if (f.is(fA) && fB.of(k)) {
			fn(fB, cx)
		}
		if (f.is(fB) && fA.of(k)) {
			fn(fA, cx)
		}
	})
	return f
}
f.verts = function () {
	var f = this, b = f.B(), g = G(arguments), V //local verts
	V = _.m(f.shp().m_vertices, b2d.mult)  //local verts rotated locally by body's rotation
	if (g.p) {
		V = _.m(V, function (v) {
			return v.rot(b.rot())
		})
	}
	return V
}
f.stg = function () {
	return this.wor().s
}
f.dot = function (c) {
	var f = this, w = f.W(), v = f.mid();
	if (S(c)) {
		w.dot(c, v)
	} else {
		w.dot(v)
	}
	;
	return f
}
f.dots = function () {
	var f = this;
	b2d.polyDot(f.wVerts());
	return f
}
f.dyn = function () {
	var b = this.B();
	b.dyn.apply(b, arguments);
	return this
}
f.sen = f.sensor = function (s) {
	var f = this
	if (U(s)) {
		s = !f.m_isSensor
	}
	f.m_isSensor = s
	return f
}
f.isSen = function () {
	return this.m_isSensor
}
  