w.th = w.thrust = function (c, x, y, r) {
	return this.D(N(x, 600), N(y, 500),
			c || 'b', N(r, 40)).cn('thrust')
}