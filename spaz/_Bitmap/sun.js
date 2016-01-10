w.sun = function (x, y) {
	var w = this
	//djd.init?? joint
	x = N(x, 300)
	y = N(y, 150)
	return w.S(300, 150, 20, 'p', 10).d(1).r(.5).bS('sun', .2)
}