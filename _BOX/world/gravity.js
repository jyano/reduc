w.GG = function () {
	return this.GetGravity()
}
w.SG = function (gv) {
	this.SetGravity(gv);
	return this
}
w.gv = w.G = function (x, y) {
	var w = this, v, gv
	var gv = w.GG()
	if (U(x)) {
		return gv
	}
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	if (x == 'flip') {
		v = V(-gv.x, -gv.y)
	}
	return w.SG(v)
	function alt() {
		w.G = function (x, y) {
			var v, currGrav = this.GetGravity()
			if (U(x)) {
				return currGrav
			}
			if (N(x)) {
				v = N(y) ? V(x, y) : V(0, x)
			}
			if (x == 'flip') {
				v = V(-currGrav.x, -currGrav.y)
			}
			w.SetGravity(v)
			return this
		}
		w.G = function (x, y) {
			var w = this,
					v, currG = w.GetGravity()
			if (U(x)) {
				return currG
			}
			if (N(x)) {
				v = N(y) ? V(x, y) : V(0, x)
			}
			else if (x == 'flip') {
				v = V(-currG.x, -currG.y)
			}
			w.SetGravity(v)
			return w
			function alt() {
				w.G = function (x, y) {
					var v, currGrav = this.GetGravity()
					if (U(x)) {
						return currGrav
					}
					if (N(x)) {
						v = N(y) ? V(x, y) : V(0, x)
					}
					if (x == 'flip') {
						v = V(-currGrav.x, -currGrav.y)
					}
					w.SetGravity(v)
					return this
				}
			}
		}
	}
}