w.lG = function (c, c2) {
	var w = this, o
	o = {c1: c2 || 'z', c2: c || 'r', x1: 0, y1: 0, x2: 0, y2: 0}
	_.x(o, R() ? (R() ? {y2: w.h} : {x2: w.w}) :
			R() ? (R() ? {x1: w.w, y1: w.h} : {x2: w.w, y2: w.h}) :
					R() ? {x1: w.w, y2: w.h} : {y1: w.h, x1: w.w})
	w.bg.h().lf(o).dr(0, 0, w.w, w.h)
	w.bg.h(0, 0, $r()).dr(0, 0, w.w, w.h).al(.2)
	return w
}
 