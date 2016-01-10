b.H = b.h = function (arg) {
	var b = this, g = G(arguments), arg = g[0],
			len = length(g)
	if (g.u) {
		return b.f() && b.f().H() // return b
	}
	//passing a single array, suggest MULTIPLE fixts
	//[f1,f2,..]
	if (A(g[0]) && U(g[1])) {
		_.each(g[0], function (a) {
			b.H.apply(b, a)
		})
	}
	
	
	//[col,[f1,f2,..]]
	else if (S(g[0]) && A(g[1]) && U(g[2])) {
		_.each(g[1], function (f) {
			if (b2d.isFixtDef(f)) {
				b.fixt(f).C(g[0])
			}
			else {
				if (!S(f[0])) {
					f = _.map(f, function (a) {
						return a
					})
					//*** ?
					f.unshift(g[0])
				}
				if (b2d.isFixtDef(f[1])) {
					b.fixt(f[1]).C(f[0])
				}
				else {
					b.H.apply(b, f)
				}
			}
		})
	}
	//fixtDef
	else if (b2d.isFixtDef(g[0])) {
		b.fixt(g[0])
	}
	//['color', fixtDef]
	else if (S(g[0]) && b2d.isFixtDef(g[1])) {
		b.fixt(g[1]).C(g[0])
	}
	
	//verts
	else if (O(g[1])) {
		if (g.n) {
			g.push('-')
		}
		b.conc(g)
		//b.convex(g)
	}
	
	//circ
	else if (len == 1 || len == 3) {
		if (g.n) {
			g.push('-')
		}
		b.CIRC.apply(b, g)
	}
	
	//rect
	else {
		if (g.n) {
			g.push('-')
		}
		b.RECT.apply(b, g)
	}
	function length(arr) {
		var len = arr.length
		if (S(arr[0])) {
			len--
		}
		if (S(_.last(arr))) {
			len--
		}
		return len
	}
	
	return b
}