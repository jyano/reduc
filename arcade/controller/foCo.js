$fCo = b2d.force = function (x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var co = new b2d.CFC()
	co.V(x, y)
	return co
}
fCo = $pt.fCo
fCo.V = function (x, y) {
	//applies 'gravity' by default
	this.F = U(x) ? V(0, 10) : V(x, y)
	return this
}
w.fCo = w.fo = w.force = function () {
	return this.co($fCo.apply(null, arguments))
}
FORCE = FRC = function () {
	W0().C('e').pen('welcome to (const) force controller')
	fCo = w.fo(1, 0)
	aCo = w.acc(1, 0)
	b = w.circ(100, 100, 20, 'b')
	b1 = w.circ(100, 200, 40, 'b')
	r = w.circ(100, 300, 20, 'r')
	r1 = w.circ(100, 400, 40, 'r')
	_.in(2, function () {
		w.C('d');
		fCo.A(b, b1)
		aCo.A(r, r1)
	})
}
FCO = function () {
	W({w: 'r2', g: 0}).C('e')
//.pen('blue has constForce(1,0)  red has constAcc(1,0)')
	//aCo=w.aCo(1,0).B(w.D(100,300,'x', 20 ).d(1), w.D(100,400, 'x',40 ).d(1))
	//w.aCo(0,1).B(w.D(300,100, 'x', 20).d(1), w.D(400,100, 'x', 40).d(1))
	w.p(100, 100)
	fCo = w.fCo(2, 0).B(
			w.D(100, 100, 'b', 60).d(1).lD(10),
			b = w.D(100, 200, 'b', 40).d(1).lD(10),
			b = w.D(100, 200, 'b', 100).d(1).lD(10))
	w.fCo(0, 2).B(
			w.D(100, 100, 'g', 60).d(1).lD(10),
			w.D(200, 100, 'g', 40).d(1).lD(10),
			w.D(200, 100, 'g', 100).d(1).lD(10))
	w.$$(function () {
		w.C('d')
		w.e(function (b) {
			b.xCo()
		})
	})
}
FCO = function () {
	W({w: 'r2', g: 0}).C('e')
//.pen('blue has constForce(1,0)  red has constAcc(1,0)')
	//aCo=w.aCo(1,0).B(w.D(100,300,'x', 20 ).d(1), w.D(100,400, 'x',40 ).d(1))
	//w.aCo(0,1).B(w.D(300,100, 'x', 20).d(1), w.D(400,100, 'x', 40).d(1))
	w.p(100, 100)
	fCo = w.fCo(2, 0).B(
			w.D(100, 100, 'b', 60).d(1).lD(10),
			b = w.D(100, 200, 'b', 40).d(1).lD(10),
			b = w.D(100, 200, 'b', 100).d(1).lD(10))
	w.fCo(0, 2).B(
			w.D(100, 100, 'g', 60).d(1).lD(10),
			w.D(200, 100, 'g', 40).d(1).lD(10),
			w.D(200, 100, 'g', 100).d(1).lD(10))
	w.$$(function () {
		w.C('d')
		w.e(function (b) {
			b.xCo()
		})
	})
}
