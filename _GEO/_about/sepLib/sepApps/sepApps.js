SEP = function () {
	W().C('z')
	b = w.D(300, 300, 'r', 50, 50)
	b.pol('b', $vs.witch)
	_.in(function () {
		b1 = w.D(500, 500)
		b.fs(function (f) {
			var vs = f.vs()
			$sep(b1, vs, 1.6).C('w')
		})
		b1.pol('y', $vs.expl)
		_.in(function () {
			b2 = w.D(500, 500)
			b1.fs(function (f) {
				var vs = f.vs()
				$sep(b2, vs, .5).C($r())
			})
		})
	})
}
SEP = function () {
	W().C('z')
	b = w.D(300, 300, 'r', 50, 50)
	b.pol('b', $vs.witch)
	_.in(function () {
		b1 = w.D(500, 500)
		b.fs(function (f) {
			var vs = f.vs()
			$sep(b1, vs, 1.6).C('w')
		})
		b1.pol('y', $vs.expl)
		_.in(function () {
			b2 = w.D(500, 500)
			b1.fs(function (f) {
				var vs = f.vs()
				$sep(b2, vs, .5).C($r())
			})
		})
	})
}
SEP = function () {
	W().C('z')
	b = w.D(300, 300, 'r', 50, 50)
	b.pol('b', $vs.witch)
	_.in(function () {
		b1 = w.D(500, 500)
		b.fs(function (f) {
			var vs = f.vs()
			$sep(b1, vs, 1.6).C('w')
		})
		b1.pol('y', $vs.expl)
		_.in(function () {
			b2 = w.D(500, 500)
			b1.fs(function (f) {
				var vs = f.vs()
				$sep(b2, vs, .5).C($r())
			})
		})
	})
}
SEP = function () {
	W().C('z')
	b = w.D(300, 300, 'r', 50, 50)
	b.pol('b', $vs.witch)
	_.in(function () {
		b1 = w.D(500, 500)
		b.fs(function (f) {
			var vs = f.vs()
			$sep(b1, vs, 1.6).C('w')
		})
		b1.pol('y', $vs.expl)
		_.in(function () {
			b2 = w.D(500, 500)
			b1.fs(function (f) {
				var vs = f.vs()
				$sep(b2, vs, .5).C($r())
			})
		})
	})
}
OLN = function () {
	$l('oln')
	px = 0
	py = 100
	x1 = 0
	y1 = 0
	x2 = 0
	y2 = 400
	res = isOnSegment(px, py, x1, y1, x2, y2) || 'no res'
	$l('onLn: ' + res)
}
LNY = function () {
	$l('LNY online: ' + M.lnY(100, 100, 100, 200, 200))
	$l('LNY onSeg: ' + isOnSegment(100, 100, 100, 100, 200, 200))
}