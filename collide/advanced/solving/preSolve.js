
b.pre = function () {
	var b = this, w = b.W(), g = G(arguments)
	w.pre(function (cx) {
		cx.w(b, g.f, g.s, g.t)
	})
}
w.pre = function () {
	w._pre = function (fn) {
		var w = this, g = G(arguments)
		//fn = $.mo(.2,fn )
		w.pH.push(fn)
		return w
	}
	w.onPre = w.pre = function (fn) {
		var w = this, g = G(arguments)
		//fn = $.mo(.2,fn )
		w.pH.push(fn)
		return w
	}
	var w = this, g = G(arguments), o, fn
	if (F(g.t)) {
		fn = function (cx, i) {
			if (cx.w(g.f, g.s)) {
				g.t(cx)
			}
		}
	}
	else if (F(g.s)) {
		fn = function (cx, i) {
			cx.w(g.f, function (f) {
				_.b(g.s, this)(f, cx, i)
			})
		} //this good
	}
	else {
		fn = g.f
	}
	//fn=$.mo(.2,fn) //this will break it!!
	w.pH.push(fn)
	return w
	function pre() {
		w.pre = function () {
			var w = this, g = G(arguments)
			_.e(g, function (fn) {
				w.PRE.push(fn)
			})
			return w
		}
	}
	
	function alt() {
		w.pre = function () {
			var w = this, g = G(arguments), o, fn
			w._pre = function () {
				var that = this
				_.each(arguments, function (func) {
					that.preHandlers.push(func)
				})
				return this
			}
			//this good
			//fn=$.mo(.2,fn) //this will break it!!
			return w._pre(
					F(g.t) ?
							function (cx, i) {
								if (cx.w(g.f, g.s)) {
									g.t(cx)
								}
							} :
							F(g.s) ?
									function (cx, i) {
										cx.w(g.f, function (f) {
											_.b(g.s, this)(f, cx, i)
										})
									} :
									g.f
			)
		}
	}
}
PRESOLVE = function () {
	b2d.mW()
	w.ba()
	cjs.tick(
			function () {
				if (STATE.newBall) {
					w.ba()
				}
				STATE.newBall = false
			})
	w.pre(function (contact, manifest) {
		c = contact;
		m = manifest
	})
	//second pam is really info about previous collision manfest?  may be usesless?!!!!
}
function collide() {
	FIXROT = JUMP = CEN = LVW = SMASH = function () {
		W([2000, 1500, 2000, 1500]).G(200).C('b');
		var b1, b2
		// y and remote control fireball
		var y = w.y(300, 100, '+')
		farMoon = w.D(600, 100, 'y', 150).K('b').r(1.2).lV(200, 0).cn('thrust').fR()
		nearMoon = w.D(400, 200, 'y', 100)
		T.t(function () {
			var lV = y.lVW(y.X(), y.Y()).mult(20)
			nearMoon.lV(lV.x, lV.y)
		})
		p = w.p(900, 400).cn('jump').cl(_.m(function () {
			w.D(300, 100, 'r', 5)
		}))
		sun = r1 = w.S(600, 300, 'r', 30, '-').K('r').bS('sun')
		sun.cl(function (f, cx) {
			var pt = cx.cen(), v1 = b.lVW(pt), v2 = r1.lVW(pt)
			w.D(630, 350, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)
		})
	}
	PLAT = DOODLE = function () {
		W([1200, 600, 1200, 2000], {g: -1000}).stats().P(600, 1800)
		var b1, b2
		plat([300, 300], [900, 600], [300, 900], [300, 1000], [1000, 1200], [500, 1400])
		pf = plat(900, 1700)
		// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
		function plat(x, y) {
			var g = G(arguments)
			if (g.O_) {
				g.e(function (g) {
					plat(g[0], g[1])
				});
				return
			}
			return w.S(x, y, 'o', 500, 40).K('pf')
		}
		
		p.K('p').tr()//.cl($.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
		p.cl(w._t, //when player coll roof,
				function () {
					w.C('z');
					w.G(1000)
				})
		//one way wall
		w.pre('pf', function (f, cx) {
			if (p.Y() - this.B().Y() > 10) {
				cx.en(0)
			}
		})
	}
}
 
	PRE = ONEWAYPLATFORM = OWP = ONE = function () {
		W(50).ball()
		p = w.p().con('thrust')
		pf = w.brick(300, 300, 500, 40).K('platform')
		$t(function () {
			p.rt(0)
		})
		//	w.pre(function (cx) {if (cx.w('platform', 'player')) {if (p.Y() > pf.Y()) {cx.disable()}}})
		w.preCl('platform', 'player', function (f1, cx) {
			if (p.Y() > pf.Y()) {
				cx.disable()
			}
		})
	}
	PRESOLVE = function () {
		W([1200, 600, 1200, 2000], {g: -1000}).stats().P(600, 1800)
		var b1, b2
		plat([300, 300], [900, 600], [300, 900], [300, 1000], [1000, 1200], [500, 1400])
		pf = plat(900, 1700)
		// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
		function plat(x, y) {
			var g = G(arguments)
			if (g.O_) {
				g.e(function (g) {
					plat(g[0], g[1])
				});
				return
			}
			return w.S(x, y, 'o', 500, 40).K('pf')
		}
		
		p.K('p').tr()//.cl(_.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
		p.cl(w._t, //when player coll roof,
				function () {
					w.C('z');
					w.G(1000)
				})
		//one way wall
		w.pre('pf', function (f, cx) {
			if (p.Y() - this.B().Y() > 10) {
				cx.en(0)
			}
		})
	}
	PRESOLVE = function () {
		W([1200, 600, 1200, 2000], {g: -1000}).stats().P(600, 1800)
		w.G(-100)
		var b1, b2
		plat([300, 300], [900, 600], [300, 900], [300, 1000], [1000, 1200], [500, 1500])
		pf = plat(900, 1800)
		// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
		function plat(x, y) {
			var g = G(arguments)
			if (g.O_) {
				g.e(function (g) {
					plat(g[0], g[1])
				});
				return
			}
			return w.S(x, y, 'o', 500, 40).K('pf')
		}
		
		p.K('p').tr()//.cl(_.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
		p.cl(w._t, //when player coll roof,
				function () {
					w.C('z');
					w.G(1000)
				})
		//one way wall
		w.pre('pf', function (f, cx) {
			if (p.Y() - this.B().Y() > 10) {
				cx.en(0)
			}
		})
	}
