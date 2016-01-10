 
 
	
	// 1) asign w.t directly to a trackee
	CAMBALL = TRACKEE = function () {
		
		//W([1200,600,2400,600],{g:[10,10]}).Y()
		W([1200, 600, 2400, 600], {g: 100}).Y()
		mick(700, 100, {c1: 'b', c2: 'X'})
		mick(700, 300, {c2: 'b'})
		//  mick(100,100, { y2:10 })
		//  mick(100,200, { y2:200 })
		//  mick(100,300, { x2:100 })
		function mick(x, y, lf) {
			var g = G(arguments)
			w.i.h(x, y, '+').c({l: 20, C: 0, lf: lf || 1})
					.dc([50], [200, 0, 100], [100, 100, 100])
			if (g.p) {
				w.i.h(x, y).c({l: 20, C: 0, ls: lf || 1})
						.dc([50], [200, 0, 100], [100, 100, 100])
			}
		}
		
		y.i.c('y').dc(100, 100, 30)
				.c('o').dc(100, 100, 10)
				.c('X', 'g', 8)
				.mt([
					[100, 100], [300, 300], [400, 100],
					[500, 300], [450, 450]],
				[[500, 0], [600, 100]])
				.cir(600, 300, 'u', 'g', 10)
		h = w.i.h(600, 300, '+')
		h.cir(105, 100, 20, 'b')
				.cir(100, 20, 100, 'g')
				.cir(105, 100, 8, 'z')
				.cir(200, 100, 20, 'b')
				.cir(200, 100, 8, 'z')
		w.t = b = w.D(300, 300, 'r', 80).bo(.8).den(.1)
	}
	
	// 2) uses 'track' methods
	CAMFOLLOW = function () {
		W(500, 500, 1600, 1000).G(0)
		a = w.ship().C('b')
		b = w.ship(400, 400).C('o').track()
		I(5, function () {
			if (w.follA) {
				b.track();
				w.follA = 0
			}
			else {
				a.track();
				w.follA = 1
			}
		})
	}
 
 
  