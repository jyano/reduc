 
	$kB = $bD1 = function (x, y) {
		return $bD(x, y).ty(1)
	}
	w.K = function () {
		return this.B.apply(this, arguments).kin()
	}
	function kin() {
		bD.kin = function () {
			return this.T(1)
		}
		bD.kin = function () {
			return this.T(1)
		}
	}
	
	b.iK = b.isKin = function () {
		return this.GetType() == 1
	}
	b.kin = function () {
		return this.type(1)
	}
	$kBD = b2d.kD = function (x, y) {
		return $dBD(x, y).T(1)
	}
	b2d.kin = b2d.kinematic = KinematicBodyDef = kBD = function (x, y) {
		return b2d.bodyDef(x, y).T(1)
	}
	$kB = $kBD = b2d.kD = function (x, y) {
		return $bD(x, y).T(1)
	}
	w.kin = function (x, y, fixtDef) {
		var body
		if (O(x)) {
			fixtDef = y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 500
		y = N(y) ? y : 250
		body = this.A(b2d.kin(x, y), fixtDef)
		return body
	}
	 
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
	w.K = w.kin = function (x, y, fD) {
		if (O(x)) {
			fD = y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 500;
		y = N(y) ? y : 250
		return w.A($kB(x, y), fD)
	}
	w.vertsKin = function (x, y, arrs) {
		var bod = this.kin(x, y)
		_.each(arrs, function (arr) {
			bod.convex(arr[0], _.rest(arr))
		})
		return bod
	}
	w.sB = function (x, y) {
		return this.cB($sBD(x, y))
	}
	w.kB = function (x, y) {
		return this.cB($kBD(x, y))
	}
	w.kB = function (x, y) {
		return this.CB($kB(x, y))
	}
	f.kin = function () {
		var b = this.B();
		b.kin.apply(b, arguments);
		return this
	}
	f.iK = function () {
		return this.B().iK()
	}
	f.kin = function () {
		var b = this.B();
		b.kin.apply(b, arguments);
		return this
	}
 