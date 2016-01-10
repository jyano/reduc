w.DDD = function () {
	this.DrawDebugData();
	return this
}
w.SDD = function (dD) {
	this.SetDebugDraw(dD);
	return this
}
function bug() {
	debugDraw = new b2DebugDraw();
	debugDraw.SetSprite(document.getElementById("playground").getContext("2d"));
	debugDraw.SetDrawScale(20.0);
	debugDraw.SetFillAlpha(0.5);
	debugDraw.SetLineThickness(1.0);
	debugDraw.SetFlags(b2DebugDraw.e_shapeBit);
	w.SetDebugDraw(debugDraw);
}
w.bug = function (id) {
	var can, ctx
	can = id ? $("#" + id)[0] : $0("#canvas")
	ctx = can.getContext("2d")
	return this.SDD(
			$dD().ctx(ctx).sc(20).fAl(0.5).lT(1).SF(bx.DD.hBit))
}
function moreBug() {
	w.dD = w.dbD = w.bug = function () {
		var dbD = $dD.apply($dD, arguments)
		// this.scale = dd.scale()
		return this.SDD(dbD)
	}
	w.sDD = w.db = w.debug = function (d) {
		var w = this;
		return U(d) ? w.ggAuCl() :
				d === w ? w.auCl(0) :
						d === false ? w.auCl(1) :
								w.SDD(d)
//p.debugDraw  =p.dD= p.sDD=
	}
	w.dd = function (o) {
		var w = this
		if (o.clear !== false) {
			w.debug(b2d.debugDraw(
					w.context, 30).flags(shB || jB).alpha(.6).line(3000))
		} // w.bug(w.ctx, 30, '*', .6 )
		return w
	}
	w.db = w.debug = function (data) {
		
		//p.debugDraw  =p.dD= p.sDD=
		if (U(data)) {
			this.s.autoClear = this.s.autoClear ? false : true;
			return this
		}
		if (data === true) {
			this.s.autoClear = false;
			return this
		}
		if (data === false) {
			this.s.autoClear = true;
			return this
		}
		this.SDD(data)
		return this
	}
}
bx.DD = b2DebugDraw = bx.D.b2DebugDraw
bx.DD.hBit = b2d.DD.e_shapeBit
dD.SS = dD.ctx = function (ctx) {
	var dD = this  //it is looking for  a context?
	if (U(ctx)) {
		return dD.GetSprite()
	}
	dD.SetSprite(ctx)
	return dD
	//dD.cx = dD.spr = dD.i = dD.sprite = 
}
dD.SDS = function (sc) {
	this.SetDrawScale(sc)
	return this
}
dD.sc = function (sc) {
	var dD = this
	if (U(sc)) {
		return dD.GetDrawScale()
	}
	dD.SDS(sc)
	return dD
	// = dD.dS = dD.scale = dD.drawScale
}
dD.SA = dD.al = dD.alpha = dD.fA = function (al) {
	var dD = this
	if (U(al)) {
		return this.GetAlpha()
	}
	this.SetAlpha(al)
	return this
//Get/SetAlpha(al:N)    used for lines
}
dD.SFA = dD.fA = dD.fAl = function (a) {
	var dD = this
	if (U(a)) {
		return dD.GetFillAlpha()
	}
	dD.SetFillAlpha(a)
	return dD
	//= dD.alpha = dD.fillAlpha
}
dD.SLT = dD.lT = function (lt) {
	var dD = this
	if (U(lt)) {
		return dD.GetLineThickness()
	}
	dD.SetLineThickness(lt);
	return dD
	// = dD.line
}
dD.SF = dD.fl = function (fl) {
	var dD = this
	var DD = b2DebugDraw
	if (U(fl)) {
		return dD.GetFlags()
	}
	if (flags == '*') {
		flags = (DD.e_shapeBit | DD.e_jointBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit | DD.e_controllerBit)
	}
	dD.SetFlags(flags);
	return dD
	//dD.flags = dD.F =
}
dD.SF = function () {
	this.SetFlags.apply(this, arguments)
	return this
}
dD.cv = function (cv) {
	cv = cv || $.c()
	return this.ctx($(cv)[0].getContext("2d"))
}
$dD = function (sp, sc) {

// = b2d.debugDraw
	//=DebugDraw=dbD
	var dD = new b2d.DD()
	if (sp) {
		dD.sp(sp);
	}
	if (N(sc)) {
		dD.sc(sc)
	}
	return dD
}
$dDAlt = function () {
	$dD = function () {
		var g = G(arguments), o, dbD = new b2DebugDraw()
		var DD = b2DebugDraw
		//var flags= DD.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
		var flags = b2DebugDraw.e_shapeBit// | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
		o = {cx: g.f, sc: g.s, fl: g.t, al: g[4], l: g[3]}
		if ($.iC(o.cx)) {
			o.cx = $(o.cx).ctx()
		}
		o.sc = N(o.sc, 30)
		o.fl = o.fl || flags
		o.l = N(o.l, 20)
		o.al = N(o.al, .95)
		if (o.cx) {
			dbD.sprite(o.cx)
		}
		if (o.sc) {
			dbD.scale(o.sc)
		}
		dbD.flags(o.fl)
		dbD.alpha(N(o.al, 0.5))
		return _dbD = dbD
		function alt() {
			b2d.debugDraw = function (sprite, scale, flags, alpha, line) {
				var dd = new b2d.DebugDraw()
				//can pass in either canvas or context
				if ($.isCan(sprite)) {
					sprite = sprite.ctx()
				}
				if (sprite) {
					dd.sprite(sprite)
				}
				if (scale) {
					dd.scale(scale)
				}
				if (flags) {
					dd.flags(flags)
				}
				dd.alpha(N(alpha) ? alpha : 0.5)
				// dd.line( N(line)? line :1 )
				// dd.SetLineThickness(1)
				return dd
			}
		}
	}
	$_DD = function () {
		return new b2d.DD
	}
	var g = G(arguments), o, dbD = new b2DebugDraw()
	var DD = b2DebugDraw
	//var flags= DD.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	var flags = b2DebugDraw.e_shapeBit// | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	o = {cx: g.f, sc: g.s, fl: g.t, al: g[4], l: g[3]}
	if ($.iC(o.cx)) {
		o.cx = $(o.cx).ctx()
	}
	o.sc = N(o.sc, 30)
	o.fl = o.fl || flags
	o.l = N(o.l, 20)
	o.al = N(o.al, .95)
	if (o.cx) {
		dbD.sprite(o.cx)
	}
	if (o.sc) {
		dbD.scale(o.sc)
	}
	dbD.flags(o.fl)
	dbD.alpha(N(o.al, 0.5))
	return _dbD = dbD
}
$dD.aabb = $dD.a = b2d.DD.e_aabbBit //4
$dD.hBit = $dD.shape = $dD.h = b2d.DD.e_shapeBit //1
$dD.jBit = $dD.jt = $dD.j = b2d.DD.e_jointBit //2
$dD.pair = $dD.p = b2d.DD.e_pairBit //8
$dD.cOM = $dD.c = b2d.DD.e_centerOfMassBit // 10
$dD.co = b2d.DD.e_controllerBit //20
bx.hBit = bx.DD.e_shapeBit
bx.jBit = bx.DD.e_jointBit
 