w.bulBD = w.bul = function (x, y) {
	return this.B($bulBD(x, y))
}
w.bul = function (x, y) {
	var def, body
	def = b2d.dyn(x, y)
	def.bullet = true
	body = this.createBody(def)
	return body
}