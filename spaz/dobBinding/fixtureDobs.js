function fixtureSingleSprite() {
	f.sp = f.Sp = function (sp) {
		var f = this
		if (U(sp)) {
			return f.sprite
		}
		f.sprite = sp
		return f
	}
}
function fixtureSpritesArray() {
	f.bS = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), o, sp;
		$transform = $bindOnce = function (sp, b, o) {
			sp.XY(b.X() + o.x, b.Y() + o.y).rt(b.rt() + o.rt)
		}
		$bindTransform = function (sp, b, o) {
			$t(function () {
				$transform(sp, b, o)
			})
			return sp
		}
		f.bindLoaderSprite = function (j) {
			//= f.bSQ 
			var f = this
			f.ctDob = f.ctSprite = f.ctSp = function (sp) {
				var f = this
				sp.XY(
						f.pos().x,
						f.pos().y
				).rC()
				f.bS($Ct().A(sp))
				return this
			}
			Q(function () {
				f.ctSp(Q.b(j))
			})
			return f
		}
		f.sprites = f.sprites || []
		//higher level.. can handle obs AND !!!  Q-strings
		if (S(g.f)) {
			return f.bindLoaderSprite(g.f)
		}
		o = cjs.iDO(g.f) ? {
			j: g.f, rt: g.s,
			x: g.t, y: g.fo,
			o: g.fi
		} : g.f
		var sp = o.j.al(N(o.al, 1))
		sp = $bindTransform(sp, b, $df.bsDF(o))
		return f.spritesPush(sp.a2(w.gx))
	}
	f.spritePush = function (j) {
		this.sprites = this.sprites || []
		this.sprites.push(j)
		return this
	}
	f.cSp = function (o) {
		var f = this, b = f.B(), w = b.W()
		var cir = w.g.h().cir(o)
		f.bS(cir)
		f.g = cir
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
}
 function kill(){
	 f.removeSprites = function () {
		 var f = this
		 f.sprites = f.sprites || []
		 _.each(f.sprites,
				 function (s) {
					 if (O(s) && s.parent) {
						 s.remove()
					 }
				 }
		 )
		 f.sprites = []
		 return this
	 }
	 f.kill = f.remove = function () {
		 var f = this, b = f.B()    // if(this.sprite  ){this.sprite.remove()}
		 f.removeSprites()
		 b.destroyFixt(f)
//f.setRemove = function(){var f=this; setTimeout(function(){f.B().destroyFixt(f)},10)} //can combine with kill?
//f.setDestroy=function(){this.B().K('destroy'); return this}
	 }
	 f.rmSp = function () {
		 _.e(this.sprites || [], function (s) {
			 cjs.rmOb(s)
		 })
		 this.sprites = []
		 return this
	 } //= f.xSp=f.Xx=f.rmSp
	 f.rpSp = function (sp) {
		 this.rmSp()
		 if (sp) {
			 this.bS(sp)
		 }
		 return this
	 }
	 f.rmSp = function () {
		 var f = this
		 f.sprites = f.sprites || []
		 _.e(f.sprites, function (s) {
			 cjs.rmOb(s) //function cjsRmObSource(ob){if (cjs.iDO(ob)) { ob.rm() }}
		 })
		 f.sprites = []
		 return f
	 } //= f.xSp=f.Xx=f.rmSp
	 f.rpSp = function (sp) {
		 var f = this
		 f.rmSp()
		 if (sp) {
			 f.bS(sp)
		 }
		 return f
	 }
	 f.kill = function () {
		 var f = this, b = f.B(), w = b.W()
		 if (!f) {
			 return
		 }
		 if (w._fPreKill) {
			 w._fPreKill(f)
		 }
		 if (b) {
			 b.rmF(f)
		 }
	 }//= f.xx = f.remove
	 f.setKill = function () {
		 var that = this
		 var flagNum = Math.random()
		 this.B().W().flag(flagNum)
		 $t(function () {
			 if (w.flagged(flagNum)) {
				 that.kill()
			 }
		 })
	 }
	 f.killBody = function () {
		 this.B().kill()
	 }
	 f.killB = f.kB = f.xB = f.xX = f.XX = function () {
		 if (this && this.B()) {
			 this.B().kill()
		 }
	 }
	 f.removeSprites = function () {
		 var f = this
		 f.sprites = f.sprites || []
		 _.each(f.sprites,
				 function (s) {
					 if (O(s) && s.parent) {
						 s.remove()
					 }
				 }
		 )
		 f.sprites = []
		 return this
	 }
	 f.kill = f.remove = function () {
		 // if(this.sprite  ){this.sprite.remove()}
		 this.removeSprites()
		 this.B().destroyFixt(this)
//f.setRemove = function(){var f=this; setTimeout(function(){f.B().destroyFixt(f)},10)} //can combine with kill?
//f.setDestroy=function(){this.B().K('destroy'); return this}
	 }
	 f.kill = function () {
		 if (this.sprite) {
			 this.sprite.remove()
		 }
		 this.remove();
		 return
	 
	 }}
f.c = f.C = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o
	o = g.O ? g.f :
	{c: g.f, C: g.s, l: g.t}
	var easelMet = f.iC() ? 'cir' : 'pol'
	o.c = (o.c == '*') ? $r() : (o.c || 'b');
	o.C = o.C || o.c
	f.B()._i = f.B().i = w.st[easelMet](f.hDat(o))
	//*** look.. we just put the easel shape display object on the fixture's body
	// we called it i.. just i 
	// but i prefer _i
	f.rpSp(f.B()._i)
	// .. then we made it the main FIXTURE sprite,
	// which gets bound to the actual fixture,
	// but is clearly ALSO... referenced on the body
	// so that is just temp on the body because it will get constantly overwrittern!!
	//so can be used short term.. but why not an array???
	// wel they are already probably an array of the fixture?? body can iterate fixtures// better that way becasue then they can be more easily associated with their assoc fixtures
	return f
}
f.c = f.C = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments),
			o = g.O ? g.f : {c: g.f, C: g.s, l: g.t}
	o.c = (o.c == '*') ? $r() : (o.c || 'b');
	o.C = o.C || o.c
	return f.rpSp(
			f.iC() ? b.i = w.st.cir(f.cir(o)) : b.i = w.st.pol(f.pol(o)))
}
f.al = function (al) {
	var sp = this.sp()
	if (sp) {
		sp.al(N(al, .8))
	}
	return this
}
f.C = f.color = function (c, C, l) {
	var f = this, b = f.B(), w = b.W(), g = G(arguments),
			r, p, o
	o = O(g[0]) ? g[0] : {c: c, C: C, l: l}
	o.c = (o.c == '*') ? $r() : o.c || 'b'
	o.C = o.C || o.c
	f.removeSprites()
	h = w.s.h()
	if (f.isCirc()) {
		$l('isCir')
		h.cir(
				f.pX(), f.pY(), f.rad(),
				o.c, o.C, o.l
		)
	}
	else {
		h.poly(f.verts(), o.c, o.C, o.l)
	}
	f.bS(h)
	return f
};
COL = function () {
	W().C('z')
	b = w.bump({c: 'w', r: 100})
	f = b.f()
	f.C('y')
	// f.removeSprites(); h=w.s.h().cir(0,0,100,'y'); f.bS(h)
	setTimeout(function () {
		b.dyn()
	}, 1000)
}

	 