// world mouse down vs canvas mouse down!!! 
// canvas mouse down just uses $.oMD

MJWORKS = function () {
	w = b2d.W({
		//g:0
	})
	b = w.B(600, 300, 'r', 100).den(1).rest(.5)
	joint = false;
	$.mousemove(function (e) {
		m(e)
		if (joint) {
			j.tg(mx, my)
		}
	})
	$.mousedown(function (e) {
		m(e)
		j = w.mou(b, V(mx, my).div());
		joint = true
	});
	$.mouseup(function () {
		w.j(j);
		joint = false
	})
	function m(e) {
		mx = e.clientX;
		my = e.clientY
	}
}
$.oMM = function (fn) {
	this.mousemove(function (e) {
		fn(e.clientX, e.clientY, e)
	})
	return this
}
$.oMD = function (fn) {
	var $ = this
	$.mousedown(function (e) {
		fn(e.clientX, e.clientY, e)
	})
	return $
}
$.oMU = function (fn) {
	this.mouseup(function (e) {
		fn(e.clientX, e.clientY, e)
	})
	return this
}
$.M = function () {
	var $ = this
	$.oMD(function (x, y) {
		_.x = x;
		_.y = y
	})
	$.oMM(function (x, y) {
		_.x = x;
		_.y = y
	})
	cjs.tick(function () {
		if (w.mj) {
			w.mj.tg(_)
		}
	})
	return this
}
$.M0 = function () {
	var $ = this
	$.oMD(function (x, y) {
		_.x = x;
		_.y = y
	})
	$.oMM(function (x, y) {
		_.x = x;
		_.y = y
	})
	cjs.tick(function () {
		if (w.mj) {
			w.mj.tg(_)
		}
	})
	return this
}
MJYANOSCRIPT = function () {
	w = b2d.W()
	b = w.B(600, 300, 'r', 50).den(1).rest(.5)
	$.M()
	$.oMM(function () {
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
w.mTrack = function (b) {
	var w = this
	$.oMM(function () {
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
	return w
}
w.mTrackTransport = function (b) {
	var w = this
	$.oMM(function () {
		if (w.mj) {
			w.mj.tg(_)
		}
	})
	$.oMU(function () {
		w.M()
	})
	$.oMD(function (x, y) {
		b.XY(x, y)
		w.mj = w.m(b, _)
	})
	return w
}
function createMouse(e) {
	$l('createMouse')
	var body = GetBodyAtMouse()
	if (body) {
		$l('found body')
		var mouseJointDef = $mJtD(w.GetGroundBody(), body)
		mouseJointDef.target.Set(mouseX / 30, mouseY / 30)
		mouseJointDef.maxForce = 30000;
		//mouseJointDef.timeStep = m_timeStep;
		mouseJoint = w.CreateJoint(mouseJointDef)
	}
}
function destroyMouse(e) {
	if (mouseJoint) {
		w.DestroyJoint(mouseJoint);
		mouseJoint = null
	}
}
function GetBodyAtMouse(includeStatic) {
	$l('getBodyAtMouse')
	var mouseXWorldPhys = mouseX / 30;
	var mouseYWorldPhys = mouseY / 30;
	mousePVec.Set(mouseXWorldPhys, mouseYWorldPhys);
	var aabb = new b2AABB();
	aabb.lowerBound.Set(mouseXWorldPhys - 0.001, mouseYWorldPhys - 0.001);
	aabb.upperBound.Set(mouseXWorldPhys + 0.001, mouseYWorldPhys + 0.001);
	var shapes = []
	var count = w.QueryAABB(aabb, shapes)
	var bod = null;
	_.t(count, function (i) {
		if (shapes[i].GetBody().IsStatic() == false || includeStatic) {
			var tShape = shapes[i]
			var inside = tShape.TestPoint(tShape.GetBody().GetXForm(), mousePVec);
			if (inside) {
				body = tShape.GetBody()
				//	break;
			}
		}
	})
	return body;
}
function createMouse(e) {
	var body = GetBodyAtMouse()
	if (body) {
		$l('found body')
		var mouseJointDef = $mJtD(w.GetGroundBody(), body)
		mouseJointDef.target.Set(mouseX / 30, mouseY / 30)
		mouseJointDef.maxForce = 30000;
		//mouseJointDef.timeStep = m_timeStep;
		mouseJoint = w.CreateJoint(mouseJointDef)
	}
}
function destroyMouse(e) {
	if (mouseJoint) {
		w.DestroyJoint(mouseJoint);
		mouseJoint = null
	}
}
function GetBodyAtMouse(includeStatic) {
	$l('getBodyAtMouse')
	var mouseXWorldPhys = mouseX / 30;
	var mouseYWorldPhys = mouseY / 30;
	mousePVec.Set(mouseXWorldPhys, mouseYWorldPhys);
	var aabb = new b2AABB();
	aabb.lowerBound.Set(mouseXWorldPhys - 0.001, mouseYWorldPhys - 0.001);
	aabb.upperBound.Set(mouseXWorldPhys + 0.001, mouseYWorldPhys + 0.001);
	var shapes = []
	var count = w.QueryAABB(aabb, shapes)
	var bod = null;
	_.t(count, function (i) {
		if (shapes[i].GetBody().IsStatic() == false || includeStatic) {
			var tShape = shapes[i]
			var inside = tShape.TestPoint(tShape.GetBody().GetXForm(), mousePVec);
			if (inside) {
				body = tShape.GetBody()
				//	break;
			}
		}
	})
	return body;
}
function alpha() {

//if (this.log) {$l('w.mJ')};  make function class with logging?  wrap all my functions...
	mJ.ancA = function () {
		return this.GetAnchorA()
	}
	mJ.ancB = function () {
		return this.GetAnchorB()
		// this.m_bodyB.GetWorldPoint(this.m_localAnchor)
	}
	mJ.getImp = function () {
		return this.m_impulse
	}
	mJ.getMass = function () {
		return this.m_mass
	}
	mJ.reacFo = function (fo) {
		if (U(fo)) {
			return GetReactionForce()
		}
		this.SetReactionForce(fo)
		return this
	}
	mJ.getBeta = function () {
		return this.m_beta
	}
	mJ.getGamma = function () {
		return this.m_gamma
	}
}
BOXMOUSEJT = BMJ = function () {
	var mouseJoint
	m_iterations = 10
	m_timeStep = 1 / 30
	w = $bW().sDD($dD($cv = $.c('z', 1800, 1500)))
	_.ev(.1, function () {
		if (mouseJoint) {
			var mx = mouseX / 30;
			var my = mouseY / 30;
			var v = V(mx, my)
			mouseJoint.SetTarget(v)
		}
		w.go(1 / 5, '+')
	})
	$bi()
	_.ev(2, function () {
		$ba()
	})
	mousePVec = V()
	//stage.MD(createMouse);
	//stage.MU(destroyMouse);
	$cv.mousedown(function (e) {
		$l('mousedown')
		mouseX = mx = e.clientX
		mouseY = my = e.clientY
		createMouse(e)
	})
}
function boxMouse_() {
	w.$ = function (fn) {
		var w = this
		w.UI().click(function (e) {
			fn({x: w.mx, y: w.my, e: e})
		})
		return w
	}
	w.$$ = function (fn) {
		var w = this
		w.UI().dblclick(function (e) {
			fn({x: w.mx, y: w.my, e: e})
		})
		return w
	}
	w.mm = function (fn) {
		var w = this, g = G(arguments)
		$.mousemove(function (e) {
			var o = {
				x: w.mx,
				y: w.my,
				X: e.clientX,
				Y: e.clientY,
				e: e
			}
			fn(o)
		})
		return w
	}
	w.md = function (fn) {
		var w = this
		w.i.c.mousedown(function (e) {
			var o = {x: w.mx, y: w.my, X: e.clientX, Y: e.clientY, e: e}
			w.q(w.mx, w.my, function (f) {
				if (f) {
					o.f = f;
					o.b = f.B()
				}
			})
			fn(o)
		})
		return w
	}
	w.mu = function (fn) {
		var w = this, $cv = $(w.i.canvas)
		$cv.mouseup(function (e) {
			fn({
				x: w.mx,
				y: w.my,
				e: e
			})
		})
		return w
	}
	w.mdq = function (fn) {
		var w = this
		w.md(function (e) {
			w.q(e.x, e.y, function (f) {
				fn(f, e)
			})
		})
		return this
	}
	w.e$ = function () {
		var g = G(arguments), o
		o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
		this.e(function (b) {
			if (b.of(o.k)) {
				b.$(o.fn)
			}
		})
		return this
	}
	BOXMOUSEJT = BMJ = function () {
		var mouseJoint
		m_iterations = 10
		m_timeStep = 1 / 30
		w = $bW().sDD($dD($cv = $.c('z', 1800, 1500)))
		_.ev(.1, function () {
			if (mouseJoint) {
				var mx = mouseX / 30;
				var my = mouseY / 30;
				var v = V(mx, my)
				mouseJoint.SetTarget(v)
			}
			w.go(1 / 5, '+')
		})
		$bi()
		_.ev(2, function () {
			$ba()
		})
		mousePVec = V()
		//stage.MD(createMouse);
		//stage.MU(destroyMouse);
		$cv.mousedown(function (e) {
			$l('mousedown')
			mouseX = mx = e.clientX
			mouseY = my = e.clientY
			createMouse(e)
		})
	}
}
w.killMJ = function () {
	var w = this
	if (w._mJ) {
		w.DJ(w._mJ);
		w._mJ = 0
	}
	return w
}
w.tgMJ = function () {
	var w = this
	var b = w.bAt(mX, mY)
	w._mJ = w._mJ ? w._mJ :
			b ? w.mJ(b) :
					0
	if (w._mJ) {
		w._mJ.tg(V(mX, mY))
	}
	return w
}
w.handleMJ = function () {
	var w = this
	w._mD ? w.tgMJ() :
			w.killMJ()
	return w
}
w.mSetup = function () {
	$.md(function (e) {
		$mXY = function (e, x, y) {
			mx = e.clientX - x
			my = e.clientY - y
			mX = mx / 30
			mY = my / 30
		}
		var x = w.x
		var y = w.y
		w._mD = 1
		$mXY(e, x, y)
		$.mm(function (e) {
			$mXY(e, x, y)
		})
		// *** need to change to pagex(so can scroll page?).. 
		// but i think it messes up for mobile
	})
	$.mu(function () {
		w._mD = 0
	})
}
w.M = function () {
	var w = this
	if (w.mj) {
		w.j(w.mj);
		w.mj = null
	}
}
 
  
	