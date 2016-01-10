fd = b2d.Dynamics.b2FixtureDef.prototype
fd.H = fd.setShape = function (shape) {
	if (U(shape)) {
		return this.shape
	}
	this.shape = shape;
	return this
}
fd.d = fd.den = function (d) {
	var fd = this
	if (U(d)) {
		return fd.density
	}
	fd.density = d;
	return fd
}
fd.f = fd.frc = fd.fric = function (f) {
	var fd = this
	if (U(f)) {
		return this.friction
	}
	fd.friction = f
	return fd
}
fd.r = fd.bo = fd.rst = fd.rest = function (r) {
	var fd = this
	if (U(r)) {
		return fd.restitution
	}
	fd.restitution = r;
	return fd
}
fd.grp = fd.group = fd.index = fd.gI = function (a) {
	if (U(a)) {
		return this.filter.groupIndex
	}
	this.filter.groupIndex = a;
	return this
}
fd.cat = fd.category = fd.cB = function (a) {
	if (U(a)) {
		return this.filter.categoryBits
	}
	this.filter.categoryBits = a;
	return this
}
fd.msk = fd.mask = fd.mB = function (a) {
	if (U(a)) {
		return this.filter.maskBits
	}
	this.filter.maskBits = a;
	return this
}
fd.bit = fd.bits = function (cat, mask) {
	return this.cat(cat).mask(mask)
}
fd.vrt = fd.verts = function () {
	var shape = this.shape,
			verts = shape.m_vertices,
			verts = [
				verts[0].mult(),
				verts[1].mult(),
				verts[2].mult(),
				verts[3].mult()]
	return $l(verts)
}
fd.sen = fd.sensor = fd.iS = function (isSensor) {
	if (U(isSensor)) {
		return this.isSensor
	}
	this.isSensor = isSensor ? true : false
	return this
}
fd.box = fd.sAB = function (a, b, p, A) {
	if (!p) {
		this.shape.SetAsBox(a / 30, b / 30)
	}
	else {
		this.shape.SetAsOrientedBox(a / 30, b / 30, p, A)
	}
	return this
}
/*
 f.set=function(x,y){//dep?
 this.shape.Set(x,y)
 return this
 }

 f.sAB=function(a,b,p,A){//dep?
 if(!p){this.shape.SetAsBox(a/30,b/30)}
 else{ this.shape.SetAsOrientedBox(a/30,b/30,p,A)}
 return this}
 */
//fd.sSAP  = fd.setShapeAsAPoly=function(){
// return this.H( b2d.polyShape())}
fd.K = fd.addClass = function (clas) {
	if (U(clas)) {
		return this.getClass()
	}
	this.classes = this.classes || []
	this.classes.push(clas)
	return this
}
fd.getClasses = fd.getClass = function () {
	var g = G(arguments), classes
	this.classes = this.classes || []
	classes = this.classes.join(' ')
	if (g.p) {
		classes += ' : ' + this.body().getClasses()
	}
	return classes
}
fd.D = fd.data = function (data) {
	if (U(data)) {
		return this.userData
	}
	this.userData = data;
	return this
}
FDEF = function () {
	w = b2d.W()
	x = w.brick(400, 400, 200, 300)
	b = w.dyn(200, 400,
			b2d.poly(100, 200).K('fffffff sf')
	)
}