 
cx.with = cx.includesBetween = cx.w = function () {
	var cx = this, g = G(arguments)
	// (k/o)  : (k/o,  fn)  //  (k/o,  k1/o)  :   (k/o,k1/o, fn)
	//if you have a second pam,, but its not a function
	cx.includes = cx.ic = function () {
		var cx = this, g = G(arguments)
		/* protosig
		 //     str    :  str,fn   :   obj   :   obj,fn
		
		 w.b(function(cx){
		 cx.ic(fisherman1, function(fish){this.eat(fish.B( ))  })
		 var oneWasFisherman1 = cx.ic(fisherman1); if(oneWasFisherman1){$l('the fish is: '+Fisherman1[1])}
		 cx.ic('fish', function(fisherman){  this.swimTo( fisherman.B( ))  })
		 var oneWasFish = cx.ic('fish'); if(oneWasFish){$l('the fish is: '+oneWasFish[0])}
		 })
		 */
		if (F(g.s)) {
			if (cx.A().of(g.f)) {
				_.b(g.s, cx.A())(cx.B(), cx)
			}
			else if (cx.B().of(g.f)) {
				_.b(g.s, cx.B())(cx.A(), cx)
			}
			return cx
		}
		//if this fixture 'of' that string(kind),fixt,or body
		//if so always passed back an array with the first mentioned selector in the [0] pos
		return cx.A().of(g.f) ? [cx.A(), cx.B()] :
				cx.B().of(g.f) ? [cx.B(), cx.A()] :
						false
		//if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx
	}
	
	cx.between = cx.bw = function () {
		var cx = this,
				g = G(arguments),
		// bw(k,k1)  or  bw(k,k1,fn)
				a = cx.A(), b = cx.B()
		if (F(g.t)) {
			if (a.of(g.f) && b.of(g.s)) {
				g.t.apply(a, [b, cx])
			}
			else if (b.of(g.f) && a.of(g.s)) {
				g.t.apply(b, [a, cx])
			}
			return cx
		}
		return cx.A().of(g.f) && cx.B().of(g.s) ? [cx.A(), cx.B(), cx] : cx.B().of(g.f) && cx.A().of(g.s) ? [cx.B(), cx.A(), cx] : false
	}
	return g.s && !F(g.s) ?
			cx.bw(g.f, g.s, g.t) :
			cx.ic(g.f, g.s)
}
cx.w = cx.of = cx.with = function () {
	var cx = this, g = G(arguments), o
	cx.both = function () {
		var cx = this, g = G(arguments)
		var fA = cx.fA()
		var fB = cx.fB()
		if (fA.of(g.f) && fB.of(g.s)) {
			if (F(g.t)) {
				var fn = _.b(g.t, fA)
				g.p ? fn(fB, cx) :
						_.in(0, function () {
							fn(fB, cx)
						})
				return cx
			}
			return [fA, fB]
		}
		else if (fB.of(g.f) && fA.of(g.s)) {
			if (F(g.t)) {
				var fn = _.b(g.t, fB)
				g.p ? fn(fA, cx) : _.in(0, function () {
					fn(fA, cx)
				})
				return cx
			}
			return [fB, fA]
		}
		return cx
	}
	cx.this = function () {
		var cx = this, g = G(arguments), a = cx.fA(),
				b = cx.fB(), k = g.f, fn = g.s
		if (a.of(k)) {
			if (F(fn)) {
				fn = _.b(fn, a)
				g.p ? fn(b, cx) : _.in(0, function () {
					fn(b, cx)
				})
				return cx
			}
			return [a, b, cx, g.o]
		}
		else if (b.of(k)) {
			if (F(fn)) {
				fn = _.b(fn, b)
				g.p ? fn(a, cx) : _.in(0, function () {
					fn(a, cx)
				})
				return cx
			}
			return [b, a]
		}
	}
	cx.these = function (p1, p2, fn) {
		var cx = this, g = G(arguments), fA = cx.fA(), fB = cx.fB(), a = fA, b = fB
		if (a.of(p1) && b.of(p2)) {
			if (fn) {
				_.b(fn, a)(b, cx);
				return cx
			}
			return [a, b]
		}
		else if (b.of(p1) && a.of(p2)) {
			if (fn) {
				_.b(fn, b)(a, cx);
				return cx
			}
			return [b, a]
		}
	}
	cx.with2 = cx.ofThese = cx.theseTwo = cx.withBoth = cx.isBetween = cx.these
	cx.btwn = cx.withBothFrom = cx.bw = cx.btw = cx.between = cx.these
	o = F(g.t) || (g.s && !F(g.s)) ?
	{k: g.f, k1: g.s, fn: g.t} :
	{k: g.f, fn: g.s}
	return o.k1 ? cx.these(o.k, o.k1, o.fn) :
			cx.this(o.k, o.fn)
	function alt() {
	}
	
	cx.wi = function () {
		var g = G(arguments), cx = this, o
		o = g.s && !F(g.s) ? {k1: g.f, k2: g.s, fn: g.t}
				: {k: g.f, fn: g.s}
		return o.k2 ? cx.both(o.k1, o.k2, o.fn, g.o) :
				cx.this(o.k, o.fn, g.o)
	}
}
// collide //
b.cl = function () {
	var b = this, w = b.W(), g = G(arguments), o
	o = g.F_ ? {fn: g.f, in0: g.s} :
	{k: g.f, fn: g.s, in0: g.t}
	o.k ? w.cl(b, o.k, o.fn, o.in0) :
			w.cl(b, o.fn, o.in0)
	return b
}

b.cl0 = function () {
	var b = this, w = b.W(), g = G(arguments), o
	o = g.F_ ? {fn: g.f, in0: g.s} :
	{k: g.f, fn: g.s, in0: g.t}
	o.k ? w.cl0(b, o.k, o.fn) :
			w.cl0(b, o.fn)
	return b
}
b.coll = function (clas, func) {
	var body = this, w = body.wor()    //merged these 2, but the the fixt 'coll' met is more complete/flexible  //b.collWithKind =
	// if body collides with ANYTHING
	// if body collides with body/fixt of specific kind
	// if body collides with specific body
	// if body collides with specific fixt
	// but always pass fixt into the cb
	if (F(clas)) {
		func = clas;
		clas = ''
	} //if clas NOT passed in
	w.beg(function (cx) {
		var fA = cx.A(), fB = cx.B(), bA = cx.a(), bB = cx.b()
		if (body.is(bA) && fB.of(clas)) {
			_.bind(func, fA)(fB, cx)
		}
		if (body.is(bB) && fA.of(clas)) {
			_.bind(func, fB)(fA, cx)
		}
	})
	return this
}
// uses contact list
b.col2 = function (func) { //brilliant   =b.eachCx =b.withFixtsCollidingWithMe
	//uses the OTHER way to check contacts !!!!!!
	var body = this, contacts = body.cx(),
			next, fixt, notMyFixt, fA, fB
	if (!contacts) {
		$l('no contacts');
		return false
	}
	c = contacts = contacts.contact
	n = 0
	while (contacts) {
		n++
		next = contacts.GetNext()
		fA = contacts.A()
		fB = contacts.B()
		bA = contacts.a()
		notMyFixt = body.is(bA) ? fB : fA  //find the fixture whose body is not me
		$l(notMyFixt.K() + ' - ' + notMyFixt.B().K())
		_.bind(func, body)(notMyFixt, contacts)   //and call func on IT (along with the actual cx)
		contacts = next
	}
}
f.cl = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o
	o = g.F_ ? {fn: g.f, in0: g.s} :
	{k: g.f, fn: g.s, in0: g.t}
	o.k ? w.cl(f, o.k, o.fn, o.in0) :
			w.cl(f, o.fn, o.in0)
	return f
}
f.cl0 = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o
	o = g.F_ ? {fn: g.f, in0: g.s} :
	{k: g.f, fn: g.s, in0: g.t}
	o.k ? w.ofThese0(f, o.k, o.fn) :
			w.ofThis0(f, o.fn)
	return f
}
w.cl = function () {
	var w = this, g = G(arguments)
	if (g.F) {
		w.b(function (cx) {
			_.b(g.f, cx.A())(cx.B(), cx)
		})
	}
	else {
		w.b(function (cx) {
			cx.w(g.f, g.s, g.t)
		})
	}
	return w
}


w.cl = function () {
	var w = this, g = G(arguments), o
	o = g.s && !F(g.s) ?
	{k: g.f, k2: g.s, fn: g.t} :
	{k: g.f, fn: g.s}
	w.b(function (cx) {
		o.k2 ? cx.wi(o.k, o.k2, o.fn) :
				cx.wi(o.k, o.fn)
	})
	return w
}
w.CL = function (k) {
	var w = this
	var fn = function rc(a, b, c) {
		w.cl(k, a, b, c)
		return rc
	}
	return fn
}

w.cl0 = function () {
	var w = this, g = G(arguments)
	w.cl.apply(w, g.concat('0'))
	return w
}
w.with = w.collWith = function (a, b, c) {
	var w = this
	w.beg(function (cx) {
		cx.with(a, b, c)
	})
	return this
}
w.class = function (k) {
	var w = this
	var ob = {
		class: k, k: k,
		world: w, w: w
	}
	ob.with = ob.collWith = function (k, func) {
		var ob = this
		if (O(k)) {
			_.each(k, function (fun, k) {
						ob.with(k, fun)
					}
			)
		}
		else {
			w.with(this.class, k, func)
		}
		return this
	}
	return ob
}
f.coll = function (what, func) {
	var that = this, fixt = this, beginFunc //ultimate func for FIXTURE COLL
	// you can specify what happens when a fixture hits:
	//ANYTHING
	// body/fixt of certain kind
	// specific fixt
	// specific body
	//but it its callback ALWAYS passed back the other fixt that was actually hit
	// and 'this' is set to THIS fixt within the cb
	//should cover class AND fixt AND body cases!!!
	if (F(what)) {
		func = what;
		what = ''
	}
	func = _.bind(func, fixt)
	w.beg(function (cx) {
		var fA = cx.A(), fB = cx.B()
		if (fixt.is(fA) && fB.of(what)) {
			func(fB, cx)
		}
		if (fixt.is(fB) && fA.of(what)) {
			func(fA, cx)
		}
	})
	return this
}


w.collideAny = function (what, func) {
	return this.bg(what, function (cx) {
		$.do(function () {
			func(cx)
		})
	})
}


w.coll = function (k1, k2, func) {
	var that = this,
			w = this,
			name = k1 + k2
	if (F(k2)) {
		return this.collideAny(k1, k2)
	}
	this.beg(function (cx) {
		if (cx.with(k1, k2)) {
			that.flag(name, cx)
		}
	})
	cjs.tick(function () {
		var cx = that.flagged(name)
		if (cx) {
			func(cx)
		}
	})
}
b.cl = b.b = b.collide = function () {
	var b = this, w = b.W(), g = G(arguments), o
	// if body collides with ANYTHING
	// if body collides with body/fixt of specific kind
	// if body collides with specific body
	// if body collides with specific fixt
	// but always pass fixt into the cb
	if (F(g.f) && F(g.s)) {
		this.cl(g.f)
		w.end(b, g.s)
		return b
	}
	o = g.F_ ? {fn: g.f, k: ''} : {k: g.f, fn: g.s}
	w.b(function (cx) {
		var fA = cx.A(), fB = cx.B()
		if (b.of(cx.a()) && fB.of(o.k)) {
			if (o.fn) {
				_.b(o.fn, fA)(fB, cx);
				return w
			}
			return [fA, fB, cx]
		}
		else if (b.of(cx.b()) && fA.of(o.k)) {
			if (o.fn) {
				_.b(o.fn, fB)(fA, cx);
				return w
			}
			return [fB, fA, cx]
		}
	})
	return b
}
b.coll = b.collWithKind = function (func, func2) {
	var that = this
	if (S(func) && F(func2)) {
		this.W().begin(function (cx) {
			if (cx.a() == that && cx.b().is(func)) {
				func2(cx.b())
			}
			if (cx.b() == that && cx.a().is(func)) {
				func2(cx.a())
			}
		})
	}
	else {
		w.begin(function (cx) {
			if (cx.a() == that) {
				func(cx.a())
			}
			if (cx.b() == that) {
				func(cx.b())
			}
		})
	}
	return this
}
NORMAL = function () {
	W({W: 1500, H: 1200, g: 0}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').bS('me')
	y.cir('y', 50)
	y.cl(w.S(300, 300, 'g', 50),
			function (f, cx) {
				w.D(600, 300, 'g', 20).K('g').I(-cx.nX(300), cx.nY(300))
			})
	y.cl(w.S(900, 300, 'o', 50), function (f, cx) {
		w.D(600, 300, 'o', 20).K('o')
				.I(-cx.nX(300), cx.nY(300))
	})
	y1 = w.D(300, 300, 'w', 10).fR().cn('thrust').bS('me').I(20, 20)
	y1.cir('y', 40).r(.8)
	Ball = _.mo(.5, function (n) {
		w.D(600, 200, 'o', 5).bit(0)
				.K('o').r(.9).I(n.x, n.y)
	})
	w.D(600, 300, 'o', 70).r(.8)
			.cl(function (f, cx) {
				if (cx.nX() || cx.nY()) {
					if (O(cx) && F(cx.n)) {
						Ball(cx.n(10000))
					}
				}
			})
	/*
	 //just copies lV
	 b=w.D(500,300,'b',50).d(1).K('b')
	 r = w.D(700,300,'r', 80).d(1)
	 w.b( function(cx){ cx.w('b', function(f){
	 if(cx.a().of('b')){r.lV(cx.lV(cx.a()))}
	 else {r.lV( cx.lV(cx.b()))}})})
	 */
//w.pop('me absorbs energy of tims collision!'); $.in(4, function(){w.pop('gets actual v of bA')}); $.in(8, function(){w.pop('at moment of col!')})
//normalImpulse is the magnitude of the correcting impulse applied to push the two bodies apart when they collide.
// This is in the direction of the contact normal.
	NL0 = function () {
		W({W: 900, H: 600, g: 0, w: '|'}).C('b')
		y = w.D(100, 100, 'w', 40)
		y.fR().cn('thrust').warp().bS('me').cir('g', 50)
		w.S(200, 300, 'g', 100).cl(function (f, cx) {
			w.D(600, 300, 'g', 20).I(-cx.nX(300),
					cx.nY(300))
		})
	}
	NL = function () {
		W({W: 1200, H: 600, g: 0, w: '|'}).C('b')
		y = w.D(100, 100, 'w', 40).fR().cn('thrust').warp().bS('me')
		y.cir('y', 50)
		y.cl(w.S(300, 300, 'g', 100), function (f, cx) {
			w.D(300, 300, 'g', 20).I(-cx.no(300).x, cx.no(300).y)
		})
		y.cl(w.S(900, 300, 'o', 100), function (f, cx) {
			w.D(900, 300, 'o', 20).I(-cx.no(300).x, cx.no(300).y)
		})
		y.cl(w.S(600, 300, 'w', 60, '-'), function (f, cx) {
			w.D(600, 300, 'z', 20, '-').K('w').I(cx.no(300).x, cx.no(300).y)
		})
	}
}
SICK = BBALL = MOONSOCCER = function () {
	W({W: 1500, H: 1200, g: 0, w: ''}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').bS('me')
	y.cir('y', 50)
	greenBall = w.S(300, 300, 'g', 50)
	y.cl(
			greenBall,
			function (f, cx) {
				var bullet = w.D(600, 300, 'g', 20)
				bullet.K('g').I(
						-cx.nX(300),
						cx.nY(300)
				)
			}
	)
	y.cl(
			w.S(900, 300, 'o', 50), function (f, cx) {
				w.D(600, 300, 'o', 20).K('o').I(-cx.nX(300), cx.nY(300))
			})
	y.warp()
}
//y1 = w.D(300, 300, 'w', 10).fR().cn('thrust').bS('me').I(20, 20)
//y1.cir('y', 40).r(.8)
/*	Ball = _.m(.5, function (n) {
 w.D(600, 200, 'o', 5).bit(0)
 .K('o').r(.9).I(n.x, n.y)
 })
 w.D(600, 300, 'o', 70).r(.8)
 .cl(function (f, cx) {
 if (cx.nX() || cx.nY()) {
 if (O(cx) && F(cx.n)) {
 Ball(cx.n(10000))
 }
 }
 })
 /*
 //just copies lV
 b=w.D(500,300,'b',50).d(1).K('b')
 r = w.D(700,300,'r', 80).d(1)
 w.b( function(cx){ cx.w('b', function(f){
 if(cx.a().of('b')){r.lV(cx.lV(cx.a()))}
 else {r.lV( cx.lV(cx.b()))}})})
 */
//w.pop('me absorbs energy of tims collision!'); _.in(4, function(){w.pop('gets actual v of bA')}); _.in(8, function(){w.pop('at moment of col!')})
//normalImpulse is the magnitude of the correcting impulse applied to push the two bodies apart when they collide.
// This is in the direction of the contact normal.
NL0 = function () {
	W({W: 900, H: 600, g: 0, w: '|'}).C('b')
	y = w.D(100, 100, 'w', 40)
	y.fR().cn('thrust').warp().bS('me').cir('g', 50)
	w.S(200, 300, 'g', 100).cl(function (f, cx) {
		w.D(600, 300, 'g', 20).I(-cx.nX(300),
				cx.nY(300))
	})
}
NL = function () {
	W({W: 1200, H: 600, g: 0, w: '|'}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').warp().bS('me')
	y.cir('y', 50)
	y.cl(w.S(300, 300, 'g', 100), function (f, cx) {
		w.D(300, 300, 'g', 20).I(-cx.no(300).x, cx.no(300).y)
	})
	y.cl(w.S(900, 300, 'o', 100), function (f, cx) {
		w.D(900, 300, 'o', 20).I(-cx.no(300).x, cx.no(300).y)
	})
	y.cl(w.S(600, 300, 'w', 60, '-'), function (f, cx) {
		w.D(600, 300, 'z', 20, '-').K('w').I(cx.no(300).x, cx.no(300).y)
	})
}
ERR = LCNOTFUNC = PT = function () {
	W({W: 2000, g: 0}).Y();
	_.t(10, function () {
		w.D(800, 200, 'r', 20).K('r')
	})
	w.S(50, 550, 'o', 200);  //w.S(800,300,'z', 80)
	b = w.S(300, 0, 'o', 200, 300).K('r')
	r = w.D(300, 300, 'r', 80).K('b')
	// dot both upper and lower bounds of AABB of both fixts
	w.cl(function (f, cx) {
		var ab, lb, up
		ab = f.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		ab = this.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		f.dot('g')
		this.dot('r')   //dot center of both fixts
		w.i.dot('y', M.lC(f.cen(), this.cen()))   //dot center of their centers
		cx.w(b, col)
		cx.w('b', 'r', col);
		cx.w(b, r, col);
		cx.w('b', r, col)
	})
	w.end(function (cx) {
		cx.w('b', col)
	})
	function col(f) {
		this.C($r())
	}
	
	//2do:draw line to connect these pts..
	// w.chalk('center of the two fixtures not necessarily  same as the cX pt. (can only represent col center if fSs are sSAME size... maybe halfway btwen this and the actual contact point would be nice')
}
WCPT = WCP = MANIF = MNF = WORLDMANIFOLD = WMF = function () {
//WORLDCONTACTPOINT =
	W(40).st.chalk('world contact eazy')
	w.box(200, 500, 200, 50).K('x')
	w.box(200, 500, 200, 50).K('x')
	w.brick(200, 500, 200, 50).K('x')
	w.b(function (cx) {
		if (cx.w('x')) {
			w.st.dot(cx.pt())
		}
	})
	// cx.wM().m_points[0].m()
	// cx.w('x','x') works too
	//normal manifold contains all info...
	//...world manifold is helpful for getting locations	 
	// $l('num pts: ' + _.size(pts)) numPoints = 1000000; _.ev(function () {$l(numPoints)})// always 2
}
NORMAL = NML = function () {
	W({g: 0}).b(
			bgFn)
			.chalk('m:  worlManifold', 'n:  m.m_normal', 'p:  m.m_points[0].mult()')
	function bgFn(cx) {
		if (cx.w('tim', 'ball')) {
			w.dot('g', cx.wCxPt())
			worMan = cx.wM()
			norm = cx.no()
			collV = cx.V()
			w.dot('w', collV)
			//a3.I(n.x*10, n.y*10  )
			//a2.I(-n.x*20, -n.y*10  )
			//a1.I(-n.x*200, -n.y*100)
			M.abs(collV.x *= 30)
			M.abs(collV.y *= 30)
			//this gets th actual velocity of body A
			//at moment of collision !!!!!!!
			v = cx.a().lVW(cx.pt())
			$l(v)
			// w.dot(  v )
			me.lV(v.x, v.y)  // HOLY SHIT!!! me absorbs enervy of tim's collision !!!!!!
		}
	}
	
	w.bump(300, 300, 60).K('ball')
	a1 = w.bump(50, 545).K('ball')
	a2 = w.bump(1150, 50).K('ball')
	tim = w.ba(500, 300).bS('guy').K('tim').con('thrust')
	me = w.ba(700, 300).bS('me').K('me')
}
CXS = function () {
	W()
	var cenFx = $cF(80).K('cen')
	w.A($dB(500, 300), [
		cenFx,
		$rF(60, 290, 0, 40, 10).mS().K('sen1')
	]).aV(100)
	w.A($dB(700, 300), [cenFx, $rF(100, 200).mS().K('sen2')]).aV(100)
	w.cl('sen1', 'sen2', function () {
		w.ba()
	})
	//w.b(function(cx){if(cx.w('sen1','sen2')){w.flag('new')}}) 
	//w.on('new', function(){w.ball()})
}
WITH = WIT = function () {
	W()
	w.ba().K('ball')
	w.brik(500)
	w.b(function (cx) {
		if (cx.w('ball', 'brick')) {
			$l('hit')
		}
	})
}
 
function more(){
	  old = function () {
//should deprecate!!!!!
/// shortcuts.. but each one will completely override the listener
// only for simple use cases (one type of listener, specified once)
		  w.beginX = w.onBeginContact = w.oB = function (func) {//=w.contactBegin
			  this.listen(b2d.listener().begin(func))
			  return this
		  }
		  w.endX = w.onEndContact = w.oE = function (fn) {
			  this.listen(b2d.listener().end(fn))
			  return this
		  }
		  w.preX = function (fn) {
			  this.listen(b2d.listener().pre(fn))
			  return this
		  }
		  w.postX = function (func) {
			  this.listen(b2d.listener().post(func))
			  return this
		  }
//////
	  }
	  function getWorldPoint(f) {
		  ab = f.GetAABB()
		  bdVars(f)
		  _.ev(1, function () {
			  w.st.dot('r', dx, dy)
			  w.st.dot('b', ux, uy)
			  w.st.dot('p', lx, ly)
		  })
	  }
	
	  b2d.superManifold = function (m) {
		  alert('superManifold')
//used????
		  m.lPN = m.m_localPlaneNormal
		  m.lP = m.m_localPoint
		  m.pC = m.m_pointCount
		  m.p = m.m_points
		  m.t = m.m_type
		  return m
	  }
	  function SuperImpulses(impulses) {
		  $l('SuperImpulses')
		  impulses.n = impulses.nI = function () {
			  return impulses.normalImpulses
		  }
		  impulses.t = impulses.tI = function () {
			  return impulses.tangentImpulses
		  }
		  return impulses
	  }
	
	  b2d.manager = b2d.contactManager = b2d.cM = function () {//used?
		  alert('b2d.manager')
		  var m = new BXD.b2ContactManager
		  m.c = m.cl = m.Collide
		  m.a = m.aP = m.AddPair
		  m.f = m.fNC = m.FindNewContacts
		  m.d = m.ds = m.Destroy
		  return m
	  }
	  function later() {//b2d.mini()  // http://stackoverflow.com/questions/19342932/box2d-collision-impact-calculation
// ALL 4 cx handlers give cx (can get points(pt) and normal(n))
//cx.pt1=cx.XY= cx.cen=cx.V=function(){return this.m().m_points[1].m() }
//cx.p1X= function(){return parseInt(this.pt1().x)}
//cx.p1Y= function(){return parseInt(this.pt1().y)}
//cx.X=function(){return this.XY().x} //cx.Y=function(){return this.XY().y}
		  function advanced() {
			  cx.fl = function () {
				  var cx = this//whats the point?
				  cx.FlagForFiltering()
				  return cx
			  }// Flag this contact for filtering.
// Filtering will occur the next time step.
		  }
		
		  function bibliography() {
			  b2d.flDa = b2d.fl = function () {//this is a NEW OBJECT: FilterData
				  var flDa = new b2d.Dynamics.b2FilterData
				  return flDa
			  }
			  fd.bit = function (cat, msk) {
				  var fd = this
				  fd.cat(cat).msk(msk)
				  return fd
			  }
			  fD.cat = fD.cB = function (cB) {
				  var fD = this
				  if (U(cB)) {
					  return fD.filter.categoryBits
				  }
				  fD.filter.categoryBits = cB
				  return fD
			  }
			  fd.msk = function (mB) {
				  var fd = this,
						  fl = fd.filter, n
				  if (U(mB)) {
					  return fl.maskBits
				  }
				  if (A(mB)) {
					  n = 0
					  _.e(mB, function (b) {
						  n += b
					  })
					  mB = n
				  }
				  fl.maskBits = mB
				  return fd
			  }
		  }

// i want the total power, // normal/tangent impulses
// the angles, cx.norm
// and their rel proportions ?
//and the excact center location point of the coll (cx.cen())
//norm is just the dir to quickest separate the overlapping shapes
		  /*
		   collide=function(){
		
		   //  I have 3 categories of things: players, obstacles and triggers.
		
		   //  players and obstacles collide with each other  but not with themselves.
		
		   circleDef.filter.categoryBits = 0x2
		   circleDef.filter.maskBits = 0x4
		
		
		   shapeDef.filter.categoryBits = 0x4
		   shapeDef.filter.maskBits = 0x2
		
		   // I want to also have trigger types...
		   //     these I'm only using to detect the player and trigger events ' +
		   // 'but should not be collided with by anything. ' +
		   //'Logically, that should be possible by setting the maskBits to 0x0.' +
		   //' The JBox2D collision code is as follows.
		
		
		   collide = function(){
		   return (filter1.maskBits & filter2.categoryBits) != 0 &&
		   (filter1.categoryBits & filter2.maskBits) != 0
		   }
		
		   //So if the maskBits = 0, then collide should never return true.
		   // I set the category bits to the next free category - 0x8.
		
		   shapeDef.filter.categoryBits = 0x8
		   shapeDef.filter.maskBits = 0x0
		
		
		   // I thought this could be to do with Java's ints working differently to how I expected,
		   // but I tested and found the following results:
		
		   //      0x2 & 0x2 = 2
		   //0x2 & 0x0 = 0
		   // The triggers are meant to be used to trigger events.
		   // This is done by implementing the CollisionListener and testing
		   // for player collisions with triggers and then setting boolean flags.
		   // However, when I run the simulation, the player is colliding with the triggers,
		   // and so are the obstacles.
		
		   // I've also tried setting the category and mask bits
		   // to the following respective values:
		
		   // 0x0 0x0
		   // 0x8 0x8
		   // 0x2 0x4
		   // 0x4 0x2
		
		   //And the player always collides with the trigger object.
		   // How do I get the player and obstacles to never collide with the trigger object?
		
		
		
		   //    Box2D supports 16 collision categories.
		   //      For each shape you can specify which category it belongs to.
		   //    You also specify what other categories this shape can collide with.
		   // For example, you could specify in a multiplayer game that:
		   //    all players don't collide with each other and
		   // monsters don't collide with each other,
		   // but players and monsters should collide.
		   // This is done with masking bits. For example:
		
		
		   playerShapeDef.filter.categoryBits = 0x0002
		   playerShape.filter.maskBits = 0x0004
		
		   monsterShapeDef.filter.categoryBits = 0x0004
		   monsterShapeDef.filter.maskBits = 0x0002
		
		
		   //Collision groups let you specify an integral group index.
		   //   You can have all shapes with the same group index always collide (positive index)
		   //or never collide (negative index).
		   // Group indices are usually used for things that are somehow related,
		   //   like the parts of a bicycle.
		   //  In the following example, shape1 and shape2 always collide,
		   // but shape3 and shape4 never collide.
		
		
		   shape1Def.filter.groupIndex = 2
		
		   shape2Def.filter.groupIndex = 2
		
		   shape3Def.filter.groupIndex = -8
		
		   shape4Def.filter.groupIndex = -8
		
		
		   // Collisions between shapes of different group indices are filtered
		   // according the category and mask bits.
		   // In other words, group filtering has higher precendence than category filtering.
		
		
		   //    This is the way I've understood how maskBits and categoryBits work. Let's say you have 3 objects : objectA, objectB and objectC.
		
		   //        Define for each object a category :
		
		   //        objectA.categoryBits = 0x0002;
		   //    objectB.categoryBits = 0x0004;
		   //    objectC.categoryBits = 0x0008;
		
		   //    Then, set the maskBits, which define the collisions rules for each categoryBits :
		
		   //        -> objectA collide with everyone (0xFFFF) and (&) not(~) objectB (0x0004)
		   //    objectA.maskBits = 0xFFFF & ~0x0004;
		
		   //    -> objectB collide with objectA (0x0002) or (|) objectC (0x0008) but no one else
		   //    objectB.maskBits = 0x0002 | 0x0008;
		
		   //    -> objectC collide with objectA (0x0002) but no one else
		   //    objectC.maskBits = 0x0002;
		
		
		
		   }
		   collide2=function(){
		
		   m_boundaryListener=new b2BoundaryListener()
		
		
		
		   bound=function(){
		
		   // addEventListener(Event.ENTER_FRAME, Update, false, 0, true);
		
		   var worldAABB  = new b2AABB();
		
		   worldAABB.lowerBound.Set(-100.0, -100.0);
		   worldAABB.upperBound.Set(100.0, 100.0);
		
		
		   w=  bW(worldAABB, bV(0 ,10 ) , true)
		
		   w.SetBoundaryListener(m_boundaryListener)
		
		
		   m_sprite = new Sprite()
		   addChild(m_sprite)
		   dbgDraw  = new b2DebugDraw()
		   dbgSprite  = new Sprite()
		   m_sprite.addChild(dbgSprite)
		
		   dbgDraw.m_sprite=m_sprite
		   dbgDraw.m_drawScale=30;
		   dbgDraw.m_alpha=1;
		   dbgDraw.m_fillAlpha=0.5;
		   dbgDraw.m_lineThickness=1;
		   dbgDraw.m_drawFlags=b2DebugDraw.e_shapeBit;
		   w.SetDebugDraw(dbgDraw);
		
		
		   // ground
		   bodyDef = new b2BodyDef()
		   bodyDef.position.Set(4,12)
		   boxDef = new b2PolygonDef()
		
		   boxDef.filter.categoryBits=2;
		   boxDef.SetAsOrientedBox(10, 1,new b2Vec2(5, 1.5), Math.PI/32);
		   boxDef.friction=0.3;
		   boxDef.density=0;
		   body=w.CreateBody(bodyDef);
		   body.CreateShape(boxDef);
		   body.SetMassFromShapes();
		
		
		   bodyDef = new b2BodyDef()
		   bodyDef.position.Set(8, 12)
		   boxDef = new b2PolygonDef()
		   boxDef.filter.categoryBits=4
		   boxDef.SetAsBox(1, 3)
		   boxDef.friction=0.3
		   boxDef.density=0
		   body=w.CreateBody(bodyDef)
		   body.CreateShape(boxDef)
		   body.SetMassFromShapes()
		
		   create_circle()
		   }
		
		
		
		   create_circle=function() {
		   bodyDef = new b2BodyDef()
		   bodyDef.position.x=6
		   bodyDef.position.y=2
		   circleDef = new b2CircleDef()
		   circleDef.filter.maskBits=Math.ceil(Math.random()*3)*2
		   circleDef.radius=2
		   circleDef.density=1
		   circleDef.friction=0.5
		   circleDef.restitution=0.2
		   body=w.CreateBody(bodyDef)
		   body.CreateShape(circleDef)
		   body.SetMassFromShapes()
		   }
		
		
		
		   Update=function(e:Event):void {
		   w.st(1/30,10)
		
		   if (m_boundaryListener.get_contact()) {
		   m_boundaryListener.no_contact()
		   w.dB(body)
		   bodyDef = new b2BodyDef()
		   create_circle()
		   }
		
		
		
		
		   }
		   */
		  /*  w.right.grp(-1)
		   y.grp(-1)
		   w.D(600,400,'r',30).grp(-1)
		   w.D(600,400,'r',40).grp(-1)
		   w.D(600,400,'r',50).grp(-1)
		
		   w.D(600,400,'b',50,50).grp(-2)
		   w.D(600,400,'b',60,60).grp(-2)
		   w.D(600,400,'b',70,70).grp(-2)
		   */
//from tx:
		  /*
		   w.l(1000,200,100,900,'-')
		   w.l (600,0,700,500)
		   w.l(200,200,500,500,'+')
		   w.dr(350,260, 200,200,'-')
		   w.dr( 500,240, 160,160,'+')
		   w.dr( 400,200, 100,100)
		   b= w.D(100, 200, 'y', 150, 100).d(.5).$(function(){this.B().I(0,-50)})
		   w.D(500, 400, 'y', 50, 100).d(.5).$(function(){this.B().I(0,-50)})
		   */
	  }
	
	  function temp() {
		  collide = function () {
			
			  //  I have 3 categories of things: players, obstacles and triggers.
			  //  players and obstacles collide with each other  but not with themselves.
			  circleDef.filter.categoryBits = 0x2
			  circleDef.filter.maskBits = 0x4
			  shapeDef.filter.categoryBits = 0x4
			  shapeDef.filter.maskBits = 0x2
			  // I want to also have trigger types...
			  //     these I'm only using to detect the player and trigger events ' +
			  // 'but should not be collided with by anything. ' +
			  //'Logically, that should be possible by setting the maskBits to 0x0.' +
			  //' The JBox2D collision code is as follows.
			  collide = function () {
				  return (filter1.maskBits & filter2.categoryBits) != 0 &&
						  (filter1.categoryBits & filter2.maskBits) != 0
			  }
			  //So if the maskBits = 0, then collide should never return true.
			  // I set the category bits to the next free category - 0x8.
			  shapeDef.filter.categoryBits = 0x8
			  shapeDef.filter.maskBits = 0x0
			  // I thought this could be to do with Java's ints working differently to how I expected,
			  // but I tested and found the following results:
			  //      0x2 & 0x2 = 2
			  //0x2 & 0x0 = 0
			  // The triggers are meant to be used to trigger events.
			  // This is done by implementing the CollisionListener and testing
			  // for player collisions with triggers and then setting boolean flags.
			  // However, when I run the simulation, the player is colliding with the triggers,
			  // and so are the obstacles.
			  // I've also tried setting the category and mask bits
			  // to the following respective values:
			  // 0x0 0x0
			  // 0x8 0x8
			  // 0x2 0x4
			  // 0x4 0x2
			  //And the player always collides with the trigger object.
			  // How do I get the player and obstacles to never collide with the trigger object?
//    Box2D supports 16 collision categories.
			  //      For each shape you can specify which category it belongs to.
			  //    You also specify what other categories this shape can collide with.
			  // For example, you could specify in a multiplayer game that:
			  //    all players don't collide with each other and
			  // monsters don't collide with each other,
			  // but players and monsters should collide.
			  // This is done with masking bits. For example:
			  playerShapeDef.filter.categoryBits = 0x0002
			  playerShape.filter.maskBits = 0x0004
			  monsterShapeDef.filter.categoryBits = 0x0004
			  monsterShapeDef.filter.maskBits = 0x0002
			  //Collision groups let you specify an integral group index.
			  //   You can have all shapes with the same group index always collide (positive index)
			  //or never collide (negative index).
			  // Group indices are usually used for things that are somehow related,
			  //   like the parts of a bicycle.
			  //  In the following example, shape1 and shape2 always collide,
			  // but shape3 and shape4 never collide.
			  shape1Def.filter.groupIndex = 2
			  shape2Def.filter.groupIndex = 2
			  shape3Def.filter.groupIndex = -8
			  shape4Def.filter.groupIndex = -8
			  // Collisions between shapes of different group indices are filtered
			  // according the category and mask bits.
			  // In other words, group filtering has higher precendence than category filtering.
//    This is the way I've understood how maskBits and categoryBits work. Let's say you have 3 objects : objectA, objectB and objectC.
//        Define for each object a category :
//        objectA.categoryBits = 0x0002;
//    objectB.categoryBits = 0x0004;
//    objectC.categoryBits = 0x0008;
//    Then, set the maskBits, which define the collisions rules for each categoryBits :
//        -> objectA collide with everyone (0xFFFF) and (&) not(~) objectB (0x0004)
//    objectA.maskBits = 0xFFFF & ~0x0004;
//    -> objectB collide with objectA (0x0002) or (|) objectC (0x0008) but no one else
//    objectB.maskBits = 0x0002 | 0x0008;
//    -> objectC collide with objectA (0x0002) but no one else
//    objectC.maskBits = 0x0002;
		  }
		  collide2 = function () {
			  m_boundaryListener = new b2BoundaryListener()
			  bound = function () {
				
				  // addEventListener(Event.ENTER_FRAME, Update, false, 0, true);
				  var worldAABB = new b2AABB();
				  worldAABB.lowerBound.Set(-100.0, -100.0);
				  worldAABB.upperBound.Set(100.0, 100.0);
				  w = bW(worldAABB, bV(0, 10), true)
				  w.SetBoundaryListener(m_boundaryListener)
				  m_sprite = new Sprite()
				  addChild(m_sprite)
				  dbgDraw = new b2DebugDraw()
				  dbgSprite = new Sprite()
				  m_sprite.addChild(dbgSprite)
				  dbgDraw.m_sprite = m_sprite
				  dbgDraw.m_drawScale = 30;
				  dbgDraw.m_alpha = 1;
				  dbgDraw.m_fillAlpha = 0.5;
				  dbgDraw.m_lineThickness = 1;
				  dbgDraw.m_drawFlags = b2DebugDraw.e_shapeBit;
				  w.SetDebugDraw(dbgDraw);
				  // ground
				  bodyDef = new b2BodyDef()
				  bodyDef.position.Set(4, 12)
				  boxDef = new b2PolygonDef()
				  boxDef.filter.categoryBits = 2;
				  boxDef.SetAsOrientedBox(10, 1, new b2Vec2(5, 1.5), Math.PI / 32);
				  boxDef.friction = 0.3;
				  boxDef.density = 0;
				  body = w.CreateBody(bodyDef);
				  body.CreateShape(boxDef);
				  body.SetMassFromShapes();
				  bodyDef = new b2BodyDef()
				  bodyDef.position.Set(8, 12)
				  boxDef = new b2PolygonDef()
				  boxDef.filter.categoryBits = 4
				  boxDef.SetAsBox(1, 3)
				  boxDef.friction = 0.3
				  boxDef.density = 0
				  body = w.CreateBody(bodyDef)
				  body.CreateShape(boxDef)
				  body.SetMassFromShapes()
				  create_circle()
			  }
			  create_circle = function () {
				  bodyDef = new b2BodyDef()
				  bodyDef.position.x = 6
				  bodyDef.position.y = 2
				  circleDef = new b2CircleDef()
				  circleDef.filter.maskBits = Math.ceil(Math.random() * 3) * 2
				  circleDef.radius = 2
				  circleDef.density = 1
				  circleDef.friction = 0.5
				  circleDef.restitution = 0.2
				  body = w.CreateBody(bodyDef)
				  body.CreateShape(circleDef)
				  body.SetMassFromShapes()
			  }
			  Update = function (e
			  :
			  Event
			  ):
			  void {
				  w.st(1 / 30, 10)
			  if (m_boundaryListener.get_contact()) {
				  m_boundaryListener.no_contact()
				  w.dB(body)
				  bodyDef = new b2BodyDef()
				  create_circle()
			  }
		  }
	  }}