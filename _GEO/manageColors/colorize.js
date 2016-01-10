b._colorize = function (c) {
	if (c) {
		this.C(c === '*' ? $r() : c)
	}
	return this
}