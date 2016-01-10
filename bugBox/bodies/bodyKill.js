b.XX = b.destroy = b.kill = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	_.each(this.fixts(), function (f) {
		f.removeSprites()
		//if(f.sprite){f.sprite.remove()}
	})
	this.sprite = null
	this.SetActive(false)
	this.wor().DestroyBody(this)
}//b.setDestroy=function(){ return this.K('destroy') }; b.setDestroyIf=function(data){if(this.is(data)){this.setDestroy()}}
b.kill = b.xx = b.destroy = function () {
	var b = this, w = b.W()
	b.SetActive(false)
	if (w._preKill) {
		w._preKill(b)
	}
	b.W().DestroyBody(b)
	return b.pos()
}
b.destroySpaz = b.kill = b.rm = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	this.sprite = null
	this.SetActive(false)
	this.ds()
}
b.destroyFixt = b.destroyFixture = function (f) {
	this.DestroyFixture(f)
	return this
}
b.kill = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	this.sprite = null
	this.SetActive(false)
	this.destroy()
}
b.destroy = function () {
	this.W().DestroyBody(this)
}
b.setDestroy = function () {
	return this.K('destroy')
}
b.setDestroyIf = function (data) {
	if (this.is(data)) {
		this.setDestroy()
	}
}