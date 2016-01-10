
GCO = function () {
	W({g: 10, w: 'r2'})
	p = w.p().tr().r(2)
	w.Z(1.4)
	gCo = w.gCo()
	gCo.G = 10
	_.t(1, function () {
		b = w.D(R(300, 100), R(300, 100), 'z', 60)
		//.fR()
		// .d(.1)
		gCo.B(b)
	})
	gCo1 = w.gCo()
	gCo1.G = 50
	_.t(5, function () {
		b = w.D(R(300, 100), R(300, 100), 'o', 60)
		// .fR()
		//.d(.1)
		gCo1.B(b)
	})
	w.D(R(300, 100), R(300, 100), 'r', 60).d(1000)
	//   _.t(12, function(){     w.D(R(300,100), R(300,100), 'x', 30).r(2)     })
	/*
	 arr=[
	 //  w.D(320,600, 'r', 30).fR().d(1) ,
	 b=   w.D(300,120, 'b', 40).r(0).fr(10).fR().d(1) ,
	 w.D(340,200, 'x', 80).r(0).fr(10).fR().d(1) ,
	 w.D(300,340, 'w', 80).fR()//.r(0).fr(10).fR().d(1) ,
	 //  w.D(320,620, 'l', 70).fR().d(1)
	 ]
	 _.e(arr, function(b){ gCo.B( b )   })
	
	
	 $.inx(2, function(){
	
	 w.C('g')
	 _.e(arr, function(b){ gCo.B( b )   })
	 //b.lD(100)
	 //gCo.xB(b)
	
	 })
	
	
	
	
	
	 $.in(8, function(){ //.pen('welcome to grav controller - top balls r1, bottom r2(default)')
	
	 r = 40
	
	 gCo = w.gCo(1, true).B(
	
	 w.D(100,600, 'b', r).d(1),
	 w.D(200,500, 'b', r).d(1),
	 w.D(300,400, 'b', r).d(1),
	 w.D(400,300, 'b', r).d(1),
	 w.D(500,200, 'b', r).d(1),
	 w.D(600,100, 'b', r).d(1)
	 )
	
	 gCo2 = w.gCo(1).B(
	 w.D(100,600, 'r', r).d(1),
	 w.D(200,500, 'r', r).d(1),
	 w.D(300,400, 'r', r).d(1),
	 w.D(400,300, 'r', r).d(1),
	 w.D(500,200, 'r', r).d(1),
	 w.D(600,100, 'r', r).d(1)
	 )
	
	 })
	 $.in(15, function(){w.C('y');
	 r = 40
	 w.gCo(2).B(b= w.D(100,200, 'b', r ).d(1),
	 w.D(200,500, 'r', r).den(1),
	 w.D(300,400, 'x', r).den(1),
	 w.D(400,300, 'c', r).den(1),
	 w.D(500,200, 'l', r).den(1),
	 w.D(600,100, 'l', r).den(1))
	 w.gCo().B(w.D(700,600,'b',r).den(1),
	 w.D(800,500,'r',r).den(1),
	 w.D(900,400,'x',r).den(1),
	 w.D(1000,300,'c',r).den(1),
	 w.D(1100,200,'l',r).den(1),
	 w.D(1200,100,'l',r).den(1))
	
	
	 })
	 $.in(22, function(){w.C('y');
	
	 r=20
	
	 gCo = w.gCo(1, true).B(
	 w.D(100,600, r, 'b').d(1),
	 w.D(200,500, r, 'l').d(1),
	 w.D(300,400, r, 'x').d(1),
	 w.D(400,300, r, 'x').d(1),
	 w.D(500,200, r, 'l').d(1),
	 w.D(600,100, r, 'b').d(1)
	 )
	
	 gCo2 = w.gCo(4).B(
	 w.D(700,600, r, 'b').d(1),
	 w.D(800,500, r, 'l').d(1),
	 w.D(900,400, r, 'x').d(1),
	 w.D(1000,300, r, 'x').d(1),
	 w.D(1100,200, r, 'l').d(1),
	 w.D(1200,100, r, 'b').d(1) )
	 })  */
}
//
gCo = $pt.gCo
gCo.gv = gCo.grv = gCo.grav = gCo.g = gCo.V = function (grav) {
	var co = this
	//applies 'gravity' by default
	co.G = N(grav, 1)
	return co
}
gCo.iSq = gCo.inv = function (inv) {
	var co = this
	if (U(inv)) {
		return co.invSqr
	}
	co.invSqr = inv ? true : false
	return co
}
gCo.r1 = gCo.iSq0 = gCo.invSq0 = function () {
	return this.iSq(0)
}
gCo.r2 = gCo.iSq1 = gCo.invSq1 = function () {
	return this.iSq(1)
} //this is default
$gCo = b2d.grav = function (a, b, c, d) {
	var co = new b2d.GC()
	return co
}
//
w.$co = function (co) {
	this.co(co)
	return co
}
w.gv = w.grv = w.grav = function (gv, fasterR1) {
	var w = this, g = G(arguments)
	var co = $gCo.apply(null, g)
	//optionally pass in gravity
	if (g.N_) {
		co.grv(g.f)
	}
	return w.$co(fasterR1 ? co.r1() : co)
}
w.gvR1 = w.gravR1 = function (grav) {
	return this.grav(grav, true)
}
//
GRAVTRAP = GVT = function () {
	W00().C('e').pen('welcome to grav controller')
	ship = w.yShip(300, 300).con('thrust').shootOnSpace().lD(10)
	w.gv().A(ship,
			w.bBa(3.2, 3, 20), w.rBa(3, 3.3, 30), w.xBa(3.4, 3, 40),
			w.cBa(3, 3.4, 50), w.lBa(3.2, 3.2, 60)
	)
}
GRAVR = GVR = function () {
	W00().C('e').pen('welcome to grav controller - top balls r1, bottom r2(default)')
	w.yShip(300, 200).con('thrust').shootOnSpace().lD(10)
	w.gv(1, true).A($$b(1, 6), $$r(2, 5), $$x(3, 4), $$c(4, 3), $$l(5, 2), $$l(6, 1))
	w.gv().A($$b(7, 6), $$r(8, 5), $$x(9, 4), $$c(10, 3), $$l(11, 2), $$l(12, 1))
}
GRAVG = GVG = function () {
	W00().C('e').pen('welcome to grav controller - top has g:2, bottom has g:1 (default)')
	y = w.yShip(300, 200).con('thrust').shootOnSpace().de(1).lD(10)
	gCo = w.grav(2).A($$b(1, 6), $$r(2, 5), $$x(3, 4), $$c(4, 3), $$l(5, 2), $$l(6, 1))
	gCo2 = w.grav().A($$b(7, 6), $$r(8, 5), $$x(9, 4), $$c(10, 3), $$l(11, 2), $$l(12, 1))
}
GRAVGR = GGR = function () {
	W00().C('e').pen(
			'welcome to grav controller - ' +
			'top has g:1,r:1, bottom has g:2,r:2 - res:' +
			'pinks move OUTWARDS only on bottom?')
	w.yShip(300, 200) // but why.. why y ship? :).con('thrust').shootOnSpace().lD(10)
	grav(w.grav(1, true), 1);
	grav(w.grav(4), 7)
}
function mock() {
	$$B = function (x, y, c) {
		return w.BALL(x * 100, y * 100, 40, c)
	}
	$$b = function (x, y) {
		return $$B(x, y, 'b')
	}
	$$l = function (x, y) {
		return $$B(x, y, 'l')
	}
	$$x = function (x, y) {
		return $$B(x, y, 'x')
	}
	grav = function (gCo, n) {
		gCo.A($$b(n++, 6), $$l(n++, 5),
				$$x(n++, 4), $$x(n++, 3),
				$$l(n++, 2), $$b(n++, 1))
	}
	w._Ba = function (x, y, r, c) {
		return this.BALL(x * 100, y * 100, r, c || 'b')
	}
	w.bBa = w.bBall = function (x, y, r) {
		return this._Ba(x, y, r, 'b')
	}
	w.lBa = w.bBall = function (x, y, r) {
		return this._Ba(x, y, r, 'l')
	}
	w.xBa = w.bBall = function (x, y, r) {
		return this._Ba(x, y, r, 'x')
	}
	w.rBa = w.bBall = function (x, y, r) {
		return this._Ba(x, y, r, 'r')
	}
	w.cBa = w.bBall = function (x, y, r) {
		return this._Ba(x, y, r, 'c')
	}
}
$L('mock')
GCO = function () {
	W({g: 10, w: 'r2'})
	p = w.p().tr().r(2)
	w.Z(1.4)
	gCo = w.gCo()
	gCo.G = 10
	_.t(1, function () {
		b = w.D(R(300, 100), R(300, 100), 'z', 60)
		//.fR()
		// .d(.1)
		gCo.B(b)
	})
	gCo1 = w.gCo()
	gCo1.G = 50
	_.t(5, function () {
		b = w.D(R(300, 100), R(300, 100), 'o', 60)
		// .fR()
		//.d(.1)
		gCo1.B(b)
	})
	w.D(R(300, 100), R(300, 100), 'r', 60).d(1000)
	//   _.t(12, function(){     w.D(R(300,100), R(300,100), 'x', 30).r(2)     })
	/*
	 arr=[
	 //  w.D(320,600, 'r', 30).fR().d(1) ,
	 b=   w.D(300,120, 'b', 40).r(0).fr(10).fR().d(1) ,
	 w.D(340,200, 'x', 80).r(0).fr(10).fR().d(1) ,
	 w.D(300,340, 'w', 80).fR()//.r(0).fr(10).fR().d(1) ,
	 //  w.D(320,620, 'l', 70).fR().d(1)
	 ]
	 _.e(arr, function(b){ gCo.B( b )   })
	
	
	 $.inx(2, function(){
	
	 w.C('g')
	 _.e(arr, function(b){ gCo.B( b )   })
	 //b.lD(100)
	 //gCo.xB(b)
	
	 })
	
	
	
	
	
	 $.in(8, function(){ //.pen('welcome to grav controller - top balls r1, bottom r2(default)')
	
	 r = 40
	
	 gCo = w.gCo(1, true).B(
	
	 w.D(100,600, 'b', r).d(1),
	 w.D(200,500, 'b', r).d(1),
	 w.D(300,400, 'b', r).d(1),
	 w.D(400,300, 'b', r).d(1),
	 w.D(500,200, 'b', r).d(1),
	 w.D(600,100, 'b', r).d(1)
	 )
	
	 gCo2 = w.gCo(1).B(
	 w.D(100,600, 'r', r).d(1),
	 w.D(200,500, 'r', r).d(1),
	 w.D(300,400, 'r', r).d(1),
	 w.D(400,300, 'r', r).d(1),
	 w.D(500,200, 'r', r).d(1),
	 w.D(600,100, 'r', r).d(1)
	 )
	
	 })
	 $.in(15, function(){w.C('y');
	 r = 40
	 w.gCo(2).B(b= w.D(100,200, 'b', r ).d(1),
	 w.D(200,500, 'r', r).den(1),
	 w.D(300,400, 'x', r).den(1),
	 w.D(400,300, 'c', r).den(1),
	 w.D(500,200, 'l', r).den(1),
	 w.D(600,100, 'l', r).den(1))
	 w.gCo().B(w.D(700,600,'b',r).den(1),
	 w.D(800,500,'r',r).den(1),
	 w.D(900,400,'x',r).den(1),
	 w.D(1000,300,'c',r).den(1),
	 w.D(1100,200,'l',r).den(1),
	 w.D(1200,100,'l',r).den(1))
	
	
	 })
	 $.in(22, function(){w.C('y');
	
	 r=20
	
	 gCo = w.gCo(1, true).B(
	 w.D(100,600, r, 'b').d(1),
	 w.D(200,500, r, 'l').d(1),
	 w.D(300,400, r, 'x').d(1),
	 w.D(400,300, r, 'x').d(1),
	 w.D(500,200, r, 'l').d(1),
	 w.D(600,100, r, 'b').d(1)
	 )
	
	 gCo2 = w.gCo(4).B(
	 w.D(700,600, r, 'b').d(1),
	 w.D(800,500, r, 'l').d(1),
	 w.D(900,400, r, 'x').d(1),
	 w.D(1000,300, r, 'x').d(1),
	 w.D(1100,200, r, 'l').d(1),
	 w.D(1200,100, r, 'b').d(1) )
	 })  */
}
function multGravs(){
	GRAVITY = function () {
		var body
		:
		b2Body;
		var bodyDef
		:
		b2BodyDef;
		var boxDef
		:
		b2PolygonDef;
		var circleDef
		:
		b2CircleDef;
		bodyDef = new b2BodyDef()
		bodyDef.position.Set(10, 12)
		boxDef = new b2PolygonDef()
		boxDef.SetAsBox(30, 0.5)
		boxDef.friction = .3
		boxDef.density = 0
		body = m_world.CreateBody(bodyDef)
		body.CreateShape(boxDef)
		body.SetMassFromShapes()
		bodyDef = new b2BodyDef()
		bodyDef.position.Set(10, 0)
		boxDef = new b2PolygonDef();
		boxDef.SetAsBox(30, 0.5);
		boxDef.friction = 0.3;
		boxDef.density = 0;
		body = m_world.CreateBody(bodyDef);
		body.CreateShape(boxDef);
		body.SetMassFromShapes();
		for (var i:
		int = 1;
		i < 10;
		i++
		)
		{
			bodyDef = new b2BodyDef();
			bodyDef.position.x = Math.random() * 12 + 2;
			bodyDef.position.y = Math.random() + 5;
			var rX
		:
			Number = Math.random() + 0.2;
			var rY
		:
			Number = Math.random() + 0.2;
			if (Math.random() < 0.5) {
				boxDef = new b2PolygonDef();
				boxDef.SetAsBox(rX, rY);
				boxDef.density = 1.0;
				boxDef.friction = 0.5;
				boxDef.restitution = 0.2;
				bodyDef.userData = new Sprite();
				bodyDef.userData.name = "box";
				body = m_world.CreateBody(bodyDef);
				body.CreateShape(boxDef);
			}
			else {
				circleDef = new b2CircleDef();
				circleDef.radius = rX;
				circleDef.density = 1.0;
				circleDef.friction = 0.5;
				circleDef.restitution = 0.2;
				bodyDef.userData = new Sprite();
				bodyDef.userData.name = "circle";
				body = m_world.CreateBody(bodyDef);
				body.CreateShape(circleDef);
			}
			body.SetMassFromShapes();
			addChild(bodyDef.userData);
		}
	}
}
public
function Update(e
:
Event
):
void {
	var ant_gravity = b2Vec2;
m_world.Step(m_timeStep, m_iterations);
for (var bb:
b2Body = m_world.m_bodyList;
bb;
bb = bb.m_next
)
{
	if (bb.GetUserData() != null) {
		if (bb.GetUserData().name == "circle") {
			ant_gravity = new b2Vec2(0.0, -20.0 * bb.GetMass());
			bb.ApplyForce(ant_gravity, bb.GetWorldCenter());
		}
	}
}
}
}