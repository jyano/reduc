NOT = NOTRACKEE = function () {
	W({t: 0})
}
function trackeeCallback() {
	CB = TRACKEECB = function () {
		W([1200, 600, 2400, 1200], {g: 300}).balls()
		w.zoom('-')
		w.t = p = w.p(1175, 100) // no need to call track?
		_.ev(1, function () {
			w.trackee.cb = function () {
				w.zoom(w._zoom + .001)
			}
		})
	}
	CB = TRACKEECB = function () {
		W([1200, 600, 2400, 1200], {g: 300})
		_.t(10, function (i) {
			w.D(100 + i * 100, 100, $r(), 35).d(.1)
		})
		w.Z('-')
		p = w.p(1175, 100)
		w.t = p // no need to call track?
		_.ev(1, function () {
			w.t.cb = function () {
				w.Z(w.z + .001)
			}
		})
	}
}
function liveTrackeeChange() {
	CAMFOLLOW = CMF = function () {
		W(500, 500, 1600, 1000).G(0)
		b = w.y(400, 400).C('o').track()
//	a = w.y().C('b')
		_.evx(5, function () {
			if (w.follA) {
				b.track();
				w.follA = 0
			}
			else {
				a.track();
				w.follA = 1
			}
		})
	}
	CHANGETRACKEE = KEE = function () {
		W([600, 600, 2000, 600])
		//i thought i may want t for timer/ticker.. but time has no x and y !
		//move the stage by manipulating the trackee x,y
		//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
		//  y = w.ship(50,50 ).C('d').mid().track()
		y2 = w.y(100, 300).C('x')
		y = w.y(100, 300).C('u')
		_.ev(1, function () {
			if (w.t == y2) {
				w.C('z');
				w.t = y
			}
			else {
				w.C('w');
				w.t = y2
			}
		})
	}
	CHANGETRACKEE = KEE = function () {
		W([600, 600, 1200, 600])
		//i thought i may want t for timer/ticker.. but time has no x and y !
		//move the stage by manipulating the trackee x,y
		//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
		//  y = w.ship(50,50 ).C('d').mid().track()
		y2 = w.y(100, 300).C('x')
		y = w.y(100, 300).C('u')
		_.ev(1,
				function () {
					if (w.t == y2) {
						w.C('x');
						w.t = y
					}
					else {
						w.C('u');
						w.t = y2
					}
				})
	}
}