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
w.trackeeX = w.tX = function (t) {
	var w = this, g = G(arguments)
	if (g.u) {
		return w.trackeeSprite.X()
	}
	
	w.trackeeSprite.X.apply(w.trackeeSprite, arguments)
	return w
}
w.trackeeY = w.tY = function (t) {
	var w = this, g = G(arguments)
	if (g.u) {
		return w.trackeeSprite.Y()
	}
	
	w.trackeeSprite.Y.apply(w.trackeeSprite, arguments)
	return w
}

w.trackeeXY = w.tXY = function (x, y) {
	var w = this
	if (U(x)) {
		return {x: w.tX(), y: w.tY()}
	}
	y = N(y) ? y : x
	return w.tX(x).tY(y)
}
w.setTrackeeCallback = function (fn) {
	this.trackeeCb = fn;
	return this
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
// ** ok not important anymore **
 