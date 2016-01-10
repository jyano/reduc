pD.maybeTl = function (xy) {
	return xy ? this.tl(xy) : this
	//= pD.maybeHere	
}
//p1 = $pD(vs1);
//p2 = $pD(vs2)
pD.tl = function (x, y) {
	var pts = this.pts()
	return $gP(b2d.add(pts, V(x, y)))
	function docs() {
		//=pD.tlAdd = pD.butHere = pD.to = pD.at = pD.ger =
		function possibleAlt() {
			pD.ger = function (x, y) {
				var pD = this
				var v = V(x, y);
				pD = pD.reg(-v.x, -v.y)
				return pD
			}
		}
	}
}
pD.tlNeg = function (x, y) {
	// = pD.reg
	var pts = this.pts()
	return $gP(b2d.sub(pts, V(x, y)))
// pD.tl2 = pD.translate =   pD.from = pD.cameFrom =pD.translateBackTo =pD.rel =
}
 