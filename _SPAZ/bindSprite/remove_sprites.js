killBodSprites = w._preKill = function (b) {
	
	//$l('w._preKill')
	if (b.sprite) {
		b.sprite.rm()
	}
	b.sprite = null
	if (b.sp()) {
		b.sp().rm()
	}
	b.fs(function (f) {
		f.rmSp()
	})
}

w.killFxtSprites= w._fPreKill = function (f) {
	f.rmSp()
}
f.removeSprites = function () {
	var f = this
	f.sprites = f.sprites || []
	_.each(f.sprites,
			function (s) {
				if (O(s) && s.parent) {
					s.remove()
				}
			}
	)
	f.sprites = []
	return this
}
f.kill = f.remove = function () {
	var f = this, b = f.B()    // if(this.sprite  ){this.sprite.remove()}
	f.removeSprites()
	b.destroyFixt(f)
//f.setRemove = function(){var f=this; setTimeout(function(){f.B().destroyFixt(f)},10)} //can combine with kill?
//f.setDestroy=function(){this.B().K('destroy'); return this}
}
f.rmSp = function () {
	_.e(this.sprites || [], function (s) {
		cjs.rmOb(s)
	})
	this.sprites = []
	return this
} //= f.xSp=f.Xx=f.rmSp
f.rpSp = function (sp) {
	this.rmSp()
	if (sp) {
		this.bS(sp)
	}
	return this
}
f.rmSp = function () {
	var f = this
	f.sprites = f.sprites || []
	_.e(f.sprites, function (s) {
		cjs.rmOb(s) //function cjsRmObSource(ob){if (cjs.iDO(ob)) { ob.rm() }}
	})
	f.sprites = []
	return f
} //= f.xSp=f.Xx=f.rmSp
f.rpSp = function (sp) {
	var f = this
	f.rmSp()
	if (sp) {
		f.bS(sp)
	}
	return f
}
f.kill = function () {
	var f = this, b = f.B(), w = b.W()
	if (!f) {
		return
	}
	if (w._fPreKill) {
		w._fPreKill(f)
	}
	if (b) {
		b.rmF(f)
	}
}//= f.xx = f.remove
f.setKill = function () {
	var that = this
	var flagNum = Math.random()
	this.B().W().flag(flagNum)
	$t(function () {
		if (w.flagged(flagNum)) {
			that.kill()
		}
	})
}
f.killBody = function () {
	this.B().kill()
}
f.killB = f.kB = f.xB = f.xX = f.XX = function () {
	if (this && this.B()) {
		this.B().kill()
	}
}
f.removeSprites = function () {
	var f = this
	f.sprites = f.sprites || []
	_.each(f.sprites,
			function (s) {
				if (O(s) && s.parent) {
					s.remove()
				}
			}
	)
	f.sprites = []
	return this
}
f.kill = f.remove = function () {
	// if(this.sprite  ){this.sprite.remove()}
	this.removeSprites()
	this.B().destroyFixt(this)
//f.setRemove = function(){var f=this; setTimeout(function(){f.B().destroyFixt(f)},10)} //can combine with kill?
//f.setDestroy=function(){this.B().K('destroy'); return this}
}
f.kill = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	this.remove();
	return
}