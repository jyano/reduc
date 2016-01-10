bD.lV = function (lV) {
	bD.SLV = function (lV) {
		this.linearVelocity = lV;
		return this
	}
	var bD = this
	return U(lV) ? this.linearVelocity : this.SLV(lV)
	function alt() {
		bD.lV = function (vel) {
			if (U(vel)) {
				return this.linearVelocity
			}
			this.linearVelocity = vel;
			return this
		}
	}
}
bD.aV = function (vel) {
	var bD = this
	bD.SAV = function (aV) {
		this.angularVelocity = aV;
		return this
	}
	return U(vel) ? this.angularVelocity : this.SAV(vel)
	function alt() {
		bD.aV = function (vel) {
			if (U(a)) {
				return this.angularVelocity
			}
			this.angularVelocity = vel
			return this
		}
	}
}