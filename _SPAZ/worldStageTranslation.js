 
w.toX = function (x) {
	return N(x) ? x : this.W / 2
}
w.toY = function (y) {
	return N(y) ? y :
	this.H / 2
}
w.tXY = alpha = function (x, y) {
	var w = this
	if (U(x)) {
		return {x: w.tX(), y: w.tY()}
	}
	y = N(y) ? y : x
	return w.tX(x).tY(y)
}
w.stgX = function (x) {
	var w = this;
	if (U(x)) {
		return w.st.x
	}
	w.st.x = x
	return w
}
w.stgY = function (y) {
	var w = this;
	if (U(y)) {
		return w.st.y
	}
	w.st.y = y
	return w
}
w.stgXY = function (x, y) {
	var w = this
	w.stgX(x)
	w.stgY(y)
	return w
}
$capTop = function (n, max) {
	return cjs.cap(n, 0, max)
	cjs.adj2 = function (income, tax) {
		
		//tax ~ deltaLimit ~ buffer
		var income = income || 0
		var tax = tax || 0
		if (Math.abs(income) <= tax) {
			return 0
		}
		return income > 0 ? income - tax :
		income + tax
	}
	_.cap = cjs.cap
	$t = function (fn) {
		cjs.tick(fn)
	}
}
_.capTop = function (n, max) {
	return _.cap(n, 0, max)
}
w.cap = function (s, a, b) {
	subScDif = function (a, x, z) {
		return a - x + a / z
	}
	return zeroToMax(s, a * this.z - b)
	function zeroToMax(s, max) {
		return _.cap(s, 0, max)
	}
}
w.dragX = function () {
	var w = this, dif
	w.$cvM({
		//mouseDown
		mD: function (x, y) {
			dif = x - w.st.x
		},
		//pressMove
		pM: function (x, y) {
			w.st.x = x - dif
		}
	})
	return w
	function alt() {
		w.dragX = function () {
			var w = this, dif
			w.i.c.m({
				mD: function (x) {
					dif = x - w.st.x
				},
				pM: function (x) {
					w.st.x = x - dif
				}
			})
			return w
		}
	}
}
w.dragY = function () {
	var w = this
	var dif
	w.$cvM({
		mD: function (x, y) {
			dif = y - w.st.y
		},
		pM: function (x, y) {
			w.st.y = y - dif
		}
	})
	return w
	function alt() {
		w.dragY = function () {
			var w = this, d
			w.i.c.m({
				mD: function (x, y) {
					d = y - w.s.y
				},
				pM: function (x, y) {
					w.s.y = y - d
				}
			})
			return w
		}
	}
}
w.drag = function () {
	return this.dragX().dragY()
}
w.dragScale = function () {
	var w = this
	var o = {}
	$cv = $(w.st.HUD.canvas)
	$cv.mousedown(function (e) {
		o.Scl = w.z
		o.Y = e.clientY
	})
	$cv.pressmove(
			function (e) {
				var x = e.clientX
				var y = e.clientY
				var newSc = o.Scl + (o.Y - e.clientY) * .005
				newSc = newSc > 5 ? 5 : newSc < .8 ? .8 : newSc
				w.ZOOM(newSc)
			})
	return w
	function alt() {
		w.dragScale = function () {
			var w = this
			var pX = 0, pY = 0, pmX, pmY, o = {}
			var c = $(w.i.canvas)
			c.mousedown(function (e) {
				o.Scl = w._zoom
				o.Y = e.clientY
			})
			c.pressmove(function (e) {
				var x = e.clientX,
						y = e.clientY,
						newSc = o.Scl + (o.Y - e.clientY) * .005
				newSc = newSc > 5 ? 5 : newSc < .8 ? .8 : newSc
				w.zoom(newSc)
			})
			return this
		}
	}
}
 