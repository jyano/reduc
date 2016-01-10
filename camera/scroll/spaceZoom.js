w.stars = function (numStars) {
	var w = this
	_.t(numStars, function () {
		var x = ( M.r() * 1000 ) - 500
		var y = ( M.r() * 800 ) - 400
		var star = w.BALL(x, y, 4, 'p')
		star.de(0).re(2).K('star')
	})
	return w
}



SZ = SPACEZOOM = function () {W({W: 600, H: 300})

	w.stars(80)

	ea = earth = w.bump(0, 0, 100).re(2).K('earth')
			.bindSprite('earth', .13)
	
	p = w.p(2.5, 'thrust').XY(0, 0).aD(8).lD(.8)
	
	w.dstJColl(p, earth).freq(.15).damp(0).len(50)
	
	stg = w.st
	
	cv = stg.canvas
	
	gameW = cv.width
	gameH = cv.height
	
	_.in(.3, function () {
					
					// tweens:
					earth.sprite.tweenLoop([{r: 360}, 10000])
					earth.sprite.tweenLoop([{kx: 16}, 3000], [{kx: 0}, 3000])
					w.st.tweenLoop([{kx: 8}, 1000], [{kx: 0}, 1000],
					 [{ky: 8}, 1000], [{ky: 0}, 1000])
					
					// collide:
					p.collWithKind('star', function () {
						p.sprite.tween([{kx: 40}, 100], [{ky: 40}, 100], [{kx: 0, ky: 0}, 100])
					})
					earth.collWithKind('star', function () {
						w.st.flash()
					})
				 
				 )
				
				
				
				$t(function () {
					var dst = M.pythag(ea.X() - p.X(), ea.Y() - p.Y())
					var sc = _.cap(300 / dst, .3, 2)
					stg.XY(w.zX(p), w.zY(p))
					stg.sXY(sc)
					stg.al(sc * 2)
					ea.sprite.al(sc)
				})
	
	
	})
	
} 