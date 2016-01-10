b.c = b.C = function (c) {
	this.fs(function (f) {
		f.C(c)
	})
	this._col = c
	return this
}
f.c = f.C = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o
	o = g.O ? g.f :
	{c: g.f, C: g.s, l: g.t}
	var easelMet = f.iC() ? 'cir' : 'pol'
	o.c = (o.c == '*') ? $r() : (o.c || 'b');
	o.C = o.C || o.c
	f.B()._i = f.B().i = w.st[easelMet](f.hDat(o))
	//*** look.. we just put the easel shape display object on the fixture's body
	// we called it i.. just i 
	// but i prefer _i
	f.rpSp(f.B()._i)
	// .. then we made it the main FIXTURE sprite,
	// which gets bound to the actual fixture,
	// but is clearly ALSO... referenced on the body
	// so that is just temp on the body because it will get constantly overwrittern!!
	//so can be used short term.. but why not an array???
	// wel they are already probably an array of the fixture?? body can iterate fixtures// better that way becasue then they can be more easily associated with their assoc fixtures
	return f
}
f.c = f.C = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments),
			o = g.O ? g.f : {c: g.f, C: g.s, l: g.t}
	o.c = (o.c == '*') ? $r() : (o.c || 'b');
	o.C = o.C || o.c
	return f.rpSp(
			f.iC() ? b.i = w.st.cir(f.cir(o)) : b.i = w.st.pol(f.pol(o)))
}
f.al = function (al) {
	var sp = this.sp()
	if (sp) {
		sp.al(N(al, .8))
	}
	return this
}
f.C = f.color = function (c, C, l) {
	var f = this, b = f.B(), w = b.W(), g = G(arguments),
			r, p, o
	o = O(g[0]) ? g[0] : {c: c, C: C, l: l}
	o.c = (o.c == '*') ? $r() : o.c || 'b'
	o.C = o.C || o.c
	f.removeSprites()
	h = w.s.h()
	if (f.isCirc()) {
		$l('isCir')
		h.cir(
				f.pX(), f.pY(), f.rad(),
				o.c, o.C, o.l
		)
	}
	else {
		h.poly(f.verts(), o.c, o.C, o.l)
	}
	f.bS(h)
	return f
};
COL = function () {
	W().C('z')
	b = w.bump({c: 'w', r: 100})
	f = b.f()
	f.C('y')
	// f.removeSprites(); h=w.s.h().cir(0,0,100,'y'); f.bS(h)
	setTimeout(function () {
		b.dyn()
	}, 1000)
}
b.c = b.C = function (c) {
	this.fs(function (f) {
		f.C(c)
	})
	this._col = c
	return this
} 
	 
	 