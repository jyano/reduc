function _pulley(){
	b2d.PuJD = b2d.Js.b2PulleyJointDef
	b2d.PuJ = b2d.Js.b2PulleyJoint
	j.init = j.i = function () {
		j.Initialize.apply(j, G(arguments))
		return j
	}
	j.lenA = j.lA = function (a) {
		j.lengthA = a;
		return j
	}
	j.lenB = j.lB = function (a) {
		j.lengthB = a;
		return j
	}
	j.maxLenA = j.mLA = function (a) {
		j.maxLengthA = a;
		return j
	}
	j.maxLenB = j.mLB = function (a) {
		j.maxLengthB = a;
		return j
	}
	SPJ = function (x, y) {
		W()
		x = 100
		y = 400
		b11 = w.A(bx1 = $dB(x, y), fix())
		b22 = w.A(bx2 = $dB(x, y), fix())
		var pJD = $PuJD()
		pJD.init(
				b11,
				b22,
				b2d.V(15, 1),
				b2d.V(15, 2),
				b11.GWC(),
				b22.GWC(),
				1
		)
				.lenA(8)
				.lenB(4)
				.maxLenA(10)
				.maxLenB(5)
		w.J(pulley)
	}
	$puJ = function (a, b) {
		var jD = new b2d.PuJD()
		jD.A(a)
		jD.B(b)
		return jD
	}
//SuperPulleyJoint.$$=function(){x.$$(sPJ)}
	PULLEY = function () {
		W()
		b = w.box(300, 300, 200, 10)
		b1 = w.box(500, 300, 200, 10)
		var pJD = $puJ().init(
				b, b1,
				V(20, 1), V(25, 2),
				b.GWC(),
				b1.GWC(),
				1).lenA(8).lenB(4).maxLenA(10).maxLenB(5)
		w.J(pJD)
	}
	PUL = function () {
		W()
		b = w.box(300, 300, 200, 10)
		b1 = w.box(500, 300, 200, 10)
		var pJD = $puJ(b, b1)
		pJD// V(20, 1),  V(25, 2), b .GWC(), b1.GWC(), 1)
		pJD.lenA(8).lenB(4).maxLenA(10).maxLenB(5)
		w.CJ(pJD)
	}
}
function pulley_(){
	b2Vec2 = Box2D.Common.Math.b2Vec2
	b2BodyDef = Box2D.Dynamics.b2BodyDef
	b2Body = Box2D.Dynamics.b2Body
	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
	b2World = Box2D.Dynamics.b2World
	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
	b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef
	b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef
	b2PulleyJointDef = Box2D.Dynamics.Joints.b2PulleyJointDef
	b2DebugDraw = Box2D.Dynamics.b2DebugDraw
	b2Fixture = Box2D.Dynamics.b2Fixture
	b2AABB = Box2D.Collision.b2AABB;
//NOTE: If you know what lengthA and lengthB in lines 8 & 9 means, please share.
//
//NOTE: To view Source for the given example, right click on canvas element and View frame source.
//
//NOTE: Remember Box2d assumes body is in the correct position when the joint is made.
	PUJT = function () {
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
	PLJT = function () {
		W({g: 0})
		b = w.D(300, 400)
		b.rec(40, 90)
		b.rt(-10).bo(.5)//.fixRot()
		b1 = w.D(400, 300)
		b1.rec(60, 80)
		b1.rt(45)
		j = myjoint = new b2PulleyJointDef();
		worldAnchorOnBody1 = new b2Vec2(6, 7); // Anchor point on body 1 in world axis
		worldAnchorOnBody2 = new b2Vec2(16, 7); // Anchor point on body 2 in world axis
		worldAnchorGround1 = new b2Vec2(6, 3); // Anchor point for ground 1 in world axis
		worldAnchorGround2 = new b2Vec2(16, 3); // Anchor point for ground 2 in world axis
		ratio = 1; // Define ratio
		myjoint.Initialize(b, b1, worldAnchorGround1, worldAnchorGround2, worldAnchorOnBody1, worldAnchorOnBody2, ratio);
		myjoint.lengthA = 10; // The a reference length for the segment attached to bodyA.
		myjoint.lengthB = 6; // The a reference length for the segment attached to bodyB.
		w.CreateJoint(myjoint);
	}
	PulleyJoint = pJt = function () {
		bPJD = BXJ.b2PulleyJointDef
		bPJ = BXJ.b2PulleyJoint
		var j = SuperJoint(new BXJ.b2PulleyJointDef())
		j.init = j.i = function () {
			j.Initialize.apply(j, G(arguments))
			return j
		}
		j.lenA = j.lA = function (a) {
			j.lengthA = a;
			return j
		}
		j.lenB = j.lB = function (a) {
			j.lengthB = a;
			return j
		}
		j.maxLenA = j.mLA = function (a) {
			j.maxLengthA = a;
			return j
		}
		j.maxLenB = j.mLB = function (a) {
			j.maxLengthB = a;
			return j
		}
		return j
	}
	SuperPulleyJoint = sPJ = function (x, y) {
		x = N(x) ? x : 100
		y = N(y) ? y : x
		b11 = w.A(bx1 = b2d.dynamicDef(x, y), fix())
		b22 = w.A(bx2 = b2d.dynamicDef(x, y), fix())
		var pulley = PulleyJoint()
				.init(
				b11,
				b22,
				b2d.V(15, 1),
				b2d.V(15, 2),
				b11.worldCenter(),
				b22.worldCenter(),
				1
		)
				.lenA(8)
				.lenB(4)
				.maxLenA(10)
				.maxLenB(5)
		w.J(pulley)
	}
//SuperPulleyJoint.$$=function(){x.$$(sPJ)}
	PULLEY = function () {
		W()
		b1 = w.D(300, 300, 'r', 200, 10)
		b2 = w.D(500, 300, 'b', 200, 10)
		var pulley = PulleyJoint().init(
				b1, b2,
				V(20, 1), V(25, 2), b1.wC(), b2.wC(), 1).lenA(8).lenB(4).maxLenA(10).maxLenB(5)
		w.J(pulley)   //makeMe()  //makeTim(10)   //makeCar()
	}
}
b2Vec2 = Box2D.Common.Math.b2Vec2
b2BodyDef = Box2D.Dynamics.b2BodyDef
b2Body = Box2D.Dynamics.b2Body
b2FixtureDef = Box2D.Dynamics.b2FixtureDef
b2World = Box2D.Dynamics.b2World
b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef
b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef
b2PulleyJointDef = Box2D.Dynamics.Joints.b2PulleyJointDef
b2DebugDraw = Box2D.Dynamics.b2DebugDraw
b2Fixture = Box2D.Dynamics.b2Fixture
b2AABB = Box2D.Collision.b2AABB;
//NOTE: If you know what lengthA and lengthB in lines 8 & 9 means, please share.
//
//NOTE: To view Source for the given example, right click on canvas element and View frame source.
//
//NOTE: Remember Box2d assumes body is in the correct position when the joint is made.
PULL = function () {
}
PUJT = function () {
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

PLJT = function () {
	W({g: 0})
	b = w.D(300, 400)
	b.rec(40, 90)
	b.rt(-10).bo(.5)//.fixRot()
	b1 = w.D(400, 300)
	b1.rec(60, 80)
	b1.rt(45)
	j = myjoint = new b2PulleyJointDef();
	worldAnchorOnBody1 = new b2Vec2(6, 7); // Anchor point on body 1 in world axis
	worldAnchorOnBody2 = new b2Vec2(16, 7); // Anchor point on body 2 in world axis
	worldAnchorGround1 = new b2Vec2(6, 3); // Anchor point for ground 1 in world axis
	worldAnchorGround2 = new b2Vec2(16, 3); // Anchor point for ground 2 in world axis
	ratio = 1; // Define ratio
	myjoint.Initialize(b, b1, worldAnchorGround1, worldAnchorGround2, worldAnchorOnBody1, worldAnchorOnBody2, ratio);
	myjoint.lengthA = 10; // The a reference length for the segment attached to bodyA.
	myjoint.lengthB = 6; // The a reference length for the segment attached to bodyB.
	w.CreateJoint(myjoint);
}
PulleyJoint = pJt = function () {
	bPJD = BXJ.b2PulleyJointDef
	bPJ = BXJ.b2PulleyJoint
	var j = SuperJoint(new BXJ.b2PulleyJointDef())
	j.init = j.i = function () {
		j.Initialize.apply(j, G(arguments))
		return j
	}
	j.lenA = j.lA = function (a) {
		j.lengthA = a;
		return j
	}
	j.lenB = j.lB = function (a) {
		j.lengthB = a;
		return j
	}
	j.maxLenA = j.mLA = function (a) {
		j.maxLengthA = a;
		return j
	}
	j.maxLenB = j.mLB = function (a) {
		j.maxLengthB = a;
		return j
	}
	return j
}
SuperPulleyJoint = sPJ = function (x, y) {
	x = N(x) ? x : 100
	y = N(y) ? y : x
	b11 = w.A(bx1 = b2d.dynamicDef(x, y), fix())
	b22 = w.A(bx2 = b2d.dynamicDef(x, y), fix())
	var pulley = PulleyJoint()
			.init(
			b11,
			b22,
			b2d.V(15, 1),
			b2d.V(15, 2),
			b11.worldCenter(),
			b22.worldCenter(),
			1
	)
			.lenA(8)
			.lenB(4)
			.maxLenA(10)
			.maxLenB(5)
	w.J(pulley)
}
//SuperPulleyJoint.$$=function(){x.$$(sPJ)}
PULLEY = function () {
	W()
	b1 = w.D(300, 300, 'r', 200, 10)
	b2 = w.D(500, 300, 'b', 200, 10)
	var pulley = PulleyJoint().init(
			b1, b2,
			V(20, 1), V(25, 2), b1.wC(), b2.wC(), 1).lenA(8).lenB(4).maxLenA(10).maxLenB(5)
	w.J(pulley)   //makeMe()  //makeTim(10)   //makeCar()
}

