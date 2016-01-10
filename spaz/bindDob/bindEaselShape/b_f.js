b.GFL = b.GetFixtureList
b.CF = b.GFL = b.__f = function (f) {
	var b = this, g = G(arguments)
	if (g.u) {
		return b.FL()
	}
	f = b.CF(f)
	return f
}
f.setC = function (c) {
	if (c) {
		this.C(c)
	}
	return this
}
b.f = function (fs) {var b = this, g = G(arguments)
	return g.u ? b.GFL() : b.CF(fs)}
b._fxt = b.fColor = function (f, c) {
	var b = this, g = G(arguments)
	// if(g.u){ return b.GetFixtureList() }
	// f = b.CreateFixture(f)
	return b.CF(f).setC(c)
}
b.fxt = b.fCol = function () {var b = this, g = G(arguments), o,pol;  if (g.u) {return b.GFL()}


	if (g.S_) {g.L--}; if (g._S) {g.L--}////PASS IN AN ARRAY OF FIXTS (AND OPTIONALLY A COLOR)
	
	
	if (g.SA) {
		g.e1(function (f) {//'c',  [ [.,.],[.,.],fD ]
			if (b2d.iFD(f)) {b._f(f, g.f)}
			else {
				if (!S(_.f(f))) {f.unshift(g.f)}
				bx.iFD(f[1]) ? b._f(f[1], f[0]) : $a(b, 'f', f)}})}////      PASS IN A FIXTURE DEF (AND OPTINALLY A COLOR)
	else if (g.A) {g.e0(function (gg) {b.ap('f', g.G(gg))})}//[ [],[],fD,4,[] ]
	
	else if (bx.iFD(g.f)) { return b.fCol(g.f) }//(fD)
	else if (g.S_ && b2d.iFD(g.s)) {b.fCol(g.s, g.f)}//('c', fD)
	

	//POL	//PASS IN NUMBERS OR VERTS, TO MAKE JUST ONE FIXT
	else if (O(g.s)) {                                                               
		o= g.S_ ? {c: g.f, v: g.r} : {v: g}
		if (g.n) {b.sen(1);o.s = 1};
		b.pol(o)
	}
	//CIR
	else if (g.L == 1 || g.L == 3) {
		o = {c: g.f, r: g.s, x: g.t, y: g[3]}
		if (g.n) {  o.s = 1  }
		b.cir(o)
	}
	//REC
	else {
		o = {c: g.f, w: g.s, h: g.t, x: g.fo, y: g.fi, rt: g.si}
		if (g.n) {o.s = 1}; b.rec(o).C(o.c);
		$a(b,'rec', g.g)
	}
	
	return b.d(1)
}

 