bx.can = function () {
	$('<canvas id="canvas" width="1000" height="800" ></canvas>').bor('10px dashed pink').A()
}
$.xI = function (id, col) {
	return $.cI(id).C(col)[0].getContext("2d")
}
TRIPLESTAGE = function () {
	w = W({g: 0})
	b = w.ball(500, 300, 60)
	b.bindSprite2(w.s.shape(500, 300))
	num = 0
	dif = .1
	shape = b.sprite
	shape.rG(['r', 'y'], [0, num], 60).dc(0, 0, 60)
	w.st.HUD.bm('me', function (b) {
		b.XY(300).drag()
	})
	w.st.back.bm('guy', function (b) {
		b.XY(200).drag()
	})
	w.st.back.linGrad('b', 'z')
}
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
tripleStage5LayerWalls = function room() {
	w.BG = w.I = $St('z', w.W, w.H, 0, 0)
	w.st = w.s = $St('X', w.W, w.H, 0, 0)//.aC(0)
	w.cv = w.canvas = w.st.canvas;
	w.$cv = w.can = $(w.canvas);
	w.cx = w.ctx = w.can.ctx('2d')
	w.bg = w.st.ct();
	w.gx = w.g = w.st.ct();
	w.fg = w.st.ct()
	w.FG = w.i = $St('X', w.W, w.H, 0, 0)
	if (o.i) {
		w.s.bm(o.i)
	}
	w.lG($r())
	if (o.aC == 1) {
		//w.i.aC(0)
		// if(g.O){; return w}
		// return g.u? w.i.aC(!w.i.aC()): g.s? w.i.aC(w):
	}
	w.walls(_w)
}
