f.spritePush = function (j) {
	this.sprites = this.sprites || []
	this.sprites.push(j)
	return this
}
f.bS = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o, sprite;
	f.sprites = f.sprites || []
	//higher level.. can handle obs and Q-strings
	if (S(g.f)) {
		return f.bSQ(g.f)
		// not alerted
	}
	o = cjs.iDO(g.f) ? {
		j: g.f, rt: g.s, x: g.t, y: g.fo, o: g.fi
	} : g.f
	$df.bsDF(o)
	sprite = o.j.al(N(o.al, 1))
	f.sprites.push(sprite)
	w.gx.A(sprite)
	$t(function () {
		sprite
				.XY(b.X() + o.x, b.Y() + o.y)
				.rt(b.rt() + o.rt)
	})
	return f
}
f.cSp = function (o) {
	var f = this, b = f.B(), w = b.W(),
			cir = w.g.h().cir(o)
	this.bS(cir)
	this.g = cir
	return f
}
f.sp = f.Sp = function (sp) {
	var f = this
	if (U(sp)) {
		return f.sprite
	}
	f.sprite = sp
	return f
}
f.bS = function () {
	this.sprites = this.sprites || []
	//higher level.. can handle obs and Q-strings
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o, sprite
	if (S(g.f)) {
		return f.bSQ(g.f)
	}// not alerted
	o = cjs.iDO(g.f) ? {
		j: g.f, rt: g.s, x: g.t, y: g[3], o: g[4]
	} : g.f
	$df.bsDF(o)
	sprite = o.j.al(N(o.al, 1))
	f.sprites.push(sprite)
	w.gx.A(sprite)
	T.t(function () {
		sprite
				.XY(b.X() + o.x, b.Y() + o.y)
				.rt(b.rt() + o.rt)
	})
	return f
}
f.gx = f.spr = f.bindSprite = f.bindSprite2 = function (obj, startingRotation, x, y, alpha) {
	var g = G(arguments)
	gg = g
	alpha = N(alpha) ? alpha : 1
	obj.opacity(alpha)
	//takes any display object.  right now, just used for shapes
	//because bindSprite fetches the bm's by string.
	//but when i set up preloader, then i would use this i suppose :)
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var f = this,
			body = this.body(),
			stage = body.wor().s
	startingRotation = N(startingRotation) ? startingRotation : 0
	//f.sprite = obj
	//f.sprite.a2(stage)
	o = obj.a2(stage)
	f.sprites = f.sprites || []
	f.sprites.push(obj)
	//updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
	cjs.tick(function () {//if(!f.sprite){return}
		obj.XY(body.X() + (x || 0), body.Y() + (y || 0))
		obj.rotation = body.rot() + startingRotation
	})
	return this
}
 
f.sp = function () {
	return this.sprites[0]
} 
f.bS = f.bindSprite = function (j, a, x, y, al) {//f.gx= f.spr= f.bindSprite2=
	var f = this, b = f.B(), s = b.wor().s, g = G(arguments), o
	f.sprites = f.sprites || []
	o = cjs.isDisplayOb(j) ? {j: j, a: a, x: x, y: y, o: al}
			: O(j) ? j : {}
	o.x = _.tN(o.x)
	o.y = _.tN(o.y)
	o.a = _.tN(o.a)
	o.o = _.tN(o.o, 1)
	f.sprites.push(o.j.op(o.o).a2(s))                      //takes any display object.  right now, just used for shapes//because bindSprite fetches the bm's by string. //but when i set up preloader, then i would use this i suppose :)                                                 //f.sprite = obj  //f.sprite.a2(stage)                                                 //updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
	cjs.tick(function () {
		o.j.XY(b.X() + o.x, b.Y() + o.y)
				.rot(b.rot() + o.a)
	})                                    //if(!f.sprite){return}
	return f
} 