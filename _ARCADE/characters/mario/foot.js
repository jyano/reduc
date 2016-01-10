w.pBox = w.m = function (sc) {
	var g = G(arguments)
	var p = w.footBox(sc)
	p.K('player')
	//if(!g.n){p.nRt()}
	return p
}
b.impDrop = function () {
	var b = this
	b.trig.foot = 'true'
	return b.I(0, 20)
}
b.jpb = b.jmpb = b.jumpable = b.isLegitJumping = function () {
	var b = this, g = G(arguments)
	return g.n ? !b.cantJump :
			g.p ? !b.cantJump && K.up :
			b.trig.foot && K.u
}
MEE = function () {
	W().foot()
	m = w.m()
	$.$(function () {
		m.I(40, 0)
	})
	$t(function () {
		if (b2d.onGround) {
			if (K.r) {
				m.I(1, 0)
			}
			if (K.l) {
				m.I(-1, 0)
			}
			if (K.u) {
				jump()
			}
		}
		else {//in air
			if (K.r) {
				m.I(.2, 0)
			}
			if (K.l) {
				m.I(-.2, 0)
			}
		}
	})
	function jump() {
		m.I(0, -28)
		b2d.onGround = false
	}
}
w.playa = function () {
	return this.pSpr().fr(.4).re(.2)
			.con('playa').trig('foot')
}
MARIOCANNON = MCN = function () {
	W({g: 500})//.footListener()
	//w.pf(800, 500, 600, 100);
	//w.pf(300, 530, 100, 100)
	//w.me().aD(10000)
	//w.box(800, 100).bS('guy')
	$.kD('u', function () {
		w.ball(200, 400, 10)
				.lV(40, -80)
	})
}
b.addFoot = function (sc) {
	sc = N(sc) ? sc : 4
	var b = this
	var fD = $pF(sc * 9, sc * 4, 0, sc * 12, '-')
	var f = b.f(fD).mS()
	f.K('foot')
	return b
}
w.footBox = function (sc) {
	return this.meBod(sc).addFoot(sc)
}
//just a basic box and foot
b.foot = function () {
	var b = this, w = b.W(), f
	w.b(function (cx) {
		if (f = cx.w('feet')) {
			f.B().trig.onGround = true
		}
	})
	w.end(function (cx) {
		if (cx.w('foot')) {
			b.trig.onGround = false
		}
	})
	return b
}
//b.feetListener =function(){return this.listener('feet')}
///////////////
///////////////
w.footListener = function () {
//sets b2d.onGround setter
//requires a body that has userData 'feet',
//and it simply see if it is colliding with anything
	b2d.onGround = false
	w.beg(function (cx) {
		if (cx.with('feet')) {
			b2d.onGround = true
		}
	})
	w.end(function (cx) {
		if (cx.with('feet')) {
			b2d.onGround = false
		}
	})
	return this
}
b.footListenerGreatButIGuessAlreadyDeppedKeepForAWhile = function () {
	var body = this
	var listener = b2d.listener()
			.begin(function (cx) {
				var bod
				if (fixt = cx.with('feet')) {
					fixt.gB().trig.onGround = true
				}
			})
			.end(function (cx) {
				if (cx.with('feet')) {
					body.trig.onGround = false
				}
			})
	this.GetWorld().listen(listener)
	return this
}//b.feetListener =function(){return this.listener('feet')}
function footKilling() {
	w.foot = w.footListener = function () {
		b2d.onGround = false
		numLaps = 0
		delay = 0
		w.b(function (cx) {
			if (cx.w('foot')) {
				b2d.onGround = true
				numLaps++
			}
			//$l(numLaps)
		})
		$t(function () {
			delay--
		})
		w.end(function (cx) {
			if (cx.w('foot')) {
				b2d.onGround = false
				numLaps--
			}
			//$l(numLaps)
		})
		return this
	}//this works but only for one mario!!!
	w.startKilling = function () {
		var w = this
		$t(function () {
			w.eB(function (b) {
				if (b.is('destroy')) {
					b.K('destroyed');
					b.kill()
				}
			})
		})
		return w
	}
}
W = function (o) {
	o = N(o) ? {g: o} : O(o) ? o : {}
	w = $W(o.g)
	var wd = o.W || 1200;
	var ht = o.H || 600
	if (o.z != false) {
		z()
	}
	w.$can = $.c('z', wd, ht).id('canvas')
	w.can = w.$can[0]
	w.ctx = w.can.getContext('2d')
	//
	$K()
	w.handle()
	w.startKilling()
	w.foot()
	w.st = w.stage = new cjs.Stage(w.can).A()
	//w.st.autoClear = false
	var ps = $(w.can)._getPosition()
	w.x = ps.x;
	w.y = ps.y
	w._mD = 0//=	_mouseIsDown
	w._mJ = 0//= _mouseJoint
	w.$u = function () {
		this.st.update();
		return this
	}
	_.sI(onInt, 1000 / 60)
	function onInt() {
		w.handleMJ()
		w.CF().St(1 / 60, 10, 10).$u().DDD()
		//runCb()
	}
	
	/*
	 function runCb() {
	 if (F(o.cb)) {
	 alert('see W.. o.cb');
	 o.cb()
	 }
	 }*/
	w.mSetup()
	tou()
	if (o.clear !== false) {
		dD = $dD(w.ctx, 30)
		dD.fl($dD.h + $dD.a + $dD.j + $dD.c + $dD.p)
		dD.fAl(.4).al(.9).l(300)
		w.sDD(dD)
	}
	_wa = o.w
	w.walls(o.w)
	return w
}
TESTKEYBOARD = function () {
	z()
	cjs.watchKeys()
	b2.mW({debug: true})
	w.footListener()
	//  p = w.addMe().controlMe('standard')
	b = w.ba()
	b.bindSprite('guy')
	b.controlMe('basic')
}
b.footListenerGreatButIGuessAlreadyDeppedKeepForAWhile = function () {
	var body = this
	var listener = b2d.listener()
			.begin(function (cx) {
				var bod
				if (fixt = cx.with('feet')) {
					fixt.gB().trig.onGround = true
				}
			})
			.end(function (cx) {
				if (cx.with('feet')) {
					body.trig.onGround = false
				}
			})
	this.GetWorld().listen(listener)
	return this
}//b.feetListener =function(){return this.listener('feet')}
