bH.vs = function () {
	return this.m_vertices
}
pH.vs = pH.verts = function () {
	var verts = this.m_vertices
	return _.m(verts, function (v) {
		return [v.x * 30, v.y * 30]
	})
	function alt() {
		pH.vs = pH.vertsx = function () {
			alert('pH.vs. see boxShapes.js')
			var pH = this
			return _.m(pH.m_vertices, function (v) {
				return [v.x * 30, v.y * 30]
			})
		}
	}
}
pH.vec = pH.setAsVec = function (v, sc) {
	var pH = this //used by SepLib
	pH.SetAsVector(_.m(v, function (v) {
		return V(v).d(N(sc, 30))
	}))
	return pH
	function alt() {
		pH.setAsVec = function (vec, scale) {
			scale = N(scale) ? scale : 30
			vec = _.map(vec, function (v) {
				return V(v).div(scale)
			})
			this.SetAsVector(vec)
			return this
		}
	}
}
f.wV = function () {
	var f = this, b = f.B(), g = G(arguments),
			vs
	vs = g.n ? f.vs() : f.vs('+')
	return b2d.tA(_.m(vs, function (v) {
		return V(v).add(b)
	}))
}
bx.pts = function () {
	var g = G(arguments)
	var pts = g.s ? g : g.f
	return _.m(pts, bx.div)
	function docs() {
		//= b2d.verts
		//all this does is to 'scale down' a series of points
		//can pass in pts naked OR in an array
		//can pass in: (1) verts ([],[],[]) OR (2) an array [[],[],[]]
	}
}
bx.recPts = function (x, y, w, h) {
	var hW = w / 2, hH = h / 2
	return [[x - hW, y - hH], [x + hW, y - hH],
		[x + hW, y + hH], [x - hW, y + hH]]
	function docs() {
		// =	b2d.recVerts = b2d.recPoints = b2d.recV
	}
}
f._pts = function () {
	var f = this
	f.__pts = function () {
		return this.H().m_vertices
	}
	return _.m(f.__pts(), b2d.mult)
}
f.locPts = function () {
	var f = this, b = this.B(), g = G(arguments)
	var pts = f._pts()
	return g.p ? _.m(pts, function (v) {
		return v.rt(b.rt())
	}) :
			pts
	function docs() { 	// (optionally rotated locally by body's rotation)
	}
}
f.pts = function () {
	var f = this, b = f.B(), g = G(arguments)
	return b2d.tA(_.m(f._pts(), function (v) {
		return g.n ? v : v.rt(b.rt())
	}))
	function docs() {

//=f.vs = f.points = f.verts = f.vertices =
		// 
		/*
		 b2d.tA source :
		 function(vs) {
		 return _.m(vs, function (v) { return [v.x, v.y]  })
		 }
		
		 v.tA:function () { return [v.x, v.y] }
		 */
	}
}
f.ptsA = function () {
	var f = this
	return _.m(f.pts(), function (v) {
		v = V(v)
		return [v.x, v.y]
	})
	function docs() {//=f.vsA
	}
}
f.wPts = function () {
	var f = this, b = f.B(), g = G(arguments)
	var pts = g.p ?  // was g.N
			f.pts('+') : f.pts()
	return _.m(pts, function (v) {
		return v.add(b)
	})
	function docs() {
//give world verts of fixt rotated (or optionally, not rotated for some reason)
	}
}
f.wPtsA = function () {
	var f = this, b = f.B(), g = G(arguments)
	var pts = f.pts()
	var pt = V(b.X(), b.Y())
	pts = b2d.add(pts, pt)
	return b2d.tA(pts)
}
f.wPtsGP = function () {
	return $pD(this.wPts())
}
f.pos = f.cirPos = function () {
	var f = this
	var h = f.H()
	var posPt = h.m_p
	return V(posPt.x, posPt.y).mult()
	function docs() {
		// for circs
	}
}
f.GP = function () {
	var f = this
	var pts = f.wPts()
	return $pD(pts)
}
b.pts = function (fn) {
	var b = this
	var arr = []
	var pD = b.uni()
	if (F(fn)) {
		pD.ePol(fn);
		return b
	}
	return pD.pts()
	function docs() {
		function alt() {
			b.pts = b.ps = function (fn) {
				var b = this, arr = [], p = b.uni()
				if (F(fn)) {
					p.ps(b, fn);
					return b
				}
				p.ps(b, function (v) {
					arr.push(v)
				})
				return arr
			}
		}
	}
}
b.ptsGP = function () {
	var b = this
	var num = this.num()
	if (num == 0) {
		return
	}
	var fs = b.fixts()
	var pg = fs[0]
	if (num == 1) {
		return pg.union(pg)
	}
	_.e(_.r(fs), function (f) {
		f = M.poly(f)
		pg = M.poly(pg.union(f))
	})
	return pg
	function docs() {//		 
		//return this.union()
		//it used to just get from the FIRST fixt,
		//but now it unions them all together :)
		//b.verts = function(){ return this.fixt().verts() }
	}
}
b.wPtsGP = function () {
	var b = this, g = G(arguments)
	return b.pD().pts()
}
b.wPts = function () {
	var p = this.transform().position.mult()
	return _.m(this.pts(), function (pt) {
		return pt.add(p)
	})
}
b.rtWPts = function () {
	var b = this
	return _.m(b.rtPts(), function (v) {
		return V(v.x + b.X(), v.y + b.Y())
	})
}
b.rtPts = function () {
	var b = this
	var rt = M.tR(b.rt())
	return _.m(b.pts(), function (v) {
		var v = V(v)
		var x = v.x * M.c(r) - v.y * M.s(r) + b.X()
		var y = v.x * M.s(r) + v.y * M.c(r) + b.Y()
		return V(x, y)
	})
	function docs() {
		
		//b.vs????
//b.fsGp   fsToGPol...
// for each of my fxs, 
// turn them into gP's
// and then aggregate them all
// by unioning each reductively
// so it gets bigger and bigger..
		function alt() {
			b.rtPts = b.rotVerts = function () {//rotated but local
				newX = function (x, y, rad) {
					rad = Math.toRadians(rad)
					return x * Math.cos(rad) - y * Math.sin(rad)
				}
				newY = function (x, y, rad) {
					rad = Math.toRadians(rad)
					return x * Math.sin(rad) + y * Math.cos(rad)
				}
				f.Vold = function () {//f.rotVerts=
					return this.wPts()
					newX = function (x, y, rot) {
						rot = Math.toRadians(rot)
						x *= Math.cos(rot).toFixed(3)
						y *= Math.sin(rot).toFixed(3)
						return x - y
					}
					newY = function (x, y, rot) {
						rot = Math.toRadians(rot)
						return (x * Math.sin(rot)) + (y * Math.cos(rot))
					}
					var verts = this.verts(), b = this.B()
					return _.map(verts, function (v) {
						var x = v.x, y = v.y
						return V(
								newX(x, y, b.rot()) + b.X(),
								newY(x, y, b.rot()) + b.Y())
					})
				}//this becomes wVerts
				var b = this, pts = b.verts()
				return _.m(pts, function (v) {
					var x = v.x,
							y = v.y
					return V(newX(x, y, b.rot()), newY(x, y, b.rot()))
				})
			}
		}
		
		//this returns [V,V,V...]
	}
}
b.pos = function () {
	return this.tf().position.m()
}
b.pgPts = function () {
	return M.poly(this.V())
	function docs() {
//= b.polyVerts
	}
}
b.reg = b.rel = function (p) {
	var b = this
	var pts = gpc.iP(p) ? p.pts() : p
	return _.m(pts, function (v) {
		v = V(v)
		return V(v.x - b.X(), v.y - b.Y())
	})
	function docs() {
		//my poly operations can only work with POSITIVE vertices
		//but box2d needs fixt vertices specified relative to a body
		//so this allows the body that the operation was based on to take responsibility
		//for converting them back
		//you can pass in the verts, or the gPoly itself!
		//this returns [V,V,V...]
	}
}
b2d.vs = function () {
	var g = G(arguments)
	//all this does is to 'scale down' a series of points
	//can pass in pts naked OR in an array
	if (g.s) {
		return _.m(g, b2d.div)
	}
	//passed in verts ([],[],[])
	return _.m(g.f, b2d.div) //passed an array [[],[],[]]
	//b2d.div <- function div(v){return V(v).div()}
}
b2d.divPoints = b2d.divPts = b2d.vs = function () {
	var g = G(arguments)
	//all this does is to 'scale down' a series of points
	//can pass in pts naked OR in an array
	return _.m(
			g.s ? g : //passed in verts ([],[],[])
					g.f,
			b2d.div
	) //passed an array [[],[],[]]
	//b2d.div <- function div(v){return V(v).div()}	
}
b2d.hasVerts = function (poly) {
	return poly.m_List.get(0)
}