 
w.mePyr=function() {var w=this
	_.t(8, function () {w.me().XY(700, 400)})
	_.t(4, function () {w.me().XY(700, 300)})
	_.t(1, function () {w.me().XY(700, 200)})
	return w
}
ROPB=function(){
	W(20).dJRopeBall()
}
 

/*
 isHooked = false
 distJ = false
 hero = w.rect(320, 460, 20, 20, 'b')
 $can = superCanvas($(w.s.HUD.canvas))
 $can.MD(function (x, y) {
 w.QueryPoint(function (fixture) {
 var touchedBody = fixture.body()
 if (touchedBody.isStat()) {
 distJ = w.dist(hero, touchedBody, hero.GetWorldCenter(), V(x, y).div()) //collideConnected=true
 isHooked = true
 }
 return false
 }, V(x, y).div())
 }) //if(distJ){w.DestroyJoint(distJ)}
 $can.MU(function () {
 if (distJ) {
 w.DestroyJoint(distJ)
 }
 })   // if I release the mouse, I destroy the distance joint

 $t(function () {// as long as the hook is active, I shorten a bit joint distance
 if (isHooked) {
 hero.SetAwake(true) // BODY MUST BE AWAKE!!!!!!
 distJ.SetLength(distJ.GetLength() * 0.97)  //distJ.len(97,'%') //len('97%')
 }
 })
 */