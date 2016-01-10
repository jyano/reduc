f.$ = function (fn) {
	var f = this, b = f.B(), w = b.W()
	w.$(function (o) {
		w.q(o.x, o.y, function (fx) {
			//w.q is hack
			if (f == fx) {
				_.b(fn, f)(o)
			}
		})
	})
	return f
}
f.$ = function (fn) {
	var f = this, b = f.B(), w = b.W()
	w.$(function (o) {
		w.q(o.x, o.y, function (fx) {
			if (f == fx) {
				_.b(fn, f)(o)
			}
		})
	})
	return f
}
w.$ = w.click = function (func) {
	var w = this
	$(w.hud.canvas).click(function (e) {
		func(e.pageX, e.pageY)
	})
	return w
}
w.$$ = function (func) {
	var w = this
	$(w.hud.canvas).dblclick(function (e) {
		func(e.pageX, e.pageY)
	})
	return w
}
b.$$ = function (fn) {
	var b = this, w = b.W()
	w.$$(function (o) {
		w.q(o.x, o.y, function (f) {
			if (f.of(b)) {
				_.b(fn, f)(o)
			}
		})
	})
	return b
}
b.$ = function (fn) {
	var b = this, w = b.W()
	w.$(function (o) {
		w.q(o.x, o.y, function (f) {
			if (f.of(b)) {
				_.b(fn, f)(o)
			}
		})
	})
	return b
}
w.logMXY = function (e) {
	var w = this,
			p = w.sToW(e.X, e.Y);
	w.mx = p.x;
	w.my = p.y
	return w
}
//world mouse functions are great
// they demonstrates md, q, m, and ofClass 
// but it has a real purpose too!
w.mm(function (o) {
	w.logMXY(o)
})
w.md(function (o) {
	
	//this only goes off once when pushed and held down
	// anytime mousedown..
	// because that implies there was a mouse up 
	// so there should be no current mouse joint.. smart!
	w.logMXY(o)
	w.q(o.x, o.y, function (f) {
		//if(!f.iD()){return true}
		if (f.of(w.o.m)) {
			var b = f.B()
			w.mj = w.mJ(b, o.x, o.y)
		}
	})
})
w.mu(function () {
	// DESTROY WORLD MOUSE JOINT
	if (w.mj) {
		w.j(w.mj);
		w.mj = null
	}
})
//world mouse functions are great
// they demonstrates md, q, m, and ofClass 
// but it has a real purpose too!
w.mm(function (o) {
	w.logMXY(o)
})
w.md(function (o) {
	
	//this only goes off once when pushed and held down
	// anytime mousedown..
	// because that implies there was a mouse up 
	// so there should be no current mouse joint.. smart!
	w.logMXY(o)
	w.q(o.x, o.y, function (f) {
		//if(!f.iD()){return true}
		if (f.of(w.o.m)) {
			var b = f.B()
			w.mj = w.mJ(b, o.x, o.y)
		}
	})
})
w.mu(function () {
	// DESTROY WORLD MOUSE JOINT
	if (w.mj) {
		w.j(w.mj);
		w.mj = null
	}
})
w.mm(function (o) {
	w.logMXY(o)
})
w.md(function (o) {
	
	//this only goes off once when pushed and held down
	// anytime mousedown..
	// because that implies there was a mouse up 
	// so there should be no current mouse joint.. smart!
	w.logMXY(o)
	w.q(o.x, o.y, function (f) {
		//if(!f.iD()){return true}
		if (f.of(w.o.m)) {
			var b = f.B()
			w.mj = w.mJ(b, o.x, o.y)
		}
	})
})
w.mu(function () {
	// DESTROY WORLD MOUSE JOINT
	if (w.mj) {
		w.j(w.mj);
		w.mj = null
	}
})
w.mm(function (o) {
	w.logMXY(o)
})
w.md(function (o) {
	
	//this only goes off once when pushed and held down
	// anytime mousedown..
	// because that implies there was a mouse up 
	// so there should be no current mouse joint.. smart!
	w.logMXY(o)
	w.q(o.x, o.y, function (f) {
		//if(!f.iD()){return true}
		if (f.of(w.o.m)) {
			var b = f.B()
			w.mj = w.mJ(b, o.x, o.y)
		}
	})
})
w.mu(function () {
	// DESTROY WORLD MOUSE JOINT
	if (w.mj) {
		w.j(w.mj);
		w.mj = null
	}
})
w.logMXY = function (e) {
	var w = this,
			p = w.sToW(e.X, e.Y);
	w.mx = p.x;
	w.my = p.y
	return w
}
w.$ = function (fn) {
	var w = this
	w.UI().click(function (e) {
		fn({x: w.mx, y: w.my, e: e})
	})
	return w
}
w.$$ = function (fn) {
	var w = this
	w.UI().dblclick(function (e) {
		fn({x: w.mx, y: w.my, e: e})
	})
	return w
}
w.mm = function (fn) {
	var w = this, g = G(arguments)
	$.mousemove(function (e) {
		var o = {
			x: w.mx,
			y: w.my,
			X: e.clientX,
			Y: e.clientY,
			e: e
		}
		fn(o)
	})
	return w
}
w.md = function (fn) {
	var w = this
	w.i.c.mousedown(function (e) {
		var o = {x: w.mx, y: w.my, X: e.clientX, Y: e.clientY, e: e}
		w.q(w.mx, w.my, function (f) {
			if (f) {
				o.f = f;
				o.b = f.B()
			}
		})
		fn(o)
	})
	return w
}
w.mu = function (fn) {
	var w = this, $cv = $(w.i.canvas)
	$cv.mouseup(function (e) {
		fn({
			x: w.mx,
			y: w.my,
			e: e
		})
	})
	return w
}
w.mdq = function (fn) {
	var w = this
	w.md(function (e) {
		w.q(e.x, e.y, function (f) {
			fn(f, e)
		})
	})
	return this
}
w.e$ = function () {
	var g = G(arguments), o
	o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
	this.e(function (b) {
		if (b.of(o.k)) {
			b.$(o.fn)
		}
	})
	return this
}
enterFrame = function () {
	if (w.mj) {
		w.mj.tg(w.mx, w.my)
	}
	w.step(1 / 60)
	if (F(o.cb)) {
		o.cb()
	}
	if (!T.iP()) {
		w.I.u();
		w.s.u();
		w.i.u()
	}
	w.DDD()
	w.e(function (b) {
		b.wX = b.X();
		b.wY = b.Y()
		b.sX = w.wTS(b.wX, b.wY).x
		b.sY = w.wTS(b.wX, b.wY).y
		if (O(b.gx)) {
			b.gx.XY(b.X(), b.Y()).rt(b.rt())
		}
	})
}
