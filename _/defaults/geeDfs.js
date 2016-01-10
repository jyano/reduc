function fromGeo(){
G.boxCir = function (g) {
	return $df.cF(g.O ? g.f : {x: g.f, y: g.s, r: g.t, d: g.fo})
}
G.rectangle = G.boxBox = function (g) {
	var o = g.O ? g.f : O(g.t) ?
	{w: g.f, h: g.s, x: V(g.t).x, y: V(g.t).y, rt: g.fo} :
			N(g.fo) ? {w: g.f, h: g.s, x: g.t, y: g.fo, rt: g.fi} :
			{w: g.f, h: g.s, rt: g.t}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.rt = N(o.rt, 0)
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	return o
}
}