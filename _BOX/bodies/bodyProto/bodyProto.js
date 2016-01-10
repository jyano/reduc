b.GWC = function () {
	return this.GetWorldCenter()
}
b.ap = function (met, g) {
	var b = this;
	return b[met].apply(b, g)
}
b.GW = b.W = b.wor = b.world = function () {
	return this.GetWorld()
}
b.GN = b.N = b.next = b.gN = function () {
	return this.GetNext()
} 