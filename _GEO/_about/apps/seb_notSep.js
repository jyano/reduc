SEB = function () {
	w = b2d.W({g: 1})//w.show(function(){return b.num()})
	b = w.B(800, 300, 'r', 200, 800).stat().K('terr')
	y = w.ship().linDamp(3).X(1100)
	p = w.player().XY(200, 400).K('jason');
	setTimeout(function () {
		p.sprite.sXY(.5)
	}, 1000)
	can = true
	w.beg(function (cx) {
		var fixt, j, bull, terr, bX, bY, br
		if (fixt = cx.with('bul', 'terr')) {//w.s.flash()
			bull = fixt[0].B()
			terr = fixt[1].B()
			bX = bull.X()
			bY = bull.Y()
			bull.kill()
			if (can) {
				can = false
				// b.minusPolyCirc(bX, bY, 100, 7)
				poly = Math.poly(
						_.map(b2d.polyCirc(100, 7), function (v) {
							return [v.x + b.X(), v.y + b.Y()]
						}))
				// verts = b.sub(poly)
				br = w.polyCirc(bX, bY, 100, 7)  // b.sub(br) // b.verts not working :(
				b.subtract(br, '-') // br.kill()
				//  b.color('r')
				can = true
			}
		}
		else if (fixt = cx.with('jason', 'bul')) {
			$l('bullet hit jason!!!!');
			j = fixt[0].body();
			j.sprite.tween([{sxy: 20, r: 100}, 1000])
		}
	})
	f = function () {
		v = h.verts()
		v.unshift('b')
		v.unshift(200)
		v.unshift(200)
		w.B.apply(w, v)
	}
	killIfSmall = function (f) {
		var area = f.area();
		if (area < 20) {
			$l('too small: ' + area);
			f.kill()
		}
	}
	// w.debug()
}