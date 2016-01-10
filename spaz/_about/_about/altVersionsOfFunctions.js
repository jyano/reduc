f.bS = function () {
	this.sprites = this.sprites || []
	//higher level.. can handle obs and Q-strings
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o, sprite
	if (S(g.f)) {
		return f.bSQ(g.f)
	}// not alerted
	o = cjs.iDO(g.f) ? {
		j: g.f, rt: g.s, x: g.t, y: g[3], o: g[4]
	} : g.f
	$df.bsDF(o)
	sprite = o.j.al(N(o.al, 1))
	f.sprites.push(sprite)
	w.gx.A(sprite)
	T.t(function () {
		sprite
				.XY(b.X() + o.x, b.Y() + o.y)
				.rt(b.rt() + o.rt)
	})
	return f
}