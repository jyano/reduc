function changeLog() {
	function deprecations() {
		w.gameH = function () {
			return this.H
		}
		w.worldH = function () {
			return this.h
		}
		w.gameW = function () {
			return this.W
		}
		w.worldW = function () {
			return this.w
		}
	}
	
	function scaled() {
		w.scaled = function (a) {
			return a * this.zoom()
		}
		w.zHalf = w.scaledHalf = function (a) {
			return this.scaled(a / 2)
		}
		w.scaledDouble = function (a) {
			return this.scaled(a * 2)
		}
		w.zDif = w.scaledDif = function (a, b) {
			return this.scaled(a - b)
		}
		w.scaledSum = function (a, b) {
			return this.scaled(a + b)
		}
		w.scaledQuotient = function (a, b) {
			return this.scaled(a / b)
		}
		w.scaledProduct = function (a, b) {
			return this.scaled(a * b)
		}
		w.scaledWorldW = function () {
			return this.scaled(this.worldW)
		}
		w.scaledWorldH = function () {
			return this.scaled(this.worldH)
		}
	}
	
	w.gW = function () {
		return this.stage.canvas.width
	}
	w.gH = function () {
		return this.stage.canvas.height
	}
	w.wW = function () {
		return this.stage.canvas.width
	}
	w.wH = function () {
		return this.stage.canvas.height
	}
	w.halfW = function () {
		return this.gW / 2
	}
	w.halfH = function () {
		return this.gH / 2
	}
}