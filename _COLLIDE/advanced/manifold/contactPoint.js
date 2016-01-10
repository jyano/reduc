CONTACTPOINT = function () {
	w = b2d.W()
	w.ball()
	w.ball()
	w.ball()
	w.ball()
	w.brick(200, 500, 200, 50)
	w.beg(function (cx) {
		w.dot(cx.point())
	})
	w.chalk('so finding the actual contact point aint hard after all..')
}
CXPT = function () {
	W().randRects().Y() //only works on NON-sensors?
	y.stat()
	w.y(100, 100)
	w.b(function (cx) {
		w.i.dot($r(), cx.pt().x, cx.pt().y)
	})
}
 
PAINTBALL = function () {
	W().randRects().Y() //only works on NON-sensors?
	y.stat()
	w.y(100, 100)
	w.b(function (cx) {
		w.i.dot($r(), cx.pt().x, cx.pt().y)
	})
}
BUB = SPRINK = BUBBLEPOP = function () {
	W({W: 2000, g: 0}).Y();
	_.t(10, function () {
		w.D(800, 200, 'r', 20).K('r')
	})
	w.S(50, 550, 'o', 200);  //w.S(800,300,'z', 80)
	b = w.S(300, 0, 'o', 200, 300).K('r')
	r = w.D(300, 300, 'r', 80).K('b')
	// dot both upper and lower bounds of AABB of both fixts
	w.cl(function (f, cx) {
		var ab, lb, up
		ab = f.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		ab = this.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		f.dot('g')
		this.dot('r')   //dot center of both fixts
		w.i.dot('y', M.lC(f.cen(), this.cen()))   //dot center of their centers
		cx.w(b, col)
		cx.w('b', 'r', col);
		cx.w(b, r, col);
		cx.w('b', r, col)
	})
	w.end(function (cx) {
		cx.w('b', col)
	})
	function col(f) {
		this.C($r())
	}
	
	//2do:draw line to connect these pts..
	// w.chalk('center of the two fixtures not necessarily  same as the cX pt. (can only represent col center if fSs are sSAME size... maybe halfway btwen this and the actual contact point would be nice')
}  //M.lC is not a function
BRUISE = CORNERBATTLE = function () {
	W([3000, 1000], {g: 0, t: 0})
	//<- var lP=cx.lP(b) //b.lP( cx.pX(), cx.pY() )
	w.p()
	w.p()
	w.p()
	w.p()
	w.p()
	b = w.D(300, 400, 'b', 200, 200).cn('thrust').K('sqr')
	b.bS('sun')
	r = w.D(300, 400, 'r', 200, 200).cn('thrust').K('sqr')
	b.SetBullet(true)
	w.b(function (cx) {
		cx.w(
				'sqr',
				function () {
					if (!cx.w('bruise')) {
						b.cir({c: 'z', r: 15, x: cx.lP(b).x, y: cx.lP(b).y})
								.K('bruise')
					}
				}
		)
	})
	CRAZY = function () {
		W({g: 0}).randRects();
		b = w.D(300, 400, 'r', 200, 200).cn('thrust')
		w.b(function (cx) {
			w.dot($r(), cx.p())
			lP = b.lP(cx.p())
			b.cir({c: 'z', r: 15, x: lP.x, y: lP.y})
		})
	}
}
//
COLLIDE = function () {
	w = b2d.W()
	w.platform(400, 500, 40, 20)
	w.ball(440, 100, 50).K('dot')
	w.coll('ball', 'platform', function () {
		w.box(300, 20)
	})
	w.coll('box', 'platform', function () {
		w.ball(300, 20)
	})
	w.coll('dot', function (cx) {
		cx.b().dot()
	})
	// w.collide('box', 'platform')
	//  cjs.tick(function(){if(w.flagged('boxplatform')){ $l('boxHit');w.box(300,40,20,20)}})
}
BEGIN = function () {
	w = b2d.W()
	w.ball()
	w.on('new',
			function () {
				w.ball(300, 100, 2)
			})
	w.beg(function () {
		w.flag('new')
	})
}
POINTY = function () {
	w = b2d.W()
	w.ball(300, 300, 100)
	w.ball(300, 300, 100)
	w.brick(600, 320)
	w.begin(function (cx) {
		markAABB(cx.A())
		markAABB(cx.B())
	})
	function markAABB(fixt) {
		ab = fixt.GetAABB()
		lb = ab.lowerBound
		up = ab.upperBound
		lx = lb.x * 30
		ly = lb.y * 30
		ux = up.x * 30
		uy = up.y * 30
		dx = ux - lx
		dy = uy - ly
		w.dot('b', ux, uy)
		w.dot('p', lx, ly)
	}
}
COLLCENTER = function () {
	w = b2d.W()
	ball = w.ball(300, 300, 200)
	brick = w.bumper(700, 320)
	w.beg(function (cx) {
		var fA = cx.A(), fB = cx.B()
		w.dot(fB.center())
		w.dot(fA.center())
		w.dot('b', cx.center())
	})
	w.chalk('here you can clearly see that the center of the two fixtures',
			'is not necessarily the same as the contact point,',
			'and can only represent collision center if fixtures are similar size.',
			'..perhaps halfway between this and the actual contact point would be nice')
}
CXPT = function () {
	$l('CXPT')
	W().randRects().Y() //only works on NON-sensors?
	y.stat()
	w.y(100, 100)
	w.b(function (cx) {
		w.i.dot(
				$r(),
				cx.pt().x,
				cx.pt().y
		)
	})
}
LCXPT = function () {
	W([3000, 1000], {g: 0, t: 0})
	//<- var lP=cx.lP(b) //b.lP( cx.pX(), cx.pY() )
	b = w.D(300, 400, 'b', 200, 200).cn('thrust').K('sqr')
	r = w.D(300, 400, 'r', 200, 200).cn('thrust').K('sqr')
	b.SetBullet(true)
	w.b(function (cx) {
		cx.w(
				'sqr',
				function () {
					if (!cx.w('bruise')) {
						b.cir({c: 'z', r: 15, x: cx.lP(b).x, y: cx.lP(b).y})
								.K('bruise')
					}
				}
		)
	})
	CRAZY = function () {
		W({g: 0}).randRects();
		b = w.D(300, 400, 'r', 200, 200).cn('thrust')
		w.b(function (cx) {
			w.dot($r(), cx.p())
			lP = b.lP(cx.p())
			b.cir({c: 'z', r: 15, x: lP.x, y: lP.y})
		})
	}
}
PAINTBALL = function () {
	W().randRects().Y() //only works on NON-sensors?
	y.stat()
	w.y(100, 100)
	w.b(function (cx) {
		w.i.dot($r(), cx.pt().x, cx.pt().y)
	})
}
BUB = SPRINK = BUBBLEPOP = function () {
	W({W: 2000, g: 0}).Y();
	_.t(10, function () {
		w.D(800, 200, 'r', 20).K('r')
	})
	w.S(50, 550, 'o', 200);  //w.S(800,300,'z', 80)
	b = w.S(300, 0, 'o', 200, 300).K('r')
	r = w.D(300, 300, 'r', 80).K('b')
	// dot both upper and lower bounds of AABB of both fixts
	w.cl(function (f, cx) {
		var ab, lb, up
		ab = f.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		ab = this.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		f.dot('g')
		this.dot('r')   //dot center of both fixts
		w.i.dot('y', M.lC(f.cen(), this.cen()))   //dot center of their centers
		cx.w(b, col)
		cx.w('b', 'r', col);
		cx.w(b, r, col);
		cx.w('b', r, col)
	})
	w.end(function (cx) {
		cx.w('b', col)
	})
	function col(f) {
		this.C($r())
	}
	
	//2do:draw line to connect these pts..
	// w.chalk('center of the two fixtures not necessarily  same as the cX pt. (can only represent col center if fSs are sSAME size... maybe halfway btwen this and the actual contact point would be nice')
}  //M.lC is not a function
BRUISE = CORNERBATTLE = function () {
	W([3000, 1000], {g: 0, t: 0})
	//<- var lP=cx.lP(b) //b.lP( cx.pX(), cx.pY() )
	w.p()
	w.p()
	w.p()
	w.p()
	w.p()
	b = w.D(300, 400, 'b', 200, 200).cn('thrust').K('sqr')
	b.bS('sun')
	r = w.D(300, 400, 'r', 200, 200).cn('thrust').K('sqr')
	b.SetBullet(true)
	w.b(function (cx) {
		cx.w(
				'sqr',
				function () {
					if (!cx.w('bruise')) {
						b.cir({c: 'z', r: 15, x: cx.lP(b).x, y: cx.lP(b).y})
								.K('bruise')
					}
				}
		)
	})
	CRAZY = function () {
		W({g: 0}).randRects();
		b = w.D(300, 400, 'r', 200, 200).cn('thrust')
		w.b(function (cx) {
			w.dot($r(), cx.p())
			lP = b.lP(cx.p())
			b.cir({c: 'z', r: 15, x: lP.x, y: lP.y})
		})
	}
}