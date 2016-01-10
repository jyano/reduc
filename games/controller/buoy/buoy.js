function buoy(){
	BCO = function () {
		W([1200, 1200], {g: 50, w: 'U'})
		sen = w.S(1200, 300, 'o', [[2400, 200, '-']]).K('sen')
		aCo = w.aCo(0, -50)
		aCo.do(sen)    //<- sen.do(aCo) //  <- sen.cl(function(f){if(!f.by(aCo)){aCo.B(f)}}, function(f){if(f.by(aCo)){aCo.xB(f)}})
		y = w.y(400, 40).fR().rt(90).lD(2).tr()
		w.D(300, 100, 'r', 20);
		w.D(400, 100, 'r', 40);
		w.D(500, 100, 'r', 45);
		w.D(600, 100, 'r', 80);
		w.D(700, 100, 'r', 10)
		w.me().XY(700, -400) //.r(5).d(2)
		w.S(300, 900, 'r', 20, 360);
		w.S(890, 900, 'r', 20, 360)
		w.S(600, 900, 'b', [[550, 340, '-']])
				.do(
				co = w.bCo()
		)
		// y = w.y(400, 40).fR().rt(90).lD(2).tr()
		w.D(500, 100, 'r', 20);
		w.D(400, 100, 'r', 40);
		w.D(500, 100, 'r', 45);
		w.D(600, 100, 'r', 80);
		w.D(700, 100, 'r', 10)
		_.in(8, function () {
			w.addHundBalls()
		})
		_.in(24, function () {
			w.e(function (b) {
				b.dyn()
			})
		})
	}
	ISTOUCHING = function () {
		W().Y()
		co = w.bCo()  //(0,-1,5,2).os(-6).d(2)
		sen = w.S(320, 245, 'z')
		sen.rec({s: 1, w: 880, h: 170, c: 'o', C: 'o'})
		w.eT(function (b) {
			var cx
			// each tick.. for every body ...
			// if that body has a controller.. remove the controller and turn that body orange
			if (b.co()) {
				co.xB(b);
				b.C('o')
			}
			else {
				for (var c = b.cx(); c; c = c.next) {
					cx = c.contact;
					bodB = cx.b();
					if (cx.IsTouching()) {
						co.B(bodB);
						bodB.C('X')
					}
				}
			}
		})
		_.ev(5, function () {
			w.D(300, 40, 'o', 18).C('o')
		})
		_.in(1, function () {
			i = y.sp()
			i.K('j')
			w.C($r())
			k = i._K
		})
	}
	BCO1 = function () {
		W({g: 200})
		p = w.p(500, 200)
		w.S(320, 540, 'g', 320, 20)
		w.S(170, 430, 'g', 20, 200)
		w.S(470, 430, 'g', 20, 200)
		co = w.bCo(0, -1, 5, 2).os(-6).d(2)
		sen = w.S(320, 445, 'z').K('sen');
		sen.rec({s: 1, w: 280, h: 170, c: 'b', o: .8})// <-nice opacity example
		sen.SetBullet(true)
		fn = function (f) {
			$l('sen beg')
			if (!f.B().co()) {
				co.B(f.B())
				f.B().C("o")
			}
		}
		w.b(function (cx) {
			cx.w('sen', _.once(fn))
		})
		//T.t(function(){  co.xB(p)  })
		sen.end(p, function () {
			$l('sen end')
			//co.xB( p )
			p.C('r')
			if (p.co()) {
				p.xCo(co)
			}
		})
		_.ev(1, function () {
			w.D(300, 40, 'r', 8).d(5)
		})
		//  co.B(p)
		T.t(function () {
			co.xB(p)
		})
		// w.end('right', function(){$l('end!')})
		// w.r_.end( function(){$l('end!')})
	}
	BCO2 = function () {
		W(200)
		w.S(320, 480, 'r', 640, 20)
		w.S(320, 340, 'b', 320, 20)
		w.S(170, 230, 'g', 20, 200)
		w.S(470, 230, 'o', 20, 200)
		sen = w.S(320, 245, 'y', 280, 170, '-').K('sen')
		p = w.p(300, 100)//.d(.2).cn('jump')
		w.addHundBalls()
		co = w.bCo()
		sen.do(co)
		/*
		 co.normal.Set(0,-1)
		 co.offset=-20
		 co.useDensity=true
		 co.density=2.0
		 co.linearDrag=5
		 co.angularDrag=2
		 */
		/*
		 T.t(function(){
		
		 w.e(function(b){if(b.iD()){ //if the body is not static
		 // if ( b.co() )  {b.xCo(co) ; $l('has co!!!!! (no doesnt)') } // if the body has a co, get rid of it
		
		 for (var cx = b.cx(); cx;cx=cx.next) {//.next?
		 cx.contact.w('sen',
		 function(f){
		 $l('add0')
		 if(!f.B().co()){
		 $l('add')
		 co.B(f)
		 }})
		 }
		 }})
		 })*/
	}
	BCO3 = function () {
		W({
			w: 'U',
			g: 200
		});
		co = w.bCo()
		//co.os(-360)//.d(2)//w.bCo(0,-1,5,2)
		co.useDensity = false
		// co.density = .02
		sen = w.S(620, 445, 'z').K('sen');
		sen.rec({s: 1, w: 1680, h: 270, c: 'b', o: .8});
		sen.SetBullet(true)
		sen.do(co)
		_.t(5, function () {
			w.D(300, 40, 'r', 48).d(1)
//            .aD(100).lD(.2)
		})
		w.D(300, 40, 'b', 10).d(100)
		w.D(300, 40, 'b', 24).d(.1)
		p = w.p(200, -1000).d(.9)
	}
	BCO4 = function () {
		W({g: 100}).Y();
		y.XY(100, 500)
		s1 = w.sensorBucket(320, 300, 's1')
		s2 = w.sensorBucket(700, 300, 's2')
		/* w.D(150, 100, 'w', 20)
		 w.D(200, 100, 'd', 20)
		 w.D(250, 100, 'r', 20)
		 w.D(350, 100, 'g', 20)
		 w.D(400, 100, 'o', 20)
		 w.D(450, 100, 'w', 20)*/
		co = w.aCo(500, -50)
		co1 = w.aCo(-500, -50)
		w.addHundBalls()
		//   w.e('ball', function(b){co.B(b) })
		_.ev(function () {
			aCo.B(
					w.D(300, 100, 'y', 10),
					w.D(760, 100, 'b', 10)
			)
		})
		_.ev(5, function () {
			y.bc('-')
		})
		//default is to kill all in its 'controller-space' (except itself)
		w.b(function (cx) {
			cx.w('s1',
					function (f) {
						f.xCo();
						co.B(f.B())
					})
			cx.w('s2',
					function (f) {
						f.xCo();
						co1.B(f.B())
					})
		})
	}
	SENSORBOXES = SNB = function () {
		W({g: 300})
//gives u a controller-edge, which is a body-controller pair
		//it is linked both to other bodies for that controller..
		//and to other controllers of that body!!!
		//lets focus on other bodies first....
		//w.bindCo=function(){var g=G(arguments);
		// return this.b(function(cx){
		// cx.bindCo.apply(cx, g)}
		// )}
		w.bindCo('co1', 'co2')
		s1 = w.sensorBucket(320, 300, 'co1')
		s2 = w.sensorBucket(700, 300, 'co2')
		co1 = w.aCo(-500, -50)
		co2 = w.aCo(50, -500)
		w.D(150, 100, 'w', 30).d(1)
		w.D(200, 100, 'd', 30).d(1)
		w.D(250, 100, 'r', 30).d(1)
		w.D(350, 100, 'g', 30).d(1)
		w.D(400, 100, 'o', 30).d(1)
		w.D(450, 100, 'w', 30).d(1)
		w.end(function (cx) {
			cx.w('co2', function () {
				this.xCo()
			})
		})
		//w.end( 'co2', function(){ this.xCo() } )  // w.end( 'co2', 'xCo'  )//<-
		_.in(.5, function () {
			y = w.ship(300, 50)
			_.ev(1, function () {
				w.D(300, 100, 'y', 10)
				w.D(760, 100, 'b', 10)
				y.bc('-')
			})
		})
	}
	BCO5 = function () {
		W().Y();
		y.XY(100, 500)
		p = w.p(300, 100)
		s1 = w.sensorBucket(320, 300, 's1')
		s2 = w.sensorBucket(700, 300, 's2')
		/* w.D(150, 100, 'w', 20)
		 w.D(200, 100, 'd', 20)
		 w.D(250, 100, 'r', 20)
		 w.D(350, 100, 'g', 20)
		 w.D(400, 100, 'o', 20)
		 w.D(450, 100, 'w', 20)*/
		co = w.aCo(500, -1500)
		co1 = w.aCo(-500, -1500)
		//  w.addHundBalls()
		_.ev(5, function () {
			y.bc(function (b) {
				b.kill()
			})
		})
		s1.do(co)
		co1.do(s2)
		//   w.e('ball', function(b){co.B(b) })
		/*
		 _.ev(function(){
		
		 aCo.B(   w.D(300,100, 'y', 10),  w.D(760,100, 'b', 10)
		 )
		 })
		
		
		
		 //default is to kill all in its 'controller-space' (except itself)
		
		
		 w.b(function(cx){
		
		 cx.w('s1',
		 function(f){f.xCo();
		 co.B(f.B())
		 })
		
		 cx.w('s2',
		 function(f){f.xCo(); co1.B(f.B())})
		
		
		 })
		
		 */
	}
	BCO6 = function () {
		W({g: 0}).C('g')
		p = w.p(200, 200)
		y = w.y(300, 50).lD(5)
		co1 = w.aCo(0, -50)
		co2 = w.aCo(0, 50)
		s1 = w.D(250, 300, 'o', 600, 600, '-').K('co1')
		s2 = w.D(950, 300, 'o', 600, 600, '-').K('co2')
		w.bindCo('co1', 'co2')
		_.t(20, function () {
			w.D(R(1200, 100),
					R(600, 100), $r(), 30)
		})
		/*
		
		
		 w.end(function (cx) {
		 cx.w('co1',
		 function(){this.xCo()})
		 cx.w('co2',
		 function(){this.xCo()})
		 })
		 */
	}
	BCOWALL = function () {
		W([1200, 600, 2400, 600], {g: 50})
		x = w.S(600, 300, 'w', 280, 370, '-').K('sen').al(.4)
		p = w.p(100, 100)
		yy = y = w.y()
				.lD(4).aD(3).tr()
				.d(5)
		co = w.bCo()   //(0,-.5,5,2)//.os(-6).den(2)
		x.do(co)
		p.aD(3)
		/* w.tE(function(b){
		 if(!b.iD()){return}
		 b.co('-')
		 b.cx(function(f, cx){
		 p.xCo(co)
		 if(f.of('sen')){ co.B(this)}
		 })
		 })
		 */
	}
	FLOOD = WEIRD = function () {
		W({g: 0}).C('g')
		p = w.p(200, 200)
		y = w.y(300, 50).lD(5)
		co1 = w.aCo(0, -50)
		co2 = w.aCo(0, 50)
		s1 = w.D(250, 300, 'o', 600, 600, '-').K('co1')
		s2 = w.D(950, 300, 'o', 600, 600, '-').K('co2')
		w.bindCo('co1', 'co2')
		// _.t(20,function(){w.D(R(1200,100), R(600,100), $r(), 30)})
		/*
		
		
		 w.end(function (cx) {
		 cx.w('co1',
		 function(){this.xCo()})
		 cx.w('co2',
		 function(){this.xCo()})
		 })
		 */
	}
	FB = FISHBOWLS = function () {
		W({g: 300})
//gives u a controller-edge, which is a body-controller pair
		//it is linked both to other bodies for that controller..
		//and to other controllers of that body!!!
		//lets focus on other bodies first....
		//w.bindCo=function(){var g=G(arguments);
		// return this.b(function(cx){
		// cx.bindCo.apply(cx, g)}
		// )}
		w.bindCo('co1', 'co2')
		s1 = w.sensorBucket(320, 300, 'co1')
		s2 = w.sensorBucket(700, 300, 'co2')
		co1 = w.aCo(-500, -50)
		co2 = w.aCo(50, -500)
		w.D(150, 100, 'w', 30).d(1)
		w.D(200, 100, 'd', 30).d(1)
		w.D(250, 100, 'r', 30).d(1)
		w.D(350, 100, 'g', 30).d(1)
		w.D(400, 100, 'o', 30).d(1)
		w.D(450, 100, 'w', 30).d(1)
		w.end(function (cx) {
			cx.w('co2', function () {
				this.xCo()
			})
		})
		//w.end( 'co2', function(){ this.xCo() } )  // w.end( 'co2', 'xCo'  )//<-
		_.in(.5, function () {
			y = w.ship(300, 50)
			_.ev(1, function () {
				w.D(300, 100, 'y', 10)
				w.D(760, 100, 'b', 10)
				y.bc('-')
			})
		})
	}
	FBL2 = function () {
		W().Y();
		y.XY(100, 500)
		p = w.p(300, 100)
		s1 = w.sensorBucket(320, 300, 's1')
		s2 = w.sensorBucket(700, 300, 's2')
		/* w.D(150, 100, 'w', 20)
		 w.D(200, 100, 'd', 20)
		 w.D(250, 100, 'r', 20)
		 w.D(350, 100, 'g', 20)
		 w.D(400, 100, 'o', 20)
		 w.D(450, 100, 'w', 20)*/
		co = w.aCo(500, -1500)
		co1 = w.aCo(-500, -1500)
		//  w.addHundBalls()
		_.ev(5, function () {
			y.bc(function (b) {
				b.kill()
			})
		})
		s1.do(co)
		co1.do(s2)
		//   w.e('ball', function(b){co.B(b) })
		/*
		 _.ev(function(){
		
		 aCo.B(   w.D(300,100, 'y', 10),  w.D(760,100, 'b', 10)
		 )
		 })
		
		
		
		 //default is to kill all in its 'controller-space' (except itself)
		
		
		 w.b(function(cx){
		
		 cx.w('s1',
		 function(f){f.xCo();
		 co.B(f.B())
		 })
		
		 cx.w('s2',
		 function(f){f.xCo(); co1.B(f.B())})
		
		
		 })
		
		 */
	}
	ANTIGTANK = BCO = function () {
		W([1200, 1200], {g: 50, w: 'U'})
		sen = w.S(1200, 300, 'o', [[2400, 200, '-']]).K('sen')
		aCo = w.aCo(0, -50)
		aCo.do(sen)    //<- sen.do(aCo) //  <- sen.cl(function(f){if(!f.by(aCo)){aCo.B(f)}}, function(f){if(f.by(aCo)){aCo.xB(f)}})
		y = w.y(400, 40).fR().rt(90).lD(2).tr()
		w.D(300, 100, 'r', 20);
		w.D(400, 100, 'r', 40);
		w.D(500, 100, 'r', 45);
		w.D(600, 100, 'r', 80);
		w.D(700, 100, 'r', 10)
		w.me().XY(700, -400) //.r(5).d(2)
		w.S(300, 900, 'r', 20, 360);
		w.S(890, 900, 'r', 20, 360)
		w.S(600, 900, 'b', [[550, 340, '-']])
				.do(
				co = w.bCo()
		)
		// y = w.y(400, 40).fR().rt(90).lD(2).tr()
		w.D(500, 100, 'r', 20);
		w.D(400, 100, 'r', 40);
		w.D(500, 100, 'r', 45);
		w.D(600, 100, 'r', 80);
		w.D(700, 100, 'r', 10)
		_.in(8, function () {
			w.addHundBalls()
		})
		_.in(24, function () {
			w.e(function (b) {
				b.dyn()
			})
		})
	}
	VANISH = function () {
		W().Y()
		co = w.bCo()  //(0,-1,5,2).os(-6).d(2)
		sen = w.S(320, 245, 'z')
		sen.rec({s: 1, w: 880, h: 170, c: 'o', C: 'o'})
		w.eT(function (b) {
			var cx
			// each tick.. for every body ...
			// if that body has a controller.. remove the controller and turn that body orange
			if (b.co()) {
				co.xB(b);
				b.C('o')
			}
			else {
				for (var c = b.cx(); c; c = c.next) {
					cx = c.contact;
					bodB = cx.b();
					if (cx.IsTouching()) {
						co.B(bodB);
						bodB.C('X')
					}
				}
			}
		})
		_.ev(5, function () {
			w.D(300, 40, 'o', 18).C('o')
		})
		_.in(1, function () {
			i = y.sp()
			i.K('j')
			w.C($r())
			k = i._K
		})
	}
	BREW = function () {
		W({g: 200})
		p = w.p(500, 200)
		w.y()
		w.S(320, 540, 'g', 320, 20)
		w.S(170, 430, 'g', 20, 200)
		w.S(470, 430, 'g', 20, 200)
		co = w.bCo(0, -1, 5, 2).os(-6).d(2)
		sen = w.S(320, 445, 'z').K('sen');
		sen.rec({s: 1, w: 280, h: 170, c: 'b', o: .8})// <-nice opacity example
		sen.SetBullet(true)
		fn = function (f) {
			$l('sen beg')
			if (!f.B().co()) {
				co.B(f.B())
				f.B().C("o")
			}
		}
		w.b(function (cx) {
			cx.w('sen', _.once(fn))
		})
		//T.t(function(){  co.xB(p)  })
		sen.end(p, function () {
			$l('sen end')
			//co.xB( p )
			p.C('r')
			if (p.co()) {
				p.xCo(co)
			}
		})
		_.ev(1, function () {
			w.D(300, 40, 'r', 8).d(5)
		})
		//  co.B(p)
		T.t(function () {
			co.xB(p)
		})
		// w.end('right', function(){$l('end!')})
		// w.r_.end( function(){$l('end!')})
	}
	POPCORN = FLOAT = function () {
		W(200)
		w.S(320, 480, 'r', 640, 20)
		w.S(320, 340, 'b', 320, 20)
		w.S(170, 230, 'g', 20, 200)
		w.S(470, 230, 'o', 20, 200)
		sen = w.S(320, 245, 'y', 280, 170, '-').K('sen')
		p = w.p(300, 100)//.d(.2).cn('jump')
		w.addHundBalls()
		co = w.bCo()
		sen.do(co)
		/*
		 co.normal.Set(0,-1)
		 co.offset=-20
		 co.useDensity=true
		 co.density=2.0
		 co.linearDrag=5
		 co.angularDrag=2
		 */
		/*
		 T.t(function(){
		
		 w.e(function(b){if(b.iD()){ //if the body is not static
		 // if ( b.co() )  {b.xCo(co) ; $l('has co!!!!! (no doesnt)') } // if the body has a co, get rid of it
		
		 for (var cx = b.cx(); cx;cx=cx.next) {//.next?
		 cx.contact.w('sen',
		 function(f){
		 $l('add0')
		 if(!f.B().co()){
		 $l('add')
		 co.B(f)
		 }})
		 }
		 }})
		 })*/
	}
	FUNNYPOOL = function () {
		W({
			w: 'U',
			g: 200
		});
		co = w.bCo()
		//co.os(-360)//.d(2)//w.bCo(0,-1,5,2)
		co.useDensity = false
		// co.density = .02
		sen = w.S(620, 445, 'z').K('sen');
		sen.rec({s: 1, w: 1680, h: 270, c: 'b', o: .8});
		sen.SetBullet(true)
		sen.do(co)
		_.t(5, function () {
			w.D(300, 40, 'r', 48).d(1)
//            .aD(100).lD(.2)
		})
		w.D(300, 40, 'b', 10).d(100)
		w.D(300, 40, 'b', 24).d(.1)
		p = w.p(200, -1000).d(.9)
	}
	BO = BOO = BOUNCEOUT = function () {
		W({w: 'r2', g: 0}).C('e')
//.pen('blue has constForce(1,0)  red has constAcc(1,0)')
		//aCo=w.aCo(1,0).B(w.D(100,300,'x', 20 ).d(1), w.D(100,400, 'x',40 ).d(1))
		//w.aCo(0,1).B(w.D(300,100, 'x', 20).d(1), w.D(400,100, 'x', 40).d(1))
		w.p(100, 100)
		fCo = w.fCo(2, 0).B(
				w.D(100, 100, 'b', 60).d(1).lD(10),
				b = w.D(100, 200, 'b', 40).d(1).lD(10),
				b = w.D(100, 200, 'b', 100).d(1).lD(10))
		w.fCo(0, 2).B(
				w.D(100, 100, 'g', 60).d(1).lD(10),
				w.D(200, 100, 'g', 40).d(1).lD(10),
				w.D(200, 100, 'g', 100).d(1).lD(10))
		w.$$(function () {
			w.C('d')
			w.e(function (b) {
				b.xCo()
			})
		})
	}
	w.buck = w.sensorBucket = function (x, y, k) {
		x = N(x, 320)
		y = N(y, 245)
		k = k || 'sensorBucket buck'
		this.S(x - 150, y - 15, 'r', 20, 200)
		this.S(x + 150, y - 15, 'r', 20, 200)
		this.S(x - 200, y - 120, 'r', 320, 20, 200, 200)
		return this.S(x, y, 'd', [[280, 170, '-']]).K(k)
	}
	b.bc = function (fn) {
		var b = this, g = G(arguments),
				origE, e, nextE
		if (g.n) {
			fn = function (b) {
				b.kill()
			}
		}
		origE = b.co()
		if (!origE) {
			return b
		}
		e = origE.nextBody
		while (e) {
			nextE = e.nextBody
			fn(e.body)
			e = nextE
		}
		e = origE.prevBody
		while (e) {
			nextE = e.prevBody
			fn(e.body)
			e = nextE
		}
		return b
	}
	b.bcKill = function () {
		var b = this, g = G(arguments), origE, e, nextE
		origE = b.co()
		if (!origE) {
			return b
		}
		e = origE.nextBody
		while (e) {
			nextE = e.nextBody;
			e.body.kill();
			e = nextE
		}
		e = origE.prevBody
		while (e) {
			nextE = e.prevBody;
			e.body.kill();
			e = nextE
		}
		return b
	}
	SENSORBUCKETS = MASTERPIECE = PARTRIVER = RIV = function () {
		W({g: 100}).Y();
		y.XY(100, 500);
		w.addHundBalls()
		s1 = w.sensorBucket(320, 300, 's1')
		s2 = w.sensorBucket(700, 300, 's2')
		co = w.aCo(500, -50);
		co1 = w.aCo(-500, -50)
		_.ev(function () {
			aCo.B(w.D(300, 100, 'y', 10), w.D(760, 100, 'b', 10))
		})
		_.ev(5, function () {
			y.bc('-')
		})
		//default is to kill all in its 'controller-space' (except itself)
		w.b(function (cx) {
			cx.w('s1',
					function (f) {
						f.xCo();
						co.B(f.B())
					})
			cx.w('s2',
					function (f) {
						f.xCo();
						co1.B(f.B())
					})
		})
	}
	MOREOFABOVE = function () {
		/* w.D(150, 100, 'w', 20)
		 w.D(200, 100, 'd', 20)
		 w.D(250, 100, 'r', 20)
		 w.D(350, 100, 'g', 20)
		 w.D(400, 100, 'o', 20)
		 w.D(450, 100, 'w', 20)*/
//   w.e('ball', function(b){co.B(b) })
	}
	BCO = function () {
		W([1200, 1200], {g: 50, w: 'U'})
		sen = w.S(1200, 300, 'o', [[2400, 200, '-']]).K('sen')
		aCo = w.aCo(0, -50)
		aCo.do(sen)    //<- sen.do(aCo) //  <- sen.cl(function(f){if(!f.by(aCo)){aCo.B(f)}}, function(f){if(f.by(aCo)){aCo.xB(f)}})
		y = w.y(400, 40).fR().rt(90).lD(2).tr()
		w.D(300, 100, 'r', 20);
		w.D(400, 100, 'r', 40);
		w.D(500, 100, 'r', 45);
		w.D(600, 100, 'r', 80);
		w.D(700, 100, 'r', 10)
		w.me().XY(700, -400) //.r(5).d(2)
		w.S(300, 900, 'r', 20, 360);
		w.S(890, 900, 'r', 20, 360)
		w.S(600, 900, 'b', [[550, 340, '-']])
				.do(
				co = w.bCo()
		)
		// y = w.y(400, 40).fR().rt(90).lD(2).tr()
		w.D(500, 100, 'r', 20);
		w.D(400, 100, 'r', 40);
		w.D(500, 100, 'r', 45);
		w.D(600, 100, 'r', 80);
		w.D(700, 100, 'r', 10)
		_.in(8, function () {
			w.addHundBalls()
		})
		_.in(24, function () {
			w.e(function (b) {
				b.dyn()
			})
		})
	}
	ISTOUCHING = function () {
		W().Y()
		co = w.bCo()  //(0,-1,5,2).os(-6).d(2)
		sen = w.S(320, 245, 'z')
		sen.rec({s: 1, w: 880, h: 170, c: 'o', C: 'o'})
		w.eT(function (b) {
			var cx
			// each tick.. for every body ...
			// if that body has a controller.. remove the controller and turn that body orange
			if (b.co()) {
				co.xB(b);
				b.C('o')
			}
			else {
				for (var c = b.cx(); c; c = c.next) {
					cx = c.contact;
					bodB = cx.b();
					if (cx.IsTouching()) {
						co.B(bodB);
						bodB.C('X')
					}
				}
			}
		})
		_.ev(5, function () {
			w.D(300, 40, 'o', 18).C('o')
		})
		_.in(1, function () {
			i = y.sp()
			i.K('j')
			w.C($r())
			k = i._K
		})
	}
	BCO1 = function () {
		W({g: 200})
		p = w.p(500, 200)
		w.S(320, 540, 'g', 320, 20)
		w.S(170, 430, 'g', 20, 200)
		w.S(470, 430, 'g', 20, 200)
		co = w.bCo(0, -1, 5, 2).os(-6).d(2)
		sen = w.S(320, 445, 'z').K('sen');
		sen.rec({s: 1, w: 280, h: 170, c: 'b', o: .8})// <-nice opacity example
		sen.SetBullet(true)
		fn = function (f) {
			$l('sen beg')
			if (!f.B().co()) {
				co.B(f.B())
				f.B().C("o")
			}
		}
		w.b(function (cx) {
			cx.w('sen', _.once(fn))
		})
		//T.t(function(){  co.xB(p)  })
		sen.end(p, function () {
			$l('sen end')
			//co.xB( p )
			p.C('r')
			if (p.co()) {
				p.xCo(co)
			}
		})
		_.ev(1, function () {
			w.D(300, 40, 'r', 8).d(5)
		})
		//  co.B(p)
		T.t(function () {
			co.xB(p)
		})
		// w.end('right', function(){$l('end!')})
		// w.r_.end( function(){$l('end!')})
	}
	BCO2 = function () {
		W(200)
		w.S(320, 480, 'r', 640, 20)
		w.S(320, 340, 'b', 320, 20)
		w.S(170, 230, 'g', 20, 200)
		w.S(470, 230, 'o', 20, 200)
		sen = w.S(320, 245, 'y', 280, 170, '-').K('sen')
		p = w.p(300, 100)//.d(.2).cn('jump')
		w.addHundBalls()
		co = w.bCo()
		sen.do(co)
		/*
		 co.normal.Set(0,-1)
		 co.offset=-20
		 co.useDensity=true
		 co.density=2.0
		 co.linearDrag=5
		 co.angularDrag=2
		 */
		/*
		 T.t(function(){
		
		 w.e(function(b){if(b.iD()){ //if the body is not static
		 // if ( b.co() )  {b.xCo(co) ; $l('has co!!!!! (no doesnt)') } // if the body has a co, get rid of it
		
		 for (var cx = b.cx(); cx;cx=cx.next) {//.next?
		 cx.contact.w('sen',
		 function(f){
		 $l('add0')
		 if(!f.B().co()){
		 $l('add')
		 co.B(f)
		 }})
		 }
		 }})
		 })*/
	}
	BCO3 = function () {
		W({
			w: 'U',
			g: 200
		});
		co = w.bCo()
		//co.os(-360)//.d(2)//w.bCo(0,-1,5,2)
		co.useDensity = false
		// co.density = .02
		sen = w.S(620, 445, 'z').K('sen');
		sen.rec({s: 1, w: 1680, h: 270, c: 'b', o: .8});
		sen.SetBullet(true)
		sen.do(co)
		_.t(5, function () {
			w.D(300, 40, 'r', 48).d(1)
//            .aD(100).lD(.2)
		})
		w.D(300, 40, 'b', 10).d(100)
		w.D(300, 40, 'b', 24).d(.1)
		p = w.p(200, -1000).d(.9)
	}
	BCO4 = function () {
		W({g: 100}).Y();
		y.XY(100, 500)
		s1 = w.sensorBucket(320, 300, 's1')
		s2 = w.sensorBucket(700, 300, 's2')
		/* w.D(150, 100, 'w', 20)
		 w.D(200, 100, 'd', 20)
		 w.D(250, 100, 'r', 20)
		 w.D(350, 100, 'g', 20)
		 w.D(400, 100, 'o', 20)
		 w.D(450, 100, 'w', 20)*/
		co = w.aCo(500, -50)
		co1 = w.aCo(-500, -50)
		w.addHundBalls()
		//   w.e('ball', function(b){co.B(b) })
		_.ev(function () {
			aCo.B(
					w.D(300, 100, 'y', 10),
					w.D(760, 100, 'b', 10)
			)
		})
		_.ev(5, function () {
			y.bc('-')
		})
		//default is to kill all in its 'controller-space' (except itself)
		w.b(function (cx) {
			cx.w('s1',
					function (f) {
						f.xCo();
						co.B(f.B())
					})
			cx.w('s2',
					function (f) {
						f.xCo();
						co1.B(f.B())
					})
		})
	}
	SENSORBOXES = SNB = function () {
		W({g: 300})
//gives u a controller-edge, which is a body-controller pair
		//it is linked both to other bodies for that controller..
		//and to other controllers of that body!!!
		//lets focus on other bodies first....
		//w.bindCo=function(){var g=G(arguments);
		// return this.b(function(cx){
		// cx.bindCo.apply(cx, g)}
		// )}
		w.bindCo('co1', 'co2')
		s1 = w.sensorBucket(320, 300, 'co1')
		s2 = w.sensorBucket(700, 300, 'co2')
		co1 = w.aCo(-500, -50)
		co2 = w.aCo(50, -500)
		w.D(150, 100, 'w', 30).d(1)
		w.D(200, 100, 'd', 30).d(1)
		w.D(250, 100, 'r', 30).d(1)
		w.D(350, 100, 'g', 30).d(1)
		w.D(400, 100, 'o', 30).d(1)
		w.D(450, 100, 'w', 30).d(1)
		w.end(function (cx) {
			cx.w('co2', function () {
				this.xCo()
			})
		})
		//w.end( 'co2', function(){ this.xCo() } )  // w.end( 'co2', 'xCo'  )//<-
		_.in(.5, function () {
			y = w.ship(300, 50)
			_.ev(1, function () {
				w.D(300, 100, 'y', 10)
				w.D(760, 100, 'b', 10)
				y.bc('-')
			})
		})
	}
	BCO5 = function () {
		W().Y();
		y.XY(100, 500)
		p = w.p(300, 100)
		s1 = w.sensorBucket(320, 300, 's1')
		s2 = w.sensorBucket(700, 300, 's2')
		/* w.D(150, 100, 'w', 20)
		 w.D(200, 100, 'd', 20)
		 w.D(250, 100, 'r', 20)
		 w.D(350, 100, 'g', 20)
		 w.D(400, 100, 'o', 20)
		 w.D(450, 100, 'w', 20)*/
		co = w.aCo(500, -1500)
		co1 = w.aCo(-500, -1500)
		//  w.addHundBalls()
		_.ev(5, function () {
			y.bc(function (b) {
				b.kill()
			})
		})
		s1.do(co)
		co1.do(s2)
		//   w.e('ball', function(b){co.B(b) })
		/*
		 _.ev(function(){
		
		 aCo.B(   w.D(300,100, 'y', 10),  w.D(760,100, 'b', 10)
		 )
		 })
		
		
		
		 //default is to kill all in its 'controller-space' (except itself)
		
		
		 w.b(function(cx){
		
		 cx.w('s1',
		 function(f){f.xCo();
		 co.B(f.B())
		 })
		
		 cx.w('s2',
		 function(f){f.xCo(); co1.B(f.B())})
		
		
		 })
		
		 */
	}
	BCO6 = function () {
		W({g: 0}).C('g')
		p = w.p(200, 200)
		y = w.y(300, 50).lD(5)
		co1 = w.aCo(0, -50)
		co2 = w.aCo(0, 50)
		s1 = w.D(250, 300, 'o', 600, 600, '-').K('co1')
		s2 = w.D(950, 300, 'o', 600, 600, '-').K('co2')
		w.bindCo('co1', 'co2')
		_.t(20, function () {
			w.D(R(1200, 100),
					R(600, 100), $r(), 30)
		})
		/*
		
		
		 w.end(function (cx) {
		 cx.w('co1',
		 function(){this.xCo()})
		 cx.w('co2',
		 function(){this.xCo()})
		 })
		 */
	}
	BCOWALL = function () {
		W([1200, 600, 2400, 600], {g: 50})
		x = w.S(600, 300, 'w', 280, 370, '-').K('sen').al(.4)
		p = w.p(100, 100)
		yy = y = w.y()
				.lD(4).aD(3).tr()
				.d(5)
		co = w.bCo()   //(0,-.5,5,2)//.os(-6).den(2)
		x.do(co)
		p.aD(3)
		/* w.tE(function(b){
		 if(!b.iD()){return}
		 b.co('-')
		 b.cx(function(f, cx){
		 p.xCo(co)
		 if(f.of('sen')){ co.B(this)}
		 })
		 })
		 */
	}
	FLOOD = WEIRD = function () {
		W({g: 0}).C('g')
		p = w.p(200, 200)
		y = w.y(300, 50).lD(5)
		co1 = w.aCo(0, -50)
		co2 = w.aCo(0, 50)
		s1 = w.D(250, 300, 'o', 600, 600, '-').K('co1')
		s2 = w.D(950, 300, 'o', 600, 600, '-').K('co2')
		w.bindCo('co1', 'co2')
		// _.t(20,function(){w.D(R(1200,100), R(600,100), $r(), 30)})
		/*
		
		
		 w.end(function (cx) {
		 cx.w('co1',
		 function(){this.xCo()})
		 cx.w('co2',
		 function(){this.xCo()})
		 })
		 */
	}
	FB = FISHBOWLS = function () {
		W({g: 300})
//gives u a controller-edge, which is a body-controller pair
		//it is linked both to other bodies for that controller..
		//and to other controllers of that body!!!
		//lets focus on other bodies first....
		//w.bindCo=function(){var g=G(arguments);
		// return this.b(function(cx){
		// cx.bindCo.apply(cx, g)}
		// )}
		w.bindCo('co1', 'co2')
		s1 = w.sensorBucket(320, 300, 'co1')
		s2 = w.sensorBucket(700, 300, 'co2')
		co1 = w.aCo(-500, -50)
		co2 = w.aCo(50, -500)
		w.D(150, 100, 'w', 30).d(1)
		w.D(200, 100, 'd', 30).d(1)
		w.D(250, 100, 'r', 30).d(1)
		w.D(350, 100, 'g', 30).d(1)
		w.D(400, 100, 'o', 30).d(1)
		w.D(450, 100, 'w', 30).d(1)
		w.end(function (cx) {
			cx.w('co2', function () {
				this.xCo()
			})
		})
		//w.end( 'co2', function(){ this.xCo() } )  // w.end( 'co2', 'xCo'  )//<-
		_.in(.5, function () {
			y = w.ship(300, 50)
			_.ev(1, function () {
				w.D(300, 100, 'y', 10)
				w.D(760, 100, 'b', 10)
				y.bc('-')
			})
		})
	}
	FBL2 = function () {
		W().Y();
		y.XY(100, 500)
		p = w.p(300, 100)
		s1 = w.sensorBucket(320, 300, 's1')
		s2 = w.sensorBucket(700, 300, 's2')
		/* w.D(150, 100, 'w', 20)
		 w.D(200, 100, 'd', 20)
		 w.D(250, 100, 'r', 20)
		 w.D(350, 100, 'g', 20)
		 w.D(400, 100, 'o', 20)
		 w.D(450, 100, 'w', 20)*/
		co = w.aCo(500, -1500)
		co1 = w.aCo(-500, -1500)
		//  w.addHundBalls()
		_.ev(5, function () {
			y.bc(function (b) {
				b.kill()
			})
		})
		s1.do(co)
		co1.do(s2)
		//   w.e('ball', function(b){co.B(b) })
		/*
		 _.ev(function(){
		
		 aCo.B(   w.D(300,100, 'y', 10),  w.D(760,100, 'b', 10)
		 )
		 })
		
		
		
		 //default is to kill all in its 'controller-space' (except itself)
		
		
		 w.b(function(cx){
		
		 cx.w('s1',
		 function(f){f.xCo();
		 co.B(f.B())
		 })
		
		 cx.w('s2',
		 function(f){f.xCo(); co1.B(f.B())})
		
		
		 })
		
		 */
	}
	ANTIGTANK = BCO = function () {
		W([1200, 1200], {g: 50, w: 'U'})
		sen = w.S(1200, 300, 'o', [[2400, 200, '-']]).K('sen')
		aCo = w.aCo(0, -50)
		aCo.do(sen)    //<- sen.do(aCo) //  <- sen.cl(function(f){if(!f.by(aCo)){aCo.B(f)}}, function(f){if(f.by(aCo)){aCo.xB(f)}})
		y = w.y(400, 40).fR().rt(90).lD(2).tr()
		w.D(300, 100, 'r', 20);
		w.D(400, 100, 'r', 40);
		w.D(500, 100, 'r', 45);
		w.D(600, 100, 'r', 80);
		w.D(700, 100, 'r', 10)
		w.me().XY(700, -400) //.r(5).d(2)
		w.S(300, 900, 'r', 20, 360);
		w.S(890, 900, 'r', 20, 360)
		w.S(600, 900, 'b', [[550, 340, '-']])
				.do(
				co = w.bCo()
		)
		// y = w.y(400, 40).fR().rt(90).lD(2).tr()
		w.D(500, 100, 'r', 20);
		w.D(400, 100, 'r', 40);
		w.D(500, 100, 'r', 45);
		w.D(600, 100, 'r', 80);
		w.D(700, 100, 'r', 10)
		_.in(8, function () {
			w.addHundBalls()
		})
		_.in(24, function () {
			w.e(function (b) {
				b.dyn()
			})
		})
	}
	VANISH = function () {
		W().Y()
		co = w.bCo()  //(0,-1,5,2).os(-6).d(2)
		sen = w.S(320, 245, 'z')
		sen.rec({s: 1, w: 880, h: 170, c: 'o', C: 'o'})
		w.eT(function (b) {
			var cx
			// each tick.. for every body ...
			// if that body has a controller.. remove the controller and turn that body orange
			if (b.co()) {
				co.xB(b);
				b.C('o')
			}
			else {
				for (var c = b.cx(); c; c = c.next) {
					cx = c.contact;
					bodB = cx.b();
					if (cx.IsTouching()) {
						co.B(bodB);
						bodB.C('X')
					}
				}
			}
		})
		_.ev(5, function () {
			w.D(300, 40, 'o', 18).C('o')
		})
		_.in(1, function () {
			i = y.sp()
			i.K('j')
			w.C($r())
			k = i._K
		})
	}
	BREW = function () {
		W({g: 200})
		p = w.p(500, 200)
		w.y()
		w.S(320, 540, 'g', 320, 20)
		w.S(170, 430, 'g', 20, 200)
		w.S(470, 430, 'g', 20, 200)
		co = w.bCo(0, -1, 5, 2).os(-6).d(2)
		sen = w.S(320, 445, 'z').K('sen');
		sen.rec({s: 1, w: 280, h: 170, c: 'b', o: .8})// <-nice opacity example
		sen.SetBullet(true)
		fn = function (f) {
			$l('sen beg')
			if (!f.B().co()) {
				co.B(f.B())
				f.B().C("o")
			}
		}
		w.b(function (cx) {
			cx.w('sen', _.once(fn))
		})
		//T.t(function(){  co.xB(p)  })
		sen.end(p, function () {
			$l('sen end')
			//co.xB( p )
			p.C('r')
			if (p.co()) {
				p.xCo(co)
			}
		})
		_.ev(1, function () {
			w.D(300, 40, 'r', 8).d(5)
		})
		//  co.B(p)
		T.t(function () {
			co.xB(p)
		})
		// w.end('right', function(){$l('end!')})
		// w.r_.end( function(){$l('end!')})
	}
	POPCORN = FLOAT = function () {
		W(200)
		w.S(320, 480, 'r', 640, 20)
		w.S(320, 340, 'b', 320, 20)
		w.S(170, 230, 'g', 20, 200)
		w.S(470, 230, 'o', 20, 200)
		sen = w.S(320, 245, 'y', 280, 170, '-').K('sen')
		p = w.p(300, 100)//.d(.2).cn('jump')
		w.addHundBalls()
		co = w.bCo()
		sen.do(co)
		/*
		 co.normal.Set(0,-1)
		 co.offset=-20
		 co.useDensity=true
		 co.density=2.0
		 co.linearDrag=5
		 co.angularDrag=2
		 */
		/*
		 T.t(function(){
		
		 w.e(function(b){if(b.iD()){ //if the body is not static
		 // if ( b.co() )  {b.xCo(co) ; $l('has co!!!!! (no doesnt)') } // if the body has a co, get rid of it
		
		 for (var cx = b.cx(); cx;cx=cx.next) {//.next?
		 cx.contact.w('sen',
		 function(f){
		 $l('add0')
		 if(!f.B().co()){
		 $l('add')
		 co.B(f)
		 }})
		 }
		 }})
		 })*/
	}
	FUNNYPOOL = function () {
		W({
			w: 'U',
			g: 200
		});
		co = w.bCo()
		//co.os(-360)//.d(2)//w.bCo(0,-1,5,2)
		co.useDensity = false
		// co.density = .02
		sen = w.S(620, 445, 'z').K('sen');
		sen.rec({s: 1, w: 1680, h: 270, c: 'b', o: .8});
		sen.SetBullet(true)
		sen.do(co)
		_.t(5, function () {
			w.D(300, 40, 'r', 48).d(1)
//            .aD(100).lD(.2)
		})
		w.D(300, 40, 'b', 10).d(100)
		w.D(300, 40, 'b', 24).d(.1)
		p = w.p(200, -1000).d(.9)
	}
	BO = BOO = BOUNCEOUT = function () {
		W({w: 'r2', g: 0}).C('e')
//.pen('blue has constForce(1,0)  red has constAcc(1,0)')
		//aCo=w.aCo(1,0).B(w.D(100,300,'x', 20 ).d(1), w.D(100,400, 'x',40 ).d(1))
		//w.aCo(0,1).B(w.D(300,100, 'x', 20).d(1), w.D(400,100, 'x', 40).d(1))
		w.p(100, 100)
		fCo = w.fCo(2, 0).B(
				w.D(100, 100, 'b', 60).d(1).lD(10),
				b = w.D(100, 200, 'b', 40).d(1).lD(10),
				b = w.D(100, 200, 'b', 100).d(1).lD(10))
		w.fCo(0, 2).B(
				w.D(100, 100, 'g', 60).d(1).lD(10),
				w.D(200, 100, 'g', 40).d(1).lD(10),
				w.D(200, 100, 'g', 100).d(1).lD(10))
		w.$$(function () {
			w.C('d')
			w.e(function (b) {
				b.xCo()
			})
		})
	}
	w.buck = w.sensorBucket = function (x, y, k) {
		x = N(x, 320)
		y = N(y, 245)
		k = k || 'sensorBucket buck'
		this.S(x - 150, y - 15, 'r', 20, 200)
		this.S(x + 150, y - 15, 'r', 20, 200)
		this.S(x - 200, y - 120, 'r', 320, 20, 200, 200)
		return this.S(x, y, 'd', [[280, 170, '-']]).K(k)
	}
	b.bc = function (fn) {
		var b = this, g = G(arguments),
				origE, e, nextE
		if (g.n) {
			fn = function (b) {
				b.kill()
			}
		}
		origE = b.co()
		if (!origE) {
			return b
		}
		e = origE.nextBody
		while (e) {
			nextE = e.nextBody
			fn(e.body)
			e = nextE
		}
		e = origE.prevBody
		while (e) {
			nextE = e.prevBody
			fn(e.body)
			e = nextE
		}
		return b
	}
	b.bcKill = function () {
		var b = this, g = G(arguments), origE, e, nextE
		origE = b.co()
		if (!origE) {
			return b
		}
		e = origE.nextBody
		while (e) {
			nextE = e.nextBody;
			e.body.kill();
			e = nextE
		}
		e = origE.prevBody
		while (e) {
			nextE = e.prevBody;
			e.body.kill();
			e = nextE
		}
		return b
	}
	SENSORBUCKETS = MASTERPIECE = PARTRIVER = RIV = function () {
		W({g: 100}).Y();
		y.XY(100, 500);
		w.addHundBalls()
		s1 = w.sensorBucket(320, 300, 's1')
		s2 = w.sensorBucket(700, 300, 's2')
		co = w.aCo(500, -50);
		co1 = w.aCo(-500, -50)
		_.ev(function () {
			aCo.B(w.D(300, 100, 'y', 10), w.D(760, 100, 'b', 10))
		})
		_.ev(5, function () {
			y.bc('-')
		})
		//default is to kill all in its 'controller-space' (except itself)
		w.b(function (cx) {
			cx.w('s1',
					function (f) {
						f.xCo();
						co.B(f.B())
					})
			cx.w('s2',
					function (f) {
						f.xCo();
						co1.B(f.B())
					})
		})
	}
	MOREOFABOVE = function () {
		/* w.D(150, 100, 'w', 20)
		 w.D(200, 100, 'd', 20)
		 w.D(250, 100, 'r', 20)
		 w.D(350, 100, 'g', 20)
		 w.D(400, 100, 'o', 20)
		 w.D(450, 100, 'w', 20)*/
//   w.e('ball', function(b){co.B(b) })
	}
}
bCo = $pt.bCo
bCo.no = bCo.norm = function (x, y) {
	this.normal.Set(x, y);
	return this
}
bCo.os = function (os) {
	this.offset = os;
	return this
}
bCo.uDe = bCo.useDen = function (u) {
	this.useDensity = u;
	return this
}
bCo.de = bCo.den = function (d) {
	var g = G(arguments), d = g[0]
	this.density = d;
	if (g.N) {
		this.useDen(true)
	}
	return this
}
bCo.lD = bCo.linDrag = function (lD) {
	this.linearDrag = lD || 0;
	return this
}
bCo.aD = bCo.angDrag = function (aD) {
	this.angularDrag = aD || 0;
	return this
}
bCo.dg = bCo.drag = function (lD, aD) {
	return this.lD(lD).aD(aD)
}
$bCo = b2d.buoy = function (nX, nY, lD, aD) {
	var co = new b2d.BC()
	nX = N(nX) ? nX : 0;
	nY = N(nY) ? nY : -1;
	lD = N(lD) ? lD : 2;
	aD = N(aD) ? aD : 1
	return co.no(nX, nY).dg(lD, aD)
}
w.bCo = w.buoy = function () {
	var co = $bCo.apply(null, arguments)
	this.co(co)
	return co
}
B0 = function () {
	W(10)
	y = w.ship()
	w._BRICK_(320, 370, 500, 420)
	co = w.bCo(0, -25, 10, 0).os(-60)
	co1 = w.bCo(0, -30, -4, 1).os(-6)
	b = w.BALL(300, 100, 20, $r()).de(.1)
	b1 = w.BALL(320, 50, 20, $r()).de(1)
	b2 = w.BALL(320, 50, 20, $r()).de(1)
	co.A(y, b, b1)
	w.ship('b')
}
BCO = function () {
	W(10)
	y = w.ship()
	w.BRICK(320, 480, 640, 20)
	w.BRICK(320, 340, 320, 20)
	w.BRICK(170, 230, 20, 200)
	w.BRICK(470, 230, 20, 200)
	w._BRICK_(320, 245, 280, 170)
	co = w.bCo(0, -25, 10, 0).os(-60)
	co1 = w.bCo(0, -30, -4, 1).os(-6)
	b = w.BALL(300, 100, 20, $r()).de(.1)
	b1 = w.BALL(320, 50, 20, $r()).de(1)
	co1.A(y, b, b1)
}
BUOY = BOO = BOY = function () {
	W.L(40)
	y = w.ship()
	w.BRICK(320, 480, 640, 20)
	w.BRICK(320, 340, 320, 20)
	w.BRICK(170, 230, 20, 200)
	w.BRICK(470, 230, 20, 200)
	w._BRICK_(320, 245, 280, 170)
	co = w.bCo(0, -25, 10, 0).os(-60)
	co1 = w.bCo(0, -30, -4, 1).os(-6)
	n = 0
	$t(function () {
		w.eDB(function (b) {
			if (b.co()) {
				co.rm(b)
			}
			b.eachCx(function (f) {
				if (f.iSn()) {
					b.a2(co)
					//f.B().a2IfUncontrolled(co)
				}
			})
		})
		y.eachCx(function (f) {
			n++
		})
		if (n) {
			$l('y num cx: ' + n)
		}
		n = 0
	})
	_.doEv(3, function () {
		w.BALL(300, 100, M.r() * 20 + 4, $r()).de(.1)
	})
	co.AB(y)
}
_bCo = function () {
	var co = $bCo()
	co.normal.Set(0, -1);
	co.offset = -180 / 30
	co.useDensity = true;
	co.density = 2.0;
	co.linearDrag = 5;
	co.angularDrag = 2;
	return co
}
IFORCE = IFO = function () {
	W(50)
	w._BRICK_(320, 370, 500, 420)
	co = _bCo()
	w.co(co)
	b1 = w.ball(200, 100, 70).de(2)
	w.ball(300, 100, 90)
	b2 = w.ball(400, 100, 100).de(.1)
	//for each dB
	//if b  controlled, remove it from co
	//then iterate its cxs
	//for each of its cxs..
	// if one f  is a sensor,
	//..  and the other's b not controlled...
	//.. then  other's b joins  co 
 
	
	w.$eD(function fn(b) {
		b.free()

		
		for (var cx = b.GCxL(); cx; cx = cx.next) {
			
			var fA = cx.contact.fA()
			var fB = cx.contact.fB()
			if (fA.iSn()) { co.try(fB.B()) }
			if (fB.iSn()) { co.try(fA.B()) }
			
			
			
		}
		
		
	})
		
		

}
 