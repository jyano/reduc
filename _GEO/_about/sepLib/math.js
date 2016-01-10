M.btwPts = function (x, x1, x2) {
	var res1 = (x < (x1 + 0.1) && x >= x2 - 0.1)
	var res2 = (x > (x1 - 0.1) && x <= x2 + 0.1)
	return res1 || res2
}
M.onSgm = isOnSegment = function (px, py, x1, y1, x2, y2) {
	var btwPts = M.btwPts(px, x1, x2) && M.btwPts(py, y1, y2)
	return btwPts && isOnLine(px, py, x1, y1, x2, y2)
}
M.slope = function (x1, y1, x2, y2) {
	return (y2 - y1) / (x2 - x1)
}
M.lnY = function (x, x1, y1, x2, y2) {
	var mx = M.slope(x1, y1, x2, y2)
	var b = x - x1 + y1
	var y = mx * b
	return y
}
M.onLn = function (px, py, x1, y1, x2, y2) {
	M.veryClose = function (a, b) {
		return M.abs(a - b) > 0.1
	}
	var vC = M.veryClose
	return vC(x2, x1) ?
			!vC(py,
					(y2 - y1) / (x2 - x1) * (px - x1) + y1) :
			vC(px - x1)
}