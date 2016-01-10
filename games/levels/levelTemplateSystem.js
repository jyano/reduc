function levelTemplateHelpers() {
	w.manyBalls = function () {
		var w = this
		w.S(400, 2500, 'r', 200, 100)
		w.S(800, 2300, 'z', 100, 100)
		w.S(1200, 2300, 'b', 300, 100)
		w.S(1600, 2300, 'z', 100, 100)
		w.S(2000, 2300, 'r', 200, 100)
		return w
	}
}
function levelTemplates() {
	w.scrollLevel = function () {
		var w = this
		_.t(10, function (i) {
			w.D(100 + i * 100, 100, $r(), 35).de(.1)
		})
		w.S(1200, 300, 'r', 400, 100)
		w.S(1200, 900, 'r', 400, 100)
		w.S(1200, 600, 'w', [[400, 500, '-']])
		w.S(400, 300, 'r', 200, 100)
		w.S(800, 300, 'z', 100, 100)
		w.S(1200, 300, 'b', 300, 100)
		w.S(1600, 300, 'z', 100, 100)
		w.S(2000, 300, 'r', 200, 100)
		return w
	}
}
function levelTemplateSystems() {
	function __level__() {
		_level_ = function () {
			W([1200, 600, 2400, 800], {g: [10, 10]}).scrollLevel()
			co = w.tensor()
			_.t(10, function (i) {
				co.body(w.D(100 + 30 * i, 100, 'r', 30).lV(10, 20).rest(.2))
			})
			b = w.D(300, 300, 'w', 40).bo(.8).den(.1).bindSprite('flame')
			cjs.rulers()
			return w
		}
		__levels__()
		function __levels__() {
			$FIREBALL = function () {
				_level_();
				return b
			}
			DEV = function () {
				_level_()
				w.db().dev().mark()
				t = w.ship(1250, 600).track()
			}
		}
	}
}