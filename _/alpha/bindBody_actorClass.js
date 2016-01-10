// ACTOR CLASSES

CircSprite = function (x, y, r, c) {
	
	c = oO('c', c || 'o')
	x = N(x, 300)
	y = N(y ,100)
	r = N(r , 80)
	var sp = this
	sp.b = sp.body = w.ball(x, y, r)
	sp.g = sp.graphic = cjs.circ(r, c).XY(x, y)
			.bindBody(sp.body)
	w.s.A(sp.g)
	return sp.g
}



circSprite = function (x, y, r, col) {
	return new CircSprite(x, y, r, col)
}

StatCircSprite = function (x, y, r, c) {
	c = oO('c', c || 'orange')
	x = x || 300;
	y = y || 100;
	r = r || 80
	var sp =this

	sp.b = sp.body = w.bumper(x, y, r)
	
	// alt: sp.g = sp.graphic = cjs.circ(r, c).XY(x, y).bindBody(sp.body)
	sp.g = sp.graphic = cjs.circ(r, c).XY(x, y)
			.bindBody(sp.body)
	w.s.A(sp.g)
	return sp.g
}
 
statCircSprite = function (x, y, r, col) {
	return new StatCircSprite(x, y, r, col)
}
PHYSICSCIRCLE = function () {
	w = b2.mW()
	b = w.ball(300, 300, 50)
	c = cjs.circle(50).XY(300)
	b.bindSprite2(c)
	StatRectSprite = function (x, y, W, h, color) {
		x = x || 300;
		y = y || 100;
		W = W || 100;
		h = h || 50
		color = oO('c', color || 'green')
		this.b = this.body = w.box(x, y, W, h).stat()
		this.g = this.graphic = cjs.rect(W, h, color).XY(x, y).bindBody(this.body)
		w.s.A(this.g)
		return this
	}
	b.srs = b2.statRectSprite = statRectSprite = function (a, b, c, d, color) {
		return new StatRectSprite(a, b, c, d, color)
	}
	//w.debug(false)
	t = statRectSprite(400, 400, 400, 50, 'p');
	RT(t.graphic)
	u = statRectSprite(200, 400, 100, 200, 'p');
	SK(u.graphic)
	statCircSprite(400, 400, 80, 'pink')
}