LVW = function () {
	W([2000, 1500, 2000, 1500]).G(200).C('b');
	var b1, b2
	// y and remote control fireball
	var y = w.y(300, 100, '+')
	farMoon = w.D(600, 100, 'y', 150).K('b').r(1.2)
			.lV(200, 0).cn('thrust').fR()
	nearMoon = w.D(400, 200, 'y', 100)
	$t(function () {
		var lV = y.lVW(y.X(), y.Y()).mult(20)
		nearMoon.lV(lV.x, lV.y)
	})
	p = w.p(900, 400).cn('jump')
	p.cl(_.mo(function () {
		w.D(300, 100, 'r', 5)
	}))
	sun = r1 = w.S(600, 300, 'r', 30, '-').K('r').bS('sun')
	sun.cl(function (f, cx) {
		var pt = cx.cen(), v1 = b.lVW(pt), v2 = r1.lVW(pt)
		w.D(630, 350, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)
	})
}
VEL = function () {
	w = b2d.W({g: 1})
	w.ball(500, 300, 10).K('tim').den(1)
	me = w.ball(700, 300, 80).K('me').den(1)
	w.beg(function (cx) {
		cx.with('tim', function (other, cx) {
			if (cx.a().is('tim')) {
				me.linVel(cx.vA())
			}
			else {
				me.linVel(cx.vB())
			}
		})
		//this gets th actual velocity of body A at moment of collision !!!!!!!
		// HOLY SHIT!!! me absorbs enervy of tim's collision !!!!!!
	})
}
VEL1 = function () {
	b2d.W({g: 2})
	b = w.ball(100, 100).den(1)
	b.poly(20, 100).den(1)
	b2 = w.ball(400, 400).den(1)
	b3 = w.ball(100, 100, 10)
	cjs.tick(function () {
		v = b.linVelWor(b)
		b2.linVel(v.div(10))
		//$l(b.linVel())
		//  v = b3.linVel()
		//  vw = b3.linVelWor()
		//   vl = b3.GetLinearVelocityFromLocalPoint()
		//$l('vel: ' + v.x)
		//$l('velW: ' + vw.x)
		// $l('velL: ' + vl.x)
	})
}
CONTACTS = function () {
	makeWorld()
	var centerFx = b2d.circ(80).K('center')
	w.dyn(500, 300, [
		centerFx,
		b2d.poly(60, 90, 0, 40, 10).sensor(true).K('sensor1')
	]).angVel(100)
	w.dyn(700, 300, [
		centerFx,
		b2d.circ(100).sensor(true).K('sensor2')
	]).angVel(100)
	w.coll('sensor1', 'sensor2',
			function () {
				w.ball(100, 100, 100)
			})  //w.begin(function(cx){if(cx.with('sensor1','sensor2')){w.flag('new')}}) //w.on('new', function(){w.ball()})
}
BCOL2 = function () {
	w = b2d.W().startKilling()
	y = w.ship()
	_.times(10, function () {
		w.ball(100, 100, 20).K('ball')
	})
	b = w.ball(400, 300, 20).K('ball').stat()
	y.coll('ball', function (b) {
		$l('coll with ball')
		y.col2(function (a) {
			if (a != b) {
				a.B().dot()
			}
		})
	})
	// cjs.tick(function(){ y.col2( function(a){    a.B().setDestroy()   })  })
}
THROTTLE = function () {
	w = b2d.W()
	ball = w.ball(300, 300, 100)
	brick = w.brick(300, 500)
	time = 0
	setInterval(function () {
		time++
	}, 1000)
	cjs.tick(function () {
		if (w.flagged('moveBrick')) {
			brick.X(20, '+')
		}
	})
	lastTime = 0
	change = 0
	w.begin(function (con) {
		if (con.with('brick')) {
			if (lastTime != time) {
				lastTime = time;
				w.flag('moveBrick')
			}
		}
	})
}
WORLDVEL = function () {
	w = wor({
		mJ: false,
		g: 0
	})
	b = w.ball(300, 300, 150).den(1)
	b2 = w.ball(300, 300, 10)
	w.rev(b, b2
	)
	p1 = V(300, 300)
	p2 = V(360, 360)
	p3 = V(450, 450)
	w.dot(p1)
	w.dot(p2)
	w.dot(p3)
	//  b.ApplyTorque(10)
	//  b.linVel(.2,0)
	w.click(function (x, y) {
		v = b.linVelWor(x, y)
		$l(v.x + ' ' + v.y)
	})
	b.angVel(1)
}
LVW = function () {
	W([2000, 1500, 2000, 1500]).G(200).C('b');
	var b1, b2
	// y and remote control fireball
	var y = w.y(300, 100, '+')
	farMoon = w.D(600, 100, 'y', 150).K('b').r(1.2).lV(200, 0).cn('thrust').fR()
	nearMoon = w.D(400, 200, 'y', 100)
	T.t(function () {
		var lV = y.lVW(y.X(), y.Y()).mult(20)
		nearMoon.lV(lV.x, lV.y)
	})
	p = w.p(900, 400).cn('jump').cl(_.mo(function () {
		w.D(300, 100, 'r', 5)
	}))
	sun = r1 = w.S(600, 300, 'r', 30, '-').K('r').bS('sun')
	sun.cl(function (f, cx) {
		var pt = cx.cen(), v1 = b.lVW(pt), v2 = r1.lVW(pt)
		w.D(630, 350, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)
	})
} 