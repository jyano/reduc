BUF = function () {
	W(1000, 1000, 2000, 2000).G(0).C('z')
	w.glimpse()
	y = w.ship(1000, 1000).rot(33).lV(20, -20).buff({
		x: 600, y: 1000, w: 400, h: 400
	})
}
w.glimpse = function () {
	var w = this
	_.ev(4, function () {
		w.zoom(0)
		_.in(2, function () {
			w.zoom(1)
		})
	})
	return w
}
T9 = BUFCEN = function () {
	W(1000, 1000, 2000, 2000).G(0).C('z').glimpse()
	y = w.ship(1000, 1000).rot(33).lV(20, -20)
	w.trackBuffCen(y, {w: 400, h: 400})
}
T10 = SFB = STREETFIGHTERBUF = function () {
	W([1200, 600, 1400, 1200], {g: 300, t: 0}).P()
	w.S(700, 1000, 'r', 800, 20)
	w.S(500, 800, 'g', 200, 20)
	w.S(900, 600, 'x', 200, 20)
	p.XY(700, 600)
	p.buff({
		x: 700, y: 1000,
		w: 700, h: 600,
		mX: 1.5
	})
}
T11 = SRB = SLIDEROOMSBUF = function () {
	W([1200, 600, 2400, 1000], {g: 300}).P()
	p.buff({x: 1200, y: 700, mX: 8, w: 800, h: 500})
	_.in(function () {
		w.mark().dot(600, 300, '*').dot(1200, 600, '*')
	})
}
