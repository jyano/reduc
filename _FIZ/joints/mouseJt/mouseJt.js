mJD.GT = function () {
	return this.target.Get()
}

mJD.ST = function (a, b) {
	var mJD = this
	mJD.target.Set(  a, b) 
	
	
	return mJD
}

mJD.gT = function () {
	return this.GT().m()
}

mJD.sT = function (a, b) {
v= V(a, b)
	return this.ST(v.d() )
}

mJD.tg = function (x, y) {
	var mJD = this
	return U(x) ? mJD.gT() : mJD.sT(x, y)
}
mJ.GT= function () {
	return this.GetTarget() 
}
mJ.ST = function (a, b) {
	var j = this
	j.SetTarget( O(a)?a:V(a, b))
	return j
}
mJ.gT = function () {
	return this.GT().m()
}
mJ.sT = function (a, b) {
	return this.ST(V(a, b).d()) 
}
mJ.tg = function (x,y) {var mJ = this
	return U(x) ? mJ.gT() : mJ.sT(x,y)
}
 

_$mJ = function (a, b) {
	var g = G(arguments)
	var mJD = new b2d.MJD()
	if (a) {
		mJD.A(a)
	}
	if (b) {
		mJD.B(b)
	}
	return mJD
}
$mJ = function (b, tX, tY) {
	if (O(tX)) {
		tY = tX.y;
		tX = tX.x
	}
	var mJD = _$mJ()
	mJD.bodyA = w.GGB()
	mJD.bodyB = body
	mJD.target = V(tX, tY)
	mJD.collideConnected = true
	mJD.maxForce = 1000 * b.GM()
	mJD.dampingRatio = 0
	return mJD
}
$mJ1 = function (ground, b, tg, damp, maxForce) {
	var mJD = new b2d.Joints.b2MouseJointDef()
	mJD.bodyA = ground
	if (b) {
		mJD.bodyB = b
	}
	if (U(b)) {
		alert('body required!');
		return false
	}
	if (tg) {
		mJD.target = tg
	} //target
	mJD.dampingRatio = N(damp) ? damp : 0
	mJD.maxForce = N(maxForce) ? maxForce : b.GM() * 1000
	//mJD.collideConnected = true
	return mJD
}
w._mJ = function (bod, x, y) {
	var mj = $mJtD(this.ground(), bod)
	if (N(x)) {
		mj.targ(x, y)
	}
	return mj
}
w.mJ = function () {
	var w = this, g = G(arguments), o
	o = g.O ? g.f : {b: g.f, x: g.s, y: g.t, dR: g.fo, mF: g.fi, fq: g.si}
	o.dR = N0(o.dR)
	o.mF = N(o.mF, 5000000) //mJD.maxForce = 1000 * o.b.GetMass()
	var mJD = w._mJ(o.b, o.x, o.y)
	mJD.dmpRat(o.dR).mxFo(o.mF)
	if (N(g.si)) {
		mJD.freq(g.si)
	}
	return w.J(mJD)
}
w.mJ = function (o) {
	var w = this
	if (o.m == 0) {
		return w
	}
	o = o || {}
	$.M()
	cjs.tick(function () {
		if (w.mj) {
			w.mj.tg(_)
		}
	})
	$.oMU(function () {
		w.M()
	})
	$.oMD(function (x, y) {
		w.XY(x, y,
				function (f) {
					if (f.ofClass(o.m)) {
						w.mj = w.m(f.body(), _)
					}
				})
	})
	return w
}
w.mJ = function (b) {
	var w = this, g = G(arguments)
	if (g.u) {
		return 0
	}
	var j = w.CJ(
			$mJD(w.GGB(), b).sT(mX, mY)
	)
	j.mF(300)// * b.mass()
	j.mF(200000)
	j.fq(.5)
	j.dm()
	// default freqency is 5!!, maxF 30000, dmRat .7
	//$l('fq: '+ j.fq()+ ', dm: ' + j.dm()+ ', mF: ' + j.mF())
	return j
}
w.wMouse = function () {
	var w = this
	$.oMD(function (x, y) {
		var p = w.sToW(x, y)
		w.mx = p.x;
		w.my = p.y
	})
	$.oMM(function (x, y) {
		var p = w.sToW(x, y)
		w.mx = p.x;
		w.my = p.y
	})
	//  cjs.tick(function(){    if(w.mj){w.mj.tg(w.mx, w.my) }})
	return w
}
w.wMouseJ = function (o) {
	var w = this
	w.md(function (e) {
		w.XY(e.x, e.y, function (f) {
			if (f.ofClass(o.m)) {
				w.mj = w.m(f.body(), e.x, e.y)
			}
		})
	})
	cjs.tick(function () {
		if (w.mj) {
			w.mj.tg(w.mx, w.my)
		}
	})
	$.oMU(function () {
		w.M()
	})
	return w
}
w.mouseJAt = function (p, kind) {
	var w = this, mj
	if (N(p)) {
		p = V(p, kind)
	}
	w.XY(p.x, p.y, function (f) {
		mj = f.body().mouseJoint(p)
	})//, kind
	return mj
}
w.m = w.mou = function (b, x, y) {
	var w = this, j, p
	mJD = new b2d.Joints.b2MouseJointDef()
	mJD.bodyA = w.GetGroundBody()
	mJD.bodyB = b
	mJD.target = V(x, y).div()
	mJD.dampingRatio = 0
	mJD.maxForce = 5000
	mJD.collideConnected = true
	j = w.J(mJD)
	j.tg = function (x, y) {
		var j = this
		if (U(x)) {
			return j.GetTarget().mult()
		}
		j.SetTarget(V(x, y).div())
		return j
	}
	return j
}
b.mJ = b.mouse = b.mouseJ = b.mouseJoint = function (x, y) {
	var b = this, w = b.wor(),
			v = V(x, y),
			mj = w.mouseJ(b, v)
	return mj
}
WBF = function () {
	W()
	w.log = 1
	w.D(500, 300).f([['b', 100]])
	b = w.D(400, 300)
	//b.f('r', 100,'-')
	b.f([
		['r', 100, '-']
	])
}
/*


 8.10 Mouse Joint

 The mouse joint is used in the testbed to manipulate bodies with the mouse. It attempts to drive a point on a body towards the current position of the cursor. There is no restriction on rotation.

 The mouse joint definition has a target point, maximum force, frequency, and damping ratio. The target point initially coincides with the body’s anchor point. The maximum force is used to prevent violent reactions when multiple dynamic bodies interact. You can make this as large as you like. The frequency and damping ratio are used to create a spring/damper effect similar to the distance joint.

 Many users have tried to adapt the mouse joint for game play. Users often want to achieve precise positioning and instantaneous response. The mouse joint doesn’t work very well in that context. You may wish to consider using kinematic bodies instead.


 */