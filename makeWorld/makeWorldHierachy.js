 

$StepW = $box = function () {
	bx.can()
	$Wor().bug()
	w.loop()
	return w
	box1 = function (fn) {
		w = $boxWorld()
		dD = $dD($.c('z', 1800, 1500))
		w.sDD(dD) //the_circle = new b2CircleDef()
		n = 0
		_.ev(.1, function () {
			if (F(fn)) {
				fn(n)
			}
			n++
			w.go(1 / 5, '+')
		})
	}
}
$BugW = function () {
}
$MouseW = function () {
}
$listenW = function () {
}
$EaselW = function () {
}
$WallW = function (o) {
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
$KeysW = function () {
	$l('box world!')
	var g = G(arguments), o
	o = g.A_ ?
			_.x(g.s || {},
					{W: g.f[0], H: g.f[1], wW: g.f[2], wH: g.f[3]}) :
			N(g.f) && U(g.s) ? {g: g.f} :
					g.$N ? {W: g.f, H: g.s, wW: g.t, wH: g[3]} :
							g.S ? {w: g.f} :
							g.f || {}
	_w = o.w
	//make world instance: can be refactored/reduced//
	//set gravity
	o.g = N(o.g) ? V(0, o.g) : O(o.g) ? V(o.g) : V(0, 10)
	//set ignoreSleep
	o.sl = U(o.sl) ? true : o.sl
	//make the world
	w = new b2d.W(o.g, o.sl)
	//clear the screeen
	//do i use this 'xx' prop?  laaaame!
	if (o.xx !== 0) {
		$('body').empty()
	}
	o.W = N(o.W, 1200)
	o.H = N(o.H, 600)
	w.W = o.W
	w.H = o.H
	w.w = N(o.wW, w.W);
	w.h = N(o.wH, w.H);
	//half width/height nobiggie..
	w.W2 = w.HW = w.hW = w.W / 2;//
	//w.H2 = w.HH = w.hH = w.H / 2;
	w.h_H = w.hH = w.h / w.H;
	w.W_w = w.Ww = w.W / w.w;
	w.w_W = w.wW = w.w / w.W;
	w.H_h = w.Hh = w.H / w.h;
	//zoom
	w._zoom = 1
	w.mZ = w.hH > w.wW ? w.hH : w.wW;
	w.maxZoom = w.mS = w.Ww > w.Hh ? w.Ww :
			w.Hh;
	//handling()
	//room()
	keys()
	$t(enterFrame)
	//mouse()
	//if (o.t !== 0) {w.trackeeSetup()}
	w.o = o //w.stats()
	return w
}
$SpazW = function () {
	var g = G(arguments), o
	o = g.A_ ?
			_.x(g.s || {},
					{W: g.f[0], H: g.f[1], wW: g.f[2], wH: g.f[3]}) :
			N(g.f) && U(g.s) ? {g: g.f} :
					g.$N ? {W: g.f, H: g.s, wW: g.t, wH: g[3]} :
							g.S ? {w: g.f} :
							g.f || {}
	_w = o.w
	//make world instance: can be refactored/reduced//
	//set gravity
	o.g = N(o.g) ? V(0, o.g) : O(o.g) ? V(o.g) : V(0, 10)
	//set ignoreSleep
	o.sl = U(o.sl) ? true : o.sl
	//make the world
	w = new bx.W(o.g, o.sl)
	//clear the screeen
	//do i use this 'xx' prop?  laaaame!
	if (o.xx !== 0) {
		$('body').empty()
	}
	o.W = N(o.W, 1200)
	o.H = N(o.H, 600)
	w.W = o.W
	w.H = o.H
	w.w = N(o.wW, w.W);
	w.h = N(o.wH, w.H);
	//half width/height nobiggie..
	w.W2 = w.HW = w.hW = w.W / 2;//
	//w.H2 = w.HH = w.hH = w.H / 2;
	w.h_H = w.hH = w.h / w.H;
	w.W_w = w.Ww = w.W / w.w;
	w.w_W = w.wW = w.w / w.W;
	w.H_h = w.Hh = w.H / w.h;
	//zoom
	w._zoom = 1
	w.mZ = w.hH > w.wW ? w.hH : w.wW;
	w.maxZoom = w.mS = w.Ww > w.Hh ? w.Ww :
			w.Hh;
	//handling()
	//room()
	keys()
	$t(enterFrame)
	//mouse()
	//if (o.t !== 0) {w.trackeeSetup()}
	w.o = o //w.stats()
	return w
}
$ScrollW = W = function () {
	var g = G(arguments), o
	o = g.A_ ?
			_.x(g.s || {},
					{W: g.f[0], H: g.f[1], wW: g.f[2], wH: g.f[3]}) :
			N(g.f) && U(g.s) ? {g: g.f} :
					g.$N ? {W: g.f, H: g.s, wW: g.t, wH: g[3]} :
							g.S ? {w: g.f} :
							g.f || {}
	_w = o.w
	//make world instance: can be refactored/reduced//
	//set gravity
	o.g = N(o.g) ? V(0, o.g) : O(o.g) ? V(o.g) : V(0, 10)
	//set ignoreSleep
	o.sl = U(o.sl) ? true : o.sl
	//make the world
	w = new b2d.World(o.g, o.sl)
	//clear the screeen
	//do i use this 'xx' prop?  laaaame!
	if (o.xx !== 0) {
		$('body').empty()
	}
	o.W = N(o.W, 1200)
	o.H = N(o.H, 600)
	w.W = o.W
	w.H = o.H
	w.w = N(o.wW, w.W);
	w.h = N(o.wH, w.H);
	dimensions()
	handling()
	//room()
	keys()
	mouse()
	T.t(enterFrame)
	if (o.t !== 0) {
		trackee()
	}
	w.o = o //w.stats()
	return w
}