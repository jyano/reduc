function mario() {
	MIRROR = function () {
		W('->')
		p = w.p(100, 300).tr()
		w.Z(1.5)
		function left() {
			p.XY(1100, 300);
			w.xW().walls('->')
			b.dyn().C('b');
			r.dyn().C('r');
			g.dyn().C('g')
			b2.dyn().C('o')
			b3.dyn().C('y')
		}
		
		function right() {
			p.XY(100, 300);
			w.xW().walls('<->')
			b.stat().C('z');
			r.stat().C('z');
			g.stat().C('z')
			b2.stat().C('z')
			b3.stat().C('z')
		}
		
		T.t(function () {
			if (p.X() > 1200) {
				right()
			} else if (p.X() < 0) {
				left()
			}
		})
		b = w.D(400, 400, 'b', 150, 150)
		r = w.D(500, 400, 'r', 50, 300)
		g = w.D(400, 500, 'g', 120)
		b2 = w.D(250, 400, 'o', 80, 30)
		b3 = w.D(150, 500, 'y', 50)
		w.$$(function () {
			w.e(function (b) {
				b.dyn()
			})
			w.t_.kill()
			w.Z(.1)
		})
	}
	CHARSWITCH = ACO = SEN = function () {
		W([1200, 600, 3600, 800])
		w.Z(1.2)
		w.Elv(200, 100)
		//w.Elv(300)
		sen = w.S(1200, 400, 'w', [[2400, 200, '-']]).K('sen')
		aCo = w.aCo(-50, -150)
		aCo.do(sen)
		//<- sen.do(aCo) //  <- sen.cl(
		// function(f){if(!f.by(aCo)){aCo.B(f)}},
		// function(f){if(f.by(aCo)){aCo.xB(f)}
		// })
		w.P()
		p.track()
		// w.p(300, 400, '+').K('char')
		statMar = w.p(2600, 150).stat().K('mario')
		statBird = w.y(2350, 450, 2, '-').rt(90).stat().K('bird')
		statBird.cl('char', function () {
			p.kill()
			p = w.y(2350, 550, 2, '+').fR().rt(90).lD(2).K('char')
			w.Z(1.6)
		})
		statMar.cl('char', function () {
			p.kill()
			p = w.p(2400, 250).tr().K('char')
			w.Z(1.2)
		})
		//.tr()
		w.D(300, 100, 'r', 20);
		w.D(400, 100, 'r', 40);
		w.D(500, 100, 'r', 45);
		w.D(600, 100, 'r', 180);
		w.D(700, 100, 'r', 10)
		_.ev(2, function () {
			if (R()) {
				
				// tog()
			}
		})
		// Imagine that you have gusts of wind blowing sideways…
		// you can add your objects to a Contoller and have them pushed sideways…
		// then when the wind passes you could remove them from that controller.
		// now just add and remove bodies to the controller!!
		function tog() {
			$l('tog')
			// if(added){rm()} else {add()}
		}
		
		function add() {
			w.C('g');
			added = 1;
			co.B(b)
		}
		
		function rm() {
			w.C('r');
			added = 0;
			co.xB(b)
		}
		
		w.pJ(
				w.D(1200, 500, 'z', 60).K('ride'),
				w.S(1200, 500, 's', 40, 150).K('cart'))//.lm(-30, 60).speed(-100).motor(1).maxForce(1000)
				.lm(-30, 60).mt(-10)//.speed(-100).maxForce(1000)
		w.pJ(w.D(1400, 500, 'z', 110).K('ride'),
				w.S(1400, 500, 's', 40, 300).K('cart'))
				.lm(-30, 60).mt(10)//.speed(-100).maxForce(1000)
		w.pJ(
				w.D(1600, 500, 'z', 80).K('ride'),
				w.S(1600, 500, 's', 40, 250).K('cart')
		).lm(-30, 60).mt(-100)//.speed(-100).maxForce(1000)
		w.b(function (cx) {
			cx.w('cart', function () {
				w.e(function (b) {
					if (b.of('ride')) {
						b.I(0, -1000)
					}
				})
			})
		})
	}
	ICE = GRASS = HEADACHE = function () {
		W().P()
		// w.clouds(100,200)
		// w.clouds(400,400)
		w.rub(100, 100)
		w.grass(400, 100)
		w.ice(300, 300)
		w.brick(200, 400, 80, 20)
		w.brick(300, 200, 80, 20)
		//$.joystick()
		w.p(600, 200).r(4)
		w.p(600, 200).r(4)
	}
	TRAMP = WARP = IMP = function () {
		W().P()
		w.S(500, 600, 's', 30, 200)
		w.S(600, 600, 's', 30, 200)
		w.S(550, 550, 'z', 100, 20).K('warp')
		w.D(650, 580, 'd', 300, 80).K('tramp').r(5).d(10).aD(10).lD(10)
		p.warp = function () {
			this.XY(200, 100)
		}
		p.cl('warp', function () {
			p.warp()
		})
		p.cl('tramp', function () {
			p.I(0, -50000)
		})
	}
}
function jetJump() {
	JJJ = JETJUMP = function () {
		W([1200, 600, 1200, 1000], {g: 200}).P().Y()
		y.tr()
		// w.ice(800,280, 10000);
		// w.S(1200,30, 'r',600,4)
		// w.clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
		//w.s.XY(300, 150).rXY(300,150)
		//  T.t(function(){p.centerScale(1-( (p.X()- w.hH)/ w.hH)*.1)})
		//w.s.XY(300,150)
		//w.s.rX(600)
		//w.s.rY(-200)
		//w.Z(.5)
		w.ice(30, 450, 400)
		w.grass(850, 650, 400)
		w.grass(0, 800, 400)
		w.rubber(880, 950, 1000)
		/*
		 //w.s.XY(300, 150)//.rXY(300, 150)
		 w.grass(300,280,500)
		 w.ice(1300, 280, 1000)
		 w.clouds().clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
		
		 //w.s.XY(300, 150).rXY(300, 150)
		 w.clouds().clouds(1000,-200)
		 w.grass(300,280,500)
		 w.ice(800,280, 5000)
		 */
		//slide = w.rec(1200, 30, 1200,40, 'b').den(1).fric(.5).rest(.5)
	}
}
function thrust() {
	THRUST = DATA = MINI = function () {
		W({g: 10, W: 1000, H: 800})
		d = $.div('y', 1500, 40).A().abs(200, 200).pad(2)
		p = w.p(300, 200, 2, 'thrust')
		data = function (str) {
			if (U(str)) {
				str = 'data'
			}
			d.E($.h4(str))
		}
		data()
	}
} 