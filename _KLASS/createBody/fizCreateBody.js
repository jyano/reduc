
w.ball = function (x, y, r) {
	var w = this
	if (O(x)) {
		r = y;
		y = x.y;
		x = x.x
	}
	x = x || 100
	y = N(y) ? y : x
	r = r || 30
	var ball = w.dB(x, y).CF($cF(r))
	ball.K('ball')
	return ball
}

