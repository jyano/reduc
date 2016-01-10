T1 = ZSC = ZOOMSCALE = function () {
	function rangeInputControlForApp() {
		$.tallRange = function () {
			var r = $.rg().W(500).A() //range
			r.abs(775, 500)
			r.css('transform', 'rotate(90deg)')
			return r.val(0)
		}
		w.range = function () {
			var w = this
			var r = $._range90(775, 500).wValOnTk(function (val) {
				var zoom = val / 25 + 1
				w.ZOOM(zoom)
			})
			return r
		}
		$._range = function (x, y) {
			var w = this
			var r = $.range().A()
			r.abs(x, y)
			r.W(500)
			r.attr({
				min: .2,
				max: 10, step: .2, value: 1
			})
			r.val(1)
			return r
		}
		$._range90 = function (x, y) {
			var w = this
			var r = $._range(x, y)
			return r.css('transform', 'rotate(90deg) scaleX(1.7) scaleY(3)')
		}
	}
	
	function functionBoundTicker() {
		$.fn.wValOnTk = function (fn) {
			var r = this
			$t(function () {
				fn(r.val())
			})
			return r
		}
	}
	
	W([1000, 1000], {g: 0}).levelScrollCirs()
	w.drag()
	r = $._range90(800, 500)
	r.wValOnTk(function (val) {
		w.ZOOM(val)
	})
	w.textDsp(function text() {
		var txt = 'scale: ' + r.val()
		return txt
	})
}
ZIP = T11 = ZOOMINPLACE = function () {
	W([1000, 1000], {g: 0}).levelScrollCirs()
	stg = w.stage
	o = {lastZm: 1, stgX: 0, stgY: 0}
	r = $._range90(800, 500)
	r.wValOnTk(function (zm) {
		o.x = stg.x
		o.y = stg.y
		if (zm != w.zoom()) {
			zoomChanged(zm, o)
		}
		o.zoom = w.zoom()
	})
	function zoomChanged(zm, o) {
		var oldZm = w.zoom()
		var zmRat = zm / oldZm
		w.ZOOM(zm)
		o.stgX = o.stgX - (10 * zmRat)
		stg.X(o.stgX)
	}
	
	$.mouseup(function () {
		var zm = w.zoom()
		o.stgX = stg.x
		o.stgY = stg.y
		o.zmDif = o.lastZm - zm
		o.lastZm = zm
	})
	w.$cvM({
		mD: function (x, y) {
			o.dx = x - stg.x;
			o.dy = y - stg.y
		},
		pM: function (x, y) {
			stg.x = x - o.dx;
			stg.y = y - o.dy
		}
	})
	_.ev(function () {
		console.log(o)
	})
}
ZSC1 = function () {
	W([1000, 1000], {g: 0}).levelScrollCirs().drag()
	r = $._range90(800, 500)
	r.wValOnTk(function (val) {
		w.zoom(val)
	})
	w.textDsp(function text() {
		var txt = 'range val: ' + r.val() + ', zoom: ' + w.zoom()
		return txt
	})
}
T2 = ZOM = function () {
	W().G(10)
	_.t(4, function () {
		w.ship().Y(120)
	})
	_.in(function () {
		w.ZOOM(2)
		_.in(function () {
			w.camXY(400, 4000)
		})
	})
	w.bt('zoom out (again)', function () {
		w.ZOOM(1).capCamPos()
	})
}
T3 = ZIN = function () {
	W().scrollLevel()
	$t(function () {
		w.callTrackeeCb()
	})
	_.in(function () {
		w.zoomIn()
	})
	w.textDsp(function text() {
		return 'zoom: ' + w.zoom()
	})
	w.bt('zoomOut', function () {
		w.zoomOut()
	})
}
T8 = SLOOM = function () {
	_level_()
	y = w.ship(200, 200)
	w.track(y)
	$t(function () {
		w.callTrackeeCb()
	})
	w.dot(600, 300)
	w.hud.dot(600, 300)
	w.dot(1200, 600)
	w.hud.dot(1200, 600)
	w.showOff()
	w.bt('my face', function () {
		y.bindSprite('me', .5)
	}, 10000)
}
T4 = PAN = function () {
	_level_()
	w.pan = function (a) {
		var w = this
		var left = false
		var minX = 100
		var maxX = w.worldW - 100
		$t(function () {
			a.X(20, left ? '-' : '+')
			if (a.X() < minX) {
				left = false
			}
			else if (a.X() > maxX) {
				left = true
			}
		})
		return w
	}
	tee = w.S(w.gameW / 2, w.gameH / 2, 'w', [[40, 40, '-']]).track()
	w.pan(tee)
}
T5 = FBL = FIREBALL = function () {
	$FIREBALL().track()
}
T6 = KISS = function () {
	$FIREBALL()
	y = w.ship().C('b').track()
	yy = w.ship(400, 400).C('o')
	_.ev(2, function () {
		if (w.follA) {
			w.track(yy);
			w.follA = 0
		}
		else {
			w.track(y);
			w.follA = 1
		}
	})
}
T7 = SNL = SCROLLNOLIM = function () {
	$FIREBALL()
	w.zoom(.8).dragScale()
			.ship()._track(600, 300, function (d) {
				w.stgXY(d.x, d.y)
			})
}