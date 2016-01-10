b.e = b.fixts = b.each = b.eachFixt = function (func) {
	var fl = this.fixt(), arr = [],
			g = G(arguments), func = g[0]
	while (fl) {
		arr.push(fl);
		fl = fl.GetNext()
	}
	//order by biggest
	if (g.p) {
		arr = arr.sort(function (a, b) {
			return b.area() - a.area()
		})
	}
	//order by smallest
	if (g.n) {
		arr = arr.sort(function (a, b) {
			return a.area() - b.area()
		})
	}
	if (F(func)) {
		_.each(arr, func);
		return this
	}
	return arr
}
b.E = b.clr = b.empty = b.clear = function () {
	return this.fixts(function (f) {
		f.kill()
	})
}
b.h = b.hit = function (x, y, dot) {
	var b = this, w = b.W(), hit
	if (dot == true) {
		w.dot(x, y)
	}
	b.eachFixt(function (f) {
		if (f.hit(x, y)) {
			hit = true
		}
	})
	return hit
}
b.num = b.count = function () {
	return this.m_fixtureCount
}
b.DFR = b.DFB = function (d, f, r) {
	return this.den(d).fric(f).rest(r)
}
b.DBF = function (d, r, f) {
	var b = this
	b.den(d)
	if (N(r)) {
		this.rest(r)
	}
	if (N(f)) {
		b.fric(f)
	}
	return b
}
b.Xf = b.destroyFixt = b.destroyFixture = b.dF = function (fixt) {
	this.DestroyFixture(fixt)
	return this
}
b.C = function (c) {
	return this.each(function (f) {
		f.C(c)
	})
} 