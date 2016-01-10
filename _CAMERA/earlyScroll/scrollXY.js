function justScrollX(){
	b.followX = function (x, y) {
		var b = this, w = b.W()
		$t(function () {
			w.st.X(x - b.X())
		});
		return b
	}
	b2d.levelScrollX = function () {
		W({W: 600, H: 300, g: 400, w: 0})
				.st.XY(300, 150).rXY(300, 150)
		p = w.playa().followX(600, 400)
	}
	EXPLORE = SCROLLX = GROUNDSPRITES = GSP = function () {
		b2d.levelScrollX()
		w.db()
		w.st.chalk('gravity: 1000     0r,0f   0.4r,0.4f   0.9r,1f', 'right: 0.5r,0.5f     player: 1d,23m,0.2r,0.2f')
		w.ice(30, 250, 400)
		w.grass(450, 250, 400)
		w.grass(500, 100, 4000)
		w.rubber(880, 250, 40000)
		w.rectStat(100, 270, 200, 30, 'w').re(0).fr(0) //ice
		w.rectStat(325, 270, 230, 30, 'g').re(.3).fr(.3)
		w.rectStat(550, 270, 200, 30, 'r').re(.7).fr(.3) //rubber
	}
	RAMPS = function () {
		b2d.levelScrollX();
		w.db()
		w.ramps()
		_.ev(3, function () {
			w.circ(50, 50, 30, 'g').re(.7).de(1)
					.fric(.5).I(200, 100)
		})
	}}
b.diff = function (x, y) {
	//alert('diff')
	var b = this
	x -= b.X()
	y -= b.Y()
	return {x: x, y: y}
}
b.cam = function (x, y) {
	//alert('cam')
	var b = this
	b.W().st.XY(b.diff(x, y))
	return b
}
b.follow = function (x, y) {
	//alert('follow')
	var b = this
	$t(function () {
		if (O(b.sprite)) {
			b.cam(x, y)
		}
	})
	return b
}
b2d.levelScroll = function () {
	//alert('levelScroll')
	b2d.level()
	w.s.XY(300, 150).rXY(300, 150)
	p.follow(600, 400)
	w.db()
}
SCROLLINGLEVEL = SLL = function () {
	b2d.levelScroll()
	p.Y(0)
	w.grass(300, 280, 500)
	w.ice(1300, 280, 1000)
	w.clouds().clouds(500, -200).clouds(1000, -200).clouds(-500, -200)
	slide = w.rect(900, 30, 1200, 40, 'blue').de(1).fr(.5).re(.5)
}