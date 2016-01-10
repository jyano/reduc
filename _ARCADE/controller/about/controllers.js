 
controllers = function () {
	w.co = function (co) {
		this.AddController(co)
		return this
	}
	w.acc = function () {
		var co = b2d.acc.apply(null, arguments)
		this.co(co)
		return co
	}
	w.buoy = function () {
		var co = b2d.buoy.apply(null, arguments)
		this.co(co)
		return co
	}
	w.force = function () {
		var co = b2d.force.apply(null, arguments)
		this.co(co)
		return co
	}
	w.tensor = function () {
		var co = b2d.tensor.apply(null, arguments)
		this.co(co)
		return co
	}
	w.grav = function (g, wantFasterR1) {
		var co = b2d.grav.apply(null, arguments)
		if (N(g)) {
			co.g(g)
		}
		if (wantFasterR1) {
			co.r1()
		}
		this.co(co)
		return co
	}
 
	b2d.acc = function (x, y) {
		var co = new b2d.Dynamics.Controllers.b2ConstantAccelController()
		if (N(x)) {
			co.V(x, y)
		}
		return co
	}
	b2d.buoy = function (nX, nY, lD, aD) {
		var co = new b2d.Dynamics.Controllers.b2BuoyancyController()
		nX = N(nX) ? nX : 0;
		nY = N(nY) ? nY : -1;
		lD = N(lD) ? lD : 2;
		aD = N(aD) ? aD : 1
		return co.norm(nX, nY).drag(lD, aD)
	}
	b2d.tensor = function (a, b, c, d) {
		var co = new b2d.Dynamics.Controllers.b2TensorDampingController()
		return co
	}
	b2d.force = function (x, y) {
		x = N(x) ? x : 0;
		y = N(y) ? y : 0
		var co = new b2d.Dynamics.Controllers.b2ConstantForceController()
		co.V(x, y)
		return co
	}
	b2d.grav = function (a, b, c, d) {
		var co = new b2d.Dynamics.Controllers.b2GravityController()
		return co
	}
 
	co.body = function (onOrMoreBodies) {
		var co = this
		_.each(arguments, function (b) {
			co.AddBody(b2d.toBody(b))
		})
		return this
	}
	co.remove = function (b) {
		this.RemoveBody(b);
		return this
	}
	co.next = function () {
		return this.GetNext()
	}
	co.wor = function () {
		return this.GetWorld()
	}
	co.bods = co.bodies = co.list = co.bodyList = function () {
		return this.GetBodyList()
	}
	co.step = function () {
		this.step();
		return this
	}
	aCo.V = function (x, y) {//getter is a waste!  counterproductive... think about it! :).. but for consistency..??? nah i can do better
		//applies 'gravity' by default
		this.A = U(x) ? V(0, 10) : V(x, y)
		return this
	}
//buoy
//acc 
	bCo.norm = function (x, y) {
		this.normal.Set(x, y);
		return this
	}
	bCo.os = function (os) {
		this.offset = os;
		return this
	}
	bCo.useDen = function (u) {
		this.useDensity = u;
		return this
	}
	bCo.den = function (d) {
		var g = G(arguments), d = g[0]
		this.density = d;
		if (g.N) {
			this.useDen(true)
		}
		return this
	}
	bCo.linDrag = function (lD) {
		this.linearDrag = lD || 0;
		return this
	}
	bCo.angDrag = function (aD) {
		this.angularDrag = aD || 0;
		return this
	}
	bCo.drag = function (lD, aD) {
		return this.linDrag(lD).angDrag(aD)
	}
	fCo.V = function (x, y) {
		//applies 'gravity' by default
		this.F = U(x) ? V(0, 10) : V(x, y)
		return this
	}
//tensor
 
	
	tCo.axis = function (axis) {
		this.SetAxisAligned(axis)
		return this
	}
//grav
 gCo.g = gCo.grav = gCo.V = function (g) {//applies 'gravity' by default
		this.G = N(g) ? g : 1
		return this
	}
	gCo.inv = function (inv) {
		this.invSqr = inv;
		return this
	}
	gCo.r2 = function () {
		return this.inv(true)
	} //this is default
	gCo.r1 = function () {
		return this.inv(false)
	}
};
controllers()
b2d.Cos = b2d.Controllers = b2d.D.Cos = b2d.D.Controllers
b2d.ControllerEdge = b2d.Dynamics.Controllers.b2ControllerEdge
b2d.Controllers = b2d.Dynamics.Controllers
b2d.ConstantAccelController = b2d.Dynamics.Controllers.b2ConstantAccelController
b2d.BuoyancyController = new b2d.Dynamics.Controllers.b2BuoyancyController
b2d.ControllerEdge = b2d.Cos.b2ControllerEdge
b2d.ConstantAccelController = b2d.Cos.b2ConstantAccelController
b2d.BuoyancyController = new b2d.Cos.b2BuoyancyController
b2d.Co = b2d.Controller = b2d.Cos.b2Controller
b2d.CFC = b2d.ConstantForceController = b2d.Cos.b2ConstantForceController
b2d.GC = b2d.GravityController = b2d.Cos.b2GravityController
b2d.TDC = b2d.TensorDampingController = b2d.Cos.b2TensorDampingController
b2d.CAC = b2d.ConstantAccellController = b2d.Cos.b2ConstantAccelController
b2d.BC = b2d.BuoyancyController = b2d.Cos.b2BuoyancyController
b2d.Controllers = b2d.Dynamics.Controllers
b2d.massData = b2MassData = b2d.Collision.Shapes.b2MassData
b2d.Cxs = b2d.Contacts = b2d.D.Contacts
b2d.Cos = b2d.Controllers = b2d.D.Controllers
w.CC = function (co) {
	return this.CreateController(co)
}
w.DC = function (co) {
	this.DestroyController(co);
	return this
}
w.AC = function (co) {
	this.AddController(co);
	return this
}
w.RC = function (co) {
	this.RemoveController(co);
	return this
}
//w.m_controllerList 
co = $pt.co
w.ACo = w.AC = function (co) {
	this.AddController(co)
	return this
}
w.RC = w.RCo = function (co) {
	this.RemoveController(co)
	return this
}
co.GBL = co.GBo = function () {
	return this.GetBodyList()
}
co.N = co.GN = function () {
	return this.GetNext()
}
co.W = co.GW = co.GWo = function () {
	return this.GetWorld()
}
co.RB = co.RBo = function (b) {
	this.RemoveBody(b)
	return this
}
co.AB = co.ABo = function (bod) {
	this.AddBody(bod)
	return this
}
b.GCoL = b.GCL = function () {
	return this.GetControllerList()
}
//
w.co = function () {
	
	//add onOrMoreControllers
	var w = this, g = G(arguments)
	if (g.u) {
		return w.m_controllerList
	}
	_.e(g, function (co) {
		w.ACo(co)
	})
	return w
}
// add on Or More Bodies? use co.A
co.A = function () {
	var co = this, g = G(arguments)
	_.e(g, function (b) {
		co.AB(b2d.tB(b))
	})
	return this
}
//co.b: get first bod
co.b = function () {
	var co = this, g = G(arguments)
	if (g.u) {
		return co.bs()[0]
//	var ed = co.ed()
//	return ed && ed.body
	}
}
// co.bs: get or iterate array of bods
co.bs = function (fn) {//get or use ARRAY of its bodies
	var co = this, b
	var arr = []
	var ed = co.GBL()
	while (ed) {
		arr.push(ed.body)
		ed = ed.nextBody
	}
	if (fn) {
		_.e(arr, fn);
		return co
	}
	return arr
}
//co.n: num of bods
co.n = co.num = co.numB = function () {
	return this.bs().length
}
// co.ed: get traversable edge cursor
co.ed = function () {
	var co = this, g = G(arguments)
	var ed = co.GBL()
	if (g.u) {
		return ed
	}
}
// co.eds: get or iterate array of eds
co.bEds = co.eds = function (fn) {//get or use ARRAY of its bodies
	var co = this, b
	var arr = []
	var ed = co.GBL()
	while (ed) {
		arr.push(ed)
		ed = ed.nextBody
	}
	if (fn) {
		_.e(arr, fn);
		return co
	}
	return arr
}
//coEd: first co edge
b.coEd = function (co) {
	var b = this, w = b.W()
	if (U(co)) {
		return b.GCL()
	}
	//	w.co(b )  // :)
	return b
}
//co: first co
b.co = function () {
	var b = this, w = b.W(), g = G(arguments)
	if (g.u) {
		var ed = b.GCL()
		return ed && ed.controller
	}
	return b.a2.apply(b, arguments)
}
//****** WARING: b.GetContactList AND b.GetControllerList both exist *** 
//b.cos:get or use ARRAY of  bod's controllers
b.cos = function (fn) {
	var b = this, co
	var arr = []
	var ed = b.GCL()
	while (ed) {
		arr.push(ed.controller)
		ed = ed.nextController
	}
	if (fn) {
		_.e(arr, fn);
		return co
	}
	return arr
}
//coEds: // co.eds: get or iterate array of eds
b.coEds = function (fn) {
	var b = this, co
	var arr = []
	var ed = b.GCL()
	while (ed) {
		arr.push(ed)
		ed = ed.nextController
	}
	if (fn) {
		_.e(arr, fn);
		return co
	}
	return arr
}
//co.n: num of controllers
b.nCos = function () {
	return this.cos().length
}
b.a2 = b.join = function (co) {
	var b = this, g = G(arguments)
	_.e(g, function (co) {
		if (O(co)) {
			co.A(b)
		}
	})
	return b
}
co.rmAll = function () {
	var co = this
	co.bs(function (b) {
		co.rm(b)
	})
	return co
}
co.die = function () {
	var co = this, w = co.W()
	w.RC(co)
	return co
}
co.rm = co.un = function (b) {
	var co = this
	var g = G(arguments)
	if (g.u) {
		return co.rmAll()
	}
	g.e(function (b) {
		co.RB(b)
	})
	return co
}
b.broadcast = b.bc = function (fn) {
	var b = this
	var origEdge, edge, nextEdge
	if (fn == 'kill') {
		alert('use broadcastKill')
		fn = function (b) {
			b.kill()
		}
	}
	origEdge = b.co()
	if (!origEdge) {
		return b
	}
	edge = origEdge.nextBody
	while (edge) {
		nextEdge = edge.nextBody
		fn(edge.body)
		edge = nextEdge
	}
	edge = origEdge.prevBody
	while (edge) {
		nextEdge = edge.prevBody
		fn(edge.body)
		edge = nextEdge
	}
	return b
}
b.broadcastKill = function () {
	F.run = function (methodN) {
		return function () {
			this[methodN]();
			return this
		}
	}
	return this.broadcast(function (b) {
		b.kill()
	})
}
b.escape = b.rmFrom = b.cancel = function (co) {
	var b = this
	if (O(co)) {
		co.rm(b)
	}
	else {
		var co = b.co()
		if (O(co)) {
			co.controller.rm(b)
		}
	}
}
b.changeCo = b.switch = b.switchTo = function (co) {
	var b = this
	b.rmFrom()
	if (co) {
		co.A(b)
	}
	return b
}
b.a2IfUncontrolled = function (co) {
	var b = this
	if (!b.hasCo) {
		$l('adding b to co')
		b.a2(co)
	}
	return b
}
b.hasCo = function () {
	return this.co() ? true : false
}
 
function proxy() {
	f.cancel = function () {
		this.body().cancel()
		return this
	}
	f.switch = f.switchTo = function (co) {
		this.body().switchTo(co)
		return this
	}
}
proxy()
//co.st = co.step = function () {this.step();return this}
//info: https://github.com/jonasz/Theory-of-Gravitation/blob/master/Box2D-2.0.2b2/Box2D/Box2D_doxygen.i
//is the body controlled by this controller
b.by = function (co) {
	var b = this
	return co && _.ct(b.cos(), co)
}
//does the controller control this body
co.do = co.does = co.controls = function (b) {
	var co = this
	return b && _.ct(co.bs(), b)
}
b.noCo = function () {
	return !this.GCoL()
}
/// control but only if body currently uncontrolled
co.try = function (b) {
	var co = this
	if (b && b.noCo) {
		co.A(b)
	}
	return co
}
b.free = function () {
	var b = this
	b.cos(function (co) {
		co.rm(b)
	})
	return b
}
function _controllers(){
//-> G(arguments, fn)
	b2d.p()
//  The easiest approach to utilize the controllers
// is to create sensor fixtures
// that test when a begin/end  event has occurred with a body.
// In the beginContact method, add the body to the controller.
// In the endContact method, remove the body.
// b=w.D(300, 300,'b', 50, 60); T.t(function(){b.F(10,10)}) //.zF(10,10)// <--MUST WRITE
// co = w.aCo(-5, -5)
// Imagine that you have gusts of wind blowing sideways…
// you can add your objects to a Contoller and have them pushed sideways…
// then when the wind passes you could remove them from that controller.
// now just add and remove bodies to the controller!!
//pass 1 or more controllers, and it will get them goin'
	w.addC = w.AddController
	w.controller = w.co = function () {
		var w = this, g = G(arguments)
		g.e(function (co) {
			w.AddController(co)
		})
		return this
	}
	b.gCL = function () {
		return this.GetControllerList()
	}
	b.firstController = function () {
		var cL = this.gCL()
		if (!cL) {
			alert('!controllerList')
		}
		else {
			return cL.controller
		}
	}
	b.lastController = function () {
		var cL = this.gCL()
		if (!cL) {
			alert('!controllerList')
		}
		else {
			return cL.controller
		}
	}/////////////////
	b.controller = b.co = function () {
		var g = G(arguments)
		if (g.n) {
			if (g.u) {
				this.xCo()
			} else {
				g.f.xB(this)
			}
			return this
		}
		if (g.u) {
			var controllerList = this.GetControllerList()
			return g.p ? controllerList.controller : controllerList
		}
		if (g.F_) {
			this.controller('+').bodies(function (b) {
				if (!b == this) { //this??
					g.f(b)
				}
			})
		}
		return this
	}
	b.controllers = b.cos = function (fn) {
		var controller = this.controller()
		if (!controller) {
			return []
		}
		var controllers = []
		controllers.push(controller.controller)
		while (controller.nextController) {
			controller = controller.nextController
			controllers.push(controller.controller)
		}
		if (fn) {
			_.e(controllers, fn);
			return this
		}
		return controllers
	}
	co.gN = co.gNx = co.N = function () {
		return this.GetNext()
	}
	co.gWor = co.W = function () {
		return this.GetWorld()
	}
	co.gBL = co.b = function () {
		var g = G(arguments), b = this.GetBodyList()
		return g.p ? b.body : b
	}
	co._B = co._A = function (b) {
		if (b) {
			this.AddBody(b2d.tB(b))
		}
		return this
	}
	co.Body = co.B = function () {
		var g = G(arguments), co = this
		if (g.n) {
			if (g.f) {
				this.xB(b2d.tB(g.f))
			}
		}
		else {
			g.e(function (b) {
				if (g.p) {
					co._B(b)
				}
				else {
					if (!b.by(co)) {
						co._B(b)
					}
				}
			})
		}
		return this
	}
	co.numBodies = co.numBods = co.numB = co.n = function () {
		var n = 0, b = this.GetBodyList()
		if (!b) {
			return 0
		}
		n++
		while (b.nextBody) {
			n++
			b = b.nextBody
		}
		return n
	}
	co.isControlling = co.isControllingBody = co.by = function (b) {
		if (b) {
			return _.contains(this.bodies(), b)
		}
	}
	b.isControlledBy = b.isControlledByController = b.by = function (controller) {
		return controller.by(this)
		var by = false,
				controllerList = this.GetControllerList()
		if (!controllerList) {
			return false
		}
		if (controllerList == controller) {
			return true
		}
		while (controllerList.nextController) {
			controllerList = controllerList.nextController
			if (controllerList == controller) {
				by = true
			}
		}
		return by
	}
	f.bodyIsControlledBy = f.by = function (co) {
		return this.B().by(co)
	}
	b.numControllers = b.nCo = function () {
		var n = 0,
				co = this.GetControllerList()
		if (!co) {
			return n
		}
		n++
		while (co.nextController) {
			n++
			co = b.nextController
		}
		return n
	}
	b.removeController = b.xCo = function (co) {
		var b = this, g = G(arguments), co = g[0]
		if (!this.co()) {
			return this
		}
		if (!co) {
			if (g.n) {
				this.xCo(_.l(this.controllers()))
			}
			else if (g.p) {
				this.xCo(_.f(this.controllers()))
			}
			else {
				this.controllers(function (co) {
					b.xCo(co)
				})
			}
		}
		else if (this.by(co)) {
			co.RemoveBody(this)
		}
		return this
	}
	co.removeBody = co.rmBd = co.rmB = co.xB = function (b) {
		var g = G(arguments), b = g[0]
		if (g.u) {
			if (g.n) {
				this.xB(_.l(this.bs()))
			}
			else if (g.p) {
				this.xB(_.f(this.bs()))
			}
			return this
		}
		if (!this.b()) {
			return this
		}
		if (b) {
			if (b2d.tB(b).by(this)) {
				if (b2d.tB(b).by(co)) {
					this.RemoveBody(b2d.tB(b))
				}
			}
		}
		else {
			this.bodies(function (b) {
				this.xB(b)
			})
		}
		return this
	}
	co.bodies = co.bods = co.bs = function (fn) {
		var b = this.b(), bs = []
		if (!b) {
			return bs
		}
		bs.push(b.body)
		while (b.nextBody) {
			b = b.nextBody
			bs.push(b.body)
		}
		if (fn) {
			_.e(bs, function (b) {
				fn(b)
			});
			return this
		}
		return bs
	}
	f.controller = f.co = function () {
		return this.B().co()
	}
//x as a verb is to delete/cancel
	f.removeControllerFromBody = f.xCo = function () {
		this.B().xCo();
		return this
	}
//'(switch/change)to'
	b.changeController = b.to = function (co) {
		return this.xCo().controller(this)
	}
	f.changeBodyController = f.to = function (co) {
		this.B().to(co);
		return this
	}
//////////////////// general above ////
	aCo.ay = aCo.V = function () {
		var co = this, g = G(arguments), o
		//getter is a waste!  counterproductive... think about it! :)..
		// but for consistency..??? nah i can do better
		//applies 'gravity' by default
		o = g.N ? {y: g.f} : {x: g.f, y: g.s}
		o.y = N(o.x, 100)
		o.x = N(o.x, 0)
		co.A = g.u || (g.N_ && U(g.s)) ? V(0, N(g.f, 100)) : V(g.f, g.s)
		return co
	}
	fCo.ef = fCo.V = function (x, y) {
		var fCo = this //applies 'gravity' by default
		fCo.F = U(x) ? V(0, 10) : V(x, y)
		return fCo
	}
	gCo.grav = gCo.g = gCo.V = function (gv) {
		//applies 'gravity' by default
		this.G = V(1, 100)//N(gv,1)
		return this
	}
	gCo.noInvSq = gCo.r1 = function () {
		this.invSqr = false
		return this
	}
	gCo.yesInvSq = gCo.useInvSq = gCo.r2 = function () {
		this.invSqr = true
		return this
	} //this is default
	tCo.axis = function (ax) {
		this.SetAxisAligned(ax);
		return this
	}
	co.step = function () {
		$l('co.step')
		this.step();
		return this
	}
	w.accController = w.accelController = w.aCo = function (x, y) {
		var w = this,
				co = new b2d.ConstantAccelController
		if (x || N(x)) {
			co.V(x, y)
		}
		w.co(co)
		return co
	}
	w.constantForceController = w.forceController = w.fCo = function (x, y) {
		var w = this, co
		co = new b2d.Dynamics.Controllers.b2ConstantForceController()
		co.V(_.tN(x), _.tN(y))
		w.co(co)
		return co
	}
	w.gravController = w.gCo = function (gv, wantFasterR1) {
		var w = this, g = G(arguments), co
		co = new b2d.Dynamics.Controllers.b2GravityController
		if (g.N_) {
			co.G = g.f
		}
		if (g.s || g.p) {
			co.r1()
		}
		w.co(co)
		return co
	}
	w.eachTick = w.onEachTick = w.evTick = w.onEvTick = w.onEvTk = w.eT = function (fn) {
		var w = this
		T.t(function () {
			w.e(fn)
		})
		return w
	}
	w.tenController = w.tCo = function (a, b, c, d) {
		var co
		co = new b2d.Dynamics.Controllers.b2TensorDampingController
		this.co(co)
		return co
	}
	b._xCo = function () {
		this.co().controller.xB(this);
		return this
	}
	b.do1 = function (co) {
		this.cl(
				function (f) {
					if (!f.by(co)) {
						co.B(f)
					}
				},
				function (f) {
					if (f.by(co)) {
						co.xB(f)
					}
				}
		)
		return this
	}
	b.beControlledBy = b.beTriggedByController = b.do = function (co) {
		this.cl(function (f) {
					if (!f.sen()) {
						co.B(f)
						// f.C('z')
					}
				},
				function (f) {
					if (!f.sen()) {
						// co.xB(f)
						f.xCo(co)
						//f.C('w')
					}
				})
		return this
	}
	co.control = co.controlBody = co.triggerBody = co.switchBody = co.bindBody = co.do = function (b) {
		if (b) {
			b.do(this);
			return b
		}
	}
	w.buoyController = w.bCo = function (nX, nY, lD, aD) {
		var w = this, g = G(arguments), o, co
//co = new b2d.BuoyancyController
		co = new b2d.Dynamics.Controllers.b2BuoyancyController
		o = {nX: g.f, nY: g.s, lD: g.t, aD: g[3]}
		o.nX = N(o.nX, 0) //normX
		o.nY = N(o.nY, -1) //normY
		o.lD = N(o.lD, 2) //linDrag?
		o.aD = N(o.aD, 1) //angDrag?
		//Offset,Density,'Clear'
		co.no(o.nX, o.nY).drag(o.lD, o.aD) //dg? //wait drag or damp???
		this.co(co)
		return co
	}
	bCo.norm = bCo.no = function (x, y) {
		this.normal.Set(x, y);
		return this
	}
	bCo.xy = bCo.os = function (os) {
		this.offset = os;
		return this
	}
	bCo.linDrag = bCo.lD = function (lD) {
		this.linearDrag = N(lD, 0);
		return this
	}
	bCo.angDrag = bCo.aD = function (aD) {
		this.angularDrag = N(aD, 0)
		return this
	}
	bCo.drag = bCo.dg = function (lD, aD) {
		return this.lD(lD).aD(aD)
	}
	bCo.den = bCo.d = function () {
		var g = G(arguments)
		this.density = g.f
		if (!g.n) {
			this.useDensity = true
		}
		return this
	}
	bCo.useDen = bCo.uD = function (u) {
		this.useDensity = u;
		return this
	}
	b.contactList = b.cx = function (fn) {
		var b = this,
				c, next, n, ent, cx
		if (U(fn)) {
			return b.GetContactList()
		}
		cx = b.cx()
		if (!cx) {
			$l('!');
			return
		}
		n = 0
		cx = cx.contact
		while (cx) {
			next = cx.GetNext()
			fn = _.b(fn, b)
			ent = b.of(cx.a()) ? cx.B() : cx.A()
			fn(ent, cx, n++)
			cx = next
		}
	}
	b.numContacts = b.nCx = function () {
		var n = 0,
				cx = this.cx()
		if (!cx) {
			return n
		}
		n++
		while (cx.next) {
			n++
			cx = cx.next
		}
		return n
	}
	b.contacts = b.cxs = function (fn) {
		var cx = this.cx(), CXS = []
		if (!cx) {
			return CXS
		}
		CXS.push(cx.contact)
		while (cx.next) {
			cx = cx.next
			CXS.push(cx.contact)
		}
		if (fn) {
			_.e(CXS, function (cx) {
				fn(cx)
			});
			return this
		}
		return CXS
	}
	b.al = function (al) {
		al = N(al, .8)
		if (this.f() && O(this.f().sprites)) {
			this.f().sprites[0].al(al)
		}
		return this
	}
	f.alx = function (al) {
		al = N(al, .8)
//	if ( O(this.sprites)) {this.sprites[0].al(al)}
		return this
	}
	b.end = function () {
		var b = this, w = b.W(), g = G(arguments), o
		o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
		if (o.k) {
			w.end(b, o.k, o.fn)
		}
		else {
			w.end(b, o.fn)
		}
		return this
	}
 
//-> G(arguments, fn)
b2d.p()
//  The easiest approach to utilize the controllers
// is to create sensor fixtures
// that test when a begin/end  event has occurred with a body.
// In the beginContact method, add the body to the controller.
// In the endContact method, remove the body.
// b=w.D(300, 300,'b', 50, 60); T.t(function(){b.F(10,10)}) //.zF(10,10)// <--MUST WRITE
// co = w.aCo(-5, -5)
// Imagine that you have gusts of wind blowing sideways…
// you can add your objects to a Contoller and have them pushed sideways…
// then when the wind passes you could remove them from that controller.
// now just add and remove bodies to the controller!!
//pass 1 or more controllers, and it will get them goin'
w.addC = w.AddController
w.controller = w.co = function () {
	var w = this, g = G(arguments)
	g.e(function (co) {
		w.AddController(co)
	})
	return this
}
b.gCL = function () {
	return this.GetControllerList()
}
b.firstController = function () {
	var cL = this.gCL()
	if (!cL) {
		alert('!controllerList')
	}
	else {
		return cL.controller
	}
}
b.lastController = function () {
	var cL = this.gCL()
	if (!cL) {
		alert('!controllerList')
	}
	else {
		return cL.controller
	}
}/////////////////
b.controller = b.co = function () {
	var g = G(arguments)
	if (g.n) {
		if (g.u) {
			this.xCo()
		} else {
			g.f.xB(this)
		}
		return this
	}
	if (g.u) {
		var controllerList = this.GetControllerList()
		return g.p ? controllerList.controller : controllerList
	}
	if (g.F_) {
		this.controller('+').bodies(function (b) {
			if (!b == this) { //this??
				g.f(b)
			}
		})
	}
	return this
}
b.controllers = b.cos = function (fn) {
	var controller = this.controller()
	if (!controller) {
		return []
	}
	var controllers = []
	controllers.push(controller.controller)
	while (controller.nextController) {
		controller = controller.nextController
		controllers.push(controller.controller)
	}
	if (fn) {
		_.e(controllers, fn);
		return this
	}
	return controllers
}
co.gN = co.gNx = co.N = function () {
	return this.GetNext()
}
co.gWor = co.W = function () {
	return this.GetWorld()
}
co.gBL = co.b = function () {
	var g = G(arguments), b = this.GetBodyList()
	return g.p ? b.body : b
}
co._B = co._A = function (b) {
	if (b) {
		this.AddBody(b2d.tB(b))
	}
	return this
}
co.Body = co.B = function () {
	var g = G(arguments), co = this
	if (g.n) {
		if (g.f) {
			this.xB(b2d.tB(g.f))
		}
	}
	else {
		g.e(function (b) {
			if (g.p) {
				co._B(b)
			}
			else {
				if (!b.by(co)) {
					co._B(b)
				}
			}
		})
	}
	return this
}
co.numBodies = co.numBods = co.numB = co.n = function () {
	var n = 0, b = this.GetBodyList()
	if (!b) {
		return 0
	}
	n++
	while (b.nextBody) {
		n++
		b = b.nextBody
	}
	return n
}
co.isControlling = co.isControllingBody = co.by = function (b) {
	if (b) {
		return _.contains(this.bodies(), b)
	}
}
b.isControlledBy = b.isControlledByController = b.by = function (controller) {
	return controller.by(this)
	var by = false,
			controllerList = this.GetControllerList()
	if (!controllerList) {
		return false
	}
	if (controllerList == controller) {
		return true
	}
	while (controllerList.nextController) {
		controllerList = controllerList.nextController
		if (controllerList == controller) {
			by = true
		}
	}
	return by
}
f.bodyIsControlledBy = f.by = function (co) {
	return this.B().by(co)
}
b.numControllers = b.nCo = function () {
	var n = 0,
			co = this.GetControllerList()
	if (!co) {
		return n
	}
	n++
	while (co.nextController) {
		n++
		co = b.nextController
	}
	return n
}
b.removeController = b.xCo = function (co) {
	var b = this, g = G(arguments), co = g[0]
	if (!this.co()) {
		return this
	}
	if (!co) {
		if (g.n) {
			this.xCo(_.l(this.controllers()))
		}
		else if (g.p) {
			this.xCo(_.f(this.controllers()))
		}
		else {
			this.controllers(function (co) {
				b.xCo(co)
			})
		}
	}
	else if (this.by(co)) {
		co.RemoveBody(this)
	}
	return this
}
co.removeBody = co.rmBd = co.rmB = co.xB = function (b) {
	var g = G(arguments), b = g[0]
	if (g.u) {
		if (g.n) {
			this.xB(_.l(this.bs()))
		}
		else if (g.p) {
			this.xB(_.f(this.bs()))
		}
		return this
	}
	if (!this.b()) {
		return this
	}
	if (b) {
		if (b2d.tB(b).by(this)) {
			if (b2d.tB(b).by(co)) {
				this.RemoveBody(b2d.tB(b))
			}
		}
	}
	else {
		this.bodies(function (b) {
			this.xB(b)
		})
	}
	return this
}
co.bodies = co.bods = co.bs = function (fn) {
	var b = this.b(), bs = []
	if (!b) {
		return bs
	}
	bs.push(b.body)
	while (b.nextBody) {
		b = b.nextBody
		bs.push(b.body)
	}
	if (fn) {
		_.e(bs, function (b) {
			fn(b)
		});
		return this
	}
	return bs
}
f.controller = f.co = function () {
	return this.B().co()
}
//x as a verb is to delete/cancel
f.removeControllerFromBody = f.xCo = function () {
	this.B().xCo();
	return this
}
//'(switch/change)to'
b.changeController = b.to = function (co) {
	return this.xCo().controller(this)
}
f.changeBodyController = f.to = function (co) {
	this.B().to(co);
	return this
}
//////////////////// general above ////
aCo.ay= aCo.V = function () {
	var co = this, g = G(arguments), o
	//getter is a waste!  counterproductive... think about it! :)..
	// but for consistency..??? nah i can do better
	//applies 'gravity' by default
	o = g.N ? {y: g.f} : {x: g.f, y: g.s}
	o.y = N(o.x, 100)
	o.x = N(o.x, 0)
	co.A = g.u || (g.N_ && U(g.s)) ? V(0, N(g.f, 100)) : V(g.f, g.s)
	return co
}
fCo.ef = fCo.V = function (x, y) {
	var fCo = this //applies 'gravity' by default
	fCo.F = U(x) ? V(0, 10) : V(x, y)
	return fCo
}
gCo.grav = gCo.g = gCo.V = function (gv) {
	//applies 'gravity' by default
	this.G = V(1, 100)//N(gv,1)
	return this
}
gCo.noInvSq=gCo.r1 = function () {
	this.invSqr = false
	return this
}
gCo.yesInvSq = gCo.useInvSq= gCo.r2 = function () {
	this.invSqr = true
	return this
} //this is default
tCo.axis = function (ax) {
	this.SetAxisAligned(ax);
	return this
}
co.step = function () {
	$l('co.step')
	this.step();
	return this
}
w.accController=w.accelController=w.aCo = function (x, y) {
	var w = this,
			co = new b2d.ConstantAccelController
	if (x || N(x)) {
		co.V(x, y)
	}
	w.co(co)
	return co
}
w.constantForceController= w.forceController=w.fCo = function (x, y) {
	var w = this, co
	co = new b2d.Dynamics.Controllers.b2ConstantForceController()
	co.V(_.tN(x), _.tN(y))
	w.co(co)
	return co
}
w.gravController=w.gCo = function (gv, wantFasterR1) {
	var w = this, g = G(arguments), co
	co = new b2d.Dynamics.Controllers.b2GravityController
	if (g.N_) {
		co.G = g.f
	}
	if (g.s || g.p) {
		co.r1()
	}
	w.co(co)
	return co
}
w.eachTick= w.onEachTick= w.evTick= w.onEvTick= w.onEvTk=w.eT = function (fn) {
	var w = this
	T.t(function () {
		w.e(fn)
	})
	return w
}

w.tenController=w.tCo = function (a, b, c, d) {
	var co
	co = new b2d.Dynamics.Controllers.b2TensorDampingController
	this.co(co)
	return co
}
b._xCo = function () {
	this.co().controller.xB(this);
	return this
}
b.do1 = function (co) {
	this.cl(
			function (f) {
				if (!f.by(co)) {
					co.B(f)
				}
			},
			function (f) {
				if (f.by(co)) {
					co.xB(f)
				}
			}
	)
	return this
}

b.beControlledBy =b.beTriggedByController= b.do = function (co) {
	this.cl(function (f) {
				if (!f.sen()) { co.B(f)
					// f.C('z')
				}
			},
			
			function (f) {
				if (!f.sen()) {
					// co.xB(f)
					f.xCo(co)
					//f.C('w')
				}
			})
			
	return this
}


co.control= co.controlBody = co.triggerBody = co.switchBody = co.bindBody=co.do = function (b) {
	if (b) {
		b.do(this);
		return b
	}
}


w.buoyController=w.bCo = function (nX, nY, lD, aD) {
	var w = this, g = G(arguments), o, co
//co = new b2d.BuoyancyController
	co = new b2d.Dynamics.Controllers.b2BuoyancyController
	o = {nX: g.f, nY: g.s, lD: g.t, aD: g[3]}
	o.nX = N(o.nX, 0) //normX
	o.nY = N(o.nY, -1) //normY
	o.lD = N(o.lD, 2) //linDrag?
	o.aD = N(o.aD, 1) //angDrag?
	//Offset,Density,'Clear'
	co.no(o.nX, o.nY).drag(o.lD, o.aD) //dg? //wait drag or damp???
	this.co(co)
	return co
}


bCo.norm=bCo.no = function (x, y) {
	this.normal.Set(x, y);
	return this
}
bCo.xy = bCo.os = function (os) {
	this.offset = os;
	return this
}
bCo.linDrag=bCo.lD = function (lD) {
	this.linearDrag = N(lD, 0);
	return this
}
bCo.angDrag=bCo.aD = function (aD) {
	this.angularDrag = N(aD, 0)
	return this
}
bCo.drag = bCo.dg =function (lD, aD) {
	return this.lD(lD).aD(aD)
}
bCo.den = bCo.d =function () {
	var g = G(arguments)
	this.density = g.f
	if (!g.n) {this.useDensity = true}
	return this
}
bCo.useDen=bCo.uD = function (u) {
	this.useDensity = u;
	return this
}

b.contactList= b.cx = function (fn) {
	var b = this,
			c, next, n, ent, cx
	if (U(fn)) {
		return b.GetContactList()
	}
	cx = b.cx()
	if (!cx) {
		$l('!');
		return
	}
	n = 0
	cx = cx.contact
	while (cx) {
		next = cx.GetNext()
		fn = _.b(fn, b)
		ent = b.of(cx.a()) ? cx.B() : cx.A()
		fn(ent, cx, n++)
		cx = next
	}
}
b.numContacts = b.nCx = function () {
	var n = 0,
			cx = this.cx()
	if (!cx) {
		return n
	}
	n++
	while (cx.next) {
		n++
		cx = cx.next
	}
	return n
}
b.contacts = b.cxs = function (fn) {
	var cx = this.cx(), CXS = []
	if (!cx) {
		return CXS
	}
	CXS.push(cx.contact)
	while (cx.next) {
		cx = cx.next
		CXS.push(cx.contact)
	}
	if (fn) {
		_.e(CXS, function (cx) {
			fn(cx)
		});
		return this
	}
	return CXS
}
b.al = function (al) {
	al = N(al, .8)
	if (this.f() && O(this.f().sprites)) {
		this.f().sprites[0].al(al)
	}
	return this
}
f.alx = function (al) {
	al = N(al, .8)
//	if ( O(this.sprites)) {this.sprites[0].al(al)}
	return this
}
f.cancel = function () {
	this.body().cancel();
	return this
} 
controllers = function () {
	b.cancel = function (cntr) {
		if (O(cntr)) {
			cntr.remove(this)
		}
		else if (O(this.co())) {
			this.co().controller.remove(this)
		}
	}
	b.switchTo = function (co) {
		this.cancel()
		co.body(this)
		return this
	}
	b.co = function (co) {
		if (U(co)) {
			return this.GetControllerList()
		}
		this.wor().co(this)  // :)
		return this
	}
	b.bc = b.broadcast = function (func) {
		var origEdge, edge, nextEdge
		if (func == 'kill') {
			func = function (b) {
				b.kill()
			}
		}
		origEdge = this.co()
		if (!origEdge) {
			return this
		}
		edge = origEdge.nextBody
		while (edge) {
			nextEdge = edge.nextBody
			func(edge.body)
			edge = nextEdge
		}
		edge = origEdge.prevBody
		while (edge) {
			nextEdge = edge.prevBody
			func(edge.body)
			edge = nextEdge
		}
		return this
	}
};
controllers()
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