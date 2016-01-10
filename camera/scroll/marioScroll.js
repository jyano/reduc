function justScrollX() {
	b.followX = function (x, y) {
		var b = this, w = b.W()
		$t(function () {
			w.st.X(x - b.X())
		});
		return b
	}
	b2d.levelScrollX = function () {
		W({W: 600, H: 300, g: 400, w: 0})
				.st.XY(300, 150).rXY(300, 150)
		p = w.playa().followX(600, 400)
	}
	EXPLORE = SCROLLX = GROUNDSPRITES = GSP = function () {
		b2d.levelScrollX()
		w.db()
		w.st.chalk('gravity: 1000     0r,0f   0.4r,0.4f   0.9r,1f', 'right: 0.5r,0.5f     player: 1d,23m,0.2r,0.2f')
		w.ice(30, 250, 400)
		w.grass(450, 250, 400)
		w.grass(500, 100, 4000)
		w.rubber(880, 250, 40000)
		w.rectStat(100, 270, 200, 30, 'w').re(0).fr(0) //ice
		w.rectStat(325, 270, 230, 30, 'g').re(.3).fr(.3)
		w.rectStat(550, 270, 200, 30, 'r').re(.7).fr(.3) //rubber
	}
	RAMPS = function () {
		w.levelScrollX().bug().ramps()
		_.ev(3, function () {
			w.circ(50, 50, 30, 'g')
					.re(.7).de(1).fr(.5)
					.I(200, 100)
		})
	}
	function ok___now_scrollXY() {
		b.diff = b.dif = function (x, y) {
			
			// compare with DIF  - achtung!
			//return {x: x - this.X(), y: y - this.Y()}
			var b = this
			x -= b.X()
			y -= b.Y()
			return {x: x, y: y}
		}
		b.cam = function (x, y) {
			var b = this, w = b.W()
			b.W().st.XY(b.diff(x, y))
			return b
		}
		b.follow = function (x, y) {
			var b = this
			$t(function () {
				if (O(b.sprite)) {
					b.cam(x, y)
				}
			})
			return b
		}
		b2d.levelScroll = function () {
			//alert('levelScroll')
			b2d.level()
			w.s.XY(300, 150).rXY(300, 150)
			p.follow(600, 400)
			w.db()
		}
		SCROLLINGLEVEL = SLL = function () {
			b2d.levelScroll()
			p.Y(0)
			w.grass(300, 280, 500)
			w.ice(1300, 280, 1000)
			w.clouds().clouds(500, -200).clouds(1000, -200).clouds(-500, -200)
			slide = w.rect(900, 30, 1200, 40, 'blue').de(1).fr(.5).re(.5)
		}
	}
}
function autoScroll() {
	w = b2d.World.prototype
	//sets b2d.onGround setter
//requires a body that has userData 'feet',
// and it simply see if it is colliding with anything
// if make this local, graphics dissapear!?
	TESTKEYBOARD = TKB = function () {
		W({debug: true})
		//cjs.watchKeys()
		//w.footListener()
		//  p = w.addMe().controlMe('standard')
		b = w.ba().bS('guy')
		b.controlMe('basic')
	}
	w.goomba = function (x, y) {
		return this.box(x, y).bS('guy')
	}
	BOSS = MARIOJUMPINGGOOD = function () {
		W({g: 500})
		p = w.addMe().aD(10000).con('mar')
		w.pf(800, 500, 600, 100);
		w.pf(300, 530, 100, 100)
		w.box(800, 100).bS('guy')
	}
	b2d.levelAutoScroll = function (num) {
		W({W: 600, H: 300, g: 400, w: 0})
		num = num || 4
		p = w.playa().nRt()
		setup()
		$t(function () {
			w.st.X(num, '-')//.pen(score++)
			if (p.relPos() < -100) {
				p.Y(0)
				p.X(p.X() - 200)
			}
		})
		function setup() {
			score = 0
			p.XY(350, 100)
			p.lV(0, 0)
			w.st.XY(0, 0)
		}
	}
	CASTLE = CAS = function () {
		W({g: 500, w: 0}).gv(500)//.db()
		//b2d.levelAutoScroll(1)
		//w.G(100)
		//b2d.levelAutoScroll(1)
		p = w.me().XY(300, -300)
				.aD(10000).con('mar2')
		num = 4
		$t(function () {
			w.st.X(num, '-')
		})
		w.BRICK(800, 500, 600, 100, 'r')
		w.BRICK(300, 530, 100, 100)
		w.BRICK(1400, 300, 600, 100)
		w.brick(1800, 500, 1000, 100)
		w.BRICK(1900, 200, 600, 100)
		w.foot()
		w.me().XY(700, 100)
		//w.addTim(600, 100)
		w.goomba(800, 100)
	}
	LEV = function () {
		b2d.levelAutoScroll(1)
		p.X(300)
		w.BRICK(200, 200, 100, 100, 'yellow')
		w.BRICK(240, 150, 180, 30)
		w.BRICK(420, 30, 180, 30)
		w.BRICK(560, 150, 300, 30)
		w.BRICK(600, 100, 180, 30)
		w.goomba(800).fric(0)
	}
	DUNGEON = DNG = RAMPS2 = function () {
		b2d.levelAutoScroll();
		w.ramps()
	}
}