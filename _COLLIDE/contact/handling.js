w.b = w.bg = w.beg = function () {
	//ADDS one or more handlers to beginHandlers array
	var w = this
	G(arguments).e(function (fn) {
		w.BG.push(fn)
	})
	return w
}
function handlingApps() {
	BEGIN = BEG = function () {
		W().ba()
		w.ship()
		w.roof.kill()
		w.on('new', function () {
			w.ba(300, 100, 2)
		})
		w.b(function () {
			w.flag('new')
		})
	}
	FLAGTHROTTLE = THO = function () {
		W().ball(300, 300, 100)
		brick = w.brick(300, 500)
		w.st.squareDot(400, 100)
		$t(function () {
			if (w.flagged('moveBrick')) {
				brick.X(brick.X() + 20)
			}
		})
		time = 0
		lastTime = 0
		_.ev(1, function () {
			time++
		})
		w.b(function (cx) {
			if (cx.w('brick')) {
				if (lastTime != time) {
					lastTime = time;
					w.flag('moveBrick')
				}
			}
		})
	}
	AUTOFLAGCHECKER = AFC = FLAG = FLG = function () {
		W()
		p = w.p('hoppy')
		$flag({
			warp: function (p) {
				p.XY(200, 100)
			},
			log: function () {
				$l('haha')
			}
		})
	}
	VORTEX = VOX = function () {
		$l('game: get rid of balls.  u can leave nest, but must return to claim victory')
		b2d.levelJet()
		w.rectStat(200, 250, 200, 20)
		floor.kill()
		_.t(20, function () {
			w.ba(100, 100, 10).K('ball')
		})
		vort = w.stat(600, 200, $cF(200).mS()).K('vortex')
		w.while('vortex', 'player', function () {
			w.eB('ball', function (b) {
				b.tow(600, 200)
			})
		})
	}
	VORTEXOK = VOK = function () {
		W({W: 600, H: 300, g: 10})
		p = w.p(2.5).con('thrust')
		moveB = function () {
			b.lV(0, -5)
		}
		moveX = function () {
			bx.lV(0, -5)
		}
		b = w.ball(100, 100, 10).K('ball')
		bx = w.box(50, 100, 14)
		w.stat(600, 200, $cF(200).mS()).K('vortex')
		//this happens every RE-ENTRY into sensor (when)
		w.when('vortex', 'player', moveX)
		//this happens repeadly until sensor exited
		w.while('vortex', moveB)
		$l('right now ball goes up on coll with vortex.  but what about continued pressure?',
				'something with trig?', 'fixed.. (see code)')
	}
	KINGOFMES = MES = function () {
		
		//all jumping together???!
		//w= b2d.mW()
		$levelWalls()
		_.t(5, function () {
			w.me(2.5).X(400)
					.trig('foot', function () {
						this.I(20, -40)
					}).re(1)
			w.me(2.5).X(100)
					.trig('foot', function () {
						this.I(-20, -40)
					})
		})
	}
	HAT = function () {
		// could i automatically have body listen to their sensors?
		$levelWalls()
		w.ball().re(.3)
		p.XY(400, 150).trig('right').trig('left')
				.trig('head', function () {
					this.bS('guy')
				})
		$.space(function () {
			if (p.trig.right) {
				p.I(100, -400)
			}
			if (p.trig.left) {
				p.I(-100, -400)
			}
		})
	}
	VORTEX1 = function () {
		W([1200, 800], {g: 8}).Y()
		vor = w.S(600, 200)
		cir = vor.cir({s: 1, c: 'z', r: 140, C: 'z', l: 20})
		cir.sp().al(.5)
		w.S(200, 250, 'r', 400, 20);
		w.S(400, 250, 'w', 20, 40)
		_.t(10, function () {
			w.D(100, 100, 'z', 10).K('ball')
			w.D(200, 100, 'w', 10)
		})
		y.wl(vor, function () {
			w.e('ball', function (b) {
				b.tow(600, 200)
			})
		})
	}
	MES = FEET = function () {
		W()
		_.t(3, function () {
			w.me(900, 100, 5).fR().my('feet', function () {
				this.lV(-2, -10)
			})
			w.me(700, 100, 5).fR().my('feet', function () {
				this.lV(2, -10)
			})
		})
	}
	TETHER1 = function () {
		W([1200, 800], {g: 8}).Y()
//w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
		//  w.D(500, 200, 'z',30).K('z'); w.wn('z', function () {$l('beg')}, function () {$l('end')})
		b = w.D(100, 100, 'b', 40).warp()
		x = w.D(50, 100, 'x', 60, 60).K('x').warp()
		w.S(1000, 200).cir({r: 300, c: 'w', C: 'o', l: 10, o: 0.2, s: 1}).K('vor')
		y.warp()
				.wl('vor', function () {
					b.vY(-20)
				})
				.wn('vor', function () {
					x.vY(-20)
				}, function () {
					w.C($r())
				})
	}
	PLAT1 = function () {
		w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
			w.D(50, 100, 'x', 60, 60).K('x').warp()
		})
		w.D(440, 100, 'y', 50).K('ball');
		w.cl('ball', function (cx) {
			this.B().dot()
		})
	}
	VORTEX = LEDGE = function () {
		W([1200, 800], {g: 8}).Y()
		vor = w.S(600, 200)
		vor.cir({s: 1, c: 'z', r: 140, o: .2, C: 'z', l: 20})
		w.ledge()
		y.wl(vor, function () {
			w.e('ball', function (b) {
				b.tow(600, 200)
			})
		}).warp().wl('vor', function () {
			b.vY(-20)
		}).wn('vor', function () {
			x.vY(-20)
		}, function () {
			w.C($r())
		})
	}
	DIVEBALL = DOT = PLAT = function () {
		W()
		w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
			w.D(50, 100, 'x', 60, 60).K('x').warp()
		})
		w.D(440, 100, 'y', 50).K('ball');
		w.cl('ball', function (cx) {
			this.B().dot()
		})
	}
	SPETHER = ALPHA = WARPBALL = WARP = OPACITY = CLOUD = function () {
		W([1200, 800], {g: 8, w: '='}).Y()
		w.y().warp()
		b = w.D(100, 100, 'b', 40).warp()
		_.t(3, function () {
			w.me(900, 100, 5).fR().my('feet', function () {
				this.lV(-2, -10)
			})
			w.me(700, 100, 5).fR().my('feet', function () {
				this.lV(2, -10)
			})
		})
		w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
		w.D(500, 200, 'z', 30).K('z');
		w.wn('z', function () {
			$l('beg')
		}, function () {
			$l('end')
		})
		x = w.D(50, 100, 'x', 60, 60).K('x').warp()
		b = w.S(1000, 200)
		b.cir({r: 300, c: 'w', C: 'o', l: 10, al: 0.2, s: 1}).K('vor')
		b.f().sprites[0].al(.8)
	}
	WCIR = WBALL = WCIRC = ALPHA = MY = function () {
		W()
// could i automatically have body listen to their sens?
		w.ball().r(.3)
		workingGoomba = p = w.p(900, 450).cn('jump')
		p.my('hat', function () {
			p.bS('guy')
		})
		p.my('right');
		p.my('left')
		$.space(function () {
			if (p.my.right) {
				p.I(100, -400)
			}
			if (p.my.left) {
				p.I(-100, -400)
			}
		})
	}
	VORTEX1 = function () {
		W([1200, 800], {g: 8}).Y()
		vor = w.S(600, 200)
		cir = vor.cir({s: 1, c: 'z', r: 140, C: 'z', l: 20})
		cir.sp().al(.5)
		w.S(200, 250, 'r', 400, 20);
		w.S(400, 250, 'w', 20, 40)
		_.t(10, function () {
			w.D(100, 100, 'z', 10).K('ball')
			w.D(200, 100, 'w', 10)
		})
		y.wl(vor, function () {
			w.e('ball', function (b) {
				b.tow(600, 200)
			})
		})
	}
	MES = FEET = function () {
		W(30)
		_.t(3, function () {
			w.me(900, 100, 5).fR()
					.my('feet', function () {
						//if(K.u){
						this.lV(-2, -10)
						//}
					})
			w.me(700, 100, 5).fR().my('feet', function () {
				if (K.u) {
					this.lV(2, -10)
				}
			})
		})
	}
	TETHER1 = function () {
		W([1200, 800], {g: 8}).Y()
//w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
		//  w.D(500, 200, 'z',30).K('z'); w.wn('z', function () {$l('beg')}, function () {$l('end')})
		b = w.D(100, 100, 'b', 40).warp()
		x = w.D(50, 100, 'x', 60, 60).K('x').warp()
		w.S(1000, 200).cir({r: 300, c: 'w', C: 'o', l: 10, o: 0.2, s: 1}).K('vor')
		y.warp()
				.wl('vor', function () {
					b.vY(-20)
				})
				.wn('vor', function () {
					x.vY(-20)
				}, function () {
					w.C($r())
				})
	}
	PLAT1 = function () {
		w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
			w.D(50, 100, 'x', 60, 60).K('x').warp()
		})
		w.D(440, 100, 'y', 50).K('ball');
		w.cl('ball', function (cx) {
			this.B().dot()
		})
	}
	VORTEX = LEDGE = function () {
		W([1200, 800], {g: 8}).Y()
		vor = w.S(600, 200)
		vor.cir({s: 1, c: 'z', r: 140, o: .2, C: 'z', l: 20})
		w.ledge()
		y.wl(vor, function () {
			w.e('ball', function (b) {
				b.tow(600, 200)
			})
		}).warp().wl('vor', function () {
			b.vY(-20)
		}).wn('vor', function () {
			x.vY(-20)
		}, function () {
			w.C($r())
		})
	}
	DIVEBALL = DOT = PLAT = function () {
		W()
		w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
			w.D(50, 100, 'x', 60, 60).K('x').warp()
		})
		w.D(440, 100, 'y', 50).K('ball');
		w.cl('ball', function (cx) {
			this.B().dot()
		})
	}
	SPETHER = ALPHA = WARPBALL = WARP = OPACITY = CLOUD = function () {
		W([1200, 800], {g: 8, w: '='}).Y()
		w.y().warp()
		b = w.D(100, 100, 'b', 40).warp()
		_.t(3, function () {
			w.me(900, 100, 5).fR().my('feet', function () {
				this.lV(-2, -10)
			})
			w.me(700, 100, 5).fR().my('feet', function () {
				this.lV(2, -10)
			})
		})
		w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
		w.D(500, 200, 'z', 30).K('z');
		w.wn('z', function () {
			$l('beg')
		}, function () {
			$l('end')
		})
		x = w.D(50, 100, 'x', 60, 60).K('x').warp()
		b = w.S(1000, 200)
		b.cir({r: 300, c: 'w', C: 'o', l: 10, al: 0.2, s: 1}).K('vor')
		b.f().sprites[0].al(.8)
	}
	WCIR = WBALL = WCIRC = ALPHA = MY = function () {
		W()
// could i automatically have body listen to their sens?
		w.ball().r(.3)
		workingGoomba = p = w.p(900, 450).cn('jump')
		p.my('hat', function () {
			p.bS('guy')
		})
		p.my('right');
		p.my('left')
		$.space(function () {
			if (p.my.right) {
				p.I(100, -400)
			}
			if (p.my.left) {
				p.I(-100, -400)
			}
		})
	}
	WLMY = function () {
		W(20)//.roof.kill()
		_.t(10, function () {
			var p = w.p(R(500, 50), R(300, 100))//.re(1)
			p.fK('hat')//.C($r())
			p.clMy('hat', function (f) {
				
				
				//this.C($r());
				//f.B().C('w');f.C('z')
				var b0 = this.B()
				b0.rt(-180);
				_.in(1, function () {
					b0.stat()//kill()
				})
				var b = f.B()
				if (b.of('player')) {
					b.I(R() ? -200 : 200, -200)
					ff = b.fK('hat')
					ff.C($r())
					//b.rt(10, '+')
				}
				//this.B().kill()
			})
			//p.wlMy('foot', function(f){p.X(10, '+');_f = f;f.C('w')})
		})
		b = w.D(300, 400)
		b.cir('r', 40)
		f = b.cir('b', 20, 80, 0).K('hand')
		b.aV(20).lV(20, 20)
		//f = b.rec( 'w', 300, 20, 150,0,22).K('rec')
		//good:
		//b.clMy('hand', function(f){this.C($r());f.B().C('w');f.C('z')})
	}
}