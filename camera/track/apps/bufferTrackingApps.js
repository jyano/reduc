SCG = SCROLLGAME = NOBUFFER = function () {
	
	//no buffer to worry about
	//it lets u gradually move past the target point.. until hits limit
	W([1200, // x
		600,
		4800, // x
		1200
	], {g: 0, t: 0})
	w.S(1200, 300, 'r', 400, 100)
	w.S(1200, 900, 'r', 400, 100)
	w.S(1200, 600, 'w', [[400, 500, '-']])
	y = w.ship(200, 200).rot(120).damp(1, 10)
	w.track(y, 600, 300)
	// w.dot(600,300)
	//w.hud.dot(600,300)
//    w.dot(1200,600)
	//   w.hud.dot(1200,600)
	y.XY(1400, 600).rot(90).lD(0).lV(1)
}
function bufferOb() {
	STREET1 = ST1 = function () {
		W([1200, 600, 1400, 1200], {
			g: 300//, t: 0
		})
		w.S(700, 1000, 'r', 800, 20)
		w.S(500, 800, 'g', 200, 20)
		w.S(900, 600, 'x', 200, 20)
		w.p(700, 600).track(600, 400, {
			x: 700, mX: 1.5,
			y: 1000,
			w: 700, h: 600
		})
	}
	SLY = function () {
		W([1200, 600, 2400, 1000], {g: 300}).P()
		w.right.kill();
		w.left.kill()
		w.track(p, 300, 400, {
			x: 1200, y: 700,
			w: 800, h: 500,
			mX: 10, mY: 10
		})
	}
	SPUFF1 = function () {
		W(800, 600, 800, 800).G(100)
		w.S(200, 500, 'g', 100, 100);
		w.S(500, 500, 'w', 100, 100);
		w.S(1000, 500, 'r', 100, 100);
		w.S(1500, 500, 'g', 100, 100)
		y = w.y(100, 100).rt(200)
		bfOb = {x: 1000, y: 1000, w: 400, h: 400}
		w.track(y//, 500, 500, bfOb
		)
	}
	BUFFER = function () {
		W([1200, 600, 4800, 1600], {g: 0, t: 0})//.mark()//.dot(600,300,'*').dot(1200,600,'*')
		y = w.ship(100, 100).damp(1, 10).rot(90).lD(2).aD(2)
				.rot(120)//.lV(1)
		//w.bufFoll(y, 600, 300, {x: 800, y: 300, mX: .8, mY: .8, w: 200, h: 200})
		// w.zoom(.8)
	}
	STREET = function () {
		W([1200, 600, 1400, 1200], {g: 300, t: 0})
		w.S(700, 1000, 'r', 800, 20)
		w.S(500, 800, 'g', 200, 20)
		w.S(900, 600, 'x', 200, 20)
		p = w.p(700, 600)
		w.fg.A(p.sp())
		w.track(p, 600, 400,
				{x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
	}
	SPUFF = function () {
		W(800, 600, 800, 800).G(0)
		w.S(200, 500, 'g', 100, 100);
		w.S(500, 500, 'w', 100, 100);
		w.S(1000, 500, 'r', 100, 100);
		w.S(1500, 500, 'g', 100, 100)
		y = w.ship(100, 100).rt(200)
		w.track(y, 500, 500, {x: 1000, y: 1000, w: 400, h: 400})
		BUFFER = function () {
			W([1200, 600, 4800, 1600], {g: 0, t: 0})//.mark()//.dot(600,300,'*').dot(1200,600,'*')
			y = w.ship(100, 100).damp(1, 10).rot(90).lD(2).aD(2)
					.rot(120)//.lV(1)
			w.bufFoll(y, 600, 300, {
				x: 800, y: 300, mX: .8, mY: .8, w: 200, h: 200
			})
			// w.Z(.8)
		}
	}
	SLY = function () {
		W([1200, 600, 2400, 1000], {g: 300}).P()
		w.right.kill();
		w.left.kill()
		w.track(p, 300, 400, {
			x: 1200, y: 700,
			w: 800, h: 500,
			mX: 10, mY: 10
		})
	}
}

function glimpseWTF(){
	BUF = function () {
		W(1000, 1000, 2000, 2000).G(0).C('z')
		w.glimpse()
		y = w.ship(1000, 1000).rot(33).lV(20, -20).buff({
			x: 600, y: 1000, w: 400, h: 400
		})
	}
	w.glimpse = function () {
		var w = this
		_.ev(4, function () {
			w.zoom(0)
			_.in(2, function () {
				w.zoom(1)
			})
		})
		return w
	}
	T9 = BUFCEN = function () {
		W(1000, 1000, 2000, 2000).G(0).C('z').glimpse()
		y = w.ship(1000, 1000).rot(33).lV(20, -20)
		w.trackBuffCen(y, {w: 400, h: 400})
	}
	T10 = SFB = STREETFIGHTERBUF = function () {
		W([1200, 600, 1400, 1200], {g: 300, t: 0}).P()
		w.S(700, 1000, 'r', 800, 20)
		w.S(500, 800, 'g', 200, 20)
		w.S(900, 600, 'x', 200, 20)
		p.XY(700, 600)
		p.buff({
			x: 700, y: 1000,
			w: 700, h: 600,
			mX: 1.5
		})
	}
	T11 = SRB = SLIDEROOMSBUF = function () {
		W([1200, 600, 2400, 1000], {g: 300}).P()
		p.buff({x: 1200, y: 700, mX: 8, w: 800, h: 500})
		_.in(function () {
			w.mark().dot(600, 300, '*').dot(1200, 600, '*')
		})
	}
}