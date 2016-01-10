w.roc = w.rck = w.rock = w.pS = function (x, y) {
	var w = this, g = G(arguments)
	var b = w.S(x, y)
	b.pF.apply(b, _.r(g, 2))
	return b.decor(g).K('rock')
}
 