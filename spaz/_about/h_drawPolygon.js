h.drawPolygonYesNo = function (V, c, C, l) {
	var h = this, //h.drawConnectedLines =
			n = V.length
	h.c(c, C, l)
	_.each(V, function (v) {
		v.X = v.x
		v.Y = v.y
	})
	if (n >= 3) {
		h.mt(V[0]) //move to the FIRST//lineTo the REST
		T(n, function (i) {
			h.lt(V[i % n])
		})
	} //just a clever way to start from 1
	return h
} // h.cir=  function(r,x,y,c,C){var h = this, gx = h.graphics; return N(x) ?  h.c(c,C).dc(x,y,r) : h.c(x,y).dc(r)  }
h.drawPolygon = h.drawConnectedLines = function (poly, sc) {
	var h = this,
			numVerts = poly.length
	_.each(poly, function (v) {
		v.X = v.x;
		v.Y = v.y
	})
	if (sc) {
		this.s(sc)
	}
	if (numVerts >= 3) {
		//move to the FIRST
		h.mt(poly[0])
		//lineTo the REST
		T(numVerts, function (i) {
			h.lt(poly[i % numVerts])
		}) //just a clever way to start from 1
	}
	return this
}
h.drawPolygons = function (paths, C, c) {
	var h = this
	h.C(C);
	if (c) {
		h.c(c)
	}
	_.e(paths, function (p) {
		h.drawPolygon(p)
	})
	return h
}
h.drawPolygons = function (paths, fc, sc) {
	var h = this
	h.f(fc).s(sc)
	_.each(paths, function (path) {
		h.drawPolygon(path)
	})
	return h
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
		$.in(n, function (i) {
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
	_.each(paths, function (p) {
		h.drawPolygon(p)
	})
	return h
}
h.drawPoly = h.drawPolygon = function (V, c, C, l) {
	alert('h drawPoly')
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
h.drawPolys = h.drawPolygons = function (paths, C, c) {
	alert('h drawPolys')
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