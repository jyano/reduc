 
w.tRightLeft = function () {
	$l('w.tRightLeft')
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
w._track = function (t, cX, cY) {
	var w = this
	return w
	//run pre-scroll hook cb's
	$l('_tracke')
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
w.sBuf = function (bf) {
	var w = this
	bf.x = N(bf.x) ? bf.x : w.w / 2
	bf.y = N(bf.y) ? bf.y : w.h / 2
	bf.w = N(bf.w) ? bf.w : 0
	bf.h = N(bf.h) ? bf.h : 0
	bf.mX = N(bf.mX) ? bf.mX : 1
	bf.mY = N(bf.mY) ? bf.mY : 1
	return bf
}
w.trackNeg = function (trackee, cX, cY) {
	var w = this
	$t(function () {
		w.st.x = (cX - trackee.X()) * w._zoom - w.W * (w._zoom / 2 - .5)
		w.st.y = (cY - trackee.Y()) * w._zoom - w.H * (w._zoom / 2 - .5)
	})
	return w
}
w.tr = w.track = function (t, cX, cY, bf) {
	var w = this, g = G(arguments)
	w.trackee = g.f// ||  w._trackee
	cX = N(cX, w.W / 2);
	cY = N(cY, w.H / 2)
	if (O(bf)) {
		w.bufPol(w.sBuf(bf))
		$t(function () {
			w.stgXY(
					bf.x - w.hW + _.adj(t.X() - bf.x, bf.w / 2) * bf.mX,
					bf.y - w.hH + _.adj(t.Y() - bf.y, bf.h / 2) * bf.mX
			)
		})
		return w
	}
	//option to set based on t's CURRENT X/Y?
	return bf == '-' ? w.trackNeg(t, cX, cY) :
			(bf == '!') ? w.bufExcl(t, cX, cY) :
					w._track(t, cX, cY)
	//w.S(cX,cY,'o',[ [40,400,'-']]) // w.dbCross(cX,cY) //  w.dot(cX,cY,'+')
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
w.tRightLeft = function () {
	var w = this, left
	T.t(function () {
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