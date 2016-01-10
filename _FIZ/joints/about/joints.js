jD.init = jD.i = function () {
	this.Initialize.apply(this, arguments)
	return this
}
jD.cC = function (cC) {
	if (U(cC)) {
		return jD.collideConnected
	}
	this.collideConnected = cC ? true : false;
	return this
}
jD.bA = jD.A = function (a) {
	var jD = this
	jD.gA = function () {
		return this.bodyA
	}
	jD.sA = function (a) {
		this.bodyA = a;
		return this
	}
	return U(a) ?
			jD.gA() :
			jD.sA(a)
}
jD.bB = jD.B = function (b) {
	var jD = this
	jD.sB = function (b) {
		this.bodyB = b;
		return this
	}
	jD.gB = function () {
		return this.bodyB
	}
	return U(b) ? this.gB() : this.sB(b)
}
jD.AB = jD.sAB = function (a, b) {
	this.A(a)
	this.B(b)
	return this
}
jD.aAB = jD.xyAB = jD.v = jD.vAB = function (aX, aY, bX, bY) {
	var dJ = this
	dJ.xyA(aX, aY)
	dJ.xyB(bX, bY)
	return dJ
}
j.bA = j.A = function (a) {
	if (U(a)) {
		return this.GetBodyA()
	}
	else {
		alert('j.A cannot set')
	}
}
j.bB = j.B = function (a) {
	if (U(a)) {
		return this.GetBodyB()
	}
	else {
		alert('j.B cannot set')
	}
}
j.GN = j.N = function () {
	return this.GetNext()
}
j.W = function () {
	return this.bA().W()
//  this.GetBodyA().GetWorld()
}
j.ty = j.GT = function () {
	return this.GetType()//:int Get the type of the concrete joint.
}
b.jt = function () {
// = b.j = b.joint=b.JtLs = b.jointList 
	return this.GetJointList().joint
}
j.GAB = function () {//world coords
	return this.GetAnchorB()
}
j.GAA = function (a) {
	return this.GetAnchorA()
}
j.aA = function (a) {

//j.a and j.b CANNOT 'set' the property
// ( is too late.. u must now make new joint)
//= j.a =j.xyA = j.vA  
	if (U(a)) {
		return this.GAA().m()
	}
	else {
		alert('j.A cannot set')
	}
}
j.aB = function (a) {
	//=j.b =j.xyB = j.vB  
	if (U(a)) {
		return this.GAB().m()
	}
	else {
		alert('j.B cannot set')
	}
}
//maxF
jD.mF = function (mF) {
	this.maxForce = mF;
	return this
}
j.mF = maxForce = function (fo) {//slider/mouse
	var mJ = this
	mJ.sMF = function (mF) {
		this.SetMaxForce(mF)
		return this
	}
	return U(fo) ? this.GetMaxForce() :
			this.sMF(fo)
	alt = function () {
		jD.maxForce = j.mMF = function (a) {
			this.maxMotorForce = a;
			return this
		}
		mJ.mxFo = function (fo) {
			if (U(fo)) {
				return this.GetMaxForce()
			}
			this.SetMaxForce(fo)
			return this
		}
	}
}
//fq
jD.fq = function (a) {
	if (U(a)) {
		return this.frequencyHz
	}
	this.frequencyHz = a;
	return this
}
j.fq = function (fq) {
	//j.freq =j.f = j.frq = 
	j.SF = function (fq) {
		this.SetFrequency(fq);
		return this
	}
	j.GF = function () {
		return this.GetFrequency()
	}
	return U(fq) ? this.GF() : this.SF(fq)
	alt = function (fq) {
		mJ.frq = mJ.freq = mJ.frequency = function (hz) {
			if (U(hz)) {
				return this.GetFrequency()
			}
			this.SetFrequency(hz)
			return this
		}
		jD.sFq = function (fq) {
			this.frequencyHz = fq
			return this
		}
		jD.gFq = function () {
			return this.frequencyHz
		}
		return U(fq) ? this.gFq() : this.sFq(fq)
	}
}

//dR
jD.dR = function (dR) {
	//= jD.d = jD.dm = jD.dmp = jD.damp
	function alt() {
		jD.damp = function (a) {
			if (U(a)) {
				return this.dampingRatio
			}
			this.dampingRatio = a;
			return this
		}
	}
	
	jD.sDR = function (dR) {
		this.dampingRatio = dR
		return this
	}
	return U(dR) ? this.dampingRatio : this.sDR(dR)
}
j.dR = function (dR) {
	
	// = j.d = j.dm = j.dmp = j.damp
	alt = function () {
		mJ.dampRat = mJ.dmpRat = function (dR) {
			if (U(dR)) {
				return this.GetDampingRatio()
			}
			this.SetDampingRatio(dR)
			return this
		}
		j.damp = function (a) {
			if (U(a)) {
				return this.GetDampingRatio()
			}
			this.SetDampingRatio(a)
			return this
		}
	}
	j.GDR = function () {
		return this.GetDampingRatio()
	}
	j.SDR = function (dR) {
		this.SetDampingRatio(dR);
		return this
	}
	return U(dR) ? this.GDR() : this.SDR(dR)
}

//worCen 
jD.AWC = function () {
	return this.A().GWC()
}
jD.BWC = function () {
	return this.B().GWC()
}
jD.aWC = function () {
	return this.AWC().m()
}
jD.bWC = function () {
	return this.BWC().m()
}
jD._osA = function (x, y) {
	var jD = this
	var wC = jD.aWC()
	if (U(x)) {
		return wC
	}
	var v = V00(x, y)
	return wC.add(v)
}
jD._osB = function (x, y) {
	var jD = this
	var wC = jD.bWC()
	if (U(x)) {
		return wC
	}
	var v = V00(x, y)
	return wC.add(v)
}
jD.osA = jD.a = function (x, y) {
	return this.aA(this._osA(x, y))
}
jD.osB = jD.b = function (x, y) {
	return this.aB(this._osB(x, y))
}
function localAnc() {
	j.localA = j.lAA = function (a) {
		j.localAnchorA = a;
		return j
	}
	j.localB = j.lAB = function (a) {
		j.localAnchorB = a;
		return j
	}
	jD._lAA = function (lAA) {
		this.localAnchorA = lAA;
		return this
	}
	jD._lAB = function (lAB) {
		this.localAnchorB = lAB;
		return this
	}
	jD.lAA = jD.aV = function (x, y) {
		if (U(x)) {
			return this
		}
		var pt = V(x, y)
		this._lAA(pt.div())
		return this
	}
	jD.lAB = jD.bV = function (x, y) {
		if (U(x)) {
			return this
		}
		return this._lAB(V(x, y).div())
	}
	jD.localA = j.lAA = function (a) {
		this.localAnchorA = a;
		return this
	}
	jD.localB = j.lAB = function (a) {
		this.localAnchorB = a;
		return this
	}
	jD._gLAA = function () {
		return this.localAnchorA
	}
	jD._gLAB = function () {
		return this.localAnchorB
	}
	jD._sLAA = function (aA) {
		this.localAnchorA = aA;
		return this
	}
	jD._sLAB = function (aB) {
		this.localAnchorB = aB;
		return this
	}
	jD.XYA = jD.LAA = function (aA) {
		return U(aA) ? this._gLAA() :
				this._sLAA(aA)
	}
	jD.XYB = jD.LAB = function (aB) {
		var jD = this
		return U(aB) ? jD._gLAB() : jD._sLAB(aB)
	}
	jD.xyA = jD.vA = jD.aA = jD.ancA = jD.lAA = function (aA, y) {
		var jD = this
		return U(aA) ? jD.XYA().m() :
				jD.XYA(O(aA) ? aA.d() : V00(aA, y).d())
	}
	jD.xyB = jD.vB = jD.aB = jD.ancB = jD.lAB = function (aB, y) {
		var jD = this
		return U(aB) ? jD.XYB().m() :
				jD.XYB(V00(aB, y).d())
	}
	jD.wA = jD.wAB = function (lAB) {
		return U(lAB) ? this.wPt(this.lAB()) :
				this.lPt(this.lAB(lAB))
	}
	jD.wB = jD.wAA = function (lAA) {
		return U(lAA) ? this.wPt(this.lAA()) :
				this.lPt(this.lAA(lAA))
	}
}