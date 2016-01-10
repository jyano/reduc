w.dR = w.cRF = w.$dR = w.$rD = w.rD = function () {var w = this, g = G(arguments);var b = w.sB(g.f, g.s)
	b.rF.apply(b, A(g.t) ? g.t : _.r(g, 2))
	return b.dyn()
} 

w.sR = w.rS = w.$sR = w.$rS = function () {
	return this.cRF.apply(this, arguments).stat()
}

w.dC=   function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return cF
}

w.dC_ =   function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return b
}
w.dC__ = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return w
}

w.sC =  function (x, y, r) {}


////////////////////////
 function soon(){
	 w.boxOld = function (x, y, W, H) {//=brk=brick=
		 w.circleStat = function (x, y, r) {
			 var cir = w.sB(x, y)
			 cir.A($cir(N(r, 50)))
			 return cir
		 }
		 w.circle = function (x, y, r) {
			 var cir = w.dB(x, y)
			 cir.A($cir(N(r, 50)))
			 return cir
		 }
		 x = N(x) ? x : 60;
		 y = N(y) ? y : x
		 W = N(W) ? W : 50;
		 H = N(H) ? H : W
		 return this.A(b2d.dyn(x, y), b2d.poly(W, H)).K('box')
		 w.brickOld = function (x, y, W, H) {//=brk=brick=
			 x = N(x) ? x : 60;
			 y = N(y) ? y : x
			 W = N(W) ? W : 30;
			 H = N(H) ? H : W
			 return this.A(b2d.stat(x, y), b2d.poly(W, H).r(0)).K('brick')
		 }
	 }
	 w.aRF = function () {
		 var w = this, g = G(arguments)
		 var b = w.sB(g.f, g.s)
		 b.rF.apply(b, A(g.t) ? g.t : _.r(g, 2))
		 return w
	 }
	 w.aCF = function (x, y, r) {
		 var w = this
		 var b = w.dB(x, y)
		 var cF = b.cCF(r)
		 return w
	 }
// uses k:
	 w.box = w.bi = function (x, y, W, H) {
		 x = N(x) ? x : 60;
		 y = N(y) ? y : x
		 W = N(W) ? W : 50;
		 H = N(H) ? H : W
		 return this.A($dB(x, y), $rF(W, H)).K('box')
	 }
 
	 
	 w.cF = function (bD, fD) {
		 return this.cB(bD).cF(fD)
	 }
 }
 