w.QA = w.Q = w.QAB = function (a, b) {
	this.QueryAABB(a, b);
	return this
}

w.Q = function () {
	$l('w.Q')
	var w = this, g = G(arguments), o, fx
	o = g.O ? g.f :
			g.S_ && N(g.s) ?
			{k: g.f, x: g.s, y: g.t, fn: g.fo} :
					g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
							g.F_ && O(g.s) ? {fn: g.f, x1: g.s.x, y1: g.s.y} :
									g.F_ ? {fn: g.f, x1: g.s, y1: g.t, x2: g.fo, y2: g.fi} :
											g.O_ ? {x1: g.f.x, y1: g.f.y, fn: g.s} :
											{x1: g.f, x2: g.s, fn: g.t}
	o.n = 0
	w.qA(qAFn, $AB(o.x1, o.y1, o.x2, o.y2))
	function qAFn(f) {
		o.n++
		$l('w.Q qAFn' + o.n)
		if (o.fn(f, f.B(), o.n) !== false) {
			return true
		}
	}
	
	return w
	//but it makes a rectangle not square ??
}//w.QUERY =
w.Q = function () {
	$l('w.Q')
	var w = this, g = G(arguments), o, fx
	o = g.O ? g.f :
			g.S_ && N(g.s) ?
			{k: g.f, x: g.s, y: g.t, fn: g.fo} :
					g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
							g.F_ && O(g.s) ? {fn: g.f, x1: g.s.x, y1: g.s.y} :
									g.F_ ? {fn: g.f, x1: g.s, y1: g.t, x2: g.fo, y2: g.fi} :
											g.O_ ? {x1: g.f.x, y1: g.f.y, fn: g.s} :
											{x1: g.f, x2: g.s, fn: g.t}
	o.n = 0
	w.qA(qAFn, $AB(o.x1, o.y1, o.x2, o.y2))
	function qAFn(f) {
		o.n++
		$l('w.Q qAFn' + o.n)
		if (o.fn(f, f.B(), o.n) !== false) {
			return true
		}
	}
	
	return w
	//but it makes a rectangle not square ??
}//w.QUERY =
w.qAB = w.Q = w.queryAABB = function (func, x1, y1, x2, y2) {
	var w = this,
			AB = b2d.AB(x1, y1, x2, y2),
			num = 0
	w.QueryAABB(function (f) {
		num++
		return func(f, f.B(), num)
	}, AB)
	return num
}
w.qA = function (fn, ab) {
	this.QueryAABB(fn, ab);
	return this
}
w.qA = function (fn, ab) {
	this.QueryAABB(fn, ab);
	return this
}
f.AB = function () {
	var ab = this.GetAABB()
	return {
		l: ab.lowerBound.m(),
		u: ab.upperBound.m()
	}
}
f.AB = function () {
	var ab = this.GetAABB()
	return {
		l: ab.lowerBound.m(),
		u: ab.upperBound.m()
	}
}
w.rad = function (x, y, r, fn) {
	return this.Q({
		x1: x - r,
		y1: y - r,
		x2: x + r,
		y2: y + r,
		fn: fn
	})
}

 function queryPoint(){
	 w.qPt = w.q = w.qP = w.queryPt = w.query = function () {
		 var w = this, g = G(arguments), o,
				 fx
		 o = g.S_ && N(g.s) ?
		 {k: g.f, x: g.s, y: g.t, fn: g.fo} :
				 g.S_ && O(g.s) ?
				 {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
						 g.N_ ? {x: g.f, y: g.s, fn: g.t, k: g.fo} :
								 g.A_ ?
								 {x: g.f[0], y: g.f[1], fn: g.s, k: g.t} :
								 {x: g.f.x, y: g.f.y, fn: g.s, k: g.t}
		 var fn = function (f) {
			 if (!f) {
				 alert('w.query !this(f)')
			 }
			 if (f.of(o.k) && f.tP(o.x, o.y)) {
				 fx = f;
				 return false
			 }
			 return true
		 }
		 w.qA(fn, $AB(o.x, o.y))
		 if (!fx) {
			 return false
		 }
		 if (F(o.fn)) {
			 _.b(o.fn, fx)(fx);
			 return w
		 }
		 return fx
	 }
	 w.ABpt = w.ptAB = w.bAt = w.bdAt = w.bdAtPt = w.atPt = function (x, y) {
		 var w = this, g = G(arguments), o
		 var selBd = null
		 w.QA(function (f) {
					 if (f.B().isDyn() && f.tPt(mX, mY)) {
						 selBd = f.B();
						 return false
					 }
					 return 1
				 },
				 $AB(x - .001, y - .001, x + .001, y + .001))
		 return selBd ? selBd : 0
	 }//w.getBodyAtPoint =
//this is HACK//
	 w.q = w.qPt = w.qP = w.queryPt = w.query = function () {
		 var w = this, g = G(arguments), o,
				 fx
		 o = g.S_ && N(g.s) ?
		 {k: g.f, x: g.s, y: g.t, fn: g.fo} :
				 g.S_ && O(g.s) ?
				 {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
						 g.N_ ? {x: g.f, y: g.s, fn: g.t, k: g.fo} :
								 g.A_ ?
								 {x: g.f[0], y: g.f[1], fn: g.s, k: g.t} :
								 {x: g.f.x, y: g.f.y, fn: g.s, k: g.t}
		 var fn = function (f) {
			 if (!f) {
				 alert('w.query !this(f)')
			 }
			 if (f.of(o.k) && f.tP(o.x, o.y)) {
				 fx = f;
				 return false
			 }
			 return true
		 }
		 w.qA(fn, $AB(o.x, o.y))
		 if (!fx) {
			 return false
		 }
		 if (F(o.fn)) {
			 _.b(o.fn, fx)(fx);
			 return w
		 }
		 return fx
	 }
//END HACK//
	 w.QP = w.QPt = function (fn, vec) {
		 this.QueryPoint(fn, vec);
		 return this
	 }
	 w.QS = w.QH = function () {
		 return this.QueryShape.apply(this, arguments)
	 }
	 w.qP = w.qPt = w.qPoint = function (fn, x, y) {
		 return this.QP(fn, V(x, y, '-'))
	 } //w.queryPoint =
	 w.queryPoint = function (func, x, y) {
		 this.QueryPoint(
				 function (f) {
					 _fixt = f
					 _body = _fixt.GetBody()
					 func(f)
				 },
				 V(x, y, '-')
		 )
		 return this
	 }
	 w.queryXY = function (func, x, y) {
		 var w = this  //does not divide
		 w.QueryAABB(func, b2d.AABB01(x, y))
		 return w
	 }
	 w.getBodyAtPoint = function (x, y) {
		 var body = null
		 this.QueryAABB(function queryFunc(fxt) {
					 if (!fxt.isStat() && fxt.test(
									 mX * 30,
									 mY * 30
							 )) {
						 body = fxt.body()
						 return false
					 }
					 return true
				 },
				 b2d.AABB01(x, y))
		 return body
	 }
	 w.bodyAt = w.bodyAtPoint = function (x, y, fn, k) {
		 var w = this, b //does not div
		 if (O(x)) {
			 k = fn;
			 fn = y;
			 y = x.y;
			 x = x.x
		 }
		 w.qXY(function (f) {
			 if (U(k) || f.of(k)) {
				 if (f.test(x, y)) {
					 b = f.B()
					 return false
				 }
			 }
			 return true
		 }, x, y)
		 if (!b) {
			 return false
		 }
		 if (F(fn)) {
			 return fn(b) || w
		 }
		 return b
	 }
	 w.qXY = function (x, y, fn) {
		 var w = this, v
		 //function on TOPMOST fixt FIRST
		 // then goes down, but only if function returns 'true'
		 //great way to work with fixts/bods at a certain x,y point
		 if (F(x)) {
			 v = V(y, fn);
			 fn = x
		 }
		 else if (O(x)) {
			 fn = y;
			 v = (V(x))
		 }
		 else(v = V(x, y))
		 w.QueryAABB(fn, b2d.AABB01(v))
		 return w
	 }
//query a point of specific kind,
// more options on fixts
	 w.XY = function (x, y, fn, k) {
		 var w = this, fixt = false // - -> bottom, + all ? :)
		 if (O(x)) {
			 k = fn;
			 fn = y;
			 y = x.y;
			 x = x.x
		 }
		 w.qXY(x, y, function (f) {
			 if (f.ofClass(k) && f.test(x, y)) {  //k null -> true // doesnt need to div, because qXY will div
				 fixt = f;
				 return false
			 }
			 return true
		 }) //stops at top most fixt
		 if (fixt && F(fn)) {
			 fn = _.bind(fn, fixt)
			 return fn(fixt) || w
		 } // or w? //makes sense actually
		 return fixt
	 }
//query bodies
	 w.bXY = function (x, y, fn, k) {
		 var w = this,
				 b = false
		 if (O(x)) {
			 k = fn;
			 fn = y;
			 y = x.y;
			 x = x.x
		 }
		 w.qXY(x, y, function (f) {
			 if (f.ofClass(k) && f.test(x, y)) {
				 b = f.B();
				 return false
			 } //cycles through all the fixts to find the first
			 return true
		 })
		 if (F(fn)) {
			 return _.bind(fn, b)(fn(b)) || w
		 }
		 return b
	 }//**
	 w.dynAt = w.at = w.bodyAtPoint = function (x, y) {
		 var body = null, func
		 func = function (f) {
			 if (f.isDyn() && f.testPoint(x, y)) {
				 body = f.B();
				 return false
			 }
			 return true
		 }
		 this.queryXY(func, x, y)
		 return body
	 }
	 w.QPt = function (fn, p) {
		 this.QueryPoint(fn, p)
		 return this
	 } //= w._qPoint
	 w.qPoint = function () {
		 var w = this, g = G(arguments), o
		 o = g.N_ ? {v: V(g.f, g.s), fn: g.t} : {v: g.f, fn: g.s}
		 return w.QPt(function (f) {
			 return o.fn(f, f.B(), f.B().W())
		 }, o.v.d())
	 }
	 w._qPoint = function (fn, p) {
		 this.QueryPoint(fn, p)
		 return this
	 }
	 w.qPoint = function () {
		 var g = G(arguments), o
		 o = g.N_ ?
		 {v: V(g.f, g.s), fn: g.t} :
		 {v: g.f, fn: g.s}
		 var fn = function (f) {
			 var b = f.B(), w = b.W()
			 return o.fn(f, b, w)
		 }
		 var point = o.v.div()
		 this._qPoint(fn, point)
		 return this
	 }
	 b.wP = b.wPt = function (x, y) {
		 var b = this
		 return b.GetWorldPoint(V(x, y).div()).mult()
	 }
	 b.wP = b.wPt = function (x, y) {
		 var b = this
		 return b.GetWorldPoint(V(x, y).div()).mult()
	 }
	 f.tP = f.hit = f.testPoint = f.test = function () {
		 var f = this, b = f.B(), w = b.W(), g = G(arguments), v
		 v = V(g.f, g.s)
		 if (g.p) {
			 w.dot(v)
		 }
		 return f.H().TestPoint(b.tf(), v.d())
		 //is a WORLD point within the fixture // very accurate
	 }
	 f.tP = f.hit = f.testPoint = f.test = function () {
		 var f = this, b = f.B(), w = b.W(), g = G(arguments), v
		 v = V(g.f, g.s)
		 if (g.p) {
			 w.dot(v)
		 }
		 return f.H().TestPoint(b.tf(), v.d())
		 //is a point within the fixture // very accurate
	 }}
	 
	 function ray(){
		 function rayy() {
			 b2d.p()
			 w.ray = function () {
				 var w = this, g = G(arguments), o, arr
				 o = g.S_ ? {k: g.f, x: g.s, y: g.t, x1: g[3], y1: g[4], fn: g[5]} : {
					 x: g.f,
					 y: g.s,
					 x1: g.t,
					 y1: g[3],
					 fn: g[4]
				 }
				 arr = [];
				 w.RayCast(function (f) {
					 if (f.of(o.k)) {
						 arr.push(f)
					 }
				 }, V(o.x, o.y, '-'), V(o.x1, o.y1, '-'))
				 if (!o.fn) {
					 return arr
				 }
				 if (g.p) {
					 o.fn(_.f(arr))
				 }
				 else if (g.n) {
					 o.fn(_.l(arr))
				 }
				 else {
					 _.e(arr, function (f) {
						 o.fn(f)
					 })
				 }
				 return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
			 }
			 w.rC1 = function () {
				 var w = this
				 w.RayCastOne
			 }
			 w.rCA = function () {
				 var w = this
				 w.RayCastAll
			 }
			 w.rC = function (fn, v1, v2) {
				 var w = this
				 return w.RayCast(fn, V(v1).div(), V(v2).div())
			 }
			 w._rC = function (v1, v2, fn) {
				 var w = this
				 return w.RayCast(fn, V(v1).div(), V(v2).div())
			 }
			 f.AB = function () {
				 var ab = this.GetAABB()
				 return {
					 l: ab.lowerBound.m(),
					 u: ab.upperBound.m()
				 }
			 }
			 f.rC = function () {
				 var inp, res
				 i = inp = new b2d.Collision.b2RayCastInput(V(0, 0, '-'), V(430, 450, '-'))
				 res = this.RayCast(inp)
				 return res
			 }
			 b2d.Seg = function (x, y, x1, y1) {
				 seg = new b2d.Collision.b2Segment(V(x, y), V(x1, y1))
				 return seg
			 }
			 b2d.rCIp = function (x, y, x1, y1, maxFrac) {
				 maxFrac = N(maxFrac, 1)
				 return new b2d.Collision.b2RayCastInput(V(x, y, '-'), V(x1, y1, '-'), maxFrac)
			 }
			 b2d.rCOp = function (nX, nY, maxFrac) {
				 maxFrac = N(maxFrac, 1)
				 op = new b2d.Collision.b2RayCastOutput(
						 maxFrac, V(nX, nY)
				 )
				 op.maxFraction = 1
				 return op
			 }
			 rayDocs = function () {
//RayCast(fn, startV, endV)  -> undefined
//Ray-cast the world for all fixtures in the path of the ray.
//Your callback Controls whether you get the closest point, any point, or n-points
//The ray-cast ignores shapes that contain the starting point
//fn -> function Callback(f, initInterNormV, normAtInterFracPtV, fracLenAlongRayInterN)
//Callback should return the new length of the ray as a fraction of the original length.
// By returning 0, you immediately terminate.
// By returning 1, you continue wiht the original ray.
// By returning the current fraction, you proceed to find the closest point.
//RayCastAll(v1, v2) -> v
//RayCastOne(v1, v2) -> f
// w.RayCast(b2RayCastOutput* output,  const b2RayCastInput& input)
//raycast input
//   The ray extends from p1 to p1 + maxFraction * (p2 - p1).
//    b2RayCastInput= {V1, V2, maxFraction}
// The points V1 and V2 are used to define a direction for the ray,
//  and the maxFraction specifies how far along the ray should be checked
// for an intersection.
// The following image may make this clearer
// . A maxFraction of 1 simply means the segment from p1 to p2, which in this case would not intersect the shape, but a maxFraction of 2 would. Raycasting And here is what a b2RayCastOutput contains:
// Ray-cast output data. The ray hits at p1 + fraction * (p2 - p1), where p1 and p2
// come from b2RayCastInput.
// b2RayCastOutput={normal,  fraction }
				 /*
				  If the ray does intersect the shape,
				  b2Fixture::RayCast will return true and we can look in the output
				  struct to find the actual fraction of the intersect point,
				  and the normal of the fixture 'surface' at that point: Raycasting
				
				  Now we need a ray to cast against these shapes. Let's make a ray starting from the center of the screen and going outward, and rotating slowly around. The only state we need to keep for this is the current angle, so instead of making a special class for it, we'll just keep a variable at global scope.
				  */
			 }
			 function rayApps() {
				 IMP = function () {
					 W({g: 0, w: 0}).Y()
					 // y.rt(90).XY(200,240)
					 w.D(200, 235, 'b', 10).lV(20, 0).d(10)
					 w.D(900, 200, 'r', 100, 100).rt(45)
					 r = w.D(1100, 500, 'r', [[80], [20, 300]]).d(.1)
					 r.$(function () {
						 this.B().I(100, -2000)
					 })
					 f = r.f()
					 w.i.dot(856, 240)
					 /*
					  s = b2d.Seg(0,0,1200, 600)
					  s1 = b2d.Seg(1200,0, 0, 600)
					  lArr =  'the shape world transform'
					  nl = '2Vec2 — returns the hit fraction.'
					  // You can use this to compute the contact point
					  // p = (1 - lambda) segment.p1 + lambda segment.p2.
					  sg = ''//segment:b2Segment — returns the normal at the contact point. If there is no intersection, the normal is not set.
					  maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
					  s.TestSegment(lArr, nl, s1, maxLam )
					  */
					 ip = b2d.rCIp(0, 0, 1200, 600)
					 op = b2d.rCOp(1, 2)
					 res = f.rC(op, ip)
				 }
				 RAY = function () {
					 W().C('z')
					 w.S(200, 200, 'f', 100);
					 w.S(500, 500, 'l', 160, 60)
					 rs = w.ray(0, 0, 800, 800)
					 _.in(function () {
						 w.ray(0, 0, 500, 500, function (f) {
							 f.C('g')
						 })
						 w.ray(0, 0, 500, 500, function (f) {
							 f.B().bS('me')
						 }, '-')
						 w.ray(0, 0, 500, 500, function (f) {
							 f.B().bS('sun')
						 }, '+')
					 })
				 }
				 RC = function () {
					 W();
					 var p1, p2, d, l
					 w.me(400, 100);
					 w.S(200, 200, 'r', 400, 20)
					 w.$(function (v) {
						 if (!p1) {
							 p1 = v;
							 return
						 }
						 if (!p2) {
							 p2 = v
						 } else {
							 p1 = p2;
							 p2 = v
						 }
						 w.i.e(function (c) {
							 if (c.of('dot') || c.of('line')) {
								 c.rm()
							 }
							 // if( c.K() == 'dot' || c.K()=='line' ){c.rm()}
						 })
						 w.d('b', p1);
						 w.d('r', p2);
						 w.l(p1.x, p1.y, p2.x, p2.y).K('line')
						 w.rC(function (f) {
							 f.B().dot()
						 }, p1, p2)
					 })
				 }
			 }
		 }
		
		 function rayCst() {
			 w.rC = w.rayCast = function (func, v1, v2) {
				 return this.RayCast(func, V(v1, '-'), V(v2, '-'))
			 }
			 w.RC = function () {
				 this.RayCast.apply(this, arguments);
				 return this
			 }
			 w.RCA = function () {
				 this.RayCastAll.apply(this, arguments);
				 return this
			 }
			 w.RC1 = w.RCO = function () {
				 this.RayCastOne.apply(this, arguments);
				 return this
			 }
			 function segment() {
				 b2d.Seg = function (x, y, x1, y1) {
					 seg = new b2d.Collision.b2Segment(V(x, y), V(x1, y1))
					 return seg
				 }
				 b2d.Segment = b2d.C.b2Segment
				 b2d.Segment = b2d.Collision.b2Segment
			 }
			
			 segment()
			 b2d.rCIp = function (x, y, x1, y1, maxFrac) {
				 maxFrac = N(maxFrac, 1)
				 return new b2d.Collision.b2RayCastInput(V(x, y, '-'), V(x1, y1, '-'), maxFrac)
			 }
			 b2d.rCOp = function (nX, nY, maxFrac) {
				 maxFrac = N(maxFrac, 1)
				 op = new b2d.Collision.b2RayCastOutput(
						 maxFrac, V(nX, nY)
				 )
				 op.maxFraction = 1
				 return op
			 }
			 w.rayCast = function (func, v1, v2) {
				 return this.RayCast(func, V(v1, '-'), V(v2, '-'))
			 }
			 rayLine = function (x1, y1, x2, y2) {
				 alert('rayLine')
				 x1 = N(x1) ? x1 : 0
				 y1 = N(y1) ? y1 : 0
				 x2 = N(x2) ? x2 : 100
				 y2 = N(y2) ? y2 : 100
				 if (line) {
					 line.remove();
					 line = null
				 }
				 line = cjs.shape()
				 line.graphics.s('white').mt(x1, y1).lt(x2, y2)
				 w.s.A(line)
			 }
			 removeDots = function () {
				 alert('removeDots')
				 getDots = function () {
					 var arr = []
					 _.each(w.s.children, function (c) {
						 if (c.N() == 'dot') {
							 arr.push(c)
						 }
					 })
					 return arr
				 }
				 dots = getDots()
				 _.each(dots, function (dot) {
					 dot.remove()
				 })
			 }
			 b2d.Segment = b2d.C.b2Segment
			 $Sg = b2d.Seg = function (x, y, x1, y1) {
				 return new b2d.Segment(V(x, y), V(x1, y1))
			 }
			 b2d.rCIp = function (x, y, x1, y1, maxFrac) {
				 maxFrac = N(maxFrac, 1)
				 return new b2d.RCI(V(x, y, '-'), V(x1, y1, '-'), maxFrac)
			 }
			 b2d.rCOp = function (nX, nY, maxFrac) {
				 maxFrac = N(maxFrac, 1)
				 op = new b2d.RCO(maxFrac, V(nX, nY))
				 op.maxFraction = 1
				 return op
			 }
			 w.RC = function (fn, p1, p2) {
				 var w = this
				 w.RayCast(fn, p1, p2)
				 return w
			 }
			 w._rC = function (fn, v1, v2) {
				 var w = this
				 return w.RC(fn, V(v1).d(), V(v2).d())
			 }
			 w.rC = function () {
				 var g = G(arguments), o
				 if (N(g.t)) {
					 $l('Ng.t')
					 o = {v1: V(g.f, g.s), v2: V(g.t, g.fo), fn: g.fi}
				 }
				 else {
					 o = {v1: g.f, v2: g.s, fn: g.t}
				 }
				 return this._rC(o.fn, o.v1, o.v2)
			 }
			 w.ray = function () {
				 $l('ray')
				 var w = this, g = G(arguments), o
				 o = g.S_ ?
				 {k: g.f, x: g.s, y: g.t, x1: g.fo, y1: g.fi, fn: g.si} :
				 {x: g.f, y: g.s, x1: g.t, y1: g.fo, fn: g.fi}
				 var arr = [];
				 w.rC(o.x, o.y, o.x1, o.y1, function (f) {
					 if (f.of(o.k)) {
						 arr.push(f)
					 }
				 })
				 if (!o.fn) {
					 return arr
				 }
				 g.p ? o.fn(_.f(arr)) : g.n ? o.fn(_.l(arr)) : _.e(arr, o.fn)
				 return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
			 }
// RayCast(rayCastOutput,rayCastInput, tf)
// Cast a ray against this shape
// .// output — the ray-cast results.
// input:b2RayCastInput — the ray-cast input parameters.
// transform:b2Transform — the transform to be applied to the shape.
			 w.RCO = w.rC1 = function () {
				 var w = this
				 w.RayCastOne
			 }
			 w.RCA = w.rCA = function () {
				 var w = this
				 w.RayCastAll
			 }
			 f.rC = function () {
				 var inp = new b2d.RCI(V(), V(430, 450).d())
				 return this.RC(inp)
			 }
			 b2d.RCI = b2d.RayCastInput = b2d.C.b2RayCastInput
			 b2d.RCO = b2d.RayCastOutput = b2d.C.b2RayCastOutput
		 }

//function ray() {
		 w.ray = function () {
			 var w = this, g = G(arguments), o, arr
			 o = g.S_ ? {k: g.f, x: g.s, y: g.t, x1: g[3], y1: g[4], fn: g[5]} : {
				 x: g.f,
				 y: g.s,
				 x1: g.t,
				 y1: g[3],
				 fn: g[4]
			 }
			 arr = [];
			 w.RayCast(function (f) {
				 if (f.of(o.k)) {
					 arr.push(f)
				 }
			 }, V(o.x, o.y, '-'), V(o.x1, o.y1, '-'))
			 if (!o.fn) {
				 return arr
			 }
			 if (g.p) {
				 o.fn(_.f(arr))
			 }
			 else if (g.n) {
				 o.fn(_.l(arr))
			 }
			 else {
				 _.e(arr, function (f) {
					 o.fn(f)
				 })
			 }
			 return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
		 }
		 w.rC1 = function () {
			 var w = this
			 w.RayCastOne
		 }
		 w.rCA = function () {
			 var w = this
			 w.RayCastAll
		 }
		 w.rC = function (fn, v1, v2) {
			 var w = this
			 return w.RayCast(fn, V(v1).div(), V(v2).div())
		 }
		 w._rC = function (v1, v2, fn) {
			 var w = this
			 return w.RayCast(fn, V(v1).div(), V(v2).div())
		 }
		 RAYCAST = RAC = function () {
			 b2d.miniWorld()
			 firstPoint = secondPoint = line = null
			 w.brick(200, 200, 40, 20)
			 w.st.on('stagemousedown', function (ev) {
				 $l('stage mouse down')
				 e = ev;
				 x = e.rawX;
				 y = e.rawY
				 if (firstPoint == null) {
					 firstPoint = {x: x, y: y}
				 }
				 else {
					 if (secondPoint == null) {
						 secondPoint = {x: x, y: y}
					 }
					 else {
						 firstPoint = secondPoint;
						 secondPoint = {x: x, y: y}
					 }
					 removeDots()
					 w.s.dot('blue', firstPoint.x, firstPoint.y)
					 w.s.dot('red', secondPoint.x, secondPoint.y)
					 rayLine(firstPoint.x, firstPoint.y, secondPoint.x, secondPoint.y)
					 n = 0
					 w.rayCast(function (fixt) {
								 n = n + 1;
								 f = fixt;
								 b = fixt.GetBody()
								 w.s.dot(b.X(), b.Y())
							 },
							 firstPoint, secondPoint)
					 data(n + ' guys')
				 }
			 })
		 }
		 rayDocs = function () {
//RayCast(fn, startV, endV)  -> undefined
//Ray-cast the world for all fixtures in the path of the ray.
//Your callback Controls whether you get the closest point, any point, or n-points
//The ray-cast ignores shapes that contain the starting point
//fn -> function Callback(f, initInterNormV, normAtInterFracPtV, fracLenAlongRayInterN)
//Callback should return the new length of the ray as a fraction of the original length.
// By returning 0, you immediately terminate.
// By returning 1, you continue wiht the original ray.
// By returning the current fraction, you proceed to find the closest point.
//RayCastAll(v1, v2) -> v
//RayCastOne(v1, v2) -> f
// w.RayCast(b2RayCastOutput* output,  const b2RayCastInput& input)
//raycast input
//   The ray extends from p1 to p1 + maxFraction * (p2 - p1).
//    b2RayCastInput= {V1, V2, maxFraction}
// The points V1 and V2 are used to define a direction for the ray,
//  and the maxFraction specifies how far along the ray should be checked
// for an intersection.
// The following image may make this clearer
// . A maxFraction of 1 simply means the segment from p1 to p2, which in this case would not intersect the shape, but a maxFraction of 2 would. Raycasting And here is what a b2RayCastOutput contains:
// Ray-cast output data. The ray hits at p1 + fraction * (p2 - p1), where p1 and p2
// come from b2RayCastInput.
// b2RayCastOutput={normal,  fraction }
			 /*
			  If the ray does intersect the shape,
			  b2Fixture::RayCast will return true and we can look in the output
			  struct to find the actual fraction of the intersect point,
			  and the normal of the fixture 'surface' at that point: Raycasting
			
			  Now we need a ray to cast against these shapes. Let's make a ray starting from the center of the screen and going outward, and rotating slowly around. The only state we need to keep for this is the current angle, so instead of making a special class for it, we'll just keep a variable at global scope.
			  */
		 }
		 IMP = function () {
			 W({g: 0, w: 0}).Y()
			 // y.rt(90).XY(200,240)
			 w.D(200, 235, 'b', 10).lV(20, 0).d(10)
			 w.D(900, 200, 'r', 100, 100).rt(45)
			 r = w.D(1100, 500, 'r', [[80], [20, 300]]).d(.1)
			 r.$(function () {
				 this.B().I(100, -2000)
			 })
			 f = r.f()
			 w.i.dot(856, 240)
			 /*
			  s = b2d.Seg(0,0,1200, 600)
			  s1 = b2d.Seg(1200,0, 0, 600)
			  lArr =  'the shape world transform'
			  nl = '2Vec2 — returns the hit fraction.'
			  // You can use this to compute the contact point
			  // p = (1 - lambda) segment.p1 + lambda segment.p2.
			  sg = ''//segment:b2Segment — returns the normal at the contact point. If there is no intersection, the normal is not set.
			  maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
			  s.TestSegment(lArr, nl, s1, maxLam )
			  */
			 ip = b2d.rCIp(0, 0, 1200, 600)
//	op = b2d.rCOp(1, 2)
//	res = f.rC(op, ip)
		 }
		 RAY = function () {
			 W().C('z')
			 w.S(200, 200, 'f', 100);
			 w.S(500, 500, 'l', 160, 60)
			 rs = w.ray(0, 0, 800, 800)
			 _.in(function () {
				 w.ray(0, 0, 500, 500, function (f) {
					 f.C('g')
				 })
				 w.ray(0, 0, 500, 500, function (f) {
					 f.B().bS('me')
				 }, '-')
				 w.ray(0, 0, 500, 500, function (f) {
					 f.B().bS('sun')
				 }, '+')
			 })
		 }
		 RC = function () {
			 W();
			 var p1, p2, d, l
			 w.me(400, 100);
			 w.S(200, 200, 'r', 400, 20)
			 w.$(function (v) {
				 if (!p1) {
					 p1 = v;
					 return
				 }
				 if (!p2) {
					 p2 = v
				 } else {
					 p1 = p2;
					 p2 = v
				 }
				 w.i.e(function (c) {
					 if (c.of('dot') || c.of('line')) {
						 c.rm()
					 }
					 // if( c.K() == 'dot' || c.K()=='line' ){c.rm()}
				 })
				 w.d('b', p1);
				 w.d('r', p2);
				 w.l(p1.x, p1.y, p2.x, p2.y).K('line')
				 w.rC(function (f) {
					 f.B().dot()
				 }, p1, p2)
			 })
		 }
		 RAY = function () {
			 W().C('z')
			 w.S(200, 200, 'f', 100);
			 w.S(500, 500, 'l', 160, 60)
			 rs = w.ray(0, 0, 800, 800)
			 _.in(function () {
				 w.ray(0, 0, 500, 500, function (f) {
					 f.C('g')
				 })
				 w.ray(0, 0, 500, 500, function (f) {
					 f.B().bS('me')
				 }, '-')
				 w.ray(0, 0, 500, 500, function (f) {
					 f.B().bS('sun')
				 }, '+')
			 })
		 }
		 RC = function () {
			 W();
			 var p1, p2, d, l
			 w.me(400, 100);
			 w.S(200, 200, 'r', 400, 20)
			 w.$(function (v) {
				 if (!p1) {
					 p1 = v;
					 return
				 }
				 if (!p2) {
					 p2 = v
				 } else {
					 p1 = p2;
					 p2 = v
				 }
				 w.i.e(function (c) {
					 if (c.of('dot') || c.of('line')) {
						 c.rm()
					 }
					 // if( c.K() == 'dot' || c.K()=='line' ){c.rm()}
				 })
				 w.d('b', p1);
				 w.d('r', p2);
				 w.l(p1.x, p1.y, p2.x, p2.y).K('line')
				 w.ray(p1, p2, function (f) {
					 $l('ray hit')
					 _f = f
					 f.C('w')
				 })
			 })
		 }
		 rayDocs = function () {
//RayCast(fn, startV, endV)  -> undefined
//Ray-cast the world for all fixtures in the path of the ray.
//Your callback Controls whether you get the closest point, any point, or n-points
//The ray-cast ignores shapes that contain the starting point
//fn -> function Callback(f, initInterNormV, normAtInterFracPtV, fracLenAlongRayInterN)
//Callback should return the new length of the ray as a fraction of the original length.
// By returning 0, you immediately terminate.
// By returning 1, you continue wiht the original ray.
// By returning the current fraction, you proceed to find the closest point.
//RayCastAll(v1, v2) -> v
//RayCastOne(v1, v2) -> f
// w.RayCast(b2RayCastOutput* output,  const b2RayCastInput& input)
//raycast input
//   The ray extends from p1 to p1 + maxFraction * (p2 - p1).
//    b2RayCastInput= {V1, V2, maxFraction}
// The points V1 and V2 are used to define a direction for the ray,
//  and the maxFraction specifies how far along the ray should be checked
// for an intersection.
// The following image may make this clearer
// . A maxFraction of 1 simply means the segment from p1 to p2, which in this case would not intersect the shape, but a maxFraction of 2 would. Raycasting And here is what a b2RayCastOutput contains:
// Ray-cast output data. The ray hits at p1 + fraction * (p2 - p1), where p1 and p2
// come from b2RayCastInput.
// b2RayCastOutput={normal,  fraction }
			 /*
			  If the ray does intersect the shape,
			  b2Fixture::RayCast will return true and we can look in the output
			  struct to find the actual fraction of the intersect point,
			  and the normal of the fixture 'surface' at that point: Raycasting
			
			  Now we need a ray to cast against these shapes. Let's make a ray starting from the center of the screen and going outward, and rotating slowly around. The only state we need to keep for this is the current angle, so instead of making a special class for it, we'll just keep a variable at global scope.
			  */
		 }
		 f.rC = function () {
			 var inp, res
			 i = inp = new b2d.Collision.b2RayCastInput(V(0, 0, '-'), V(430, 450, '-'))
			 res = this.RayCast(inp)
			 return res
		 }
	 }
	 function shapes(){
 
	f.test = f.hit = function (pt, y) {//=f.testPoint= f.tP
		var f = this, b = f.body(), w = b.wor(),
				g = G(arguments), v = V(g[0], g[1]),
				res = f.H().testPoint(b.transform(), v.div())
		if (g.p) {
			b.wor().dot(v)
		}
		return res
	}//is a point within the fixture // very accurate}}
	
		 	 bH.tP = bH.tPt = function (tf, v, y) {
			 var bH = this
			 //bH.test = h.point =
			 function alt() {
				 bH.testPoint = h.tP = function (tf, vec) {
					 return this.TestPoint(tf, vec)
				 }
				 bH.TP = function (x, y) {
					 return this.TestPoint(x, y)
				 }
				 bH.tPt = bH.tP = function (x, y) {
					 var bH = this
					 alert('bH.tPt tP')
					 return bH.TP(x / 30, y / 30)
				 }
			 }
			
			 return this.TestPoint(tf, V(v, y).div())
		 }
		 bH.C = function () {
			 return this.Copy()
		 }
		 bH.seg = h.segment = function (xf, lamb, norm, seg, maxLamb) {//Perform a ray cast against this shape.
			 return this.TestSegment(xf,
					 lamb,//:Array, returns the hit fraction.
					 // You can use this to compute the contact point p = (1 - lambda) segment.p1
					 // + lambda segment.p2.
					 norm,//:b2Vec2, returns the normal at the contact point.
					 // If there is no intersection, the normal is not set.
					 seg,//:b2Segment, defines the begin and end point of the ray cast
					 maxLamb//:Numbera number typically in the range [0,1]
			 )
		 }
		 bH.RC = function (fn, p1, p2) {
			 return this.RayCast(fn, p1, p2)
		 }
		 bH.CAB = function (v1, v2) {
			 var bH = this;
			 return bH.ComputeAABB()
		 }
		 bH.CM = function (mass) {
			 var bH = this;
			 return bH.ComputeMass()
		 }
		 bH.CSA = function () {
			 var bH = this
			 var area = bH.ComputeSubmergedArea()
			 return area
		 }
	
	 }