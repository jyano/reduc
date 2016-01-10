w.dbX = function () {
	var w = this
	w.line(0, 0, w.W(), w.H(), '+')
	w.line(0, w.W(), w.H(), 0, '+')
	if (N(w.w) && N(w.h)) {
		w.line(0, 0, w.w, w.h)
		w.line(0, w.W(), w.H(), 0)
	}
}
ct.reset = function () {
	alert('ct.reset')
	this.St().removeAllChildren()
	T.removeAllListeners()
}
cross = function () {
	r = w.S(600, 300, 'r', 300, 100, 0, 0, 30)
	b = w.S(600, 300, 'b', 300, 100).rt(-35)
}
//move to x-middle of stage
b.horizCenter = function () {
	return this.X(this.wor().s.W() / 2)
}
w.dr = function (col, x, y, W, h) {
	var w = this,
			g = G(arguments),
			col = g[0], x = g[1], y = g[2], W = g[3], h = g[4]
	if (g.p) {
		if (!S(col)) {
			h = W;
			W = y;
			y = x;
			x = col;
			col = 'b'
		}
		w.s.HUD.shape().fs(col).rect(x, y, W, h)
	}
	else if (g.n) {
		if (!S(col)) {
			h = W;
			W = y;
			y = x;
			x = col;
			col = 'r'
		}
		w.s.back.shape().fs(col).rect(x, y, W, h)
	}
	else {
		if (!S(col)) {
			h = W;
			W = y;
			y = x;
			x = col;
			col = 'w'
		}
		w.s.shape().fs(col).rect(x, y, W, h)
	}
}
w.Y = function (x, Y) {
	var w = this;
	y = w.ship(x, Y);
	return w
}
//w.s.shape().fs('y').rect(100,100,100,100)
//w.s.HUD.shape().fs('o').rect(100,200,100,100)
w.line = function (col, x1, y1, x2, y2) {
	var w = this,
			g = G(arguments),
			col = g[0],
			x1 = g[1], y1 = g[2],
			x2 = g[3], y2 = g[4]
	if (g.p) {
		if (!S(col)) {
			y2 = x2;
			x2 = y1;
			y1 = x1;
			x1 = col;
			col = 'b'
		}
		h = w.s.HUD.shape()
		return h.sC(col, 8).mt(x1, y1).lt(x2, y2)
	}
	else if (g.n) {
		if (!S(col)) {
			y2 = x2;
			x2 = y1;
			y1 = x1;
			x1 = col;
			col = 'x'
		}
		return w.s.back.shape().sC(col, 8).mt(x1, y1).lt(x2, y2)
	}
	else {
		if (!S(col)) {
			y2 = x2;
			x2 = y1;
			y1 = x1;
			x1 = col;
			col = 'w'
		}
		return w.s.shape().sC(col, 8).mt(x1, y1).lt(x2, y2)
	}
}