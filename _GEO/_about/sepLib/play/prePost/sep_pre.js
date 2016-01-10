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
isOnSegment = function (px, py, x1, y1, x2, y2) {
	var b1 = (    (x1 + 0.1) >= px && px >= x2 - 0.1   )
			||
			(   (x1 - 0.1) <= px && px <= x2 + 0.1   )
	var b2 = ( (y1 + 0.1) >= py && py >= y2 - 0.1) || (   (y1 - 0.1) <= py && py <= y2 + 0.1   )
	var isOnSgm = b1 && b2
	return isOnSgm && isOnLine(px, py, x1, y1, x2, y2)
}
isOnLine = function (px, py, x1, y1, x2, y2) {
	if ((x2 - x1) > 0.1 || x1 - x2 > 0.1) {
		var a = (y2 - y1) / (x2 - x1),
				possibleY = a * (px - x1) + y1,
				diff = (possibleY > py) ? possibleY - py : py - possibleY
		return (diff < 0.1)
	}
	return (((px - x1) < 0.1) || x1 - px < 0.1)
}
det = function (x1, y1, x2, y2, x3, y3) {
	return x1 * y2 + x2 * y3 + x3 * y1 - y1 * x2 - y2 * x3 - y3 * x1
}
pointsMatch = function (x1, y1, x2, y2) {
	var dx = (x2 >= x1) ? x2 - x1 : x1 - x2, dy = (y2 >= y1) ? y2 - y1 : y1 - y2;
	return dx < 0.1 && dy < 0.1
}
hitRayFn$ = function (p1, p2, v1, v2, fn) {
	var v = hitRay$(p1, p2, v1, v2)
	if (v) {
		return fn(v)
	}
}
hitRay$ = function (p1, p2, v1, v2) {
	return hitRay(p1.x, p1.y, p2.x, p2.y, v1.x, v1.y, v2.x, v2.y)
}
onSgm$ = function (p, x1, x2) {
	return isOnSegment(p.x, p.y, x1.x, x1.y, x2.x, x2.y)
}
offSgm$ = function () {
	return !onSgm$.apply(null, arguments)
}
ptsMt$ = function (x1, x2) {
	return pointsMatch(x1.x, x1.y, x2.x, x2.y)
}
ptsMs$ = function () {
	return !ptsMt$.apply(null, arguments)
}
isOL$ = function (p, x1, x2) {
	return isOnLine(p.x, p.y, x1.x, x1.y, x2.x, x2.y)
}
det$ = function (x1, x2, x3) {
	return det(x1.x, x1.y, x2.x, x2.y, x3.x, x3.y)
}
M.sumOfSqs = function (p1, p2) {
	var dx = p1.x - p2.x;
	var dy = p1.y - p2.y;
	return dx * dx + dy * dy
}
function onMism(hitV, v2, fn) {
	var mism = !pointsMatch(hitV.x, hitV.y, v2.x, v2.y)
	if (F(fn)) {
		if (mism) {
			return fn(hitV)
		}
	}
	return mism
}
function onMismPush(hitV, v2, vec) {
	onMism(hitV, v2, function () {
		vec.push(hitV)
	})
}
function offSgm(pt, vecH, p1) {
	return !isOnSegment(pt.x, pt.y, vecH.x, vecH.y, p1.x, p1.y)
}