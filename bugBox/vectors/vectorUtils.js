bx.divPoints = bx.divPts = bx.vs = function () {
	var g = G(arguments)
	//all this does is to 'scale down' a series of points
	//can pass in pts naked OR in an array
	return _.m(
			g.s ? g : //passed in verts ([],[],[])
					g.f,
			bx.div
	) //passed an array [[],[],[]]
	//bx.div <- function div(v){return V(v).div()}	
}
bx.add = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).add(p)
	})
}
bx.sub = function (vs, p) { //bx.ptsMinus = bx.vertsMinus =
	return _.m(vs, function (v) {
		return V(v).sub(p)
	})
}
bx.add = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).add(p)
	})
}
bx.xy = function (o) {
	if (bx.iF(O(o.x))) {
		o.x = o.x.B()
	}
	if (O(o.x)) {
		o.x = F(o.x.X) ? o.x.X() : o.x.x
	}
	if (O(o.y)) {
		o.y = F(o.x.Y) ? o.x.Y() : o.x.y
	}
	return o
}
bx.add = function (vs, p) {
	return _.m(vs, function (v) {
		return v.add(p)
	})
}
bx.d = bx.div = function (v) {
	return V(v).div()
}
bx.m = bx.mult = function (v) {
	return V(v).mult()
	function alt() {
		bx.m = function (vs) {
			return _.m(vs, bx.mult)
		}
	}
}


v.sub = v.s = function () {
//subtract from one vert?
//subtract from a whole bunch of verts and get back array?
	var v = this, g = G(arguments), o
	o = V(g.f, g.s)
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	return V(v.x - o.x, v.y - o.y)
}
v.add = v.a = function () {
	var v = this, g = G(arguments) //if (g.t) {return _.m(g, function (g) {return v.add(g)})}
	var v1 = g.u ? V(1, 1) : V(g.f, g.s)
	return V(v.x + v1.x, v.y + v1.y)
}
v.A = function () {
	var v = this, g = G(arguments), v1
	if (A(g[0]) && U(g[1])) {
		_.e(g, function (g) {
			v1 = V(g)
			v.add(v1.x, v1.y)
		})
	}
	else {
		v1 = V(g)
		v.add(v1.x, v1.y)
	}
}
v.add = v.a = function () {
	var v = this, g = G(arguments), v1
	if (g[2]) {
		return _.m(g, function (g) {
			return v.add(g)
		})
	}
	v1 = g.u ? V(1, 1) : V(g.f, g[1])
	return V(
			v.x + v1.x,
			v.y + v1.y
	)
	function alt() {
		v.a = v.add = function (x, y) {
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : 1
			y = N(y) ? y : x
			var v = V(this.x + x, this.y + y)
			return v
		}
		v.add = function (x, y) {
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : 1
			y = N(y) ? y : x
			var v = V(this.x + x, this.y + y)
			return v
		}
		v.add = function (vec, y) {
			var v = this
			vec = U(vec) ? V(1, 1) : V(vec, y)
			return V(v.x + vec.x, v.y + vec.y)
		}
	}
}
v.s = v.sub = function () {
	var v = this, g = G(arguments),
			o = V(g[0], g[1])
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	return V(v.x - o.x, v.y - o.y)
	function alt() {
		v.sub = function (x, y) {
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : 1;
			y = N(y) ? y : x
			var v = V(this.x - x, this.y - y)
			return v
		}
	}
}
v.m = v.mult = function (n) {
	n = N(n, 30)
	var v = this
	v = _.clone(v)
	v.Multiply(n)
	return v
	function alt() {
		v.m = v.mult = function (num) {
			num = N(num) ? num : 30
			var v = _.clone(this)
			v.Multiply(num)
			return v
		}
	}
}
v.d = v.div = function (n) {
	return this.mult(1 / N(n, 30))
	function alt() {
		v.d = v.div = function (num) {
			num = N(num) ? num : 30
			return this.mult(1 / num)
		}
	}
}
V00 = function (x, y) {
	if (x === '*') {
		x = M.r() * 10
	}
	if (y === '*') {
		y = M.r() * 10
	}
	return V(N0(x), N0(y))
}
_vec = function (o, g) {
	var v = new bx.Vec(o.x, o.y)
	if (g.n || g.d) {
		v = v.d()
	}
	if (g.p || g.m) {
		v = v.m()
	}
	return v
}

M.V = function fn() {//x, y, x2, y2
	var g = G(arguments)
	if (g.A) {return fn.apply(null, g.f)}
	if (g.O) {return fn(g.f.x, g.f.y )}
	return N(g.t) ? {
		x: (g.f - g.t) / 2,
		y: (g.s - g.fo) / 2
	} :  {x: N(g.f, 0), y: N(g.s, 0)} 
}

V= function(){
	var vec = M.V.apply(null,arguments)
	return new bx.V(vec.x, vec.y)
}

Vold = function (x, y, x2, y2) {
	var g = G(arguments), x = g.f, y = g.s, x2 = g.t, y2 = g.fo, v, o
			
	o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
	if (A(x)) {
		y2 = x[3]
		x2 = x[2]
		y = x[1]
		x = x[0]
		o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
	}
	
	if (N(y2)) {
		x = (x - x2) / 2
		y = (y - y2) / 2
		o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
	}
	
	else if (O(x)) {
		o = obX(x)
		x = o.x
		y = o.y
	}
	
	o.x = N0(o.x)
	o.y = N(o.y, o.x)
	return _vec({x: N0(x), y: N(y, x)}, g)
	function alt() {
		V = function (x, y, x2, y2) {
			var g = G(arguments),
					x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
					v, o
			o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
			if (A(x)) {
				y2 = x[3]
				x2 = x[2]
				y = x[1]
				x = x[0]
				o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
			}
			if (N(y2)) {
				x = (x - x2) / 2
				y = (y - y2) / 2
				o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
			}
			else if (O(x)) {
				o = obX(x)
				x = o.x
				y = o.y
			}
			o.x = N0(o.x)
			o.y = N(o.y, o.x)
			return _vec({x: N0(x), y: N(y, x)}, g)
		}
		function otherAlts() {
			V = function (x, y, x2, y2) {
				var g = G(arguments),
						x = g[0], y = g[1], x2 = g[2], y2 = g[3],
						vec
				if (A(x)) {
					y2 = x[3];
					x2 = x[2];
					y = x[1];
					x = x[0]
				}
				if (N(y2)) {
					x = (x - x2) / 2;
					y = (y - y2) / 2
				}
				else if (O(x)) {
					y = F(x.Y) ? x.Y() : x.y
					x = F(x.X) ? x.X() : x.x
				}
				x = N(x) ? x : 0
				y = N(y) ? y : x
				vec = new bx.Common.Math.b2Vec2(x, y)
				if (g.n || g.d) {
					vec = vec.div()
				}
				if (g.p || g.m) {
					vec = vec.mult()
				}
				return vec
				function alt() {
					V = function (x, y, x2, y2) {
						var g = G(arguments),
								x = g[0], y = g[1], x2 = g[2], y2 = g[3],
								vec
						if (A(x)) {
							y2 = x[3];
							x2 = x[2];
							y = x[1];
							x = x[0]
						}
						if (N(y2)) {
							x = (x - x2) / 2;
							y = (y - y2) / 2
						}//for dist difs?
						else if (O(x)) {
							y = F(x.Y) ? x.Y() : x.y
							x = F(x.X) ? x.X() : x.x
						}
						x = N(x) ? x : 0
						y = N(y) ? y : x
						vec = new bx.M.b2Vec2(x, y)
						if (g.n || g.d) {
							vec = vec.div()
						}
						if (g.p || g.m) {
							vec = vec.mult()
						}
						return vec
					}
				}
			}
			V = function (x, y, x2, y2) {
				var g = G(arguments),
						x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
						v
				if (A(x)) {
					y2 = x[3]
					x2 = x[2]
					y = x[1]
					x = x[0]
				}
				if (N(y2)) {
					x = (x - x2) / 2
					y = (y - y2) / 2
				}
				else if (O(x)) {
					if (bx.iF(O(x))) {
						x = x.B()
					}
					y = F(x.Y) ? x.Y() : x.y
					x = F(x.X) ? x.X() : x.x
				}
				x = N(x, 0)
				y = N(y, x)
				v = new bx.Common.Math.b2Vec2(x, y)
				if (g.n || g.d) {
					v = v.d()
				}
				if (g.p || g.m) {
					v = v.m()
				}
				return v
				function alt() {
					V = function (x, y, x2, y2) {
						var g = G(arguments), x = g[0], y = g[1], x2 = g[2], y2 = g[3], v
						if (A(x)) {
							y2 = x[3];
							x2 = x[2];
							y = x[1];
							x = x[0]
						}
						if (N(y2)) {
							x = (x - x2) / 2;
							y = (y - y2) / 2
						}//for dist difs?
						else if (O(x)) {
							y = F(x.Y) ? x.Y() : x.y
							x = F(x.X) ? x.X() : x.x
						}
						x = N(x) ? x : 0
						y = N(y) ? y : x
						v = new bx.Common.Math.b2Vec2(x, y)
						if (g.n || g.d) {
							v = v.div()
						}
						if (g.p || g.m) {
							v = v.mult()
						}
						return v
					}
					V = function (x, y, x2, y2) {
						var g = G(arguments),
								x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
								v
						if (A(x)) {
							y2 = x[3]
							x2 = x[2]
							y = x[1]
							x = x[0]
						}
						if (N(y2)) {
							x = (x - x2) / 2
							y = (y - y2) / 2
						}
						else if (O(x)) {
							if (bx.iF(O(x))) {
								x = x.B()
							}
							y = F(x.Y) ? x.Y() : x.y
							x = F(x.X) ? x.X() : x.x
						}
						x = N(x, 0)
						y = N(y, x)
						v = new bx.Common.Math.b2Vec2(x, y)
						if (g.n || g.d) {
							v = v.d()
						}
						if (g.p || g.m) {
							v = v.m()
						}
						return v
					}
				}
			}
		}
	}
}
function toFixed() {
	v.dec = v.toFixed = function (n) {
		n = N(n) ? n : 2
		var v = V(
				Number(this.x.toFixed(n)),
				Number(this.y.toFixed(n)))
		return v
	}
	v.tF = v.f = v.dec = v.toFixed = function (n) {
		var v = this
		n = N(n, 1)
		return V(
				Number(v.x.toFixed(n)),
				Number(v.y.toFixed(n))
		)
	}
	v.tF = v.toFixed = function (n) {
		n = N(n) ? n : 2
		var v = V(
				Number(this.x.toFixed(n)),
				Number(this.y.toFixed(n)))
		return v
	}
	v.toFixed = function (n) {
		n = N(n) ? n : 2
		var v = V(
				Number(this.x.toFixed(n)),
				Number(this.y.toFixed(n)))
		return v
	}
	v.tF = v.f = v.dec = v.toFixed = function (n) {
		var v = this
		n = N(n, 1)
		return V(
				Number(v.x.toFixed(n)),
				Number(v.y.toFixed(n))
		)
	}
}
v.r = v.rt = v.rot = function (rot) {
	var x = this.x, y = this.y,
			rot = Math.toRadians(rot),
			cos = Math.cos, sin = Math.sin
	return V(
			x * cos(rot) - y * sin(rot),
			x * sin(rot) + y * cos(rot)
	).dec(3)
}