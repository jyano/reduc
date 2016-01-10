M.pythag = function (a, b) {
	return M.sqrt(a * a + b * b)
}
b.warping = function () {
		var p = this
		height = w.st.canvas.height
		width = w.st.canvas.width
		$t(function () {
			if (p.Y() < 0) {
				p.Y(height)
			}
			if (p.Y() > height) {
				p.Y(0)
			}
			if (p.X() < 0) {
				p.X(width)
			}
			if (p.X() > width) {
				p.X(0)
			}
		})
		return this
	}
b.bS = b.bindSprite = function (im, sc, initRt) {
	var b = this
	initRt = N(initRt) ? initRt : 6
	b.W().st.bm(im, function (bm) {
		b.sprite = bm
		bm.sXY.apply(bm, A(sc) ? [sc[0], sc[1]] : [sc || .4])
		$t(function () {
			bm.XY(b.X(), b.Y()).rt(b.rt() + initRt)
		})
	})
	return b
}
b.TRACK = function () {
	var b = this, w = b.W()
	w.TRACK(b)
	return b
	b.TRACK_ = function () {
		var b = this, w = b.W()
		b.offsets = b.lerp = function () {
			var b = this, w = b.W()
			var scaledDifX = w.scaledDif(b.X(), w.gameW / 2)
			w.CAMX(scaledDifX)
			w.CAMY(w.scaledDif(b.Y(), w.gameH / 2))
			return b
		}
		w.TRACK(b)
		return b
	}
}
w.webGuyCam=function() {
	var w=this
	w.scaled = function (a) {
		return a * this.zoom()
	}
	w.scaledDif = function (a, b) {
		// = w.zDif
		//see 'wordScaled' module in spaz
		return this.scaled(a - b)
	}
	w._scaledDifY = w.zoomY = function (y, t) {
		//= w.zY = w.zDifY
		return this.scaledDif(this.toY(y), t.Y())
	}
	w._scaledDifX = w.zoomX = function (x, t) {
////= w.zDifX= w.zX
		return this.scaledDif(this.toX(x), t.X())
	}
	w.scaledDifX = function (p) {
		//= w.zX = w.zDifX
		var w = this
		return w.scaledDif(w.gW() / 2, p.X())
	}
	w.scaledDifY = function (p) {
		//= w.zY = w.zDifY
		var w = this
		return w.scaledDif(w.gH() / 2, p.Y())
	}
	w.ZOOM = w.zoom = function (zm) {
		var w = this
		var stg = w.stage
		if (U(zm)) {
			return stg.scaleX
		}
		stg.scaleX = zm
		stg.scaleY = zm
		return w
	}
	w.zoomXY = w.zXY = function (t, x, y) {
		var w = this
		x = w.gameW / 2 - w.zHalf(w.gameW) + w.zX(x, t)
		return {
			x: x,
			y: w.zY(y, t) + w.gameH / 2 - w.zHalf(w.gameH)
		}
	}
 
	w.manualTrack = function (t, x, y) {
		var w = this// = w.track = w.tr
		fn = fn || function (d) {
			w.camXY(-d.x, -d.y)
		}
		$t(function () {
			var cb = w.tCb || w.trackeeCb || w.trackee && w.trackee.cb
			if (F(cb)) {
				cb()
			}
			fn(w.zoomXY(t, x, y))
		})
		return w
	}
	
	
	w.addMe = function (scale) {
		return this.A(
				$dB(100, 100), [$rF(scale * 12.5, scale * 25).re(0).fr(.1).de(.8)]).K('player').bindSprite('me', .3)
	}
	w.CAMX = function (x) {
		var w = this
		w.st.X(-x)
		return w
	}
	w.CAMY = function (y) {
		var w = this
		w.st.Y(-y)
		return w
	}
	w.dimensions = function () {
		var w = this
		w.gW = function () {
			return this.stage.canvas.width
		}
		w.gH = function () {
			return this.stage.canvas.height
		}
		w.wW = function () {
			return this.stage.canvas.width
		}
		w.wH = function () {
			return this.stage.canvas.height
		}
		w.halfW = function () {
			return this.gW / 2
		}
		w.halfH = function () {
			return this.gH / 2
		}
		return w
	}
	w.TRACK = function (p) {
		var w = thisw.offsets = w.lerp = function (fn) {
			var w = this
			//var fn = _.b(fn, w)
			fn = function () {
				var g = G(arguments)
				return fn.apply(w, g)
			}
			return fn()
		}
		$t(function () {
			//p.offsets()
			w.CAMX(w.scaledDif(p.X(), w.gameW / 2))
			w.CAMY(w.scaledDif(p.Y(), w.gameH / 2))
		})
		return w
	}
	return w
}
WG = WEBGUY = function () {
	W().G(40).webGuyCam()
	w.p = w.player = function (scale, onEachTick) {
		if (!N(scale)) {
			enemy = onEachTick
			onEachTick = scale
			scale = 4
		}
		this.startKilling()
		var pl = this.addMe(scale), func
		if (S(onEachTick)) {
			b2d.controls = {
				thrust: function (p) {
					p.fixedRot(true)
					if (K.l) {
						p.rt(15, '-')
					}
					if (K.r) {
						p.rt(15, '+')
					}
					if (K.u) {
						p.I(
								p.GetWorldVector(V(0, -1)).m(2)
						)
					}
				}
			}
			$t(function () {
				b2d.controls[onEachTick](pl)
			})
		}
		return pl
	}

//docs:
//when a web is created it gets web.connnected=false
//when it hits certain things and forms a JOINT, then connnected->true
//then it just dies
//pressing DOWN should release the most recent of the connnectedWebs
//non connnected Webs can be shot off!

	
	
	w.webBlocks = function () {
		var w = this
		//blocks
		_.each([
			[400, 100],
			[800, 0],
			[1100, -50],
			[1300, -200]
		], function (block) {
			var b = w.BRICK(block[0], block[1], 50, 50, 'u').K('randomRect')
			b.attachWeb = function (web) {
				var b = this
				if (!web.connected) {
					web.attach(b)
				}
				return b
			}
			return b
		})
		//goals:
		_.each([[0, 0], [100, 100], [200, 200], [500, 300], [600, 400], [1800, 0]], function (goal) {
			return w.goal(goal[0], goal[1])
		})
		return w
	}
	//w.webBlocks()
	w.ppBALL = function (x, y, impX, impY) {
		var b = this.BALL(x, y, 9, 'w')
		if (N(impY)) {
			b.I(impX, impY)
		}
		return b
	}
	w.goal = function (x, y) {
		w.BRICK(x - 20, y - 15, 10, 40, 'q')
		w.BRICK(x, y, 40, 10, 'v')
		w.BRICK(x + 20, y - 15, 10, 40, 'u')
	}
	$superWebguy = function (p) {
		p.canWeb = true
		p.shootWeb = function () {
			var p = this, w = p.W(), web
			p.webs = p.webs || []
			p.webs.push(web = p.Web())
			var piece
			web.Piece = function (x, y) {
				var web = this
				var piece = w.BOX(x, y, 3, 5, 'w').aD(10).re(0)
				piece.add = function (newPiece) {
					return web.addPiece(this, newPiece)
				}
				return piece.K('webPiece')
			}
			piece = web.addPiece(p,
					web.Piece(p.X(), p.Y() - 100)
			)
			_.t(9, function (i) {
				piece = piece.add(web.Piece(p.X(), p.Y() - i - 100))
			})
			piece.add(web.ball = w.BALL(p.X(), p.Y() - 100, 10, 'd').K('webBall')
					.de(1).re(0).fr(100))
			return web
		}
		p.tossBall = function (ball) {
			var p = this
			ball.I.apply(ball, p.hasOnlyOneConnectedWeb() ?
					[K.r ? M.abs(p.lV().x * 2) : K.l ? -M.abs(p.lV().x * 2) : 0, -30] :
					K.l ? [-30, -40] : K.r ? [30, -40] : [0, -70])
		}
		p.webless = p.hasNoWebs = function () {
			var p = this
			return !p.webs || !p.webs[0]
		}
		p.numWebs = function () {
			return this.webs.length
		}
		p.getWeb = function (ix) {
			var p = this;
			return A(p.webs) && p.webs[ix]
		}
		p.webWhere = function (ob) {
			return A(p.webs) && _.fW(p.webs, ob)
		}
		p.websRj = function (fn) {
			return _.rj(this.webs, fn)
		}
		p.web1 = p.wWeb1 = function (fn) {
			var p = this
			var firWeb = p.getWeb(0)
			if (!firWeb) {
				return
			}
			if (F(fn)) {
				fn(firWeb);
				return p
			}
			return firWeb
		}
		p.web2 = p.wWeb2 = function (fn) {
			var p = this
			var secWeb = p.getWeb(1)
			if (!secWeb) {
				return
			}
			if (F(fn)) {
				fn(secWeb);
				return p
			}
			return secWeb
		}
		p.webByBall = function (b) {
			return this.webWhere({ball: b})
		}
		p.nCn = p.numCnWebs = function () {
			return this.cnWebs().length
		}
		p.cns = p.cnWebs = p.connectedWebs = function () {
			return this.websRj(function (web) {
				return !web.connected
			})
		}
		p.just1CnWeb = p.hasOnlyOneConnectedWeb = function () {
			var p = this
			return p.numWebs() == 1 && p.numCnWebs() == 1
		}
		p.hasMultCnWebs = p.hasMoreThanOneConnectedWeb = function () {
			return p.numCnWebs() > 1
		}
		p.cn1 = p.cnWeb1 = p.iCn = p.isConnected = p.wCnWeb1 = function (fn) {
			var p = this
			var firCnWeb = p.cnWebs()[0]
			if (!firCnWeb) {
				return
			}
			if (F(fn)) {
				fn(firCnWeb);
				return p
			}
			return firCnWeb
		}
		p.killWeb = function (index) {
			var p = this
			if (A(p.webs) && p.webs[index]) {
				p.webs[index].kill()
			}
			return p
		}
		p.killWeb1 = p.killFirstWeb = function () {
			return this.killWeb(0)
		}
		p.killWeb2 = p.killSecondWeb = function () {
			return this.killWeb(1)
		}
		p.rmWeb = function (web) {
			var p = this
			p.webs = _.rj(p.webs, function (hisWeb) {
				return web === hisWeb
			})
			return p
		}
		p.leftRight = function (neg) {
			var p = this
			var fX = 250
			var iX = 8
			if (neg == '-') {
				fX *= -1
				iX *= -1
			}
			return function () {
				K.d ? p.shot() :
						p.isConnected() ? p.F(fX, -50) : p.I(iX, 0)
			}
		}
		p.LR = function (neg) {
			var p = this
			if (neg == '-') {
				return function () {
					K.d ? p.shootLeft() : p.killSecondWeb()
				}
			}
			return function () {
				K.d ? p.shootRight() : p.killSecondWeb()
			}
		}
		p.shot = function () {
			this.didShoot = true;
			return this
		}
		p.shootRight = function () {
			var p = this, w = p.W()
			var iY = t.difClr()
			iY = _.cap(iY, .4, 3)
			iY = (iY * -30) + 10
			var iX = iY * 1.5 + 100
			w.ppBALL(p.X() + 80, p.Y() - 20, iX, iY)
			return p
		}
		p.shootLeft = function () {
			var p = this, w = p.W()
			var iY = t.difClr()
			iY = _.cap(iY, .4, 3)
			iY = (iY * -30) + 10
			var iX = iY * 1.5 + 100
			w.ppBALL(p.X() - 80, p.Y() - 20, -iX, iY)
			return p
		}
		p.Web = function () {
			var p = this
			var web = {p: p, player: p, iCn: 0, connected: false, pieces: []}
			web.addPiece = function (toWhat, piece) {
				var web = this
				w.dist(toWhat, piece)
				web.pieces.push(piece)
				return piece
			}
			web.attach = function (brick) {
				var web = this
				w.dist(web.ball, brick)
				web.connected = true
				return web
			}
			web.kill = function () {
				var web = this
				_.e(web.pieces, function (b) {
					b.kill()
				})
				web.player.rmWeb(web)
			}
			_.in(3, function () {
				if (!web.connected) {
					web.kill()
				}
			})
			return web
		}
		$.key({
			//u: launcher
			u: function () {
				if (p.canWeb && p.hasNoWebs() || p.hasOnlyOneConnectedWeb()) {
					p.tossBall(
							p.shootWeb().ball
					)
				}
				p.canWeb = false
			},
			//U: release old web
			U: function () {
				if (p.hasMoreThanOneConnectedWeb()) {
					_.f(p.connectedWebs()).kill()
				}
				p.canWeb = true
				p.shotForce = 0
			},
			D: function () {
				p.didShoot ? p.didShoot = false : p.killFirstWeb()
			},
			r: p.leftRight(),
			l: p.leftRight('-'),
			R: p.LR(), L: p.LR('-')
		})
		return p
	}
	w.WebGuy = function (x, y) {
		var w = this
		var guy = w.addMe(4)
		guy.XY(300, 300).K('player')
		guy.re(0).de(.14).fr(1).fixedRot(true)
		return $superWebguy(guy)
	}
	p = w.WebGuy(300, 300).TRACK()
	w.b(function (cx) {
		var f, web
		if (f = cx.w('webBall', 'randomRect')) {
			var ball = f[0].B()
			var brick = f[1].B()
			brick.attachWeb(
					p.webByBall(ball))
		}
	})
	$timer = function () {
		$time = function () {
			var time = new Date().getTime()
			return time
		}
		var timer = {}
		timer._time = $time()
		timer.clr = function () {
			timer._time = $time()
			return timer
		}
		timer.dif = function () {
			return ($time() - timer._time) / 1000
		}
		timer.difClr = function () {
			var dif = timer.dif()
			timer.clr()
			return dif
		}
		return timer
	}
	t = $timer()
}



 function old(){
	 w.regPtCenterNotUsed = function () {
		 var w = this;
		 var gameW = w.st.canvas.width
		 var gameH = w.st.canvas.height
		 w.st.rXY(gameW / 2, gameH / 2);
		 return w
	 }}