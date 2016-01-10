GPC = CTXGPC = function () {
	w.pDraw = function (p, x, y) {
		var w = this,
				b = w.S(0, 0)
		b.pol({
			v: M.p(p).plus(x || 0, y || 0).vs(),
			c: 'w', C: 'x', l: 10
		})
		return p
	}
	h.drawPolygon = function (V, c, C, l) {
		var h = this, //h.drawConnectedLines =
				n = V.length
		h.c(c, C, l)
		_.e(V, function (v) {
			v.X = v.x
			v.Y = v.y
		})
		if (n >= 3) {
			h.mt(V[0]) //move to the FIRST//lineTo the REST
			_.in(n, function (i) {
				h.lt(V[i % n])
			})
		}
		//just a clever way to start from 1
		return h
	}
	h.drawPolygons = function (paths, C, c) {
		var h = this
		h.C(C)
		if (c) {
			h.c(c)
		}
		_.e(paths, function (p) {
			h.drawPolygon(p)
		})
		return h
	}
	x.setup = function () {
		var x = this
		x.clearRect(0, 0, 400, 400)
		x.drawPolyD(pol1, "blue", 0, -30);
		x.drawPolyD(pol2, "red", 0, -30);
	}
	x.drawPolyD = function (pD, col, ox, oy) {
		var x = this
		pD.ePol(function (pol, i) {
			x.drawPol(pol.pts(), pD.getCol(i, col), pol.isHole(), ox, oy)
		})
	}
	pD.getCol = function (i, col) {
		return getCol(i, this.numPol(), col)
	}
	function getCol(i, num, strCol) {
//if more than one poly produced, use multiple color to display
		return i == 0 ? strCol :
				["#91ab19", "#ab9119", "#e5ce35", "#ab1998"][i % num]
	}
	
	function createPoly(pts) {
		var res = $pD()
		_.e(pts, function (pt) {
			res.addPoint(new Point(pt[0], pt[1]))
		})
		return res;
	}
	
	function easelCanvasContext() {
		x.Cd = function (i, x, y) {
			var ctx = this
			x = N(x, 100)
			y = N(y, 100)
			i = Q.i(i || 'me')
			ctx.d(i, x - i.W() / 2, y - i.H() / 2)
			return ctx
		}
		x.scImCen = function (i, s, x, y) {
			if (S(i) && i.length < 100) {
				i = Q.i(i)
			}
			x = N(x, 0)
			y = N(y, 0)
			var w = this.W(),
					h = this.H(),
					s = s || 1
			this.d(i, w * s / -2 + w / 2, h * s / -2 + h / 2, w * s, h * s)
		}
		x.scaleImCenSpiralMe = function () {
			var scaleNum = 1,
					that = this
			_.t(100, function () {
				that.scaleImCen('me', scaleNum)
				scaleNum *= .9
			})
		}
		x.scaleImCenSpiral = function () {
			var scaleNum = 1, that = this
			_.t(100, function () {
				that.scaleImCen('me', scaleNum)
				scaleNum *= .9
			})
		}
		x.cjsTick = x.tick = function (func) {
			var x = this
			cjs.tick(function () {
				x.temp(func)
			})
			return this
		}
		tempDrawOnTickerTick = x.t = function (fn) {
			var x = this;
			T.t(function () {
				x.temp(fn)
			});
			return this
		}
	}
	
	w.pDraw = function (p, x, y) {
		var w = this, b = w.S(0, 0)
		b.pol({
			v: M.p(p).plus(x || 0, y || 0).vs(),
			c: 'w', C: 'x', l: 10
		})
		return p
	}
	createPoly = function (points) {
		var res = $pD()
		for (var i = 0; i < points.length; i++) {
			res.addPoint(new Point(points[i][0], points[i][1]));
		}
		return res;
	}
	vs1 = v1 = [[61, 68], [145, 122], [186, 94], [224, 135], [204, 211],
		[105, 200], [141, 163], [48, 139], [74, 117]]
	vs2 = v2 = [[131, 84], [224, 110], [174, 180], [120, 136], [60, 167]]
	colsArr = ["#91ab19", "#ab9119", "#e5ce35", "#ab1998"]
	vertices1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	];
	poly1 = p1 = createPoly(vertices1);
	vertices2 = p2 = [
		[131, 84],
		[224, 110],
		[174, 180],
		[120, 136],
		[60, 167],
	];
	poly2 = createPoly(vertices2);
	opFns = {}
	opFns.difference = function (e) {
		clearScreen();
		drawPoly(poly1, "blue", 0, -30);
		drawPoly(poly2, "red", 0, -30);
		var diff = poly1.difference(poly2);
		drawPoly(diff, "green", 0, 150);
	}
	opFns.intersection = function (e) {
		clearScreen();
		drawPoly(poly1, "blue", 0, -30);
		drawPoly(poly2, "red", 0, -30);
		var diff = poly1.intersection(poly2);
		drawPoly(diff, "green", 0, 150);
	}
	opFns.union = function (e) {
		clearScreen();
		drawPoly(poly1, "blue", 0, -30);
		drawPoly(poly2, "red", 0, -30);
		var diff = poly1.union(poly2);
		drawPoly(diff, "green", 0, 150);
	}
	opFns.xor = function (e) {
		clearScreen();
		drawPoly(poly1, "blue", 0, -30);
		drawPoly(poly2, "red", 0, -30);
		var diff = poly1.xor(poly2);
		drawPoly(diff, "green", 0, 150);
	}
	getPolygonVertices = function (poly) {
		var vertices = [];
		var numPoints = poly.getNumPoints();
		var i;
		for (i = 0; i < numPoints; i++) {
			vertices.push([poly.getX(i), poly.getY(i)]);
		}
		return vertices;
	}
	drawSinglePoly = function (vertices, strokeColor, hole, ox, oy) {
		var i;
		if (ox == undefined)    ox = 0;
		if (oy == undefined)    oy = 0;
		x.beginPath();
		x.moveTo(vertices[0][0] + ox, vertices[0][1] + oy);
		for (i = 1; i < vertices.length; i++) {
			x.lineTo(vertices[i][0] + ox, vertices[i][1] + oy);
		}
		x.lineWidth = 12
		x.strokeStyle = strokeColor;
		x.fillStyle = "rgba(255, 0, 0, 0.1)";
		if (hole == true) {
			x.fillStyle = "#ffffff";
		}
		x.closePath();
		x.stroke();
		x.fill();
	}
	clearScreen = function () {
		x.clearRect(0, 0, 400, 400);
	}
	colors = ["#91ab19", "#ab9119", "#e5ce35", "#ab1998"]//if more than one poly produced, use multiple color to display
	drawPoly = function (polygon, strokeColor, ox, oy) {
		var num = polygon.getNumInnerPoly();
		var i;
		for (i = 0; i < num; i++) {
			var poly = polygon.getInnerPoly(i);
			var vertices = getPolygonVertices(poly);
			if (i == 0) {
				drawSinglePoly(vertices, strokeColor, poly.isHole(), ox, oy);
			}
			else {
				drawSinglePoly(vertices, colors[i % num], poly.isHole(), ox, oy);
			}
		}
	}
	GP = function () {
		$('<title>GPCJS example</title>').A()
		$cv = $('<canvas id="canvas" width="400px" height="400px">').A();
		canvas = $cv[0];
		x = $cv.ctx()
		drawPoly(poly1, "blue", 0, -30);
		drawPoly(poly2, "red", 0, -30);
		GP.opBtns()
	}
	GP.opBtns = function () {
		opsArr = ['difference', 'intersection', 'union', 'xor']
		$.br().A()
		_.e(opsArr, function (op) {
			$.bt(op, opFns[op]).A()
		})
	}
	GP()
	function alt() {
		GP = function () {
			GP.pols()
			$cv = $.c('c', 400, 400)
			x = $cv.ctx()
			$.br().A()
			_.e(['difference', 'intersection', 'union', 'xor'], function (op) {
				$.bt(op, {
					difference: opFn('difference'),
					intersection: opFn('intersection'),
					union: opFn('union'),
					xor: opFn('xor')
				}[op]).A()
			})
			function opFn(op) {
				return function () {
					x.setup()
					x.drawPolyD(applyOp(op), "green", 0, 150);
				}
				function applyOp(op) {
					return pol1[op](pol2)
				}
			}
			
			x.drawPolyD(pol1, "blue", 0, -30);
			x.drawPolyD(pol2, "red", 0, -30);
		}
		GP.pols = function () {
			vxs1 = [[61, 68], [145, 122], [186, 94], [224, 135], [204, 211], [105, 200], [141, 163], [48, 139], [74, 117]]
			vxs2 = [[131, 84], [224, 110], [174, 180], [120, 136], [60, 167]]
			pol1 = createPoly(vxs1);
			pol2 = createPoly(vxs2);
		}
	}
}