w.fixts = function (x, y, f) {
	var w = this
	f = b2d.fixts[f]
	return w.B(x, y, f)
}
w.cleanup = function () {
	w.e(function (b) {
		if (!b.IsActive) {
		}
	})
}
// is body.Isactive??
v.tA = function () {
	return [this.x, this.y]
}
b2d.tA = function (vs) {
	return _.m(vs, function (v) {
		return v.tA(v)
	})
}
V0 = function (x, y) {
	if (O(x)) {
		return V0(V(x).x, V(x).y)
	}
	return {x: N0(x), y: N0(y)}
}
b2d.AB = function (x1, y1, x2, y2) {
	var ab = new b2d.Collision.b2AABB()
	ab.lowerBound.Set(x1 / 30, y1 / 30)
	ab.upperBound.Set(x2 / 30, y2 / 30)
	return ab
	function alt() {
		b2d.AABB = function (a, b, c, d) {//this is the one that works!
			var aabb = new b2AABB()
			aabb.lowerBound.Set(a, b)
			aabb.upperBound.Set(c, d)
			return aabb
		}
	}
}
$AB = $aB = b2d.AB = AABB = AB = function (a, b, c, d) {
	var ab = new b2d.AABB() // ??
	ab.lowerBound.Set(a, b)
	ab.upperBound.Set(c, d)
	return ab
	function alt() {
		$AB = b2d.AB = function () {
			var g = G(arguments), ab = new b2d.Collision.b2AABB
			if (g.p) {
				ab.lUB(g.f, g.s, g.t, g.f)
			}
			else if (U(g.t)) {
				ab.pt(g.f, g.s)
			}			//ab.lUB(g.f/30 - 0.01, g.s/30 - 0.01, g.f/30 + 0.01, g.s/30 + 0.01)
			else {
				ab.lUB(g.f, g.s, g.t, g.fo, '-')
			}
			return ab
		}
		$AB = b2d.AB = function () {
			var g = G(arguments), ab = new b2d.Collision.b2AABB
			if (g.p) {
				ab.lUB(g.f, g.s, g.t, g.f)
			}
			else if (U(g.t)) {
				ab.pt(g.f, g.s)
			}			//ab.lUB(g.f/30 - 0.01, g.s/30 - 0.01, g.f/30 + 0.01, g.s/30 + 0.01)
			else {
				ab.lUB(g.f, g.s, g.t, g.fo, '-')
			}
			return ab
		}
		AABB = AB = function (a, b, c, d) {
			var ab = new b2AABB()
			ab.lowerBound.Set(a, b)
			ab.upperBound.Set(c, d)
			return ab
		}//b2d.AB =
	}//get rectangle by two coords
}
AB001 = b2d.AB0001 = b2d.AB0001 = function (a, b) {
	return $aB(a - .001, b - .001, a + .001, b + .001)
	function alt() {
		AB001 = function (a, b) {
			return AB(a - .001, b - .001, a + .001, b + .001)
		}
	}
}
b2d.AABB01 = function (x, y) {//now used div
	var v = V(x, y).div(),
			x = v.x,
			y = v.y
	return this.AABB(x - .001, y - .001, x + .001, y + .001)
}
b2d.tf = function (v1, v2, v3) {
	if (U(v1)) {
		return new b2d.Math.b2Transform()
	}
	if (A(v1)) {
		return b2d.tf(
				V(v1[0], v1[1]),
				V(v1[2], v1[3]),
				V(v1[4], v1[5]))
	}
	var tf = new b2d.Math.b2Transform(v1, b2d.mat22(v2, v3))
	return tf
}
b2d.M.b2Transform.prototype.toArr = function () {
	var tf = this
	var pos = tf.position,
			R = tf.R,
			col1 = R.col1,
			col2 = R.col2
	return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
}