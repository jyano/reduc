window.$pt = window.$pt || {}
gpc = gpcas
// other lib:  http://jsclipper.sourceforge.net/6.1.3.2/main_demo.html
gpc.g = gpc.geometry
PolyDefault = gpc.g.PolyDefault;
ArrayList = gpc.util.ArrayList;
PolySimple = gpc.g.PolySimple;
Clip = gpc.g.Clip;
OperationType = gpc.g.OperationType;
LmtTable = gpc.g.LmtTable;
ScanBeamTreeEntries = gpc.g.ScanBeamTreeEntries;
EdgeTable = gpc.g.EdgeTable;
EdgeNode = gpc.g.EdgeNode;
ScanBeamTree = gpc.g.ScanBeamTree;
Rectangle = gpc.g.Rectangle;
BundleState = gpc.g.BundleState;
LmtNode = gpc.g.LmtNode;
TopPolygonNode = gpc.g.TopPolygonNode;
AetTree = gpc.g.AetTree;
HState = gpc.g.HState;
VertexType = gpc.g.VertexType;
VertexNode = gpc.g.VertexNode;
PolygonNode = gpc.g.PolygonNode;
ItNodeTable = gpc.g.ItNodeTable;
StNode = gpc.g.StNode;
ItNode = gpc.g.ItNode;
gpc.PS = gpc.g.PolySimple
gpc.PD = gpc.g.PolyDefault
pS = ps = $pt.pS = gpc.PS.prototype
pD = $pt.pD = gpc.PD.prototype
$L('type', 'bool', 'polys', 'points','opers','hole','clipCan')
$gP = function (pts) { 
	// = M.poly
	var pD = new gpc.PD()
	pD.aPts(pts)
	return pD
}
function type() {
	pS.ty = function () {
		// = pS.type
		return ('pS')
	}
	pD.ty = function () {
		//= pD.type
		return ('pD')
	}
	gpc.iPg = gpc.isPol = function (a) {
		return O(a) && F(a.isHole)
	}
	gpc.iPD = gpc.iDP = gpc.iD = function (pol) {
		return gpc.isPol(pol) && pol.ty == 'pD'
	}
	gpc.iPS = gpc.iSP = gpc.iS = function (pol) {
		return gpc.isPol(pol) && pol.ty == 'pS'
	}
	 
}

function bool() {
 	pD.hasAtLeastOnePoly = function () {
		return this.m_List.get(0)
	}
	pD.isPolyless = pD.hasNoPolys = function () {
		return !this.hasAtLeastOnePoly()
	}
}
function polys(){
//get number of pols
	pD.nIP = pS.nIP = pD.numPol = function () {
// =pS.numPol = pD.nPol = pS.nPol = ps.numInnerPolygons = ps.numPolys = ps.nP = pD.numPolys = pD.nP
		return this.getNumInnerPoly()
	}
//get inner pol
	pD.g=pS.gIP = function (n) {
		// = pS.getPoly = pS.g = pD.iPol = pD.pg = pD.iPg = pD.inP = pD.getPoly = pD.gIP = pD.g
		return this.getInnerPoly(n || 0)
		function docs() {
			//GETS ITSELF? //useless?
		}
	}
// iterate over ALL inner pols
	pD.eIPol = pD.polies = pD.ePol = pS.ePol = pD.each = pD.e = pD.eP = function (fn) {
		var pD = this
		var polys = []
		_.t(pD.nIP(), function (pol) {
			polys.push(pD.g(pol))
		})
		if (F(fn)) {
			_.e(polys, fn);
			return pD
		} //_.t(pD.nIP(), function (i) {fn(pD.g(i), pD, i)}) //_.t(pD.nIP(), function (n) {fn(pD.iPol(n), n, nIP)})
		return polys
	}
// get num of points of a pol
	pD.nPts = pS.nPts = pS.n = pD.n = function () {
		return this.getNumPoints()
	}
//get a point from an index poly
	pS.pt = pD.pt = function (i) {
		var pol = this
		return [pol.X(i), pol.Y(i)]
	}
//add a point to a poly
	pS.aPt = pD.aPt = pD.A = pD.addPoints = function (pts) {
		// = pS.A = pD.A
		var pol = this
		pts = A(pts) ? pts : [pts]
		_.e(pts, function (pt) {
			pol.addPoint(V(pt))
		})
		return pol
	}
}
function points(){

//get or iterate all the pts of 1/more? pol
	pD.pts = function (fn) {
		var pD = this, g = G(arguments), o
		//= pD.vs
		o = g.F ? {fn: g.f} : {n: g.f, fn: g.s}
		var pts = g.n ? b2d.sub(pD.pts(), o.n) :
				g.p ? b2d.add(pD.pts(), o.n) :
						pD.pts()
		if (o.fn) {
			_.e(pts, o.fn);
			return pD
		}
		return pts
		function docs() {
			
			//used in MEET
			//= pD.vs = pD.points =	
			function alt() {
				pD.pts = pD.vs = function (fn) {
					var p = this, g = G(arguments), o
					var pts = []
					_.t(p.n(), function (i) {
						pts.push([p.getX(i), p.getY(i)])
					})
					if (g.n) {
						pts = _.m(pts, function (v) {
							return V(v).sub(g[0])
						})
					}
					if (g.p) {
						pts = _.m(pts, function (v) {
							return V(v).add(g[0])
						})
					}
					if (F(fn)) {
						_.e(pts, function (v) {
							fn(v)
						})
						return p
					}
					return pts
				}
			}
		}
	}
	
	pS.pts = pD.pts = function (fn) {
		var pS = this, pts = []
		_.t(pS.nPts(), function (index) {
			var pt = pS.pt(index)
			pts.push(pt)
			//alt:_.t(pS.num(), function (i) {var pt = [pS.getX(i), pS.getY(i)]pts.push(pt)})
		})
		if (F(fn)) {
			_.e(pts, function (v, i) {
				fn(v, i, pts)
			});
			return pS
		}
		return pts
		function docs() {
			//= pS.vs = pS.ptsArr = ps.ptsArray = ps.verts = ps.pts
//= pS.ePt = pS.vsArr = pS.vs = pS.pts = pS.vs
// =  pD.ePt = pD.vsArr
		}
	}
//get x val of an index pt
	pS.X = pD.X = function (i) {
		// = pS.x = pD.x = pS.gX = pD.gX 
		return this.getX(i)
	}
//get y val of an index pt
	pS.Y = pD.Y = function (i) {

//=pS.y = pD.y = pS.gY = pD.gY
		return this.getY(i)
	}
}
function opers(){
	pD.U = function (p) {
		var pD = this, g = G(arguments)
		g.e(function (pol) {
			pD = pD.union(gpc.p(pol))
		})
		return pD
	}
	pD.D = function () {
		var pD = this,
				g = G(arguments)
		g.e(function (pol) {
			pD = pD.difference(gpc.p(pol))
		})
		return pD
	}
	pD.I = pD.intersection
	pD.X = pD.xor
//
	$uni = UNI = function () {
		//= b2d.u
		var g = G(arguments), p
		if (g.A) {
			return g.ap(UNI)
			//return $a(UNI,g.f)
		}
		p = M.p(g.f)
		g.eR(function (pol) {
			p = p.U(M.p(pol))
		})
		return p
	}
	pD.plus = function (x, y) {
		return M.p(_.m(this.pts(), function (v) {
					return V(v).add(x || 0, y || 0)
				}
		))
	}
	pD.U = function () {
		var pD = this, g = G(arguments), uP
		if (b2d.iB(g.f)) {
			uP = pD.U(g[0].f())
			_.eR(g.f.fs(), function (f) {
				uP = pD.U(f)
			})
			return uP
		}
		return pD.union(M.p(g[0]))
		function alt() {
			pD.U = function () {
				var pD = this, g = G(arguments),
						uP
				if (b2d.iB(g[0])) {
					uP = pD.U(g[0].f())
					_.eR(g[0].fs(), function (f) {
						uP = pD.U(f)
					})
					return uP
				}
				return pD.union(M.p(g[0]))
			}
		}
	}
//
	pD.minus = function (x, y) {
		var p = this,
				pts = p.pts()
		pts = _.m(pts, function (v) {
			v = V(v)
			return v.sub(x || 0, y || 0)
		})
		return M.p(pts)
	}
	pD.D = function () {
		var pD = this
		G(arguments).e(function (pol) {
			pD = pD._D(pol)
		})
		return pD
	}
	$pD = gpc.pD = gpc.p = function (pts) {
		
		//make new polyDefault
		//can add points to it
		if (gpc.isPol(pts)) {
			return pts
		}
		//if (S(pts)){ pts = $vs[pts] }
		//ok so if it is already a gPoly, just return it..
		//but if not (it is points).. so make a new gPoly (default) and return it
		var pD = new gpc.PD
		return pts ? pD.A(pts) : pD
	}
}

function hole() {
	 gpc.iPol = function (a) {
		//b2d.iGP =
		// = b2d.iG  = b2d.isGPoly
		return O(a) && F(a.isHole)
	}
//gpc.hV = gpc.hPt = gpc.hasVertex = function (gP) {return gP.m_List.get(0)  }//used in MEET
	pD.hasAtLeastOnePoly = function () {
		return this.m_List.get(0)
	}
	pD.isPolyless = pD.hasNoPolys = function () {
		return !this.hasAtLeastOnePoly()
	}
}
function _alpha() {
	pD.ifHasPol = function () {
		var pD = this
		if (pD.hasAtLeastOnePoly()) {
			return pD
		}
	}
	pD.bigEnough = function () {
		return this.getArea() > 2000
	}
	pD.tooSmall = function () {
		return !this.bigEnough()
	}
}
 
pD.maybeTl = function (xy) {
	return xy ? this.tl(xy) : this
	//= pD.maybeHere	
}
//p1 = $pD(vs1);
//p2 = $pD(vs2)
 
 function geo(){
	 pD.tl = function (x, y) {
		 var pts = this.pts()
		 return $gP(b2d.add(pts, V(x, y)))
		 function docs() {
			 //=pD.tlAdd = pD.butHere = pD.to = pD.at = pD.ger =
			 function possibleAlt() {
				 pD.ger = function (x, y) {
					 var pD = this
					 var v = V(x, y);
					 pD = pD.reg(-v.x, -v.y)
					 return pD
				 }
			 }
		 }
	 }
	 pD.tlNeg = function (x, y) {
		 // = pD.reg
		 var pts = this.pts()
		 return $gP(b2d.sub(pts, V(x, y)))
// pD.tl2 = pD.translate =   pD.from = pD.cameFrom =pD.translateBackTo =pD.rel =
	 }
 }