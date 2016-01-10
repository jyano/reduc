isOnSegment = function (px, py, x1, y1, x2, y2) {
	var b1 = (
			
			px < (x1 + 0.1) && px >= x2 - 0.1
			
			) || (
			px > (x1 - 0.1) && px <= x2 + 0.1
			
			)
	var b2 = ( (y1 + 0.1) >= py && py >= y2 - 0.1) || (   (y1 - 0.1) <= py && py <= y2 + 0.1   )
	return b1 && b2 && isOnLine(px, py, x1, y1, x2, y2)
}