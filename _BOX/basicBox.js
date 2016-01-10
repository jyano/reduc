function generalBodyStuffAdvanced() {
	function bodyTransformClone() {
		b.copyXY = function (b1) {
			var b = this
			return b.XY(b1.X(), b1.Y()).rt(b1.rt())
		}
	}
}
	
	 