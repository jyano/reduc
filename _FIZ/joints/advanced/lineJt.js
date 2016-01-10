b2d.LnJtD = b2d.Joints.b2LineJointDef

b2d.LnJt = b2d.Joints.b2LineJoint 

LJT = function () {
	W({g:0})
	b = w.D(300, 400)
	b.rec(40, 90)
	b.rt(-10).bo(.5)//.fixRot()
	
	b1 = w.D(400, 300).stat()
	b1.rec(60, 80)
	b1.rt(45)
	
	frJ = new b2d.LnJtD
	
	frJ.bodyA = b
	frJ.bodyB = b1
	j = w.CreateJoint(frJ)
	j.SetMaxMotorForce(1000)
	j.SetMotorSpeed(100000)
	//j.EnableMotor(true)

 
	j.EnableLimit(true)
	j.SetLimits(-3, 14)
	 
}
b2d.LnJtD = b2d.Joints.b2LineJointDef
b2d.LnJt = b2d.Joints.b2LineJoint
LJT = function () {
	W({g: 0})
	b = w.D(300, 400)
	b.rec(40, 90)
	b.rt(-10).bo(.5)//.fixRot()
	b1 = w.D(400, 300).stat()
	b1.rec(60, 80)
	b1.rt(45)
	frJ = new b2d.LnJtD
	frJ.bodyA = b
	frJ.bodyB = b1
	j = w.CreateJoint(frJ)
	j.SetMaxMotorForce(1000)
	j.SetMotorSpeed(100000)
	//j.EnableMotor(true)
	j.EnableLimit(true)
	j.SetLimits(-3, 14)
}
LJT = function () {
	W().G(10)//.floor.kill()
	jD = new b2d.Js.b2LineJointDef()
	bA = w.box(300, 300).de(1)
	bB = w.bal(400, 300, 100).de(1)
	anchor = V(300, 300)
	axis = V(0, 1)
	jD.bodyA = bA;
	jD.bodyB = bB;
	jD.localAnchorA = jD.bodyA.GetLocalPoint(anchor.d());
	jD.localAnchorB = jD.bodyB.GetLocalPoint(anchor.d());
	jD.localAxisA = jD.bodyA.GetLocalVector(axis);
	j = w.CJ(jD)
	j.SetLimits(-1, 2)
	j.EnableLimit(true)
	spd = 10
	j.SetMotorSpeed(spd)
	j.EnableMotor(true)
	j.SetMaxMotorForce(10)
	_.ev(3, function () {
		spd *= -1
		j.SetMotorSpeed(spd)
		$l(j.GetJointTranslation())
	})
}
/*
 return this.m_enableLimit;
 }
 b2LineJoint.prototype.EnableLimit = function (flag) {
 this.m_bodyA.SetAwake(true);
 this.m_bodyB.SetAwake(true);
 this.m_enableLimit = flag;
 }
 b2LineJoint.prototype.GetLowerLimit = function () {
 return this.m_lowerTranslation;
 }
 b2LineJoint.prototype.GetUpperLimit = function () {
 return this.m_upperTranslation;
 }
 b2LineJoint.prototype.SetLimits = function (lower, upper) {
 if (lower === undefined) lower = 0;
 if (upper === undefined) upper = 0;
 this.m_bodyA.SetAwake(true);
 this.m_bodyB.SetAwake(true);
 this.m_lowerTranslation = lower;
 this.m_upperTranslation = upper;
 }

 */