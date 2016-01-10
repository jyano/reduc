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
 