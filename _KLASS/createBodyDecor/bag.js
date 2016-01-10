w.bag = w.pD = function (x, y) {
	var b = w.D(x, y), g = G(arguments)
	b.pF.apply(b, _.r(g, 2))
	return b.decor(g).K('bag')
}