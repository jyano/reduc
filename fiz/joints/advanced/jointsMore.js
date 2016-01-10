j.destroy = j.ds = function () {
	var j = this.W().DestroyJoint(this)
	this.destroyed = true
	return j
}
j.IA = function () {
	//Short-cut function to determine if either body is inactive.
	return this.IsActive()
}
j.uD = function (d) {
	j.userDa = j.GUD = function () {
		this.GetUserData();
	}
	j.SUD = function (d) {
		this.SetUserData(d)
		return this
	}
}
j.form = function () {
	var w = this.wor(), a = this.A(), b = this.B()
	if (this.T() == 8) {
		return w.weld(a, b)
	}
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
w.colBalls = function () {
	var w = this
	r = w.D(300, 300, 'r', 12).DFB(1, 0.1, 1)
	b = w.D(400, 300, 'b', 12).DFB(1, 0.1, 1)
	y = w.D(500, 300, 'y', 12).DFB(1, 0.1, 1)
	g = w.D(600, 300, 'g', 12).DFB(1, 0.1, 1)
	p = w.D(700, 300, 'p', 12).DFB(1, 0.1, 1)
	o = w.D(800, 300, 'o', 12).DFB(1, 0.1, 1)
	return w
}
function localAxis(){
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
	}}

function speed() {
	jD.mS = jD.speed = function (sp) {
		if (U(sp)) {
			return this.motorSpeed
		}
		this.motorSpeed = sp;
		return this
	}
	jD.mMS = function (sp) {
		if (U(sp)) {
			return this.maxMotorSpeed
		}
		this.maxMotorSpeed = sp
		return this
	}
	j.SMS = function (sp) {
		var j = this
		j.SetMotorSpeed(sp)
		return j
	}
	j.GMS = function () {
		return this.GetMotorSpeed()
	}
	j.mSp = j.sp = j.mS = j.MS = j.spd = j.speed = function (sp) {
		return U(sp) ? this.GMS() : this.SMS(sp)
	}
}
function forc() {
	jD._sMF = function () {
		this.maxForce = mF
		return this
	}
	jD.MF = jD.mF = function (mF) {
		return U(mF) ? this.maxForce :
				this._sMF(mF)
	}
	j.SMMF = j.mxFo = j.maxForce = j.mMF = j.mF = function () {
		this.SetMaxMotorForce.apply(this, arguments)
		return this
	}
	j.GRF = function (fo) {
		return this.GetReactionForce(fo)//inv_dt)//(Num)b2Vec2 // Get the reaction force on body2 at the joint anchor in Newtons.
		//GetReactionTorque(inv_dt)//:Number // reaction torque on body2 in N.
	}
	/*
	 localAnchorA - the point in body A around which it will rotate
	 localAnchorB - the point in body B around which it will rotate
	 referenceAngle - an angle between bodies considered to be zero for the joint angle
	 enableLimit - whether the joint limits will be active
	 lowerAngle - angle for the lower limit
	 upperAngle - angle for the upper limit
	 enableMotor - whether the joint motor will be active
	 motorSpeed - the target speed of the joint motor
	 maxMotorTorque - the maximum allowable torque the motor can use
	 */
}
jD.sRA = function (an) {
	this.referenceAngle = an
	return this
}
jD.gRA = function (an) {
	return this.referenceAngle
}
jD.rA = jD.refAng = function (an) {
	return U(an) ? M.tD(this.gRA()) : this.sRA(M.tR(an))
}
jD.ax = jD.axis = jD.lXA = function (a) {
	this.localAxisA = a;
	return this
}
 
j.ds = j.destroy = function () {
	this.W().DestroyJoint(this)
	return this
}
j.in = j.i = j.init = function () {
	this.Initialize.apply(this, G(arguments))
	return this
}

jD.eL = function (eL) {
	var jD = this
	if (U(eL)) {
		return jD.enableLimit
	}
	jD.enableLimit = eL ? true : false;
	return jD
}
j.eL = function (eL) {
	this.EnableLimit(eL ? true : false)
	return this
}
j.l1 = function () {
	return this.eL(1)
}
j.l0 = function () {
	return this.eL(0)
}
j.GJT = j.GJTl = function () {

//box2d source:
//	var axis = this.m_bodyA.GetWorldVector(this.m_localXAxis1),
//			p1 = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
//			p2 = this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
//	return axis.x * (p2.x - p1.x) + axis.y * (p2.y - p1.y)
	var tl = this.GetJointTranslation.apply(this, arguments)
	return parseInt(tl)
}
j.val = function (v) {
	var j = this
	if (U(v)) {
		return j.GJT() * 30
	}
}
function motors() {
	$L()
	j.eM = j.EM = function (eM) {
		this.EnableMotor(eM ? true : false);
		return this
	}
	j.m1 = function () {
		return this.eM(1)
	}
	j.m0 = function () {
		return this.eM(1)
	}
	j.GMS = function () {
		return this.GetMotorSpeed
	}
	j.SMS = function (sp) {
		this.SetMotorSpeed(sp)
		return this
	}
	j.sp = pJ.mSp = function (sp) {
		var pJ = this
		return U(sp) ?
				pJ.GMS() :
				pJ.SMS(sp)
	}
	j.m = function () {
		return this.mt.apply(this, arguments).m1()
	}
	j.s = function () {
		return this.sp.apply(this, arguments).m1()
	}
	CONTROLPOS = function () {
// You can use motors to control position 
		//by specifying a joint velocity that is proportional to the difference
		// between the actual and desired position. 
	}
	SIMJOINTFRIC = function () {
//You can also use motors to simulate joint friction:
		// set the joint velocity to zero and provide a small, 
		//but significant maximum motor force/torque. 
		//Then the motor will attempt to keep the joint from moving 
		// until the load becomes too strong.
	}
	function _pre() {
	}

//
	/*
	
	 Joint motors can be used in many ways. You can use motors to control position 
	 by specifying a joint velocity that is proportional to the difference between the actual and desired position. 
	
	
	 You can also use motors to simulate joint friction: set the joint velocity to zero and provide a small, 
	 but significant maximum motor force/torque. 
	 Then the motor will attempt to keep the joint from moving until the load becomes too strong.
	 */
	j.enabMot = function (a) {
		this.EnableMotor(a);
		return this
	}
	j.mot = function (speed, maxForce) {
		if (speed == '-') {
			this.EnableMotor(false);
			return this
		}
		speed = N(speed) ? speed : 100
		maxForce = N(maxForce) ? maxForce : 10000000
		this.enabMot(true).maxForce(maxForce).speed(speed)
	}
	j.maxForce = j.mMF = j.mF = function (a, b, c) {
		this.SetMaxMotorForce(a, b, c);
		return this
	}
}
function mot() {
	jD._gEM = function () {
		return this.enableMotor
	}
	jD._sEM = function (eM) {
		this.enableMotor = eM
		return this
	}
	jD.EM = function (eM) {
		return U(eM) ? this._gEM() :
				this._sEM(eM ? true : false)
	}
	jD.m1 = function () {
		return this.EM(1)
	}
	jD.m0 = function () {
		return this.EM(0)
	}
	jD.mMF = function (a) {
		this.maxMotorForce = a;
		return this
	}
//slider and revolute
	jD.motor = jD.eM = function (a) {
		this.enableMotor = a ? true : false;
		return this
	}
	j.enabMot = function (a) {
		this.EnableMotor(a);
		return this
	}
	j.mot = function (speed, maxForce) {
		if (speed == '-') {
			this.EnableMotor(false);
			return this
		}
		speed = N(speed) ? speed : 100
		maxForce = N(maxForce) ? maxForce : 10000000
		this.enabMot(true).maxForce(maxForce).speed(speed)
	}
//slider
//j.maxForce= j.mMF=function(a){j.maxMotorForce = a;return j}
//slider and revolute
	j.motor = j.eM = function (a) {
		j.enableMotor = a ? true : false;
		return j
	}
	j.mt = j.motor = j.enableMotor = j.eM = function (a) {
		j.EnableMotor(a ? true : false)
		return j
	}
	j.sEM = function (eM) {
		this.EnableMotor(eM)
		return this
	}
	j.IME = function () {
		return this.IsMotorEnabled()
	}
	j.EM = function (eM) {
		return U(eM) ? this.IME() :
				this.sEM(eM ? true : false)
	}
	j.m1 = function () {
		return this.EM(1)
	}
	j.m0 = function () {
		return this.EM(0)
	}
}
function limits() {
	j.eL = j.EL = function (eL) {
		this.EnableLimit(eL ? true : false)
		return this
	}
	j.l1 = function () {
		return this.eL(1)
	}
	j.l0 = function () {
		return this.eL(0)
	}
	j.l = function () {
		return this.SL.apply(this, arguments).l1()
	}
	j.SL = function (a, b) {
		this.SetLimits.apply(this, arguments)
		return this
	}
//
	j.lm = j.limits = j.setLimits = j.sL = function (a, b) {
		a = N(a) ? a : 20
		b = N(b) ? b : 180
		j.SetLimits(tRad(a), tRad(b))
		return j
	}
	j.enableLimits = j.enableLimit = j.eL = function (a) {
		this.EnableLimit(a ? true : false)
		return this
	}
}

function clCn() {
	jD.sCC = function (a) {
		this.collideConnected = a;
		return this
	}//collideConnected  
	jD.cC = jD.cl = function (a) {
		return U(a) ? this.collideConnected : this.sCC(a ? true : false)
	}
	jD.cC1 = jD.cl1 = function () {
		return this.cC(1)
	}
	jD.cC0 = jD.cl0 = function () {
		return this.cC(0)
	}
	jD.in = jD.init = function () {//joint.i=
		this.Initialize.apply(this, arguments)
		return this
	}
}
//revolute
j.refAng = j.rA = function (a) {
	j.referenceAngle = tRad(a);
	return j
}
j.maxTorque = j.mMT = function (a) {
	j.maxMotorTorque = a
	return j
}
j.lowAng = j.lA = function (a) {
	j.lowerAngle = tRad(a);
	return j
}
j.upAng = j.uA = function (a) {
	j.upperAngle = tRad(a);
	return j
}

j.rat = j.r = function (a) {
	j.ratio = a;
	return j
}
j.axis = j.lXA = function (a) {
	j.localAxisA = a;
	return j
}
j.enabMot = function (a) {
	this.EnableMotor(a);
	return this
}
j.mot = function (speed, maxForce) {
	if (speed == '-') {
		this.EnableMotor(false);
		return this
	}
	speed = N(speed) ? speed : 100
	maxForce = N(maxForce) ? maxForce : 10000000
	this.enabMot(true).maxForce(maxForce).speed(speed)
}
//j.maxForce= j.mMF=function(a){j.maxMotorForce = a;return j}
//slider and revolute
j.speed = function (speed) {//j.mS
	this.SetMotorSpeed(speed)
	return this
}
j.motor = j.eM = function (a) {
	j.enableMotor = a ? true : false;
	return j
}
j.maxSpeed = j.mMS = function (a) {
	j.maxMotorSpeed = a;
	return j
}
//LIMITS
j.lowTrans = j.lT = function (a) {
	j.lowerTranslation = a;
	return j
}
j.upTrans = j.uT = function (a) {
	j.upperTranslation = a;
	return j
}
j.limits = j.eL = function (a) {
	j.enableLimit = a ? true : false;
	return j
}
j.maxSpeed = j.maxMotorSpeed = j.mMS = function (a) {
	j.maxMotorSpeed = a
	return j
}
//motor rev
j.mt = j.motor = j.enableMotor = j.eM = function (a) {
	j.EnableMotor(a ? true : false)
	return j
}
j.speed = j.motorSpeed = j.mS = function (speed) {
	if (U(speed)) {
		return this.GetMotorSpeed()
	}
	this.SetMotorSpeed(speed)
	return this
}
j.torque = function (torq) {
	if (U(torq)) {
		return this.GetMotorTorque()
	}
	this.SetMaxMotorTorque(torq)
	return this
}
j.maxTorq = j.maxTorque = j.mMT = j.mT = function (a, b, c) {
	this.SetMaxMotorTorque(a, b, c);
	return this
}
j.maxForce = j.mMF = j.mF = function (a, b, c) {
	this.SetMaxMotorForce(a, b, c);
	return this
}
j.lm = j.limits = j.setLimits = j.sL = function (a, b) {
	a = N(a) ? a : 20
	b = N(b) ? b : 180
	j.SetLimits(tRad(a), tRad(b))
	return j
}
j.enableLimits = j.enableLimit = j.eL = function (a) {
	this.EnableLimit(a ? true : false)
	return this
}
jD.rat = j.r = function (a) {
	this.ratio = a;
	return this
}
jD.axis = j.lXA = function (a) {
	this.localAxisA = a;
	return this
}
//slider and revolute
jD.speed = j.mS = function (a) {
	this.motorSpeed = a;
	return this
}
jD.motor = j.eM = function (a) {
	this.enableMotor = a ? true : false;
	return this
}
jD.maxSpeed = j.mMS = function (a) {
	this.maxMotorSpeed = a;
	return this
}
//LIMITS
jD.lowTrans = j.lT = function (a) {
	this.lowerTranslation = a;
	return this
}
jD.upTrans = j.uT = function (a) {
	this.upperTranslation = a;
	return this
}
jD.limits = j.eL = function (a) {
	this.enableLimit = a ? true : false;
	return this
}
//revolute
jD.refAng = j.rA = function (a) {
	j.referenceAngle = tRad(a);
	return this
}
jD.maxTorque = j.mMT = function (a) {
	this.maxMotorTorque = a
	return this
}
jD.lowAng = j.lA = function (a) {
	this.lowerAngle = tRad(a);
	return this
}
jD.upAng = j.uA = function (a) {
	this.upperAngle = tRad(a);
	return this
}
j.destroy = j.ds = function () {
//?????????????
	var j = this, w = j.W()
	w.DJ(j)
	this.destroyed = true
	return j
	//?????????????
}