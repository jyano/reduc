 
	W = b2d.W = function () {
	
		var g = G(arguments), o
		o = g.A_ ?
				_.x(g.s || {},
						{W: g.f[0], H: g.f[1], wW: g.f[2], wH: g.f[3]}) :
				N(g.f) && U(g.s) ? {g: g.f} :
						g.$N ? {W: g.f, H: g.s, wW: g.t, wH: g[3]} :
								g.S ? {w: g.f} :
								g.f || {}
		_w = o.w
		//make world instance: can be refactored/reduced//
		//set gravity
		o.g = N(o.g) ? V(0, o.g) : O(o.g) ? V(o.g) : V(0, 10)
		//set ignoreSleep
		o.sl = U(o.sl) ? true : o.sl
		//make the world
		b2d.world = function (g, sleep) {     //b2d.wor =  W ???
			g = U(g) ? V(0, 10) : N(g) ? V(0, g) : g
			s = U(sleep) ? true : sleep
			var w = new b2d.World(g, sleep)
			w.SCALE = 1
			return w
		}
		w = new b2d.World(o.g, o.sl)
		//clear the screeen
		//do i use this 'xx' prop?  laaaame!
		if (o.xx !== 0) {
			$('body').empty()
		}
		o.W = N(o.W, 1200)
		o.H = N(o.H, 600)
		w.W = o.W
		w.H = o.H
		w.w = N(o.wW, w.W);
		w.h = N(o.wH, w.H);
		dimensions()
		handling()
		//room()
		keys()
		mouse()
		T.t(enterFrame)
		if (o.t !== 0) {
		
		// ******************************************
			trackee()
		}
		// ****************************************
		w.o = o //w.stats()
		return w
		
		
	}
	function trackee() {
		w.t = w._t = w._t || w.S(w.hW, w.hH, 'w',
				[[20, 2, '-']]).r(.8) //trackee
		w.i.A(w.tSpr = $Ct().XY(w.t.X(), w.t.Y())) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)
		$t(track)
	}
	