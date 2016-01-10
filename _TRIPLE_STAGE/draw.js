b.stg = function () {
	return this.wor().s
}
b.click = function (func) {
	var b = this, w = this.wor()
	w.s.on('stagemouseup', function (e) {
		w.queryPoint(function (f) {
					if (b == f.B()) {
						_.bind(func, b)(f)
					}
				},
				e.rawX, e.rawY)
	})
}
b.img = b.bindSprite = function (img, scale, startingRotation) { //img is an image name  //rotation is in degerees!
	var body = this, stage = body.wor().s
	scale = scale || .4
	startingRotation = N(startingRotation) ? startingRotation : 6 // why not zero ?????
	stage.bm(img, function (bm) {//b=bm  //bm.rCenter('+')
		if (A(scale)) {
			bm.sXY(scale[0], scale[1])
		} else {
			bm.sXY(scale)
		}
		body.sprite = bm  //only one???
		updateSprite()
		cjs.tick(updateSprite)
		function updateSprite() {
			bm.XY(body.X(), body.Y()) //can simplify?
			bm.rotation = body.rot() + startingRotation
		}
	}, '-') // what is this negative doing ?????
	return body
}
b.mid = function () {
	var b = this, w = b.W()
	return b.XY(
			w.w / 2,
			w.h / 2
	)
	function alt() {
		b.mid = function () {
			var b = this, w = b.wor()
			return b.XY(w.w / 2, w.h / 2)
		}
	}
}
w.gx = function (o) {
	var w = this, W = o.W, H = o.H
	w.bg = new cjs.Stage($.can(o.C || 'z', W, H).P('a').XY(0, 0)[0]).A().tick();
	w.bg.linGrad = function (c1, c2) {
		var s = this, H = s.H(), W = s.W()
		c1 = oO('c', c1 || 'b')
		c2 = oO('c', c2 || 'r')
		if (R()) {
			$l('=')
			if (R()) {
				s.SHAPE.linGrad([c1, c2], [0, 1], 0, 0, 0, H).dr(0, 0, W, H)
			}
			else {
				s.SHAPE.linGrad([c1, c2], [0, 1], 0, 0, W, 0).dr(0, 0, W, H)
			}
		}
		else {
			$l('/')
			if (R()) {
				if (R()) {
					s.SHAPE.linGrad([c1, c2], [0, 1], W, H, 0, 0).dr(0, 0, W, H)
				}
				else {
					s.SHAPE.linGrad([c1, c2], [0, 1], 0, 0, W, H).dr(0, 0, W, H)
				}
			}
			else {
				if (R()) {
					s.SHAPE.linGrad([c1, c2], [0, 1], W, 0, 0, H).dr(0, 0, W, H)
				}
				else {
					s.SHAPE.linGrad([c1, c2], [0, 1], 0, H, W, 0).dr(0, 0, W, H)
				}
			}
		}
	}
	w.bg.SHAPE = w.bg.shape(0, 0, 'w')
	w.bg.linGrad('z', 'w')
	w.s = w.stage = new cjs.Stage($.can('X', W, H).P('a').XY(0, 0)[0]).A().noAutoClear().tick()
	w.canvas = w.s.canvas
	w.c = w.can = $(w.canvas).id('canvas')
	w.ctx = w.context = w.c.ctx('2d')
	w.hud = new cjs.Stage($.can('X', W, H).P('a').XY(0, 0)[0]).A().tick()
	w.hud.h = w.hud.shape().fs($r()).rect(0, 0, 5000, 5000).opacity(.3)
	w.hud.c = $(w.hud.canvas)
	w.s.back = w.bg
	w.s.HUD = w.hud
	return w
}
w.cent = function () {
	var w = this, g = G(arguments),
			v = V(w.s.W() / 2, w.s.H() / 2)
	if (g.p) {
		w.dot(v)
	}
	return v
}
w.show = function (showWhat) {
	var world = this, what
	I(function () {
		what = F(showWhat) ? showWhat(world) : window[showWhat]
		what = F(what) ? what() : what
		world.pen(what)
	}, 200)
	TEST = function () {
		w = b2d.W()
		num = 0
		w.show(function () {
			return num
		})
	}
}
w.chalk = function () {
	this.s.chalk.apply(this.s, arguments)
	return this
}
function stage() {
	w.setBg = function (o) {
		var w = this;
		if (o.i) {
			w.s.bm(o.i)
		}
		;
		return w
	}
	w.auCl = function (aC) {
		var w = this, st = w.st
		if (U(aC)) {
			return st.autoClear
		}
		st.autoClear = aC ? true : false
		return w
	}
	w.ggAuCl = function () {
		var w = this
		w.auCl(!w.auCl())
		return w
	}
}
function world() {
//function write() {
	CHALK = function () {
		w = b2d.mW()
		s = w.s
		s.bm('me')
		text = cjs.chalk('some information ....')
		text2 = cjs.chalk('some more').XY(50, 90)
		s.A(text, text2)
	}
	CHALK = function () {
		w = b2.mW()
		s = w.s
		s.bm('me')
		text = cjs.chalk('some information ....')
		text2 = cjs.chalk('some more').XY(50, 90)
		s.A(text, text2)
	}
	CHALK = function () {
		w = b2.mW()
		s = w.s
		s.bm('me')
		text = cjs.chalk('some information ....')
		text2 = cjs.chalk('some more').XY(50, 90)
		s.A(text, text2)
	}
}
w.dot = function (col, x, y) {
	var w = this,
			g = G(arguments),
			col = g[0], x = g[1], y = g[2]
	if (g.m) {
		w.dot(col, x, y);
		w.dot(col, x, y, '+')
	}
	if (g.p) {
		if (!S(col)) {
			y = x;
			x = col;
			col = 'b'
		}
		w.hud.dot(col, x, y)
		//w.s.HUD.dot.apply(w.s.HUD, arguments) //interesting.. dotting just needs a stage
	}
	else {
		if (!S(col)) {
			y = x;
			x = col;
			col = 'w'
		}
		w.s.dot(col, x, y)
	}
	return w
}
w.pen = function () {
	this.s.pen.apply(this.s, arguments)
	return this
}
w.fadeTitle = function (text) {
	text = text || 'no text provided, yo'
	setTimeout(function () {
		t = w.s.text(text, 50, 'white', 600, 100)
		t.tween([{a: 0, sxy: 0}, 2000])
		setTimeout(function () {
			t.remove()
		}, 1000)
	}, 500)
	return this
}
w.flash = function () {
	this.s.flash.apply(this.s, arguments)
	return this
}
w.C = function (col) {
	var w = this
	w.c.C(col)
	return w
}
b.bindSprite2 = function (obj, startingRotation, x, y) {
	//takes any display object.  right now, just used for shapes
	//because bindSprite fetches the bm's by string.
	//but when i set up preloader, then i would use this i suppose :)
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var body = this,
			stage = body.GetWorld().stage
	//  stage.A( displayObject = obj )
	startingRotation = N(startingRotation) ? startingRotation : 0
	body.sprites = body.sprites || []
	body.sprites.push(obj)
	body.sprite = obj
	body.sprite.a2(stage)
	//updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
	cjs.tick(function () {
		if (!body.sprite) {
			return
		}
		_.each(body.sprites, function (sprite) {
			sprite.XY(
					body.X() + (x || 0),
					body.Y() + (y || 0)
			)
			sprite.rotation = body.rot() + startingRotation
		})
	})
	return body
}
b.p = function (a, b, c, d) {
	if (O(this.sprite)) {
		this.sprite.p(a, b, c, d)
	}
	return this
}
b.s = function (a, b, c, d) {
	if (O(this.sprite)) {
		this.sprite.s(a, b, c, d)
	}
	return this
}
b.centerScale = function (scale) {
	var body = this
	body.stg().sXY(scale)
			.X(300 - ((body.X() - 300) * scale))
			.Y(150 - ((body.Y() - 150)) * scale)
	return this
}
b.color = function (c1, c2) {
	c1 = c1 || 'b';
	c2 = c2 || c1
	_.each(this.fixts(), function (f) {
		f.color(c1, c2)
	})
}
b.hCen = b.hoCen = b.hzCen = function () {
	var b = this
	return b.X(b.W().st.W() / 2)
}
b.constF = function (x, y) {
	var b = this
	$t(function () {
		b.F(x, y)
	})
	return b
}
b.warp = function (p) {
	var p = this
	$t(function () {
		if (p.Y() < 0) {
			p.Y(300)
		}
		if (p.Y() > 300) {
			p.Y(0)
		}
		if (p.X() < 0) {
			p.X(600)
		}
		if (p.X() > 600) {
			p.X(0)
		}
	})
	return this
}
f.dot = function (c) {
	var f = this, b = f.B(), w = b.W()
	var stg = w.s
	if (c) {
		return stg.dot(c, f.cen())
	}
	return stg.dot(f.cen())
}
w.gridDrawer = function (x, y, len, spa) {
	var w = this
	len = N(len) ? len : 30;
	spa = N(spa) ? spa : 20
	return function (x, y) {
		b.rect(len, len, x * spa, y * spa);
		return b
	}
}
w.GRID = function (gd, x, y, l, spa) {//spacing
	var w = this
	var b = w.D(x, y)
	_.t(_.z(gd), function (rw) {
		_.t(_.z(_.f(gd)), function (c) {
			if (gd[c][rw]) {
				b.rect(l, l, rw * spa, c * spa, 'p');
			}
		})
	})
	return b.K('grid')
}
COLORMAZE = MMM = MARIOMAZE = function () {
	W({W: 600, H: 300, g: 0, w: 0}).db().stars(80)
	p = w.p(2.5).XY(220, 70).con('thrust').aD(10000)
	//p.follow(300, 150)
	grid = w.GRID(maze, 100, -100, 14, 40)
	score = 100
	$t(function () {
		
		//grid.aV(.2)
		//w.st.HUD.pen(score)
	})
	//w.b(function (cx) {cx.w('player', 'grid', function() {score--		   })})
	// grid.angDamp(1)
}