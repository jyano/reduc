//wall
w.isWall = function (b) {
	var w = this;
	return b == w.right || b == w.left || b == w.roof || b == w.floor
}
w.clr = function () {
	var w = this
	w.e(function (b) {
		if (!w.isWall(b)) {
			b.kill()
		}
	})
	return w
} //=w.wXx
w._walls = function (o) {
	var w = this
	if (o.w == '*') {
		sides();
		verSides()
	}
	if (o.w == '@') {
		w.warp();
		return w
	}
	if (o.w == '_') {
		bot()
	}
	if (o.w == '~') {
		top()
	}
	if (o.w == '[') {
		left()
	}
	if (o.w == ']') {
		right()
	}
	if (o.w == 'U') {
		sides();
		bot()
	}
	if (o.w == 'A') {
		sides();
		top()
	}
	if (o.w == 'C') {
		verSides();
		left()
	}
	if (o.w == 'L') {
		left();
		bot()
	}
	if (o.w == '=') {
		verSides()
	}
	if (o.w == '|') {
		sides()
	}
	if (o.w == '->') {
		verSides();
		left();
		right1()
	}
	if (o.w == '<-') {
		verSides();
		left1();
		right()
	}
	if (o.w == '<->') {
		verSides();
		left1();
		right1()
	}
	if (o.w == 'r2') {
		verSides();
		left();
		right2()
	}
	if (o.w == 'l2') {
		verSides();
		left2();
		right()
	}
	function sides() {
		right();
		left()
	}
	
	function verSides() {
		top();
		bot()
	}
	
	function left() {
		w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h).K('wall side left');
		w.l_.SetBullet(true)
	}
	
	function right() {
		w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h).K('wall side right');
		w.r_.SetBullet(true)
	}
	
	function right2() {
		w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
	}
	
	function right1() {
		w.r1_ = w.right1 = w.S(w.w, 100, o.c, o.l * 2, 200);
		w.r2_ = w.right2 = w.S(w.w, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
	}
	
	function left2() {
		w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
	}
	
	function left1() {
		w.l1_ = w.left1 = w.S(0, 100, o.c, o.l * 2, 200);
		w.l2_ = w.left2 = w.S(0, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
	}
	
	function top() {
		w.t_ = w.roof = w.S(w.w / 2, 0, 'o', w.w, o.l * 2).K('wall roof');
		w.t_.SetBullet(true)
	}
	
	function bot() {
		w.b_ = w.floor = w.S(w.w / 2, w.h, o.c, w.w, o.l * 2).K('wall floor');
		w.b_.SetBullet(true)
	}
}
w.walls = function () {
	var w = this, g = G(arguments), o
	if (g.f === 0) {
		return
	}
	w._walls(wallOp(g))
	function wallOp(g) {
		var o = g.A ? {w: g.f[0], c: g.f[1]} : {w: g.f, c: g.s}
		o.c = o.c || 'o';
		o.w = o.w || '*';
		o.l = 40
		return o
	}
}
function walls() {
//the walls themselves are made with w.BOX
	w.wall = function (x, y, wd, ht) {
		var w = this
		var b = w.brick(x, y, wd, ht)
				.stat().fr(0).K('wall')
		return b
	}
// soft brick?
// soft ball?  circle
// soft bump?
// soft box  rectangle
	w.thin = function () {
		var w = this, b
		return b
	}
	w.flat = function () {
		var w = this, b
		return b
	}
// a tall is a canvas-heighted thin 
// a long is canvas-widthed flat
	w.tall = function Side(x) {
		var ht = w.can.height
		return this.wall(x, ht / 2, 40, ht)
	}
	w.long = function Flat(y) {
		var wd = w.can.width
		return this.wall(wd / 2, y, wd, 40)
	}
	w.walls = function (wa) {
		var w = this;
		if (wa === 0) {
			return w
		}  //if (F(wa = S(wa) ? window[wa] : wa)) {wa();return}
		w.left = w.tall(0)
		w.right = w.tall(w.can.width)
		w.roof = w.long(0)
		w.floor = w.long(w.can.height)
		return w
	}
	//
	w.vW = function (col, H, x, y) {
		var w = this, g = G(arguments), cW = w.canvas.width, cH = w.canvas.height
		if (!S(col)) {
			y = x;
			x = H;
			H = col;
			col = 'x'
		}
		H = (H == '+') ? cH : N(H) ? H : cH / 2 - 10
		if (U(x)) {
			x = cW / 2;
			y = cH / 2 - H / 2
		}
		else if (U(y)) {
			x = (x == '+') ? cW - 20 : (x == '-') ? 0 : x
			y = cH / 2 - H / 2
		}
		//x-=10?
		return w.R(col, 20, H, x, y).bo(.2).K('wall')
	}
	w.walls = function (o) {
		var w = this,
				can = w.canvas,
				W = can.width,
				H = can.height,
				wa = o.w,
				col, h
		if (wa == 0) {
			return w
		}
		if (F(wa)) {
			wa()
		}
		else if (A(wa)) {
			col = wa[0]
			W = wa[1]
			h = wa[2]
			if (!S(col)) {
				h = W;
				W = col;
				col = 'o'
			}
			W = N(W) ? W : w.W()
			h = N(h) ? h : w.H()
			w.floor = w.R(col, W, 20, 0, h - 20)
			w.right = w.R(col, 20, h, W - 20, 0)
			w.roof = w.R(col, W, 20, 0, 0)
			w.left = w.R(col, 20, h, 0, 0)
		}
		else if (wa == '_') {
			w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
		}
		else if (wa == 'L') {
			w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
			w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
		}
		else if (wa == 'U') {
			w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
			w.right = w.S(W, H / 2, 'o', 40, H).K('wall side left')
			w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
		}
		else {
			w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
			w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
			w.right = w.S(W, H / 2, 'o', 40, H).K('wall side left')
			w.roof = w.S(W / 2, 0, 'o', W, 40).K('wall roof')
		}
		w.$$(function () {
			w.S(w.mx, w.my, 'x', [[10, 10, '-']])
		})
		return w
	}
}
//the walls themselves are made with w.BOX
w.wall = function (x, y, wd, ht) {
	var w = this
	var b = w.brick(x, y, wd, ht)
			.stat().fr(0).K('wall')
	return b
}
// soft brick?
// soft ball?  circle
// soft bump?
// soft box  rectangle
w.thin = function () {
	var w = this, b
	return b
}
w.flat = function () {
	var w = this, b
	return b
}