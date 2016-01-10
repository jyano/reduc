$PT();
// controller-edge is a body-controller pair linked both to other bodies for that controller.. and to other controllers of that body!!! 
b.eachCx = function (fn) {var b = this, otherFx, cx  //  OTHER way to check contacts !!!!!! 
	
	if (!(cx=b.cx())) {
		$l('b.eachCx : no contacts');
		return false
	}
	while (cx = cx.contact) {
		//find the fixture whose body is not b
		  otherFx = (cx.bA()==b)? cx.fB() : cx.fA()
		//and call func on IT (along with the actual cx)
		fn(otherFx, cx)
		cx  = cx.N()
	} //b.col2 = 	
}

		
w.bindCo = function () {var w=this, g=arguments
	return w.b(function (cx) {
		cx.bindCo.apply(cx, g) })  }

ACO1 = UPDOWN = UDO = function () {W0().db().C('g');     y = w.ship(300, 50).lD(5);    co1 = w.acc(0, -50);   co2 = w.acc(0, 50)
	
	w.rectSensor(250, 300, 600, 600, 'o').K('co1');   w.rectSensor(950, 300, 600, 600, 'o').K('co2');  _.t(20, function () {  w.circ(300, 300, 30, 'b')  })
	
	w.bindCo('co1', 'co2')

	w.end(function (cx) {
		if (  cx.w('co1')) { f.cancel()}
		if (  cx.w('co2')) {}
	})
	// fixt.cancel()
}
CONTLIST = CLS = function () {W({}).db().C('p');   co1 = w.acc(0, -50);   co2 = w.acc(0, -50);
	
	s1 = w.sensorBucket(320, 300, 'co1');  s2 = w.sensorBucket(700, 300, 'co2')
	
	w.circ(150, 100, 30, 'w'); w.circ(200, 100, 30, 'd');w.circ(250, 100, 30, 'r');w.circ(350, 100, 30, 'g');  w.circ(400, 100, 30, 'o');w.circ(450, 100, 30, 'w')
	
	w.bindCo('co1', 'co2')
	
	w.end(function (cx) {var f; if (f = cx.w('co2')) { f.cancel() }})
	
	_.in(.5, function () {
		y = w.ship(300, 50)
		_.ev(1, function () {
			w.circ(300, 100, 10, 'y');   w.circ(760, 100, 10, 'b'); y.broadcastKill()
		})
	})
}

 
COEDGE = CED = function () {W().db() //gives u a controller-edge 
	w.rectStat(320, 480, 640, 20); w.rectStat(320, 340, 320, 20);
	w.rectStat(170, 230, 20, 200); w.rectStat(470, 230, 20, 200);
	w.rectSensor(320, 245, 280, 170)
	co = w.buoy(0, -1, 5, 2).de(2).os(-6)
	w.$eD(function(b){b.eachCx(function (cx) {
		if (cx.aSr() && cx.bNoCo()) {cx.bBy(co)}
		if (cx.bSr() && cx.aNoCo()) {cx.aBy(co)}})
	})
	
	_.in(3, function () {b = w.circ(300, 40, 8, 'r'); c = b.cx()})     
	
}
// if(b.co()){ co.remove(b) } // if one is a sensor AND the other has no controllers  // then add the other one to the controller
function cxCos() {
	cx.bCo = cx.bindCo = cx.bindController = function (what) {
		var cx = this, fixt
		//if any fixt collides with a certain kind
		//switch to the controller with that name
		_.each(arguments,
				function (what) {
					if (fixt = cx.with(what)) {
						fixt.switchTo(window[what])
					}
				})
	}
	cx.aCo = cx.aBy = function (co) {
		var cx = this, bB = cx.bB();
		return co ? bB.a2(co) : bB.hasCo()
	}
	cx.bCo = cx.bBy = function (co) {
		return co ? this.bA().a2(co) : this.bA().hasCo()
	}
	cx.aNoCo = function () {
		return !this.aBy()
	}
	cx.bNoCo = function () {
		return !this.bBy()
	}
	cx.bCo = cx.bindCo = function () {
		var cx = this//if any fixt collides with a certain kind
// switch to the controller with that name
		G(arguments).e(function (k) {
			cx.w(k, function () {
				f.switchTo(window[k])
			})
		})
	}
}
w.bindCo = function () {
	var g = G(arguments)
	return this.b(function (cx) {
		cx.bCo.apply(cx, g)
	})
}
w.bindCo = function () {
	var args = arguments
	this.beg(function (cx) {
		cx.bindCo.apply(cx, args)
	})
	return this
}
f.switchTo = function (co) {
	this.body().switchTo(co);
	return this
}
//CHANGESCONTROLLERBASEDONSENSORBRILLIANT=
//gives u a controller-edge, which is a body-controller pair
//it is linked both to other bodies for that controller..
//and to other controllers of that body!!!
//lets focus on other bodies first....
cx.bindController = cx.bCo = function (k) {
	var cx = this, g = G(arguments), f
	//if any fixt collides with a certain kind
	//switch to the controller with that name
	g.e(function (k) {
		cx.w(k, function () {
			this.to(window[k])
		})
	})
}
//CHANGESCONTROLLERBASEDONSENSORBRILLIANT=
//gives u a controller-edge, which is a body-controller pair
//it is linked both to other bodies for that controller..
//and to other controllers of that body!!!
//lets focus on other bodies first....
cx.bindController = cx.bCo = function (k) {
	var cx = this, g = G(arguments), f
	//if any fixt collides with a certain kind
	//switch to the controller with that name
	g.e(function (k) {
		cx.w(k, function () {
			this.to(window[k])
		})
	})
}
w.bindCo = function () {
	var g = G(arguments)
	return this.b(function (cx) {
		cx.bCo.apply(cx, g)
	})
}
//// bindCo ******* was //w.bCo= (now that is bu controller)
OLD = function () {
	W([2000, 1500, 2000, 1500]).G(200).C('b')
	//w.b(b, function () {b1 = w.S(R(500, 50), R(w.h, -50), 'y', 80).r(.8)})
	//w.end(b1, function () { b1.kill()  })
	/*
	
	 w.D(700, 200, 'o', [
	 [40],
	 b2d.cir(5).bit(1, 2), //cat is 1, but will only collide with 2's
	 b2d.cir(10, 100, 100, '-'),
	 ['w', b2d.cir(10, 100, -100)],
	 b2d.rec(10, 300, '-'), //sets as sensor
	 ['b', b2d.rec(300, 10)],
	 ['w', [100, 0], [150, -100], [200, 20]],
	 [[200, 0], [250, -100], [300, 20], 'arr'], ['p', 50]
	 ])
	 w.D(300, 400, 'r', [
	 b2d.rec(200, 100),
	 ['g', b2d.cir(40, 100, 100).K('excited'), 'oook'],
	 [5, 100, 200, 0, 'orgasmic excited']
	 ])
	
	
	
	
	
	
	 f = b.f().K('happy')  //apparently b.fixt is LIFO
	 f.W().dot('b')
	 $l('f is f: ' + f.is(f))
	 $l('f is happy: ' + f.is('happy'))
	 f.N().K('excited')// bug: k not getting communicated above (in the b def func)
	 $l('f.N is excited: ' + f.N().is('excited'))
	 $l('f is orgasmic: ' + f.is('orgasmic'))
	 */
	/*
	
	
	 //not working
	 b = w.ball()
	 b1 = w.ball(300,300)
	 w.b(function(cx){cx.w(b, b1, function(b1, cx){
	 var b=this,pt,v1,v2,temp,i
	 pt = cx.cen()
	 v1 = b.lVW(pt)
	 v2 = b1.lVW(pt)
	 temp= w.D(600,300,'r',10)
	 $.in(.5,function(){temp.kill()})
	 i = temp.I(v1.x - v2.x, v1.y-v2.y)
	 })})
	
	 */
	// set b2's linVel to b's linWorVel (scaled down by 20) // $l(b.lV());
	// b3= w.ball(100,100,10); $l('vel: ' + b3.lV().x); $l('velW: ' + b3.lVW().x);
	// $l('velL: ' + b3.lVL().x)
}
