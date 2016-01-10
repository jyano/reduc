b.rect = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var that = this,
			rect = b2d.poly(wd, ht, x, y),
			fixt = this.fixt(rect).den(1),
			r = cjs.rect2(wd, ht, x, y).XY(this.X(), this.Y())
	w.s.A(r)
	cjs.tick(function () {
		r.rot(that.rot())
		r.XY(that.X(), that.Y())
	})
	return fixt
}
b.rectSensor = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var that = this
	var rect = b2d.poly(wd, ht, x, y)
	rect.isSensor = true
	var fixt = this.fixt(rect)
	fixt.den(.00000001)
	var r = cjs.rect2(wd, ht, x, y)
	r.XY(this.X(), this.Y())
	w.s.A(r)
	r.opacity(.3)
	cjs.tick(function () {
		r.rot(that.rot())
		r.XY(that.X(), that.Y())
	})
	fixt.sprite = r
	return fixt
}
w.R = function (c, W, H, x, y) {
	var w = this, wC = w.cent(),
			r,
			g = G(arguments)
	if (!S(g[0])) {
		y = x;
		x = H;
		H = W;
		W = c;
		c = 'x'
	}
	if (U(W)) {
		W = 200
		H = 200
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	else if (U(H)) {
		H = W
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	else if (U(x)) {
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	y = N(y) ? y : x
	/*
	 x=N(g[0])?g[0]:wC.x
	 y=N(y)?y:N(g[0])?N(g[0]):wC.y
	 W=N(W)?W:100
	 H=N(H)?H:W
	 */
	r = w.S(x + (W / 2), y + (H / 2), c, W, H)
	return r
}
b.RECT = function (col, wd, ht, x, y, rot) {
	var g = G(arguments),
			fd,
			fixt,
			h,
			str, alpha = 1
	col = g[0];
	wd = g[1];
	ht = g[2]
	x = g[3];
	y = g[4];
	rot = g[5]
	if (S(rot)) {
		str = rot;
		rot = null
	}
	if (S(y)) {
		str = y;
		y = null
	}
	if (S(x)) {
		str = x;
		x = null
	}
	if (S(ht)) {
		str = ht;
		ht = null
	}
	if (!S(col)) {
		rot = y;
		y = x;
		x = ht;
		ht = wd;
		wd = col
	}
	fd = b2d.rec(wd, ht, x, y, rot)
	if (g.n) {
		fd.isSensor = true
		alpha = .2
	}
	fixt = this.fixt(fd)
	if (str) {
		fixt.K(str)
	}
	if (S(col)) {
		fixt.bindSprite(
				w.s.RECT(col, wd, ht, x, y, rot), 0, 0, 0, alpha
		)
	}
	return fixt
}
 
w.gG = w.greenGuy = function (x, y) {
	x = N(x) ? x : 100;
	y = N(y) ? y : 100
	var w = this
	var gG = w.D(x, y)
	gG.size = 20
	gG.core = gG.K('gG').rect(20, 25).re(2)
	gG.shrivel = function () {
		var gG = this
		gG.size = 20//; gG.lV(0).aV(0)
	}
	gG.makeShel = function () {
		var gG = this;
		if (gG.shel) {
			gG.shel.kill()
		}
		gG.shel = gG.rectSensor(gG.size, gG.size)
	}
	gG.growSize = function () {
		this.size += 4;
		return this
	}
	_.ev(.5, function () {
		gG.growSize().makeShel()
	})
	gG.core.cl('player', function () {
		gG.shrivel()
	})
	return gG
}
w.polyBul = function (x, y, wd, ht, col) {
	var bul = this.bul(x, y)
	bul.poly(wd, ht)
	if (col) {
		bul.bindSprite2(
				cjs.rect(wd, ht, oO('c', col)).XY(x, y).a2(this.s)
		)
	}
	return bul
}
UPDOWN = function () {
	w = b2d.W({g: 0}).debug().C('g')
	y = w.ship(300, 50).linDamp(5)
	co1 = w.acc(0, -50)
	co2 = w.acc(0, 50)
	s1 = w.rectSensor(250, 300, 600, 600, 'o').K('co1')
	s2 = w.rectSensor(950, 300, 600, 600, 'o').K('co2')
	w.bindCo('co1', 'co2')
	w.beg(function () {
	})
	w.end(function (cx) {
		var fixt
		if (fixt = cx.with('co1')) {
			// fixt.cancel()
		}
		if (fixt = cx.with('co2')) {
			// fixt.cancel()
		}
	})
	_.times(20, function () {
		w.circ(300, 300, 30, 'b')
	})
}