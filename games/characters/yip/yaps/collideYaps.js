YELLOWSHIP = function () {
	var w = b2d.W({g: 4}).debug()
	var y = w.yShip(300, 400, 3).rot(90)
	var y1 = w.yShip(600, 400, 3).rot(90)
	var onInt = function () {
		y.I(0, -.7).rot(4, '+')
		y1.linVel(0, -3).rot(4, '+')
	}
	//  setInterval(onInt,500)
	var onTime = function () {
		y.I(0, -4)
		y1.I(4, 0)
		//  .I(0.-4)
	}
	setTimeout(onTime, 500)
}
YELLOWSHIPWATCH = function () {

//ok this is crazy cool.. but something is wrong.  something is not getting reset, because force gets bigger each time
	I(YELLOWSHIP, 1000)
}
TOURNEY = function () {
	var n = 0, x = 50, Y = 50
	w = b2d.W({g: 0})
			.startKilling()//.debug()
			.beg(function (cx) {
				if (cx.with('guyBul', 'bad')) {
					cx.a().K('destroy')
					cx.b().K('destroy')
				}
				if (cx.with('badBul', 'guy')) {
					cx.a().K('destroy')
					cx.b().K('destroy')
				}
			})
	y = w.yShip('blue', 100, 200, 6).angDamp(1).linDamp(1)
			.rest(0).fric(1).K('guy')
			.shootOnSpace('guyBul')
			.thrustControl()
	_.times(6, function () {
		window['y' + n++] = w.yShip(x += 50, Y += 50, 3).chug(5)
				.K('bad').shootOnInt(1000, 'badBul').rot(45)
	})
}
SPACEBALL = function () {
	w = b2d.W({g: 0})
			.startKilling().debug()
			.beg(function (cx) {
				if (cx.with('guyBul', 'bad')) {
					cx.a().K('destroy')
					cx.b().K('destroy')
				}
			})
	y = w.yShip('blue', 100, 200, 6).angDamp(1).linDamp(1)
			.rest(0).fric(1).K('guy')
			.shootOnInt(200)
			.thrustControl()
	//    b=  w.ball(200,200, 80).den(1)
	b = w.rect(200, 200, 150, 150).den(1)
}
WAR = function () {
	var n = 0, x = 50, Y = 50
	w = b2d.W({g: 0}).debug().startKilling().beg(function (cx) {
		if (cx.with('bul', 'bad')) {
			cx.a().K('destroy')
			cx.b().K('destroy')
		}
	})
	_.times(100, function () {
		window['y' + n++] = w.yShip(x += 4, Y += 2, 3).chug(5)
				.K('bad').shootOnInt(300, 'bul').rot(45)
	})
}
YELLOWSHIPWTF = function () {
	var w = b2d.W({g: 3}).debug()
	y = w.yShip(300, 400, 3)
	y.dir = function () {
		var v = this.GetWorldVector(
				V(
						Math.toRadians(0),
						Math.toRadians(90)
				)
		)
		v.x = Math.toDegrees(v.x)
		v.y = Math.toDegrees(v.y)
		return v
	}
	I(function () {
		var v = y.dir()
		$l(v)
		y.I(0, v.y / 100).rot(1, '+')
	}, 100)
}