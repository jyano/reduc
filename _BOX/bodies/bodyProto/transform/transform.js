b.tf = b.transform = function (tf) {
	var b = this
	if (U(tf)) {
		return b.GetTransform()
	}
	b.SetTransform(tf)
	return b
}
b.rt = function (angle) {
	var g = G(arguments),
			ang = g[0],
			newAng,
			currAng = Math.toDegrees(this.GetAngle())
	if (U(ang)) {
		return currAng
	}
	if (g.p) {
		newAng = currAng + ang
	}
	else if (g.n) {
		newAng = currAng - ang
	}
	else if (g.m) {
		newAng = currAng * ang
	}
	else if (g.d) {
		newAng = currAng / ang
	}
	else {
		newAng = ang
	}
	this.SetAngle(Math.toRadians(newAng))
	return this
}
b.XY = function (x, y) {
	var newPos
	if (x === '*') {
		x = Math.random() * 10
	}
	if (y === '*') {
		y = Math.random() * 10
	}
	if (U(x)) {
		var pos = this.GetPosition()
		return pos.mult()
	}
	y = N(y) ? y : x
	newPos = V(x / 30, y / 30)
	this.SetPosition(newPos)
	return this
}
b.X = function (x) {
	var g = G(arguments), pos = this.XY()
	if (U(x = g[0])) {
		return pos.x
	}
	this.XY($.update(pos.x, x, g), pos.y)
	return this
}
b.Y = function (y) {
	var g = G(arguments), pos = this.XY()
	if (U(y = g[0])) {
		return pos.y
	}
	this.XY(pos.x, $.update(pos.y, y, g))
	return this
}
b.rt = b.rot = function (angle, ms) {
	var b = this, g = G(arguments), r = g[0], ms = g[1],
			a = Math.toDegrees(b.GetAngle()) //currAng
	if (U(r)) {
		return a
	}
	if (N(ms)) {
		b.stop = I(function () {
			b.rot(r, '+')
		}, ms)
	}
	else {
		b.SetAngle(M.toRadians(g.p ? a + r : g.n ? a - r : g.m ? a * r : g.d ? a / r : r))
	}
	return b
}
b.X = function (x) {
	var g = G(arguments),
			pos = this.XY()
	if (U(x = g.f)) {
		return pos.x
	}
	this.XY(
			_.upd(pos.x, x, g), pos.y
	)
	return this
	function alt() {
		b.X = function (x) {
			var g = G(arguments), pos = this.XY()
			if (U(x = g[0])) {
				return pos.x
			}
			this.XY($.update(pos.x, x, g), pos.y)
			return this
		}
	}
}
b.Y = function (y) {
	function alt() {
		b.Y = function (y) {
			var g = G(arguments), pos = this.XY()
			if (U(y = g[0])) {
				return pos.y
			}
			this.XY(pos.x, $.update(pos.y, y, g))
			return this
		}
	}
	
	var b = this,
			g = G(arguments),
			pos = b.XY()
	if (g.u) {
		return pos.y
	}
	this.XY(pos.x,
			_.upd(pos.y, y, g))
	return this
}
b.XY = function (x, y) {
	function alt() {
		b.XY = function (x, y) {
			var newPos
			if (x === '*') {
				x = Math.random() * 10
			}
			if (y === '*') {
				y = Math.random() * 10
			}
			if (U(x)) {
				var pos = this.GetPosition()
				return pos.mult()
			} //used to parseInt.. necessary?
			y = N(y) ? y : x
			newPos = V(x / 30, y / 30)
			this.SetPosition(newPos)
			return this
		}
	}
	
	var b = this, g = G(arguments),
			newPos, pos
	if (x === '*') {
		x = R(10)
	}
	if (y === '*') {
		y = R(10)
	}
	if (g.u) {
		pos = b.GetPosition()
		return pos.m().tF(0)
	} //used to parseInt.. necessary?
	if (b2d.iB(x)) {
		y = x.Y()
		x = x.X()
	}
	y = N(y) ? y : x
	newPos = V(x / 30, y / 30)
	this.SetPosition(newPos)
	return this
} 
b.GP = function () {
	return this.GetPosition()
}
b.SP = function (ps) {
	this.SetPosition(ps);
	return this
}
b.STf = function (tf) {
	this.SetTransform(tf);
	return this
}
b.GTf = function (tf) {
	return this.GetTransform()
}
b.SA = function (ang) {
	this.SetAngle(ang);
	return this
}
b.GA = function () {
	return this.GetAngle()
}
b.SPAA = function () {
	this.SetPositionAndAngle.apply(this, arguments)
	return this
}