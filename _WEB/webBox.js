function boxWeb() {
	return '?????'
}
function worldGUI_viaHTML() {
	function divWithTextBinding() {
		w.textDsp = function (fn) {
			var d = InverseDiv30().abs(0, this.st.H())
			_.ev(function () {
				d.T(fn())
			})
			InverseDiv30 = function (t) {
				return $.d('z', wd, 200).col('w').fS(30).setT(t)
			}
			return this
		}
	}
	
	function worldGUI_inputs_viaHTML() {
		function rangeInputControlForApp() {
			$.tallRange = function () {
				var r = $.rg().W(500).A() //range
				r.abs(775, 500)
				r.css('transform', 'rotate(90deg)')
				return r.val(0)
			}
			w.range = function () {
				var w = this
				var r = $._range90(775, 500).wValOnTk(function (val) {
					var zoom = val / 25 + 1
					w.ZOOM(zoom)
				})
				return r
			}
			$._range = function (x, y) {
				var w = this
				var r = $.range().A()
				r.abs(x, y)
				r.W(500)
				r.attr({
					min: .2,
					max: 10, step: .2, value: 1
				})
				r.val(1)
				return r
			}
			$._range90 = function (x, y) {
				var w = this
				var r = $._range(x, y)
				return r.css('transform', 'rotate(90deg) scaleX(1.7) scaleY(3)')
			}
		}
		
		w.bt = function (text, fn) {
			var w = this
			$.bt(text, fn).A().abs(w.gameW / 2, w.gameH)
					.WH(200, 100).css('fontSize', 40)
		}
	}
}