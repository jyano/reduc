w.CJ = w.J = w.joint = w.j = w.cJ = function (jD) {
	return this.CreateJoint(jD)
}
w.DJ = w.dj = b.dsJt = b.dsJ = function (j) {
	this.DestroyJoint(j);
	return this
}
w.GJC = function () {
	return this.GetJointCount()
}
w.GJL = b.jtLs = b.jLs = b.jL = function () {
	return this.GetJointList()
}
w.dsJt = w.dJ = w.j = w.destroyJoint = function (a) {
	var w = this
	w.DestroyJoint(a);
	return w
}
w.crJt = w.cJ = w.J = w.joint = w.createJoint = function (a) {
	var w = this,
			j = this.CreateJoint(a)
	return j
}
w.cJ = w.J = w.joint = w.createJoint = function (a) {
	var j = this.CreateJoint(a)
	return j
}
w.dJ = w.j = w.destroyJoint = function (a) {
	this.DestroyJoint(a);
	return this
}
b.jts = b.js = function (fn) {
	var b = this
	var jts = []
	var je = b.GJL()
	while (je) {
		jts.push(je.joint)
		je = je.next
	}
	if (F(fn)) {
		_.e(jts, function (j, k) {
			fn(j, k, jts)
		})
		return b
	}
	return jts
}
b.jt = function () {
	return this.GJL().joint
}
b.dsJ = b.rmJ = function () {
	var b = this, w = b.W()
	return b.jts(function (j) {
		w.DJ(j)
	})
}//b.rmJts = b.dsJts =
b.joint = function () {
	return this.GetJointList().joint
}
b.destroyAllJoints = function () {
	var b = this, toDestroy = [],
			je = b.GetJointList()
	while (je) {
		toDestroy.push(je.joint)
		je = je.next
	}
	_.each(toDestroy, function (j) {
		w.DestroyJoint(j)
	})
	return this
}
b.JtLs = b.jointList = b.jt = b.j = b.joint = function () {
	return this.GetJointList().joint
}
b.rmJts = b.destroyJoints = b.dsJts = b.destroyAllJoints = function () {
	var b = this,
			toDestroy = [], je = b.j()
	while (je) {
		toDestroy.push(je.joint)
		je = je.next
	}
	_.e(toDestroy, function (j) {
		w.DestroyJoint(j)
	})
	return this
}
  