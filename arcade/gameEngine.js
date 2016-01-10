$boxFn = function (fn) {
	return function () {
		$box()
		fn()
	}
}
W.U = function (g) {
	W().G(g).roof.kill()
	return w
}
W.L = function (g) {
	W().G(g)
	w.roof.kill()
	w.right.kill()
	return w
}
enterFrame = function () {
	if (w.mj) {
		w.mj.tg(w.mx, w.my)
	}
	w.step(1 / 60)
	if (F(o.cb)) {
		o.cb()
	}
	if (!T.iP()) {
		w.I.u();
		w.s.u();
		w.i.u()
	}
	w.DrawDebugData()
	w.e(function (b) {
		b.wX = b.X();
		b.wY = b.Y()
		b.sX = w.wTS(b.wX, b.wY).x
		b.sY = w.wTS(b.wX, b.wY).y
		if (O(b.gx)) {
			b.gx.XY(b.X(), b.Y()).rt(b.rt())
		}
	})
}
 