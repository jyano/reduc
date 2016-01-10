isOnLine = function (px, py, x1, y1, x2, y2) {
	return veryClose(x2, x1) ?
			!veryClose(py, (y2 - y1) / (x2 - x1) * (px - x1) + y1) :
			veryClose(px - x1)
}


$L('vecFx', 'lit', 'linAl')
 

isOnSegment = function (px, py, x1, y1, x2, y2) {
	var b1 = (
			
			
			(x1 + 0.1) >= px
			&&
			px >= x2 - 0.1
			
			)
			||
			(
			
			
			(x1 - 0.1) <= px && px <= x2 + 0.1
			
			)
	var b2 = ((y1 + 0.1) >= py && py >= y2 - 0.1)
			||
			(
			(y1 - 0.1) <= py && py <= y2 + 0.1
			)
	return b1 && b2 && isOnLine(px, py, x1, y1, x2, y2)
}


function getRet(a, b) {
	return !b ? a : (a == 1) ? 3 : 2
}
nonBodSpecificSepMed = calc = function (vs) {
	vs = _.m(vs, V)
	var isVex = false
	var qu = [vs]
	var figsVec = []
	var vec
	_.whZ(qu, function (n) {
		vec = qu[0];
		isVex = true
		var i1, i2, i3, p1, p2, p3
		_.t(n, function (i) {
			i1 = i
			i2 = capI(i, n, 1)
			i3 = capI(i, n, 2)
			p1 = vec[i1]
			p2 = vec[i2]
			p3 = vec[i3]
			ifDNeg(det2())
		})
		if (isVex) {
			puSh(figsVec, qu)
		}
	})
	return figsVec
	function puSh(pu, sh) {
		sh = sh.shift()
		pu.push(sh)
	}
	
	function capI(i, n, num) {
		return (i < n - num) ? i + num : i + num - n
	}
}
b2d.vcH = function (vc, sc) {
	return b2d.pH().setAsVec(vc, sc)
}
b2d.vcF = function (vc, sc) {
	return b2d.f(b2d.vcH(vc, sc))
}
b.vcF = function (vc, sc) {
	return this.f(b2d.vcF(vc, sc))
}
b.vcFxs = function (vs, sc) {
	var b = this
	_.e(vs, function (v) {
		b.vcF(v, sc)
	})
	return b
}
$det = function (vsV) {
	return det(vsV[i].x, vsV[i].y, vsV[i2].x, vsV[i2].y, vsV[j].x, vsV[j].y);
}
$hitSeg = $hitSgm = function (vsV) {
	return hitSegment(vsV[i].x, vsV[i].y, vsV[i2].x,
			vsV[i2].y, vsV[j].x, vsV[j].y,
			vsV[j2].x, vsV[j2].y)
}
function setJ(j) {
	if (j != i && j != i2) {
		if (!fl) {
			d = $det(vsV)
			if (d > 0) {
				fl = true
			}
		}
		if (j != i3) {
			j2 = (j < n - 1) ? j + 1 : 0;
			if ($hitSegment(vsV)) {
				ret = 1
			}
		}
	}
}
bodSpecificSepMet = Sep = function (b, vs, sc) {
	var g = G(arguments), o
	var i, j, m, figsVec, polyShape, n
	o = b2d, iB(g.f) ?
	{b: g.f, vs: g.s, sc: g.t} : {vs: g.f, sc: g.s}
	o.sc = N(o.sc, 30)
	o.b = o.b || w.mkBod(g)
	b.vcFxs(calc(vs), sc)
	return o.b
}
Validate = function (vsV) {
	var n = _.z(vsV)
	var fl2 = false
	var ret = 0
	var i2, i3, fl
	_.t(n, function (i) {
		i2 = (i < n - 1) ? i + 1 : 0
		i3 = (i > 0) ? i - 1 : n - 1
		fl = false
		_.t(n, setJ)
		if (!fl) {
			fl2 = true
		}
	})
	return getRet(ret, fl2)
}
function misMat(v, vec) {
	if (!ptsMatch(hitV.x, hitV.y, v.x, v.y)) {
		vec.push(hitV)
	}
}
function ifV() {
	if (v) {
		dx = p2.x - v.x;
		dy = p2.y - v.y;
		t = dx * dx + dy * dy
		if (t < minLen) {
			h = j1
			k = j2
			hitV = v
			minLen = t
		}
	}
}
function ray() {
	return hitRay(p1.x, p1.y, p2.x, p2.y, v1.x, v1.y, v2.x, v2.y);
}
function det2() {
	return det(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
}
function vars2() {
}
function offSgm() {
	return !isOnSegment.apply(null, arguments)
}
function whTrue() {
	while (true) {
		if (k == j2) {
			if (offSgm(v2.x, v2.y, vec[h].x, vec[h].y, p1.x, p1.y)) {
				vec1.push(vec[k])
			}
			break
		} else {
			vec1.push(vec[k])
		}
		h = k
		k = (k < 1) ? n - 1 : k - 1
	}
}
function linAl() {
	ptsMatch = pointsMatch = function (x1, y1, x2, y2) {
		var dx = (x2 >= x1) ? x2 - x1 : x1 - x2, dy = (y2 >= y1) ? y2 - y1 : y1 - y2;
		return dx < 0.1 && dy < 0.1
	}
	hitRay = function (x1, y1, x2, y2, x3, y3, x4, y4) {
		var t1 = x3 - x1, t2 = y3 - y1, t3 = x2 - x1, t4 = y2 - y1, t5 = x4 - x3, t6 = y4 - y3, t7 = t4 * t5 - t3 * t6, a;
		a = (((t5 * t2) - t6 * t1) / t7);
		var px = x1 + a * t3, py = y1 + a * t4;
		var b1 = isOnSegment(x2, y2, x1, y1, px, py);
		var b2 = isOnSegment(px, py, x3, y3, x4, y4);
		if ((b1 && b2)) {
			return V(px, py);
		}
		return null;
	}
	hitSegment = function (x1, y1, x2, y2, x3, y3, x4, y4) {
		var t1 = x3 - x1, t2 = y3 - y1, t3 = x2 - x1, t4 = y2 - y1, t5 = x4 - x3, t6 = y4 - y3, t7 = t4 * t5 - t3 * t6, a;
		a = (((t5 * t2) - t6 * t1) / t7);
		var px = x1 + a * t3, py = y1 + a * t4;
		var b1 = isOnSegment(px, py, x1, y1, x2, y2);
		var b2 = isOnSegment(px, py, x3, y3, x4, y4);
		if ((b1 && b2)) {
			return V(px, py);
		}
		return null;
	}
	det = function (x1, y1, x2, y2, x3, y3) {
		return x1 * y2 + x2 * y3 + x3 * y1 - y1 * x2 - y2 * x3 - y3 * x1
	}
}
function veryClose(a, b) {
	return M.abs(a - b) > 0.1
}
 
function ifDNeg(d) {
	if (d < 0) {
		isVex = false
		minLen = Number.MAX_VALUE
		_.t(n, function (j) {
			if (j != i1 && j != i2) {
				j1 = j;
				j2 = (j < n - 1) ? j + 1 : 0;
				v1 = vec[j1];
				v2 = vec[j2];
				v = ray()
				ifV()
			}
		})
		vec1 = []
		vec2 = []
		j1 = h;
		j2 = k;
		v1 = vec[j1];
		v2 = vec[j2];
		misMat(v2, vec1)
		misMat(v1, vec2)
		h = -1
		k = i1
		whTrue()
		vec1 = vec1.reverse()
		h = -1
		k = i2
		while (true) {
			if (k == j1) {//  if   ( h<0  || h>=n)  {  err()   }
				if (k == j1 && !isOnSegment(v1.x, v1.y, vec[h].x, vec[h].y, p2.x, p2.y)) {
					vec2.push(vec[k])
				}
				break
			}
			else {
				vec2.push(vec[k])
			}
			h = k
			k = (k + 1 > n - 1) ? 0 : k + 1
		}
		qu.push(vec1, vec2)
		qu.shift()
	}
}
function vecFx() {
}
function doc() {
//**===validate
	/**
	 * Checks whether the vxs in <code>vsV</code> can be properly distributed into the new fixtures
	 * (more specifically, it makes sure there are no overlapping segments and the vxs are in clockwise order).
	 * It is recommended that you use this method for debugging only, because it may cost more CPU usage.
	 * <p/>
	 * @param vsV The vxs to be validated.
	 * @return An integer which can have the following values:
	 * <ul>
	 * <li>0 if the vxs can be properly processed.</li>
	 * <li>1 If there are overlapping lines.</li>
	 * <li>2 if the pts are <b>not</b> in clockwise order.</li>
	 * <li>3 if there are overlapping lines <b>and</b> the pts are <b>not</b> in clockwise order.</li>
	 * </ul>
	 * */
//**======
//$sep  class  for concave polygons
	/*
	
	 // - Box2D's  b2PolygonShape  class allows you to create convex shapes with setAsArray() setAsVector()  
	
	 // s must be   clockwise  
	 //No 3 neighbouring pts   lie on the same line segment
	 //  no overlapping segments, no "holes"
	
	 @param b The b2Body, in which the new fixtures will be stored.
	 * @param fixtureDef A b2FixtureDef, containing all the properties (friction, density, etc.) which the new fixtures will inherit.
	 * @param vsV The vxs of the non-convex polygon, in clockwise order.
	 * @param sc <code>[optional]</code> The sc which you use to draw shapes in Box2D. The bigger the sc, the better the precision. The default value is 30.
	 * @see b2PolygonShape
	 * @see b2PolygonShape.SetAsArray()
	 * @see b2PolygonShape.SetAsVector()
	 * @see b2Fixture
	 * */
//pass in an array of pts 
// each will get scd and then, 
// calcShapes is applied to it 
//and then for EACH OF THE SHAPES!! ....
// err=function(){throw new Error("A problem has occurred.
// Use the Validate() method to see where the problem is.")}
//Sep pass: (vs, sc, ballOpsFlag(+/)  or pass b, vs, sc
	// so it always sets the fixtures on to SOME body..
	// you can pass it one.. or it makes either a ball or a dyn? 
	// ******* look into.. whats the difference anyway?
}
function _pre() {
	w.mkBod = function (g) {
		var w = this
		return g.p ? w.ball(300, 300, 4) : w.dyn(300, 300)
	}
	$sep = b2d.sep = function (b, vs, sc) {
		return U(b) ? Sep :
				Sep(b, toPts(vs), invSc(sc))
	}
	function invSc(sc) {
		return 30 * (1 / (sc || 1) )
	}
	
	function toPts(vs) {
		return _.m(tVs(vs), function (v) {
			v.pt()
		})
	}
	
	function tVs(vs) {
		return b2d.isGPoly(vs) ? vs.vs() : vs
	}
	
	_.whL = function (qu, fn) {
		var initN = _.z(qu)
		while (_.z(qu)) {
			fn(_.z(qu), initN)
		}
		return qu
	}
}
function _post() {
	Separate = Sep
}