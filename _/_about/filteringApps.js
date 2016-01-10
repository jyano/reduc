function bitFl(){
	BITS = function () {
		b2d.mW()
		var cir = b2d.circ(80).bits(2, 5), //collides with 4,1
				rec = b2d.poly(60, 90).bits(4, 7)  // collides with 4,2,1
		w.dyn(300, 300, cir)
		w.dyn(400, 30, cir)
		w.dyn(300, 300, rec)
		w.dyn(400, 300, rec)
	}
	DYNAMICFILTER = function () {
		w = b2d.W().debug()
		//Changing the collision filter at run-time
		//You can change each of the categoryBits, maskBits, groupIndex
		// by setting a new b2Filter in the fixture.
		// Quite often you only want to change one of these,
		// so it's handy to be able to get the existing filter first,
		// change the field you want, and put it back.
		// If you already have a reference to the fixture you want to change, this is pretty easy:
		//get the existing filter
		b = w.circ(300, 300, 200, 'b').rest(4).I(100, 0)
		fixt = b.list()
		setTimeout(function () {
			filter = fixt.GetFilterData()
			filter.categoryBits = 0
			// filter.maskBits = ...;
			// filter.groupIndex = ...;
			fixt.SetFilterData(filter)  //and set it back
			w.dot(100, 100)
		}, 2000)
	}
}
 function groupFiltering(){
	 GRP = function () {
		 W(20)
		 w.pen('things dont collide with their own kind..')
		 _.t(4, function () {
			 w.D(M.r() * 400, M.r() * 300, $cF(80).cat(2).gr(-3))
					 .re(1).I(100, 100)
		 })
		 _.t(4, function () {
			 w.D(M.r() * 400, M.r() * 300, $rF(120, 120).gr(-4)).re(1).I(100, 100)
		 })
		 _.t(5, function () {
			 w.ship().gI(-5)
		 })
		 _.t(1, function () {
			 w.p().con('imp').gI(-5)
		 })
	 }
	 DYNFILT = FIL = function () {
		 W()
		 f = w.ball(300, 300, 50).re(4).I(1000, 300).f()
		 _.in(2, function () {
			 flD = f.flD()
			 flD.cB(0)
			 f.SFD(flD)
		 })
	 }
	 FLT = function () {
		 W()
		 w.D(300, 300,
				 $cF(80).bt(2, 5))  // colls 4,1
		 w.D(300, 300,
				 $rF(60, 90, 0, 40, 10).bt(8, 3)) //colls 2,1
		 w.D(400, 300,
				 $cF(80).cat(2).gr(-3)) //cat 1
		 w.D(400, 300,
				 $rF(60, 90, 0, 40, 10).gr(-3)) //cat 1
	 }
	 BIT = function () {
		 W()
		 cir = $cF(80).cat(2).msk(1, 4)
		 rec = $rF(60, 90).cat(4).msk(1, 2, 4)
		 cir2 = $cF(12).cat(4).msk(2, 4)
		 w.D(300, 300, cir)
		 w.D(400, 30, cir)
		 w.D(300, 300, rec)
		 w.D(400, 300, rec)
		 _.t(50, function () {
			 w.D(300, M.r() * 400 + 100, cir2)
			 w.D(250, M.r() * 400 + 100, cir2)
			 w.D(500, M.r() * 400 + 100, cir2)
		 })
	 }
	 CAT = function () {
		 W([800, 800], {g: 50}).C('z')
		 //g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
		 // b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
		 w.t_.bit(1, [8])
		 w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		 w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		 w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		 _.t(38, function () {
			 w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		 })
		 y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
		 //together, same with walls
		 // w.D(300,300,'o',183,183)//.grp(-3)
		 // w.D(300,600,'o',100).cat(2)//.grp(-3)
		 //w.D(600,600,'u',150).r(1).I(100,0).cat(0)
		 //w.D(600,600,'b',80).bit(2,[1,4])
		 //w.D(600,600,'p',60,90).bit(4,[1,2,4])
		 // w.D(600,600,'r',183,183).bit(4,[1,2,4])
	 }
	 ROOM3D = BOUNCELAY = function () {
		 W([800, 800], {g: 50}).C('z')
		 //g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
		 // b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
		 w.t_.bit(1, [8])
		 w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		 w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		 w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		 _.t(38, function () {
			 w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		 })
		 y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
		 //together, same with walls
		 // w.D(300,300,'o',183,183)//.grp(-3)
		 // w.D(300,600,'o',100).cat(2)//.grp(-3)
		 //w.D(600,600,'u',150).r(1).I(100,0).cat(0)
		 //w.D(600,600,'b',80).bit(2,[1,4])
		 //w.D(600,600,'p',60,90).bit(4,[1,2,4])
		 // w.D(600,600,'r',183,183).bit(4,[1,2,4])
	 }
	 CAT = function () {
		 W([800, 800], {g: 50}).C('z')
		 //g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
		 // b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
		 w.t_.bit(1, [8])
		 w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		 w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		 w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		 _.t(38, function () {
			 w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		 })
		 y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
		 //together, same with walls
		 // w.D(300,300,'o',183,183)//.grp(-3)
		 // w.D(300,600,'o',100).cat(2)//.grp(-3)
		 //w.D(600,600,'u',150).r(1).I(100,0).cat(0)
		 //w.D(600,600,'b',80).bit(2,[1,4])
		 //w.D(600,600,'p',60,90).bit(4,[1,2,4])
		 // w.D(600,600,'r',183,183).bit(4,[1,2,4])
	 }
	 ROOM3D = BOUNCELAY = function () {
		 W([800, 800], {g: 50}).C('z')
		 //g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
		 // b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
		 w.t_.bit(1, [8])
		 w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		 w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		 w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		 _.t(38, function () {
			 w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		 })
		 y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
		 //together, same with walls
		 // w.D(300,300,'o',183,183)//.grp(-3)
		 // w.D(300,600,'o',100).cat(2)//.grp(-3)
		 //w.D(600,600,'u',150).r(1).I(100,0).cat(0)
		 //w.D(600,600,'b',80).bit(2,[1,4])
		 //w.D(600,600,'p',60,90).bit(4,[1,2,4])
		 // w.D(600,600,'r',183,183).bit(4,[1,2,4])
	 }
 }