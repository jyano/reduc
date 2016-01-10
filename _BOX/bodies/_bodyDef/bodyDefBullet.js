bD.bul = bD.bull = bD.fR = function (iBu) {
	var bD = this
	if (U(iBu)) {
		return bD.bullet
	}
	bD.bullet = iBu;
	return bD
}
bD.SB = function () {
	this.bullet = isBul;
	return this
}
bD.bul = bD.bull = function (isBul) {
	return U(isBul) ? this.bullet : this.SB(isBul ? true : false)
}
bD.b1 = bD.mB = function () {
	return this.bul(1)
}
bD.b0 = function () {
	return this.bul(0)
}
bD.bul = bD.bull = function (isBul) {
	//bodyDef.bullet = true; //before creating body, or
//body.SetBullet(true); //after creating body
	if (U(isBul)) {
		return this.bullet
	}
	this.bullet = isBul;
	return this
}
$bulBD = function (x, y) {
	var bD = $dB(x, y)
	bD.bullet = true
	bD
} 