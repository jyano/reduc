w.end = function () {
	var w = this, g = G(arguments)
	if (g.F_) {
		g.e(function (fn) {
			w.eH.push(fn)
		})
	}
	else if (F(g.s)) {
		w.eH.push(function (cx) {
			cx.w(g.f, g.s)
		})
	}
	else if (F(g.t)) {
		w.eH.push(function (cx) {
			cx.w(g.f, g.s, g.t)
		})
	}
	return w
	function alt() {
		w.end = function () {
			var w = this, g = G(arguments)
			_.e(g, function (fn) {
				w.END.push(fn)
			})
			return w
		}
		w.end = function (what, what2, func) {
			var w = this
			if (F(what)) {
				_.each(arguments, function (func) {
					w.endHandlers.push(func)
				})
			}
			else if (F(what2)) {
				func = what2
				w.endHandlers.push(function (cx) {
					if (cx.with(what)) {
						func(cx)
					}
				})
			}
			else if (F(func)) {
				w.endHandlers.push(function (cx) {
					if (cx.with(what, what2)) {
						func(cx)
					}
				})
			}
			return this
		}
	}
}
b.end = function () {
	var b = this, w = b.W(), g = G(arguments), o
	o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
	o.k ? w.end(b, o.k, o.fn) : w.end(b, o.fn)
	return b
} 