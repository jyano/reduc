function room() {
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