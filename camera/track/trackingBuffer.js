 
M._adjust = function (a, b, c, d) {
	// = $magic
	return cjs.adj(a - b, c / 2) * d
}
M.adjust = function (n1, n2, dim, multiple, gDim) {
	//= $mag 
	return M._adjust(n1, n2, dim, multiple) + n2 - gDim / 2
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
w.trackWithABuffer= function (t, bf) {
	//=w.trackBuff 
	var w = this, x, y
	
	 
	
	w.staticBufferSensorQuad(w.setTrackingBufferDefaults(bf))
	
	$t(function () {
	
		 
		w.camXY(
				x = M.adjust(t.X(), bf.x, bf.w, bf.mX, w.gameW),
				y = M.adjust(t.Y(), bf.y, bf.h, bf.mX, w.gameH)
		)
	})
	
	return w
}
w.trackWithABufferCenter = function (t, bf) {
	var w = this
	bf.x = w.worldW / 2
	bf.y = w.worldH / 2
	return w.trackWithABuffer(t, bf)
}
b.trackWithABuffer  = function (ob) {
	//= b.buff
	this.W().trackWithABuffer(this, ob)
	return this
}
 

 
 function _pre(){
	 w.balls = function () {
		 var w = this
		 _.t(10, function (i) {
			 w.D(100 + i * 100, 100, $r(), 35).de(.1)
		 })
		 return w
	 }
	 w.staticBufferSensorQuad = w.bfDev = function (bf) {
		 var w = this
		 w.onestaticBufferSensor = w.bfStat = function (bf, col, fx) {
			 var w = this
			 w.S(bf.x, bf.y, col, fx)
		 }
		 
		 w.onestaticBufferSensor(bf, 'w', [[bf.w + 50, bf.h + 50, '-']])
		 w.onestaticBufferSensor(bf, 'r', [[bf.w, bf.h, '-']])
		 w.onestaticBufferSensor(bf, 'b', [[bf.w, w.h, '-']])
		 w.onestaticBufferSensor(bf, 'b', [[w.w, bf.h, '-']])
		 return w
	 }
	 w.altStaticBufferSensorQuad = w.bufPol = function (bf) {
		 var w = this
		 return w
		 w.S(bf.x, bf.y, 'r', [[bf.w, bf.h, '-']])
		 w.S(bf.x, bf.y, 'w', [[bf.w + 20, bf.h + 20, '-']])
		 w.S(bf.x, bf.y, 'b', [[bf.w, w.h, '-']])
		 w.S(bf.x, bf.y, 'b', [[w.w, bf.h, '-']])
		 w.S(bf.x, bf.y, 'z', [[10, 10, '-']])  //sensor works but ony for rect (or at least not for circ)
		 w.S(bf.x, bf.y, 'w', [[bf.w, bf.h, '-']]) //  w.dot(bf.x-bf.w/2, bf.y-bf.h/2  ,     '+')
		 return w
	 }
	
	 }
	 function maybeOld(){
		 w.setTrackingBufferDefaults = function (bf) {
			 //=w.buffDfs 
			 var w = this
			 bf.x = N(bf.x) ? bf.x : w.worldW / 2
			 bf.y = N(bf.y) ? bf.y : w.worldH / 2
			 bf.w = N(bf.w) ? bf.w : 0
			 bf.h = N(bf.h) ? bf.h : 0
			 bf.mX = N(bf.mX) ? bf.mX : 1
			 bf.mY = N(bf.mY) ? bf.mY : 1
			 return bf
		 }
	 }