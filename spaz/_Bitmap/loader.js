

w._ = function (fn) {

	Q(function () {
		fn(w)
	})
	
}


f.bSQ = function (j) {
	var f = this
	Q(function () {f.ctSp( Q.b(j) )})
	return f
}
