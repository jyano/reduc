b.H = function (arg) {
	var g = G(arguments),
			arg = g[0],
			b = this,
			len = length(g)
	if (U(arg)) {
		return b
	}
	if (A(g[0]) && U(g[1])) {                                       //passing a single array, suggest MULTIPLE fixts //[f1,f2,..]
		_.e(g[0], function (a) {
			if (g.n) {
				a.push('-')
			}
			b.H.apply(b, a)
		})
	}
	else if (S(g[0]) && A(g[1]) && U(g[2])) {                                             //[col,[f1,f2,..]]
		_.each(g[1], function (f) {
			if (b2d.isFD(f)) {
				b.f(f).C(g[0])
			}
			else {
				if (!S(f[0])) {
					f.unshift(g[0])
				}                                     //f= _.map(f, function(a){return a})
				if (b2d.isFD(f[1])) {
					b.f(f[1]).C(f[0])
				} else {
					b.H.apply(b, f)
				}
			}
		})
	}
	else if (b2d.isFD(g[0])) {
		b.f(g[0])
	}                                                   //fixtDef
	else if (S(g[0]) && b2d.isFD(g[1])) {
		b.f(g[1]).C(g[0])
	}                               //['color', fixtDef]
	else if (O(g[1])) {  //  if(g.n){g.push('-')}  //  b.fig(g)
		o = S(g[0]) ? {c: _.f(g), v: _.r(g)} : {v: g}
		if (g.n) {
			o.s = 1
		}
		b.fig(o)
	}
	
	// else if(O(g[0])){$l('o');o=g[0]
	//    if(o.t=='c'){  b.cir(o) }}
	else if (len == 1 || len == 3) {
		o = {c: g[0], r: g[1], x: g[2], y: g[3]}
		if (g.n) {
			o.s = 1
		}
		b.cir(o)
	}
	else {
		if (g.n) {
			g.push('-')
		}
		;
		b.RECT.apply(b, g)
	}//rect
	function length(arr) {
		var len = arr.length
		if (S(_.first(arr))) {
			len--
		}
		if (S(_.last(arr))) {
			len--
		}
		return len
	}
	
	return b
}
b.$h = function () {
	var h = $H()
	this.bS(h)
	h.c.apply(h, G(arguments))
	return h
}


BODYSHAPE = BSH = function () {

	w = b2d.W()
	w.ball()

	b = w.S(400, 300)
	b.H('o', 50)
	b.H('r', 50, 50)
	b.H('b', 50, 50, 50)
	b.H('g', 50, 50, 50, 50)
	b.H('w', 50, 50, 50, 50, 50)
	b.H('u', [-100, 0], [0, -50], [200, -10])

	b2 = w.D(600, 300).H([
		['o', 50],
		['r', 50, 50],
		['b', 50, 50, 50],
		['g', 50, 50, 50, 50],
		['w', 50, 50, 50, 50, 50],
		['u', [-100, 0], [0, -50], [200, -10]]
	])

	b3 = w.D(600, 300).H('y', [
		[50],
		[50, 50],
		[50, 50, 50],
		['g', 50, 50, 50, 50],
		['w', 50, 50, 50, 50, 50],
		['u', [-100, 0], [0, -50], [200, -10]]
	])
}