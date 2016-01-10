$t= function(fn){
	T.t(fn)
}

BIKE = function () {
	W([1200, 600, 2000, 600], {})
	//yy=w.y().aD(5000)//.fixRot()
	dir = 12
	car = w.D(300, 300, 'r', [
		[200, 20],
		[20, 165, -50, -50, 45],
		[20, 165, 50, -50, -45]
	]).fr(5).track()//.lD(1000)
	_.t(30, function () {
		w.me(R(9000, 500), 100, R(2, .5))
	})
	wh = w.D(250, 300, 'w', 60).C('b').bS('me', .6)//.lD(5).aD(5)
			.fr(10).r(.8)
	wh1 = w.D(250, 300, 'w', 60).C('g')//.lD(5).aD(5)
			.bS('me', .6).r(.8).fr(10)
	//.aD(10).fr(2)
	//w.b_.fr(100)
	j = w.rJ(
			wh, //.lD(100).aD(100).fr(100),
			car,
			0,
			0,
			100,
			0
	)//.M(.1)
	j1 = w.rJ(wh1, car, 0, 0, -100, 0)//.M(.5)
	// j.mt(-50)
	$t(function () {
		var K = $.K
		car.I(0, 5000)
		if (K.r) {
			
			// wh.ApplyTorque(5500)
			j.mt(-500)
			j1.mt(-500)
		}
		else if (K.l) {
			// wh.ApplyTorque(-3500)
			j.mt(500)
			j1.mt(500)
		}
		else {
			j.mt(0)
		}
		if (K.u) {
			wh.ApplyTorque(1500)
		}
		if (K.d) {
			j.SetMotorSpeed(0)
			j1.SetMotorSpeed(0)
			wh1.ApplyTorque(-500)
		}
	})
	//car.aD(1000).lD(1000)
}




BIK  = function () {W().Y()
	 
	 
	w.D(300, 300, 'r', [
	
		[200, 20],
		[20, 165, -50, -50, 45],
		[20, 165, 50, -50, -45]
	]) 
	
	
	
}
$t = function (fn) {
	T.t(fn)
}
BIKE = function () {
	W([1200, 600, 2000, 600], {})
	//yy=w.y().aD(5000)//.fixRot()
	dir = 12
	car = w.D(300, 300, 'r', [
		[200, 20],
		[20, 165, -50, -50, 45],
		[20, 165, 50, -50, -45]
	]).fr(5).track()//.lD(1000)
	_.t(30, function () {
		w.me(R(9000, 500), 100, R(2, .5))
	})
	wh = w.D(250, 300, 'w', 60).C('b').bS('me', .6)//.lD(5).aD(5)
			.fr(10).r(.8)
	wh1 = w.D(250, 300, 'w', 60).C('g')//.lD(5).aD(5)
			.bS('me', .6).r(.8).fr(10)
	//.aD(10).fr(2)
	//w.b_.fr(100)
	j = w.rJ(
			wh, //.lD(100).aD(100).fr(100),
			car,
			0,
			0,
			100,
			0
	)//.M(.1)
	j1 = w.rJ(wh1, car, 0, 0, -100, 0)//.M(.5)
	// j.mt(-50)
	$t(function () {
		var K = $.K
		car.I(0, 5000)
		if (K.r) {
			
			// wh.ApplyTorque(5500)
			j.mt(-500)
			j1.mt(-500)
		}
		else if (K.l) {
			// wh.ApplyTorque(-3500)
			j.mt(500)
			j1.mt(500)
		}
		else {
			j.mt(0)
		}
		if (K.u) {
			wh.ApplyTorque(1500)
		}
		if (K.d) {
			j.SetMotorSpeed(0)
			j1.SetMotorSpeed(0)
			wh1.ApplyTorque(-500)
		}
	})
	//car.aD(1000).lD(1000)
}
BIK = function () {
	W().Y()
	b = w.D(300, 300, 'r', [
		[200, 20],
		[20, 165, -50, -50, 45],
		[20, 165, 50, -50, -45]
	])
}