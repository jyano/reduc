   
w.loader = w._ = function (fn) {
	Q(function () {
		fn(w)
	})
}


