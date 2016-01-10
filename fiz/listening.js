Wor = b2d.W = b2d.mW = b2d.makeWorld = makeWorld = mW = function (ops) {
	var width, height
	if (!O(ops)) {
		ops = {}
	}
	width = ops.W || 1200;
	height = ops.H || 600
	w = b2d.world(V(0, 0))
	cjs.watchKeys()
	w.st = w.stage = w.s = cjs.tripleStage('r', width, height)
	w.stage.back.A()
	w.stage.A()
	w.stage.HUD.A()
	w.canvas = w.stage.canvas;
	w.c = w.can = $(w.canvas)
	canvas = $(w.canvas).id('canvas')
	w.context = w.canvas.getContext('2d')
	setInterval(function () {
		w.step(1 / 60, 10, 10).clearForces()
		w.stage.update()
	}, 1000 / 60)
	w.gameW = w.st.canvas.width
	w.gameH = w.st.canvas.height
	return w
}
W = b2d.W = function (W, H, wW, wH) {
//cjs.Ticker.removeAllEventListeners() 
// w.show(function(){})//not working with scroll
	var o = N(H) ? {W: W, H: H, wW: wW, wH: wH} :
			N(W) ? {g: W} :
					A(W) ? _.x(H, {W: W[0], H: W[1], wW: W[2], wH: W[3]}) :
							O(W) ? W : {}
	o.W = o.W || 1200
	o.H = o.H || 600
	o.wW = o.wW || o.W
	o.wH = o.wH || o.H
	o.w = o.w == 0 ? 0 : o.w ? o.w : ['o', o.wW, o.wH]
	o.g = N(o.g) ? V(0, o.g) : o.g ? V(o.g) : V(0, 300)
	cjs.watchKeys()
	w = b2d.world(o.g);
	w.o = o
	if (o.z != false) {
		z()
	}
	w.gx(o).setBg(o)
			.dd(o).db()
			.startListening()
			.wMouse().wMouseJ(o)
			.walls(o)
			.u(o)
	w.worldW = w.w = o.wW
	w.worldH = w.h = o.wH
	w.gameW = w.W = o.W
	w.gameH = w.H = o.H
	w.wRatio = w.Ww = w.gameW / w.worldW
	w.hRatio = w.Hh = w.gameH / w.worldH
	w.wMultiple = 1 / w.wRatio
	w.hMultiple = 1 / w.hRatio
	function higher(a, b) {
		return a > b ? a : b
	}
	
	function lower(a, b) {
		return a > b ? b : a
	}
	
	w.minScale = w.minZoom = w.mS = 1 / lower(w.wMultiple, w.hMultiple);
	w._zoom = w._scale = 1;
	w.z = w._zoom
	w.halfW = w.hW = w.W / 2
	w.halfH = w.hH = w.H / 2
	return w
}
cjs.Keys = function (o) {
	alert('cjs.Keys')
	if (O(o)) {
		if (F(o.u)) {
			cjs.tick(function () {
				if (cjs.Keys.u) {
					o.u(cjs.Keys.u)
				}
			})
		}
		if (F(o.d)) {
			cjs.tick(function () {
				if (cjs.Keys.d) {
					o.d(cjs.Keys.d)
				}
			})
		}
		if (F(o.l)) {
			cjs.tick(function () {
				if (cjs.Keys.l) {
					o.l(cjs.Keys.l)
				}
			})
		}
		if (F(o.r)) {
			cjs.tick(function () {
				if (cjs.Keys.r) {
					o.r(cjs.Keys.r)
				}
			})
		}
	}
}
cjs.watchKeys = function () {
	alert('cjs.watchKeys')
	cjs.Keys.l = cjs.Keys.left = false
	cjs.Keys.r = cjs.Keys.right = false
	cjs.Keys.u = cjs.Keys.up = false
	cjs.Keys.d = cjs.Keys.down = false
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		cjs.Keys.l = cjs.Keys.left = true
		cjs.Keys.dir = 'left'
	})
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		cjs.Keys.l = cjs.Keys.left = false
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		cjs.Keys.r = cjs.Keys.right = true
		cjs.Keys.dir = 'right'
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		cjs.Keys.r = cjs.Keys.right = false
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		cjs.Keys.u = cjs.Keys.up = true
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		cjs.Keys.u = cjs.Keys.up = false
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		cjs.Keys.d = cjs.Keys.down = true
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		cjs.Keys.d = cjs.Keys.down = false
	})
}
TESTWATCHKEYS = function () {
	z()
	$.test = true
	cjs.watchKeys()
}
KEYWATCH = function () {
	J = cjs
	$.test = true
	J.Keys.l = J.Keys.left = false
	J.Keys.r = J.Keys.right = false
	J.Keys.u = J.Keys.up = false
	J.Keys.d = J.Keys.down = false
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		J.Keys.l = J.Keys.left = false
	})
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		J.Keys.l = J.Keys.left = true
		J.Keys.dir = 'left'
	})
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		J.Keys.l = J.Keys.left = true
		J.Keys.dir = 'left'
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		J.Keys.r = J.Keys.right = true
		J.Keys.dir = 'right'
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		J.Keys.r = J.Keys.right = false
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		J.Keys.u = J.Keys.up = true
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		J.Keys.u = J.Keys.up = false
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		J.Keys.d = J.Keys.down = true
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		J.Keys.d = J.Keys.down = false
	})
}
 
function keys() {
	dO.keyControls = function (num) {
		var args = G(arguments),
				that = this
		if (args.P) {
			$.kD('left', function () {
				that.toL(num)
			})
			$.kD('right', function () {
				that.toR(num)
			})
		}
		if (args.N) {
			$.kD('up', function () {
				that.toU(num)
			})
			$.kD('down', function () {
				that.toD(num)
			})
		}
	}
	$.k = $.key = $.kD = function self(k, fn) {
		if (O(k)) {
			_.e(k, function (fn, k) {
				if (s$(k).isUpper()) {
					$.kU(k.toLowerCase(), fn)
				}
				else {
					$.kD(k, fn)
				}
			})
			return
		}
		if (KEYOB[k]) {
			k = KEYOB[k]
		}
		$('body').on('keydown', function (e) {
			if (e.which == k) {
				fn(e, $.K)
			}
		})
	}
	$.kU = function (k, fn) {
		if (keyObj[k]) {
			k = keyObj[k]
		}
		$('body').on('keyup', function (e) {
			if (e.which == k) {
				fn(e, $.K)
			}
		})
	}
	$.spc = function (fn) {
		return $.kD('space', fn)
	}
	K = function (k, fn) {
		var g = G(arguments), o, key
		if (g.u) {
			if (K._loaded) {
				return
			}
			$.kD('l', function () {
				if ($.test) {
					$l('left pressed')
				}
				K.l = $.K.l = $.K.left = true
				$.K.dir = 'left'
				K.l = 1;
				K.L = 0
			})
			$.kU('l', function () {
				if ($.test) {
					$l('left lifted')
				}
				K.l = $.K.l = $.K.left = false
				K.l = 0;
				K.L = 1
			})
			$.kD('r', function () {
				if ($.test) {
					$l('right pressed')
				}
				K.r = $.K.r = $.K.right = true
				$.K.dir = 'right'
				K.r = 1;
				K.R = 0
			})
			$.kU('r', function () {
				if ($.test) {
					$l('right lifted')
				}
				$.K.r = $.K.right = false
				K.r = 0;
				K.R = 1
			})
			$.kD('u', function () {
				if ($.test) {
					$l('up pressed')
				}
				$.K.u = $.K.up = true
				K.u = 1;
				K.U = 0
			})
			$.kU('u', function () {
				if ($.test) {
					$l('up lifted')
				}
				$.K.u = $.K.up = false
				K.u = 0;
				K.U = 1
			})
			$.kD('d', function () {
				if ($.test) {
					$l('down pressed')
				}
				$.K.d = $.K.down = true
				K.d = 1;
				K.D = 0
			})
			$.kU('d', function () {
				if ($.test) {
					$l('down lifted')
				}
				$.K.d = $.K.down = false
				K.d = 0;
				K.D = 1
			})
			K._loaded = 1
			return
		}
		if (O(k)) {
			if (g.p) {
				if (F(k.u)) {
					z(function () {
						if (K.u) {
							k.u(K.u)
						}
					})
				}
				if (F(k.d)) {
					z(function () {
						if (K.d) {
							k.d(K.d)
						}
					})
				}
				if (F(k.l)) {
					z(function () {
						if (K.l) {
							k.l(K.l)
						}
					})
				}
				if (F(k.r)) {
					z(function () {
						if (K.r) {
							k.r(K.r)
						}
					})
				}
			}
			else {
				_.e(k, function (fn, k) {
					K(k, fn)
				})
			}
			return
		}
		o = s$(k).isUpper() ? {on: 'keyup', k: k.toLowerCase()} : {on: 'keydown', k: k}
		if (g.p) {
			return z(function () {
				if (K[k]) {
					fn()
				}
			})
		}
		key = Key(o.k)
		return $('body').on(o.on, function (e) {
			if (e.which == key) {
				fn(e)
			}
		})
		function Key(k) {
			var ob = {u: 38, d: 40, l: 37, r: 39, s: 32, e: 13};
			return ob[k] ? ob[k] : k
		}
	}
	$.K = function (o) {
		alert('$.K')
		if (!O(o)) {
			return
		}
		if (F(o.u)) {
			cjs.tick(function () {
				if ($.K.u) {
					o.u($.K.u)
				}
			})
		}
		if (F(o.d)) {
			cjs.tick(function () {
				if ($.K.d) {
					o.d($.K.d)
				}
			})
		}
		if (F(o.l)) {
			cjs.tick(function () {
				if ($.K.l) {
					o.l($.K.l)
				}
			})
		}
		if (F(o.r)) {
			cjs.tick(function () {
				if ($.K.r) {
					o.r($.K.r)
				}
			})
		}
	}
	cjs.watchKeys = function () {
		alert('cjs.watchKeys')
		$.K.l = $.K.left = false
		$.K.r = $.K.right = false
		$.K.u = $.K.up = false
		$.K.d = $.K.down = false
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			$.K.l = $.K.left = true
			$.K.dir = 'left'
		})
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			$.K.l = $.K.left = false
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			$.K.r = $.K.right = true
			$.K.dir = 'right'
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			$.K.r = $.K.right = false
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			$.K.u = $.K.up = true
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			$.K.u = $.K.up = false
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			$.K.d = $.K.down = true
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			$.K.d = $.K.down = false
		})
//$.space = function (fn) {return $.kD('space', fn)}
	}
	events = ['added',
		'mouseover', 'rollover', 'rollout', 'mouseout',
		'mousedown', 'pressmove', 'pressup', 'click', 'dblclick',
		'removed',
		'tick'
	]
	function KEYCONTROLSOB() {
		ob.keyControls = function (num) {
			var args = G(arguments),
					that = this
			if (args.P) {
				$.kD('left', function () {
					that.toL(num)
				})
				$.kD('right', function () {
					that.toR(num)
				})
			}
			if (args.N) {
				$.kD('up', function () {
					that.toU(num)
				})
				$.kD('down', function () {
					that.toD(num)
				})
			}
		}
	}
	
	function prevKeyFns() {
		$.k = $.key = $.kD = function self(k, fn) {
			if (O(k)) {
				_.e(k, function (fn, k) {
					if (s$(k).isUpper()) {
						$.kU(k.toLowerCase(), fn)
					}
					else {
						$.kD(k, fn)
					}
				})
				return
			}
			if (KEYOB[k]) {
				k = KEYOB[k]
			}
			$('body').on('keydown', function (e) {
				if (e.which == k) {
					fn(e, $.K)
				}
			})
		}
		$.kU = function (k, fn) {
			if (keyObj[k]) {
				k = keyObj[k]
			}
			$('body').on('keyup', function (e) {
				if (e.which == k) {
					fn(e, $.K)
				}
			})
		}
		$.spc = function (fn) {
			return $.kD('space', fn)
		}
		K = function (k, fn) {
			var g = G(arguments), o, key
			if (g.u) {
				if (K._loaded) {
					return
				}
				$.kD('l', function () {
					if ($.test) {
						$l('left pressed')
					}
					K.l = $.K.l = $.K.left = true
					$.K.dir = 'left'
					K.l = 1;
					K.L = 0
				})
				$.kU('l', function () {
					if ($.test) {
						$l('left lifted')
					}
					K.l = $.K.l = $.K.left = false
					K.l = 0;
					K.L = 1
				})
				$.kD('r', function () {
					if ($.test) {
						$l('right pressed')
					}
					K.r = $.K.r = $.K.right = true
					$.K.dir = 'right'
					K.r = 1;
					K.R = 0
				})
				$.kU('r', function () {
					if ($.test) {
						$l('right lifted')
					}
					$.K.r = $.K.right = false
					K.r = 0;
					K.R = 1
				})
				$.kD('u', function () {
					if ($.test) {
						$l('up pressed')
					}
					$.K.u = $.K.up = true
					K.u = 1;
					K.U = 0
				})
				$.kU('u', function () {
					if ($.test) {
						$l('up lifted')
					}
					$.K.u = $.K.up = false
					K.u = 0;
					K.U = 1
				})
				$.kD('d', function () {
					if ($.test) {
						$l('down pressed')
					}
					$.K.d = $.K.down = true
					K.d = 1;
					K.D = 0
				})
				$.kU('d', function () {
					if ($.test) {
						$l('down lifted')
					}
					$.K.d = $.K.down = false
					K.d = 0;
					K.D = 1
				})
				K._loaded = 1
				return
			}
			if (O(k)) {
				if (g.p) {
					if (F(k.u)) {
						z(function () {
							if (K.u) {
								k.u(K.u)
							}
						})
					}
					if (F(k.d)) {
						z(function () {
							if (K.d) {
								k.d(K.d)
							}
						})
					}
					if (F(k.l)) {
						z(function () {
							if (K.l) {
								k.l(K.l)
							}
						})
					}
					if (F(k.r)) {
						z(function () {
							if (K.r) {
								k.r(K.r)
							}
						})
					}
				}
				else {
					_.e(k, function (fn, k) {
						K(k, fn)
					})
				}
				return
			}
			o = s$(k).isUpper() ? {on: 'keyup', k: k.toLowerCase()} : {on: 'keydown', k: k}
			if (g.p) {
				return z(function () {
					if (K[k]) {
						fn()
					}
				})
			}
			key = Key(o.k)
			return $('body').on(o.on, function (e) {
				if (e.which == key) {
					fn(e)
				}
			})
			function Key(k) {
				var ob = {u: 38, d: 40, l: 37, r: 39, s: 32, e: 13};
				return ob[k] ? ob[k] : k
			}
		}
	}
	
	$.K = function (o) {
		alert('$.K')
		if (!O(o)) {
			return
		}
		if (F(o.u)) {
			cjs.tick(function () {
				if ($.K.u) {
					o.u($.K.u)
				}
			})
		}
		if (F(o.d)) {
			cjs.tick(function () {
				if ($.K.d) {
					o.d($.K.d)
				}
			})
		}
		if (F(o.l)) {
			cjs.tick(function () {
				if ($.K.l) {
					o.l($.K.l)
				}
			})
		}
		if (F(o.r)) {
			cjs.tick(function () {
				if ($.K.r) {
					o.r($.K.r)
				}
			})
		}
	}
//alert
	cjs.watchKeys = function () {
		alert('cjs.watchKeys')
		$.K.l = $.K.left = false
		$.K.r = $.K.right = false
		$.K.u = $.K.up = false
		$.K.d = $.K.down = false
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			$.K.l = $.K.left = true
			$.K.dir = 'left'
		})
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			$.K.l = $.K.left = false
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			$.K.r = $.K.right = true
			$.K.dir = 'right'
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			$.K.r = $.K.right = false
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			$.K.u = $.K.up = true
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			$.K.u = $.K.up = false
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			$.K.d = $.K.down = true
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			$.K.d = $.K.down = false
		})
	}
//$.space = function (fn) {return $.kD('space', fn)}
}
function keyy() {
	cjs.Keys = function (o) {
		alert('cjs.Keys')
		if (O(o)) {
			if (F(o.u)) {
				cjs.tick(function () {
					if (cjs.Keys.u) {
						o.u(cjs.Keys.u)
					}
				})
			}
			if (F(o.d)) {
				cjs.tick(function () {
					if (cjs.Keys.d) {
						o.d(cjs.Keys.d)
					}
				})
			}
			if (F(o.l)) {
				cjs.tick(function () {
					if (cjs.Keys.l) {
						o.l(cjs.Keys.l)
					}
				})
			}
			if (F(o.r)) {
				cjs.tick(function () {
					if (cjs.Keys.r) {
						o.r(cjs.Keys.r)
					}
				})
			}
		}
	}
	cjs.watchKeys = function () {
		alert('cjs.watchKeys')
		cjs.Keys.l = cjs.Keys.left = false
		cjs.Keys.r = cjs.Keys.right = false
		cjs.Keys.u = cjs.Keys.up = false
		cjs.Keys.d = cjs.Keys.down = false
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			cjs.Keys.l = cjs.Keys.left = true
			cjs.Keys.dir = 'left'
		})
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			cjs.Keys.l = cjs.Keys.left = false
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			cjs.Keys.r = cjs.Keys.right = true
			cjs.Keys.dir = 'right'
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			cjs.Keys.r = cjs.Keys.right = false
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			cjs.Keys.u = cjs.Keys.up = true
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			cjs.Keys.u = cjs.Keys.up = false
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			cjs.Keys.d = cjs.Keys.down = true
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			cjs.Keys.d = cjs.Keys.down = false
		})
	}
	TESTWATCHKEYS = function () {
		z()
		$.test = true
		cjs.watchKeys()
	}
	KEYWATCH = function () {
		J = cjs
		$.test = true
		J.Keys.l = J.Keys.left = false
		J.Keys.r = J.Keys.right = false
		J.Keys.u = J.Keys.up = false
		J.Keys.d = J.Keys.down = false
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			J.Keys.l = J.Keys.left = false
		})
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			J.Keys.l = J.Keys.left = true
			J.Keys.dir = 'left'
		})
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			J.Keys.l = J.Keys.left = true
			J.Keys.dir = 'left'
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			J.Keys.r = J.Keys.right = true
			J.Keys.dir = 'right'
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			J.Keys.r = J.Keys.right = false
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			J.Keys.u = J.Keys.up = true
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			J.Keys.u = J.Keys.up = false
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			J.Keys.d = J.Keys.down = true
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			J.Keys.d = J.Keys.down = false
		})
	}
	INPUTKEYS = function () {
		z()
		input = $.input().A()
		$.span('span ').C('y').A().id('spn')
		input.on('keypress', function (e) {
			$('#spn').text(
					$('#spn').text() + e.which
			)
		})
				.on('keyup', function (e) {
					if (e.which == 13) {
						$l('enter')
						$('body').C('*')
					}
				})
				.on('keydown', function (e) {
					var key = e.which, //why these nums?
							result = (key > 48 && key < 57) || ( key > 96 && key < 105) || (key == 8)
					$l('result: ' + result)
				})
	}
	INPUTUPDOWN = function () {
		$.input().A()
		onTextInputKeyup(function (e) {
			var dir = (parseInt(e.which) == 38) ? 'up'
					: (parseInt(e.which) == 40) ? 'down'
					: 'neither'
			$l(dir)
		})
		function onTextInputKeyup(func) {
			return $('input[type=text]').on('keyup', func)
		}
	}
	TESTWATCHKEYS = function () {
		z()
		$.test = true
		cjs.watchKeys()
	}
 

}
function listening() {
	w.startListening = function () {
		var w = this
		w.listen = w.sCL = w.SetContactListener
		b2d.listener = function () {
			return new b2.Dynamics.b2ContactListener
		}
		w.listener = w.listener || b2d.listener()
		w.beginHandlers = w.beginHandlers || []
		w.endHandlers = w.endHandlers || []
		w.listener.BeginContact = function (cx) {
			_.each(w.beginHandlers,
					function (func) {
						func(cx)
					})
		}
		w.listener.EndContact = function (cx) {
			_.each(w.endHandlers,
					function (func) {
						func(cx)
					})
		}
		w.listen(w.listener)
	}
	w.startKilling = function () {
		var w = this
		$t(function () {
			w.each(function (b) {
				if (b.is('destroy')) {
					b.K('destroyed')
					b.kill()
				}
			})
		})
		return w
	}
}
function collide() {
	b2d.world = b2d.W = function (a, b) {
		var w = new b2d.World(a, D(b) ? b : false)
		w.startListening()
		return w
	}
}
function dimensions() {
	//half width/height nobiggie..
	w.W2 = w.HW = w.hW = w.W / 2;
	w.H2 = w.HH = w.hH = w.H / 2;
	w.hH = w.h / w.H;
	w.Ww = w.W / w.w;
	w.wW = w.w / w.W;
	w.Hh = w.H / w.h;
	w.mZ = w.hH > w.wW ? w.hH : w.wW;
	w.mS = w.Ww > w.Hh ? w.Ww : w.Hh;
	//scale
	w.z = w.SCALE = 1
}
 
   