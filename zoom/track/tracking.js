 
w.Z = function (s) {
	//get/set zoom.. ok cool :)
	var w = this
	if (U(s)) {
		return w.z
	}
	w.z = s == '-' ? w.mS : _.cap(s, w.mS)
	w.s.sXY(w.z)
	return w
}
b.centerScale = function (z) {
	var b = this, w = b.W()
	w.s.sXY(z)
	w.s.X(
			w.hW - (  (b.X() - w.hW) * z)
	)
	w.s.Y(w.hH - ((b.Y() - w.hH)) * z)
	return b
}
w.pan = function (o) {
	var w = this, g = G(arguments), o = g[0],
			mZ = w.mZ,
			MZ = mZ * 3,
			z = w.mZ * 3, up = true,
			l
	if (g.m) {
		l = function () {
			up = z > w.mZ * 3 ? false :
					z < w.mZ ? true :
							up
			z *= up ? 1.01 : .9
			w.Z(z / w.mZ)
		}
	}
	else {
		l = function () {
			up = z > w.mZ * 3 ? false : z < mZ ? true : up
			z += up ? .03 : -.03
			w.Z(z / w.mZ)
		}
	}
	w.track.cb = l
	return w
}
w.tX = function (t) {
	var w = this
	if (U(t)) {
		return w.tSpr.X()
	}
	w.tSpr.X.apply(w.tSpr, arguments)
	return w
}
w.tY = function (t) {
	var w = this
	if (U(t)) {
		return w.tSpr.Y()
	}
	w.tSpr.Y.apply(w.tSpr, arguments)
	return w
}
w.tXY = function (x, y) {
	var w = this
	if (U(x)) {
		return {x: w.tX(), y: w.tY()}
	}
	y = N(y) ? y : x
	return w.tX(x).tY(y)
}
 
b.cam = function (x, y) {
	alert('b.cam')
	var b = this, s = b.stg()
	s.XY(b.diff(x, y))
	return b
}
b.follow = function (x, y) {
	alert('b.follow')
	var b = this
	cjs.t(function () {
		if (O(b.sprite)) {
			b.cam(x, y)
		}
	})
	return b
}

  
w.callKeeCb = w.callTrackeeCb = function () {
	var w = this
	if (F(getCb())) {
		getCb()()
	}
	return w
	function getCb() {
		return w.tCb || w.trackeeCb
				|| w.trackee && w.trackee.cb
	}
}
w.setKeeCb = w.setTrackeeCb = function (fn) {
	var w = this
	w.trackeeCb = w.tCb = fn
	return w
}
w.zoomY = w.zY = w.zDifY = w.scaledDifY = function (y, t) {
	var w = this
	return w.zDif(w.toY(y), t.Y())
}
w.zoomX = w.zX = function (x, t) {
	var w = this
	x = w.toX(x)
	return w.zDif(x, t.X())
}//= w.zDifX=w.scaledDifX
w.zoomXY = w.zXY = function (t, x, y) {
	var w = this
	x = w.gameW / 2 - w.zHalf(w.gameW) + w.zX(x, t)
	return {
		x: x,
		y: w.zY(y, t) + w.gameH / 2 - w.zHalf(w.gameH)
	}
}
w.something_TrackingBuffer = w.sBuf = function (bf) {
	var w = this
	bf.x = N(bf.x) ? bf.x : w.w / 2
	bf.y = N(bf.y) ? bf.y : w.h / 2
	bf.w = N(bf.w) ? bf.w : 0
	bf.h = N(bf.h) ? bf.h : 0
	bf.mX = N(bf.mX) ? bf.mX : 1
	bf.mY = N(bf.mY) ? bf.mY : 1
	return bf
}
w.trackeeSetup = function () {
	var w = this
	//setup default trackee, and originally assign actual trackee to that ref
	w.trackee = w._trackee = w.S(w.hW, w.hH, 'w',	// the 'trackee' is just a small white static sensor  top middle square !
			[[20, 2, '-']]).r(.8)
	// assign container-(sprite)  For Trackee :
	w.trackeeSprite = $Ct()
	w.trackeeSprite.XY(w.trackee.X(), w.trackee.Y())
	//add it to top stage
	w.i.A(w.trackeeSprite)
	$t(w.trackeeTick)
	return w
}
w.trackeeTick = function () {
	
	//run hook cb's
	F(w.trackee && w.trackee.cb) ? w.trackee.cb() :
			F(w.trackeeCb) ? w.trackeeCb() :
					null
	// this code brings 'stage to trackee' :
	w.st.x = w.stgXCap((w.trackee.X() + w.W / 2) / w._zoom);
	w.st.y = w.stgYCap((w.trackee.Y() + w.H / 2) / w._zoom)
	// only run trackee not changed (still default trackee) ? 
	_.ev(3, function () {
		if (w.trackee == w._trackee) {
			$l('default trackee')
			w.trackee.copyXY(w.trackeeSprite)
			w.st.rt(w.trackeeSprite.rt())
		}
	})
}
function bodyProxyTrack() {
	b._track = function (x, y, fn) {
		var b = this, w = b.W()
		w._track(b, x, y, fn)
		return b
	}
	b.TRACK = function () {
		var b = this, w = b.W()
		w.TRACK(b)
		return b
	}
}
// ** ok not important anymore **
function trackeePanLeftRight() {
	w.tRightLeft = function () {
		var w = this, left
		$t(function () {
			if (!left) {
				w.tX(10, '+')
				if (w.tX() > 2000) {
					left = 1
				}
			}
			else {
				w.tX(10, '-')
				if (w.tX() < 400) {
					left = 0
				}
			}
		})
		return w
	}
	TRACKEE = function () {
		W([1200, 600, 2400, 600], {g: 10})
		w.S(400, 2500, 'r', 200, 100)
		w.S(800, 2300, 'z', 100, 100)
		w.S(1200, 2300, 'b', 300, 100)
		w.S(1600, 2300, 'z', 100, 100)
		w.S(2000, 2300, 'r', 200, 100)
		_.times(10, function (i) {
			w.D(100 + i * 100, 100, $r(), 35).den(.1)
		})
		y = w.ship(50, 50).mid()
		y2 = w.ship(100, 300).C('x').rot(180)
		//i thought i may want t for timer/ticker.. but time has no x and y !
		//move the stage by manipulating the trackee x,y
		//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
		w.tRightLeft()
		w.showOff()
		setTimeout(function () {
			setInterval(function changeT() {
				if (w.t == y2) {
					w.C('b');
					w.t = y
				} else {
					w.C('z');
					w.t = y2
				}
			}, 5000)
		}, 5000)
	}
	TRACKEE = TRK = function () {
		W()
		w.balls()
		y = w.ship(50, 50).mid()
		y2 = w.ship(100, 300).C('x').rot(180)
		//i thought i may want t for timer/ticker.. but time has no x and y !
		//move the stage by manipulating the trackee x,y
		//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
		w.tRightLeft()
		w.showOff()
		_.in(5, function () {
			_.ev(5, function changeT() {
				if (w.t == y2) {
					w.C('b');
					w.t = y
				}
				else {
					w.C('z');
					w.t = y2
				}
			})
		})
	}
}

