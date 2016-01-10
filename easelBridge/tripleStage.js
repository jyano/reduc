 
	bx.can = function () {
		$('<canvas id="canvas" width="1000" height="800" ></canvas>').bor('10px dashed pink').A()
	}
	
	
	$.xI = function (id, col) {
		return $.cI(id).C(col)[0].getContext("2d")
	}
	TRIPLESTAGE = function () {
		w = W({g: 0})
		b = w.ball(500, 300, 60)
		b.bindSprite2(w.s.shape(500, 300))
		num = 0
		dif = .1
		shape = b.sprite
		shape.rG(['r', 'y'], [0, num], 60).dc(0, 0, 60)
		w.st.HUD.bm('me', function (b) {
			b.XY(300).drag()
		})
		w.st.back.bm('guy', function (b) {
			b.XY(200).drag()
		})
		w.st.back.linGrad('b', 'z')
	}