bx.f = function (k) {
	var arr = []
	w.each(function (b) {
		b.each(function (f) {
			if (f.is(k)) {
				arr.push(f)
			}
		})
	})
	return arr
}