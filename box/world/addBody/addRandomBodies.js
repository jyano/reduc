w.rnRecs = w.randRects = function () {
	var that = this
	_.t(30, function (i) {
		that.BRICK(
				M.r() * 1100 + 20,
				M.r() * 150 + 40,
				M.r() * 30 + 15,
				M.r() * 30 + 15
		).K('rR randomRect')
	})
	return this
}
w.rnF = w.randFx = function () {
	return this.dynamic(M.r() * 1000, 100,
			b2d.randomFixture())
}
w.random = w.addRandomBodies = function (howMany) {
	var w = this
	_.t(howMany || 10, function () {
		w.addRandomBody()
	})
	return w
}
w.addTenBalls = function (n) {
	var w = this
	_.t(n || 10, function (i) {
		w.ball(100 + (i * 80), 200)
	})
	return w
}
w.addHundBalls = function (n) {
	var w = this
	_.t(n || 100, function (i) {
		w.BALL(100 + (i * 8), 50, 10)
	})
	return w
}
w.ten = w.addTenBalls = function (n) {
	var w = this
	_.t(n || 10, function (i) {
		w.ball(100 + (i * 80), 200)
	})
	return w
}
w.hun = w.addHundBalls = function (n) {
	var w = this
	_.t(n || 100, function (i) {
		w.ball(100 + (i * 8), 50, 10)
	})
	return w
}
function randBods() {
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
//shB = b2d.DebugDraw.e_shapeBit
//jB = b2d.DebugDraw.e_jointBit
//add random bodies
	w.randRects = function (ob) {
		var that = this
		ob = ob || {}
		var y = ob.y || 0,
				z = N(ob.z) ? ob.z : 1
		_.times(30, function (i) {
			that.rect(
					Math.random() * 1100 + 20,
					(Math.random() * 150 + 40) + y,
					(Math.random() * 30 + 15) * z,
					(Math.random() * 30 + 15) * z
			).stat().K('randomRect')
		})
		return this
	}
	w.addRandomBody = w.randomFixture = function () {
		var body = this.dynamic(Math.random() * 1000, 100,
				b2d.randomFixture())
		return body
	}
	w.random = w.addRandomBodies = function (howMany) {
		howMany = howMany || 10;
		var that = this
		_.times(howMany, function (num) {
			that.addRandomBody()
		})
		return this
	}
	w.addTenBalls = function (num) {
		num = num || 10;
		var that = this
		_.times(num, function (i) {
			that.ball(100 + (i * 80), 200)
		})
		return this
	}
	w.addHundBalls = function (num) {
		num = num || 100;
		var that = this
		_.times(num, function (i) {
			that.circ(100 + (i * 8), 50, 10)
		})
		return this
	}
}