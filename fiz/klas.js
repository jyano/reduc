 
f.aK = function (k) {
	var f = this
	f._K = f._K || []
	if (S(k) && !f.of(k)) {
		f._K.push(k)
	}
	return f
}
f._gK = function () {
	var f = this
	f._K = f._K || []
	return f._K.join(' ')
}
f.gK = function () {
	var g = G(arguments), classes
	this.classes = this.classes || []
	classes = this.classes.join(' ')
	if (g.p) {
		classes += ' : ' + this.body().getClasses()
	}
	return classes
}
f.K = function () {
	var f = this, g = G(arguments);
	f._K = f._K || []
	if (g.u) {
		return f.gK()
	}
	if (g.O && g.f.k) {
		f.aK(g.f.k)
	}
	else if (g.S_) {
		_.eW(g.f, function (k) {
			f.aK(k)
		})
	}
	return f
}
f.of = function (k) {
	var f = this, b = f.B();
	//return S(k) ? f.of(k) : (f == k || b == k)
	return f._of(k) || b.of(k)
	/*
	
	 //if (!f) {return false}
	 if (!k) {
	 return true
	 }
	 return f == k || (S(k) && f.has(k)) || b.of(k)
	 */
}
f.ofK = function () {
	var f = this, b = f.B(),
			g = G(arguments)
	return f.hK(g) || b.hK(g)
}
f.is = function (k) {
	var f = this
	//	return S(k) ? f.hK(k) : f == k
	return k && f.of(k)
}
fD.K = function (k) {
	var fD = this
	if (U(k)) {
		fD.getClass = function () {
			var g = G(arguments), fD = this, classes
			fD._K = fD._K || []
			this.classes = this.classes || []
			var ks = fD.classes.join(' ')
			if (g.p) {
				ks += ' : ' + fD.body().getClasses()
			}
			return ks
		}
		return fD.getClass()
	}
	fD.classes = fD.classes || []
	fD.classes.push(k)
	return fD
}
b.gK = function () {
	this.classes = this.classes || []
	return this.classes.join(' ')
}
b.aK = function (clas) {
	var that = this, func
	this.classes = this.classes || []
	if (U(clas)) {
		$l('need to provide a class!');
		return this
	}
	if (F(clas)) { // use case??
		func = _.bind(clas, that)
		this.addClass(func(that.getClasses()))
		return this
	}
	_.each(arguments, function (clas) {
		if (S(clas)) {
			_.each(clas.trim().split(' '), function (clas) {
				clas = clas.trim()
				if (clas != '' && !that.hasClass(clas)) {
					that.classes.push(clas)
				}
			})
		}
	})
	return this
}
b.K = function () {
	var b = this, g = G(arguments);
	this._K = this._K || []
	/*
	 if (U(k)) {
	 return this.getClasses()
	 }
	 _.each(arguments, function (k) {
	 b.addClass(k)
	 })
	 */
	if (g.u) {
		return this._K.join(' ')
	}
	if (g.O) {
		this.K(g.f.k);
		return this
	}
	_.eW(g.f, function (k) {
		if (!b.of(k)) {
			b._K.push(k)
		}
	})
	return this
}
b.of = function (k) {
	if (b2d.iF(k)) {
		k = k.B()
	}
	return !k || _.ct(this._K, k) || this == k
}
b.is = function (k) {
	return k && this.of(k)
	/*
	 var that = this, is = false
	 _.each(arguments, function (k) {
	 if (that.K() == k) {
	 is = true
	 }
	 })
	 return is
	 */
}
function klasBodsMethods(){

function decorWTF(){
	b.decor = function (g) {
		var b = this
		if (g.n) {
			b.mS()
		}
		else if (g.p) {
			b.mBu()
		}
		else if (g.m) {
			b.mS().mBu()
		}
		return b
	}
	w.bag = w.pD = function (x, y) {
		var b = w.D(x, y), g = G(arguments)
		b.pF.apply(b, _.r(g, 2))
		return b.decor(g).K('bag')
	}
	w.roc = w.rck = w.rock = w.pS = function (x, y) {
		var w = this, g = G(arguments)
		var b = w.S(x, y)
		b.pF.apply(b, _.r(g, 2))
		return b.decor(g).K('rock')
	}
	w.box = w.bo = w.bi = function (x, y, W, H) {
		var w = this, g = G(arguments)
		//var b = w.A($dB(x, y), $rF(W, H))
		var b = w.D(g.f, g.s)
		b.rF.apply(b, _.r(g, 2))
		b.decor(g)
		b.K('box')
		return b
	}
	w.bmp = w.bump = w.cS = w.bu = w.baa = function (x, y) {
		var g = G(arguments)
		var b = w.S(x, y)
		b.cF.apply(b, _.r(g, 2))
		return b.decor(g).K('bump')
		w.bumpAlt = function (x, y, r) {
			x = x || 100
			y = N(y) ? y : x
			r = r || 20
			return this.A(b2d.stat(x, y),
					$cF(r)).K('bumper')
		}
	}
	w.bal = w.ball = w.cD = w.ba = w.cirB = function () {
		var w = this, g = G(arguments), o, b
		if (true) {
			b = w.D(g.f, g.s)
			b.cF.apply(b, _.r(arguments, 2))
		}
		else {
			o = {x: g.f, y: g.s, r: g.t}
			var b = w.D(o.x, o.y)
			b.f($cF(o.r))
		}
		return b.decor(g).K('ball')
	}
	w.brk = w.brick = w.bii = w.brik = function (x, y, W, H) {
		var w = this, g = G(arguments)
		var b = w.S(x, y)
		b.rF.apply(b, _.r(g, 2))
		//var b = w.A($sB(x, y), $rF(W, H))
		b.decor(g)
		b.K('brick')
		return b
	}}
	
	w.ball = w.ba = function (x, y, r) {
		var w = this,
				ball
		if (O(x)) {
			r = N(x.r) ? x.r : y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 100 //change to center x
		y = N(y) ? y : x
		r = N(r) ? r : 30
		ball = w.dyn(
				x, y, b2d.circ(r)
		)
		return ball.K('ball')
	}
	w.brick = w.bii = function (x, y, W, H) {
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 30;
		H = N(H) ? H : W
		return this.A($sB(x, y), $rF(W, H).re(0)).K('brick')
	}
	w.brick = w.bii = function (x, y, W, H) {
		var w = this, g = G(arguments), b, o
		o = O(g[0]) ? g[0] : N(g[1]) ? {
			x: g[0],
			y: g[1],
			w: g[2],
			h: g[3]
		} : {w: g[0]}
		o.x = _.tN(o.x, w.hW)
		o.y = _.tN(o.y, w.hH)
		o.w = _.tN(o.w, 40)
		o.h = _.tN(o.h, o.w)
		o.c = o.c || $r()
		b = w.S(o.x, o.y, o.c, o.w, o.h)
				.K('brick').DFB(0.5, 0.5, 0)
		if (g.n) {
			b.sen(true)
		}
		return b
	}
	w.D = function () {
		var w = this, g = G(arguments, 'k'), o, b
		if (g.u) {
			return w.D(
					w.hW, w.hH)
		}
		//	o = //g.O ? g.f :
		o = g.O_ ? {p: g.f, f: g.r} :
		{p: [g.f, g.s], f: _.r(g, 2)}
		b = w.cB(b2d.bD(o.p))
		b.K(g.k)
		$a(b, 'f', g.G(o.f))
		return b
	}
	w.D_ = w._D = function (o) {
		alert('w._D??? nah, w.D_')
		return this.D(o.x, o.y, o.c, o.w, o.h)
	}
	w.D = function () {
//   super star !
		var w = this, g = G(arguments), o
		o = O(g.f) ?
		{x: g.f.x, y: g.f.y, fD: g.s} :
		{x: g.f, y: g.s, fD: g.t}
		o.x = N(o.x) ? o.x : 500
		o.y = N(o.y) ? o.y : 250
		var dB = $dB(o.x, o.y)
		return w.B(dB, o.fD)
		function alt() {
			w.dyn = w.body = w.A = function (x, y, fD) {
				var w = this, b, bd
				//pass body def
				if (b2d.isBDef(x)) {
					bd = x;
					fD = y
				}
				//make body def
				else {
					if (O(x)) {
						fD = y;
						y = x.y;
						x = x.x
					}
					x = N(x) ? x : 500
					y = N(y) ? y : 250
					bd = b2d.dyn(x, y)
				}
				b = w.CreateBody(bd)
				// pass in one fixture or an ARRAY( of fixts )
				if (fD) {
					b.fixt(fD)
				}
				return b
			}
			w.B = function () {
				var w = this, g = G(arguments), o
				return g.u ? w.bd() :
						w.cB.apply(w, arguments)
			}
			w.B = w.D = function (x, y) {
				var w = this, bd, b, fixts,
						g = G(arguments),
						x = g[0],
						y = g[1], clas
				if (S(_.last(g))) {
					clas = g.pop()
				}
				if (N(x)) {
					bd = b2d.dyn(x, y);
					fixts = _.rest(g, 2)
				}
				else {
					if (b2d.isBDef(x)) {
						bd = x
					} else {
						x = V(x);
						bd = b2d.dyn(x.x, x.y)
					}
					fixts = _.rest(g)
				}
				b = w.CreateBody(bd)
				b.H.apply(b, fixts)
				if (clas) {
					b.K(clas)
				}
				return b
			}
		}
	}
	w.S = function (x, y) {
		var w = this,
				g = G(arguments),
				x = g[0], y = g[1],
				bd, b, fixts, clas
		if (S(_.last(g))) {
			clas = g.pop()
		}
		if (N(x)) {
			bd = b2d.stat(x, y)
			fixts = _.rest(g, 2)
		}
		else {
			if (b2d.isBDef(x)) {
				bd = x
			}
			else {
				x = V(x);
				bd = b2d.stat(x.x, x.y)
			}
			fixts = _.rest(g)
		}
		b = w.CreateBody(bd)
		if (fixts.length) {
			b.H.apply(b,
					fixts
					//   _.map(fixts, function(f){   return A(f)?f:[f]  })
			)
		}
		if (clas) {
			b.K(clas)
		}
		return b
	}
	w.circleStat = function (x, y, r) {
		var cir = w.sB(x, y)
		cir.A($cir(N(r, 50)))
		return cir
	}
	w.D = function (x, y) {
		return this.cB($dB(x, y))
	}
	w.brickSensor = function (x, y, W, H) {//=brk=brick=
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 30;
		H = N(H) ? H : W
		return this.A(b2d.stat(x, y),
				b2d.poly(W, H).r(0).sensor(true))
				.K('brickSensor')
	}
	w.ball = function (x, y, r) {
		var w = this
		if (O(x)) {
			r = y;
			y = x.y;
			x = x.x
		}
		x = x || 100
		y = N(y) ? y : x
		r = r || 30
		var ball = w.dB(x, y).CF($cF(r))
		ball.K('ball')
		return ball
	}
}

w.dance = function () {
	var w = this
	w.e(function (b) {
		if (b.iD()) {
			b.thr()
		}
	})//w.eD
	return w
}
function apps(){
	CLICKKILL = function () {
		box(function () {
		})
		w.circle(420, 400, 150)
		w.circleStat(300, 400, 50)
		w.circleStat(400, 550, 50)
		w.circleStat(500, 550, 50)
		w.circleStat(550, 550, 50)
		cv.click(function (e) {
			e.preventDefault();
			cvPos = cv.position()
			cvPos.x = cvPos.left
			cvPos.y = cvPos.top
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			$l('mousex ' + mouse.x)
			w.qPoint(mouse.x, mouse.y, function (f, b, w) {
				b.kill()
				//	w.mj = w.mJ(b, o.x, o.y)
				//return true
			})
			return false
		})
	}
	FSEL = function () {
		box(function () {
		})
		w.circleStat(420, 400, 150)
		w.circleStat(300, 400, 50)
		w.circleStat(400, 550, 50)
		n = 0
		w.qPoint(300, 400, function (f, b, w) {
			$l("hit" + n++)
			//b.kill()
			//	w.mj = w.mJ(b, o.x, o.y)
			//return true
		})
	}
	FSEL = function () {
		n = 0
		box(function () {
			//$l('tick-'+ n++)
			if (w.mj) {
				w.mj.tg(mouse.x, mouse.y)
			}
		})
		w.mouse = {x: 0, y: 0}
		w.circle(420, 400, 150)
		w.circleStat(300, 400, 50)
		w.circleStat(400, 550, 50)
		w.circleStat(500, 550, 50)
		w.circleStat(550, 550, 50)
		cvPos = cv.position()
		cvPos.x = cvPos.left
		cvPos.y = cvPos.top
		cv.click(function (e) {
			e.preventDefault();
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			w.qPoint(mouse.x, mouse.y, function (f, b, w) {
				w.mj = w.mJ(b, mouse.x, mouse.y)
			})
			return false
		})
		cv.mousemove(function (e) {
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			w.mouse = mouse
		})
		cv.mouseup(function () {
			w.mj = null
		})
	}
	FSEL = function () {
		box(function () {
			if (w.mj) {
				var targ = w.mj.targ()
				$l('mouse joint target: ' + targ.x + ', ' + targ.y)
				w.mj.targ(mouseX, mouseY)
			}
			else {
				$l('no mouse joint')
			}
		})
		w.G(0)
		b = w.circle(420, 400, 150)
		w.circle(300, 400, 50)
		w.circleStat(400, 550, 50)
		w.circleStat(500, 550, 50)
		w.circleStat(550, 550, 50)
		cvPos = cv.position()
		cvPos.x = cvPos.left
		cvPos.y = cvPos.top
		cv.mousedown(function (e) {
			e.preventDefault();
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			w.qPoint(mouse.x, mouse.y, function (f, b, w) {
				var mj = w.mJ(b, mouse.x, mouse.y, .1, 50000, 1000)
				mj.frq(120)
				mj.dmpRat(.01)
				mj.mxFo(100000)
				fq = mj.frq()
				$l(fq)
				w.mj = mj
			})
			return false
		})
		cv.dblclick(function (e) {
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			w.qPoint(mouse.x, mouse.y, function (f) {
				f.B().kill()
			})
		})
		cv.mousemove(function (e) {
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			mouseX = mouse.x
			mouseY = mouse.y
		})
		cv.mouseup(function () {
			w.DestroyJoint(w.mj)
			w.mj = null
		})
	}
	FSEL0 = function () {
		box0(function () {
			if (w.mj) {
				$l('yes')
			} else {
				$l('no')
			}
		})
		w.circle(420, 400, 150)
		w.circleStat(300, 400, 50)
		w.circleStat(400, 550, 50)
		w.circleStat(500, 550, 50)
		w.circleStat(550, 550, 50)
		cvPos = cv.position()
		cvPos.x = cvPos.left
		cvPos.y = cvPos.top
		cv.mousedown(function (e) {
			e.preventDefault();
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			w.qPoint(mouse.x, mouse.y, function (f, b, w) {
				w.mj = w.mJ(b, mouse.x, mouse.y)
			})
			return false
		})
		cv.mousemove(function (e) {
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			if (w.mj) {
				w.mj.tg(mouse.x, mouse.y)
			}
		})
		cv.mouseup(function () {
			w.mj = null
		})
	}
	BXEV = function (fn) {
//http://jsfiddle.net/digitalbush/JrzPH/
		w = $_W()
		w.SDD($dD().ctx(
						$.c('z', 1800, 1500)[0].getContext('2d'))
		)
		//the_circle = new b2CircleDef()
		n = 0
		_.ev(.1, function () {
			if (F(fn)) {
				fn(n)
			}
			n++
			w.N(1 / 5)
		})
	}}
	
	function iterate(){
		w.tE = function (fn) {
			var w = this
			T.t(function () {
				w.e(fn)
			})
			return this
		} // TICKER !!!!!}
		w.killD = w.xD = function () {
			w.e(function (b) {
				if (b.iD()) {
					b.kill()
				}
			})
		}
		bx.b = function (k) {
			var arr = []
			w.each(function (b) {
				if (b.of(k)) {
					arr.push(b)
				}
			})
			return arr
		}
		w.ds = w.dB = function (b) {
			var w = this, g = G(arguments), o
			return g.u ? w.eB(function (b) {
				w.destroy(b)
			}) : w.DB(b)
		}
		w.destroyBody = w.destroy = w.dB = w.destroy = w.destroyAll = function (b) {
			var w = this
			if (U(b)) {
				w.each(function (b) {
					w.destroy(b)
				})
			}
			else {
				w.DestroyBody(b)
			}
			return w
		}
		bx.f = function (k) {
			var arr = []
			w.each(function (b) {
				b.each(function (f) {
					if (f.is(k)) {
						arr.push(f)
					}
				})
			})
			return arr
		}}