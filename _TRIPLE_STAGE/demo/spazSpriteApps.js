BOXSPRITE = function () {
	w = b2d.W().debug()
	meBall = function () {
		spr = meSprite().rCenter().sXY(.4).rXY(230, 260)
		b = w.ball(400, 400, 40).bindSprite2(spr, 6)
	}
	meBall()
	w.box().bindSprite('guy')
	w.beg(function (cx) {
		if (cx.with('ball', 'box')) {
			spr.p('explode')
			setTimeout(function () {
				b.kill()
				meBall()
			}, 1000)
		}
	})
}
BOXPACK = function () {
	w = b2d.W({})
	w.platform(500, 300, 200, 200)
	pack = function (anim) {
		anim = anim || 'f1'
		var spr = $sprite(Pack).rCenter().sXY(.4)//.XY( 200, 260 ).sXY(1.2).drag()
		spr.gotoAndPlay(anim)
		return w.ball(Math.random() * 1000, Math.random() * 500, 40).bindSprite2(spr)
	}
	b = pack('f1')
	anims = _.keys(Pack.animations)
	//  _.each(  _.first( , 4) ,   function(anim){pack(anim)})
	// cjs.tick(function(){ b.rot(0) })
	change = function () {
		anim = anims[_.random(23)]
		$l('changed to ' + anim)
		b.sprite.gotoAndPlay(anim)
	}
	w.begin(function (cx) {
		if (cx.with('platform')) {
			change()
		}
	})
}
PACKE4 = function () {
	w = b2d.mW({
		//debug:false,
		grav: 0
	})
	p = w.player('thrust')
	var spr = $sprite(Pack).rCenter().sXY(.4)//.XY( 200, 260 ).sXY(1.2).drag()
	spr.p('e4')
	b = w.bumper(
			Math.random() * 1000,
			Math.random() * 500, 45
	).bindSprite2(spr)
	// cjs.tick(function(){ b.rot(0) })
	w.begin(function (cx) {
		if (cx.with('bumper')) {
			p.I(1000, 1000)
		}
	})
}
EASELBO = function () {
	w = b2d.mW({
		//debug:false
	})
	b = w.brick(300, 300, 100, 100)
	r = cjs.rect(100, 100).XY(300, 300).drag()
	b.bindSprite2(r)
	//  w.s.A(r)
}
EASELBO2 = function () {
	w = b2d.W({g: 3})
	p = w.player('standard')
	cjs.tick(function () {
		p.rot(0)
	})
	b = w.brick(300, 300, 300, 100)
	r = cjs.rect(300, 100).XY(300, 300).drag()
	w.s.A(r)
	cjs.tick(function () {
		b.X(r.X());
		b.Y(r.Y())
	})
	r.tweenLoop([{x: 500}, 1000], [{x: 300}, 1000])
	bb = w.brick(500, 500, 300, 100)
	rr = cjs.rect(300, 100).XY(500, 500).drag()
	w.s.A(rr)
	cjs.tick(function () {
		bb.X(rr.X());
		bb.Y(rr.Y())
	})
}
CHANGE = function () {
	w = b2d.mW()
	b = w.ball().bindSprite('guy').kin()
	w.box(400, 100, 400, 100)
}

 