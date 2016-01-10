DIFA = function () {
	W()
	b = w.S(300, 400, [['b', 100, 40, 40, 40, 39]])
	x = w.S(300, 400, [['x', 30, 40]])
	b.D = function () {
		var b = this, g = G(arguments)
		var pD = b.pD()
		g.e(function (arg) {
			pD = pD.D(arg)
		})
		return pD.tlNeg(b)
	}
	//vs = b.pD().D( x.pD() ).tlNeg(b)
	vs = b.D(x.pD())
	w.pol(300, 300, vs)
}