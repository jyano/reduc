 
bD.inertia = function (ine) {
	if (U(ine)) {
		return this.insertiaScale
	}
	this.insertiaScale = ine
	return this
}
 
 
$sB = $bD = function (x, y) {
	//return $bD(x, y).ty(0)

	var g=G(arguments)
	
	var bD = new b2d.BD()
	if(g.u){return bD}
	
	var v = V(x, y)
	bD.XY(N(v.x, 0), N(v.y, 0)
	
	)
//	x = N(x) ? x : 300
//	y = N(y) ? y : 300
	return bD
	// = $dBD=b2d.D = b2d.bD = b2d.BD = b2d.dBD = b2d.dD = b2d.dyn
//b2d.staticDef = b2d.staticBodyDef =StaticBodyDef=sBD=
	function alt() {
		$bD = function (x, y) {
			_$bD = function () {
				return new b2d.BD()
			}
			return U(x) ? _$bD() : _$bD().XY(x, y)
		}
	}
}
$dB = function (x, y) {

//return $bD(x, y).ty(2)
	//aside: interesting that dyn comes after kin
	return $bD(x, y).T(2)
	//.dyn()
	//$dBD =   b2d.bD =   b2d.dBD =
}
 