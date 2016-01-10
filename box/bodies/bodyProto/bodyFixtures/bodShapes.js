b.rF = function () {
	// = b.$rF = b.rH
	return this.CF( $rF.apply(null, arguments))
	//var rH = $rH.apply(null, arguments)
	//return this.fD(rH)
}
b.cF  = function () {//=b.cCF
	var aF = $cF.apply(null, arguments)
	return this.CF(aF)
}
b.aF  = function () {
	//= b.cAF
	var aF = $aF.apply(null, arguments)
	return this.CF(aF)
}

///////////////////

b._rad = function (n) {
	if (U(n)) {
		return this.shp().m_radius * 30
	}
	n = N(n, 100)
	h = this.f().H()
	if (h.SetRadius) {
		h.SetRadius(n / 30)
	}
}
b.rad = function (r) {
	var b = this, h = b.H()
	if (U(r)) {
		return h.rad()
	}
	h.rad(r);
	return b
} 
b.hit = function (x, y, dot) {
	var b = this,
			w = b.W(),
			g = G(arguments), hit = false
	if (g.p) {
		w.dot(x, y)
	}
	b.fs(function (f) {
		if (f.hit(x, y)) {
			hit = true
		}
	})
	return hit
	function alt() {
		b.hit = function (x, y, dot) {
			var hit
			if (dot == true) {
				this.wor().dot(x, y)
			}
			this.eachFixt(function (f) {
				if (f.hit(x, y)) {
					hit = true
				}
			})
			return hit
		}
	}
}
b.rect = function () {
	return this.f($rF.apply(null, arguments))
}

b.aAF = function () {
	var aF = $aF.apply(null, arguments)
	this.CF(aF)
	return this
}
b.aCF = function () {
	var aF = $cF.apply(null, arguments)
	this.CF(aF)
	return this
}
b.cir = function (r) {
	return this.f($fD($cH(r)))
}
b.arrF = function () {
	return this.f($aF.apply(null, arguments))
}
 
b.cFx = b.circ = function () {
	var cF = $cF.apply(null, arguments)
	return this.f(cF)
}