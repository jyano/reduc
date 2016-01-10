w.pen = function () {
	this.st.pen.apply(this.st, arguments)
	return this
}
w.fl = w.flash = function () {
	this.st.flash.apply(this.st, arguments)
	return this
}
w.pen = function () {
	this.s.pen.apply(this.s, arguments)
	return this
}
w.flash = function () {
	this.s.flash.apply(this.s, arguments)
	return this
}
w.l = w.dl = function () {
	var w = this, g = G(arguments), o, i
	o = S(g[0]) ?
	{c: g[0], x1: g[1], y1: g[2], x2: g[3], y2: g[4]}
			:
	{x1: g[0], y1: g[1], x2: g[2], y2: g[3]}
	i = g.p ? w.fg : g.n ? w.bg : g.d ? w.g : w.i
	o.c = o.c || (g.p ? 'p' : g.n ? 'r' : g.d ? 'd' : 'b')
	return i.h()
			.c(10, o.c)
			.mt(o.x1, o.y1)
			.lt(o.x2, o.y2).K('dev line')
}
w.dr = function (c, x, y, W, h) {
	var w = this, g = G(arguments), o
	o = g.S_ ? {c: g[0], x: g[1], y: g[2], w: g[3], h: g[4]}
			: {x: g[0], y: g[1], w: g[2], h: g[3]}
	_.x(o, g.p ? {g: w.fg, c: o.c || 'p'} :
			g.n ? {g: w.bg, c: o.c || 'r'} :
			{g: w.hud, c: o.c || 'b'})
	o.g.h().rec(o)
}
//dev
w.dbCross = function (x, y) {
	var w = this, c = w.cen()
	x = N(x, c.x)
	y = N(y, c.y)
	w.dr('t', -10 + x, -140 + y, 20, 300, '-')
	w.dr('t', -150 + x, -10 + y, 300, 20, '-')
	w.dot('r', x, y)
	return w
}
w.stats = function (n) {
	var w = this
	_d = $.d(400, 600, w.W, 0, '+').A($.h1('stats'))
	w.mdq(function (fx) {
		_f = _d._fix = fx;
		_b = _f.B()
	})
	if (n == 0) {
		z(upd)
	}
	else {
		_.ev(N(n, .2), upd)
	}
	return w
	function upd() {
		var f, b;
		if (_d._fix) {
			f = _d._fix
			b = f.B()
			_d.T(
					'ty: ' + (b.iD() ? 'dyn' : 'stat'),
					'x: ' + b.X(),
					'y: ' + b.Y(),
					'fK: ' + f.K(), 'bK: ' + b.K(),
					'sen: ' + f.sen(),
					'd: ' + f.d(),
					'fr: ' + f.fr(),
					'r: ' + f.r(),
					'bMass:' + parseInt(f.B().mass()),
					'bNum:' + f.B().n()
			)
		}
	}
}
w.devGrid = function () {
	var w = this
	_.t(12, function (i) {
		w.l(i * 200, 0, i * 200, w.h)
		w.l(i * 200, 0, i * 200, w.h, '-')
		w.l(0, i * 200, w.w, i * 200)
		w.l(0, i * 200, w.w, i * 200, '-')
	})
	return w
}
w.flash = function () {
	var w = this, s = w.s
	s.flash.apply(s, arguments)
	return w
}
//write
w.pop = function (t) {
	var w = this
	t = this.i.T(t || 'no text', 80, 'o', w.hW, 200)
	t.tw([{a: .5, sxy: .5}, 4000])
	_.in(4, function () {
		t.rm()
	})
	return this
}
w.pen = function (t, f, c) {
	var g = G(arguments), o
	if (this._T) {
		this._T.rm();
		this._T = null
	}
	o = {y: 100}
	o.x = g.n ? 200 : g.p ? this.W - 200 : this.hW
	this._T = this.i.T(t, f, c)
	this._T.XY(o.x, o.y)
	return this._T
}
w.chalk = function () {
	var w = this, g = G(arguments)
	w.i.chalk.apply(w.i, g)
	return w
}
w.show = function (fn) {
	var w = this, g = G(arguments)
	_.ev(.2, function () {
		w.pen(S(fn) ? window[fn] : fn())
	})
	return w
}
w.dev = function () {
	var w = this,
			d = $.div('t', 400, 600).abs(1200, 0).A(),
			d1 = $.div('x', 400, 600).abs(1600, 0).A()
	d.A($.h1('world stats'))
	d1.A($.h1('body stats'))
	return w
}
w.mark = function () {
	var w = this
	w.C('z')
	_.times(50, function (i) {
		w.S(i * 200, 0, 'w', 1, 10000).sensor(true)
	})
	_.times(50, function (i) {
		w.S(0, i * 200, 'w', 10000, 1).sensor(true)
	})
	return w
}
w.dbLayers = function () {
	var w = this
	w.dr(75, 75, 150, 150, '-')
	w.dr(140, 0, 20, 300)
	w.dr(0, 150, 300, 20)
	w.dr(100, 100, 100, 100, '+')
	return w
}
w.dbCross = function (x, y) {
	var w = this, c = w.cent()
	x = N(x) ? x : c.x
	y = N(y) ? y : c.y
	w.dr('t', -10 + x, -140 + y, 20, 300, '-')
	w.dr('t', -150 + x, -10 + y, 300, 20, '-')
	w.dot('r', x, y)
	return w
}
w.back = function () {
	var w = this,
			back = w.s.back
	if (!back.x) {
		back.x = 10000
		back.y = 10000
	}
	else {
		back.x = 0
		back.y = 0
	}
	return w
}
w.HUD = function () {
	var w = this,
			back = w.s.HUD
	if (!back.x) {
		back.x = 10000
		back.y = 10000
	}
	else {
		back.x = 0
		back.y = 0
	}
	return w
}
w.lay = function () {
	var w = this
	w.back().HUD().db()
	return w
}
DBLAYERS = function () {
	W([1200, 600, 2400, 1200], {g: 0})
	w.dbLayers()
}
MARK = function () {
	
	//no buffer to worry about
	//it lets u gradually move past the target point.. until hits limit
	W([1200, // x
		600,
		4800, // x
		1200
	], {g: 0, t: 0}).mark()
	w.S(1200, 300, 'r', 400, 100)
	w.S(1200, 900, 'r', 400, 100)
	w.S(1200, 600, 'w', [[400, 500, '-']])
	y = w.ship(200, 200).rot(120).damp(1, 10)
	w.track(y, 600, 300)
	w.dot(600, 300)
	w.hud.dot(600, 300)
	w.dot(1200, 600)
	w.hud.dot(1200, 600)
	y.XY(100, 600).rot(90).lD(0).lV(4)
}
 function text(){
	 w.pen = function () {
		 this.st.pen.apply(this.st, arguments)
		 return this
	 }
	 w.ch = w.chalk = function () {
		 this.st.chalk.apply(this.st, arguments)
		 return this
	 }
	 w.fl = w.flash = function () {
		 this.st.flash.apply(this.st, arguments)
		 return this
	 }
	 w.pen = function () {
		 this.s.pen.apply(this.s, arguments)
		 return this
	 }
	 w.flash = function () {
		 this.s.flash.apply(this.s, arguments)
		 return this
	 }
	 w.l = w.dl = function () {
		 var w = this, g = G(arguments), o, i
		 o = S(g[0]) ?
		 {c: g[0], x1: g[1], y1: g[2], x2: g[3], y2: g[4]}
				 :
		 {x1: g[0], y1: g[1], x2: g[2], y2: g[3]}
		 i = g.p ? w.fg : g.n ? w.bg : g.d ? w.g : w.i
		 o.c = o.c || (g.p ? 'p' : g.n ? 'r' : g.d ? 'd' : 'b')
		 return i.h()
				 .c(10, o.c)
				 .mt(o.x1, o.y1)
				 .lt(o.x2, o.y2).K('dev line')
	 }
	 w.dr = function (c, x, y, W, h) {
		 var w = this, g = G(arguments), o
		 o = g.S_ ? {c: g[0], x: g[1], y: g[2], w: g[3], h: g[4]}
				 : {x: g[0], y: g[1], w: g[2], h: g[3]}
		 _.x(o, g.p ? {g: w.fg, c: o.c || 'p'} :
				 g.n ? {g: w.bg, c: o.c || 'r'} :
				 {g: w.hud, c: o.c || 'b'})
		 o.g.h().rec(o)
	 }
//dev
	 w.dbCross = function (x, y) {
		 var w = this, c = w.cen()
		 x = N(x, c.x)
		 y = N(y, c.y)
		 w.dr('t', -10 + x, -140 + y, 20, 300, '-')
		 w.dr('t', -150 + x, -10 + y, 300, 20, '-')
		 w.dot('r', x, y)
		 return w
	 }
	 w.stats = function (n) {
		 var w = this
		 _d = $.d(400, 600, w.W, 0, '+').A($.h1('stats'))
		 w.mdq(function (fx) {
			 _f = _d._fix = fx;
			 _b = _f.B()
		 })
		 if (n == 0) {
			 z(upd)
		 }
		 else {
			 _.ev(N(n, .2), upd)
		 }
		 return w
		 function upd() {
			 var f, b;
			 if (_d._fix) {
				 f = _d._fix
				 b = f.B()
				 _d.T(
						 'ty: ' + (b.iD() ? 'dyn' : 'stat'),
						 'x: ' + b.X(),
						 'y: ' + b.Y(),
						 'fK: ' + f.K(), 'bK: ' + b.K(),
						 'sen: ' + f.sen(),
						 'd: ' + f.d(),
						 'fr: ' + f.fr(),
						 'r: ' + f.r(),
						 'bMass:' + parseInt(f.B().mass()),
						 'bNum:' + f.B().n()
				 )
			 }
		 }
	 }
	 w.devGrid = function () {
		 var w = this
		 _.t(12, function (i) {
			 w.l(i * 200, 0, i * 200, w.h)
			 w.l(i * 200, 0, i * 200, w.h, '-')
			 w.l(0, i * 200, w.w, i * 200)
			 w.l(0, i * 200, w.w, i * 200, '-')
		 })
		 return w
	 }
	 w.flash = function () {
		 var w = this, s = w.s
		 s.flash.apply(s, arguments)
		 return w
	 }
//write
	 w.pop = function (t) {
		 var w = this
		 t = this.i.T(t || 'no text', 80, 'o', w.hW, 200)
		 t.tw([{a: .5, sxy: .5}, 4000])
		 _.in(4, function () {
			 t.rm()
		 })
		 return this
	 }
	 w.pen = function (t, f, c) {
		 var g = G(arguments), o
		 if (this._T) {
			 this._T.rm();
			 this._T = null
		 }
		 o = {y: 100}
		 o.x = g.n ? 200 : g.p ? this.W - 200 : this.hW
		 this._T = this.i.T(t, f, c)
		 this._T.XY(o.x, o.y)
		 return this._T
	 }
	 w.chalk = function () {
		 var w = this, g = G(arguments)
		 w.i.chalk.apply(w.i, g)
		 return w
	 }
	 w.l = w.dl = function () {
		 var w = this, g = G(arguments), o, i
		 o = S(g[0]) ?
		 {c: g[0], x1: g[1], y1: g[2], x2: g[3], y2: g[4]}
				 :
		 {x1: g[0], y1: g[1], x2: g[2], y2: g[3]}
		 i = g.p ? w.fg : g.n ? w.bg : g.d ? w.g : w.i
		 o.c = o.c || (g.p ? 'p' : g.n ? 'r' : g.d ? 'd' : 'b')
		 return i.h()
				 .c(10, o.c)
				 .mt(o.x1, o.y1)
				 .lt(o.x2, o.y2).K('dev line')
	 }
	 w.dr = function (c, x, y, W, h) {
		 var w = this, g = G(arguments), o
		 o = g.S_ ? {c: g[0], x: g[1], y: g[2], w: g[3], h: g[4]}
				 : {x: g[0], y: g[1], w: g[2], h: g[3]}
		 _.x(o, g.p ? {g: w.fg, c: o.c || 'p'} :
				 g.n ? {g: w.bg, c: o.c || 'r'} :
				 {g: w.hud, c: o.c || 'b'})
		 o.g.h().rec(o)
	 }
//dev
	 w.dbCross = function (x, y) {
		 var w = this, c = w.cen()
		 x = N(x, c.x)
		 y = N(y, c.y)
		 w.dr('t', -10 + x, -140 + y, 20, 300, '-')
		 w.dr('t', -150 + x, -10 + y, 300, 20, '-')
		 w.dot('r', x, y)
		 return w
	 }
	 w.stats = function (n) {
		 var w = this
		 _d = $.d(400, 600, w.W, 0, '+').A($.h1('stats'))
		 w.mdq(function (fx) {
			 _f = _d._fix = fx;
			 _b = _f.B()
		 })
		 if (n == 0) {
			 z(upd)
		 }
		 else {
			 _.ev(N(n, .2), upd)
		 }
		 return w
		 function upd() {
			 var f, b;
			 if (_d._fix) {
				 f = _d._fix
				 b = f.B()
				 _d.T(
						 'ty: ' + (b.iD() ? 'dyn' : 'stat'),
						 'x: ' + b.X(),
						 'y: ' + b.Y(),
						 'fK: ' + f.K(), 'bK: ' + b.K(),
						 'sen: ' + f.sen(),
						 'd: ' + f.d(),
						 'fr: ' + f.fr(),
						 'r: ' + f.r(),
						 'bMass:' + parseInt(f.B().mass()),
						 'bNum:' + f.B().n()
				 )
			 }
		 }
	 }
	 w.devGrid = function () {
		 var w = this
		 _.t(12, function (i) {
			 w.l(i * 200, 0, i * 200, w.h)
			 w.l(i * 200, 0, i * 200, w.h, '-')
			 w.l(0, i * 200, w.w, i * 200)
			 w.l(0, i * 200, w.w, i * 200, '-')
		 })
		 return w
	 }
	 w.flash = function () {
		 var w = this, s = w.s
		 s.flash.apply(s, arguments)
		 return w
	 }
//write
	 w.pop = function (t) {
		 var w = this
		 t = this.i.T(t || 'no text', 80, 'o', w.hW, 200)
		 t.tw([{a: .5, sxy: .5}, 4000])
		 _.in(4, function () {
			 t.rm()
		 })
		 return this
	 }
	 w.pen = function (t, f, c) {
		 var g = G(arguments), o
		 if (this._T) {
			 this._T.rm();
			 this._T = null
		 }
		 o = {y: 100}
		 o.x = g.n ? 200 : g.p ? this.W - 200 : this.hW
		 this._T = this.i.T(t, f, c)
		 this._T.XY(o.x, o.y)
		 return this._T
	 }
	 w.chalk = function () {
		 var w = this, g = G(arguments)
		 w.i.chalk.apply(w.i, g)
		 return w
	 }
	 w.show = function (fn) {
		 var w = this, g = G(arguments)
		 _.ev(.2, function () {
			 w.pen(S(fn) ? window[fn] : fn())
		 })
		 return w
	 }
 }