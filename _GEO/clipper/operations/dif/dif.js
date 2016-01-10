f.DIFFold = function (b2) {
	var f = this, b = f.B(), g = G(arguments), b2 = g[0]//,diff
	// diff =  Math.poly( f.V() ).difference(  Math.poly( b2.V() ) )
	diff = f.minus(b2)
	//if( ! b2d.hasVerts(diff) ){ f.kill(); return }
	// b.conc(   b.rel(diff) )
	b.conc(diff)
	f.kill()
	if (g.n) {
		b2.kill()
	}
	return this
} 
b.DIFF = function (b2) {
	var g = G(arguments),
			b2 = g[0],
			b = this, f = b.fixt(),
			dffV = b.dff(b2).verts()
	b2d.conc(b,
			_.map(dffV, function (v) {
				return V(v[0] - b.X(), v[1] - b.Y())
			}))
	f.kill()
	b.rot(0)
	if (g.n) {
		b2.kill()
	}
	return this
}
 