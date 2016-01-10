 
w.stgYCap = function (y) {
	var w = this, g = G(arguments)
	var max = (w.worldH() - w.gameH()) / w._zoom
	return _.capTop(y, max)
}
w.stgXCap = function (x) {
	var w = this, g = G(arguments)
	var dif = ( w.worldW() - w.gameW()  )
	var max = dif / w._zoom
	return _.capTop(x, max)
}
w._stgX = function (x) {
	var w = this, g = G(arguments)
	if (g.u) {
		return g.n ? -w.st.x : w.st.x
	}
	w.st.x = g.n ? -x : x
	return w
}
w.stgX = function (x) {
	var w = this, g = G(arguments)
	if (g.u) {
		return -w.st.x
	}
	w.st.x = -w.stgXCap(x)
	return w
}
w.stgY = function (y) {
	var w = this, g = G(arguments)
	if (U(y)) {
		return -w.st.y
	}
	w.st.y = -w.stgYCap(y)
	return w
}
w.stgXY = function () {
	var w = this, g = G(arguments)
	//if (g.u) {return {}}
	w.stgX(g.f)
	w.stgY(g.s)
	return w
}
w.CAMX = function (x) {
	var w = this
	w.st.X(-x)
	return w
}
w.CAMY = function (y) {
	var w = this
	w.st.Y(-y)
	return w
}
//
w.sXY = function (x, y) {
	if (U(x)) {
		return {}
	}
	this.sX(x)
	this.sY(y)
	return this
}
w.sXCap = function (s) {
	return _.cap(s, 0, this.w * this.z - this.W)
}
w.sX = function (x) {
	var w = this
	if (U(x)) {
		return -this.s.x
	}
	this.s.x = -this.sXCap(x)
	return w
}
w.sYCap = function (s) {
	return _.cap(s, 0, this.h * this.z - this.H)
}
w.sY = function (y) {
	var w = this
	if (U(y)) {
		return -w.s.y
	}
	w.s.y = -w.sYCap(y)
	return w
}

w.camScaleMin = w.camZoomMin = function () {
	return 1 / _.lower(this.wMultiple, this.hMultiple);
}
w.camXMax = function () {
	return this.scaledWorldW() - this.gameW
}
w.camYMax = function () {
	return this.scaledWorldH() - this.gameH
}
w.camX = function (x) {
	w.camXCap = function (x) {
		return $capTop(x, this.camXMax())
	}
	return this.CAMX(U(x) ? null : this.camXCap(x))
}
w.camY = function (y) {
	w.camYCap = function (y) {
		return $capTop(y, this.camYMax())
	}
	return this.CAMY(U(y) ? null : this.camYCap(y))
}
w.camXY = function (x, y) {
	var w = this;
	w.camX(x)
	w.camY(y)
	return w
}

w.capCamPos = function () {
	var w = this
	w.camX(w.camX())
	w.camY(w.camY())
	return w
} 
  
	
