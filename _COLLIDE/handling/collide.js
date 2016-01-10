_$klass = function () {//o._K = _.wo(o._K, k) //double protection:
	o.rpK_ = function (k, k1) {
		var o = this
		o.K().splice(o.nK(k), 1, k1)
		return o
	}
}

KTX = function () {
	W()
	b = w.A($dB(300, 300))
	f = core = b.f($cF(40)).K('core')
	f1 = b.f($pF(30, 300).mS()).K('arm')
	$l('f is the core fixtuer')
	$l('first the yes"s')
	$l('f.is(f): ' + f.is(f))
	$l('f.has("core"): ' + f.hK('core'))
	$l("f.of('core: ')" + f.of('core'))
	$l("f.is('core: ')" + f.is('core'))
	$l("f.of()" + f.of())
	$l('noos')
	$l("f.is()" + f.is())
	$l('f.is(f1): ' + f.is(f1))
	$l('f.has("arm"): ' + f.hK('arm'))
	$l("f.of('arm: ')" + f.of('arm'))
	$l("f.is('arm: ')" + f.is('arm'))
	core.K('hello neato').K('cooool')
			.K('neato', 'awesome')
	$l('ks: ', core.K())
	function wire() {
		w.b(function (cx) {
			//cx.ks()
			if (cx.w('arm')) {
				b.lV(10, 0);
				w.C($r())
			}
			else if (cx.w('core', 'roof')) {
				b.stat()
			}
		})
		w.roof.K('roof')
	};
	wire()
} 
b2d.manager = b2d.contactManager = b2d.cM = function () {//used?
	var m = new BXD.b2ContactManager
	m.c = m.cl = m.Collide
	m.a = m.aP = m.AddPair
	m.f = m.fNC = m.FindNewContacts
	m.d = m.ds = m.Destroy
	return m
}
b2d.cxFilt = b2d.filter = b2d.f = function () {//used?
	var f = new BXD.b2ContactFilter
	f.rC = f.RayCollide
	f.sC = f.ShouldCollide
	return f
}
b2d.filt = b2d.filterData = function () {
	var d = new b2d.Dynamics.b2FilterData()
	d.gI = function (a) {
		if (U(a)) {
			return d.groupIndex
		}
		d.groupIndex = a;
		return d
	}
	d.cat = function (a) {
		if (U(a)) {
			return d.categoryBits
		}
		d.categoryBits = a;
		return d
	}
	d.mask = function (a) {
		if (U(a)) {
			return d.maskBits
		}
		d.maskBits = a;
		return d
	}
	return d
} 
w.collide = w.cl = function () {
	var w = this, g = G(arguments)
	if (g.F) {
		w.b(function (cx) {
			_.b(g.f, cx.A())(cx.B(), cx)
		})
	}
	else {
		w.b(function (cx) {
			cx.w(g[0], g[1], g[2])
		})
	}
	return w
}
w.clXXX = function (k1, k2, flag) {
	var w = this
	var k = k1 + k2
	if (F(k2)) {
		return w.clAny(k1, k2)
	}
	w.b(function (cx) {
		if (cx.w(k1, k2)) {
			w.flag(k, cx)
		}
	})
	$t(function () {
		var cx = w.flagged(k)
		if (cx) {
			flag(cx)
		}
	})
}
w.clA = w.clAny = function (k, flag) {//can combine this with above
	var that = this
	var w = this
	w.b(function (cx) {
		if (cx.w(k)) {
			w.flag(k, cx)
		}
	})
	$t(function () {
		var cx = w.flagged(k);
		if (cx) {
			flag(cx)
		}
	})
}
f.collide = f.cl = function (k, fn) {
	var f = this
	//ultimate func for FIXTURE COLL
// you can specify what happens when a fixture hits:
//ANYTHING
// body/fixt of certain kind
// specific fixt
// specific body
//but it its callback ALWAYS passed back the other fixt that was actually hit
// and 'this' is set to THIS fixt within the cb
//should cover class AND fixt AND body cases!!!
	if (F(k)) {
		fn = k;
		k = ''
	}
	fn = _.b(fn, f)
	w.b(function (cx) {
		var fA = cx.A(), fB = cx.B()
		if (f.of(fA) && fB.of(k)) {
			fn(fB, cx)
		}
		if (f.of(fB) && fA.of(k)) {
			fn(fA, cx)
		}
	})
	return f
}
b.fK = function (k) {
	var b = this
	var fx = null
	b.fs(function (f) {
		if (f.has(k)) {
			fx = f
		}
	})
	return fx
}  