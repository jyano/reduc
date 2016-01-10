function trackee() {
	w.t = w._t = w._t || w.S(w.hW, w.hH, 'w', [[20, 2, '-']]).r(.8) //trackee
	w.i.A(w.tSpr = $Ct().XY(w.t.X(), w.t.Y())) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)
	T.t(track)
}
function track() {
	if (F(w.t.cb)) {
		w.t.cb()
	} else if (F(w.tCb)) {
		w.tCb()
	}
	w.st.x = -w.sXCap(w.t.X() * w.z - w.hW)
	w.st.y = -w.sYCap(w.t.Y() * w.z - w.hH)
	if (w.t == w._t) {
		w.t.XY(w.tSpr.X(), w.tSpr.Y());
		w.s.rt(w.tSpr.rt())
	}
}
w.TRACK = function (p) {
	var w = this
	$t(function () {
		w.CAMX(w.scaledDif(p.X(), w.gameW / 2))
		w.CAMY(w.scaledDif(p.Y(), w.gameH / 2))
	})
	return w
}
w.callTrackeeCb = function () {
	var w = this
	var cb = w.tCb || w.trackeeCb || w.trackee && w.trackee.cb
	if (F(cb)) {
		cb()
	}
	return w
}
w.setTrackeeCb = function (fn) {
	var w = this
	w.trackeeCb = w.tCb = fn
	return w
}
w.zY = w.zDifY = w.scaledDifY = function (y, t) {
	var w = this
	return w.zDif(w.toY(y), t.Y())
}
w.zX = function (x, t) {
	var w = this
	x = w.toX(x)
	return w.zDif(x, t.X())
}//= w.zDifX=w.scaledDifX
w.zXY = function (t, x, y) {
	var w = this
	x = w.gameW / 2 - w.zHalf(w.gameW) + w.zX(x, t)
	return {
		x: x,
		y: w.zY(y, t) + w.gameH / 2 - w.zHalf(w.gameH)
	}
}
w._tr = w._track = function (t, x, y, fn) {
	var w = this
	$t(function () {
		var cb = w.tCb || w.trackeeCb || w.trackee && w.trackee.cb
		if (F(cb)) {
			cb()
		}
		fn(w.zXY(t, x, y))
	})
	return w
}
w.tr = w.track = function (t, x, y) {
	var w = this
	return w._tr(t, x, y, function (d) {
		w.camXY(-d.x, -d.y)
	})
}
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
w._trackCen = function (tee, fn) {
	var w = this
	var x = w.worldW / 2
	var y = w.worldH / 2
	return w._track(tee, x, y, fn)
}
w.trackCen = function (t) {
	return this.track(t, this.worldW / 2, this.worldH / 2)
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