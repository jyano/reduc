w.bmR = w.bR = w.bfR = function () {
	var w = this, g = G(arguments), b, h, o
	o = S(g.t) ? 
	{
		x: g.f, y: g.s, i: g.t, w: g.fo, h: g.fi, c: g.si
	} : {
		x: g.f, y: g.s, w: g.t, h: g.fo, c: g.fi
	}
	b = w.D(o.x, o.y, o.c || 'y', o.w, o.h) // allpha?: b = w._D( o )
	h = w.g.h().al(.5)
	if (o.c) {h.c(o.c)};h.bf(o.i || 'sun');h.rec(o.w, o.h);b.bS(h);return b
}
 