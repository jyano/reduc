 
isOnLine = function (px, py, x1, y1, x2, y2) {
	if ((x2 - x1) > 0.1 || x1 - x2 > 0.1) {//if SOME length..
		var a = (y2 - y1) / (x2 - x1)
		//which/what  y WOULD be on line per  this x
		var possibleY = a * (px - x1) + y1
		//as long as its close
		var diff = (possibleY > py) ? possibleY - py : py - possibleY
		return (diff < 0.1)
	}
	return (((px - x1) < 0.1) || x1 - px < 0.1)
}
  