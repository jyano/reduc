w.yShip = function (color, x, y, scale) {
	var halfSide, side, ship
	if (!S(color)) {
		scale = y;
		y = x;
		x = color;
		color = 'y'
	}
	color = oO('c', color)
	scale = N(scale) ? scale : 4
	halfSide = scale * 4
	side = halfSide * 2
	ship = this.dyn(x, y)
	ship.convex(color, [[-halfSide, halfSide], [0, -side * 2], [halfSide, halfSide]])
	ship.dir = function () {
		return this.GetWorldVector(V(0, -1))
	}
	//methods
	ship.push = function (n) {
		n = N(n) ? n : 1
		this.I(this.dir().mult(n * 0.1))
		return this
	}
	ship.chug = function (n) {
		var that = this
		I(function () {
			that.push(n)
		}, 100)
		return this
	}
	ship.going = function () {
		var lv = this.lV(),
				x = lv.x,
				y = lv.y,
				a = this.angVel(),
				abs = Math.abs
		return (abs(x) > 0.5) || (abs(y) > 0.5) || (abs(a) > 0.5)
	}
	ship.shoot = function (kind) {
		kind = kind || 'bul'
		var bullet, dist, y = this
		dist = y.dir().mult(100)
		bullet = w.circ(
				y.X() + dist.x,
				y.Y() + dist.y,
				6,
				'w'
		).K(kind).addClass('bul bullet')
		bullet.I(y.GetWorldVector(V(0, -100)).div(4))
		setTimeout(function () {
			bullet.kill()
		}, 400)
		return bullet
	}
	ship.shootOnSpace = function (kind) {
		var y = this
		$.space(function () {
			y.shoot(kind)
		})
		return this
	}
	ship.shootOnInt = function (int, kind) {
		var y = this, int = N(int) ? int : 1000
		setInterval(function () {
			if (y.IsActive()) {
				y.shoot(kind)
			}
		}, int)
		return this
	}
	return ship.den(.5).K('ship')
}
w.yShipEquilateral = function (color, x, y, scale) {
	var halfSide, side, ship
	if (!S(color)) {
		scale = y;
		y = x;
		x = color;
		color = 'y'
	}
	color = oO('c', color)
	scale = N(scale) ? scale : 4
	halfSide = scale * 4
	side = halfSide * 2
	ship = this.dyn(x, y)
	ship.convex(color, [[-side, halfSide], [0, -side], [side, halfSide]])
	ship.poly(4, 20, 0, -side)  //w,h,x,y ..is that my preferred pam order? other places have x,y come first.. no?
	// ship.bindSprite2(  w.s.poly( 0,-side,   4,20, 'b'))
//        ship.bindSprite2(   cjs.rect(4,20,'o').XY(0,-side)    )
	/////////////
	ship.dir = function () {
		return this.GetWorldVector(V(0, -1))
	}
	//methods
	ship.push = function (n) {
		var k, dir
		n = N(n) ? n : 1
		k = 0.1
		dir = this.dir()
		this.I(
				dir.x * n * k,
				dir.y * n * k
		);
		return this
	}
	ship.chug = function (n) {
		var that = this
		I(function () {
			that.push(n)
		}, 100)
		return this
	}
	ship.going = function () {
		var lv = this.linVel(), x = lv.x, y = lv.y, a = this.angVel()
		return (Math.abs(x) > 0.5) || (Math.abs(y) > 0.5) || ( Math.abs(a) > 0.5)
	}
	ship.shoot = function (kind) {
		kind = kind || 'bul'
		var vec, bullet, dist, y = this
		dist = y.dir().mult(100)
		bullet = w.circ(y.X() + dist.x, y.Y() + dist.y, 6, 'w').addClass(kind).K(kind)
		bullet.addClass('bullet bul')
		vec = y.GetWorldVector(V(0, -100))
		bullet.impulse(vec.x / 4, vec.y / 4)
		setTimeout(function () {
			bullet.kill()
		}, 400)
		return bullet
	}
	ship.shootOnSpace = function (kind) {
		var y = this
		$.space(function () {
			y.shoot(kind)
		})
		return this
	}
	ship.shootOnInt = function (int, kind) {
		var y = this, int = N(int) ? int : 1000
		setInterval(function () {
			if (y.IsActive()) {
				y.shoot(kind)
			}
		}, int)
		return this
	}
	return ship
}