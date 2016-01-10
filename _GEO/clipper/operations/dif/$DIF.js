$DIF = function () {
	var g = G(arguments)
	if (g.A) {
		return g.ap($DIF)
	}
	var p = M.p(g.f)
	g.eR(function (pol) {
		p = p.D(M.p(pol))
	})
	return p
}
 