function TripleStageHUD() {
	w.$cv = function () {
		return this.hud.c
	}
}
w.oMD = function () {
	var c = $(w.s.HUD.canvas)
	c.mousedown(function (e) {
		o.dx = e.clientX - w.s.x
	})
}
  