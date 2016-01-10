function showOff() {
	SHOWOFF = function () {
		W([1200, 600, 2400, 600], {g: 10})
		y = w.ship(50, 50).track()//.P(100,1000)
		w.S(400, 2500, 'r', 200, 100)
		w.S(800, 2300, 'z', 100, 100)
		w.S(1200, 2300, 'b', 300, 100)
		w.S(1600, 2300, 'z', 100, 100)
		w.S(2000, 2300, 'r', 200, 100)
		_.times(10, function (i) {
			w.D(100 + i * 100, 100, $r(), 35).den(.1)
		})
		w.showOff()
	}
	CUPBALL = function () {//should zoom in when near cup
		CUPS()
		b = w.D(w.W / 2, w.H / 2, 'w', [[10]]).r(.8).track()
		$t(function () {
			b.F(0, -20)
		})
		w.showOff()
	}
	SLOOM = function () {
		W([800, 500, 2400, 500], {g: 0}).Z(1.5)
				.Y(200, 200).showOff().bricks(
				[400, 300, 'r', 200, 100], [800, 300, 'z', 100, 100],
				[1200, 300, 'b', 300, 100], [1600, 300, 'z', 100, 100],
				[2000, 300, 'r', 200, 100]
		)
		y.damp(1, 10).track()
		_.in(4, function () {
			y.bS('me', .5)
		})
		_.t(5, function () {
			w.p(100, 100)
		})
	}
	SHOWOFF = SHO = function () {
		W([1200, 600, 2400, 600], {g: 10})//.manyBalls(); //_.t(10, function (i) {w.D(100 + i * 100, 100, $r(), 35).de(.1)})
		w.showOff()
		y = w.ship(50, 50).track()
	}
}
function panScroll() {
	KISS = function () {
		W([1200, 600, 2400, 600], {g: 10})
		w.D(800, 300).cir({
			r: 120,
			C: 'y', l: 2, bf: 'me', ls: ['y', 'x']//?
		}).den(.1)
		y = w.ship(50, 50).C('d').mid()
		y2 = w.ship(100, 300).C('x').rot(180)
		//i thought i may want t for timer/ticker.. but time has no x and y !
		//move the stage by manipulating the trackee x,y
		//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
		w.tRightLeft()
		w.showOff()
		I(function changeT() {
			if (w.t == y2) {
				w.C('w');
				w.t = y
			} else {
				w.C('z');
				w.t = y2
			}
		}, 5000)
		b = w.D(100, 300)
		pf = b.pol({s: 1, C: 'y', v: [[-200, -100], [0, -200], [100, -100]]})
		pfs = b.pol({s: 1, C: 'o', v: [[-100, 0], [0, -200], [100, 20], [0, -150]]})
		cf = b.cir({k: 'cir', r: 100, x: 200, y: -100, d: .2, b: .8, f: 100, C: 'x'})
		rf = b.rec({x: 100, y: 100, w: 10, h: 100, C: 'x'})
		w.D(200, 300).pol({
			v: [[0, 100], [0, -100], [200, -150], [200, 150]],
			c: 'y', C: 'w', l: 5,
			bm: 1
		})
		//FROM POL ->0, -100]] })
		w.D(800, 300).pol({
			v: [
				[[5, 100], [0, -100], [200, -150], [200, 150]],
				[[-50, 50], [-50, -100], [450, -50], [450, 50]]
			],
			c: 'b', C: 'X',
			bm: 1
		})
	}
	WORLDPAN = function () {
		W([1200, 600, 2400, 600], {g: 0})
		w.S(400, 300, 'r', 200, 100)
		w.S(800, 300, 'z', 100, 100)
		w.S(1200, 300, 'b', 300, 100)
		w.S(1600, 300, 'z', 100, 100)
		w.S(2000, 300, 'r', 200, 100)
		b = w.D(100, 100, 'b', 30).lV(-10, -20).rest(.2)
		co = w.tCo().B(b.tr())
		_.t(10, function (i) {
			co.B(w.D(100 + 30 * i, 100, 'r', 30).lV(10, 20).r(.2))
		})
		y = w.y(100, 100).rt(120).aD(100)
		w.pan('*')
	}
}
function trackeePanLeftRight() {
	w.tRightLeft = function () {
		var w = this, left
		$t(function () {
			if (!left) {
				w.tX(10, '+')
				if (w.tX() > 2000) {
					left = 1
				}
			}
			else {
				w.tX(10, '-')
				if (w.tX() < 400) {
					left = 0
				}
			}
		})
		return w
	}
	TRACKEE = function () {
		W([1200, 600, 2400, 600], {g: 10})
		w.S(400, 2500, 'r', 200, 100)
		w.S(800, 2300, 'z', 100, 100)
		w.S(1200, 2300, 'b', 300, 100)
		w.S(1600, 2300, 'z', 100, 100)
		w.S(2000, 2300, 'r', 200, 100)
		_.times(10, function (i) {
			w.D(100 + i * 100, 100, $r(), 35).den(.1)
		})
		y = w.ship(50, 50).mid()
		y2 = w.ship(100, 300).C('x').rot(180)
		//i thought i may want t for timer/ticker.. but time has no x and y !
		//move the stage by manipulating the trackee x,y
		//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
		w.tRightLeft()
		w.showOff()
		setTimeout(function () {
			setInterval(function changeT() {
				if (w.t == y2) {
					w.C('b');
					w.t = y
				} else {
					w.C('z');
					w.t = y2
				}
			}, 5000)
		}, 5000)
	}
	TRACKEE = TRK = function () {
		W()
		w.balls()
		y = w.ship(50, 50).mid()
		y2 = w.ship(100, 300).C('x').rot(180)
		//i thought i may want t for timer/ticker.. but time has no x and y !
		//move the stage by manipulating the trackee x,y
		//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
		w.tRightLeft()
		w.showOff()
		_.in(5, function () {
			_.ev(5, function changeT() {
				if (w.t == y2) {
					w.C('b');
					w.t = y
				}
				else {
					w.C('z');
					w.t = y2
				}
			})
		})
	}
}
