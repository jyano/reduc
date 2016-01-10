w._track = w._tr = function (t, x, y, fn) {
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
w.track = w.tr = function (t, x, y) {
	var w = this
	return w._tr(t, x, y, function (d) {
		w.camXY(-d.x, -d.y)
	})
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
 
w.tr = w.track = function (t, cX, cY, bf) {
	var w = this, g = G(arguments)
	w.trackee = g.f || w._trackee
	cX = N(cX, w.W / 2);
	cY = N(cY, w.H / 2)
	function trackingBuffer() {
		if (O(bf)) {
			w.bufPol(w.sBuf(bf))
			$t(function () {
				w.stgXY(
						bf.x - w.hW + _.adj(t.X() - bf.x, bf.w / 2) * bf.mX,
						bf.y - w.hH + _.adj(t.Y() - bf.y, bf.h / 2) * bf.mX)
			})
			return w
		}
	};
	trackingBuffer()
	//option to set based on t's CURRENT X/Y?
	trackNeg()
	bufExcl()
	w._track = function (t, cX, cY) {
		var w = this
		//return w
		//run pre-scroll hook cb's
		if (F(w.trackee.cb)) {
			w.trackee.cb()
		}
		else if (F(w.track.cb)) {
			w.track.cb()
		}
		// if the designated trackee optionally has its own cb,
		// that overrules the (also optional) 'w.track.cb' cb
		var x = w._zoom * w.hW + w._zoom * ( t.X() - cX) - w.hW
		var y = w._zoom * w.hH + w._zoom * ( t.Y() - cY) - w.hH   //var y = w.z * (w.hH + t.Y() - cY ) - w.hH
		//w.sX(x)
		//w.sY(y)
		return w
		//each tick, literally just sets scale (via  w.sXY ) based on:
		// world dimensions, world zoom, and trackee position
		// $t(this)?
	}
	return bf == '-' ? w.trackNeg(t, cX, cY) :
			(bf == '!') ? w.bufExcl(t, cX, cY) :
					w._track(t, cX, cY)
	//w.S(cX,cY,'o',[ [40,400,'-']]) // w.dbCross(cX,cY) //  w.dot(cX,cY,'+')
	function trackNeg() {
		w.trackNeg = function (trackee, cX, cY) {
			var w = this
			$t(function () {
				w.st.x = (cX - trackee.X()) * w._zoom - w.W * (w._zoom / 2 - .5)
				w.st.y = (cY - trackee.Y()) * w._zoom - w.H * (w._zoom / 2 - .5)
			})
			return w
		}
		function trackNegApps() {
			NOTKE = ZOOMSCALE = ZSC = function () {
				W([1000, 1000], {g: 0, t: 0}).jukeBox().y(100, 100).rt(200)
				w.drag()
				r = $.tallRange()
				$t(function () {
					zoom = function () {
						return r.val() / 25 + 1
					}
					w.zoom(zoom())
				})
			}
			W.TEMPLE = function () {
				W([1200, 600, 2400, 1200], {g: 0})
				w.S(1200, 300, 'r', 400, 100)
				w.S(1200, 600, 'w', [[100, 100, '-']])
				w.S(1200, 900, 'r', 400, 100)
				return w
			}
			DRAGSCALE = SCROLLNOLIM = SNL = function () {
				W.TEMPLE()
				w.dragScale()
				w.zoom(.8)
						.y(500, 500)
						.track(100, 300, '-')
			}
		}
	}
	
	function bufExcl() {// camBuff:
		w.bufExcl = function (t, cX, cY) {
			var w = this
			$t(function () {
				var sX = w._zoom * (t.X() - cX)
				sX = sX * 1 / ( 1 + w.hW / w.w )
				var sY = w._zoom * (t.Y() - cY)
				sY = sY / (1 + w.hH / w.h)
				w.stgXY(sX, sY)
			})
			return w
		}
	}
}
w.trackBasic = function (trackee, cX, cY) {
	var w = this, halfW = w.W / 2, halfH = w.H / 2
	w.trackee = trackee
	//return  w._track(w.trackee, N(cX, halfW), N(cY, halfH))
}
b.tr = b.track = function (x, y, z) {
	var b = this, w = b.W()
	w.track(b, x, y, z)
	return b
}
b.trackBasic = function (x, y, z) {
	var b = this, w = b.W()
	w.trackBasic(b, x, y, z)
	return b
}
b.track = function (x, y, z) {
	var b = this, w = b.wor()
	w.track(b, x, y, z)
	return b
}
//
w.tr = w.track = function (t, cX, cY, bf) {
	var w = this
	//i can leave the world-centering in fw
	// can optionally filter it with scale itself
	//  has limits now!  and more..
	// tis is the ultimate!
	if (U(t)) {
		t = w._trackee
	}
	w.t = t
	cX = N(cX, w.W / 2)
	cY = N(cY, w.H / 2)  //option to set based on t's CURRENT X/Y?
	if (bf == '!') {
		T.t(function () {
			var sX, sY
			sX = w.z * (t.X() - cX)
			sX = sX * 1 / ( 1 + w.hW / w.w )
			sY = w.z * (t.Y() - cY)
			sY = sY / (1 + w.hH / w.h)
			w.sXY(sX, sY)
		})
	}
	else if (bf == '-') {
		T.t(function () {
			w.s.x = (cX - t.X()) * w.z - w.W * (w.z / 2 - .5)
			w.s.y = (cY - t.Y()) * w.z - w.H * (w.z / 2 - .5)
		})
	}
//w.S(cX,cY,'o',[ [40,400,'-']]) // w.dbCross(cX,cY) //  w.dot(cX,cY,'+')
	else if (O(bf)) {
		bf.x = N(bf.x) ? bf.x : w.w / 2
		bf.y = N(bf.y) ? bf.y : w.h / 2
		bf.w = N(bf.w) ? bf.w : 0
		bf.h = N(bf.h) ? bf.h : 0
		bf.mX = N(bf.mX) ? bf.mX : 1
		bf.mY = N(bf.mY) ? bf.mY : 1
		w.S(bf.x, bf.y, 'r', [[bf.w, bf.h, '-']])
		w.S(bf.x, bf.y, 'w', [[bf.w + 20, bf.h + 20, '-']])
		w.S(bf.x, bf.y, 'b', [[bf.w, w.h, '-']])
		w.S(bf.x, bf.y, 'b', [[w.w, bf.h, '-']])
		w.S(bf.x, bf.y, 'z', [[10, 10, '-']])  //sensor works but ony for rect (or at least not for circ)
		w.S(bf.x, bf.y, 'w', [[bf.w, bf.h, '-']]) //  w.dot(bf.x-bf.w/2, bf.y-bf.h/2  ,     '+')
		T.t(function () {
			var sX, sY
			// sX = (bf.x-w.hW)   + _.adj( (t.X()-bf.x),  bf.w/2)/w.z
			sX = bf.x - w.hW + _.adj(t.X() - bf.x, bf.w / 2) * bf.mX /// bf.mX //scaling not needed?
			sY = (bf.y - w.hH) + _.adj(t.Y() - bf.y, bf.h / 2) * bf.mX// /bf.mY
			w.sXY(sX, sY)
		})
	}
	else {
		
		//each tick, literally just sets w.sXY() based on:
		// world dimensions, world zoom, and trackee position
		T.t(function () {
			var dX, dY
			//run pre-scroll hook cb's
			if (F(w.t.cb)) {
				w.t.cb()
			}
			if (w.track.cb && F(w.track.cb)) {
				w.track.cb()
			}
			// if the designated trackee optionally has its own cb,
			// that over rules the (also optional) 'w.track.cb' cb
			dX = t.X() - cX
			dY = t.Y() - cY
			w.sX(w.z * w.hW + w.z * dX - w.hW)
			w.sY(w.z * (w.hH + dY ) - w.hH)
		})
	}
	return w
}
b.tr = b.track = function (x, y, z) {
	var b = this, w = b.W()
	w.track(b, x, y, z)
	return b
}
//
w.TRACK = function (p) {
	var w = this
	
	function lerpFn() {
		var x = w.scaledDif(p.X(), w.gameW / 2)
		w.CAMX(x)
		var y = p.Y(), w
	.
		gameH / 2
		w.CAMY(w.scaledDif(y))
	}
	
	$t(lerpFn)
	return w
	function alpha() {
		w.lerp = function (fn) {
			var w = this
			//var fn = _.b(fn, w)
			fn = function () {
				var g = G(arguments)
				return fn.apply(w, g)
			}
			return fn()
		}
	}
}