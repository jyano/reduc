b.wC = function () {
	return this.GWC().m()
}
b.GLC = b.GLcC = function () {
	return this.GetLocalCenter()
}
b.GWC = function () {
	return this.GetWorldCenter()
}
b.wC = function () {
	var b = this,
			w = b.W(),
			g = G(arguments)
	//gives {x,y}, but of its CENTER-OF-MASS
	if (g.p) {
		return b.XY(w.hW, w.hH)
	}
	return b.GetWorldCenter().m()
	function alt() {
	}
}
b.wCent = b.wC = b.cent = function () {
	var b = this, w = b.wor()
	var g = G(arguments)
	if (g.P) {
		return b.GetWorldCenter().mult()
	}    //  b.worldCenter= b.gWC= function(){return this.GetWorldCenter()}
	b.XY(
			w.W() / 2, w.H() / 2
	)
	return b
	function alt() {
		b.worldCenter = function () {
			return this.GetWorldCenter()
		} //  b.worldCenter= b.gWC= function(){return this.GetWorldCenter()}
	}
}
 