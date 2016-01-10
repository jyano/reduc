b.ty = b.type = function (a) {
	var b = this
	if (U(a)) {
		return b.GetType()
	}
	b.SetType(a)
	return b
}
b.GT = function () {
	return this.GetType()
}
b.ST = function (ty) {
	this.SetType(ty)
	return this
}
b.iD = b.isDyn = function () {
	return this.GetType() == 2
}
b.dyn = function (resumeVel) {
	var b = this
	b.type(2)
	if (resumeVel == b && O(b._linVel)) {
		b.lV(b._linVel)
	}
	b._linVel = null
	return b
	function alt() {
		b.dyn = function (resumeVel) {
			this.type(2)
			if (resumeVel == true && O(this._linVel)) {
				this.linVel(this._linVel)
			}
			this._linVel = null
			return this
		}
	}
}
b.stat = function () {
	var b = this,
			v = b.lV()
//huh??? oh can get/set type of body
	b._linVel = V(v.x, v.y)
	b.type(0)
	return b
	function alt() {
		b.stat = function () {
			var v = this.linVel()
//huh??? oh can get/set type of body
			this._linVel = V(v.x, v.y)
			this.type(0)
			return this
		}
	}
}
b.iS = b.isStat = function () {
	return this.GetType() == 0
}