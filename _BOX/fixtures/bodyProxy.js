f.dyn = function () {
	var b = this.B();
	b.dyn.apply(b, arguments);
	return this
}