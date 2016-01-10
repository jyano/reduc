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