DJC = function () {
	x = W().brk(600, 300)
	b = bod('r');
	b1 = bod('o');
	b2 = bod('y');
	b3 = bod('g')
	function bod(c) {
		return w.BALL(300, 200, 50, c)
	}
	
	xJt(b, 50, .4, .9)
	xJt(b2, 40, .4, .2)
	xJt(b3, 30, 4, .9)
	xJt(b1, 20, 4, .2)
	function xJt(a, n, fq, dR) {
		return w.dJ(a, x, V(n, n), 110, fq, dR)
	}
}
DJ = function () {
	x = W({w: 0}).brk(600, 300)
	w.dJ(sq('r'), x).lfd(210, .4, .9)
	w.dJ(sq('y'), x).lfd(210, .1, .002)
	w.dJ(sq('g'), x).lfd(210, 4, .9)
	dJSq('o', .6, .02)
	dJSq('w', 0, 1)
	function sq(c) {
		return w.BOX(300, 200, 50, 50, c).fR1(45)
	}
	
	function dJSq(c, fq, dR) {
		w.dJ(sq(c), x).lfd(210, fq, dR)
	}
}
PUR = function () {

// yellow is soft:  1  .002
// orange is bouncy" .6  .02
// green is rigid: 4   .9
	x = W({w: 0}).G(100).brk(600, 300)
	w.dJ(u = w.BOX(300, 200, 50, 50, 'u').rt(45).fR1(), x)
			.lfd(210, 3, .002)
	w.dJ(p = w.BOX(300, 200, 50, 50, 'p').de(10).fR1(45), x)
			.l(210).fq(3)
	w.dJ(v = w.BOX(300, 200, 50, 50, 'v').de(.0001).fR1(45), x)
			.lfd(210, 3, .002)
	_.ev(2, function () {
		v.I(R() ? 2000 : -2000, R() ? 2000 : -2000)
		u.I(R() ? 2000 : -2000, R() ? 2000 : -2000)
		p.I(R() ? 2000 : -2000, R() ? 2000 : -2000)
	})
}
DJ4 = function () {
	W()
	x = w.brk(500, 300, 200, 200)
	w.dJ(x, w.bal(300, 400, 20), V(-100, 100)).l(50)
	w.dJ(x, w.bal(600, 300, 20), V(100, -100)).l(50)
	w.dJ(x, w.bal(300, 400, 20), V(-100, -100), '+').l(50)
	b = w.ball(300, 400, 20, 'b')
	j = w.dJ(x, b, V(100, 100)).l(50)
	$t(function () {
		w.st.dot([j.a(), j.b()])
	})
	_.ev(2, function () {
		b.I(-10000, 0)
	})
	l50(b20(300, 400, 'b'), V(-100, 100))
	l50(b20(600, 300, 'g'), V(100, -100))
	l50(b20(300, 400, 'o'), V(-100, -100), '+')
	function b20(x, y, c) {
		return w.bal(N(x, 300), N(y, 400), 20, c)
	}
	
	function l50(b, aA, cC) {
		return w.dJAnc(x, b, aA, cC).l(50)
	}
}
DPM = function () {
	W()
	x = w.brk(550, 200, 400, 100)
	$roygbiv()
	w.dJ(r, o)
	w.dJ(g, i)
	w.dJ(y, b)
	w.dJ(b, v)
	_.in(3, function () {
		w.C('r')
		j1 = w.dJ(x, o)
		j = w.dJ(x, g)
		$t(function () {
			w.st.dot(j.a());
			w.st.dot(j.b())
		})
	})
}
DCL = function () {
	W()
	jt(w.bal(200, 200, 50), w.bal(300, 200, 40))
	jt(w.box(200, 200, 50), w.box(300, 200, 40), '+')
	jt(w.bal(200, 200, 50), w.bal(300, 200, 60))
	jt(w.box(200, 200, 50, 50), w.box(300, 200, 60), '+')
	function jt(a, b) {
		var g = G(arguments)
		w.dJ(a, b, g.p)
				.lfd(150, 1, .2)
	}
}
RAG = function () {
	p = W().me()
	w.spg(b1 = w.bal(100, 100, 30), w.bal(100, 200, 40))
	w.rod(b2 = w.box(100, 400, 30), w.box(100, 500, 40))
	w.spring = function (a, b) {
		var w = this, g = G(arguments), o
		if (U(b)) {
			var _fn = function (b) {
				w.spg(a, b);
				return _fn
			}
			return _fn
		}
		return w.dJ(a, b).lfd(1, 2, .1)
	}
	w.spring(p)(b1)(b2)
}
 