


b.convex = b.polyArr = function (col, arr, str) {

	 
	var b = this, w = b.W(), h, f, g = G(arguments)
	
	//when and if should i call .conc/.sep ?
	
	// i could auto-conc it.. but ill lose track of the fixts?
	
	
	
	if (g.length > 2) {
		//passing points direclty: ([],[],[]) or ('r',[],[],[])
		if (S(col)) {   arr = _.r(g)   }
		else {  col = 'p';   arr = g  }
	
	}
	
	
	
	if (!S(col)) {  
	
		// ['c', [[],[]] ]   or [[],[]]
		
		if (A(col) && S(col[0])) {
	
			
			arr = _.r(col);
	
			col = col[0]
	
		}
		
		
		else {
			
			arr = col;
		
			
			col = null
		}

	
	}
	
	
	
	if ( S(_.l(arr)) ) {
	
		str = arr.pop()
	
	}
	
	
	
	f = b.poly.apply(b, arr)
	
	
	
	if (str) {
		
		f.K(str)
	}
	
	
	if (col) {
		
	
		f.bindSprite(   w.st.poly(arr, col, col)  )
	
	}
	
	
	
	return f
	
	
	// b2d.sep = b2d.conc =     func|body,verts,scale
//takes an array of points (or of one color and a bunch of points)
////
////
////
// i need a func to check if my points are convex or not ! 
// can check my current libs first!! :)

 
}
b._pol = function (points, c, i) {
	var b = this
	var newFs, spr
	newFs = b.sepNew(points, function withNewFixtures(f) {
		f.c(c || 'x')
		if (o.lf) {
			f.bS(w.st.h().lf(o).lt(o.v))
		}
		if (o.rf) {
			f.bS(w.st.h().rf(o).lt(o.v))
		}
	})
	if (i) {
		spr = w.gx.h()
		spr.bV({v: points})
		b.bS(spr)
	}
	return newFs
}

b.poly = b.polyArr = b.convex = function (c, V, k) {
	var b = this, w = b.W(), g = G(arguments), h, f
//when and if should i call .conc/.sep ?
// i could auto-conc it.. but ill lose track of the fixts?
	if (g.length > 2) {
		if (S(c)) {
			V = _.r(g)
		} else {
			c = 'p';
			V = g
		}
	}//passing points direclty: ([],[],[]) or ('r',[],[],[])
	if (!S(c)) {
		if (S(c[0])) {
			V = _.r(c);
			c = c[0]
		} else {
			V = c;
			c = null
		}
	}// ['c', [[],[]] ]   or [[],[]]
	if (S(_.l(V))) {
		k = V.pop()
	}
	b.poly = function () {
		var b = this
		return b.f(
				b2d.poly.apply(null, arguments)
		)
	}
	f = b.poly.apply(b, V)
	if (k) {
		f.K(k)
	}
	if (c) {
		f.bS(w.s.poly(V, c, c))
	}
	return f
}

b.POLY = function (c, arr) {

	 var b = this, w = b.W(), g = G(arguments), o
	 
	 o = S(g.f) ? 
	 {c: g.f, arr: g.s} :
	  {arr: g.f}
	 
	
	o.c = o.c || 'y'
	 
	var f = b.f( $aF(o.arr) )
	
	b.bS2(
			w.st.poly(o.arr, o.c, o.c)
	)
	
	return f


}  //w.CONVEX = b.vex = b.conv = b.vex =
b.pol = function () {
	var b = this, w = b.W(), g = G(arguments), o
	var newFs
	if (g.u) {
		return b
	}
	if (b2d.iB(g.f)) {
		g.f.fs(b);
		return b
	}
	//if passed [[ color and ]] verts:
	o = S(g.f) && gpc.iP(g.s) ? {c: g.f, v: g.s} :
			gpc.iP(g.f) ? {v: g.f} :
					b2d.iF(g.f) ? {v: g.f.vs()} :
						// pass in  [[],[],[]]   or  ['r',[],[],[]]
							g.A && S(g.f[0]) ? {c: g.f[0], v: _.r(g.f)} : g.A ? {v: g.f} :
									g.O ? g.f : g.O_ ? {v: g} : //pass in [],[]
											g.t ? {c: g.f, v: g.r} : // pass in 'r', [], []
											{c: g.f, v: g.s}   //pass in  {c:'r', v:[[],[],[]]}
	_oo = o
	$df.h(o)
	o.i = o.i || o.bf
	//$l('check _o');
	_o = o
	newFs = b.sepNew(o.v, function (f) {
		f.set(o)
		f.c(o.c, o.C, o.l)
		if (o.lf) {
			f.bS(w.st.h().lf(o).lt(o.v))
		}
		if (o.rf) {
			f.bS(w.st.h().rf(o).lt(o.v))
		}
	})
	if (o.i) {
		__h = w.gx.h().bV(o)
		b.bS(__h)
	}
	return newFs
}
b.poly = b.pol = function me() {
	var b = this, w = b.W(), g = G(arguments),
			v, h, f, fd, n, fs, h, mult, o
	if (A(g[0]) || S(g[0])) {
		if (!g.length > 2) {
			return me.apply(b, g)
		}
		o = S(g[0]) ? {c: g[0], V: _.r(g)} : {c: 'p', V: g}
		if (S(_.l(o.V))) {
			o.k = o.V.pop()
		}
		f = b.f(b2d.poly.apply(null, o.V))
		if (o.k) {
			f.K(o.k)
		}
		if (o.c) {
			f.bS(w.s.poly(o.V, o.c, o.c))
		}
		return f
	}
	o = b2d.fixtPams(g[0])
	if (o.X) {
		b.clear()
	}
	if (o.q == false) {
		h = new b2d.PolygonShape()
		v = _.map(o.v, b2d.div)
		h.SetAsArray(v, v.length)
		fd = new b2d.Dynamics.b2FixtureDef()
		fd.shape = h
		fd.den(o.d).rest(o.b).fric(o.f)
		f = b.fixt(fd)
		if (o.k) {
			f.K(o.k)
		}
		if (o.C) {
			f.C(o.C)
		}
		return f
	}
	n = b.num()
	if (O(o.v[0][0])) {
		_.e(o.v, function (v) {
			b2d.sep(b, v)
		})
	}
	else {
		b2d.sep(b, o.v);
		o.v = [o.v]
	}
	fs = _.f(b.fs(), b.num() - n)
	_.e(fs, function (f) {
		f.d(o.d).r(o.b).fr(o.f)
		f.m_isSensor = o.s ? true : false
		if (o.k) {
			f.K(o.k)
		}
		if (o.c) {
			f.C(o.c, o.C, o.l)
		}
		if (o.lf) {
			f.bS(
					w.s.h().lf(o).lt(o.v))
		}
		if (o.rf) {
			f.bS(
					//w.s.h().c(o).lt(o.v) // w.s.h().poly(o)
					w.s.h().rf(o).lt(o.v)
			)
		}
	})
	if (o.bm) {
		b.bS(w.s.h().bmV(o))
	}
	return fs.length > 1 ? fs : fs[0]
}
 
b.pol = function () {
	var b = this, w = b.W(), g = G(arguments), fs, n, arr, o, vs
	b2d.mini()
	//-> {c:'r', v:[[],[],[]]} //pass in {c:'r', v:[[],[],[]]} //pass in [[],[],[]] //pass in ['r',[],[],[]]
	// b.fs(function(f){b1.pol(f.rV())})//g[0].ps(function(v){b.pol(v)})// else {_.e(g[0], function(v){b.pol(v)})}
	if (g.u) {
		return b
	}
	if (iP(g.f) && U(g.s)) {
		return b.pol({v: g.f})
	}
	if (S(g.f) && iP(g.s) && U(g.t)) {
		return b.pol({c: g.f, v: g.s})
	}
	if (iF(g.f)) {
		g.f = g.f.rV()
	}
	else if (iB(g.f)) {
		g.f.fs(b);
		return b
	}
	if (g.A) {
		o = S(g.f[0]) ?
		{c: g.f[0], v: _.r(g.f)} :
		{v: g.f}
	}
	else {
		o = g.O ? g.f :
				g.S_ ?
						(g.t ?
						{c: g.f, v: g.r} :
						{c: g.f, v: g.s}) :
				{v: g}
	}
	o = df.h(o)
	if (iP(o.v)) {
		o.v = o.v.vs()
	}
	n = b.n()
	if (O(o.v[0][0])) {
		_.e(o.v, function (v) {
			b2d.sep(b, v)
		})
	}
	
	//pass in 2 or more objs->
	else {
		b2d.sep(b, o.v);
		o.v = [o.v]
	}
	//pass in one object
	//->  ['r', [],[],[] ]//->  [[],[],[]]
	//pass in color and loose verts//->'r',[],[],[]//->  'r', [[],[],[]]
	//just pass in loose verts//-> [],[],[]
	//same two as above but also nested in wrapper array.. so just ONE pam
	//if (o.X) {b.clear()}
	//the NEW fixts
	fs = _.f(b.fs(), b.n() - n) //each of only the NEW fixts
	_.e(fs, function (f) {
		f.d(o.d).r(o.b).fr(o.f)
		if (o.s) {
			f.m_isSensor = o.s ? true : false
			f.sen(1)
		}
		f.K(o.k)
		f.C(o.c, o.C, o.l)
		if (o.lf) {
			f.bS(w.s.h().lf(o).lt(o.v))
		}
		if (o.rf) {
			f.bS(w.s.h().rf(o).lt(o.v))
		}
	})
	o.i = o.i || o.bf
	if (o.i) {
		h = w.g.h()
		h.bV(o)
		b.bS(h)
	}
	//b.cir('y', 10);b.cir('z', 6)
	return fs.length > 1 ? fs : fs[0]
}

 ////////https://www.youtube.com/watch?v=_QqKMv6I2hc


b.pol = function () {
	
	
	var b = this, w = b.W(), g = G(arguments), o
	
	
	var newFs
	
	
	if (g.u) {return b}
	
	
	if (b2d.iB(g.f)) {   
	
		g.f.fs( b );
		
		return b
		
	}
	
	
	//if passed [[ color and ]] verts:
	
	o = S(g.f) && gpc.iP(g.s) ? {c: g.f, v: g.s} :
			
			gpc.iP(g.f) ? {v: g.f} :
					
					b2d.iF(g.f) ? {v: g.f.vs()} :
							
						// pass in  [[],[],[]]   or  ['r',[],[],[]]
						
							g.A && S(g.f[0]) ? {c: g.f[0], v: _.r(g.f)} : g.A ? {v: g.f} :
							
									
									g.O ? g.f : g.O_ ? {v: g} : //pass in [],[]
									
											g.t ? {c: g.f, v: g.r} : // pass in 'r', [], []
											
											{c: g.f, v: g.s}   //pass in  {c:'r', v:[[],[],[]]}
 

	$df.h(o)

	o.i = o.i || o.bf

  
	newFs = b.sepNew(o.v, function (f) {
		
		f.set(o)
		
		f.c(o.c, o.C, o.l)
		
		if (o.lf) {
		
			f.bS(w.st.h().lf(o).lt(o.v))
		}
		
		if (o.rf) {
		
			f.bS(w.st.h().rf(o).lt(o.v))
		}
	})
	
	
	
	if (o.i) {
	
	
		b.bS(__h = w.gx.h().bV(o))
	}
	
	
	
	return newFs
}