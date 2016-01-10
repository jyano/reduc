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
w.rectStat = function (x, y, wd, ht, color) {
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.brick(x, y, wd, ht).bindSprite2(
			cjs.rect(wd, ht, color).XY(x, y)
	).linDamp(2)
}
w.rectSensor = function (x, y, wd, ht, color) {
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.brickSensor(x, y, wd, ht).bindSprite2(
			cjs.rect(wd, ht, color).XY(x, y).opacity(.5)
	).linDamp(2)
}
b.rectSensor = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var that = this
	var rect = b2d.poly(wd, ht, x, y)
	rect.isSensor = true
	var fixt = this.fixt(rect)
	fixt.den(.00000001)
	var r = cjs.rect2(wd, ht, x, y)
	r.XY(this.X(), this.Y())
	w.s.A(r)
	r.opacity(.3)
	cjs.tick(function () {
		r.rot(that.rot())
		r.XY(that.X(), that.Y())
	})
	fixt.sprite = r
	return fixt
}
w.buck = w.sensorBucket = function (x, y, k) {
	var w = this//x = N(x) ? x : 320 //y = N(y) ? y : 245
	k = k || 'sensorBucket'
	Part(x, y + 95, 320)
	Part(x - 150, y - 15)
	Part(x + 150, y - 15)
	return w.rectSensor(x, y, 280, 170, 'b').K(k)
	function Part(x, y, wd) {
		return w.BRICK(x, y, wd, 20, 200, 'o')
	}
}
w.rectSensor = function (x, y, wd, ht, color) {
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.brickSensor(x, y, wd, ht).bindSprite2(
			cjs.rect(wd, ht, color).XY(x, y).opacity(.5)
	).linDamp(2)
}