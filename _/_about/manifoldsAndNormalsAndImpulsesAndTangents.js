ONEWAY = function () {
	W([1200, 600, 1200, 2000], {}).stats()
			.P(600, 1800).ball()
	w.D(300, 100, 'y', 10)
	w.b(
			_.th(function () {
						w.D(300, 100, 'r', 5)
					},
					500
			)
	)
	p.tr()
	var b1, b2
	w.b(
			b = w.D(500, 300, 'w', 50),
			function () {
				if (b2) {
					b2 = null;
					b2.kill()
				}
				b1 = w.S(R(1000, 50), R(500, 50), 'y', 500).r(.8)
			})
	w.end(b,
			function () {
				if (b1) {
					b1 = null;
					b2.kill()
				}
				b2 = w.S(R(1000, 50), R(500, 50), 'x', 500).r(.8)
			})
	/*
	 plat(300, 300);plat(900, 600);plat(300, 900);plat(300, 1000);plat(1000, 1200);plat(500, 1400);
	 function plat(x,y){return w.S(x,y,'o', 500, 40).K('pf')}
	 pf = plat(900, 1700)
	
	 w.pre(function(cx){
	 //$!!! cx.w(b, 'b', fn)
	 cx.w(p, 'pf', function(pf){
	
	 if(isBel(p,y)){cx.en(0)}
	 })
	 //$ pre, if(cx.w('b'))
	 if(!cx.w('wall')){
	 // if(isBel(p,y)){cx.en(0)}
	 }}
	 )
	
	 */
}
POST = function () {
	W()//only breaks at high impulse
	//what works: w.post
	b = w.D(600, 300, 'r', 30).K('ball')
	//
	w.post(function (cx, I) {
		if (I.nX() > 200) {
			w.D(600, 300, 'r', 30)
		}   // $l('n:'+I.tX()+','+I.tY()+'|t:'+I.nX()+','+I.nY()) //second arg! //we can get the 'normal vector' of the contact btwn fixtures
	})
}
KING1 = function () {
	W({g: 12}).Y()
	w.S(200, 250, 'r', 400, 20);
	w.S(400, 250, 'w', 20, 40)
	_.t(10, function () {
		w.D(100, 100, 'z', 10).K('ball')
		w.D(200, 100, 'w', 10)
	})
	_.t(3, function () {
		w.me(900, 100, 5).fR().my('feet', function () {
			this.lV(-2, -10)
		})
		w.me(700, 100, 5).fR().my('feet', function () {
			this.lV(2, -10)
		})
	})
	y.wl(
			w.S(600, 200).K('vor').cir({s: 1, c: 'z', r: 140, o: .2, C: 'z', l: 20}),
			function () {
				w.e('ball', function (b) {
					b.tow(600, 200)
				})
			}
	)
}
NORM = function () {
	W({g: 0})
	//$ b.cl
	r = w.S(300, 300, 'x', 40)
	b = w.D(300, 300, 'b', 40)
	r.cl(function (f, cx) {
		var r1 = w.D(600, 300, 'x', 30).K('r')
		r1.I(cx.norm())
	})
	/*
	
	 b.cl(function(f,cx){
	 var b1= w.D(600,300,'b',30)
	 b1.I(cx.norm())
	
	 })
	 */
	// w.show(function(){return 'norm: '+ n.x.toFixed(1) + ', ' + n.y.toFixed(1)   })
}
ENERGY = function () {
	W({g: 1})
	b = w.D(500, 300, 'b', 50).d(1).K('b')
	r = w.D(700, 300, 'r', 80).d(1)
	w.b(function (cx) {
		cx.w('b', function (f) {
			if (cx.a().of('b')) {
				r.lV(
						cx.lV(cx.a())
				)
			}
			else {
				r.lV(cx.lV(cx.b()))
			}
		})
	})
	w.pop('me absorbs energy of tims collision!')
	$.in(4, function () {
		w.pop('gets actual v of bA')
	})
	$.in(8, function () {
		w.pop('at moment of col!')
	})
}
CXCN = function () {
	W() // w.chalk('so finding the actual contact point aint hard after all..')
	_.t(5, function () {
		w.D(200, 400, $r(), 120)
	})
	w.S(200, 500, 'r', 200, 50)
	w.b(function (cx) {
		var pt = cx.cen();
		w.dot(pt.x, pt.y)
	})
}
WWW = function () {
	W({g: 20}).Y() //w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
	w.plat(400, 500, 40, 20).K('pf')
	w.D(500, 200, 'z', 30).K('z')
	w.D(440, 100, 'y', 50).K('ball dot')
	w.S(1000, 200).cir({
		r: 500,
		c: 'w', C: 'o', l: 10, o: 0.2,
		s: 1
	}).K('vor')
	y.f().grp(-1)
	y.warp().wn('vor', function () {
		x.vY(-20)
	}, function () {
		x.vX(8)
	}).wl(function () {
		$l('aha')
	})
	b = w.D(100, 100, 'b', 40).grp(-1).warp()
	x = w.D(50, 100, 'x', 60, 60).grp(-1).warp()
	w.wn('z', function () {
		$l('beg')
	}, function () {
		$l('end')
	})
	w.cl('pf', 'ball', function () {
		w.D(300, 20, 'w', 40, 40).K('box')
	})
	w.cl('pf', 'box', function () {
		w.D(300, 20, 'b', 40).K('ball')
	})
	w.cl('dot', function (cx) {
		this.B().dot()
	})
	w.wl('ship', 'vor', function () {
		b.vY(-20)
	})
}
FREEZE = function () {
	W(10).C('z').Y()
	_.t(10, function () {
		w.D(100, 100, 'r', 20).K('b')
	})
	b = w.S(400, 300, 's', 20).K('b')
	y.cl('b', function (f) {
		var x, y, c
		x = f.B().X();
		y = f.B().Y()
		c = f.of('side') ? 'x' : 'y'
		w.dot(c, x, y) //   if(f!==y){  f.D().dot('r') } else {   f.D().dot('w')  }
	})
}
NORM = function () {
	w = b2d.W({g: 0}).startKilling()
	n = V()
	w.ball(300, 300).K('stat').stat()
	w.ball()
	w.box()
	w.beg(function (cx) {
		if (cx.with('stat')) {
			m = cx.man()
			n = m.m_normal
			setTimeout(function () {
				w.ball(600, 300, 10).I(n)
			}, 100)
		}
	})
	//  w.show(function(){return 'norm: '+ n.x.toFixed(1) + ', ' + n.y.toFixed(1)   })
}
NORMAL = function () {
	W({W: 1500, H: 1200, g: 0}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').bS('me')
	y.cir('y', 50)
	y.cl(w.S(300, 300, 'g', 50),
			function (f, cx) {
				w.D(600, 300, 'g', 20).K('g').I(-cx.nX(300), cx.nY(300))
			})
	y.cl(w.S(900, 300, 'o', 50), function (f, cx) {
		w.D(600, 300, 'o', 20).K('o')
				.I(-cx.nX(300), cx.nY(300))
	})
	y1 = w.D(300, 300, 'w', 10).fR().cn('thrust').bS('me').I(20, 20)
	y1.cir('y', 40).r(.8)
	Ball = _.mo(.5, function (n) {
		w.D(600, 200, 'o', 5).bit(0)
				.K('o').r(.9).I(n.x, n.y)
	})
	w.D(600, 300, 'o', 70).r(.8)
			.cl(function (f, cx) {
				if (cx.nX() || cx.nY()) {
					if (O(cx) && F(cx.n)) {
						Ball(cx.n(10000))
					}
				}
			})
	/*
	 //just copies lV
	 b=w.D(500,300,'b',50).d(1).K('b')
	 r = w.D(700,300,'r', 80).d(1)
	 w.b( function(cx){ cx.w('b', function(f){
	 if(cx.a().of('b')){r.lV(cx.lV(cx.a()))}
	 else {r.lV( cx.lV(cx.b()))}})})
	 */
//w.pop('me absorbs energy of tims collision!'); $.in(4, function(){w.pop('gets actual v of bA')}); $.in(8, function(){w.pop('at moment of col!')})
//normalImpulse is the magnitude of the correcting impulse applied to push the two bodies apart when they collide.
// This is in the direction of the contact normal.
	NL0 = function () {
		W({W: 900, H: 600, g: 0, w: '|'}).C('b')
		y = w.D(100, 100, 'w', 40)
		y.fR().cn('thrust').warp().bS('me').cir('g', 50)
		w.S(200, 300, 'g', 100).cl(function (f, cx) {
			w.D(600, 300, 'g', 20).I(-cx.nX(300),
					cx.nY(300))
		})
	}
	NL = function () {
		W({W: 1200, H: 600, g: 0, w: '|'}).C('b')
		y = w.D(100, 100, 'w', 40).fR().cn('thrust').warp().bS('me')
		y.cir('y', 50)
		y.cl(w.S(300, 300, 'g', 100), function (f, cx) {
			w.D(300, 300, 'g', 20).I(-cx.no(300).x, cx.no(300).y)
		})
		y.cl(w.S(900, 300, 'o', 100), function (f, cx) {
			w.D(900, 300, 'o', 20).I(-cx.no(300).x, cx.no(300).y)
		})
		y.cl(w.S(600, 300, 'w', 60, '-'), function (f, cx) {
			w.D(600, 300, 'z', 20, '-').K('w').I(cx.no(300).x, cx.no(300).y)
		})
	}
}
SICK = BBALL = MOONSOCCER = function () {
	W({W: 1500, H: 1200, g: 0, w: ''}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').bS('me')
	y.cir('y', 50)
	greenBall = w.S(300, 300, 'g', 50)
	y.cl(
			greenBall,
			function (f, cx) {
				var bullet = w.D(600, 300, 'g', 20)
				bullet.K('g').I(
						-cx.nX(300),
						cx.nY(300)
				)
			}
	)
	y.cl(
			w.S(900, 300, 'o', 50), function (f, cx) {
				w.D(600, 300, 'o', 20).K('o').I(-cx.nX(300), cx.nY(300))
			})
	y.warp()
}
//y1 = w.D(300, 300, 'w', 10).fR().cn('thrust').bS('me').I(20, 20)
//y1.cir('y', 40).r(.8)
/*	Ball = _.m(.5, function (n) {
 w.D(600, 200, 'o', 5).bit(0)
 .K('o').r(.9).I(n.x, n.y)
 })
 w.D(600, 300, 'o', 70).r(.8)
 .cl(function (f, cx) {
 if (cx.nX() || cx.nY()) {
 if (O(cx) && F(cx.n)) {
 Ball(cx.n(10000))
 }
 }
 })
 /*
 //just copies lV
 b=w.D(500,300,'b',50).d(1).K('b')
 r = w.D(700,300,'r', 80).d(1)
 w.b( function(cx){ cx.w('b', function(f){
 if(cx.a().of('b')){r.lV(cx.lV(cx.a()))}
 else {r.lV( cx.lV(cx.b()))}})})
 */
//w.pop('me absorbs energy of tims collision!'); _.in(4, function(){w.pop('gets actual v of bA')}); _.in(8, function(){w.pop('at moment of col!')})
//normalImpulse is the magnitude of the correcting impulse applied to push the two bodies apart when they collide.
// This is in the direction of the contact normal.
NL0 = function () {
	W({W: 900, H: 600, g: 0, w: '|'}).C('b')
	y = w.D(100, 100, 'w', 40)
	y.fR().cn('thrust').warp().bS('me')
	y.cir('g', 50)
	b = w.S(200, 300, 'g', 100)
	b.cl(function (f, cx) {
		var b1 = w.D(600, 300, 'g', 20)
		b1.I(-cx.nX(300), cx.nY(300))
	})
}
NL = function () {
	W({W: 1200, H: 600, g: 0, w: '|'}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').warp().bS('me')
	y.cir('y', 50)
	y.cl(w.S(300, 300, 'g', 100), function (f, cx) {
		w.D(300, 300, 'g', 20).I(-cx.no(300).x, cx.no(300).y)
	})
	y.cl(w.S(900, 300, 'o', 100), function (f, cx) {
		w.D(900, 300, 'o', 20).I(-cx.no(300).x, cx.no(300).y)
	})
	y.cl(w.S(600, 300, 'w', 60, '-'), function (f, cx) {
		w.D(600, 300, 'z', 20, '-').K('w').I(cx.no(300).x, cx.no(300).y)
	})
} 