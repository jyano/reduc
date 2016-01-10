cx.includes = cx.ic = function () {
	var cx = this, g = G(arguments)
	var o = {k: g.f, fn: g.s}
	if (o.fn) {
		if (cx.fA(o.k)) {
			cx.fnAB(o.fn)
		} //_.b(o.fn, cx.A())(cx.B(), cx)
		else if (cx.fB(o.k)) {
			cx.fnBA(o.fn)
		} //  _.b(o.fn, cx.B())(cx.A(), cx)
		return cx
	}
	cx.AB = function () {
		var cx = this
		return [cx.fA(), cx.fB(), cx]
	}
	cx.BA = function () {
		var cx = this
		return [cx.fB(), cx.fA(), cx]
	}
	//if this fixture 'of' that string(kind),fixt,or body
	//if so always passed back an array with the first mentioned selector in the [0] pos
	return cx.fA(o.k) ? cx.AB() :
			cx.fB(o.k) ? cx.BA() :
					false //[cx.A(), cx.B(), cx] : //[cx.B(), cx.A(), cx] :
	//if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx
}
cx.between = cx.bw = function () {
	var cx = this, g = G(arguments)
	// bw(k,k1)  or  bw(k,k1,fn)
	var fA = cx.fA()
	var fB = cx.fB()
	var fn = g.t
	if (F(fn)) {
		if (fA.of(g.f) && fA.of(g.s)) {
			fn.apply(fA, [fB, cx])
		}
		else if (fB.of(g.f) && fA.of(g.s)) {
			fn.apply(fB, [fA, cx])
		}
		return cx
	}
	return cx.fA(g.f) && cx.fB(g.s) ? [cx.fA(), cx.fB(), cx] :
			cx.fB(g.f) && cx.fA(g.s) ? [cx.fB(), cx.fA(), cx] :
					false
}
cx.with = function (a, b, c) {
	if (U(b) || F(b)) {
		return this.includes(a, b)
	}
	return this.between(a, b, c)
}
cx.fnAB = function (fn) {
	var cx = this
	_.b(fn, cx.A())(cx.B(), cx)
	return cx
}
cx.fnBA = function (fn) {
	var cx = this
	_.b(fn, cx.B())(cx.A(), cx)
	return cx
}
cx.kFn = function (k, fn) {
	var cx = this
	if (cx.A().of(k)) {
		cx.fnAB(fn)
	}
	else if (cx.B().of(k)) {
		cx.fnBA(fn)
	}
}
cx.not = cx.nof = cx.withoutAny = cx.ex = cx.excludes = function (u) {
	return !this.w(u)
}
cx.dsIf = cx.destroyIf = cx.setDestroyIf = function () {
	var cx = this
	_.e(arguments, function (k) {
		cx.a().setDestroyIf(k);
		cx.b().setDestroyIf(k)
	})
	return cx
}
cx.dsOIf = cx.destroyOtherIf = function (k) {
	var a = this.a(), b = this.b()
	if (a.is(k)) {
		b.setDestroy()
	}
	else if (b.is(k)) {
		a.setDestroy()
	}
}
cx.yesNo = function (ar1, ar2) {
	var ok = true
	_.e(ar1, function (k) {
		if (cx.nof(k)) {
			ok = false
		}
	})
	_.e(ar2, function (k) {
		if (cx.of(k)) {
			ok = false
		}
	})
	return ok
}
cx.exIn = cx.excludeInclude = function (no, yes) {
	return this.w(yes) && this.excludes(no)
}
cx.inEx = cx.includeExclude = function (yes, no) {
	return this.w(yes) && this.excludes(no)
}
cx.includes1 = function (what, func) {
	var cx = this,
			fA = cx.A(),
			fB = cx.B()
	if (F(func)) {
		if (fA.of(what)) {
			_.bind(func, fA)(fB, cx)
		}
		else if (fB.of(what)) {
			_.bind(func, fB)(fA, cx)
		}
		return this
	}
	if (fA.of(what)) {
		return [fA, fB]
	}
	if (fB.of(what)) {
		return [fB, fA]
	}
	return false
}
cx.between1 = function (p1, p2, func) {
	var cx = this, fA = cx.A(), fB = cx.B()
	if (F(func)) {
		if (fA.of(p1) && fB.of(p2)) {
			return _.bind(func, fA)(fB, cx) || cx
		}
		if (fB.of(p1) && fA.of(p2)) {
			return _.bind(func, fB)(fA, cx) || cx
		}
	}
	if (fA.of(p1) && fB.of(p2)) {
		return [fA, fB]
	}
	else if (fB.of(p1) && fA.of(p2)) {
		return [fB, fA]
	}
	return false
}