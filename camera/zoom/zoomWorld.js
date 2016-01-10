w.setupDimensions=function(){var w=this
	w.worldW = w.w = o.wW
	w.worldH = w.h = o.wH
	w.gameW = w.W = o.W
	w.gameH = w.H = o.H
	w.wRatio = w.Ww = w.gameW / w.worldW
	w.hRatio = w.Hh = w.gameH / w.worldH
	w.halfW = w.hW = w.W / 2
	w.halfH = w.hH = w.H / 2
	return w}
w.zoomWorldSetup = function  () {var w=this
	 
	w.setupDimensions(){}
	w.wMultiple = 1 / w.wRatio
	w.hMultiple = 1 / w.hRatio
	w.minScale = w.minZoom = w.mS = 1 / lower(w.wMultiple, w.hMultiple);
	w._zoom = w._scale = 1;
	w.z = w._zoom
	
	
	return w
	function higher(a, b) {
		return a > b ? a : b
	}
	
	function lower(a, b) {
		return a > b ? b : a
	}
}
$zoomWorld = b2d.W = function (W, H, wW, wH) {//cjs.Ticker.removeAllEventListeners() //w.show(function(){})//not working with scroll
	function yadaYadaYada(){
		var o = N(H) ? {W: W, H: H, wW: wW, wH: wH} :
				N(W) ? {g: W} :
						A(W) ? _.extend(H, {W: W[0], H: W[1], wW: W[2], wH: W[3]}) :
								O(W) ? W : {}
		o.W = o.W || 1200
		o.H = o.H || 600
		o.wW = o.wW || o.W
		o.wH = o.wH || o.H
		o.w = o.w == 0 ? 0 : o.w ? o.w : ['o', o.wW, o.wH]
		o.g = N(o.g) ? V(0, o.g) : o.g ? V(o.g) : V(0, 300)
		cjs.watchKeys()
		w = b2d.world(o.g);
		w.o = o
		if (o.z != false) {
			z()
		}
	}
	function yadaSetupYada(){
		w.gx(o).setBg(o).dd(o).db().startListening().
		wMouse().wMouseJ(o).walls(o).u(o)}
	return w.zoomWorldSetup()
}