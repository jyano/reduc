w.spB = w.spriteBox = function (data, x, y, scale) { //for 400 x 400 flash squares !!!
	x = N(x) ? x : 300;
	y = N(y) ? y : x //weird defaults - not intuitive
	var sprite = cjs.sprite(data).rXY(200).sXY(.5).a2(this.st)
	if (N(scale)) {
		sprite.sXY(scale)
	}
	return this.box(x, y, 100, 100).bindSprite2(
			sprite
	)
}
w.spriteBox = function (data, x, y, scale) { //for 400 x 400 flash squares !!!
	x = N(x) ? x : 300;
	y = N(y) ? y : x //weird defaults - not intuitive
	var sprite = cjs.sprite(data).rXY(200).sXY(.5).a2(this.s)
	if (N(scale)) {
		sprite.sXY(scale)
	}
	return this.box(x, y, 100, 100).bindSprite2(
			sprite
	)
}