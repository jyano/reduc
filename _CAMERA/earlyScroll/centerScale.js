b.cenSc = b.centerScale = function (z) {
 
	var b = this, w = b.W(), st = w.st
	st.stgXY(z)
	st.X(w.hW - (  (b.X() - w.hW) * z))
	st.Y(w.hH - (  (b.Y() - w.hH)) * z)
	return b
}