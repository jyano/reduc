function zoomScale() {
	ZOM = function () {
		W([1200, 600, 2400, 600], {g: 10})//.manyBalls(); //_.t(10, function (i) {w.D(100 + i * 100, 100, $r(), 35).de(.1)})
		y = w.ship(50, 50).track()
		_.in(2, function () {
			w.zoom(1.4)
		})
	}
	ZOOM = SCORE = ADV = ADVENTURE = function () {
		W([1200, 600, 2400, 1200])//.P('+')
		//$.test=true
		w.Z(.1)
		w.roof.kill()
		w.S(100, 570, 'w', 200, 30).r(0).fr(0)
		w.S(325, 570, 'g', 230, 30).r(.3).fr(10)
		w.S(550, 570, 'r', 200, 30).r(.7).fr(.3)
		w.S(100, 400, 'g', 230, 30).r(.3).fr(10)
		w.plat([800, 300, 100], [260, 240, 60], [550, 250, 100], [1350, 550, 100], [300, 200, 100], [300, 500, 60, 30], [150, 400, 60, 30])
		w.S(1200, 500, 'w', 100, 100)
		w.S(1240, 450, 'w', 180, 30)
		w.S(1420, 500, 'y', 180, 30)
		w.S(1560, 450, 'y', 300, 30)
		w.S(1600, 500, 'y', 180, 30)
		w.S(1960, 450, 'w', 300, 30)
		w.S(1900, 500, 'w', 180, 30)
		w.S(11300, 200, 'w', 180, 30)
		speed = 1
		//  p.tr()
		p = w.p().cn('jump').tr()
		w.p(100, 100, .8)
		w.p(100, 100, .8)
		w.p(100, 100, .8)
		w.p(100, 100, .8)
		//p.lD(1)
///    w.show(function(){ return  'in air: '+ p.inAir() })
		//w.goomba(400).fr(0)
		setup = function () {
			score = 0
			p.XY(150, 100).lV(0, 0)
			w.s.XY(0, 0)
		}
		setup()
		T.t(function () {
			w.s.X(speed, '-')//.pen(score++)
			if (p.Y() > 600) {
				setup()
			}
		})
	}
	SCROLLNOLIM = function () {
		W([1200, 600, 2400, 1200], {g: 0})
		w.S(1200, 300, 'r', 400, 100)
		w.S(1200, 600, 'w', [[100, 100, '-']])
		w.S(1200, 900, 'r', 400, 100)
		y = w.ship(100, 100).rot(120).damp(1, 10)
		w.Z(.8)
		w.track(y, 600, 300, '-')
		w.dragScale = function () {
			var w = this,
					pX = 0, pY = 0, pmX, pmY, o = {}
			c = $(w.i.canvas)
			c.mousedown(function (e) {
				o.Scl = w.z
				o.Y = e.clientY
			})
			c.pressmove(function (e) {
				var x = e.clientX,
						y = e.clientY,
						newSc = o.Scl + (o.Y - e.clientY) * .005
				newSc = newSc > 5 ? 5 : newSc < .8 ? .8 : newSc
				w.Z(newSc)
			})
			return this
		}
		w.dragScale()
	}//fix
	ZOOMSCALE = function () {
		W([1000, 1000], {
			g: 0, t: 0
		})
		w.dragX = function () {
			var w = this, d
			w.i.c.m({
				mD: function (x) {
					d = x - w.s.x
				},
				pM: function (x) {
					w.s.x = x - d
				}
			})
			return w
		}
		w.dragY = function () {
			var w = this, d
			w.i.c.m({
				mD: function (x, y) {
					d = y - w.s.y
				},
				pM: function (x, y) {
					w.s.y = y - d
				}
			})
			return w
		}
		w.drag = function () {
			return this.dragX().dragY()
		}
		// w.s.HUD.dot(500, 500)
		y = w.ship(100, 100).rot(200)
		w.S(500, 500, 'o', 200)
		w.S(500, 500, 'r', 10)
		w.S(200, 200, 'm', 40)
		w.S(800, 200, 'b', 60)
		w.S(800, 800, 'l', 80)
		w.S(200, 800, 'g', 100)
		//w.inout()
		w.drag()
		r = $.rg().A() //range
		r.abs(775, 500)
		r.css('transform', 'rotate(90deg)')
		r.W(500).val(0)
		T.t(function () {
			w.Z(r.val() / 25 + 1)
		})
	}
}