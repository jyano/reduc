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
 