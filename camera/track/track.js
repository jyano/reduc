

w.dumbTrack = w._track = function (t, cX, cY) {
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


 
 



w.tr = w.track = function (t, cX, cY, bf) {

	var w = this, g = G(arguments)
	w.trackee = g.f || w._trackee
	cX = N(cX, w.W / 2);
	cY = N(cY, w.H / 2)
	
	
	//option to set based on t's CURRENT X/Y?
	
	return bf == '-' ? w.trackNeg(t, cX, cY) :
			(bf == '!') ? w.bufferExcluded(t, cX, cY) :
			w._track(t, cX, cY)          
	
	//w.S(cX,cY,'o',[ [40,400,'-']]) // w.dbCross(cX,cY) //  w.dot(cX,cY,'+')


}




function trackMore(){
	function trackBasic() {
	
			w.trackBasic = function (trackee, cX, cY) {
			var w = this, halfW = w.W / 2, halfH = w.H / 2
			w.trackee = trackee
			//return  w._track(w.trackee, N(cX, halfW), N(cY, halfH))
		}
		b.trackBasic = function (x, y, z) {
			var b = this, w = b.W()
			w.trackBasic(b, x, y, z)
			return b
		}
		CUPBALL = CPB = function () {

//purpose: shows 'track'-ing a  body
//purpose2: demonstrates 'showOff
//should zoom in when near cup
			CUPS()
			w.showOff()
			w.G(-100)
			x = w.W / 2
			y = w.H / 2
			ball = w.D(x, y, 'w', [[10]]).lV(100)//.re(.8)
			ball.trackBasic()
		}
	}
	
	w._trackCen = function (tee, fn) {
		var w = this
		var x = w.worldW / 2
		var y = w.worldH / 2
		return w._track(tee, x, y, fn)
	}
	w.trackCen = function (t) {
		var w = this
		return this.track(t, this.worldW / 2, this.worldH / 2)
	}
	w.tr1 = w.track1 = function (t, cX, cY, bf) {
		var w = this, g = G(arguments)
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
			$t(function () {
				var sX, sY
				sX = w.z * (t.X() - cX)
				sX = sX * 1 / ( 1 + w.hW / w.w )
				sY = w.z * (t.Y() - cY)
				sY = sY / (1 + w.hH / w.h)
				w.sXY(sX, sY)
			})
		}
		else if (bf == '-') {
			$t(function () {
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
			$t(function () {
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
			$t(function () {
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
}