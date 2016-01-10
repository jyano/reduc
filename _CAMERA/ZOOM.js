w.zoom = function (zm) {
	var w = this
	return U(zm) ? w._zoom :
			w.ZOOM(cjs.cap(zm, w.minScale, 4))
}
w.zoomIn = function () {
	var w = this
	w.tCb = function () {
		w.zoom(w.zoom() * 1.02)
	}
	return w
}
w.zoomOut = function () {
	var w = this
	w.tCb = function () {
		w.zoom(w.zoom() * .98)
	}
	return w
}
w.showOff = function () {
	var w = this
	zin()
	return w
	function zout() {
		setTimeout(zin, 10000);
		w.zoomOut()
	}
	
	function zin() {
		setTimeout(zout, 4000);
		w.zoomIn()
	}
}
function moreZoom() {
	w.ZOOM = function (zm) {
		var w = this
		var stg = w.stage
		if (U(zm)) {
			return stg.scaleX
		}
		stg.scaleX = zm
		stg.scaleY = zm
		return w
	}
	w.getZ = function () {
		return this._zoom
	}
	w.updStgZoom = function () {
		var w = this
		w.st.scaleX = w._zoom
		w.st.scaleY = w._zoom
		return w
	}
	w.setZ = function () {
		var w = this, g = G(arguments)
		w._setZ = function (zoom) {
			var w = this, g = G(arguments)
			w._zoom = zoom
			return w.updStgZoom()
		}
		var zoom = g.f
		//zoom = g.n ? w.mZ : _.capTop(zoom, w.mZ)
		return w._setZ(zoom)
	}
	w.zoom = function () {
		var w = this, g = G(arguments)
		return g.u ? w.getZ() : w.setZ(g.f)
		//
		//if (g.u) {return w.z}
		//w.z = g.n ? w.mS : _.cap(g.f, w.mS)
		//w.st.sXY( w.z )
		//return w // get/set zoom.. ok cool :)
	}
	w.zoomOut = function () {
		var w = this
		//knows when to stop :)
		w.setTrackeeCallback(function () {
			w.zoom(_.cap(w._zoom *= .98, w.maxZoom))
		})
		return w
	}
	w.zoomIn = function () {
		var w = this
		w.trackeeCb = function () {
			w.zoom(_.capTop(w._zoom *= 1.02, 4))
		}
		return w
	}
	w.inout = function () {
		var w = this, // now it works!!!!
				s = 1,
				up = true
		w.trackee.cb = function () {
			if (up) {
				if (s < 2) {
					s += .2;
				}
				else {
					up = false
				}
				w.zoom(s)
			}
			else {
				if (s > .8) {
					s -= .2
				}
				else {
					up = true
				}
				w.zoom(s)
			}
		}
		return w
	}
	w.showOff = function () {
		var w = this
		zin()
		function zout() {
			w.zoomOut();
			_.in(10, zin)
		}
		
		function zin() {
			w.zoomIn();
			_.in(4, zout)
		}
		
		return w
	}
	w.zoomOut = function () {
		var w = this //knows when to stop :)
		w.tCb = function () {
			w.Z(_.cap(w.z *= .98, w.mS))
		}
		return w
	}
	w.zoomIn = function () {
		var w = this
		w.tCb = function () {
			w.Z(_.cap(w.z *= 1.02, 0, 4))
		}
		return w
	}
	w.inout = function () {
		var w = this, // now it works!!!!
				s = 1,
				up = true
		w.t.cb = function () {
			if (up) {
				if (s < 2) {
					s += .2;
				}
				else {
					up = false
				}
				w.Z(s)
			}
			else {
				if (s > .8) {
					s -= .2
				}
				else {
					up = true
				}
				w.Z(s)
			}
		}
		return w
	}
	w.showOff = function () {
		var w = this
		zin()
		function zout() {
			w.zoomOut();
			_.in(10, zin)
		}
		
		function zin() {
			w.zoomIn();
			_.in(4, zout)
		}
		
		return w
	}
}