function len() {
	j.len = function (a) {
		var g = G(arguments),
				len = this.GetLength() * 30
		if (U(a = g[0])) {
			return len
		}
		this.SetLength(
				$.update(len, a, g) / 30
		)
		return this
	}
	jD.len = function (len) {
		if (U(len)) {
			return this.length * 30
		}
		this.length = len / 30
		return this
	}
	jD.sL = jD.sLen = function (l) {
		this.length = l;
		return this
	}
	jD.l = jD.len = function (l) {
		return U(l) ? this.length * 30 : this.sLen(l / 30)
	}
	j.SL = function (l) {
		this.SetLength(l);
		return this
	}
	j.GL = function () {
		return this.GetLength()
	}
	j.L = j.Len = function (l) {
		return U(l) ? this.GL() : this.SL(l)
	}
	j.sLen = function (l) {
		return U(l) ? this : this.SL(l / 30)
	}
	j.gL = function () {
		return this.GL() * 30
	}
	j.l = j.len = function (l) {
		return U(l) ? this.gL() :
				this.sLen(l)
	}
}
 

_$dJ = function (a, b) {
	var dJ = new b2d.DJD();
	dJ.A(a);
	dJ.B(b);
	return dJ
}
jD.props = function () {
	var jD = this, g = G(arguments)
	return N(g.t) ? jD.l(g.f).fq(g.s).dR(g.t) :
			N(g.s) ? jD.fq(g.f).dR(g.s) :
					N(g.f) ? jD.l(g.f) :
							jD
}
j.props = function () {
	var j = this, g = G(arguments)
	N(g.t) ? j.l(g.f).fq(g.s).dR(g.t) :
			N(g.s) ? j.fq(g.f).dR(g.s) :
					N(g.f) ? j.l(g.f) : 0
	return j
}
jD.lfd = function (l, fq, dR) {
	return this.l(l).fq(fq).dR(dR)
}
j.lfd = function (l, fq, dR) {
	return this.l(l).fq(fq).dR(dR)
}
$dJLen = function () {
	var g = G(arguments)
	var dJD = _$dJ(g.f, g.s)
	dJD.props(g.t, g.fo, g.fi)
	if (g.p) {
		dJD.cl1()
	}
	return dJD
}
$dJAnc = function () {
	var g = G(arguments), o
	o = O(g.fo) ? {aA: g.t, aB: g.fo, l: g.fi, fq: g.si, dR: g.se} :
			O(g.t) ? {aA: g.t, aB: V(), l: g.fo, fq: g.fi, dR: g.si} :
					N(g.t) ? {aA: V00(g.t, g.fo), aB: V00(g.fi, g.si), l: g.se, fq: g.ei, dR: g.ni} :
					{aA: O(g.t) ? g.t : V(), aB: O(g.fo) ? g.fo : V(), l: g.fi, fq: g.si, dR: g.se}
	var dJ = $dJLen(g.f, g.s, g.o)
	dJ.props(o.l, o.fq, o.dR)
	dJ.xyAB(o.aA.x, o.aA.y, o.aB.x, o.aB.y)
	return g.p ? dJ.cl1() : dJ
}
$dJt = function () {
	var g = G(arguments), o
	o = O(g.fo) ? {a: g.f, b: g.s, xyA: g.t, xyB: g.fo, l: g.fi, fq: g.si, dR: g.se} :
			o = O(g.t) ? {a: g.f, b: g.s, xyA: g.t, l: g.fo, fq: g.fi, dR: g.si} :
			{a: g.f, b: g.s, l: g.t, fq: g.fo, dR: g.fi}
	var jD = $dJLen(o.a, o.b, o.l, o.fq, o.dR, g.o)
	if (o.xyA) {
		jD.xyA(o.xyA)
	}
	if (o.xyB) {
		jD.xyB(o.xyB)
	}
	return g.p ? jD.cl1() : jD
}
$dJ = function () {
	var g = G(arguments)
	_gg = g
	if (O(g.fo) || O(g.t) || N(g.ni) || N(g.si)) {
		return $dJAnc.apply(null, arguments)
	}
	if (N(g.ei)) {
		return $dJAnc(g.f, g.s, g.t, g.fo, g.o).props(g.fi, g.si)
	}
	if (N(g.fi)) {
		return $dJAnc(g.f, g.s, V(g.t, g.fo), g.o).props(g.fi)
	}
	if (N(g.fo)) {
		return $dJAnc(g.f, g.s, V(g.t, g.fo), V(g.fi, g.si), g.o)
	}
	return N(g.t) ?
			$dJLen(g.f, g.s, g.t, g.p) :
			$dJAnc(g.f, g.s, g.p)
}
//
w.dJAnc = function () {
	return this.CJ(
			$dJAnc.apply(null, arguments))
}
w.dJ = function () {
	return this.CJ(
			$dJ.apply(null, arguments)
	)
}
b.dJ = b.dst = b.dist = function (nextB) {
	var b = this, w = b.W()
	w.dJ(b, nextB)
	return nextB
}
$dJt = function (a, b) {
	var jd = new b2d.DistanceJointDef
	jd.bodyA = a
	jd.bodyB = b
	return jd
}
BOXDISTJOINT = BDJ = function () {
	w = $bW().sDD($dD($.c('z', 1800, 1500))) //the_circle = new b2CircleDef()
	_.ev(.1, function () {
		w.go(1 / 5, '+')
	})
	w.dB(500, 1000).A($rec(1200, 100)).stat()
	b = w.dB(210, 230)
	b.A($cir(70).DBF(1, .3, .4))
	r = w.dB(200, 60)
	r.A($rec(100, 200))
	r.den(1)
	jd = $dJt(b, r)
	w.CreateJoint(jd)
}