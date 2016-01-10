w.$cvM = function (ob) {
	return this.$cv().m(ob)
}
b.relPos = function () {
	return this.X() + this.stg().X()
} 
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
w.$h = function () {
	$l('w.$h')
	return this.i.h.apply(this.i, arguments)
} // h = $h().a2(s).rXY(100, 300).XY(100,300).drag()
//  h.rec( 'r','b',600, 200,  600, 200)
// h.rec( 'g',100, 100,  100, 20)
f.set = function (o) {
	if (!O(o)) {
		return false
	}
	var f = this
	if (D(o.d)) {
		f.d(o.d)
	}
	if (D(o.bo)) {
		f.bo(o.b)
	} else if (D(o.r)) {
		f.r(o.b)
	}
	if (D(o.fr)) {
		f.fr(o.f)
	}
	if (o.s) {
		f.sen(1)
	}
	if (D(o.k)) {
		f.K(o.k)
	}
	return f
}
w.sH = function (h) {
	var w = this
	if (U(h)) {
		return w.H * w.s.scaleY
	}
	w.s.scaleY = h / w.H
	return w
}
w.sTW = w.sToW = function (x, y) {
	var w = this, //works
			x = x / w.z - w.s.x / w.z,
			y = y / w.z - w.s.y / w.z
	//w.dot(x,y,'*') // cool
	return {x: x, y: y}
}
w.wTS = w.wToS = function (x, y) {
	var w = this,
			x = (x + w.s.x / w.z) * w.z,
			y = (y + w.s.y / w.z) * w.z
	return {x: x, y: y}
}
w.sH = function (h) {
	var w = this, wH = w.H()
	if (U(h)) {
		return wH * w.s.scaleY
	}
	w.s.scaleY = h / wH
	return w
}

function worldScaledModule(){
	w.scaled = function (a) {
		return a * this.zoom()
	}
	w.zHalf = w.scaledHalf = function (a) {
		return this.scaled(a / 2)
	}
	w.scaledDouble = function (a) {
		return this.scaled(a * 2)
	}
	w.zDif = w.scaledDif = function (a, b) {
		return this.scaled(a - b)
	}
	w.scaledSum = function (a, b) {
		return this.scaled(a + b)
	}
	w.scaledQuotient = function (a, b) {
		return this.scaled(a / b)
	}
	w.scaledProduct = function (a, b) {
		return this.scaled(a * b)
	}
	w.scaledWorldW = function () {
		return this.scaled(this.worldW)
	}
	w.scaledWorldH = function () {
		return this.scaled(this.worldH)
	}
	

}
function dimensions() {
	w.gameH = function () {
		return this.H
	}
	w.gH = function () {
		return this.stage.canvas.height
	}
	w.halfH = function () {
		return this.gH / 2
	}
	w.worldH = function () {
		return this.h
	}
	w.wH = function () {
		return this.stage.canvas.height
	}
	w.gameW = function () {
		return this.W
	}
	w.gW = function () {
		return this.stage.canvas.width
	}
	w.halfW = function () {
		return this.gW / 2
	}
	w.worldW = function () {
		return this.w
	}
	w.wW = function () {
		return this.stage.canvas.width
	}
}
w.tick = function (draw) {
	var w = this,
			can = w.can,
			ctx = w.ctx
	draw = N(draw) ? draw : 0.1
	ctx.tick(function () {
		this.trans(0, 0).Z(1, 1);
		w.draw(draw)
	})
	return this
}
i.tickX = function (fn) {
	var i = this
	T.t(function () {
		i.X(fn())
	})
	return i
}
i.tickY = function (fn) {
	var i = this
	T.t(function () {
		i.Y(fn())
	})
	return i
}
i.dr = function (dr) {
	alert('i.dr')
	if (U(dr)) {
		return this.direction
	}
	this.direction = dr;
	return this
}
i.nm = function (dr) {
	alret('i.nm')
	if (U(dr)) {
		return this.name
	}
	this.name = dr;
	return this
}
i.warpX = function (lo, hi, cush) {
	alert('i.warpX')
	var i = this,
			wrp = M.wrp(lo, hi, cush)
	T.t(function () {
		i.x = wrp(i.x)
	})
	return i
}
i.warpY = function (lo, hi, cush) {
	alert('i.warpY')
	var i = this, wrp = M.wrp(lo, hi, cush)
	T.t(function () {
		i.y = wrp(i.y)
	})
	return i
}
i.warp = function (n) {
	var i = this, s = i.S(), n = n || 0
	i.warpX(0, s.W(), n)
	i.warpY(0, s.H(), n)
	return i
}
ct.reset = function () {
	alert('ct.reset')
	this.St().removeAllChildren()
	T.removeAllListeners()
}
cross = function () {
	r = w.S(600, 300, 'r', 300, 100, 0, 0, 30)
	b = w.S(600, 300, 'b', 300, 100).rt(-35)
}
 function proxy(){
	 b.stg = function () {
		 return this.W().stage
	 }
	 b.St = b.S = b.stg = function () {
		 return this.W().s
	 }
	 b.stg = function () {
		 return this.W().stage
	 }
	 f.stg = function () {
		 return this.wor().s
	 }
	 f.S = f.stg = function () {
		 return this.W().s
	 }
 }