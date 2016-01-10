b2d.iGP = gpc.iPol = function (a) {
	// = b2d.iG  = b2d.isGPoly
	return O(a) && F(a.isHole)
}
//gpc.hV = gpc.hPt = gpc.hasVertex = function (gP) {return gP.m_List.get(0)  }//used in MEET
$gP$ = function () {
	// = M.p = b2d.gpcPD 
	//it expects worldVerts....
//it works with worldVerts...
//it was designed   with
//that in
//mind
	var g = G(arguments), p, b, fs, pts
	if (b2d.iGP(g.f)) {
		return g.f
	}
	if (b2d.iB(g.f)) {
		pts = g.f.wV()
		_.eR(g.f.fs(), function (v) {
			pts = pts.uni(v)
		})
	}
	else {
		pts = b2d.iF(g.f) ? g.f.wV() :
				g.f
	}
	return $pD(pts)
}
$L('polys', 'points', 'extensions')
w.$$fall = function () {
	var w = this
	w.$$(function () {
		w.fall()
	})
	return w
}
w.fall = function () {
	return this.e(function (b) {
		b.dyn()
	})
}
b2d.polyDot = function (verts) {// see f.dots
	var t = 0
	_.each(
			A(verts) ? verts : verts.verts(), //combine with b2d.verts
			function (v) {
				setTimeout(function () {
					w.dot(V(v))
				}, t)
				t += 100
			}
	)
}
b2d.tF = function (f) {
	return b2d.iB(f) ? f.f() : f
}
b2d.recV = function (x, y, w, h) {
	var hW = w / 2, hH = h / 2
	return [[x - hW, y - hH], [x + hW, y - hH], [x + hW, y + hH], [x - hW, y + hH]]
}
b2d.fixt = function (shape) {
	var g = G(arguments), shape = g[0], len = g.length, fixt = new b2d.Dynamics.b2FixtureDef()
	// simply makes one fixt,
	// tries to set its shape
	// and returns it
	//you can pass in a pre-made shape
	if (b2d.isShape(shape)) {
		fixt.shape = shape
	}
	
	//or..
	// if you pass it an array, it makes a polyH from it
	// from verts/arr (confirmed)
	else if (A(shape)) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	
	// or if you passed in anything (number(s))
	// it makes a circle or poly shape, depending on how many numbers you passed
	else if (len == 1 || len == 3) {
		fixt.shape = b2d.circH.apply(b2d, g)
	}
	else if (len == 2 || len > 3) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	return fixt
}
b2d.fixtC = function (shape) {
	var g = G(arguments), shape = g[0], len = g.length, fixt = new b2d.Dynamics.b2FixtureDef()
	if (b2d.isShape(shape)) {
		fixt.shape = shape
	}
	else if (A(shape)) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	else if (len == 1 || len == 3) {
		fixt.shape = b2d.circH.apply(b2d, g)
	}
	else if (len == 2 || len > 3) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	return fixt
}
b2d.overlapping = b2d.ol = function (b1, b2) {
	var v1 = M.p(b1),//wont work yet
			v2 = M.p(b2)
	var p = v1.union(v2)
	return !(_.isEqual(p.vs(), v1.vs()) ||
	_.isEqual(p.vs(), v2.vs()))
	function alt() {
		b2d.overlapping = function (b1, b2) {
			var v1 = b1.polyVerts(),
					v2 = b2.polyVerts()
			var p = v1.union(v2)
			return !(_.isEqual(p.verts(), v1.verts()) ||
			_.isEqual(p.verts(), v2.verts()))
		}
	}
}
 
b.pos = function () {//used in MEET
	return this.tf().position.m()
}
b2d.hV = b2d.hasVerts = function (poly) {
	return poly.m_List.get(0)
}
b2d.ol = b2d.overlapping = function (b1, b2) {
	var v1 = M.p(b1),//wont work yet
			v2 = M.p(b2)
	var p = v1.union(v2)
	return !(_.isEqual(p.vs(), v1.vs()) || _.isEqual(p.vs(), v2.vs()))
}
  
function points() {
 
}
function extensions() {
	pS.reg = function (b) {
		//= pS.toRelativePoints = pS.mapToBoxWorld
		var p = this, g = G(arguments),
				vs = p.vs(), b, o
		//you can pass in the verts,
		// or the gPoly itself!                 //what about a f?
		o = V(g.f, g.s)
		return M.p(vs = _.m(vs, function (v) {
			return V(v).sub(o.x, o.y)
		}))
	}
	pD.reg = pD.rel = function (b) {
		var p = this, g = G(arguments),
				vs = p.vs(), b, o
		//you can pass in the verts,
		// or the gPoly itself!
		//what about a f?
		o = V(g[0], g[1])
		vs = _.m(vs, function (v) {
			return V(v).sub(o.x, o.y)
		})
		return M.p(vs)
	}
	pS.reg = function (b) {
		var p = this, g = G(arguments), vs = p.vs(), b, o
		//you can pass in the verts,
		// or the gPoly itself!                 //what about a f?
		o = V(g[0], g[1])
		vs = _.m(vs, function (v) {
			return V(v).sub(o.x, o.y)
		})
		return M.p(vs)
	}
} 
b2d.iGP = function (a) {
//=b2d.isGPoly 
	return O(a) && F(a.isHole)
}