Sep$ = Separate = function (b, vs, sc) {
	var g = G(arguments),
			i, j, m, vexPols, polyShape, n
	b = g[0]
	vs = g[1]
	sc = N(g[2], 30)
	if (A(b)) {
		sc = vs;
		vs = b;
		b = g.p ? w.ball(300, 300, 4) : w.dyn(300, 300)
	}
	_.e(calcShapes(_.m(vs, V)), function (vec) {
		// vv = vec; vvv = _.m(vv, function(v){return [v.x, v.y]})
		// b.bindSprite2(
		//  w.s.shape(body.X(), body.Y()).poly(vvv, 'r', 'b', 1)
		// )
		h = b2d.pH().setAsVec(vec, sc)
		b.f(b2d.f(h))
	})
	return b.d(1)
}

