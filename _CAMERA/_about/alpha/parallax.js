function paralax() {
	function DivLayer(bg) {
		var div = $.d('y', 500, 500).P('a').width('100%').H(256)
		if (bg) {
			div.css('backgroundImage', bg)
		}
		return div
	}
	
	function transparent(i, num) {
		if (!N(num)) {
			return 'transparent url(' + i + '.png)'
		}
		return 'transparent url(' + i + '.png)' + num + '% 0px'
	}
	
	function CanvasLayer(bg) {
		var can = $.c('y', 500, 500).A()
				.P('a').width('100%').H(256)
		if (bg) {
			can.bg(bg)
		}
		return can
	}
	
	function int() {
		xp += speed
		back.bgP(xp + 'px 0px')
		front.bgP((xp * 3) + 'px 0px')
	}
	
	function mOut(e) {
		speed = 0
	}
	
	function mMove(e) {
		speed = e.pageX - ( W() / 2 )
		speed /= ( W() / 2 )
		$l(speed)
	}
	
	LAX = PARALLAX = function () {
		CanvasLayer(transparent('me', 10)).A()
		CanvasLayer(transparent('guy', 300)).A()
	}
	PBM = PARALLAXBYMOUSE = function () {
		//awesome!!!!!
		back = DivLayer(transparent('me'))
		front = DivLayer(transparent('guy'))
		speed = 0
		xp = 0
		$('body').mousemove(mMove)
		$('body').mouseout(mOut)
		setInterval(int, 30)
	}
}
// https://www.youtube.com/watch?v=2p4YunDAzsk