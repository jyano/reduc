w.trackingBuffer = function () {
	var w = this
	if (O(bf)) {
		w.bufPol(w.sBuf(bf))
		$t(function () {
			w.stgXY(
					bf.x - w.hW + _.adj(t.X() - bf.x, bf.w / 2) * bf.mX,
					bf.y - w.hH + _.adj(t.Y() - bf.y, bf.h / 2) * bf.mX)
		})
		return w
	}
}
w.bufferExcluded = w.bufExcl = function (t, cX, cY) {
	var w = this
	$t(function () {
		var sX = w._zoom * (t.X() - cX)
		sX = sX * 1 / ( 1 + w.hW / w.w )
		var sY = w._zoom * (t.Y() - cY)
		sY = sY / (1 + w.hH / w.h)
		w.stgXY(sX, sY)
	})
	return w
}
w.trackNeg = function (trackee, cX, cY) {
	var w = this
	$t(function () {
		w.st.x = (cX - trackee.X()) * w._zoom - w.W * (w._zoom / 2 - .5)
		w.st.y = (cY - trackee.Y()) * w._zoom - w.H * (w._zoom / 2 - .5)
	})
	return w
	function trackNegApps() {
		NOTKE = ZOOMSCALE = ZSC = function () {
			W([1000, 1000], {g: 0, t: 0}).jukeBox().y(100, 100).rt(200)
			w.drag()
			r = $.tallRange()
			$t(function () {
				zoom = function () {
					return r.val() / 25 + 1
				}
				w.zoom(zoom())
			})
		}
		W.TEMPLE = function () {
			W([1200, 600, 2400, 1200], {g: 0})
			w.S(1200, 300, 'r', 400, 100)
			w.S(1200, 600, 'w', [[100, 100, '-']])
			w.S(1200, 900, 'r', 400, 100)
			return w
		}
		DRAGSCALE = SCROLLNOLIM = SNL = function () {
			W.TEMPLE()
			w.dragScale()
			w.zoom(.8)
					.y(500, 500)
					.track(100, 300, '-')
		}
	}
}
 
function bodyProxyTrack() {
	b._track = function (x, y, fn) {
		var b = this, w = b.W()
		w._track(b, x, y, fn)
		return b
	}
	b.tr = b.track = function (x, y, z) {
		var b = this, w = b.W()
		w.track(b, x, y, z)
		return b
	}
	b.tr = b.track = function (x, y, z) {
		var b = this, w = b.W()
		w.track(b, x, y, z)
		return b
	}
	b.track = function (x, y, z) {
		var b = this, w = b.wor()
		w.track(b, x, y, z)
		return b
	}
}
 