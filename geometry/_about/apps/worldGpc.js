CG2 = VS = function () {
	W()
	b = w.S(400, 200, 'r', 300, 200).rot(-20)//.dot()
	w.pDraw(b.P(), 50, 10).dot()
}
CG3 = HOL = HOLE = function () {
	W(0)
	b = w.S(400, 400, 'r', 300, 300).f()
	b1 = w.S(400, 400, 'z', 100, 100).f()
	d = M.p(b).D(b1)
	out = w.S(300, 300, 'b', 200, 200)
	inn = w.S(300, 300, 'c', 100, 100)
	out.dif(inn)
	inn.dyn()
}