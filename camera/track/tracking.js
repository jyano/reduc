 
b.centerScale = function (scaleXY) {var b = this, w = b.W(), x, y
	w.st.sXY(scaleXY).st.XY(
		x=	w.hW - (  (b.X() - w.hW) * z),
		y=	w.hH - ((b.Y() - w.hH)) * z)
	return b
} 
b.follow = function (x, y) {
 
	var b = this
	b.cam = function (x, y) {
		var b = this,
				st = b.getStage()
		st.XY(
				b.diff(x, y)
		)
		return b
	}
	$t(function () {
		if (O(b.sprite)) {b.cam(x, y)
		}
	})
	
	return b
}

   
