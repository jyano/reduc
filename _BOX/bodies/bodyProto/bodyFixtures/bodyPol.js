 
b.GP = function () {
	var b = this
	var wPts = b.wPts()
	return M.poly(wPts)
}
b.lGP = function () {
	var b = this
	var lPts = this.pts()
	return Math.poly(lPts)
}

b.PD = b.pD = function () {
	//b.P =
	var b = this, p,
			fs = b.fs()
	if (!_.f(fs)) {
		return new PolyDefault()
	}
	p = M.p(_.f(fs))
	_.eR(fs, function (f) {
		p = p.U(f)
	})
	return p//p.reg(b)
	//this returns a gPoly
}


b.pD = function () {
	var b = this, f = b.f(), g = G(arguments), pD = $pD()
	if (!f) {
		return pD
	}
	// if the body has no freqkin fixts.. 
	// if its an infant body , massless? fixtureless
	pD = M.p(f)
	_.eR(b.fs(), function (f) {
		pD = pD.U(f)
	})
	return pD
}
b.polDefault = b.polDef = b.bolDf = b.pD = b.P = function () {
	var b = this, p, fs = b.fs()
	if (!_.f(fs)) {
		return new PolyDefault()
	}
	p = M.p(_.f(fs))
	_.eR(fs, function (f) {
		p = p.U(f)
	})
	return p//p.reg(b)
	//this returns a gPoly
}
b.ps = function (fn) {
	alert('b.ps sucks')
	var b = this,
			arr = [],
			p = b.uni()
	if (F(fn)) {
		p.ps(b, fn);
		return b
	}
	p.ps(b, function (v) {
		arr.push(v)
	})
	return arr
} 