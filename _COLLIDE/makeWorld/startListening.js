w.startListening = w.handle = function () {
	var w = this
	w._l = w._l || $cL()
	w.beginHandlers = w.BG = w.BG || [] //bH
	w.preHandlers = w.PRE = w.PRE || [] //pH
	w.postHandlers = w.PO = w.PO || [] // PH
	w.endHandlers = w.END = w.END || [] // eH
	w.listener = w.listener || b2d.listener()
	w._l.BeginContact = function (cx) {
		_.e(w.BG, function (fn) {
			_.in(0, function () {
				fn(cx)
			})
		})
	}
	//w._l.BeginContact = $CL.handle(w.BG)
	//function (cx,d) {_.e(w.BG, function (fn) {fn(cx,d)})}
	w._l.PreSolve = function (cx, d) {
		_.e(w.PRE, function (fn) {
			fn(cx, d)
		})
	}
	w._l.PostSolve = function (cx, d) {
		_.e(w.PO, function (fn) {
			fn(cx, d)
		})
	}
	w._l.EndContact = function (cx, d) {
		_.e(w.END, function (fn) {
			fn(cx, d)
		})
	}
	W._l = w._l || $CL()
	_.x(w._l, {
		BeginContact: function (cx) {
			_.e(w.BG, function (fn) {
				_.in(0, function () {
					fn(cx)
				})
			})
		},
		EndContact: function (cx) {
			_.e(w.END, function (fn) {
				_.in(0, function () {
					fn(cx)
				})
			})
		},
		PreSolve: function (cx, i) {
			_.e(w.PRE, function (fn) {
				fn(cx, i)
			})
		},
		PostSolve: function (cx, pam2) {
			_.e(w.PO, function (fn) {
				_.in(0, function () {
					fn(cx, pam2)
				})
			})
		}
	})
	w.SCL(w._l)
	return w
}

