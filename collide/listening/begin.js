w.b = w.bg = w.beg = function () {
	var w = this, g = G(arguments), o, fn;
	if (g.u) {
		return this.GetBodyList()
	} /// polymorphism here??? wow.. super cryptic!!!!
	//ADDS one or more handlers to beginHandlers array
	//most common use, usually just need one func.
	// would i ever need more?lVWs
	//it just puts each item into bH arr
	fn = F(g.t) ? function (cx) {
		if (cx.w(g.f, g.s)) {
			g.t(cx)
		}
	} :
			F(g.s) ? function (cx) {
				if (cx.w(g.f)) {
					g.s(cx)
				}
			} :
					g.f //fn=$.mo(.2,fn)
	w.BG.push(fn)
	return w
	function alt() {
		w.beg = w.begin = function (what, what2, func) {
			var w = this
			if (F(what)) {
				_.each(arguments, function (func) {
					w.BG.push(func)
				})
			}
			else if (F(what2)) {
				func = what2
				w.BG.push(function (cx) {
					if (cx.with(what)) {
						func(cx)
					}
				})
			}
			else if (F(func)) {
				w.BG.push(function (cx) {
					if (cx.with(what, what2)) {
						func(cx)
					}
				})
			}
			return this
		}//ADDS one or more handlers to beginHandlers array
	}
}
PROTOSIG = INC = function () {
	W()
	//cx.inc protosig
	//     str    :  str,fn   :   obj   :   obj,fn
	var fisherman1 = w.p()
	w.b(function (cx) {
		cx.ic(fisherman1, function (fish) {
			this.eat(fish.B())
		})
		var oneWasFisherman1 = cx.ic(fisherman1);
		if (oneWasFisherman1) {
			$l('the fish is: ' + Fisherman1[1])
		}
		cx.ic('fish', function (fisherman) {
			this.swimTo(fisherman.B())
		})
		var oneWasFish = cx.ic('fish');
		if (oneWasFish) {
			$l('the fish is: ' + oneWasFish[0])
		}
	})
}//begin