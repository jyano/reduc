ct.d = function (c, x, y) {
	var ct = this, o, d, tw, g = G(arguments)
	//if (b2d.isGPoly(g.f)) {_.e(g.f.vs(), function (v) {ct.dot(V(v))}); return this}
	if (g.A) {
		_.e(c, function (G) {
			if (A(G)) {
				ct.dot.apply(ct, G)
			}
			else {
				ct.dot(G)
			}
		})
		return this
	}
	o = g.S_ ? (
			b2d.iB(g.s) ? {c: g.f, x: g.s.sX, y: g.s.sY} :
					O(g.s) ? {c: g.f, x: g.s.x, y: g.s.y} :
					{c: g.f, x: g.s, y: g.t}
	) :
			b2d.iB(g.f) ? {x: g.f.sX, y: g.f.sY} :
					g.O_ ? {x: g.f.x, y: g.f.y} :
					{x: g.f, y: g.s}
	o.x = N(o.x, ct.W() / 2)
	o.y = N(o.y, ct.H() / 2)
	o.c = o.c || 'y'
	d = this.h(o.x, o.y).cir(8, o.c, 'z', 2).al(.7).drag()
	tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
	d.$$(function () {
		tw.$()
	})
	return d.K('dev dot')
}
ct.d = function (c, x, y) {
	var ct = this, o, d, tw, g = G(arguments)
	//if (b2d.isGPoly(g.f)) {_.e(g.f.vs(), function (v) {ct.dot(V(v))}); return this}
	if (g.A) {
		_.e(c, function (G) {
			if (A(G)) {
				ct.dot.apply(ct, G)
			}
			else {
				ct.dot(G)
			}
		})
		return this
	}
	o = g.S_ ? (
			b2d.iB(g.s) ? {c: g.f, x: g.s.sX, y: g.s.sY} :
					O(g.s) ? {c: g.f, x: g.s.x, y: g.s.y} :
					{c: g.f, x: g.s, y: g.t}
	) :
			b2d.iB(g.f) ? {x: g.f.sX, y: g.f.sY} :
					g.O_ ? {x: g.f.x, y: g.f.y} :
					{x: g.f, y: g.s}
	o.x = N(o.x, ct.W() / 2)
	o.y = N(o.y, ct.H() / 2)
	o.c = o.c || 'y'
	d = this.h(o.x, o.y).cir(8, o.c, 'z', 2).al(.7).drag()
	tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
	d.$$(function () {
		tw.$()
	})
	return d.K('dev dot')
}
ct.dot = function () {
	var ct = this
	var g = G(arguments), o = {c: g.f, x: g.s, y: g.t}
	o.x = N(o.x, ct.W() / 2)
	o.y = N(o.y, ct.H() / 2)
	o.c = o.c || 'y'
	d = this.h(o.x, o.y).s(o.c).f('z').l(10).cir(10).al(.7).drag()
	tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
	d.$$(function () {
		tw.$()
	})
	return d.K('dot')
}
ct.dot = function (color, x, y) {
	var that = this, dot, tween
	if (A(color)) {
		_.each(color, function (args) {
			if (A(args)) {
				that.dot.apply(that, args)
			}
			else {
				that.dot(args)
			}
		})
		return
	}
	if (!S(color)) {
		y = x;
		x = color;
		color = 'yellow'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : this.W() / 2
	y = N(y) ? y : this.H() / 2
	dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
	tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
	dot.$$(function () {
		tween.toggle()
	})
	dot.N('dot')
	return this
}
ct.dot = function (color, x, y) {
	var that = this, dot, tween
	if (A(color)) {
		_.each(color, function (args) {
			if (A(args)) {
				that.dot.apply(that, args)
			}
			else {
				that.dot(args)
			}
		})
		return
	}
	if (!S(color)) {
		y = x;
		x = color;
		color = 'yellow'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : this.W() / 2
	y = N(y) ? y : this.H() / 2
	dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
	tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
	dot.$$(function () {
		tween.toggle()
	})
	dot.N('dot')
	return this
}
ct.dot = function (color, x, y) {
	var that = this,
			dot,
			tween
	if (b2d.isGPoly(color)) {
		_.each(color.verts(), function (v) {
			that.dot(V(v))
		})
		return this
	}
	if (A(color)) {
		_.each(color, function (args) {
			if (A(args)) {
				that.dot.apply(that, args)
			}
			else {
				that.dot(args)
			}
		})
		return
	}
	if (!S(color)) {
		y = x;
		x = color;
		color = 'yellow'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : this.W() / 2
	y = N(y) ? y : this.H() / 2
	dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
	tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
	dot.$$(function () {
		tween.toggle()
	})
	dot.N('dot')
	return this
}
ct.squareDot = function (color, x, y) {
	var squareDot, tween
	if (!S(color)) {
		y = x;
		x = color;
		color = 'orange'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 300
	y = N(y) ? y : 300
	__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
	this.A(squareDot.XY(x, y)//.drag()
	)
	//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
	// dot.$$(function(){tween.toggle()})
	return this
}
ct.squareDot = function (color, x, y) {
	var squareDot, tween
	if (!S(color)) {
		y = x;
		x = color;
		color = 'orange'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 300
	y = N(y) ? y : 300
	__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
	this.A(squareDot.XY(x, y)//.drag()
	)
	//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
	// dot.$$(function(){tween.toggle()})
	return this
}
ct.d = ct.dot = function (c, x, y) {
	var ct = this, o, d, tw, g = G(arguments)
	if (b2d.isGPoly(g.f)) {
		_.e(g.f.vs(), function (v) {
			ct.dot(V(v))
		})
		return this
	}
	if (g.A) {
		_.e(c, function (G) {
			if (A(G)) {
				ct.dot.apply(ct, G)
			}
			else {
				ct.dot(G)
			}
		})
		return this
	}
	o = g.S_ ? (
			
			b2d.iB(g.s) ? {c: g.f, x: g.s.sX, y: g.s.sY} :
					O(g.s) ? {c: g.f, x: g.s.x, y: g.s.y} :
					{c: g.f, x: g.s, y: g.t}
	
	) :
			b2d.iB(g.f) ? {x: g.f.sX, y: g.f.sY} :
					g.O_ ? {x: g.f.x, y: g.f.y} :
					{x: g.f, y: g.s}
	o.x = N(o.x, ct.W() / 2)
	o.y = N(o.y, ct.H() / 2)
	o.c = o.c || 'y'
	d = this.h(o.x, o.y).cir(8, o.c, 'z', 2).al(.7).drag()
	tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
	d.$$(function () {
		tw.$()
	})
	return d.K('dev dot')
}
i.dot = function () {
	var i = this
	i.getStage().dot(i.X(), i.Y())
	return i
}
ct.dot = function () {
	var ct = this
	var g = G(arguments), o = {c: g.f, x: g.s, y: g.t}
	o.x = N(o.x, ct.W() / 2)
	o.y = N(o.y, ct.H() / 2)
	o.c = o.c || 'y'
	d = this.h(o.x, o.y).s(o.c).f('z').l(10).cir(10).al(.7).drag()
	tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
	d.$$(function () {
		tw.$()
	})
	return d.K('dot')
}
ct.dot = function (color, x, y) {
	var that = this, dot, tween
	if (A(color)) {
		_.each(color, function (args) {
			if (A(args)) {
				that.dot.apply(that, args)
			}
			else {
				that.dot(args)
			}
		})
		return
	}
	if (!S(color)) {
		y = x;
		x = color;
		color = 'yellow'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : this.W() / 2
	y = N(y) ? y : this.H() / 2
	dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
	tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
	dot.$$(function () {
		tween.toggle()
	})
	dot.N('dot')
	return this
}
ct.squareDot = function (color, x, y) {
	var squareDot, tween
	if (!S(color)) {
		y = x;
		x = color;
		color = 'orange'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 300
	y = N(y) ? y : 300
	__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
	this.A(squareDot.XY(x, y)//.drag()
	)
	//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
	// dot.$$(function(){tween.toggle()})
	return this
}
///WARNING ..USED B2D.ISGPOLY TO MAKE DOT
ct.dot = function (c, x, y) {
	var that = this,
			s = this,
			dot,
			tween
	if (b2d.isGPoly(c)) {
		_.each(c.verts(), function (v) {
			s.dot(V(v))
		})
		return this
	}
	if (A(c)) {
		_.each(c,
				function (G) {
					if (A(G)) {
						s.dot.apply(s, G)
					}
					else {
						s.dot(G)
					}
				})
		return
	}
	if (!S(c)) {
		y = x;
		x = c;
		c = 'y'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : s.W() / 2
	y = N(y) ? y : s.H() / 2
	//dot = s.circ(x,y, 6,  oO('c', c)).drag()//.opacity(.4)
	//dot = s.h(x,y).circ(0,0, 6,  oO('c', c)).drag()//.opacity(.4)
	dot = s.h(x, y).circ(8, c, c).drag()
	tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
	dot.$$(function () {
		tween.toggle()
	})
	dot.N('dot')
	return s
}
ct.dot = function () {
	var ct = this
	var g = G(arguments), o = {c: g.f, x: g.s, y: g.t}
	o.x = N(o.x, ct.W() / 2)
	o.y = N(o.y, ct.H() / 2)
	o.c = o.c || 'y'
	d = this.h(o.x, o.y).s(o.c).f('z').l(10).cir(10).al(.7).drag()
	tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
	d.$$(function () {
		tw.$()
	})
	return d.K('dot')
}
ct.dot = function (color, x, y) {
	var that = this, dot, tween
	if (A(color)) {
		_.each(color, function (args) {
			if (A(args)) {
				that.dot.apply(that, args)
			}
			else {
				that.dot(args)
			}
		})
		return
	}
	if (!S(color)) {
		y = x;
		x = color;
		color = 'yellow'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : this.W() / 2
	y = N(y) ? y : this.H() / 2
	dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
	tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
	dot.$$(function () {
		tween.toggle()
	})
	dot.N('dot')
	return this
}
ct.squareDot = function (color, x, y) {
	var squareDot, tween
	if (!S(color)) {
		y = x;
		x = color;
		color = 'orange'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 300
	y = N(y) ? y : 300
	__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
	this.A(squareDot.XY(x, y)//.drag()
	)
	//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
	// dot.$$(function(){tween.toggle()})
	return this
}
ct.d = ct.dot = function (c, x, y) {
	var ct = this, o, dot, tw, g = G(arguments)
	if (b2d.isGPoly(g.f)) {
		_.e(g.f.vs(),
				function (v) {
					ct.dot(V(v))
				})
		return this
	}
	if (g.A) {
		_.e(c, function (G) {
			if (A(G)) {
				ct.dot.apply(ct, G)
			}
			else {
				ct.dot(G)
			}
		})
		return this
	}
	o = g.O ? g.f : g.S_ ? {c: g.f, x: g.s, y: g.t} : {x: g.f, y: g.s}
	o.x = N(o.x, ct.W() / 2)
	o.y = N(o.y, ct.H() / 2)
	dot = this.h(o.x, o.y)
			.cir(8, o.c, 'p' || o.c, 2)
			.al(.7).drag()
	tw = dot.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
	dot.$$(function () {
		tw.$()
	})
	return dot.K('dev dot')
}