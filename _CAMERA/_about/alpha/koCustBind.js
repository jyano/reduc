function functionBoundTicker() {
	$.fn.wValOnTk = function (fn) {
		var r = this
		$t(function () {
			fn(r.val())
		})
		return r
	}
}