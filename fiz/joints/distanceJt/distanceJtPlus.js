j.pp = function () {
	var j = this
	$l('l: ' + j.l())
	$l('fq: ' + j.fq())
	$l('dR: ' + j.dR())
	return j
}
w.spg = function () {
	var w = this, g = G(arguments), o
	o = O(g.s) ? {a: g.f, b: g.s, l: g.t} :
			O(g.f) ? {a: g.f, l: g.t}
					: {l: g.f}
	o.a = o.a || w.bal(150, 150)
	o.b = o.b || w.brk(180, 150)
	o.l = N(o.l, 100)
	return w.dJ(o.a, o.b, '+').lfd(o.l, 2, .2)
}
w.rod = function () {
	var w = this, g = G(arguments), o
	o = O(g.s) ? {a: g.f, b: g.s, l: g.t} :
			O(g.f) ? {a: g.f, l: g.t}
					: {l: g.f}
	o.a = o.a || w.bal(150, 150)
	o.b = o.b || w.brk(180, 150)
	o.l = N(o.l, 100)
	return w.dJ(o.a, o.b, '+').lfd(o.l, 0, 1)
} 