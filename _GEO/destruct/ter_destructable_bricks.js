w.ter = function () {
	var w = this, ter = []
	_.t(13, function (i) {
		_.t(8, function (j) {
			var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
			ter.push({
				b: b,
				vs: b.f().vs(),
				p: M.p([
					V(i * 25 + 410, j * 25 + 210),
					V(i * 25 + 410, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 210)])
			})
		})
	})
	return ter
}
w.destructableBricks = w.ter = function () {
	var w = this, ter = []
	_.t(13, function (i) {
		_.t(8, function (j) {
			var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
			ter.push({
				b: b,
				vs: b.f().vs(),
				p: M.p([V(i * 25 + 410, j * 25 + 210), V(i * 25 + 410, j * 25 + 190), V(i * 25 + 430, j * 25 + 190), V(i * 25 + 430, j * 25 + 210)])
			})
		})
	})
	return ter
}
