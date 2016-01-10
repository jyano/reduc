//////////////////////////////////////////////////////////////////////////////////////////
h = b2d.Shapes.b2Shape.prototype
//something (important - mJ-related) uses this :(
h.tP = h.testPoint = function (tf, vec) {
	return this.TestPoint(tf, vec)
}
//
h.test = h.point = function (tf, v, y) {
	return this.TestPoint(tf, V(v, y).div())
}
h.seg = h.segment = function (xf, lamb, norm, seg, maxLamb) {//Perform a ray cast against this shape.
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
//////////////////////////////////////////////////////////////////////////////////////////
cH = b2d.CircleShape.prototype
cH.xy = function (x, y) {
	this.SetLocalPosition(V(x, y).div())
	return this
}
//////////////////////////////////////////////////////////////////////////////////////////
pH = p = b2d.PolygonShape.prototype
pH.box = pH.setAsBox = function (W, H, xy, a, a2) { //to replase setasbox
	var pH = this, g = G(arguments), o, v
	if (O(g[0])) {
		o = g[0]
	}
	else if (O(g[2])) {
		v = V(g[2]);
		o = {w: g[0], h: g[1], x: v.x, y: v.y, a: g[3]}
	}
	else {
		o = {w: g[0], h: g[1], x: g[2], y: g[3], a: g[4]}
	}
	b2d.oDef(o)
	pH.SetAsOrientedBox(
			o.w / 60, o.h / 60, V(o.x, o.y).div(), Math.toRadians(o.a))
	return pH
}
pH.arr = function () {
	var v
	v = b2d.verts.apply(null, arguments)
	this.SetAsArray(v, v.length)
	return this
}
//pH.setAsArray=p.sAA=function(a,b){if(U(b)){b=a.length}; this.SetAsArray(a, b); return this}
pH.set = function (W, H, x, y, a) {
	var pH = this, g = G(arguments)
	if (N(g[0])) {
		pH.box(W, H, x, y, a)
	}
	else if (O(W)) {
		pH.arr.apply(pH, g)
	}
	return pH
}
//this covers all cases for polygons !!!! // ******// !!!!!!!!
pH.setAsVec = function (vec, scale) {
	scale = N(scale) ? scale : 30
	vec = _.map(vec, function (v) {
		return V(v).div(scale)
	})
	this.SetAsVector(vec)
	return this
}
pH.verts = function () {
	var verts = this.m_vertices
	return _.map(verts, function (v) {
		return [v.x * 30, v.y * 30]
	})
}
pH.setAsBoxx = p.sABx = function (W, H, xy, a, a2) {          //handles both box and set as box! //w,h -> centered box //w,h,xy,ang -> oriented box //w,h,x,y,ang ->oriented box
	var h = this, pH = this,
			g = G(arguments),
			W = (g[0] || 100) / 60,
			H = (g[1] || W) / 60,
			xy = g[2],
			a = g[3],
			a2 = g[4]
	toR = Math.toRadians
	if (U(xy)) {
		pH.SetAsBox(W, H)
	}
	else if (N(xy)) {
		pH.SetAsOrientedBox(W, H, V(xy, a).div(), toR(a2 || 0))
	}
	else {
		pH.SetAsOrientedBox(W, H, xy.div(), toR(a || 0))
	}
	return pH
}
old = function () {
	f.setKill = function () {
		var f = this, b = f.body(), w = b.wor()
		w.flag(flagNum = Math.random())
		cjs.tick(function () {
			if (w.flagged(flagNum)) {
				f.kill()
			}
		})
	}//clever use of flagging.. but not needed
	f.Vold = function () {//f.rotVerts=
		return this.wVerts()
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
	f.DIFFold = function (b2) {
		var f = this, b = f.B(), g = G(arguments), b2 = g[0]//,diff
		// diff =  Math.poly( f.V() ).difference(  Math.poly( b2.V() ) )
		diff = f.minus(b2)
		//if( ! b2d.hasVerts(diff) ){ f.kill(); return }
		// b.conc(   b.rel(diff) )
		b.conc(diff)
		f.kill()
		if (g.n) {
			b2.kill()
		}
		return this
	}
}
// compare fixt vs fixtParse
b2d.fixtCx = function (h) {
	var g = G(arguments),
			l = g.length, f = new b2d.FixtureDef, h = g[0]
	if (b2d.isShape(h)) {
		f.shape = h
	}
	else if (A(h)) {
		f.shape = b2d.pH.apply(b2d, g)
	}
	else if (l == 1 || l == 3) {
		f.shape = b2d.cH.apply(b2d, g)
	}
	else if (l == 2 || l > 3) {
		f.shape = b2d.pH.apply(b2d, g)
	}
	return f
}
  