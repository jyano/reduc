SUPERBOUNCYPLAYER = WALLR2 = WGCO = BOL2 = function () {
	W({g: 10, w: 'r2'})
	p = w.p().tr().r(40).fr(0)
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
}
BOL3 = function () {
	W()
	_.t(12, function () {
		w.D(R(300, 100), R(300, 100), 'x', 30).r(2)
	})
	arr = [
		//  w.D(320,600, 'r', 30).fR().d(1) ,
		b = w.D(300, 120, 'b', 40).r(0).fr(10).fR().d(1),
		w.D(340, 200, 'x', 80).r(0).fr(10).fR().d(1),
		w.D(300, 340, 'w', 80).fR()//.r(0).fr(10).fR().d(1) ,
		//  w.D(320,620, 'l', 70).fR().d(1)
	]
	_.e(arr, function (b) {
		gCo.B(b)
	})
	_.inx(2, function () {
		w.C('g')
		_.e(arr, function (b) {
			gCo.B(b)
		})
		//b.lD(100)
		//gCo.xB(b)
	})
}
PEN = GRCO = function () {
	W()
	w.pen('welcome to grav controller - top balls r1, bottom r2(default)')
	r = 40
	gCo = w.gCo(1, true).B(
			w.D(100, 600, 'b', r).d(1),
			w.D(200, 500, 'b', r).d(1),
			w.D(300, 400, 'b', r).d(1),
			w.D(400, 300, 'b', r).d(1),
			w.D(500, 200, 'b', r).d(1),
			w.D(600, 100, 'b', r).d(1)
	)
	gCo2 = w.gCo(1).B(
			w.D(100, 600, 'r', r).d(1),
			w.D(200, 500, 'r', r).d(1),
			w.D(300, 400, 'r', r).d(1),
			w.D(400, 300, 'r', r).d(1),
			w.D(500, 200, 'r', r).d(1),
			w.D(600, 100, 'r', r).d(1)
	)
	_.in(15, function () {
		w.C('y');
		r = 40
		w.gCo(2).B(b = w.D(100, 200, 'b', r).d(1),
				w.D(200, 500, 'r', r).den(1),
				w.D(300, 400, 'x', r).den(1),
				w.D(400, 300, 'c', r).den(1),
				w.D(500, 200, 'l', r).den(1),
				w.D(600, 100, 'l', r).den(1))
		w.gCo().B(w.D(700, 600, 'b', r).den(1),
				w.D(800, 500, 'r', r).den(1),
				w.D(900, 400, 'x', r).den(1),
				w.D(1000, 300, 'c', r).den(1),
				w.D(1100, 200, 'l', r).den(1),
				w.D(1200, 100, 'l', r).den(1))
	})
	_.in(22, function () {
		w.C('y');
		r = 20
		gCo = w.gCo(1, true).B(
				w.D(100, 600, r, 'b').d(1),
				w.D(200, 500, r, 'l').d(1),
				w.D(300, 400, r, 'x').d(1),
				w.D(400, 300, r, 'x').d(1),
				w.D(500, 200, r, 'l').d(1),
				w.D(600, 100, r, 'b').d(1)
		)
		gCo2 = w.gCo(4).B(
				w.D(700, 600, r, 'b').d(1),
				w.D(800, 500, r, 'l').d(1),
				w.D(900, 400, r, 'x').d(1),
				w.D(1000, 300, r, 'x').d(1),
				w.D(1100, 200, r, 'l').d(1),
				w.D(1200, 100, r, 'b').d(1))
	})
}
TCO = GRP = function () {
	W().G(1)//.C('z').pen('welcome to tensor (damping) controller - the timing here is amazing!')
	co = w.tCo()
	co.B(
			r = w.D(100, 100, 'r', 100).lV(10, 20).grp(-1).lD(.2),
			b = w.D(500, 500, 'b', 90).lV(-10, -20).grp(-1).lD(.2),
			y = w.D(300, 300, 'y', 70).lV(-10, -20).grp(-1).lD(.2)
	)
	o = w.D(300, 300, 'o', 70).lV(-10, -20).grp(-1).lD(.2)
	_.t(30, function () {
		var b = w.D(400, 300, 'o', 20)//.lV(10,20).lD(0)//.L(10,20,0)
		b.f().grp(-1)
		co.B(b)
	})
	w.y().grp('-1')
	// w.r_.cl(function(f){f.C('b'); co.xB(f)})
	l = w.m_controllerList.GetBodyList()
}
STABWITHSCORE = BETTERSTAB = STAB = TCO1 = HITS = RTATSHIP = function () {
	W({g: 0})
	w.S(200, 200, 'b', 50, 260)
	w.S(140, 200, 'd', 140, 50)
	co = w.tCo();
	_.t(10, function () {
		co.B(
				w.D(R(1000, 100), 300, 'x', 30).lV(10, 20).lD(0))
	})
	hits = 0
	y = w.y().K('ship').lD(5)
	bg = w.y('b', 500, 300, '-').d(3).lD(2).K('bg').aD(.2)
	bg.rotTowards = function (y) {
		var b = this, a
		a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
		if (y.Y() > b.Y()) {
			a += 180
		}
		b.rt(R(40, a - 20))
	}
	_.ev(.5, function () {
		bg.aV(0);
		bg.rotTowards(y)
	})
	bg.push(50, '+')
	T.t(function () {
		_.t(20, function () {
			bg.I()
		})
	})
	w.b(function (cx) {
		var i
		if (cx.w('ship', 'bg')) {
			i = cx.m().m_points[0].m()
			_.in(.1,
					(
					M.lD(V(i.x, i.y), V(y.X(), y.Y())) >
					M.lD(V(i.x, i.y), V(bg.X(), bg.Y()))
					) ?
							function () {
								hits++;
								w.C('g');
								bg.XY(300, 300);
								y.XY(700, 400)
							}
							:
							function () {
								w.C('p');
								bg.XY(700, 400);
								y.XY(100)
							})
		}
	})
	w.show(function () {
		return 'hits: ' + hits
	})
}
tCo = $pt.tCo
tCo.axis = tCo.SAA = function (axis) {
	var co =
			co.SetAxisAligned(axis)
	return co
}
$tC = $tDC = b2d.tensor = function () {
	var co = new b2d.TDC(), g = G(arguments)
	if (D(g.f)) {
		co.SAA(g.f)
	}
	return co
}
w.tCo = w.ten = w.tens = w.tensor = function () {
	var w = this
	var co = $tDC.apply(null, arguments)
	w.co(co)
	return co
}
TEN = TC1 = function () {
	W0().pen('welcome to tensor (damping) controller')
	y = w.ship()
	co = w.tCo()
	b1 = w.ball(100, 100, 50).lV(10, 20)
	b2 = w.ball(500, 500, 40).lV(-10, -20)
	b3 = w.ball(300, 300, 30).lV(-10, -20)
	co.A(b1, b2, b3)
	_.inT(3, 30, function () {
		var b = w.BALL(400, 300, 20, 'w').lV(10, 20).lD(0)
		co.A(b)
	})
}
//Applies top down linear damping  
// The damping is calculated by multiplying velocity 
// by a matrix in local co-ordinates.
// In fact tensors are merely a generalisation of scalars and vectors; 
// a scalar is a zero rank tensor, 
// and a vector is a first rank tensor.
// The rank (or order) of a tensor is defined 
// by the number of directions
// (and hence the dimensionality of the array) 
// required to describe it.
/*
 Public Properties
 Property	Defined by
 maxTimestep : Number = 0
 Set this to a positive number to clamp the maximum amount of damping done.
 b2TensorDampingController
 T : b2Mat22
 Tensor to use in damping model
 b2TensorDampingController
 Protected Properties
 Show Inherited Protected Properties
 Public Methods
 Show Inherited Public Methods
 Method	Defined by

 SetAxisAligned(xDamping:Number, yDamping:Number):void
 Helper function to set T in a common case
 b2TensorDampingController

 Step(step:b2TimeStep):void
 b2TensorDampingController
 Property detail
 maxTimestep	property
 public var maxTimestep:Number = 0
 Set this to a positive number to clamp the maximum amount of damping done.

 T	property	 
 public var T:b2Mat22
 Tensor to use in damping model

 Method detail
 SetAxisAligned	()	method
 public function SetAxisAligned(xDamping:Number, yDamping:Number):void
 Helper function to set T in a common case

 Parameters
 xDamping:Number

 yDamping:Number
 Step	()	method	 
 public override function Step(step:b2TimeStep):voidParameters
 step:b2TimeStep


 */
SUPERBOUNCYPLAYER=WALLR2= WGCO=BOL2 = function () {W({g: 10, w: 'r2'})
	
	p = w.p().tr().r(40).fr(0)
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
	

}
BOL3=function(){W()


	  _.t(12, function(){     w.D(R(300,100), R(300,100), 'x', 30).r(2)     })

	 arr=[
	 //  w.D(320,600, 'r', 30).fR().d(1) ,
	 b=   w.D(300,120, 'b', 40).r(0).fr(10).fR().d(1) ,
	 w.D(340,200, 'x', 80).r(0).fr(10).fR().d(1) ,
	 w.D(300,340, 'w', 80).fR()//.r(0).fr(10).fR().d(1) ,
	 //  w.D(320,620, 'l', 70).fR().d(1)
	 ]
	 _.e(arr, function(b){ gCo.B( b )   })
	 _.inx(2, function(){
	 w.C('g')
	 _.e(arr, function(b){ gCo.B( b )   })
	 //b.lD(100)
	 //gCo.xB(b)
	 })
	 
 

}
PEN = GRCO=function(){W()
 
	 w.pen('welcome to grav controller - top balls r1, bottom r2(default)')	
	 
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
	
 
	 
	 _.in(15, function(){w.C('y');
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
	 _.in(22, function(){w.C('y');
	
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
	 })   
}
TCO = GRP= function () {
	W().G(1)//.C('z').pen('welcome to tensor (damping) controller - the timing here is amazing!')
	co = w.tCo()
	co.B(
			r = w.D(100, 100, 'r', 100).lV(10, 20).grp(-1).lD(.2),
			b = w.D(500, 500, 'b', 90).lV(-10, -20).grp(-1).lD(.2),
			y = w.D(300, 300, 'y', 70).lV(-10, -20).grp(-1).lD(.2)
	)
	o = w.D(300, 300, 'o', 70).lV(-10, -20).grp(-1).lD(.2)
	_.t(30, function () {
		var b = w.D(400, 300, 'o', 20)//.lV(10,20).lD(0)//.L(10,20,0)
		b.f().grp(-1)
		co.B(b)
	})
	w.y().grp('-1')
	// w.r_.cl(function(f){f.C('b'); co.xB(f)})
	l = w.m_controllerList.GetBodyList()
}
STABWITHSCORE = BETTERSTAB = STAB = TCO1 = HITS=RTATSHIP= function () {
	W({g: 0})
	w.S(200, 200, 'b', 50, 260)
	w.S(140, 200, 'd', 140, 50)
	co = w.tCo();
	_.t(10, function () {
		co.B(
				w.D(R(1000, 100), 300, 'x', 30).lV(10, 20).lD(0))
	})
	hits = 0
	y = w.y().K('ship').lD(5)
	bg = w.y('b', 500, 300, '-').d(3).lD(2).K('bg').aD(.2)
	bg.rotTowards = function (y) {
		var b = this, a
		a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
		if (y.Y() > b.Y()) {
			a += 180
		}
		b.rt(R(40, a - 20))
	}
	_.ev(.5, function () {
		bg.aV(0);
		bg.rotTowards(y)
	})
	bg.push(50, '+')
	T.t(function () {
		_.t(20, function () {
			bg.I()
		})
	})
	w.b(function (cx) {
		var i
		if (cx.w('ship', 'bg')) {
			i = cx.m().m_points[0].m()
			_.in(.1,
					(
					M.lD(V(i.x, i.y), V(y.X(), y.Y())) >
					M.lD(V(i.x, i.y), V(bg.X(), bg.Y()))
					) ?
							function () {
								hits++;
								w.C('g');
								bg.XY(300, 300);
								y.XY(700, 400)
							}
							:
							function () {
								w.C('p');
								bg.XY(700, 400);
								y.XY(100)
							})
		}
	})
	 w.show(function(){return 'hits: '+ hits})
}