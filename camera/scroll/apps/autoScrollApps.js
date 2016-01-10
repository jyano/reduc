AUTO = AUTOSCROLL = function () {
	function help() {
		w.guy = function () {
			return this.D(800, 100, 'r', 50, 50).bS('guy')
		}
		w.left = function (n) {
			var w = this;
			n = N(n, 4)
			w.e(function (b) {
				b.X(n, '-')
			})
		}
		b.byI = b.byImp = function (i) {
			var k = $.K
			if (k.right) {
				this.I(i, 0)
			}
			else if (k.left) {
				this.I(-i, 0)
			}
			return this
		}
		b.byV = b.byVel = function (v) {
			alert('b.byV')
			var k = $.K
			if (k.right) {
				p.lV(v, 0)
			}
			else if (k.left) {
				p.lV(-v, 0)
			}
			return this
		}
		w.plat = function (x, y, W, H) {
			var w = this//=brk=brick=
			x = N(x) ? x : 60;
			y = N(y) ? y : x
			W = N(W) ? W : 30;
			H = N(H) ? H : W
			return w.S(x, y, 'w', W, H).r(.3).K('plat')
		}
		w.fivePlats = function () {
			var w = this
			w.plat(800, 500, 600, 100)
			w.plat(300, 530, 100, 100)
			w.plat(1400, 300, 600, 100)
			w.plat(1800, 500, 1000, 100)
			w.plat(1900, 200, 600, 100)
			return w
		}
		W.PLATS = function () {
			return W({g: 300, w: 0}).P(300, -300).fivePlats().p(300, -100)
		}
		b.playMe = function () {
			var p = this
			if (p.Y() > 2000) {
				p.XY(300, -300)
			} //comeback
			if (b2d.onG) {
				if ($.K.u) {
					p.jumping(180, 30)
				}
				else {
					p.byVel(40)
				}
			}
			else {
				p.byImp(10)
			}
			return p
		}
	}
	
	help()
	W.PLATS()
	$t(function () {
		w.left(4)
		p.playMe()
		w.guy()
	})
}
AUTO = AUTOSCROLL = function () {
	w.left = function (n) {
		var w = this;
		n = N(n, 4)
		w.e(function (b) {
			b.X(n, '-')
		})
	}
	b.byI = b.byImp = function (i) {
		var k = $.K
		if (k.right) {
			this.I(i, 0)
		}
		else if (k.left) {
			this.I(-i, 0)
		}
		return this
	}
	b.byV = b.byVel = function (v) {
		alert('b.byV')
		var k = $.K
		if (k.right) {
			p.lV(v, 0)
		}
		else if (k.left) {
			p.lV(-v, 0)
		}
		return this
	}
	W({g: 300, w: 0}).P(300, -300)
	w.plat = function (x, y, W, H) {
		var w = this//=brk=brick=
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 30;
		H = N(H) ? H : W
		return w.S(x, y, 'w', W, H).r(.3).K('plat')
	}
	w.plat(800, 500, 600, 100)
	w.plat(300, 530, 100, 100)
	w.plat(1400, 300, 600, 100)
	w.plat(1800, 500, 1000, 100)
	w.plat(1900, 200, 600, 100)
	w.p(300, -100)
	T.t(function () {
		w.left(4)
		if (p.Y() > 2000) {
			p.XY(300, -300)
		} //comeback
		if (b2d.onG) {
			if ($.K.u) {
				p.jumping(180, 30)
			}
			else {
				p.byVel(40)
			}
		}
		else {
			p.byImp(10)
		}
	})
	w.D(800, 100, 'r', 50, 50).bS('guy')
}
 