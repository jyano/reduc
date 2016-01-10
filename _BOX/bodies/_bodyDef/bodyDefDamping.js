bD.lD = function (lD) {
	var bD = this
	bD.SLD = function (lD) {
		this.linearDamping = lD;
		return this
	}
	return U(lD) ? this.linearDamping : this.SLD(lD)
	function alt() {
		bD.lD = function (dm) {
			var bD = this
			if (U(dm)) {
				return bD.linearDamping
			}
			bD.linearDamping = dm
			return bD
		}
	}
}
bD.aD = function (aD) {
	var bD = this
	bD.SAD = function (aD) {
		this.angularDamping = aD;
		return this
	}
	return U(aD) ? this.angularDamping : this.SAD(aD)
	function alt() {
		bD.aD = function (damp) {
			if (U(damp)) {
				return this.angularDamping
			}
			this.angularDamping = damp;
			return this
		}
	}
}