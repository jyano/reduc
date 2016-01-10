TAG = function () {
	w = b2d.W({g: 0}).debug().fadeTitle('i like how the ball bounces')  //w.show(function(){ return y.getClasses() + ' (' + y.classCount() + ')'})
	y = w.ship(100, 100)
	_.times(10, function () {
		w.circ(600, 300, 40, 'b').rest(.8).linDamp(.1).addClass('blueBall')
	})
	w.with('blueBall', function (other) {
		var vel
		if (other.of('ship')) {
			w.each(function (b) {
						if (b.isStat() && b.hasClass('ball')) {
							b.dyn(true)
							b.C('b')
						}
					}
			)
		}
		if (other.of('bul')) {
			this.stat()
			this.body().C('p')
		}
	})
}
alt = function () {
	w.b0 = function (fn) {
		var w = this
		w.b(function (cx, f1) {
			var f = this
			_.in(0, function () {
				_.b(fn, f)(cx, f1)
			})
		})
		return w
	}
}
CX1 = function () {
	W()
	_.t(10, function () {
		w.ball(300, 400, 30).K('b')
		w.box(200, 400, 20, 20).K('x')
	})
	w.brick(700, 100, 90, 90, 20).K('s')
	w.b0(function (cx) {
		//cx.these('b','s', function(){this.B().stat()})
		cx.this('s', function (z) {
			var f = this, b = f.B()
			_.in(0, function () {
				b.X(40, '+')
			})
		})
		cx.this0('s0', function () {
			this.B().X(40, '+')
		})
		cx.of0('s1', function () {
			this.B().X(40, '-')
		})
	})
}
ZERO = CXW = CX0 = function () {
	W()
	_.t(10, function () {
		w.ball(300, 400, 30).K('b')
		w.box(200, 400, 20, 20).K('x')
	})
	w.brick(700, 100, 90, 90, 20).K('s')
	w.brick(750, 300, 100, 100, -20).K('s0')
	w.brick(700, 500, 100, 100, 40).K('s1')
	w.b(function (cx) {
		//cx.these('b','s', function(){this.B().stat()})
		cx.this('s', function (z) {
			var f = this, b = f.B()
			_.in(0, function () {
				b.X(40, '+')
			})
		})
		cx.this0('s0', function () {
			this.B().X(40, '+')
		})
		cx.of0('s1', function () {
			this.B().X(40, '-')
		})
	})
}
//
WCL = function () {
	W()
	w.box().K('x')
	w.ball().K('big')
	w.ball(300, 400, 20).K('little')
	w.cl('big', function (f, cx) {
		var b1 = this.B()
		var b2 = f.B()
		var x1 = b1.X()
		var x2 = b2.X()
		_.in(0, function () {
			$l('0hit')
			b2.X(x1)
			b1.X(x2)
		})
	})
	w.cl0('little', function (f, cx) {
		var b1 = this.B()
		var b2 = f.B()
		var x1 = b1.X()
		var x2 = b2.X()
		$l('0hit')
		b2.X(x1)
		b1.X(x2)
	})
}
WC2 = function () {
	W()
	w.box(100, 100, 200).K('left')
	b = w.ball(500, 500)
	right = w.box(400, 100, 200)
	rightF = right.f()
	w.cl0('left', 'ball', function (f, cx) {
		$l('left')
		this.B().stat()
		f.B().kill()
	})
	w.cl0(right, 'ball', function (f, cx) {
		$l('right')
		this.B().kill()
		f.B().stat()
	})
	w.cl0(rightF, b, function (f, cx) {
		$l('rightF')
		w.box(100, 100, 200).K('left')
	})
}
FBG = function () {
	W().G(20)
	b = w.D(300, 400).stat()
	b.cF(100)
	f = b.cF(10, 110, 0).re(2)
	f1 = b.cF(20, -110, 0).re(1)
	f2 = b.cF(40, 0, 110).re(.6)
	f3 = b.cF(60, 0, -110).re(.3)
	_.in(1, function () {
		b.dyn().aV(2).lV(20, -20)
	})
	y = w.Y().K('y')
	f3.cl('y', function () {
		b.stat()
	})
	f2.cl(y, function () {
		b.dyn()
	})
}
