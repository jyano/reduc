 
b.killXY = b.KPos = b.KXY = b.kXY = function () {
	var b = this
	var xy = b.XY();
	b.kill();
	return xy
}