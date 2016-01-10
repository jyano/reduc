function beginEnd(){
	w.b = w.bg = w.beg = function () {
		var w = this, g = G(arguments), o, fn;
		if (g.u) {
			return this.GetBodyList()
		} /// polymorphism here??? wow.. super cryptic!!!!
		//ADDS one or more handlers to beginHandlers array
		//most common use, usually just need one func.
		// would i ever need more?lVWs
		//it just puts each item into bH arr
		fn = F(g.t) ? function (cx) {
			if (cx.w(g.f, g.s)) {
				g.t(cx)
			}
		} :
				F(g.s) ? function (cx) {
					if (cx.w(g.f)) {
						g.s(cx)
					}
				} :
						g.f //fn=$.mo(.2,fn)
		w.BG.push(fn)
		return w
		function alt() {
			w.beg = w.begin = function (what, what2, func) {
				var w = this
				if (F(what)) {
					_.each(arguments, function (func) {
						w.BG.push(func)
					})
				}
				else if (F(what2)) {
					func = what2
					w.BG.push(function (cx) {
						if (cx.with(what)) {
							func(cx)
						}
					})
				}
				else if (F(func)) {
					w.BG.push(function (cx) {
						if (cx.with(what, what2)) {
							func(cx)
						}
					})
				}
				return this
			}//ADDS one or more handlers to beginHandlers array
		}
	}
	w.b = w.bg = w.beg = function () {
		//ADDS one or more handlers to beginHandlers array
		var w = this
		G(arguments).e(function (fn) {
			w.BG.push(fn)
		})
		return w
	}
	w.bE = w.begEnd = function (bFn, eFn) {
		var w = this
		w.b(bFn)
		w.end(eFn)
		return w
	}
	w.b = w.beg = w.begin = function (k, k2, fn) {
		var w = this, g = G(arguments)
		//ADDS one or more handlers to beginHandlers array
		//most common use, usually just need one func.
		// would i ever need more?
		//if first pam is a fn, it assumes 1 or more fns
		//it just puts each item into bH arr
		if (g.F_) {
			g.e(function (fn) {
				w.bH.push(fn)
			})
		}
		else if (F(g.t)) {
			w.bH.push(function (cx) {
				if (cx.w(g.f, g.s)) {
					g.t(cx)
				}
			})
		}
		else if (F(g.f)) {
			w.bH.push(function (cx) {
				if (cx.w(k)) {
					k2(cx)
				}
			})
		}
		return w
	}
	w.end = function (k, k2, fn) {
		var w = this, g = G(arguments), eH = w.endHandlers
		if (F(k)) {
			_.e(g, function (fn) {
				eH.push(fn)
			})
		}
		else if (F(k2)) {
			fn = k2;
			eH.push(function (cx) {
				if (cx.with(k)) {
					fn(cx)
				}
			})
		}
		else if (F(fn)) {
			eH.push(function (cx) {
				if (cx.with(k, k2)) {
					fn(cx)
				}
			})
		}
		return w
	}
	w.end = function () {
		var w = this, g = G(arguments)
		if (g.F_) {
			g.e(function (fn) {
				w.eH.push(fn)
			})
		}
		else if (F(g.s)) {
			w.eH.push(function (cx) {
				cx.w(g.f, g.s)
			})
		}
		else if (F(g.t)) {
			w.eH.push(function (cx) {
				cx.w(g.f, g.s, g.t)
			})
		}
		return w
		function alt() {
			w.end = function () {
				var w = this, g = G(arguments)
				_.e(g, function (fn) {
					w.END.push(fn)
				})
				return w
			}
			w.end = function (what, what2, func) {
				var w = this
				if (F(what)) {
					_.each(arguments, function (func) {
						w.endHandlers.push(func)
					})
				}
				else if (F(what2)) {
					func = what2
					w.endHandlers.push(function (cx) {
						if (cx.with(what)) {
							func(cx)
						}
					})
				}
				else if (F(func)) {
					w.endHandlers.push(function (cx) {
						if (cx.with(what, what2)) {
							func(cx)
						}
					})
				}
				return this
			}
		}
	}
	b.end = function () {
		var b = this, w = b.W(), g = G(arguments), o
		o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
		o.k ? w.end(b, o.k, o.fn) : w.end(b, o.fn)
		return b
	}
}
function worldPoint() {
	function getWorldPoint(f) {
		ab = f.GetAABB()
		bdVars(f)
		_.ev(1, function () {
			w.st.dot('r', dx, dy)
			w.st.dot('b', ux, uy)
			w.st.dot('p', lx, ly)
		})
	}
}
function impulses() {
	b2d.superManifold = function (m) {
		alert('superManifold')
//used????
		m.lPN = m.m_localPlaneNormal
		m.lP = m.m_localPoint
		m.pC = m.m_pointCount
		m.p = m.m_points
		m.t = m.m_type
		return m
	}
	function SuperImpulses(impulses) {
		$l('SuperImpulses')
		impulses.n = impulses.nI = function () {
			return impulses.normalImpulses
		}
		impulses.t = impulses.tI = function () {
			return impulses.tangentImpulses
		}
		return impulses
	}
	
	b2d.manager = b2d.contactManager = b2d.cM = function () {//used?
		alert('b2d.manager')
		var m = new BXD.b2ContactManager
		m.c = m.cl = m.Collide
		m.a = m.aP = m.AddPair
		m.f = m.fNC = m.FindNewContacts
		m.d = m.ds = m.Destroy
		return m
	}
	function later() {//b2d.mini()  // http://stackoverflow.com/questions/19342932/box2d-collision-impact-calculation
// ALL 4 cx handlers give cx (can get points(pt) and normal(n))
//cx.pt1=cx.XY= cx.cen=cx.V=function(){return this.m().m_points[1].m() }
//cx.p1X= function(){return parseInt(this.pt1().x)}
//cx.p1Y= function(){return parseInt(this.pt1().y)}
//cx.X=function(){return this.XY().x} //cx.Y=function(){return this.XY().y}
		function advanced() {
			cx.fl = function () {
				var cx = this//whats the point?
				cx.FlagForFiltering()
				return cx
			}// Flag this contact for filtering.
// Filtering will occur the next time step.
		}
		
		function bibliography() {
			b2d.flDa = b2d.fl = function () {//this is a NEW OBJECT: FilterData
				var flDa = new b2d.Dynamics.b2FilterData
				return flDa
			}
			fd.bit = function (cat, msk) {
				var fd = this
				fd.cat(cat).msk(msk)
				return fd
			}
			fD.cat = fD.cB = function (cB) {
				var fD = this
				if (U(cB)) {
					return fD.filter.categoryBits
				}
				fD.filter.categoryBits = cB
				return fD
			}
			fd.msk = function (mB) {
				var fd = this,
						fl = fd.filter, n
				if (U(mB)) {
					return fl.maskBits
				}
				if (A(mB)) {
					n = 0
					_.e(mB, function (b) {
						n += b
					})
					mB = n
				}
				fl.maskBits = mB
				return fd
			}
		}

// i want the total power, // normal/tangent impulses
// the angles, cx.norm
// and their rel proportions ?
//and the excact center location point of the coll (cx.cen())
//norm is just the dir to quickest separate the overlapping shapes
		/*
		 collide=function(){
		
		 //  I have 3 categories of things: players, obstacles and triggers.
		
		 //  players and obstacles collide with each other  but not with themselves.
		
		 circleDef.filter.categoryBits = 0x2
		 circleDef.filter.maskBits = 0x4
		
		
		 shapeDef.filter.categoryBits = 0x4
		 shapeDef.filter.maskBits = 0x2
		
		 // I want to also have trigger types...
		 //     these I'm only using to detect the player and trigger events ' +
		 // 'but should not be collided with by anything. ' +
		 //'Logically, that should be possible by setting the maskBits to 0x0.' +
		 //' The JBox2D collision code is as follows.
		
		
		 collide = function(){
		 return (filter1.maskBits & filter2.categoryBits) != 0 &&
		 (filter1.categoryBits & filter2.maskBits) != 0
		 }
		
		 //So if the maskBits = 0, then collide should never return true.
		 // I set the category bits to the next free category - 0x8.
		
		 shapeDef.filter.categoryBits = 0x8
		 shapeDef.filter.maskBits = 0x0
		
		
		 // I thought this could be to do with Java's ints working differently to how I expected,
		 // but I tested and found the following results:
		
		 //      0x2 & 0x2 = 2
		 //0x2 & 0x0 = 0
		 // The triggers are meant to be used to trigger events.
		 // This is done by implementing the CollisionListener and testing
		 // for player collisions with triggers and then setting boolean flags.
		 // However, when I run the simulation, the player is colliding with the triggers,
		 // and so are the obstacles.
		
		 // I've also tried setting the category and mask bits
		 // to the following respective values:
		
		 // 0x0 0x0
		 // 0x8 0x8
		 // 0x2 0x4
		 // 0x4 0x2
		
		 //And the player always collides with the trigger object.
		 // How do I get the player and obstacles to never collide with the trigger object?
		
		
		
		 //    Box2D supports 16 collision categories.
		 //      For each shape you can specify which category it belongs to.
		 //    You also specify what other categories this shape can collide with.
		 // For example, you could specify in a multiplayer game that:
		 //    all players don't collide with each other and
		 // monsters don't collide with each other,
		 // but players and monsters should collide.
		 // This is done with masking bits. For example:
		
		
		 playerShapeDef.filter.categoryBits = 0x0002
		 playerShape.filter.maskBits = 0x0004
		
		 monsterShapeDef.filter.categoryBits = 0x0004
		 monsterShapeDef.filter.maskBits = 0x0002
		
		
		 //Collision groups let you specify an integral group index.
		 //   You can have all shapes with the same group index always collide (positive index)
		 //or never collide (negative index).
		 // Group indices are usually used for things that are somehow related,
		 //   like the parts of a bicycle.
		 //  In the following example, shape1 and shape2 always collide,
		 // but shape3 and shape4 never collide.
		
		
		 shape1Def.filter.groupIndex = 2
		
		 shape2Def.filter.groupIndex = 2
		
		 shape3Def.filter.groupIndex = -8
		
		 shape4Def.filter.groupIndex = -8
		
		
		 // Collisions between shapes of different group indices are filtered
		 // according the category and mask bits.
		 // In other words, group filtering has higher precendence than category filtering.
		
		
		 //    This is the way I've understood how maskBits and categoryBits work. Let's say you have 3 objects : objectA, objectB and objectC.
		
		 //        Define for each object a category :
		
		 //        objectA.categoryBits = 0x0002;
		 //    objectB.categoryBits = 0x0004;
		 //    objectC.categoryBits = 0x0008;
		
		 //    Then, set the maskBits, which define the collisions rules for each categoryBits :
		
		 //        -> objectA collide with everyone (0xFFFF) and (&) not(~) objectB (0x0004)
		 //    objectA.maskBits = 0xFFFF & ~0x0004;
		
		 //    -> objectB collide with objectA (0x0002) or (|) objectC (0x0008) but no one else
		 //    objectB.maskBits = 0x0002 | 0x0008;
		
		 //    -> objectC collide with objectA (0x0002) but no one else
		 //    objectC.maskBits = 0x0002;
		
		
		
		 }
		 collide2=function(){
		
		 m_boundaryListener=new b2BoundaryListener()
		
		
		
		 bound=function(){
		
		 // addEventListener(Event.ENTER_FRAME, Update, false, 0, true);
		
		 var worldAABB  = new b2AABB();
		
		 worldAABB.lowerBound.Set(-100.0, -100.0);
		 worldAABB.upperBound.Set(100.0, 100.0);
		
		
		 w=  bW(worldAABB, bV(0 ,10 ) , true)
		
		 w.SetBoundaryListener(m_boundaryListener)
		
		
		 m_sprite = new Sprite()
		 addChild(m_sprite)
		 dbgDraw  = new b2DebugDraw()
		 dbgSprite  = new Sprite()
		 m_sprite.addChild(dbgSprite)
		
		 dbgDraw.m_sprite=m_sprite
		 dbgDraw.m_drawScale=30;
		 dbgDraw.m_alpha=1;
		 dbgDraw.m_fillAlpha=0.5;
		 dbgDraw.m_lineThickness=1;
		 dbgDraw.m_drawFlags=b2DebugDraw.e_shapeBit;
		 w.SetDebugDraw(dbgDraw);
		
		
		 // ground
		 bodyDef = new b2BodyDef()
		 bodyDef.position.Set(4,12)
		 boxDef = new b2PolygonDef()
		
		 boxDef.filter.categoryBits=2;
		 boxDef.SetAsOrientedBox(10, 1,new b2Vec2(5, 1.5), Math.PI/32);
		 boxDef.friction=0.3;
		 boxDef.density=0;
		 body=w.CreateBody(bodyDef);
		 body.CreateShape(boxDef);
		 body.SetMassFromShapes();
		
		
		 bodyDef = new b2BodyDef()
		 bodyDef.position.Set(8, 12)
		 boxDef = new b2PolygonDef()
		 boxDef.filter.categoryBits=4
		 boxDef.SetAsBox(1, 3)
		 boxDef.friction=0.3
		 boxDef.density=0
		 body=w.CreateBody(bodyDef)
		 body.CreateShape(boxDef)
		 body.SetMassFromShapes()
		
		 create_circle()
		 }
		
		
		
		 create_circle=function() {
		 bodyDef = new b2BodyDef()
		 bodyDef.position.x=6
		 bodyDef.position.y=2
		 circleDef = new b2CircleDef()
		 circleDef.filter.maskBits=Math.ceil(Math.random()*3)*2
		 circleDef.radius=2
		 circleDef.density=1
		 circleDef.friction=0.5
		 circleDef.restitution=0.2
		 body=w.CreateBody(bodyDef)
		 body.CreateShape(circleDef)
		 body.SetMassFromShapes()
		 }
		
		
		
		 Update=function(e:Event):void {
		 w.st(1/30,10)
		
		 if (m_boundaryListener.get_contact()) {
		 m_boundaryListener.no_contact()
		 w.dB(body)
		 bodyDef = new b2BodyDef()
		 create_circle()
		 }
		
		
		
		
		 }
		 */
		/*  w.right.grp(-1)
		 y.grp(-1)
		 w.D(600,400,'r',30).grp(-1)
		 w.D(600,400,'r',40).grp(-1)
		 w.D(600,400,'r',50).grp(-1)
		
		 w.D(600,400,'b',50,50).grp(-2)
		 w.D(600,400,'b',60,60).grp(-2)
		 w.D(600,400,'b',70,70).grp(-2)
		 */
//from tx:
		/*
		 w.l(1000,200,100,900,'-')
		 w.l (600,0,700,500)
		 w.l(200,200,500,500,'+')
		 w.dr(350,260, 200,200,'-')
		 w.dr( 500,240, 160,160,'+')
		 w.dr( 400,200, 100,100)
		 b= w.D(100, 200, 'y', 150, 100).d(.5).$(function(){this.B().I(0,-50)})
		 w.D(500, 400, 'y', 50, 100).d(.5).$(function(){this.B().I(0,-50)})
		 */
	}
	
	function temp() {
		collide = function () {
			
			//  I have 3 categories of things: players, obstacles and triggers.
			//  players and obstacles collide with each other  but not with themselves.
			circleDef.filter.categoryBits = 0x2
			circleDef.filter.maskBits = 0x4
			shapeDef.filter.categoryBits = 0x4
			shapeDef.filter.maskBits = 0x2
			// I want to also have trigger types...
			//     these I'm only using to detect the player and trigger events ' +
			// 'but should not be collided with by anything. ' +
			//'Logically, that should be possible by setting the maskBits to 0x0.' +
			//' The JBox2D collision code is as follows.
			collide = function () {
				return (filter1.maskBits & filter2.categoryBits) != 0 &&
						(filter1.categoryBits & filter2.maskBits) != 0
			}
			//So if the maskBits = 0, then collide should never return true.
			// I set the category bits to the next free category - 0x8.
			shapeDef.filter.categoryBits = 0x8
			shapeDef.filter.maskBits = 0x0
			// I thought this could be to do with Java's ints working differently to how I expected,
			// but I tested and found the following results:
			//      0x2 & 0x2 = 2
			//0x2 & 0x0 = 0
			// The triggers are meant to be used to trigger events.
			// This is done by implementing the CollisionListener and testing
			// for player collisions with triggers and then setting boolean flags.
			// However, when I run the simulation, the player is colliding with the triggers,
			// and so are the obstacles.
			// I've also tried setting the category and mask bits
			// to the following respective values:
			// 0x0 0x0
			// 0x8 0x8
			// 0x2 0x4
			// 0x4 0x2
			//And the player always collides with the trigger object.
			// How do I get the player and obstacles to never collide with the trigger object?
//    Box2D supports 16 collision categories.
			//      For each shape you can specify which category it belongs to.
			//    You also specify what other categories this shape can collide with.
			// For example, you could specify in a multiplayer game that:
			//    all players don't collide with each other and
			// monsters don't collide with each other,
			// but players and monsters should collide.
			// This is done with masking bits. For example:
			playerShapeDef.filter.categoryBits = 0x0002
			playerShape.filter.maskBits = 0x0004
			monsterShapeDef.filter.categoryBits = 0x0004
			monsterShapeDef.filter.maskBits = 0x0002
			//Collision groups let you specify an integral group index.
			//   You can have all shapes with the same group index always collide (positive index)
			//or never collide (negative index).
			// Group indices are usually used for things that are somehow related,
			//   like the parts of a bicycle.
			//  In the following example, shape1 and shape2 always collide,
			// but shape3 and shape4 never collide.
			shape1Def.filter.groupIndex = 2
			shape2Def.filter.groupIndex = 2
			shape3Def.filter.groupIndex = -8
			shape4Def.filter.groupIndex = -8
			// Collisions between shapes of different group indices are filtered
			// according the category and mask bits.
			// In other words, group filtering has higher precendence than category filtering.
//    This is the way I've understood how maskBits and categoryBits work. Let's say you have 3 objects : objectA, objectB and objectC.
//        Define for each object a category :
//        objectA.categoryBits = 0x0002;
//    objectB.categoryBits = 0x0004;
//    objectC.categoryBits = 0x0008;
//    Then, set the maskBits, which define the collisions rules for each categoryBits :
//        -> objectA collide with everyone (0xFFFF) and (&) not(~) objectB (0x0004)
//    objectA.maskBits = 0xFFFF & ~0x0004;
//    -> objectB collide with objectA (0x0002) or (|) objectC (0x0008) but no one else
//    objectB.maskBits = 0x0002 | 0x0008;
//    -> objectC collide with objectA (0x0002) but no one else
//    objectC.maskBits = 0x0002;
		}
		collide2 = function () {
			m_boundaryListener = new b2BoundaryListener()
			bound = function () {
				
				// addEventListener(Event.ENTER_FRAME, Update, false, 0, true);
				var worldAABB = new b2AABB();
				worldAABB.lowerBound.Set(-100.0, -100.0);
				worldAABB.upperBound.Set(100.0, 100.0);
				w = bW(worldAABB, bV(0, 10), true)
				w.SetBoundaryListener(m_boundaryListener)
				m_sprite = new Sprite()
				addChild(m_sprite)
				dbgDraw = new b2DebugDraw()
				dbgSprite = new Sprite()
				m_sprite.addChild(dbgSprite)
				dbgDraw.m_sprite = m_sprite
				dbgDraw.m_drawScale = 30;
				dbgDraw.m_alpha = 1;
				dbgDraw.m_fillAlpha = 0.5;
				dbgDraw.m_lineThickness = 1;
				dbgDraw.m_drawFlags = b2DebugDraw.e_shapeBit;
				w.SetDebugDraw(dbgDraw);
				// ground
				bodyDef = new b2BodyDef()
				bodyDef.position.Set(4, 12)
				boxDef = new b2PolygonDef()
				boxDef.filter.categoryBits = 2;
				boxDef.SetAsOrientedBox(10, 1, new b2Vec2(5, 1.5), Math.PI / 32);
				boxDef.friction = 0.3;
				boxDef.density = 0;
				body = w.CreateBody(bodyDef);
				body.CreateShape(boxDef);
				body.SetMassFromShapes();
				bodyDef = new b2BodyDef()
				bodyDef.position.Set(8, 12)
				boxDef = new b2PolygonDef()
				boxDef.filter.categoryBits = 4
				boxDef.SetAsBox(1, 3)
				boxDef.friction = 0.3
				boxDef.density = 0
				body = w.CreateBody(bodyDef)
				body.CreateShape(boxDef)
				body.SetMassFromShapes()
				create_circle()
			}
			create_circle = function () {
				bodyDef = new b2BodyDef()
				bodyDef.position.x = 6
				bodyDef.position.y = 2
				circleDef = new b2CircleDef()
				circleDef.filter.maskBits = Math.ceil(Math.random() * 3) * 2
				circleDef.radius = 2
				circleDef.density = 1
				circleDef.friction = 0.5
				circleDef.restitution = 0.2
				body = w.CreateBody(bodyDef)
				body.CreateShape(circleDef)
				body.SetMassFromShapes()
			}
			Update = function (e
			:
			Event
			):
			void {
				w.st(1 / 30, 10)
			if (m_boundaryListener.get_contact()) {
				m_boundaryListener.no_contact()
				w.dB(body)
				bodyDef = new b2BodyDef()
				create_circle()
			}
		}
	}
	
	cxI.n = cxI.nI = function (n) {
		var I = this,
				nI = _.m(I.normalImpulses, M.fl)
		return N(n) ? nI[n] : nI
	}
	cxI.t = cxI.tI = function (n) {
		var I = this,
				tI = _.m(I.tangentImpulses, M.fl)
		return N(n) ? tI[n] : tI
	}
	cxI.nX = function () {
		var I = this;
		return I.nI(0)
	}
	cxI.nY = function () {
		var I = this;
		return I.nI(1)
	}
	cxI.tX = function () {
		var I = this;
		return I.tI(0)
	}
	cxI.tY = function () {
		var I = this;
		return I.tI(1)
	}
}
function prePostSove() {
	w.pre = function () {
		var w = this, g = G(arguments)
		g.e(function (fn) {
			w.preHandlers.push(fn)
		})
		return w
	}
	w.po = w.post = function () {
		var w = this, g = G(arguments)
		_.e(g, function (fn) {
			w.postHandlers.push(fn)
		})
		return w
	}
//preSolve alterations: //enable,friction,restitutoin
	b.pre = function () {
		var b = this, w = b.W(), g = G(arguments)
		w.pre(function (cx) {
			cx.w(b, g.f, g.s, g.t)
		})
	}
	w.pre = function () {
		w._pre = function (fn) {
			var w = this, g = G(arguments)
			//fn = $.mo(.2,fn )
			w.pH.push(fn)
			return w
		}
		w.onPre = w.pre = function (fn) {
			var w = this, g = G(arguments)
			//fn = $.mo(.2,fn )
			w.pH.push(fn)
			return w
		}
		var w = this, g = G(arguments), o, fn
		if (F(g.t)) {
			fn = function (cx, i) {
				if (cx.w(g.f, g.s)) {
					g.t(cx)
				}
			}
		}
		else if (F(g.s)) {
			fn = function (cx, i) {
				cx.w(g.f, function (f) {
					_.b(g.s, this)(f, cx, i)
				})
			} //this good
		}
		else {
			fn = g.f
		}
		//fn=$.mo(.2,fn) //this will break it!!
		w.pH.push(fn)
		return w
		function pre() {
			w.pre = function () {
				var w = this, g = G(arguments)
				_.e(g, function (fn) {
					w.PRE.push(fn)
				})
				return w
			}
		}
		
		function alt() {
			w.pre = function () {
				var w = this, g = G(arguments), o, fn
				w._pre = function () {
					var that = this
					_.each(arguments, function (func) {
						that.preHandlers.push(func)
					})
					return this
				}
				//this good
				//fn=$.mo(.2,fn) //this will break it!!
				return w._pre(
						F(g.t) ?
								function (cx, i) {
									if (cx.w(g.f, g.s)) {
										g.t(cx)
									}
								} :
								F(g.s) ?
										function (cx, i) {
											cx.w(g.f, function (f) {
												_.b(g.s, this)(f, cx, i)
											})
										} :
										g.f
				)
			}
		}
	}
	w.post = w.po = function () {
		var w = this, g = G(arguments)
		g.e(function (fn) {
			w.PH.push(
					function (cx, I) {
						var i = _.m(I.normalImpulses, M.fl)[0],
								t = _.m(I.tangentImpulses, M.fl)[0]
						return fn(
								cx, i, t)
					})
		})
		return w
		function alt() {
			w.post = w.po = function () {
				var w = this, g = G(arguments)
				g.e(function (fn) {
					w.PH.push(
							function (cx, I) {
								var i = _.m(I.normalImpulses, M.fl)[0],
										t = _.m(I.tangentImpulses, M.fl)[0]
								return fn(
										cx, i, t)
							})
				})
				return w
			}
			w.po = w.post = function () {
				var w = this, g = G(arguments)
				_.e(g, function (fn) {
					w.PO.push(fn)
				})
				return w
			}
			w.post = function () {
				var that = this
				_.e(arguments, function (func) {
					that.postHandlers.push(func)
				})
				return this
			}
		}
	}
	b.pre = function () {
		var b = this, w = b.W(), g = G(arguments)
		w.pre(function (cx) {
			cx.w(b, g[0], g[1], g[2])
		})
	}
}
function contactListener() {
	b2d.CL = b2d.D.b2ContactListener
	$pt.cL = b2d.CL.prototype
	cL = $pt.cL
	cL.b = cL.bg = function (fn) {
		this.BeginContact = fn;
		return this
	}
	cL.end = cL.e = function (fn) {
		this.EndContact = fn
		return this
	}
	cL.pre = cL.p = function (fn) {
		this.PreSolve = fn
		return this
	}
	cL.po = cL.P = function (fn) {
		this.PostSolve = fn
		return this
	}
//End Contact Event: called when two fixtures cease to overlap.
// - called for sensors and non-sensors. - may be called when a body is destroyed ( event can occur outside  time step)
//Begin Contact Event : called when two fixtures begin to overlap.
//  - called for sensors and non-sensors. - can only occur inside the time step.
// = w.startListening
//Do not keep a reference to the pointers sent to b2ContactListener. 
//  (make  deep copy of cx point data into your own buffer. 
// The example below shows one way of doing this.
//At run-time you can create an instance of the listener and register it 
// with w.SetContactListener. 
// Be sure your listener remains in scope while the world object exists.
//You can receive contact data by implementing b2ContactListener. supports  events: begin, end, pre-solve, post-solve.
	w.SCL = function (cL) {
		this.SetContactListener(cL || $cL())
		return this
	}
	$CL = function () {
		return new b2d.CL
	}
	alpha = w.cL = function () {
		var cL = $CL()
	}
	$CL.handle = function (arr) {
		return function (cx, d) {
			_.e(arr, function (fn) {
				fn(cx, d)
			})
		}
	}
	b.cx = function (fn) {
		var b = this, c, next, n, ent// uses contact list //uses the OTHER way to check cxs !!!!!!
		if (U(fn)) {
			return b.GetContactList()
		}
		if (!(c = b.cx())) {
			$l('!');
			return
		}
		n = 0
		c = c.contact
		while (cx) {
			next = cx.GetNext()
			//////////////
			fn = _.b(fn, b)
			ent = b.of(cx.a()) ? cx.B() : cx.A()
			fn(ent, cx, n++)
			/////////////
			cx = next
		}
	}
	function isBel(p, y) {
		return p.Y() > pf.Y() - 20
	}
	
	b.sr = b.sen = function () {
		var b = this, f = b.f(), g = G(arguments)
		if (g.d) {
			return b.sen(!b.sen())
		}//b.sen('/')->toggle sen
		if (U(g[0])) {
			return f.m_isSensor
		}
		f.m_isSensor = g[0] ? true : false
		return b
	}
//direction of collision normal:
//b2d.wM=  b2d.man= b2d.manifold= b2d.worldManifold= function(){return new b2d.Collision.b2WorldManifold}
//By convention in Box2d, the collision normal
// (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!
// ALL 4 cx handlers
// give you a b2Contact pointer,
// so we have access to the same points and normal - see: begin
// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  c.SetFriction( friction)  // persists for duration of contact
//  c.SetRestitution(  restitution)   //persists for duration of contact
//  c.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
//PostSolve
//with post, u get a second pam, which tells impulses(both norm and tang)
// we can find out what the collision response was.
	w.collFill = function () {
		var w = this
		//l.P=  l.post=  function (fn) {this.PostSolve = fn; return this}
//l.b=  l.beg=  function (fn) {this.BeginContact = fn; return this}
//l.e=  l.end= function (fn) {this.EndContact = fn; return this}
//l.p=  l.pre=  function (fn) {this.PreSolve=fn;return this}
		b2d.L = b2d.listener = b2d.contactListener = function () {
			return new b2d.Dynamics.b2ContactListener
		}
//w.listen = w.setContactListener = w.sCL = w.SetContactListener
		w.bH = w.beginHandlers = w.beginHandlers || []
		w.pH = w.preHandlers = w.preHandlers || []
		w.PH = w.postHandlers = w.postHandlers || []
		w.eH = w.endHandlers = w.endHandlers || []
		w.ln = w.ln || new b2d.Dynamics.b2ContactListener
		w.ln.BeginContact = function (cx) {
			_.e(w.bH, function (fn) {
				$.do(function () {
					fn(cx)
				})
			})
		}
		w.ln.EndContact = function (cx) {
			_.e(w.eH, function (fn) {
				$.in(0, function () {
					fn(cx)
				})
			})
		}
		w.ln.PreSolve = function (cx) {
			_.e(w.pH, function (fn) {
				$.do(function () {
					fn(cx)
				})
			})
		}
		w.ln.PostSolve = function (cx, pam2) {
			_.e(w.PH, function (fn) {
				$.do(function () {
					fn(cx, pam2)
				})
			})
		}
		w.SetContactListener(w.ln)
		return w
	}
	function old() {
		w._l.EndContact = function (cx) {
			_.e(w.endHandlers,
					function (func) {
						$.do(function () {
							func(cx)
						})
					})
		}
		w._l.PreSolve = function (cx) {
			_.e(w.preHandlers,
					function (func) {
						$.do(function () {
							func(cx)
						})
					})
		}
		w._l.PostSolve = function (cx, pam2) {
			_.e(w.postHandlers,
					function (func) {
						$.do(function () {
							func(cx, pam2)
						})  //second arg???????
					})
		}
	}
	
	b2d.p();
	b2d.mini()
}
function contactProto() {
	cx.A = function () {
		return this.GetFixtureA()
	}
	cx.B = function () {
		return this.GetFixtureB()
	}
	cx.a = function () {
		return this.A().B()
	}
	cx.b = function () {
		return this.B().B()
	}
	cx.fA = cx.A = function (k) {
		var $$ = this.GetFixtureA()
		return D(k) ? $$.of(k) : $$
	}
	cx.fB = cx.B = function (k) {
		var $$ = this.GetFixtureB()
		return D(k) ? $$.of(k) : $$
	}
	cx.bA = cx.a = function (k) {
		var $$ = this.fA().B()
		return D(k) ? $$.of(k) : $$
	}
	cx.bB = cx.b = function (k) {
		var $$ = this.fB().B()
		return D(k) ? $$.of(k) : $$
	}
	function more() {
		cx.bA = cx.a = function () {
			return this.A().gB()
		}
		cx.bB = cx.b = function () {
			return this.B().gB()
		}
		cx.fA = cx.A = function () {
			return this.GetFixtureA()
		}
		cx.fB = cx.B = function () {
			return this.GetFixtureB()
		}
		w.b = w.begin = function () {
			var that = this
			_.each(arguments, function (func) {
				that.beginHandlers.push(func)
			})
			return this
		}
		cx.w = cx.with = function (a, b) {
			var cx = this
			cx.includes = function (u) {
				var cx = this
				if (cx.fA().of(u)) {
					return cx.fB()
				}
				if (cx.fB().of(u)) {
					return cx.fA()
				}
			}
			cx.between = function (p1, p2) {
				var a = this.A(), b = this.B()
				if (a.of(p1) && b.of(p2)) {
					return [a, b]
				}
				if (b.of(p1) && a.of(p2)) {
					return [b, a]
				}
			}
			return b ? cx.between(a, b) : cx.includes(a)
		}
	}
	
	cx.includes = function (k, fn) {
		var cx = this, g = G(arguments), fA, fB
		fA = cx.A()
		fB = cx.B()
		if (!fn) {
			return fA.of(k) ? [fA, fB] : fB.of(k) ? [fB, fA] : null
		}
		//if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx
		if (fA.of(k)) {
			fixts(fA, fB)
		}
		else if (fB.of(k)) {
			fixts(fB, fA)
		}
		return cx
		function fixts(a, b) {
			_.b(fn, a)(b, cx)
		}
	}
	cx.between = function (k1, k2, fn) {
		var cx = this, fA = cx.A(), fB = cx.B()
		return fA.of(k1) && fB.of(k2) ? fixts(fA, fB)
				: fA.of(k2) && fB.of(k1) ? fixts(fB, fA)
				: null
		function fixts(a, b) {
			return fn ? (_.b(fn, a)(b, cx) || cx) : [a, b, cx]
		}
	}
	cx.w = cx.with = function () {
		var cx = this, g = G(arguments)
		if (F(g[1]) || U(g[1])) {
			return cx.includes(g[0], g[1])
		}
		return cx.between(g[0], g[1], g[2])
	}
	cx.T = cx.t = cx.type = function () {
		var cx = this
		return cx.rM().m_type
	}
	cx.N = cx.next = cx.gN = function () {
		return this.GetNext()
	}//Get the next contact in the world's contact list.
	cx.bC = cx.bCo = cx.bindCo = cx.bindController = function (k) {
		var cx = this, g = G(arguments), f
		//if any fixt collides with a certain kind
		//switch to the controller with that name
		_.e(g,
				function (k) {
					cx.with(k,
							function () {
								this.switchTo(window[k])
							})
				})
	}
	cx.m = cx.wM = cx.man = cx.worMan = cx.worldManifold = function () {
		var cx = this, m
		m = new b2d.Collision.b2WorldManifold
		cx.GetWorldManifold(m)
		return m
	}
	cx.cen = cx.point = cx.V = function () {
		var cx = this
		return cx.m().m_points[0].m()
	}
	cx.nr = cx.norm = cx.no = function () {
		var cx = this
		return cx.m().m_normal.toFixed(2)
	} //norm is just the dir to quickest separate the overlapping shapes
//  If you want to know the actual direction that these two corners impacted at, you can use:
// v1 = b1.GetLinearVelocityFromWorldPoint( cx.cen() )
//  v2 = b2.GetLinearVelocityFromWorldPoint( cx.cen() )
//  impactV = v1 - v2
//cx.vA=  function(){var cx=this; return cx.lV(cx.a())}
//cx.vB=  function(){var cx=this;return cx.lV(cx.b())}
	cx.en = function (a) {
		var cx = this
		if (U(a)) {
			return cx.IsEnabled()
		}
		cx.SetEnabled(a ? true : false);
		return cx
	} // Enable/disable this this.//
// This can be used inside the pre-solve contact listener.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
	cx.cont = cx.continuous = cx.iC = function () {
		var cx = this
		return cx.IsContinuous()
	} //Does this contact generate TOI events for continuous simulation
	cx.sen = function () {
		var cx = this, g = G(arguments)
		if (U(g[0])) {
			return cx.IsSensor()
		}
		cx.SetSensor(g[0] ? true : false)
		return cx
	}
	cx.tch = cx.touching = cx.iT = function () {
		var cx = this
		return cx.IsTouching()
	}
	function logic() {
		cx.with = cx.includesBetween = cx.w = function () {
			var cx = this, g = G(arguments)
			// (k/o)  : (k/o,  fn)  //  (k/o,  k1/o)  :   (k/o,k1/o, fn)
			//if you have a second pam,, but its not a function
			cx.includes = cx.ic = function () {
				var cx = this, g = G(arguments)
				/* protosig
				 //     str    :  str,fn   :   obj   :   obj,fn
				
				 w.b(function(cx){
				 cx.ic(fisherman1, function(fish){this.eat(fish.B( ))  })
				 var oneWasFisherman1 = cx.ic(fisherman1); if(oneWasFisherman1){$l('the fish is: '+Fisherman1[1])}
				 cx.ic('fish', function(fisherman){  this.swimTo( fisherman.B( ))  })
				 var oneWasFish = cx.ic('fish'); if(oneWasFish){$l('the fish is: '+oneWasFish[0])}
				 })
				 */
				if (F(g.s)) {
					if (cx.A().of(g.f)) {
						_.b(g.s, cx.A())(cx.B(), cx)
					}
					else if (cx.B().of(g.f)) {
						_.b(g.s, cx.B())(cx.A(), cx)
					}
					return cx
				}
				//if this fixture 'of' that string(kind),fixt,or body
				//if so always passed back an array with the first mentioned selector in the [0] pos
				return cx.A().of(g.f) ? [cx.A(), cx.B()] :
						cx.B().of(g.f) ? [cx.B(), cx.A()] :
								false
				//if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx
			}
			cx.between = cx.bw = function () {
				var cx = this,
						g = G(arguments),
				// bw(k,k1)  or  bw(k,k1,fn)
						a = cx.A(), b = cx.B()
				if (F(g.t)) {
					if (a.of(g.f) && b.of(g.s)) {
						g.t.apply(a, [b, cx])
					}
					else if (b.of(g.f) && a.of(g.s)) {
						g.t.apply(b, [a, cx])
					}
					return cx
				}
				return cx.A().of(g.f) && cx.B().of(g.s) ? [cx.A(), cx.B(), cx] : cx.B().of(g.f) && cx.A().of(g.s) ? [cx.B(), cx.A(), cx] : false
			}
			return g.s && !F(g.s) ?
					cx.bw(g.f, g.s, g.t) :
					cx.ic(g.f, g.s)
		}
		cx.w = cx.of = cx.with = function () {
			var cx = this, g = G(arguments), o
			cx.both = function () {
				var cx = this, g = G(arguments)
				var fA = cx.fA()
				var fB = cx.fB()
				if (fA.of(g.f) && fB.of(g.s)) {
					if (F(g.t)) {
						var fn = _.b(g.t, fA)
						g.p ? fn(fB, cx) :
								_.in(0, function () {
									fn(fB, cx)
								})
						return cx
					}
					return [fA, fB]
				}
				else if (fB.of(g.f) && fA.of(g.s)) {
					if (F(g.t)) {
						var fn = _.b(g.t, fB)
						g.p ? fn(fA, cx) : _.in(0, function () {
							fn(fA, cx)
						})
						return cx
					}
					return [fB, fA]
				}
				return cx
			}
			cx.this = function () {
				var cx = this, g = G(arguments), a = cx.fA(),
						b = cx.fB(), k = g.f, fn = g.s
				if (a.of(k)) {
					if (F(fn)) {
						fn = _.b(fn, a)
						g.p ? fn(b, cx) : _.in(0, function () {
							fn(b, cx)
						})
						return cx
					}
					return [a, b, cx, g.o]
				}
				else if (b.of(k)) {
					if (F(fn)) {
						fn = _.b(fn, b)
						g.p ? fn(a, cx) : _.in(0, function () {
							fn(a, cx)
						})
						return cx
					}
					return [b, a]
				}
			}
			cx.these = function (p1, p2, fn) {
				var cx = this, g = G(arguments), fA = cx.fA(), fB = cx.fB(), a = fA, b = fB
				if (a.of(p1) && b.of(p2)) {
					if (fn) {
						_.b(fn, a)(b, cx);
						return cx
					}
					return [a, b]
				}
				else if (b.of(p1) && a.of(p2)) {
					if (fn) {
						_.b(fn, b)(a, cx);
						return cx
					}
					return [b, a]
				}
			}
			cx.with2 = cx.ofThese = cx.theseTwo = cx.withBoth = cx.isBetween = cx.these
			cx.btwn = cx.withBothFrom = cx.bw = cx.btw = cx.between = cx.these
			o = F(g.t) || (g.s && !F(g.s)) ?
			{k: g.f, k1: g.s, fn: g.t} :
			{k: g.f, fn: g.s}
			return o.k1 ? cx.these(o.k, o.k1, o.fn) :
					cx.this(o.k, o.fn)
			function alt() {
			}
			
			cx.wi = function () {
				var g = G(arguments), cx = this, o
				o = g.s && !F(g.s) ? {k1: g.f, k2: g.s, fn: g.t}
						: {k: g.f, fn: g.s}
				return o.k2 ? cx.both(o.k1, o.k2, o.fn, g.o) :
						cx.this(o.k, o.fn, g.o)
			}
		}
		cx.includes = cx.ic = function () {
			var cx = this, g = G(arguments)
			var o = {k: g.f, fn: g.s}
			if (o.fn) {
				if (cx.fA(o.k)) {
					cx.fnAB(o.fn)
				} //_.b(o.fn, cx.A())(cx.B(), cx)
				else if (cx.fB(o.k)) {
					cx.fnBA(o.fn)
				} //  _.b(o.fn, cx.B())(cx.A(), cx)
				return cx
			}
			cx.AB = function () {
				var cx = this
				return [cx.fA(), cx.fB(), cx]
			}
			cx.BA = function () {
				var cx = this
				return [cx.fB(), cx.fA(), cx]
			}
			//if this fixture 'of' that string(kind),fixt,or body
			//if so always passed back an array with the first mentioned selector in the [0] pos
			return cx.fA(o.k) ? cx.AB() :
					cx.fB(o.k) ? cx.BA() :
							false //[cx.A(), cx.B(), cx] : //[cx.B(), cx.A(), cx] :
			//if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx
		}
		cx.between = cx.bw = function () {
			var cx = this, g = G(arguments)
			// bw(k,k1)  or  bw(k,k1,fn)
			var fA = cx.fA()
			var fB = cx.fB()
			var fn = g.t
			if (F(fn)) {
				if (fA.of(g.f) && fA.of(g.s)) {
					fn.apply(fA, [fB, cx])
				}
				else if (fB.of(g.f) && fA.of(g.s)) {
					fn.apply(fB, [fA, cx])
				}
				return cx
			}
			return cx.fA(g.f) && cx.fB(g.s) ? [cx.fA(), cx.fB(), cx] :
					cx.fB(g.f) && cx.fA(g.s) ? [cx.fB(), cx.fA(), cx] :
							false
		}
		cx.with = function (a, b, c) {
			if (U(b) || F(b)) {
				return this.includes(a, b)
			}
			return this.between(a, b, c)
		}
		cx.fnAB = function (fn) {
			var cx = this
			_.b(fn, cx.A())(cx.B(), cx)
			return cx
		}
		cx.fnBA = function (fn) {
			var cx = this
			_.b(fn, cx.B())(cx.A(), cx)
			return cx
		}
		cx.kFn = function (k, fn) {
			var cx = this
			if (cx.A().of(k)) {
				cx.fnAB(fn)
			}
			else if (cx.B().of(k)) {
				cx.fnBA(fn)
			}
		}
		cx.not = cx.nof = cx.withoutAny = cx.ex = cx.excludes = function (u) {
			return !this.w(u)
		}
		cx.dsIf = cx.destroyIf = cx.setDestroyIf = function () {
			var cx = this
			_.e(arguments, function (k) {
				cx.a().setDestroyIf(k);
				cx.b().setDestroyIf(k)
			})
			return cx
		}
		cx.dsOIf = cx.destroyOtherIf = function (k) {
			var a = this.a(), b = this.b()
			if (a.is(k)) {
				b.setDestroy()
			}
			else if (b.is(k)) {
				a.setDestroy()
			}
		}
		cx.yesNo = function (ar1, ar2) {
			var ok = true
			_.e(ar1, function (k) {
				if (cx.nof(k)) {
					ok = false
				}
			})
			_.e(ar2, function (k) {
				if (cx.of(k)) {
					ok = false
				}
			})
			return ok
		}
		cx.exIn = cx.excludeInclude = function (no, yes) {
			return this.w(yes) && this.excludes(no)
		}
		cx.inEx = cx.includeExclude = function (yes, no) {
			return this.w(yes) && this.excludes(no)
		}
		cx.includes1 = function (what, func) {
			var cx = this,
					fA = cx.A(),
					fB = cx.B()
			if (F(func)) {
				if (fA.of(what)) {
					_.bind(func, fA)(fB, cx)
				}
				else if (fB.of(what)) {
					_.bind(func, fB)(fA, cx)
				}
				return this
			}
			if (fA.of(what)) {
				return [fA, fB]
			}
			if (fB.of(what)) {
				return [fB, fA]
			}
			return false
		}
		cx.between1 = function (p1, p2, func) {
			var cx = this, fA = cx.A(), fB = cx.B()
			if (F(func)) {
				if (fA.of(p1) && fB.of(p2)) {
					return _.bind(func, fA)(fB, cx) || cx
				}
				if (fB.of(p1) && fA.of(p2)) {
					return _.bind(func, fB)(fA, cx) || cx
				}
			}
			if (fA.of(p1) && fB.of(p2)) {
				return [fA, fB]
			}
			else if (fB.of(p1) && fA.of(p2)) {
				return [fB, fA]
			}
			return false
		}
	}
}
function collideWith() {
	b.cl = function () {
		var b = this, w = b.W(), g = G(arguments), o
		o = g.F_ ? {fn: g.f, in0: g.s} :
		{k: g.f, fn: g.s, in0: g.t}
		o.k ? w.cl(b, o.k, o.fn, o.in0) :
				w.cl(b, o.fn, o.in0)
		return b
	}
	b.cl0 = function () {
		var b = this, w = b.W(), g = G(arguments), o
		o = g.F_ ? {fn: g.f, in0: g.s} :
		{k: g.f, fn: g.s, in0: g.t}
		o.k ? w.cl0(b, o.k, o.fn) :
				w.cl0(b, o.fn)
		return b
	}
	b.coll = function (clas, func) {
		var body = this, w = body.wor()    //merged these 2, but the the fixt 'coll' met is more complete/flexible  //b.collWithKind =
		// if body collides with ANYTHING
		// if body collides with body/fixt of specific kind
		// if body collides with specific body
		// if body collides with specific fixt
		// but always pass fixt into the cb
		if (F(clas)) {
			func = clas;
			clas = ''
		} //if clas NOT passed in
		w.beg(function (cx) {
			var fA = cx.A(), fB = cx.B(), bA = cx.a(), bB = cx.b()
			if (body.is(bA) && fB.of(clas)) {
				_.bind(func, fA)(fB, cx)
			}
			if (body.is(bB) && fA.of(clas)) {
				_.bind(func, fB)(fA, cx)
			}
		})
		return this
	}
// uses contact list
	b.col2 = function (func) { //brilliant   =b.eachCx =b.withFixtsCollidingWithMe
		//uses the OTHER way to check contacts !!!!!!
		var body = this, contacts = body.cx(),
				next, fixt, notMyFixt, fA, fB
		if (!contacts) {
			$l('no contacts');
			return false
		}
		c = contacts = contacts.contact
		n = 0
		while (contacts) {
			n++
			next = contacts.GetNext()
			fA = contacts.A()
			fB = contacts.B()
			bA = contacts.a()
			notMyFixt = body.is(bA) ? fB : fA  //find the fixture whose body is not me
			$l(notMyFixt.K() + ' - ' + notMyFixt.B().K())
			_.bind(func, body)(notMyFixt, contacts)   //and call func on IT (along with the actual cx)
			contacts = next
		}
	}
	f.cl = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), o
		o = g.F_ ? {fn: g.f, in0: g.s} :
		{k: g.f, fn: g.s, in0: g.t}
		o.k ? w.cl(f, o.k, o.fn, o.in0) :
				w.cl(f, o.fn, o.in0)
		return f
	}
	f.cl0 = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), o
		o = g.F_ ? {fn: g.f, in0: g.s} :
		{k: g.f, fn: g.s, in0: g.t}
		o.k ? w.ofThese0(f, o.k, o.fn) :
				w.ofThis0(f, o.fn)
		return f
	}
	w.cl = function () {
		var w = this, g = G(arguments)
		if (g.F) {
			w.b(function (cx) {
				_.b(g.f, cx.A())(cx.B(), cx)
			})
		}
		else {
			w.b(function (cx) {
				cx.w(g.f, g.s, g.t)
			})
		}
		return w
	}
	w.cl = function () {
		var w = this, g = G(arguments), o
		o = g.s && !F(g.s) ?
		{k: g.f, k2: g.s, fn: g.t} :
		{k: g.f, fn: g.s}
		w.b(function (cx) {
			o.k2 ? cx.wi(o.k, o.k2, o.fn) :
					cx.wi(o.k, o.fn)
		})
		return w
	}
	w.CL = function (k) {
		var w = this
		var fn = function rc(a, b, c) {
			w.cl(k, a, b, c)
			return rc
		}
		return fn
	}
	w.cl0 = function () {
		var w = this, g = G(arguments)
		w.cl.apply(w, g.concat('0'))
		return w
	}
	w.with = w.collWith = function (a, b, c) {
		var w = this
		w.beg(function (cx) {
			cx.with(a, b, c)
		})
		return this
	}
	w.class = function (k) {
		var w = this
		var ob = {
			class: k, k: k,
			world: w, w: w
		}
		ob.with = ob.collWith = function (k, func) {
			var ob = this
			if (O(k)) {
				_.each(k, function (fun, k) {
							ob.with(k, fun)
						}
				)
			}
			else {
				w.with(this.class, k, func)
			}
			return this
		}
		return ob
	}
	f.coll = function (what, func) {
		var that = this, fixt = this, beginFunc //ultimate func for FIXTURE COLL
		// you can specify what happens when a fixture hits:
		//ANYTHING
		// body/fixt of certain kind
		// specific fixt
		// specific body
		//but it its callback ALWAYS passed back the other fixt that was actually hit
		// and 'this' is set to THIS fixt within the cb
		//should cover class AND fixt AND body cases!!!
		if (F(what)) {
			func = what;
			what = ''
		}
		func = _.bind(func, fixt)
		w.beg(function (cx) {
			var fA = cx.A(), fB = cx.B()
			if (fixt.is(fA) && fB.of(what)) {
				func(fB, cx)
			}
			if (fixt.is(fB) && fA.of(what)) {
				func(fA, cx)
			}
		})
		return this
	}
	w.collideAny = function (what, func) {
		return this.bg(what, function (cx) {
			$.do(function () {
				func(cx)
			})
		})
	}
	w.coll = function (k1, k2, func) {
		var that = this,
				w = this,
				name = k1 + k2
		if (F(k2)) {
			return this.collideAny(k1, k2)
		}
		this.beg(function (cx) {
			if (cx.with(k1, k2)) {
				that.flag(name, cx)
			}
		})
		cjs.tick(function () {
			var cx = that.flagged(name)
			if (cx) {
				func(cx)
			}
		})
	}
	b.cl = b.b = b.collide = function () {
		var b = this, w = b.W(), g = G(arguments), o
		// if body collides with ANYTHING
		// if body collides with body/fixt of specific kind
		// if body collides with specific body
		// if body collides with specific fixt
		// but always pass fixt into the cb
		if (F(g.f) && F(g.s)) {
			this.cl(g.f)
			w.end(b, g.s)
			return b
		}
		o = g.F_ ? {fn: g.f, k: ''} : {k: g.f, fn: g.s}
		w.b(function (cx) {
			var fA = cx.A(), fB = cx.B()
			if (b.of(cx.a()) && fB.of(o.k)) {
				if (o.fn) {
					_.b(o.fn, fA)(fB, cx);
					return w
				}
				return [fA, fB, cx]
			}
			else if (b.of(cx.b()) && fA.of(o.k)) {
				if (o.fn) {
					_.b(o.fn, fB)(fA, cx);
					return w
				}
				return [fB, fA, cx]
			}
		})
		return b
	}
	b.coll = b.collWithKind = function (func, func2) {
		var that = this
		if (S(func) && F(func2)) {
			this.W().begin(function (cx) {
				if (cx.a() == that && cx.b().is(func)) {
					func2(cx.b())
				}
				if (cx.b() == that && cx.a().is(func)) {
					func2(cx.a())
				}
			})
		}
		else {
			w.begin(function (cx) {
				if (cx.a() == that) {
					func(cx.a())
				}
				if (cx.b() == that) {
					func(cx.b())
				}
			})
		}
		return this
	}
	f.cl = f.coll = function (k, fn) {
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
	f.cl = f.col = f.coll = function (k, fn) {
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
	b.cl = b.col = b.coll = function (k, fn) {
		var b = this, w = b.W()    //merged these 2, but the the fixt 'coll' met is more complete/flexible  //b.collWithKind =
		// if body collides with ANYTHING
		// if body collides with body/fixt of specific kind
		// if body collides with specific body
		// if body collides with specific fixt
		// but always pass fixt into the cb
		if (F(k)) {
			fn = k;
			k = ''
		} //if clas NOT passed in
		w.beg(function (cx) {
			var fA = cx.A(), fB = cx.B(), bA = cx.a(), bB = cx.b()
			if (b.is(bA) && fB.of(k)) {
				_.b(fn, fA)(fB, cx)
			}
			if (b.is(bB) && fA.of(k)) {
				_.b(fn, fB)(fA, cx)
			}
		})
		return b
	}
	w.cl = w.w = w.k = w.on = w.with = w.collWith = function () {
		var w = this, g = G(arguments)
		w.b(function (cx) {
			cx.w(g[0], g[1], g[2])
		})
		return w
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
}
function flag() {
	w.wn = w.whe = w.when = function () {
		var w = this, g = G(arguments), o
		o = F(g[0]) ? {b: g[0], e: g[1]}
				: F(g[1]) ? {k: g[0], b: g[1], e: g[2]}
				: {k: g[0], k2: g[1], b: g[2], e: g[3]}
		//when b,[e]  k,b,[e]  k,k2,b,[e]
		if (o.k2) {
			w.b(o.k, o.k2, o.b);
			if (o.e) {
				w.end(o.k, o.k2, o.e)
			}
		}
		else if (o.k) {
			w.b(o.k, o.b);
			if (o.e) {
				w.end(o.k, o.e)
			}
		}
		else {
			w.b(o.b);
			if (o.e) {
				w.end(o.e)
			}
		}
		return w
	}
	w.wl = w.whi = w.while = function (k, k2, fn) {
		var w = this, push
		if (F(fn)) {
			w.wn(k, k2,
					function () {
						push = true
					},
					function () {
						push = false
					})
			z(function () {
				if (push) {
					fn()
				}
			})
		}
		else if (F(k2)) {
			w.wn(k, function () {
				push = true
			}, function () {
				push = false
			});
			z(function () {
				if (push) {
					k2()
				}
			})
		}
		return w
	}
	b.wl = b.whi = b.while = function (k, fn) {
		var b = this, w = b.W()
		w.wl(b, k, fn)
		return b
	}
	b.wn = b.whe = b.when = function (k, oB, oE) {
		var b = this,
				w = b.W()
		w.when(b, k, oB, oE)
		return b
	}
	b.my = function (k, fn) {
		var b = this, w = b.W()
		if (F(fn)) {
			w.b(function (cx) {
				cx.w(b,
						function (f) {
							if (this.of(k)) {
								_.b(fn, this)(f, cx)
							}
						})
			})
		}
		else {
			w.when(b,
					function () {
						b.my[k] = 1
					},
					function () {
						b.my[k] = 0
					})
		}
		return b
	}  //so trig is to specify a sp body on what to do when one of its own fixts of a certain k has a col
	WHEN = function () {
		W('A').G(1)
		r = w.S(500, 300, 'r', 500, 300, '-').K('r')
		y = w.y(1100, 300)
		//work
		y.cl(function () {
			w.D(600, 300, $r(), 22)
		})
		y.lD(30)
		// y.cl('r', function(){w.C('q') })
		//dont work
		//y.cl(r, function(){w.C('q') })
		//w.cl(y, function(){ w.C('z')    })
	}
	KING = function () {
		W({g: 12}).Y()
		w.S(200, 250, 'r', 900, 20);
		w.S(400, 250, 'w', 20, 40)
		_.t(10, function () {
			w.D(100, 100, 'z', 10).K('ball')
			w.D(200, 100, 'w', 10)
		})
		_.t(3, function () {
			w.me(900, 100, 5).fR().my('feet', function () {
				this.lV(-2, -10)
			})
			w.me(700, 100, 5).fR().my('feet', function () {
				this.lV(2, -10)
			})
		})
		vor = w.S(600, 200).K('vor')
		vor.cir({s: 1, c: 'z', r: 340, o: .2, C: 'z', l: 20})
		y.wl(vor, function () {
			alert('y.wl(vor,fn)')
			w.e('ball', function (b) {
				b.tow(600, 200)
			})
		})
	}
//linVel from worldPt
	b.lVW = b.linVelWor = function () {
		var b = this, g = G(arguments),
				v = V(g[0], g[1]),
				vel
		if (g.m) {
			vel = b.GetLinearVelocityFromWorldPoint(v.div()).mult()
		}
		else {
			vel = b.GetLinearVelocityFromWorldPoint(v)
		}
		return vel.dec(2)
	}
//helper shortcut
	cx.lV = cx.linVel = function (b) {
		return b.lVW(this.cen())
	}
//linVel from LocalPoint.. i think not used
	b.lVL = b.linVelLoc = function (v, y) {
		v = V(v, y);
		return this.GetLinearVelocityFromLocalPoint(v.div()).mult().dec(2)
	}//usecase?
	VEL = function () {
		W({g: 0}).Y()
		b = w.ball()
		r = w.S(300, 300, 'r', 30).K('r')
		w.cl('r', function (other, cx) {
			var pt = cx.cen(), v1 = b.lVW(pt), v2 = b1.lVW(pt)
			w.D(600, 300, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)
		})
	}
	NOTSUREVEL = function () {
		W({g: 0}).Y()
		b = w.ball()
		b1 = w.ball(300, 300)
		w.b(function (cx) {
			var p, v1, v2, temp, i
			cx.w(b, b1, function (b1, cx) {
				var b = this
				pt = cx.cen()
				v1 = b.lVW(pt);
				v2 = b1.lVW(pt)
				temp = w.D(600, 300, 'r', 10);
				$.in(.5, function () {
					temp.kill()
				})
				i = temp.I(v1.x - v2.x, v1.y - v2.y)
			})
		})
	}
	GHOSTS = function () {
		W({g: 2});
		b = w.D(100, 100, 'b', 50).d(1);
		r = w.ball(400, 400, 'r', 80).d(1)
		z(function () {
			var v = b.lVW(b).div(10);
			r.lV(v)
		})  // set b2's linVel to b's linWorVel (scaled down by 20) // $l(b.lV());   //b3= w.ball(100,100,10); $l('vel: ' + b3.lV().x); $l('velW: ' + b3.lVW().x); $l('velL: ' + b3.lVL().x)
	}
	CENPTS = function () {
		W(0).C('z')
		//technically.. this is all depped by cx.cen
		w.bump(50, 550, 200)
		w.bump(800, 300, 80)
		w.brick(750, 300, 150, 100)
		w.ball(300, 300, 80)
		w.beg(function (cx) {
			var a = cx.A(), b = cx.B()
			markAABB(a);
			markAABB(b) // dot both upper and lower bounds of AABB of both fixts
			a.dot('g');
			b.dot('r')  //dot center of both fixts
			w.dot('y', M.lC(a.cen(), b.cen()))//dot center of their centers
			//2do:draw line to connect these pts..
		})
		w.chalk('here you can clearly see that the center of the two fixtures',
				'is not necessarily the same as the contact point,',
				'and can only represent collision center if fixtures are similar size.',
				'..perhaps halfway between this and the actual contact point would be nice')
		function markAABB(f) {
			ab = f.GetAABB()
			lb = ab.lowerBound
			up = ab.upperBound
			lx = lb.x * 30
			ly = lb.y * 30
			ux = up.x * 30
			uy = up.y * 30
			dx = ux - lx
			dy = uy - ly
			w.dot('w', ux, uy)
			w.dot('p', lx, ly)
		}
	}
	later = function () {
		old = function () {
			HAT = function () {
				W()
// could i automatically have body listen to their sens?
				w.ball().r(.3)
				p = w.me(400, 150, 5)
				p.my('hat', function () {
					p.bS('guy')
				})
				p.my('right');
				p.my('left')
				$.space(function () {
					if (p.trg.right) {
						p.I(100, -400)
					}
					if (p.trg.left) {
						p.I(-100, -400)
					}
				})
			}
			CONTACTS = function () {
				W()
				var centerFx = b2d.cir(80).K('center')
				b = w.D(500, 300, 'r', [
					centerFx,
					b2d.rec(60, 90, 0, 40, 10).sen(1).K('sen1')
				]).aV(100)
				//wow!  no friction?? ..b and floor both hav fr .2!
				w.D(700, 300, 'p', [
					centerFx,
					b2d.cir(100).sen(1).K('sen2')
				]).aV(100)
				w.col('s1', 's2',
						function () {
							w.D(100, 100, 'w', 100)
						})
				w.b(function (cx) {
					if (cx.w('s1', 's2')) {
						w.flag('new')
					}
				}) //w.on('new', function(){w.ball()})
			}
			THROTTLE = function () {
				W()
				b = w.ball(300, 300, 100)
				b1 = w.brick(300, 500)
				time = 0
				$.ev(1, function () {
					time++
				})
				cjs.t(function () {
					if (w.flagged('moveBrick')) {
						b1.X(20, '+')
					}
				})
				lastTime = 0
				change = 0
				w.b(function (cx) {
					if (cx.w('brick')) {
						if (lastTime != time) {
							lastTime = time;
							w.flag('moveBrick')
						}
					}
				})
			}
			b.when1 = function () {
				var b = this, w = b.W(), ob = {}
				ob.cxs = function (k, fn) {
					w.beg(k, fn)
					return {
						after: function (fn) {
							w.end(k, fn)
						}
					}
				}
				return ob
			}
			rM = function () {
				cx.rM = cx.manifold = cx.gM = function () {
					var cx = this;
					return cx.GetManifold()
				}
				cx.lN = cx.localPlaneNormal = cx.lPN = function () {
					var cx = this
					return cx.rM().m_localPlaneNormal
				}
				cx.lP = cx.localPoint = function () {
					var cx = this;
					return cx.rM().m_localPoint
				}
				cx.n = cx.pointCount = cx.pC = function () {
					var cx = this
					return cx.rM().m_pointCount
				}
				cx.ps = cx.points = cx.p = function () {
					var cx = this
					return cx.rM().m_points
				}
			}; //rM()
			PRE = function () {
				W()
				w.D(200, 300, 'r', 50)
				STATE = {}
				cjs.t(function () {
					if (STATE.newBall) {
						w.D(200, 300, 'b', 50)
					}
					STATE.newBall = false
				})
				w.pre(function (cx, mf) {
					c = cx;
					m = mf
				})
				//second pam is really info about previous collision manfest?  may be usesless?!!!!
			}
			cx.cen = cx.mid = cx.center = function () {
				var cx = this
				return M.lC(
						cx.A().cen(),
						cx.B().cen())
			}
			/*
			 w.when = function(k, k2, oB, oE){var w=this,g=G(arguments)
			
			
			 //instructions:
			 //
			
			 if (F(g[0])){
			
			 oE=k2; oB=k
			 w.beg(g[1])
			 if (g[2]) { w.end(g[]) }
			 }
			
			
			 else if (F(what2)) {
			 eFn = bFn
			 bFn = what2
			 w.beg(what, oB)
			 if (eFunc) { w.end(what, eFn) }}
			
			 else if (F(oB)){
			 w.beg(what, what2, bFn)
			 if (eFn) {w.end(what, what2, eFn)}}
			
			
			
			 return w
			
			 }*/
			//cx.excludes=function(u){return !this.includes(u)}
			/*
			 cx.destroy = cx.destroyBoth = function () {
			 this.a().setDestroy()
			 this.b().setDestroy()
			 return this
			 }
			
			 cx.destroyIf = function (kind) {
			 this.a().setDestroyIf(kind);
			 this.b().setDestroyIf(kind)
			 }
			
			 cx.destroyOtherIf = function (k) {
			 var a = this.a(), b = this.b()
			 if (a.is(k)) {
			 b.setDestroy()
			 }
			 else if (b.is(k)) {
			 a.setDestroy()
			 }
			
			 }
			
			 */
			w.collx = function (k1, k2, fn) {
				var w = this,
						n = k1 + k2,
						cx
				if (F(k2)) {
					return w.collideAny(k1, k2)
				}
				else {
					w.beg(function (cx) {
						if (cx.with(k1, k2)) {
							w.flag(n, cx)
						}
					})
					cjs.t(function () {
						if (cx = w.flagged(n)) {
							fn(cx)
						}
					})
				}
			}
			w.classx = function (k) {
				var w = this,
						ob = {class: k, k: k, world: w, w: w}
				ob.with = ob.collWith = function (k, fn) {
					var ob = this
					if (O(k)) {
						_.e(k, function (fn, k) {
							ob.with(k, fn)
						})
					}
					else {
						w.with(w.class, k, fn)
					}
					return w
				}
				return ob
			}
			w.collideAny = function (a, fn) {
				var w = this
				w.beg(a, function (cx) {
					$.do(function () {
						fn(cx)
					})
				})
				return w
			}
			w.flagx = function (flag, val) {
				var w = this
				w.flags = w.flags || {}
				if (U(val)) {
					val = true
				}
				w.flags[flag] = val
				return w
			}
			w.flaggedx = function (flag) {
				var w = this, wasFlagged
				w.flags = w.flags || {}
				wasFlagged = w.flags[flag]
				if (wasFlagged) {
					w.flags[flag] = false
				}
				return wasFlagged
			}
			w.onx = function (onWhat, fn) {
				var w = this, val
				//this lets you specify a function to be run,
//immediately whenever a specific flag is set
//(and it is passed the value)
				//interesting default !!!!!!!
				//func=func||function(val){val()}
				cjs.t(function () {
					val = w.flagged(onWhat)
					if (val) {
						fn(val)
					}
				})
				return w
			}
			b2d.superManifold = function (m) {//used????
				m.lPN = m.m_localPlaneNormal
				m.lP = m.m_localPoint
				m.pC = m.m_pointCount
				m.p = m.m_points
				m.t = m.m_type
				return m
			}
			function SuperImpulses(impulses) {
				impulses.n = impulses.nI = function () {
					return impulses.normalImpulses
				}
				impulses.t = impulses.tI = function () {
					return impulses.tangentImpulses
				}
				return impulses
			}

//do any of these get used? i think filterData does
			b2d.manager = b2d.contactManager = b2d.cM = function () {//used?
				var m = new BXD.b2ContactManager
				m.c = m.cl = m.Collide
				m.a = m.aP = m.AddPair
				m.f = m.fNC = m.FindNewContacts
				m.d = m.ds = m.Destroy
				return m
			}
			b2d.cxFilt = b2d.filter = function () {//used?
				var f = new b2d.b2ContactFilter
				f.rC = f.RayCollide
				f.sC = f.ShouldCollide
				return f
			}
			b2d.neither = function (b1, b2) {//d~data
				return {
					is: function (d) {
						return !b1.is(d) && !b2.is(d)
					}
				}
			}
			b2d.either = function (b1, b2) {
				return {
					is: function (d) {
						return b1.is(d) || b2.is(d)
					}
				}
			}
			b2d.either1 = function (ob1, ob2, is1, is2) {
				return (ob1.is(is1) && ob2.is(is2)) ||
						(ob1.is(is2) && ob2.is(is1))
			}
			//Array.prototype.sen=function(k){var arr=this; arr.isSensor=k||true; return arr}
		}
///////
///////  lVW
///////
//from tx:
		/*
		 w.l(1000,200,100,900,'-')
		 w.l (600,0,700,500)
		 w.l(200,200,500,500,'+')
		 w.dr(350,260, 200,200,'-')
		 w.dr( 500,240, 160,160,'+')
		 w.dr( 400,200, 100,100)
		 b= w.D(100, 200, 'y', 150, 100).d(.5).$(function(){this.B().I(0,-50)})
		 w.D(500, 400, 'y', 50, 100).d(.5).$(function(){this.B().I(0,-50)})
		 */
		bits = function () {
			f.grp = function (grpIx) {
				var f = this,
						fl = f.GetFilterData()
				if (U(grpIx)) {
					return fl.groupIndex
				}
				fl.groupIndex = grpIx
				f.SetFilterData(fl)
				return f //get/set for groupIndex
			}
			fd.grp = fd.group = fd.index = fd.gI = function (a) {
				if (U(a)) {
					return this.filter.groupIndex
				}
				this.filter.groupIndex = a;
				return this
			}
			fd.cat = fd.category = fd.cB = function (cB) {
				var fd = this
				if (U(cB)) {
					return fd.filter.categoryBits
				}
				fd.filter.categoryBits = cB
				return fd
			}
			fd.msk = function (mB) {
				var fd = this,
						fl = fd.filter, n
				if (U(mB)) {
					return fl.maskBits
				}
				if (A(mB)) {
					n = 0
					_.e(mB, function (b) {
						n += b
					})
					mB = n
				}
				fl.maskBits = mB
				return fd
			}
			fd.bit = function (cat, msk) {
				var fd = this
				fd.cat(cat).msk(msk)
				return fd
			}
			w.sCF = w.setContactFilter = w.SetContactFilter
			cx.fl = cx.filtering = cx.fFF = function () {
				var cx = this//whats the point?
				cx.FlagForFiltering()
				return cx
			}// Flag this contact for filtering.
// Filtering will occur the next time step.
			b2d.fl = b2d.filt = b2d.filterData = function () {
				var d = new b2d.Dynamics.b2FilterData
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
			f.fil = function (d) {
				var f = this
				if (U(d)) {
					return f.GetFilterData()
				}
				f.SetFilterData(d)
				return f
			}
			f.grp = function (i) {
				var f = this, fl = f.fil()
				if (U(i)) {
					return fl.groupIndex
				}
				fl.groupIndex = i
				return f.fil(fl)
			}
			f.cat = function (cB) {
				var f = this,
						d = f.fil()
				if (U(cB)) {
					return d.categoryBits
				}
				d.categoryBits = cB
				return f.fil(d)  //get/set for groupIndex
			}
			f.msk = function (m) {
				var f = this,
						fl = f.fil(), n
				if (U(m)) {
					return fl.maskBits
				}
				if (A(m)) {
					n = 0
					_.e(m, function (b) {
						n += b
					})
					m = n
				}
				fl.maskBits = m
				return f.fil(fl)
			}
			f.bit = function (cat, msk) {
				var f = this
				f.cat(cat).msk(msk)
				return f
			}
			b.bit = function (cat, msk) {
				var b = this
				b.cat(cat).msk(msk)
				return b
			}
			b.grp = function (i) {
				var b = this
				if (U(i)) {
					return b.f().grp()
				}
				b.fs(function (f) {
					f.grp(i)
				})
				return b
			}
			b.cat = function (cat) {
				var b = this
				b.fs(function (f) {
					f.cat(cat)
				})
				return b
			}
			b.grp = function (grp) {
				var b = this
				b.fs(function (f) {
					f.grp(grp)
				})
				return b
			}
			b.msk = function (m) {
				var b = this
				b.fs(function (f) {
					f.msk(m)
				})
				return b
			}
			GRP = function () {
				W(30).Y();
				w.pop('b and r')
				w.right.grp(-1)
				y.grp(-1)
				w.D(600, 400, 'r', 30).grp(-1)
				w.D(600, 400, 'r', 40).grp(-1)
				w.D(600, 400, 'r', 50).grp(-1)
				w.D(600, 400, 'b', 50, 50).grp(-2)
				w.D(600, 400, 'b', 60, 60).grp(-2)
				w.D(600, 400, 'b', 70, 70).grp(-2)
			}
			CAT = function () {
				W(40)
				b = w.D(300, 300, 'b', 200).r(1).I(100, 0)
				$.in(1, function () {
					w.pop('catbits=0');
					b.cat(0)
				})
				w.D(400, 300, 'b', 80).cat(2).grp(-3)
				w.D(400, 300, 'g', 60, 90, 0, 40, 10).grp(-3)
				w.D(300, 300, 'r', 80).bit(2, [1, 4])
				w.D(300, 300, 'y', 60, 90, 0, 40, 10).bit(8, [1, 2])
			}
			BIT = function () {
				W(2)
				w.D(300, 300, 'r', 80).bit(2, [1, 4])
				w.D(400, 30, 'b', 80).bit(2, [1, 4])
				w.D(300, 300, 'y', 60, 90).bit(4, [1, 2, 4])
				w.D(400, 300, 'g', 60, 90).bit(4, [1, 2, 4])
				w.pop('cirs are ghosts to each other')
			}
			FIL = function () {
				W(0).Y()
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
				b = w.D(300, 400, 'r', [
					b2d.rec(200, 100),
					['g', b2d.cir(40, 100, 100).K('excited'), 'oook'],
					[5, 100, 200, 0, 'orgasmic excited']
				])
				/*
				 f = b.f().K('happy')  //apparently b.fixt is LIFO
				 f.W().dot('b')
				 $l('f is f: ' + f.is(f))
				 $l('f is happy: ' + f.is('happy'))
				 f.N().K('excited')// bug: k not getting communicated above (in the b def func)
				 $l('f.N is excited: ' + f.N().is('excited'))
				 $l('f is orgasmic: ' + f.is('orgasmic'))
				 */
			}
		};
		bits()
	}
}
function collisionFiltering() {
	function group() {
		w.SCF = w.sCF = function (cF) {
			this.SetContactFilter(cF);
			return this
		}
		function bits() {
			fD.cat = fD.cB = fD.ct = function (cB) {
				var fD = this
				if (U(cB)) {
					return fD.filter.categoryBits
				}
				fD.filter.categoryBits = cB;
				return fD
			}
			fD.msk = fD.ms = fD.mask = fD.mB = function () {
				var fD = this
				var g = G(arguments)
				if (g.u) {
					return fD.filter.maskBits
				}
				var n = 0
				_.e(g, function (msk) {
					n += msk
				})
				fD.filter.maskBits = n
				return fD
				function alt() {
					fd.msk = fd.mask = fd.mB = function (a) {
						if (U(a)) {
							return this.filter.maskBits
						}
						this.filter.maskBits = a;
						return this
					}
				}
			}
			fD.bit = fD.bt = fD.bits = function (cat, msk) {
				return this.cat(cat).msk(msk)
			}
			f.msk = f.mskBit = function (msk) {
				var f = this, g = G(arguments),
						flDa = f.flDa(), num//f.msk: pass it a single number, pass it an array of numbers and it will add them up for you
				if (g.u) {
					return flDa.maskBits
				}
				if (A(g.f)) {
					num = 0
					_.e(g.f, function (bits) {
						num += bits
					})
					g.f = num
				}
				flDa.maskBits = g.f
				f.flDa(flDa)
				return f
				function dit() {
					f.mskBit = f.msk = function (msk) {
						var f = this, g = G(arguments),
								flDa = f.flDa(), num//f.msk: pass it a single number, pass it an array of numbers and it will add them up for you
						if (g.u) {
							return flDa.maskBits
						}
						if (A(g.f)) {
							num = 0
							_.e(g.f, function (bits) {
								num += bits
							})
							g.f = num
						}
						flDa.maskBits = g.f
						f.flDa(flDa)
						return f
					}
				}
			}
			f.cat = f.catBit = function () {
				var f = this, g = G(arguments),
						flDa = f.flDa()
				if (g.u) {
					return flDa.categoryBits
				}
				flDa.categoryBits = g.f;
				f.flDa(flDa);
				return f
			}
			f.bit = function (cat, msk) {
				if (N(cat)) {
					this.cat(cat)
				}
				if (N(msk) || A(msk)) {
					this.msk(msk)
				}
				return this
			}
			b.cat = function () {
				var b = this, g = G(arguments);
				if (g.u) {
					return b
				}
				b.fs(function (f) {
					f.cat(g.f)
				});
				return b
			}
			b.bit = function (cat, msk) {
				if (N(cat)) {
					this.cat(cat)
				}
				if (N(msk) || A(msk)) {
					this.msk(msk)
				}
				return this
			}
			b.msk = function () {
				var b = this, g = G(arguments);
				b.fs(function (f) {
					f.msk(g.f)
				})
				return b
			}
		}
		
		function grpIx() {
			f.grp = function (i) {
				var fl = this.GetFilterData()
				if (U(i)) {
					return fl.groupIndex
				}
				fl.groupIndex = i
				this.SetFilterData(fl)
				return this
			} //get/set for groupIndex
			f.gI = f.gr = f.grp = f.ix = function (gI) {
				var f = this,
						flD = f.flD()
				return U(gI) ? flD.gI() : f.flD(flD.gI(gI))
			}
			fD.gI = fD.gr = fD.ix = fD.grp = function (gI) {
				var fD = this
				if (U(gI)) {
					return fD.filter.groupIndex
				}
				fD.filter.groupIndex = gI;
				return fD
			}
//Changing the collision filter at run-time
//You can change each of the categoryBits, maskBits, groupIndex
// by setting a new b2Filter in the fixture.
// Quite often you only want to change one of these,
// so it's handy to be able to get the existing filter first,
// change the field you want, and put it back.
			b.gI = function (gI) {
				return this.fs(function (f) {
					f.gI(gI)
				})
			}
			fd.grp = fd.group = fd.index = fd.gI = function (a) {
				if (U(a)) {
					return this.filter.groupIndex
				}
				this.filter.groupIndex = a;
				return this
			}
			/*flDa.groupIX= flDa.grp = flDa.g = function (grp) {
			 var flDa = this
			 if (U(grp)) {
			 return flDa.groupIndex
			 }
			 flDa.groupIndex = grp
			 return flDa
			 }
			 f.groupIx=f.grp = function (grpIx) {
			 var f = this, fl = f.GetFilterData()
			 if (U(grpIx)) {
			 return fl.groupIndex
			 }
			 fl.groupIndex = grpIx
			 f.SetFilterData(fl)
			 return f
			 //get/set for groupIndex
			 }
			 fd.groupIx= fd.grp = fd.group = fd.index = fd.gI = function (a) {
			 if (U(a)) {
			 return this.filter.groupIndex
			 }
			 this.filter.groupIndex = a;
			 return this
			 }
			 f.groupIx = f.grp = function (i) {
			 var f = this, fl = f.fl()
			 if (U(i)) {
			 return fl.groupIndex
			 }
			 fl.groupIndex = i
			 return this.fl(fl)
			 }
			 b.groupIX=b.grp = function (i) {
			
			 if (U(i)) {
			 return this.f().grp()
			 }
			
			
			
			
			 this.fs(function (f) {
			 f.grp(i)
			 })
			 return this
			
			 }
			 b.groupIx=b.grp = function (grp) {
			
			 var b = this
			
			 b.fs(function (f) {
			 f.grp(grp)
			 })
			
			 return b
			
			 } */
			flDa.groupIX = flDa.grp = flDa.g = function (grp) {
				var flDa = this
				if (U(grp)) {
					return flDa.groupIndex
				}
				flDa.groupIndex = grp
				return flDa
			}
			f.groupIx = f.grp = function (grpIx) {
				var f = this, fl = f.GetFilterData()
				if (U(grpIx)) {
					return fl.groupIndex
				}
				fl.groupIndex = grpIx
				f.SetFilterData(fl)
				return f
				//get/set for groupIndex
			}
			fd.groupIx = fd.grp = fd.group = fd.index = fd.gI = function (a) {
				if (U(a)) {
					return this.filter.groupIndex
				}
				this.filter.groupIndex = a;
				return this
			}
			f.groupIx = f.grp = function (i) {
				var f = this, fl = f.fl()
				if (U(i)) {
					return fl.groupIndex
				}
				fl.groupIndex = i
				return this.fl(fl)
			}
			b.groupIX = b.grp = function (i) {
				if (U(i)) {
					return this.f().grp()
				}
				this.fs(function (f) {
					f.grp(i)
				})
				return this
			}
			b.groupIx = b.grp = function (grp) {
				var b = this
				b.fs(function (f) {
					f.grp(grp)
				})
				return b
			}
		}
		
		function flag() {
			cx.filtering = cx.fFF = function () {
				var cx = this
				cx.FlagForFiltering();
				return cx
				// Flag this contact for filtering.
// Filtering will occur the next time step.
			}
		}
		
		function filteringApps() {
		}
	}
	
	function bit() {
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
}
function makeWorldStartListening() {
	w.startListening = w.handle = function () {
		var w = this
		w._l = w._l || $cL()
		w.beginHandlers = w.BG = w.BG || [] //bH
		w.preHandlers = w.PRE = w.PRE || [] //pH
		w.postHandlers = w.PO = w.PO || [] // PH
		w.endHandlers = w.END = w.END || [] // eH
		w.listener = w.listener || b2d.listener()
		w._l.BeginContact = function (cx) {
			_.e(w.BG, function (fn) {
				_.in(0, function () {
					fn(cx)
				})
			})
		}
		//w._l.BeginContact = $CL.handle(w.BG)
		//function (cx,d) {_.e(w.BG, function (fn) {fn(cx,d)})}
		w._l.PreSolve = function (cx, d) {
			_.e(w.PRE, function (fn) {
				fn(cx, d)
			})
		}
		w._l.PostSolve = function (cx, d) {
			_.e(w.PO, function (fn) {
				fn(cx, d)
			})
		}
		w._l.EndContact = function (cx, d) {
			_.e(w.END, function (fn) {
				fn(cx, d)
			})
		}
		W._l = w._l || $CL()
		_.x(w._l, {
			BeginContact: function (cx) {
				_.e(w.BG, function (fn) {
					_.in(0, function () {
						fn(cx)
					})
				})
			},
			EndContact: function (cx) {
				_.e(w.END, function (fn) {
					_.in(0, function () {
						fn(cx)
					})
				})
			},
			PreSolve: function (cx, i) {
				_.e(w.PRE, function (fn) {
					fn(cx, i)
				})
			},
			PostSolve: function (cx, pam2) {
				_.e(w.PO, function (fn) {
					_.in(0, function () {
						fn(cx, pam2)
					})
				})
			}
		})
		w.SCL(w._l)
		return w
	}
}
function more(){
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
	PROTOSIG = INC = function () {
		W()
		//cx.inc protosig
		//     str    :  str,fn   :   obj   :   obj,fn
		var fisherman1 = w.p()
		w.b(function (cx) {
			cx.ic(fisherman1, function (fish) {
				this.eat(fish.B())
			})
			var oneWasFisherman1 = cx.ic(fisherman1);
			if (oneWasFisherman1) {
				$l('the fish is: ' + Fisherman1[1])
			}
			cx.ic('fish', function (fisherman) {
				this.swimTo(fisherman.B())
			})
			var oneWasFish = cx.ic('fish');
			if (oneWasFish) {
				$l('the fish is: ' + oneWasFish[0])
			}
		})
	}//begin
	old = function () {
//should deprecate!!!!!
/// shortcuts.. but each one will completely override the listener
// only for simple use cases (one type of listener, specified once)
		w.beginX = w.onBeginContact = w.oB = function (func) {//=w.contactBegin
			this.listen(b2d.listener().begin(func))
			return this
		}
		w.endX = w.onEndContact = w.oE = function (fn) {
			this.listen(b2d.listener().end(fn))
			return this
		}
		w.preX = function (fn) {
			this.listen(b2d.listener().pre(fn))
			return this
		}
		w.postX = function (func) {
			this.listen(b2d.listener().post(func))
			return this
		}
//////
	}
}