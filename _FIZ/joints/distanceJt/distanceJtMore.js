j.shrink = function () {
	this.len(0.97, '*')
	return this
}
 

//jD.init(o.a, o.b, o.b1V, o.b2V)
//WARNING: dont ever set a dJ().len(0)
//this initialize function for distance, not revolute
	$dJOb = function () {
		var jD = new b2d.DJD()
		jD.init = function (b1, b2, b1V, b2V) {
			var jD = this
			if (U(b1V)) {
				b1V = b1.wCen()
			}
			if (U(b2V)) {
				b2V = b2.wCen()
			}
			return jD.init(b1, b2, b1V, b2V)
		}
		if (g.f.init) {
			jD.init.apply(jD, o.init)
		}
		jD.fq(N(o.fq, 3)).dR(N(o.dmp, .1)).l(N(o.l, 1))
		jD.cC(o.cl || o.cC || o.coll)
	}
}
function spring() {
	w.spg = function (a, b) {
		var w = this;
		a = a || w.D(150, 150, 'b', 50)
		b = b || w.S(180, 150, 'w', 50, 50)
		return w.dJ({a: a, b: b, l: 1, f: 2})
	}
	w.brg = function (x, y) {
		var w = this, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10
		x = N(x, 400);
		y = N(y, 100)
		FIRST = w.S(x, y, 10)
		LAST = w.S(x + 700, y, 'b', 10)
		b2 = wood()
		b3 = wood()
		b4 = wood()
		b5 = wood()
		b6 = wood()
		b7 = wood()
		b8 = wood()
		b9 = wood()
		_.e([
					[FIRST, b2],
					[b2, b3], [b3, b4], [b4, b5], [b5, b6], [b6, b7], [b7, b8], [b8, b9],
					[b9, LAST]
				],
				function (p) {
					w.dJ({
						a: p[0], b: p[1],
						l: 6, f: 5,
						coll: 1
					})
				})
		function wood() {
			return w.D(100, 100, 'd', 90, 60).d(1).fixRot()
		}
	}
	j.wU = j.wu = j.wind = function () {
		var j = this, wound
		cjs.t(function () {
			var l, m
			m = wound ? 1.01 : .99
			l = j.l() * m
			j.l(l * m)
			if (l < 5) {
				wound = 1
			}
			if (l > 200) {
				wound = 0
			}
		})
	}
//default freq is 0.  but thats like freq 10000000
//freq is tightness.  the default (0) is all the way tight.
//if u want to start to loosen it.  change from 0 to a very high number!
//try 50.. then u will see that it budges just a little.
//ok.. now keep going down..
// eventually it is too loose to fight against gravity
// hahaha then its just flat and usesless
// ok all this assumed a default damp of 0.
// now set the freq to a good oscillation (3 or 4)
// then play with the damp
// damp is like a tightner on your looseness
// it makes you less stretchy?
// just leave damp at 0 for now, and play with freq
//game:: he autojumps.  u jump to give him a double jump!
	b.ch = function (n) {
		if (this.gx) {
			return this.gx.children[N(n, 0)]
		}
	}
//w.l(0,0,w.W,w.H); w.l(w.W,0,0,w.H,'+')
// game:: density:  if u want to fit in here.. u will have to lower yourself a bit to our level..
// you see, compared to you, we a really quite dense. Not dense as in stupid, but as in, we have a high mass to volume ratio.
//  In otherwords, we can't jump!  It's a grave grave situation.
// Don't get me wrong, not grave as in bad, but grave, as in, it relates to gravity.  Additionally, it's quite bad.
// ok so freq is how much strngth u need to pull it??
// as freq gets low.. u can pull it farther away
// its the strength of the spring
// dont ever set a dJ().len(0)
//location pams are optional,
// and be default to their center points
// note: if you passe them in,
// pass them as relative(local to body) coords
//BOX2D requires them as WORLD points
// - for some reason..
// (but i think my way has more use cases)
//pass coll:true -> 'collideConnected=true'
	function _spring() {
		w.spg = function (a, b) {
			var w = this;
			a = a || w.D(150, 150, 'b', 50)
			b = b || w.S(180, 150, 'w', 50, 50)
			return w.dJ({a: a, b: b, l: 1, f: 2})
		}
		w.brg = function (x, y) {
			var w = this, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10
			x = N(x, 400);
			y = N(y, 100)
			FIRST = w.S(x, y, 10)
			LAST = w.S(x + 700, y, 'b', 10)
			b2 = wood()
			b3 = wood()
			b4 = wood()
			b5 = wood()
			b6 = wood()
			b7 = wood()
			b8 = wood()
			b9 = wood()
			_.e([
						[FIRST, b2],
						[b2, b3], [b3, b4], [b4, b5], [b5, b6], [b6, b7], [b7, b8], [b8, b9],
						[b9, LAST]
					],
					function (p) {
						w.dJ({
							a: p[0], b: p[1],
							l: 6, f: 5,
							coll: 1
						})
					})
			function wood() {
				return w.D(100, 100, 'd', 90, 60).d(1).fixRot()
			}
		}
		j.wU = j.wu = j.wind = function () {
			var j = this, wound
			cjs.t(function () {
				var l, m
				m = wound ? 1.01 : .99
				l = j.l() * m
				j.l(l * m)
				if (l < 5) {
					wound = 1
				}
				if (l > 200) {
					wound = 0
				}
			})
		}
//default freq is 0.  but thats like freq 10000000
//freq is tightness.  the default (0) is all the way tight.
//if u want to start to loosen it.  change from 0 to a very high number!
//try 50.. then u will see that it budges just a little.
//ok.. now keep going down..
// eventually it is too loose to fight against gravity
// hahaha then its just flat and usesless
// ok all this assumed a default damp of 0.
// now set the freq to a good oscillation (3 or 4)
// then play with the damp
// damp is like a tightner on your looseness
// it makes you less stretchy?
// just leave damp at 0 for now, and play with freq
//game:: he autojumps.  u jump to give him a double jump!
		b.ch = function (n) {
			if (this.gx) {
				return this.gx.children[N(n, 0)]
			}
		}
//w.l(0,0,w.W,w.H); w.l(w.W,0,0,w.H,'+')
// game:: density:  if u want to fit in here.. u will have to lower yourself a bit to our level..
// you see, compared to you, we a really quite dense. Not dense as in stupid, but as in, we have a high mass to volume ratio.
//  In otherwords, we can't jump!  It's a grave grave situation.
// Don't get me wrong, not grave as in bad, but grave, as in, it relates to gravity.  Additionally, it's quite bad.
// ok so freq is how much strngth u need to pull it??
// as freq gets low.. u can pull it farther away
// its the strength of the spring
// dont ever set a dJ().len(0)
//location pams are optional,
// and be default to their center points
// note: if you passe them in,
// pass them as relative(local to body) coords
//BOX2D requires them as WORLD points
// - for some reason..
// (but i think my way has more use cases)
//pass coll:true -> 'collideConnected=true'
	}
}
function chain() {
	w.Chain = function (fn) {
		var w = this
		var chain = {
			JS: [],
			NS: []
		}
		chain.eJ = function (fn) {
			_.e(this.JS, fn)
			return this
		}
		chain.eN = function (fn) {
			_.e(this.NS, fn)
			return this
		}
		chain.f = function (fq) {
			return this.eJ(function (j) {
				j.fq(fq)
			})
		}
		chain.d = function (d) {
			return this.eJ(function (j) {
				j.d(d)
			})
		}
		chain.l = function (l) {
			return this.eJ(function (j) {
				j.l(l)
			})
		}
		chain.j = function () {
			var g = G(arguments)
			var j = w.J($a(b2d.dJ, g))
			this.JS.push(j)
			return j
		}
		chain.J = function (o) {
			var j = this.j(o.a, o.b)
			if (N(o.f)) {
				j.fq(o.f)
			}
			if (N(o.d)) {
				j.d(o.d)
			}
			if (N(o.l)) {
				j.l(o.l)
			}
			return j
		}
		return chain
	}
	CHAIN = DISTROPE = ROPE = ROP = function () {
		W([1000, 600], {})
		//p.lD(2).fR()//.r(1.6)
		// p.stat()
		chain = w.Chain()
		p = w.p(300, 300, 2);
		v0 = w.S(200, 100, 'r', 15).d(15)
		v1 = w.D(300, 150, 'y', 15).d(15)
		v2 = w.D(200, 200, 'g', 15).d(15)
		chain.j(v0, v1)//.fq(20).d(0)
		return
		chain.j(v1, v2)//.fq(20).d(0)
		chain.j(p, v2, p.X(), p.Y() - 40, v2.X(), v2.Y())//.fq(30).d(1)
		// T.t(function(){  p.F(0,20)  })
		// _.e(js, function(j){ j.l(40).fq(12).d(3)  })
		// p.F(0,100,'+')
		// chain.d(0).f(60)
		chain.d(.4).f(12).l(40)
	}
	function _chain() {
		w.Chain = function (fn) {
			var w = this
			var chain = {
				JS: [],
				NS: []
			}
			chain.eJ = function (fn) {
				_.e(this.JS, fn)
				return this
			}
			chain.eN = function (fn) {
				_.e(this.NS, fn)
				return this
			}
			chain.f = function (fq) {
				return this.eJ(function (j) {
					j.fq(fq)
				})
			}
			chain.d = function (d) {
				return this.eJ(function (j) {
					j.d(d)
				})
			}
			chain.l = function (l) {
				return this.eJ(function (j) {
					j.l(l)
				})
			}
			chain.j = function () {
				var g = G(arguments)
				var j = w.J($a(b2d.dJ, g))
				this.JS.push(j)
				return j
			}
			chain.J = function (o) {
				var j = this.j(o.a, o.b)
				if (N(o.f)) {
					j.fq(o.f)
				}
				if (N(o.d)) {
					j.d(o.d)
				}
				if (N(o.l)) {
					j.l(o.l)
				}
				return j
			}
			return chain
		}
		CHAIN = DISTROPE = ROPE = ROP = function () {
			W([1000, 600], {})
			//p.lD(2).fR()//.r(1.6)
			// p.stat()
			chain = w.Chain()
			p = w.p(300, 300, 2);
			v0 = w.S(200, 100, 'r', 15).d(15)
			v1 = w.D(300, 150, 'y', 15).d(15)
			v2 = w.D(200, 200, 'g', 15).d(15)
			chain.j(v0, v1)//.fq(20).d(0)
			return
			chain.j(v1, v2)//.fq(20).d(0)
			chain.j(p, v2, p.X(), p.Y() - 40, v2.X(), v2.Y())//.fq(30).d(1)
			// T.t(function(){  p.F(0,20)  })
			// _.e(js, function(j){ j.l(40).fq(12).d(3)  })
			// p.F(0,100,'+')
			// chain.d(0).f(60)
			chain.d(.4).f(12).l(40)
		}
	}
}
function blob() {
	$L()
	blobX = 320;
	blobY = 240;
	parNum = 16;
	parDst = 50;
	w.sph = w.sphere = function (pX, pY, r) {
		var w = this
		var b = w.CB($dB(pX, pY))
		b.CF($fD($cH(r)).re(.4).fr(.5))
		return b
	}
	BLB = function () {
		W()
		Bs = [w.sph(blobX, blobY, 15)]
		Bs.sph = function () {
			this.push(w.sph.apply(w, arguments))
			return this
		}
		_.t(parNum, function (i) {
			var an = (2 * M.PI) / parNum * i;
			var posX = blobX + parDst * M.c(an);
			var posY = blobY + parDst * M.s(an);
			Bs.sph(posX, posY, 2)
			var dJ = $dJ(Bs[0], Bs[_.z(Bs) - 1]).l(parDst).dR(.5).fq(5)//dJ.lAA(V()).lAB(V())
			var dJt = w.CJ(dJ)
			if (i > 0) {
				var z = _.z(Bs)
				dJt = w.CJ(dJ.sAB(Bs[z - 2], Bs[z - 1])
						.l(M.sqrtSumSqr(posX - Bs[z - 2].X(), posY - Bs[z - 2].Y())))
				//dJ.lAA(V()).lAB(V())
			}
			if (i == parNum - 1) {
				dJ.sAB(Bs[1], Bs[_.z(Bs) - 1])
				//dJ.localAnchorA = V(); dJ.localAnchorB = V()
				dJt = w.CJ(dJ.l(M.sqrtSumSqr(
						posX - Bs[1].X(), posY - Bs[1].Y()
				)))
			}
		})
	}
	DJD = function () {
		fps = 60;
		mouse_pressed = 0
		mouse_joint = 0
		//box2d to cv scale , therefor 1 metre of box2d = 30px of cv :)
		sc = scale = 30;
		cv = $.c('X', 1000, 500).A()
		cv.attr('id', 'cv')
		ctx = cv[0].getContext('2d');
		w = createWorld();
		//internal dims of the cv
		cv_wd = parseInt(cv.attr('width'));
		cv_ht = parseInt(cv.attr('height'));
		cv_ht_m = cv_ht / scale;
		$(cv).mousemove(function (e) {
			var p = get_real(V(e.pageX / scale, e.pageY / scale))
			mouse_x = p.x;
			mouse_y = p.y;
			if (mouse_pressed && !mouse_joint) {
				var b = GetBodyAtMouse();
				if (b) {
					//if joint exists then create
					var mD = new b2d.MJD()
					mD.A(ground).B(b)
					mD.target = p;
					mD.collideConnected = true;
					mD.maxForce = 1000 * b.GetMass();
					mD.dampingRatio = 0;
					mouse_joint = w.CJ(mD);
				}
			}
			if (mouse_joint) {
				mouse_joint.SetTarget(p);
			}
		});
		$(cv).mousedown(function () {
			//flag to indicate if mouse is pressed or not
			mouse_pressed = true;
		});
		// When mouse button is release, mark pressed as false and delete the mouse joint if it exists
		$(cv).mouseup(function () {
			mouse_pressed = false;
			if (mouse_joint) {
				w.DJ(mouse_joint);
				mouse_joint = false;
			}
		});
		//start stepping
		step();
	}
//Draw a w - this method is called in a loop to redraw the w
	function draw_w(w) {
		//convert the cv coordinate directions to cartesian coordinate direction by translating and scaling
		ctx.fillRect(0, 0, cv.W(), cv.H())
		ctx.save();
		ctx.translate(0, cv_ht);
		ctx.scale(1, -1);
		w.DDD();
		ctx.restore();
		ctx.font = 'bold 18px arial';
		ctx.textAlign = 'center';
		ctx.fillStyle = '#fff';
		ctx.fillText('Box2d Distance Joint example in Javascript', cv_wd / 2, 20);
		ctx.font = 'bold 14px arial';
		ctx.fillText('Click on any object and drag it', cv_wd / 2, 40);
	}
	
	function createWorld() {
		w = new b2d.W(V(0, -10), true)
		w.SDD($dD().sp(ctx).sc(sc).fA(1).fl(b2d.hB | b2d.jB))
		ground = box(w, 8.5, 2, 16, 1, {type: b2d.sB});
		a = box(w, 6.50, 3.8, 1, 1);
		b = box(w, 10.5, 3.8, 1, 1);
		c = ball(w, 8.5, 3.8, 1);
		return w.aJ($dJ(b, c).cl1().l(100));
	}

//Function to create a round ball, sphere like object
	function ball(w, x, y, rad, op) {
		op = $.x(true, {'de': 1, 'fr': 1, 're': 0.5, 'type': b2d.B.b2_dynamicBody}, op);
		return w.D(x, y).A($cF(rad * 30)).de(op.de || 1).fr(.5).re(.5)
	}
	
	b.A = function () {
		var b = this, g = G(arguments)
		g.e(function (f) {
			b.f(f)
		})
		return b
	}
//Create standard boxes of given ht , wd at x,y
	function box(w, x, y, wd, ht, op) {
		op = $.x(true, {
			de: 1, fr: 1, re: .5,
			type: b2d.B.b2_dynamicBody
		}, op);
		var bD = $bD(x, y).ty(op.type), fD = $fD();
		fD.de(op.de).fr(op.fr).re(op.re).H($pH())
		fD.shape.SAB(wd / 2, ht / 2);
		//bD.userData = op.user_data;
		var b = w.CB(bD);
		var f = b.CF(fD);
		return b;
	}
	
	/*
	 This method will draw the w again and again
	 called by settimeout , self looped
	 */
	function step() {
		w.St(timeStep = 1.0 / (fps * 0.8), 8, 3).CF();
		draw_w(w, ctx);
		_.sT(step, 1000 / fps);
	}// 16.7ms
	function get_real(p) {
		return V(p.x + 0, cv_ht_m - p.y);
	}//Convert coordinates in cv to box2d w
	function GetBodyAtMouse(includeStatic) {
		var mouse_p = V(mouse_x, mouse_y);
		var aabb = new b2AABB();
		aabb.lowerBound.Set(mouse_x - 0.001, mouse_y - 0.001);
		aabb.upperBound.Set(mouse_x + 0.001, mouse_y + 0.001);
		var b
		w.QA(function (f) {
			var h = f.H();
			if (!f.B().iS() || includeStatic) {
				if (h.TP(f.B().tf(), mouse_p)) {
					b = f.B();
					return 0
				}
			}
			return 1
		}, aabb);
		return b;
	}
	
	function _pre() {
		b2d.hB = b2d.hBit = b2d.shapeBit = b2d.DD.e_shapeBit
		b2d.jB = b2d.jBit = b2d.jointBit = b2d.DD.e_jointBit
		b2d.sB = b2d.B.b2_staticBody
		//$.x = $.extend
		M.sumSqr = function (x, y) {
			return x * x + y * y
		}
		M.sqrtSumSqr = function (x, y) {
			M.sqrt(M.sumSqr(x, y))
		}
		w.aJ = function (jD) {
			this.CJ(jD)
			return this
		}
	}
}
function distanceJts() {
	b2d.p()
//shiffman video explanation: https://www.youtube.com/watch?v=4LYvltd07hk
//dist joint parameters:
//length: //this is rest length... (lengh if spring came to rest)
	dJ.len = dJ.l = function (a) {
		var j = this, g = G(arguments),
				l = j.GetLength() * 30
		if (g.u) {
			return l
		}
		j.SetLength(
				_.upd(j, g.f, g) / 30)
		return j
	}
//frequencyHrtz: speed/freq  of oscilliation, 	//simple harmonic motion // usually between 1-5
	dJ.frq = dJ.freq = dJ.fq = function (fq) {
		if (U(fq)) {
			return this.GetFrequency()
		}
		this.SetFrequency(fq);
		return this
	}
//dampingRatio: affects springiness but it's what causes a spring to come to rest // usually 0-1
	dJ.dmpRat = dJ.dmp = dJ.damp = dJ.d = function (dR) {
		if (U(dR)) {
			return this.GetDampingRatio()
		}
		this.SetDampingRatio(dR);
		return this
	}
// to make a completely rigid distance joint -> make freqHz = 0, dampingRatio = 1 (complete damping and no oscillation at all)
//video: 7min
//where do we put the joint?  could make 'connection' class  which wraps a joint..   // or a 'pair' class with two bods and the joints (and all related info)
	b2d.DistanceJointDef = b2d.Joints.b2DistanceJointDef
	b2d._dJtDf = function () {
		return new b2d.DistanceJointDef
	}
	b2d.dJt = b2d.dJ = function () {
		var g = G(arguments), jD, o
		o = {a: g.f, b: g.s}
		if (N(g.t)) {
			o.ancA = V(g.t, g[3])
			o.ancB = V(g[4], g[5])
		}
		if (O(g.t)) {
			o.ancA = V(g.t);
			o.ancB = V(g[3])
		}
		o.ancA = o.ancA || o.a.wC()
		o.ancB = o.ancB || o.b.wC()
		jD = b2d._dJtDf()
		jD.Initialize(o.a, o.b, o.ancA.d(), o.ancB.d())
		return jD
	}
	b2d.dJ = function () {
		$l('b2d.dJ')
		var g = G(arguments),
				dJD = new b2d.DistanceJointDef
		dJD.i = function (a, b, aV, bV) {
			$l('dJD.i')
			var jd = this,
					g = G(arguments), o
			o = g.O ? g.f : {a: g.f, b: g.s, aV: g.t, bV: g[3]}
			if (o.av) {
				o.aV = o.a.wC().add(o.av || V())
			}
			else {
				o.aV = o.aV || o.a.wC()
			}
			o.bV = o.bv ? o.b.wC().add(o.bv || V()) :
					o.b ? o.b.wC() : o.bV || null
			if (g.n) {
				$l('dJD.i g.n!!! whited out')
				/*
				 if(o.aV){
				 _aV = o.aV
				 o.aV = o.aV.d()
				 }
				 if(o.bV){o.bV = o.bV.d()}
				 */
			}
			jd.Initialize(o.a, o.b, o.aV, o.bV)/////////////////////////
			if (o.cl) {
				jd.cl(true)
			}
			return jd
		}
		if (g.f) {
			dJD.i(g.f, '-')
		}
		return dJD
	}
	w.dJt = w.dJ = function () {
		var w = this, g = G(arguments), jd, j, o
		o = g.O ? g.f : _.x({a: g.f, b: g.s},
				O(g[3]) ? {av: g.t, bv: g[3], l: g[4], f: g[5], d: g[6]} :
						O(g.t) ? {av: g.t, l: g[3], f: g[4], d: g[5]} :
						{l: g.t, f: g[3], d: g[4]})
		jd = b2d.dJ(o)
		if (o.cl) {
			jd.cl(1)
		}
		j = w.J(jd).fq(N(o.f, 0)).d(N(o.d, 0))
		if (N(o.l)) {
			j.l(o.l)
		}
		return j
	}
	b.dJt = b.dJ = function (nxB) {
		var b = this, w = b.W()
		w.dJ(b, nxB);
		return nxB
	}
	j.shrink = function () {
		var j = this
		j.len(0.97, '*')
		return j
	}
	DJJ = function () {
		W().Y()
		b2 = w.D(500, 300, 'w', 18, 450)
		b3 = w.S(500, 200, 'r', 70)
		w.dJ(b3, b2)
		//w.dJ(b2, w.D(500, 300, 'g', 90))
	}
	DJY = function () {
		W().Y()
		w.dJ(
				y.XY(200, 200),
				x = w.D(200, 220, 'r', 12))
		w.dJ(x, x = w.D(200, 250, 'r', 12))
		w.dJ(x, x = w.D(200, 280, 'b', 12))
		w.dJ(x, x = w.D(200, 320, 'g', 12))
		w.dJ(x, x = w.D(200, 360, 'u', 12))
		w.dJ(x, x = w.D(200, 420, 'g', 12))
		w.dJ(x, x = w.D(200, 500, 'u', 12))
	}
	DJ = function () {
		W([1400, 800], {g: 1000}).Y(500, 300);
		xx = w.S(1100, 40, 'x', 40)
		jj = w.dJ({
			a: xx,
			b: w.D(1050, 200, 'r', 20, 60),
			l: 200, cl: 1, coll: 1
		})
		kk = w.dJ(xx, w.D(1100, 200, 'y', 20, 60), 200)
		w.S(800, 40, 'o', 200, 100, '-', 'sen')  //can get triggered many many times?
		w.cl('sen',
				function () {
					jj.wind();
					kk.wind()
				}
		)
	}
	WANCA = WANCB = FIXEDROTATETHRUST = DROWNING = BALLANDCHAIN = DIST = DST = function () {
		W([600, 600, 600, 1200])
		b = w.D(300, 200, 'b', 150, 140).tr()
		x = w.D(200, 100, 'x', 20).cn('thrust').bS('me').aD(100).fR()
		jD = new b2d.Joints.b2DistanceJointDef
		wAncA = V(300, 200, '-')
		wAncB = V(200, 100, '-')
		jD.Initialize(x, b, wAncA, wAncB)  // dJD.collideConnected = true;
		j = w.J(jD)
	}
	BRIDE = DISTDOT = LOCDJ = LDJ = function () {
		W([2000, 1400], {})
		x = w.S(300, 400, 'r', 100, 100)
		//b = w.D(400,200, 'b' ,100, 50, 0, 0, 28).fR()
		b = w.y(400, 200, '+')
		j = w.dJ({a: x, b: b})
		_.ev(.2, function () {
			w.dot(j.GetAnchorA().m().x, j.GetAnchorA().m().y)
			w.dot(j.GetAnchorB().m().x, j.GetAnchorB().m().y)
		})
		j.fq(8)
		j.d(0)
		// w.dJ(x,b)
		w.dot('z', 1310, 400)
		w.brg(900, 500);
		_.in(3, function () {
			w.p(900, 100)
		})
	}
	TPL = SOFTPLAT = SPRING = ACROBAT = SPG = function () {
		W([2000, 1300], {g: 1000}).P(300, 320)
		// y.tr()
		// w.brg(860, 1060)
		//and more..
		// here i bind bodies with fixtures that are alredy out of line
		w.dJ(w.D(800, 100, 'y', 20),
				w.D(800, 150, 'o', b2d.pol(20, 20, 15, 15, 45)),
				30)
		w.dJ(
				w.D(900, 300, 'g', 20),
				w.D(910, 320, 'b', 20, 20),
				30)
		b1 = w.S(200, 200, 'y', 50)
		b11 = w.D(200, 200, 'x', 50, 50)
		w.dJ(b1, b11, 60)
		r = w.D(100, 100, 'r', 40)
		u = w.S(500, 300, 'u', 200, 100)
		j = w.dJ(u, r, V(100, 100)).l(50)
		w.dJ(u, w.D(300, 400, 'b', 20), V(-100, 100)).l(50)
		w.dJ(u, w.D(600, 300, 'g', 20), V(100, -100)).l(50)
		w.dJ({
			a: u,
			b: w.D(300, 400, 'o', 20),
			av: V(-100, -100),
			coll: 1, l: 50
		})
		p.tr().r(1)
		SoftPlat(300, 400)
		SoftPlat(500, 380)
		SoftPlat(700, 340)
		SoftPlat(900, 420)
		function SoftPlat(x, y) {
			x = N(x, 300);
			y = N(y, 60)
			w.dJ({
				a: w.S(x, y, 'z', 8, '-'),
				b: w.D(x, y, 'w', 100, 30).d(1).r(0).fR(),
				l: .1,
				f: 10
			}).d(.1)
		}
		
		w.tpl = function (x, r, fq, d) {
			var w = this, bouncer, j
			x = N(x, 290)
			r = N(r, 75)
			fq = N(fq, 6)
			d = N(d, 0)
			j = w.dJ(
					w.S(x, 1080, 'w', 20, 20),
					w.D(x, 1000, 'b', 200, 20)
							.fR().d(0).r(r).fr(0))
			j.l(115).fq(fq).d(d)
			w.S(x - 120, 1090, 'b', 40, 300).fr(0)
			w.S(x + 120, 1090, 'b', 40, 300).fr(0)
			return j
		}
		w.tpl(200, 0, 6)// not bouncy
		w.tpl(500, 1.2, 6)// too bouncy
		w.tpl(800, .75, 6)// mid bouncy, mid freq
		w.tpl(1100, .75, 2)//low freq
		w.tpl(1400, .75, 12)//high freq
		//_.ev(1,function () {p.I(0, -150)})
		//_.in(15, function(){w.addHundBalls()})
		//freq is SPEED of oscillation
		//damp is STRENGTH of oscillation
		// so bodies cant rotate if they dont have density???
	}
	REVJTVIN = VINE = VIN = function () {
		W(250).Y().P()
		w.trap(50)
		w.vine(200, 100, 15, 8)
		w.vine(210, 100, 25, 8)
		w.vine(220, 100, 25, 5)
		w.vine(260, 100, 3, 35).rJ(3, 20).rJ(3, 35)
		w.vine(300, 100, 30, 2)
		//blinds
		w.rJ(
				w.link1(600, 20, 3, '+').add(10),
				w.p(500, 200), '+')
		//ropey
		b = w.S(1100, 50, 'g', 60, 15).d(1)
		_.t(10, function (y) {
			w.rJ(
					b,
					b = w.D(1100, y * 20 + 80, 'w', 3, 15).d(1))
		})
		w.rJ(b,
				w.D(1100, 11 * 20 + 50, 'd', 20).d(1))
		p.cl('leaf', function (l) {
			w.jt = w.rJ(l.B(), p.XY(l.B()), R() ? '*' : null)
			$.space(function () {
				w.j(w.jt)
			})
		})
	}
	 
//body.GetTransform()
//body.GetFixtureList().GetShape()
	DJTSTRING = function () {
	}
	function bridge() {
		DJTBRIDGE = function () {

//two bodies at ends must be static
		}
	};
	bridge()
	function springs() {
		WSPG = function () {
			W([1400, 800], {g: 1000}).Y(500, 300);
			y.tr()
			w.S(400, 500, 'r', 4, 2000)
			w.dJ({
				a: w.D(200, 200, 'b', 50),
				b: w.D(300, 200, 'b', 60),
				l: 50, f: 3, d: .1,
				cl: 1
			})
			w.dJ({
				a: w.D(200, 200, 'd', 50, 50),
				b: w.D(300, 200, 'd', 60, 60),
				l: 50, f: 3, d: .1, cl: 1
			})
			w.dJ(w.D(200, 200, 'o', 50), w.D(300, 200, 'o', 40)).l(50).fq(3).d(.1)
			w.spg(w.S(200, 100, 'g', 10).sen(1), w.D(200, 250, 'b', 250, 10).K('rec')).fq(3).d(.1)
			oj = w.dJ(w.D(830, 700, 'o', 50).bS('me'), w.S(900, 0, 'o', 50, 50)).l(200).fq(5).d(.1)
			T.t(function () {
				if (oj.l() > 1) {
					oj.l(oj.l() - .002)
				}
			})
		}
		ACROBAT = SPG = function () {
			W()
			w.spg(
					w.S(500, 100, 'o', 10, '-'),
					w.D(500, 250, 'r', 250, 10).K('rec')
			).fq(3).d(1)
			w.spg(
					w.S(1200, 125, 'c', 10, '-'),
					w.D(1200, 275, 'r', 250, 10).K('rec')
			).fq(10).d(.5)
			w.dJ(
					w.D(600, 300, 'z', 30),
					w.S(900, 500, 'z', 50, 80, 0, 0, 20)
			).l(20).fq(5).d(.1)//.coll(false)
			w.dJ(
					w.D(130, 450, 'b', 30),
					w.S(130, 800)
			).l(120).fq(5).d(0)//.coll(true)
		}
		DJTMESH = function () {
		}
		SPRINGS = RAGDOLL = RAGD = RAG = function () {
			W({})
			w.spg(
					b1 = w.D(100, 100, 'b', 30),
					w.D(100, 200, 'r', 40))
			w.dJ(
					b2 = w.D(100, 400, 'g', 30, 30),
					w.D(100, 500, 'o', 40, 40)
			)
			p = w.me(500, 200)
			w.spg(b1, p)
			w.spg(b2, p)
		}
	};
	springs()
	/*
	 jd.freq=  function(a){
	 if(U(a)){return this.frequencyHz}
	 this.frequencyHz=a;return this
	 }
	 jd.len=function(len){
	 if(U(len)){return this.length*30}
	 this.length=len/30
	 return this}
	 jd.damp = function(a){if(U(a)){return this.dampingRatio}
	 this.dampingRatio=a;return this}
	
	 */
	function err() {
		SPOLL = function () {
			W({g: 0, w: 0});
			Q(function () {
				s = w.s
				e = w.S(200, 200, 'p', 100)
						.d(1).r(2)
						.bS({i: q.b('sun'), sc: .13})
						.K('earth');
				eI = e.ch()
				// p= w.player(200,200,2.5, 'thrust').d(.4).aD(8).lD(.8)
				p = w.D(200, 200).cn('thrust').Bm('me', 0, 0, 0.25 * sc)
				w.dJ({a: p, b: e, l: 50, f: 100.15, cl: 1})
				T.t(function () {
					var sp,
							dx = e.X() - p.X(),
							dy = e.Y() - p.Y(),
							sc = cjs.cap(300 /
							M.sqrt(dx * dx + dy * dy), .3, 2)
					s.X(300 - sc * (p.X() - 300))
					s.Y(150 - sc * (p.Y() - 150))
				})
			})
		}
	}
	
	/* overlap??
	 http://www.box2d.org/manual.html - also has other stuff
	 b2Transform xfA = …, xfB = …;
	
	 bool overlap = b2TestOverlap(shapeA, indexA, shapeB, indexB, xfA, xfB);
	 */
	function sports() {
		MARBLES = function () {
			W().Y()
			w.dJ(
					y.XY(200, 200),
					x = w.D(200, 220, 'r', 12))
			w.dJ(x, x = w.D(200, 250, 'r', 12))
			w.dJ(x, x = w.D(200, 280, 'b', 12))
			w.dJ(x, x = w.D(200, 320, 'g', 12))
			w.dJ(x, x = w.D(200, 360, 'u', 12))
			w.dJ(x, x = w.D(200, 420, 'g', 12))
			w.dJ(x, x = w.D(200, 500, 'u', 12))
		}
	}
	
	function _distanceJts() {
		b2d.p()
//shiffman video explanation: https://www.youtube.com/watch?v=4LYvltd07hk
//dist joint parameters:
//length: //this is rest length... (lengh if spring came to rest)
		dJ.len = dJ.l = function (a) {
			var j = this, g = G(arguments),
					l = j.GetLength() * 30
			if (g.u) {
				return l
			}
			j.SetLength(
					_.upd(j, g.f, g) / 30)
			return j
		}
//frequencyHrtz: speed/freq  of oscilliation, 	//simple harmonic motion // usually between 1-5
		dJ.frq = dJ.freq = dJ.fq = function (fq) {
			if (U(fq)) {
				return this.GetFrequency()
			}
			this.SetFrequency(fq);
			return this
		}
//dampingRatio: affects springiness but it's what causes a spring to come to rest // usually 0-1
		dJ.dmpRat = dJ.dmp = dJ.damp = dJ.d = function (dR) {
			if (U(dR)) {
				return this.GetDampingRatio()
			}
			this.SetDampingRatio(dR);
			return this
		}
// to make a completely rigid distance joint -> make freqHz = 0, dampingRatio = 1 (complete damping and no oscillation at all)
//video: 7min
//where do we put the joint?  could make 'connection' class  which wraps a joint..   // or a 'pair' class with two bods and the joints (and all related info)
		b2d.DistanceJointDef = b2d.Joints.b2DistanceJointDef
		b2d._dJtDf = function () {
			return new b2d.DistanceJointDef
		}
		b2d.dJt = b2d.dJ = function () {
			var g = G(arguments), jD, o
			o = {a: g.f, b: g.s}
			if (N(g.t)) {
				o.ancA = V(g.t, g[3])
				o.ancB = V(g[4], g[5])
			}
			if (O(g.t)) {
				o.ancA = V(g.t);
				o.ancB = V(g[3])
			}
			o.ancA = o.ancA || o.a.wC()
			o.ancB = o.ancB || o.b.wC()
			jD = b2d._dJtDf()
			jD.Initialize(o.a, o.b, o.ancA.d(), o.ancB.d())
			return jD
		}
		b2d.dJ = function () {
			$l('b2d.dJ')
			var g = G(arguments),
					dJD = new b2d.DistanceJointDef
			dJD.i = function (a, b, aV, bV) {
				$l('dJD.i')
				var jd = this,
						g = G(arguments), o
				o = g.O ? g.f : {a: g.f, b: g.s, aV: g.t, bV: g[3]}
				if (o.av) {
					o.aV = o.a.wC().add(o.av || V())
				}
				else {
					o.aV = o.aV || o.a.wC()
				}
				o.bV = o.bv ? o.b.wC().add(o.bv || V()) :
						o.b ? o.b.wC() : o.bV || null
				if (g.n) {
					$l('dJD.i g.n!!! whited out')
					/*
					 if(o.aV){
					 _aV = o.aV
					 o.aV = o.aV.d()
					 }
					 if(o.bV){o.bV = o.bV.d()}
					 */
				}
				jd.Initialize(o.a, o.b, o.aV, o.bV)/////////////////////////
				if (o.cl) {
					jd.cl(true)
				}
				return jd
			}
			if (g.f) {
				dJD.i(g.f, '-')
			}
			return dJD
		}
		w.dJt = w.dJ = function () {
			var w = this, g = G(arguments), jd, j, o
			o = g.O ? g.f : _.x({a: g.f, b: g.s},
					O(g[3]) ? {av: g.t, bv: g[3], l: g[4], f: g[5], d: g[6]} :
							O(g.t) ? {av: g.t, l: g[3], f: g[4], d: g[5]} :
							{l: g.t, f: g[3], d: g[4]})
			jd = b2d.dJ(o)
			if (o.cl) {
				jd.cl(1)
			}
			j = w.J(jd).fq(N(o.f, 0)).d(N(o.d, 0))
			if (N(o.l)) {
				j.l(o.l)
			}
			return j
		}
		b.dJt = b.dJ = function (nxB) {
			var b = this, w = b.W()
			w.dJ(b, nxB);
			return nxB
		}
		j.shrink = function () {
			var j = this
			j.len(0.97, '*')
			return j
		}
		DJJ = function () {
			W().Y()
			b2 = w.D(500, 300, 'w', 18, 450)
			b3 = w.S(500, 200, 'r', 70)
			w.dJ(b3, b2)
			//w.dJ(b2, w.D(500, 300, 'g', 90))
		}
		DJY = function () {
			W().Y()
			w.dJ(
					y.XY(200, 200),
					x = w.D(200, 220, 'r', 12))
			w.dJ(x, x = w.D(200, 250, 'r', 12))
			w.dJ(x, x = w.D(200, 280, 'b', 12))
			w.dJ(x, x = w.D(200, 320, 'g', 12))
			w.dJ(x, x = w.D(200, 360, 'u', 12))
			w.dJ(x, x = w.D(200, 420, 'g', 12))
			w.dJ(x, x = w.D(200, 500, 'u', 12))
		}
		DJ = function () {
			W([1400, 800], {g: 1000}).Y(500, 300);
			xx = w.S(1100, 40, 'x', 40)
			jj = w.dJ({
				a: xx,
				b: w.D(1050, 200, 'r', 20, 60),
				l: 200, cl: 1, coll: 1
			})
			kk = w.dJ(xx, w.D(1100, 200, 'y', 20, 60), 200)
			w.S(800, 40, 'o', 200, 100, '-', 'sen')  //can get triggered many many times?
			w.cl('sen',
					function () {
						jj.wind();
						kk.wind()
					}
			)
		}
		WANCA = WANCB = FIXEDROTATETHRUST = DROWNING = BALLANDCHAIN = DIST = DST = function () {
			W([600, 600, 600, 1200])
			b = w.D(300, 200, 'b', 150, 140).tr()
			x = w.D(200, 100, 'x', 20).cn('thrust').bS('me').aD(100).fR()
			jD = new b2d.Joints.b2DistanceJointDef
			wAncA = V(300, 200, '-')
			wAncB = V(200, 100, '-')
			jD.Initialize(x, b, wAncA, wAncB)  // dJD.collideConnected = true;
			j = w.J(jD)
		}
		BRIDE = DISTDOT = LOCDJ = LDJ = function () {
			W([2000, 1400], {})
			x = w.S(300, 400, 'r', 100, 100)
			//b = w.D(400,200, 'b' ,100, 50, 0, 0, 28).fR()
			b = w.y(400, 200, '+')
			j = w.dJ({a: x, b: b})
			_.ev(.2, function () {
				w.dot(j.GetAnchorA().m().x, j.GetAnchorA().m().y)
				w.dot(j.GetAnchorB().m().x, j.GetAnchorB().m().y)
			})
			j.fq(8)
			j.d(0)
			// w.dJ(x,b)
			w.dot('z', 1310, 400)
			w.brg(900, 500);
			_.in(3, function () {
				w.p(900, 100)
			})
		}
		TPL = SOFTPLAT = SPRING = ACROBAT = SPG = function () {
			W([2000, 1300], {g: 1000}).P(300, 320)
			// y.tr()
			// w.brg(860, 1060)
			//and more..
			// here i bind bodies with fixtures that are alredy out of line
			w.dJ(w.D(800, 100, 'y', 20),
					w.D(800, 150, 'o', b2d.pol(20, 20, 15, 15, 45)),
					30)
			w.dJ(
					w.D(900, 300, 'g', 20),
					w.D(910, 320, 'b', 20, 20),
					30)
			b1 = w.S(200, 200, 'y', 50)
			b11 = w.D(200, 200, 'x', 50, 50)
			w.dJ(b1, b11, 60)
			r = w.D(100, 100, 'r', 40)
			u = w.S(500, 300, 'u', 200, 100)
			j = w.dJ(u, r, V(100, 100)).l(50)
			w.dJ(u, w.D(300, 400, 'b', 20), V(-100, 100)).l(50)
			w.dJ(u, w.D(600, 300, 'g', 20), V(100, -100)).l(50)
			w.dJ({
				a: u,
				b: w.D(300, 400, 'o', 20),
				av: V(-100, -100),
				coll: 1, l: 50
			})
			p.tr().r(1)
			SoftPlat(300, 400)
			SoftPlat(500, 380)
			SoftPlat(700, 340)
			SoftPlat(900, 420)
			function SoftPlat(x, y) {
				x = N(x, 300);
				y = N(y, 60)
				w.dJ({
					a: w.S(x, y, 'z', 8, '-'),
					b: w.D(x, y, 'w', 100, 30).d(1).r(0).fR(),
					l: .1,
					f: 10
				}).d(.1)
			}
			
			w.tpl = function (x, r, fq, d) {
				var w = this, bouncer, j
				x = N(x, 290)
				r = N(r, 75)
				fq = N(fq, 6)
				d = N(d, 0)
				j = w.dJ(
						w.S(x, 1080, 'w', 20, 20),
						w.D(x, 1000, 'b', 200, 20)
								.fR().d(0).r(r).fr(0))
				j.l(115).fq(fq).d(d)
				w.S(x - 120, 1090, 'b', 40, 300).fr(0)
				w.S(x + 120, 1090, 'b', 40, 300).fr(0)
				return j
			}
			w.tpl(200, 0, 6)// not bouncy
			w.tpl(500, 1.2, 6)// too bouncy
			w.tpl(800, .75, 6)// mid bouncy, mid freq
			w.tpl(1100, .75, 2)//low freq
			w.tpl(1400, .75, 12)//high freq
			//_.ev(1,function () {p.I(0, -150)})
			//_.in(15, function(){w.addHundBalls()})
			//freq is SPEED of oscillation
			//damp is STRENGTH of oscillation
			// so bodies cant rotate if they dont have density???
		}
		REVJTVIN = VINE = VIN = function () {
			W(250).Y().P()
			w.trap(50)
			w.vine(200, 100, 15, 8)
			w.vine(210, 100, 25, 8)
			w.vine(220, 100, 25, 5)
			w.vine(260, 100, 3, 35).rJ(3, 20).rJ(3, 35)
			w.vine(300, 100, 30, 2)
			//blinds
			w.rJ(
					w.link1(600, 20, 3, '+').add(10),
					w.p(500, 200), '+')
			//ropey
			b = w.S(1100, 50, 'g', 60, 15).d(1)
			_.t(10, function (y) {
				w.rJ(
						b,
						b = w.D(1100, y * 20 + 80, 'w', 3, 15).d(1))
			})
			w.rJ(b,
					w.D(1100, 11 * 20 + 50, 'd', 20).d(1))
			p.cl('leaf', function (l) {
				w.jt = w.rJ(l.B(), p.XY(l.B()), R() ? '*' : null)
				$.space(function () {
					w.j(w.jt)
				})
			})
		}
	 
//body.GetTransform()
//body.GetFixtureList().GetShape()
		DJTSTRING = function () {
		}
		function bridge() {
			DJTBRIDGE = function () {

//two bodies at ends must be static
			}
		};
		bridge()
		function springs() {
			WSPG = function () {
				W([1400, 800], {g: 1000}).Y(500, 300);
				y.tr()
				w.S(400, 500, 'r', 4, 2000)
				w.dJ({
					a: w.D(200, 200, 'b', 50),
					b: w.D(300, 200, 'b', 60),
					l: 50, f: 3, d: .1,
					cl: 1
				})
				w.dJ({
					a: w.D(200, 200, 'd', 50, 50),
					b: w.D(300, 200, 'd', 60, 60),
					l: 50, f: 3, d: .1, cl: 1
				})
				w.dJ(w.D(200, 200, 'o', 50), w.D(300, 200, 'o', 40)).l(50).fq(3).d(.1)
				w.spg(w.S(200, 100, 'g', 10).sen(1), w.D(200, 250, 'b', 250, 10).K('rec')).fq(3).d(.1)
				oj = w.dJ(w.D(830, 700, 'o', 50).bS('me'), w.S(900, 0, 'o', 50, 50)).l(200).fq(5).d(.1)
				T.t(function () {
					if (oj.l() > 1) {
						oj.l(oj.l() - .002)
					}
				})
			}
			ACROBAT = SPG = function () {
				W()
				w.spg(
						w.S(500, 100, 'o', 10, '-'),
						w.D(500, 250, 'r', 250, 10).K('rec')
				).fq(3).d(1)
				w.spg(
						w.S(1200, 125, 'c', 10, '-'),
						w.D(1200, 275, 'r', 250, 10).K('rec')
				).fq(10).d(.5)
				w.dJ(
						w.D(600, 300, 'z', 30),
						w.S(900, 500, 'z', 50, 80, 0, 0, 20)
				).l(20).fq(5).d(.1)//.coll(false)
				w.dJ(
						w.D(130, 450, 'b', 30),
						w.S(130, 800)
				).l(120).fq(5).d(0)//.coll(true)
			}
			DJTMESH = function () {
			}
			SPRINGS = RAGDOLL = RAGD = RAG = function () {
				W({})
				w.spg(
						b1 = w.D(100, 100, 'b', 30),
						w.D(100, 200, 'r', 40))
				w.dJ(
						b2 = w.D(100, 400, 'g', 30, 30),
						w.D(100, 500, 'o', 40, 40)
				)
				p = w.me(500, 200)
				w.spg(b1, p)
				w.spg(b2, p)
			}
		};
		springs()
		/*
		 jd.freq=  function(a){
		 if(U(a)){return this.frequencyHz}
		 this.frequencyHz=a;return this
		 }
		 jd.len=function(len){
		 if(U(len)){return this.length*30}
		 this.length=len/30
		 return this}
		 jd.damp = function(a){if(U(a)){return this.dampingRatio}
		 this.dampingRatio=a;return this}
		
		 */
		function err() {
			SPOLL = function () {
				W({g: 0, w: 0});
				Q(function () {
					s = w.s
					e = w.S(200, 200, 'p', 100)
							.d(1).r(2)
							.bS({i: q.b('sun'), sc: .13})
							.K('earth');
					eI = e.ch()
					// p= w.player(200,200,2.5, 'thrust').d(.4).aD(8).lD(.8)
					p = w.D(200, 200).cn('thrust').Bm('me', 0, 0, 0.25 * sc)
					w.dJ({a: p, b: e, l: 50, f: 100.15, cl: 1})
					T.t(function () {
						var sp,
								dx = e.X() - p.X(),
								dy = e.Y() - p.Y(),
								sc = cjs.cap(300 /
								M.sqrt(dx * dx + dy * dy), .3, 2)
						s.X(300 - sc * (p.X() - 300))
						s.Y(150 - sc * (p.Y() - 150))
					})
				})
			}
		}
		
		/* overlap??
		 http://www.box2d.org/manual.html - also has other stuff
		 b2Transform xfA = …, xfB = …;
		
		 bool overlap = b2TestOverlap(shapeA, indexA, shapeB, indexB, xfA, xfB);
		 */
		function sports() {
			MARBLES = function () {
				W().Y()
				w.dJ(
						y.XY(200, 200),
						x = w.D(200, 220, 'r', 12))
				w.dJ(x, x = w.D(200, 250, 'r', 12))
				w.dJ(x, x = w.D(200, 280, 'b', 12))
				w.dJ(x, x = w.D(200, 320, 'g', 12))
				w.dJ(x, x = w.D(200, 360, 'u', 12))
				w.dJ(x, x = w.D(200, 420, 'g', 12))
				w.dJ(x, x = w.D(200, 500, 'u', 12))
			}
		}
	}
}
function distRopes() {
//link for distance ropes
	w.ropePiece = w.distLink = function (x, y) {
		var w = this
		return w.B(x, y, 'w', 3, 5).aD(10).rest(0)
	}
}