cx.fA = cx.A = function (k) {
	var $$ = this.GetFixtureA()
	return D(k) ? $$.of(k) : $$
}
cx.fB = cx.B = function (k) {
	var $$ = this.GetFixtureB()
	return D(k) ? $$.of(k) : $$
}
cx.bA = cx.a = function (k) {
	var $$ = this.fA().B()
	return D(k) ? $$.of(k) : $$
}
cx.bB = cx.b = function (k) {
	var $$ = this.fB().B()
	return D(k) ? $$.of(k) : $$
}
function more() {
	cx.bA = cx.a = function () {
		return this.A().gB()
	}
	cx.bB = cx.b = function () {
		return this.B().gB()
	}
	cx.fA = cx.A = function () {
		return this.GetFixtureA()
	}
	cx.fB = cx.B = function () {
		return this.GetFixtureB()
	}
	w.b = w.begin = function () {
		var that = this
		_.each(arguments, function (func) {
			that.beginHandlers.push(func)
		})
		return this
	}
	cx.w = cx.with = function (a, b) {
		var cx = this
		cx.includes = function (u) {
			var cx = this
			if (cx.fA().of(u)) {
				return cx.fB()
			}
			if (cx.fB().of(u)) {
				return cx.fA()
			}
		}
		cx.between = function (p1, p2) {
			var a = this.A(), b = this.B()
			if (a.of(p1) && b.of(p2)) {
				return [a, b]
			}
			if (b.of(p1) && a.of(p2)) {
				return [b, a]
			}
		}
		return b ? cx.between(a, b) : cx.includes(a)
	}
}  