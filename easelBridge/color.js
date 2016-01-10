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