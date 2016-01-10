i.tickX = function (fn) {
	var i = this
	T.t(function () {
		i.X(fn())
	})
	return i
}
i.tickY = function (fn) {
	var i = this
	T.t(function () {
		i.Y(fn())
	})
	return i
}
i.dr = function (dr) {
	alert('i.dr')
	if (U(dr)) {
		return this.direction
	}
	this.direction = dr;
	return this
}
i.nm = function (dr) {
	alret('i.nm')
	if (U(dr)) {
		return this.name
	}
	this.name = dr;
	return this
}
i.warpX = function (lo, hi, cush) {
	alert('i.warpX')
	var i = this,
			wrp = M.wrp(lo, hi, cush)
	T.t(function () {
		i.x = wrp(i.x)
	})
	return i
}
i.warpY = function (lo, hi, cush) {
	alert('i.warpY')
	var i = this, wrp = M.wrp(lo, hi, cush)
	T.t(function () {
		i.y = wrp(i.y)
	})
	return i
}
i.warp = function (n) {
	var i = this, s = i.S(), n = n || 0
	i.warpX(0, s.W(), n)
	i.warpY(0, s.H(), n)
	return i
}