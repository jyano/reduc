w.C = function (color) {
	$(this.stage.canvas).C(color)
	return this
}
b.C = function (col) {
	this.each(function (f) {
		f.C(col)
	})
	return this
}
f.C = f.color = function (c1, c2) {
	var f = this, b = f.body(),
			w = b.wor(), shape, rad, pos
	c1 = c1 || 'b'
	c2 = c2 || c1
	if (f.isCirc()) {
		rad = f.rad()
		pos = f.pos()
		shape = w.s.shape().cir(rad, pos.x, pos.y, c1)
	}
	else {
		shape = w.s.shape().poly(f.verts(), c1, c2, 1)
	}
	f.removeSprites()
	f.bindSprite(shape)
	// return this
}
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
w.C = function (c) {
	var w = this
	w.bg.h().c(c || $r()).dr(0, 0, w.w, w.h)
	return w
}