BASKETBALLAUTOCANCEL = function () {
	w = b2d.W();
	$.M()
	w.mTrackTransport(
			b = w.B(600, 300, 'r', 50).den(1).rest(.5)
	)
}
BALANCEGAME = function () {
	w = b2d.W();
	$.M()
	b = w.B(600, 300, 'r', 50).den(1).rest(.5)
	cjs.tick(function () {
		if (w.mj) {
			w.mj.tg(_)
		}
	})
	$.oMU(function () {
		w.M()
	})
	$.oMD(function (x, y) {
		w.mj = w.m(b, _)
	})
}
MJOFFICIAL = function () {
	w = b2d.W().mJ().db()
	_.times(3, function () {
		b = w.B(600, 300, 'r', 50).den(1).rest(.5)
		b = w.B(600, 300, 'y', 50).den(1).rest(.5)
		b = w.B(600, 300, 'u', 50).den(1).rest(.5)
		b = w.B(600, 300, 'b', 50).den(1).rest(.5)
		b = w.B(600, 300, 'v', 50).den(1).rest(.5)
	})
	$.oMD(function (x, y) {
		w.XY(x, y, function (f) {
			w.mj = w.m(f.body(), _)
		})
	})
	$.oMU(function () {
		w.M()
	})
}
MJ = function () {
	w = b2d.W().mJ().db()
	_.times(3, function () {
		b = w.B(600, 300, 'r', 50).den(1).rest(.5)
		b = w.B(600, 300, 'y', 50).den(1).rest(.5)
		b = w.B(600, 300, 'u', 50).den(1).rest(.5)
		b = w.B(600, 300, 'b', 50).den(1).rest(.5)
		b = w.B(600, 300, 'v', 50).den(1).rest(.5)
	})
	$.oMD(function (x, y) {
		w.XY(x, y, function (f) {
			w.mj = w.m(f.body(), _)
		})
	})
	$.oMU(function () {
		w.M()
	})
}
DENROT = function () {
	w = b2d.m({g: 0})
//by default, bodies have density = 0
//bodies cannot rotate by force, if their density is 0
//so by default, bodies wont rotate!!!! but still some mass
//can even change its density to 0, to suddenly freeze it...
	//something weird.. if it was already rotating it keeps rotating, and i think its rotation is affected by forces of others..
	//however others don't rot in response (assuming they also have den-0).  then once it stops rotating, switches back to frozen again?? hmmm.. maybe the rotation is affected only by friction/damping.. and the forces only change its x/y?  test it...
	r = w.rect(300, 300, 400, 20, 'yellow').rest(.5)
	r2 = w.rect(300, 300, 400, 10, 'white')
	r3 = w.rect(300, 300, 400, 10, 'white')
	r4 = w.rect(300, 300, 400, 10, 'white')
	r5 = w.rect(300, 300, 400, 10, 'white')
	flipStage()
	setInterval(function () {
		flipDen(r);
		flipDen(r2);
		flipDen(r3);
		flipStage()
	}, 6000)
}
JOINTPROTO = function () {
	b2d.mW()
	jd = new b2d.Joints.b2DistanceJointDef()
	b = w.brick(180, 150)
	a = w.ball(150, 150)
	j = w.J(jd.AB(a, b).len(200))
}
PULLEY = function () {
	b2d.mW()
	body1 = bi(300, 300, 200, 10)
	body2 = bi(500, 300, 200, 10)
	var pulley = PulleyJoint().init(
			body1, body2,
			b2d.V(20, 1), b2d.V(25, 2),
			body1.worldCenter(),
			body2.worldCenter(),
			1).lenA(8).lenB(4).maxLenA(10).maxLenB(5)
	w.J(pulley)
	//makeMe()
	//makeTim(10)
	//makeCar()
}
ROPEJ = function () {
	function b2RopeJoint() {
		b2RopeJoint.b2RopeJoint.apply(this, arguments);
		if (this.constructor === b2RopeJoint) this.b2RopeJoint.apply(this, arguments);
	};
	Box2D.Dynamics.Joints.b2RopeJoint = b2RopeJoint;
	function b2RopeJointDef() {
		b2RopeJointDef.b2RopeJointDef.apply(this, arguments);
		if (this.constructor === b2RopeJointDef) this.b2RopeJointDef.apply(this, arguments);
	};
	Box2D.Dynamics.Joints.b2RopeJointDef = b2RopeJointDef;
	b2RopeJoint = Box2D.Dynamics.Joints.b2RopeJoint
	b2RopeJointDef = Box2D.Dynamics.Joints.b2RopeJointDef
	Box2D.inherit(b2RopeJoint, Box2D.Dynamics.Joints.b2Joint);
	b2RopeJoint.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	b2RopeJoint.b2RopeJoint = function () {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.m_localAnchor1 = new b2Vec2();
		this.m_localAnchor2 = new b2Vec2();
		this.m_u = new b2Vec2();
	};
	b2RopeJoint.prototype.GetAnchorA = function () {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
	}
	b2RopeJoint.prototype.GetAnchorB = function () {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
	}
	b2RopeJoint.prototype.GetReactionForce = function (inv_dt) {
		if (inv_dt === undefined) inv_dt = 0;
		return new b2Vec2(inv_dt * this.m_impulse * this.m_u.x, inv_dt * this.m_impulse * this.m_u.y);
	}
	b2RopeJoint.prototype.GetReactionTorque = function (inv_dt) {
		if (inv_dt === undefined) inv_dt = 0;
		return 0.0;
	}
	b2RopeJoint.prototype.GetLength = function () {
		return this.m_length;
	}
	b2RopeJoint.prototype.SetLength = function (length) {
		if (length === undefined) length = 0;
		this.m_length = length;
	}
	b2RopeJoint.prototype.GetFrequency = function () {
		return this.m_frequencyHz;
	}
	b2RopeJoint.prototype.SetFrequency = function (hz) {
		if (hz === undefined) hz = 0;
		this.m_frequencyHz = hz;
	}
	b2RopeJoint.prototype.GetDampingRatio = function () {
		return this.m_dampingRatio;
	}
	b2RopeJoint.prototype.SetDampingRatio = function (ratio) {
		if (ratio === undefined) ratio = 0;
		this.m_dampingRatio = ratio;
	}
	b2RopeJoint.prototype.b2RopeJoint = function (def) {
		this.__super.b2Joint.call(this, def);
		var tMat;
		var tX = 0;
		var tY = 0;
		this.m_localAnchor1.SetV(def.localAnchorA);
		this.m_localAnchor2.SetV(def.localAnchorB);
		this.m_frequencyHz = def.frequencyHz;
		this.m_dampingRatio = def.dampingRatio;
		this.m_impulse = 0.0;
		this.m_gamma = 0.0;
		this.m_bias = 0.0;
		this.m_length = def.length;
		this.m_maxLength = def.maxLength
		this.m_limitState = b2Joint.e_inactiveLimit;
	}
	b2RopeJoint.prototype.InitVelocityConstraints = function (step) {
		var tMat;
		var tX = 0;
		var bA = this.m_bodyA;
		var bB = this.m_bodyB;
		tMat = bA.m_xf.R;
		var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		tMat = bB.m_xf.R;
		var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		this.m_u.x = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
		this.m_u.y = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
		var length = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
		this.m_length = length;
		var C = this.m_length - this.m_maxLength;
		if (C > 0) {
			this.m_limitState = b2Joint.e_atUpperLimit;
		} else {
			this.m_limitState = b2Joint.e_inactiveLimit;
		}
		if (length > b2Settings.b2_linearSlop) {
			this.m_u.Multiply(1.0 / length);
		} else {
			this.m_u.SetZero();
			this.m_mass = 0.0;
			this.m_impulse = 0.0;
			return;
		}
		var cr1u = (r1X * this.m_u.y - r1Y * this.m_u.x);
		var cr2u = (r2X * this.m_u.y - r2Y * this.m_u.x);
		var invMass = bA.m_invMass + bA.m_invI * cr1u * cr1u + bB.m_invMass + bB.m_invI * cr2u * cr2u;
		this.m_mass = invMass != 0.0 ? 1.0 / invMass : 0.0;
		if (step.warmStarting) {
			this.m_impulse *= step.dtRatio;
			var PX = this.m_impulse * this.m_u.x;
			var PY = this.m_impulse * this.m_u.y;
			bA.m_linearVelocity.x -= bA.m_invMass * PX;
			bA.m_linearVelocity.y -= bA.m_invMass * PY;
			bA.m_angularVelocity -= bA.m_invI * (r1X * PY - r1Y * PX);
			bB.m_linearVelocity.x += bB.m_invMass * PX;
			bB.m_linearVelocity.y += bB.m_invMass * PY;
			bB.m_angularVelocity += bB.m_invI * (r2X * PY - r2Y * PX);
		}
		else {
			this.m_impulse = 0.0;
		}
	}
	b2RopeJoint.prototype.SolveVelocityConstraints = function (step) {
		var tMat;
		var oldImpulse = 0.0;
		var bA = this.m_bodyA;
		var bB = this.m_bodyB;
		tMat = bA.m_xf.R;
		var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
		var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		tMat = bB.m_xf.R;
		var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		var v1X = bA.m_linearVelocity.x + ((-bA.m_angularVelocity * r1Y));
		var v1Y = bA.m_linearVelocity.y + (bA.m_angularVelocity * r1X);
		var v2X = bB.m_linearVelocity.x + ((-bB.m_angularVelocity * r2Y));
		var v2Y = bB.m_linearVelocity.y + (bB.m_angularVelocity * r2X);
		var C = this.m_length - this.m_maxLength;
		var Cdot = (this.m_u.x * (v2X - v1X) + this.m_u.y * (v2Y - v1Y));
		if (C < 0.0) {
			Cdot += step.inv_dt * C;
		}
		var impulse = (-this.m_mass * (Cdot + this.m_bias + this.m_gamma * this.m_impulse));
		oldImpulse = this.m_impulse;
		this.m_impulse = Math.min(0.0, this.m_impulse + impulse);
		impulse = this.m_impulse - oldImpulse;
		var PX = impulse * this.m_u.x;
		var PY = impulse * this.m_u.y;
		bA.m_linearVelocity.x -= bA.m_invMass * PX;
		bA.m_linearVelocity.y -= bA.m_invMass * PY;
		bA.m_angularVelocity -= bA.m_invI * (r1X * PY - r1Y * PX);
		bB.m_linearVelocity.x += bB.m_invMass * PX;
		bB.m_linearVelocity.y += bB.m_invMass * PY;
		bB.m_angularVelocity += bB.m_invI * (r2X * PY - r2Y * PX);
	}
	b2RopeJoint.prototype.SolvePositionConstraints = function (baumgarte) {
		if (baumgarte === undefined) baumgarte = 0;
		var tMat;
		if (this.m_frequencyHz > 0.0) {
			return true;
		}
		var bA = this.m_bodyA;
		var bB = this.m_bodyB;
		tMat = bA.m_xf.R;
		var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
		var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		tMat = bB.m_xf.R;
		var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		var dX = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
		var dY = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
		var length = Math.sqrt(dX * dX + dY * dY);
		dX /= length;
		dY /= length;
		var C = length - this.m_maxLength;
		C = b2Math.Clamp(C, 0.0, b2Settings.b2_maxLinearCorrection);
		var impulse = (-this.m_mass * C);
		this.m_u.Set(dX, dY);
		var PX = impulse * this.m_u.x;
		var PY = impulse * this.m_u.y;
		bA.m_sweep.c.x -= bA.m_invMass * PX;
		bA.m_sweep.c.y -= bA.m_invMass * PY;
		bA.m_sweep.a -= bA.m_invI * (r1X * PY - r1Y * PX);
		bB.m_sweep.c.x += bB.m_invMass * PX;
		bB.m_sweep.c.y += bB.m_invMass * PY;
		bB.m_sweep.a += bB.m_invI * (r2X * PY - r2Y * PX);
		bA.SynchronizeTransform();
		bB.SynchronizeTransform();
		return length - this.m_maxLength < b2Settings.b2_linearSlop;
	}
	Box2D.inherit(b2RopeJointDef, Box2D.Dynamics.Joints.b2JointDef);
	b2RopeJointDef.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	b2RopeJointDef.b2RopeJointDef = function () {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
		this.localAnchorA = new b2Vec2();
		this.localAnchorB = new b2Vec2();
	};
	b2RopeJointDef.prototype.b2RopeJointDef = function () {
		this.__super.b2JointDef.call(this);
		this.type = b2Joint.e_ropeJoint;
		this.length = 1.0;
		this.frequencyHz = 0.0;
		this.dampingRatio = 0.0;
	}
	b2RopeJointDef.prototype.Initialize = function (bA, bB, anchorA, anchorB) {
		this.bodyA = bA;
		this.bodyB = bB;
		this.localAnchorA.SetV(this.bodyA.GetLocalPoint(anchorA));
		this.localAnchorB.SetV(this.bodyB.GetLocalPoint(anchorB));
		var dX = anchorB.x - anchorA.x;
		var dY = anchorB.y - anchorA.y;
		this.length = Math.sqrt(dX * dX + dY * dY);
		this.frequencyHz = 0.0;
		this.dampingRatio = 0.0;
	}
	b2Joint.Create = function (def, allocator) {
		var joint = null;
		switch (def.type) {
			case b2Joint.e_ropeJoint:
			{
				joint = new b2RopeJoint((def instanceof b2RopeJointDef ? def : null));
			}
				break;
			case b2Joint.e_distanceJoint:
			{
				joint = new b2DistanceJoint((def instanceof b2DistanceJointDef ? def : null));
			}
				break;
			case b2Joint.e_mouseJoint:
			{
				joint = new b2MouseJoint((def instanceof b2MouseJointDef ? def : null));
			}
				break;
			case b2Joint.e_prismaticJoint:
			{
				joint = new b2PrismaticJoint((def instanceof b2PrismaticJointDef ? def : null));
			}
				break;
			case b2Joint.e_revoluteJoint:
			{
				joint = new b2RevoluteJoint((def instanceof b2RevoluteJointDef ? def : null));
			}
				break;
			case b2Joint.e_pulleyJoint:
			{
				joint = new b2PulleyJoint((def instanceof b2PulleyJointDef ? def : null));
			}
				break;
			case b2Joint.e_gearJoint:
			{
				joint = new b2GearJoint((def instanceof b2GearJointDef ? def : null));
			}
				break;
			case b2Joint.e_lineJoint:
			{
				joint = new b2LineJoint((def instanceof b2LineJointDef ? def : null));
			}
				break;
			case b2Joint.e_weldJoint:
			{
				joint = new b2WeldJoint((def instanceof b2WeldJointDef ? def : null));
			}
				break;
			case b2Joint.e_frictionJoint:
			{
				joint = new b2FrictionJoint((def instanceof b2FrictionJointDef ? def : null));
			}
				break;
			default:
				break;
		}
		return joint;
	}
	Box2D.postDefs.push(function () {
		Box2D.Dynamics.Joints.b2Joint.e_unknownJoint = 0;
		Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
		Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
		Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
		Box2D.Dynamics.Joints.b2Joint.e_ropeJoint = 10;
		Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
		Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
		Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6;
		Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7;
		Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8;
		Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
		Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
		Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit = 1;
		Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
		Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3;
	});
}
FRICJ = function () {
	w = b2d.W({g: 0})
	y = w.ship().XY(200, 200)
	w.right.kill();
	w.left.kill();
	y.warp2()
	//  Set the two anchor points to zero so the friction doesn't have any direction.
	frictionJoint = new b2d.Joints.b2FrictionJointDef()
	frictionJoint.localAnchorA = V(0, 0)
	frictionJoint.localAnchorB = V(0, 0)
	frictionJoint.bodyA = y//w.ball(100,100,50)
	frictionJoint.bodyB = b = w.ball(200, 200, 240).warp2()
	// 1200,400)//ASquareAsLargeAsTheAreaYouNeedFrictionIn
	frictionJoint.maxForce = 42.5; //This the most force the joint will apply to your object.
	// The faster its moving the more force applied
	frictionJoint.maxTorque = 0//4365; //Set to 0 to prevent rotation
	w.CreateJoint(frictionJoint)
	frictionJoint = new b2d.Joints.b2FrictionJointDef()
	frictionJoint.localAnchorA = V(0, 0)
	frictionJoint.localAnchorB = V(0, 0)
	frictionJoint.bodyA = y//w.ball(100,100,50)
	frictionJoint.bodyB = b2 = w.ball(200, 200, 40).warp2()
	// 1200,400)//ASquareAsLargeAsTheAreaYouNeedFrictionIn
	frictionJoint.maxForce = 42.5; //This the most force the joint will apply to your object.
	// The faster its moving the more force applied
	frictionJoint.maxTorque = 0//4365; //Set to 0 to prevent rotation
	w.CreateJoint(frictionJoint)
	w.ball(400, 500, 40)
	w.show(function () {
		return 'linVelX: ' + y.linVel().x.toFixed(0)
	})
	/*
	
	 How to add friction joint and which anchor point i have to set to zero?? –  Diken Sep 5 '12 at 7:05
	
	 Unlike surface friction between solids, air friction (drag) depends on the speed of the object, squared.
	
	 An easy way to model friction and drag
	
	 F(friction) = -k;
	 F(drag) = speed * speed * -k;
	 Both forces act in the opposite direction to the velocity of the object.
	
	 Notice that surface friction is a constant whereas air friction (drag) must be modified each frame according to the object speed (length of velocity vector)
	 */
}
DISTPOINTS = function () {
	b2d.mW()
	x = w.rectStat(500, 300, 200, 200)
	b = w.circ(300, 400, 20, 'red')
	j = w.dist(x, b, V(100, 100)).len(50)
	cjs.tick(function () {
		w.s.dot([j.a(), j.b()])
	})
	setInterval(function () {
		b.I(-10000, 0)
	}, 2000)
	w.dist(x, w.circ(300, 400, 20, 'blue'), V(-100, 100))
			.len(50)
	w.dist(x, w.circ(600, 300, 20, 'green'), V(100, -100))
			.len(50)
	o = w.distColl(x, w.circ(300, 400, 20, 'orange'), V(-100, -100))
			.len(50)
}
DISTPOINTSMORE = function () {
	b2d.mW()
	// ok, so the 'points' are relative to the WORLD
	x = w.brick(550, 200, 400, 100)
	b2d.colorBalls()
	// here there are no default lengths, they are set to actual distance apart at time of joint creation!!!
	j0 = w.dist(b, r)     //  previously:  j0 =  w.J(   b2d.dJ().init(b,r)   )
	f = function () {
		w.s.flash()
		j1 = w.dist(x, o)
		xc = x.worldCenter()
		gc = g.worldCenter()
		j = w.dist(x, g, xc, gc)
		cjs.tick(function () {
			w.s.dot(j.a());
			w.s.dot(j.b())
		})
	}
	// i want to be able to specify how much to offset the anchor point, relative from its own center!!!!
	setTimeout(f, 200)
}
WINDUP = function () {
	var wound = false
	b2d.level()
	j = w.distColl(
			w.bump(450, 40, 40),
			w.box(400, 200, 20, 60), 200
	)
	k = w.dist(
			w.bump(450, 40, 40),
			w.box(400, 200, 20, 60), 200
	)
	w.stat(0, 40, b2d.poly(400, 100).sensor(true).K('sensor')) //can get triggered many many times?
	w.begin(function (cx) {
		if (cx.with('sensor')) {
			j.wind();
			k.wind()
		}
	})
	// game:: density:  if u want to fit in here.. u will have to lower yourself a bit to our level.. you see, compared to you, we a really quite dense. Not dense as in stupid, but as in, we have a high mass to volume ratio.  In otherwords, we can't jump!  It's a grave grave situation.  Don't get me wrong, not grave as in bad, but grave, as in, it relates to gravity.  Additionally, it's quite bad.
}
RODS = function () {
	
	
	// here i bind bodies with fixtures that are alredy out of line
	b2d.level()
	b2d.rod(
			w.ball(300, 100, 20),
			w.dyn(300, 150, b2d.poly(20, 20, 15, 15, 45)),
			1)
	b2d.rod(
			w.ball(350, 100, 20),
			w.dyn(350, 150, b2d.poly(20, 20, -15, -15, 300)),
			1)
	b2d.rod(
			w.ball(380, 100, 20),
			w.dyn(380, 150,
					b2d.poly(20, 20, -15, -15, 225)),
			1)
	b2d.rod(
			w.ball(400, 100, 20),
			w.dyn(400, 150, b2d.poly(20, 20, 15, 15, 225)),
			1)
	b2d.rod(
			w.ball(100, 100, 20),
			w.box(110, 120, 20, 20), 30
	)
	b2d.rod(w.bump(200, 200, 20),
			w.box(200, 200, 20, 20), 2
	)
}
ONLYGRAVITYONMARIO = function () {
}
SPRINGS = function () {
	b2d.levelScrollX()
	right.kill()
	//freq is SPEED of oscillation
	//damp is STRENGTH of oscillation
	// so bodies cant rotate if they dont have density???
	j = w.spring(
			w.circStat(200, 100, 10).sens(),
			w.rect(200, 250, 250, 10).K('rect')
	)
			.freq(3).damp(.1)
	w.spring(w.circStat(500, 100, 10).sens(),
			w.rect(500, 250, 250, 10).K('rect'))
			.freq(3).damp(1)
	w.spring(w.circStat(800, 50, 10).sens(), w.rect(800, 200, 250, 10).K('rect'))
			.freq(2).damp(50)
	w.spring(w.circStat(1200, 125, 10).sens(), w.rect(1200, 275, 250, 10).K('rect'))
			.freq(10).damp(.5)
	w.begin(function (cx) {
		f = cx.with('rect')
		if (f) {
			b = f.body()
			j = b.joint()
			w.s.pen($l('freq: ' + j.freq() + ', dampening: ' + j.damp()))
		}
	})
}
SPRINGS3 = function () {
	b2d.levelScroll()
	softPlat = function (x, y) {
		x = N(x) ? x : 300
		y = N(y) ? y : 60
		j = w.spring(
				w.bump(x, y, 4).sens(true),
				w.rect(x, y, 100, 30).den(1).fixedRot(true).rest(0)
		).damp(1)
	}
	softPlat(300, 100)
	softPlat(500, 80)
	softPlat(700, 40)
	softPlat(900, 120)
}
SPRINGINSPACE = function () {
	b2d.mW({grav: 0})
	var spring = function (bx, by) {
		var x, b, j
		bx = N(bx) ? bx : 480
		by = N(by) ? by : 300
		j = w.dist(
				x = w.brick(500, 300, 40, 200),
				b = w.bump(bx, by))
		w.s.dot(500, 300)
		w.s.dot(bx, by)
		w.s.dot('red',
				500 - ((500 - bx) / 2),
				300 - ((300 - by) / 2))
		$.dblclick(function () {
			b.dyn()
		})
		return j
	}
	//try with and without grav
	ball = w.ball(200, 200, 50) // notice it bounces off wall, but NOT off x (neither have rest by default)
	rect = w.brick(200, 250, 250, 10)
	j = spring(480, 300)
	j.freq(2).damp(1)//.len(20)
	// ok so freq is how much strngth u need to pull it??
	// as freq gets low.. u can pull it farther away
	// its the strength of the spring
}
BOUNCESPRING = function () {
	b2d.levelScrollX()
//default freq is 0.  but thats like freq 10000000
//freq is tightness.  the default (0) is all the way tight.
//if u want to start to loosen it.  change from 0 to a very high number!
//try 50.. then u will see that it budges just a little.
	//ok.. now keep going down..
	// eventually it is too loose to fight against gravity
	// hahaha then its just flat and usesless
	// ok all this assumed a default damp of 0.
	// now set the freq to a good oscillation (3 or 4)
	// then play with the damp
	// damp is like a tightner on your looseness
	// it makes you less stretchy?
	// just leave damp at 0 for now, and play with freq
	w.tramp(200, 0, 6)// not bouncy
	w.tramp(500, 1.2, 6)// too bouncy
	w.tramp(800, .75, 6)// mid bouncy, mid freq
	w.tramp(1100, .75, 2)//low freq
	w.tramp(1400, .75, 12)//high freq
	p.XY(285, 0)
	setInterval(function () {
		p.I(0, -150)
	}, 1000)//game:: he autojumps.  u jump to give him a double jump!
	setTimeout(function () {
		w.s.flash();
		w.addHundBalls()
	}, 30000)
}
SPRINGS2 = function () {
	z()
	b2d.mW()
	j1 = w.J(
			jd = b2d.distDef().init(
					w.circ(30, 200, 20, 'red'), w.box()
			).len(200).freq(5).damp(.1)
	)
	cjs.tick(function () {
		if (j1.len() > 1) {
			j1.len(j1.len() - 1)
		}
	})
	j2 = w.J(
			b2d.spring(
					w.circ(100, 300, 30, 'white'), w.box()
			).len(20).freq(5).damp(.1).coll(false)
	)
	j3 = w.J(
			b2d.spring(
					w.circ(130, 250, 30, 'blue'),
					w.brick()
			).len(120).freq(5).damp(0).coll(true)
	)
}
BRIDGE = function () {
	b2d.levelScrollX();
	p.XY(-100, 0)
	w.bridge(100, 10)
	setTimeout(function () {
		w.s.flash();
		p.XY(500, 0)
	}, 10000)
}
DEMO_COLLIDE = function () {
	b2d.mW()
	w.dist(w.ball(200, 200, 50), w.ball(300, 200, 40))
			.len(50).freq(3).damp(.1)
	w.dist(w.box(200, 200, 50), w.box(300, 200, 40))
			.len(50).freq(3).damp(.1)
	w.distColl(w.ball(200, 200, 50), w.ball(300, 200, 60))
			.len(50).freq(3).damp(.1)
	j = w.distColl(w.rect(200, 200, 50, 50), w.rect(300, 200, 60))
			.len(50).freq(3).damp(.1)
}
//
//
//
RAGD = function () {
	b2d.mW()
	// world.Spring =
	w.J(
			b2d.spring(
					body1 = w.ball(100, 100, 30),
					w.ball(100, 200, 40)
			)
	)
	//world.Rod =
	w.J(
			b2d.rod(
					body2 = w.box(100, 400, 30),
					w.box(100, 500, 40))
	)
	player = w.addMe()
	w.J(
			b2d.spring(
					body1, player)
	)
	w.J(
			b2d.spring(body2, player))
}