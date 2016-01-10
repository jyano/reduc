  
	w.brick = w.bii = function (x, y, W, H) {
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 30;
		H = N(H) ? H : W
		return this.A($sB(x, y), $rF(W, H).re(0)).K('brick')
	}
	w.brick = w.bii = function (x, y, W, H) {
		var w = this, g = G(arguments), b, o
		o = O(g[0]) ? g[0] : N(g[1]) ? {
			x: g[0],
			y: g[1],
			w: g[2],
			h: g[3]
		} : {w: g[0]}
		o.x = _.tN(o.x, w.hW)
		o.y = _.tN(o.y, w.hH)
		o.w = _.tN(o.w, 40)
		o.h = _.tN(o.h, o.w)
		o.c = o.c || $r()
		b = w.S(o.x, o.y, o.c, o.w, o.h)
				.K('brick').DFB(0.5, 0.5, 0)
		if (g.n) {
			b.sen(true)
		}
		return b
	}
 
 