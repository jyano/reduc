b.dot = function () {
	var b = this, w = b.W(), g = G(arguments)
	g.N_ ? (
			g.p ?
					T.t(function () {
						b.dot(g.f, g.s)
					}) :
					w.d(b.wP(g.f, g.s)))
			:
			w.d(g.f || 'y', g.p ? b.wC() : b)
	return b
}
w.dot = function () {
	this.s.dot.apply(this.st, arguments)
	return this
}
f.dot = function (col) {
	var f = this, w = f.wor(), cent = f.cent()
	if (S(col)) {
		w.dot(col, cent)
	} else {
		w.dot(cent)
	}
	return this
}
f.dots = function () {
	b2d.polyDot(this.wVerts())
	return this
}
b.dot = function (color) {
	color = oO('c', color || 'y')
	this.stg().dot(color, this.cent()) //  this.X(), this.Y()
}
b.dot = function () {
	var b = this, w = b.W(), g = G(arguments)
	g.N_ ? (
			g.p ?
					T.t(function () {
						b.dot(g.f, g.s)
					}) :
					w.d(b.wP(g.f, g.s)))
			:
			w.d(g.f || 'y', g.p ? b.wC() : b)
	return b
}