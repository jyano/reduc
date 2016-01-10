w.platform2 = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.S(x, y, W, H).r(0).K('platform')
}
w.plat = w.platform = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.body(b2d.stat(x, y), b2d.poly(W, H).r(.3)
	).K('plat platform')
}
w=p=b2d.World.prototype
///////////////
///////////////




w.me=   w.addMe=function(x,y,scale){var Z=scale||4
        p = this.body(b2d.dyn(x,y), [
            b2d.poly(Z*12.5, Z*25).rest(0).fric(.1).den(.8).K('head'),
            b2d.poly(Z*10, Z*10, 0, Z*10).K('feet').sensor(true),
            b2d.poly(Z*2, Z*6, 0, -Z*12).K('hat').sensor(true),
            b2d.poly(Z*8, Z*2, Z*8, 0).K('right').sensor(true),
            b2d.poly(Z*8, Z*2, -Z*8, 0).K('left').sensor(true)
        ]).den(1).rest(0).fixRot()
    p.bindSprite('me', Z/10)
    return p.K('p player')
}



w.player = function(x,y,scale, onEachTick, enemy){
    var w=this
    if(!N(scale)){enemy=onEachTick;onEachTick=scale;scale = 4}
    var p = this.addMe(x,y,scale), func
    if(S(onEachTick)){onEachTick = b2d.controls[onEachTick]}
    if(F(onEachTick)){cjs.tick(function(){onEachTick(p, enemy) })}


    p.speed=40
    p._direction = 'right'

    p.dir = p.direction =  function(dir){
        if(U(dir)){return this._direction}
        this._direction = dir
        return this}



    p.moveInDir =  function(n){
        if (n == '-'){  return p.move( - p.speed )}
        n = N(n) ? n : p.speed
        if (p.direction()){p.I(3,0)}else{p.I(-3,0)}
        return p}


    p.onGround=false
    p.right=false
    p.left=false
    p.up=false

    $.key({

        u:function(){p.up=true},
        U:function(){p.up=false},
        r:function(){p.right=true},
        R:function(){p.right=false},
        l:function(){p.left=true},
        L:function(){p.left=false}
    })

    w.beg(function(cx){
        cx.with('feet',
            function(f){

                 if(!f.isSen() )   {
                     this.B().onGround=true

                 }


            })})

    w.end(function(cx){
        cx.with('feet',
        function(f){
            if(!f.isSen() )   {
            this.B().onGround=false}

        })

    })


   // if(w.floor){  w.floor.rest(0) }


    return p}



w.jumper = function(x,y){

    x=N(x)?x:200;y=N(y)?y:500

    var p = this.player(x,y)
    cjs.tick(function(){b2d.controls.jump(p)})
    return p}






w.mario=function(x,y,scale){

    x=N(x)?x:100
    y=N(y)?y:100
    scale=N(scale)?scale:2.5

    return this.player(x,y,scale).horizCenter()
         .fric(.2).rest(.2).marioJumping()
}


w.thrustPlayer=function(){
    return this.player(0,200,2.5,'thrust').horizCenter()
        .linDamp(.8).angDamp(10000)
}

 
w.ship = function(x,y){x=N(x)?x:300; y=N(y)?y:x

    return this.yShip(x,y).thrustControl().shootOnSpace().damp(2)
}

 
w.bouncePlat  =function(x,y,W,H){//=brk=brick=
    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W
    return this.S(x,y,W,H).K('plat boucePlat').rest(.8)}
w.coin = function(x,y){var w=this
    x=N(x)?x:Math.random()* 600
    y = N(y)?y:Math.random()* 300
    return w.circ(x, y, 6, 'yellow').K('coin').rest(0).den(0).warp2().linDamp(0).I((Math.random()* 15)-5,(Math.random()* 15)-5)}
w.stars=function(num){var w=this,x,y
    num=N(num)?num:30
    _.times(num, function(){
        x= (Math.random() * 1000) - 500
        y = (Math.random() * 800) - 400
        w.circ(x, y, 2,'white').den(0).rest(2)
    })

return this}


w.sun=function(x,y){
    x=N(x)?x:300
    y=N(y)?y:150

   return this.S(300,150, 20,'p',10).den(1).rest(.5).bindSprite('sun',.2)

}

w.startKilling=function(){var that=this

    cjs.tick(function(){

        that.each(function(body){

            if(body.is('destroy')){

                body.K('destroyed')
                body.kill()
            }
        })
    })

    return this}
w.addTim=function(num){
    var that=this
    if(U(num)){return that.ball().K('tim').bindSprite('guy', .3)}
    _.times(num, function(){that.addTim()})
    return this}
 
w.bullet=function self(x,y,r){//radius






//p.bullet = function(x,y){return this.ball(x,y,10).K('bullet')}

    var bullet

    // can pass in (x,y or {x:x,y:y}), and radius
    if( O(x) ){
        r=y; y=x.y; x=x.x}
    x = x || 100
    y = N(y) ? y : x
    r = r || 10

    bullet= this.B(x,y,r)

    bullet.addClass('bullet bul').K('bullet')

    return bullet}

w.fireBall=function(x,y,vX,vY){
    var v=8
    if(vX=='l'){vX=v;vY=0}
    if(vX=='r'){vX=-v;vY=0}
    if(vX=='u'){vX=0;vY=-v}
    if(vX=='d'){vX=0;vY=v}
    if(vX=='ul'){vX=v;vY=-v}
    if(vX=='ur'){vX=-v;vY=-v}
    if(vX=='dl'){vX=v;vY=v}
    if(vX=='dr'){vX=-v;vY=v}
    vX=N(vX)?vX:0
    vY=N(vY)?vY:0

    return this.K(x,y, 'r', 18).bindSprite('sun',.2)
        .lV(vX,vY)
}
w.zilla=function(x,y){var w=this

    var z= w.K(x,y, 80,140) //make sensor?
        .fixRot()
        .bindSprite('guy', [.8,1])
        .moveInCircle('-')
        .coll('bul',
        function(bul){
            bul.B().kill()
            z.hits++
        })

    z.hits=0

    z.fireBalls=function(){
        var x= this.X(),
            y= this.Y()
        w.fireBall(x+50, y-80,'ul')
        w.fireBall(x+50, y+80,'dl')
        w.fireBall(x-50, y-80,'ur')
        w.fireBall(x-50, y+80,'dr')
        w.fireBall(x, y-80,'u')
        w.fireBall(x, y+80,'d')
        w.fireBall(x-50, y,'r')
        w.fireBall(x+50, y,'l')}

    z.fireBallsAtInt=function(ms){var z=this

        setInterval(function(){
            z.fireBalls()
        }, ms)
    return this}


    return z}
w.clouds=function(leftPoint, y){var that=this

    leftPoint = N(leftPoint)? leftPoint: 100

    y=N(y)?y:75

    _.times(100,function(){

        that.S(

                Math.random() * 400 + leftPoint,
            y,
                Math.random()*30

        )

    })

return this}
w.grass=function(x, y, len){x += len/2
    var grass = this.S(x,y,'g',len,20).fric(.3).rest(.3)
    return grass}
w.ice=function(x, y, len){x += len/2
    var ice = this.S(  x, y, 'w', len, 20).fric(0).rest(0)
    return ice}

w.rubber=function(x, y, len){
    x += len/2
    var rub = this.rectStat(  x, y, len, 20, 'red').fric(.3).rest(.7)
    return rub}
w.ramp=function(x, y, wd, h, rot){

    x = x || 300
    y = y || 300
    wd = wd ||100
    h = h || 100
    rot = rot|| 10//Math.toRadians(45)

    var ramp =  this.S(x, y,  wd, h) .rot(rot)
        ramp.bindSprite2( cjs.rect(wd, h,'yellow')).fric(1)
return ramp}


w.ramps=function() {

    this.ramp(400, 350, 200, 300, 100)
    this.ramp(500, 350, 300, 300, 60)
    this.ramp(600, 350, 200, 300, 100)
    this.ramp(700, 350, 300, 300, 60)
    this.ramp(800, 350, 200, 300, 100)
    this.ramp(1000, 350, 300, 300, 60)
    this.ramp(1030, 350, 200, 300, 100)
    this.ramp(1200, 350, 300, 300, 60)
return this}
w.goomba=function(x,y){
    y=N(y)?y:100
    w.box(x,y).bindSprite('guy').K('goomba')

}
w.bobom=function(){

    var that=this,
        bobom = this.dyn( 100, 100),
        body = bobom.poly(20).den(1),//.rest(1)

        sensor =   bobom.poly(25, 5, 30, 0,'-')




    sensor.coll('player',function(){this.B().kill()})



    return bobom

} 
w.vine = function(x,y,len){len=len||10

    var that = this,
        base = this.link(x,y).stat(),
        l =  base.l(len)


    this.begin(function(cx){
        if(cx.with('player', 'leaf')){
            var j =  that.rev(l, p.XY(l.X(), l.Y()))
            $.kD('down', function(){that.DestroyJoint(j)})

        }})}




w.tramp=function(xloc, rest,freq,damp){
    var bouncer, j,w=this
    xloc= N(xloc)?xloc:290
    rest=N(rest)?rest:.75
    freq=N(freq)?freq:6
    damp=N(damp)?damp:0

    bouncer =  this.B(xloc, 200, 'b',200,20).fixRot()
        .den(0).rest(rest).fric(0)

    j = w.dist(
        w.S(xloc,280,'w', 20, 20), bouncer  ).len(115).freq(freq).damp(damp)
    w.S(xloc- 120,290,'b',40,300).fric(0)
    w.S(xloc+120,290,'b',40,300).fric(0)

return j}


w.bridge=function(x,y){var that=this
    x = N( x ) ? x : 400
    y = N( y ) ? y : 100

    var  b1 = this.S(x, y, 10),

        b2 = wood(),
        b3 = wood(),
        b4 = wood(),
        b5 = wood(),
        b6 = wood(),
        b7 = wood(),
        b8 = wood(),
        b9 = wood(),

        b10=this.circStat(x+700, y, 10)

    pieces([b1, b2],[b2,b3],[b3,b4],[b4,b5],[b5,b6],[b6,b7],[b7,b8],[b8,b9],[b9,b10])

    function wood(){return that.rect(100,100,90,60).den(1).fixedRot(true) }
    function piece(a,b){that.distColl(a, b).len(6).freq(5) }
    function pieces(){_.each(arguments,function(arg){piece(arg[0],arg[1])})}


}
w.elev= w.elevator =function(x){

    var elev={}

    elev.plat  = this.rect(x, 100, 100,10).den(1).K('elev')
        .coll(function(){elev.flip()})
        .collWithKind('player', function(p){p.linVel(0)})

    elev.base = this.brickSensor(x, 150, 1, 100 ).den(1).fric(100)

    elev.j =  this.prism(elev.plat, elev.base, V(0,1) )

    elev.speed = 2
    elev.j.mot(elev.speed)
    elev.flip =  _.throttle( function(){
        this.j.mot(this.speed*=-1)}, 200, {trailing:false})

    return elev}
w.greenGuy = function(x,y){
    x=N(x)?x:100; y=N(y)?y:100

    var that=this,
        size=20,

        b= that.dyn(x,y).K('greenGuy'),

        centFix = b.rect(20,20).K('center').rest(2),

        f = b.rectSensor(size, size)

    setInterval(function(){f.kill(); size += 4; f= b.rectSensor(size, size)}, 500)

    that.begin(function(cx){var fix
        fix = cx.with('center', 'bullet')
        if(fix){
            if(cx.A() == centFix){size=20;b.linVel(0).angVel(0)}
            if(cx.B() == centFix){size=20;b.linVel(0).angVel(0)}
        }
    })

    __greenGuy = b
    return b}
w.car =function(){

    var car = w.rect(150, 150,90,30, 'black')

    j1 = w.Rev(
        w.circ( 200, 150, 30 ,'red').fric(0).den(1),
        car
    )

        j1.speed(120)
    j1.EnableMotor(true)
    j1.SetMaxMotorTorque(1000000)

   j2 = w.Rev(  w.circ( 100, 150,30, 'blue').fric(0).den(1),  car   )//.speed(-500).torque(40).motor(true)

    j2.speed(150)
    //j2.EnableMotor(true)
    j2.SetMaxMotorTorque(1000000)

    return car}
w.roller =function(){

    var car = w.rect(250, 150,90,30, 'black')

    j1 = w.Rev(
        w.circ( 300, 150, 30 ,'red' ),
        car
    )

    j1.speed(6)
    j1.EnableMotor(true)
    j1.SetMaxMotorTorque(1000000)





    j2 = w.Rev(  w.circ( 200, 150,30,'red'),  car   ).speed(-500).torque(40).motor(true)

    return car}

w.rFlip=w.rightFlipper=function(x, y){var w=this
    var rightJoint = w.S(x, y,'r', 20),
        rightFlip = w.B(x, y,'b', 100,25).DBF(1,.5,0)
    var flipper =  w.rev(  rightJoint ,  rightFlip ,  0, 0, 40, 0  ).lim(-70, 30)

    flipper.flip=function(){
        rightFlip.I(-1000,0)}

    return flipper}

w.lFlip=w.leftFlipper=function(x, y){var w=this
    var  leftFlip = w.B(x,y,'b', 100,25).DBF(1,.5,0),
        leftJoint = w.S(x,y,'r',20)



    var flipper = __leftFlipper =  w.rev(  leftJoint ,  leftFlip ,  0, 0, 40, 0  ).lim(150, 250)

    flipper.flip=function(){leftFlip.I(1000,0)}

    return flipper}

w.flips=w.flippers=function(x,y,x2,y2){
    if(U(y2)){y2 = y  }
    if(U(x2)){ x2 = x + 230 }

    var  lf = w.lFlip(x, y),
         rf =  w.rFlip(x2, y2)

    var flip = function flip(){lf.flip(); rf.flip(); return flip}

    flip.left = lf
    flip.right = rf

    return flip}



w.grid = w.drawGrid = function(grid, x,y,len,spacing){
    var that=this, body


     var gridDrawer=function(x,y,len, spacing){
         body = that.dyn(x, y)
        len = N(len)?len: 30; spacing = N(spacing)?spacing: 20
        return function(x, y){
            body.rect(len, len, x * spacing, y * spacing)
                .den(1).fric(0.5).rest(.2)
            return body}},

         drawWall=gridDrawer(x, y, len, spacing)

    _.times(grid.length, function (row) {
        _.times(grid[0].length, function (col) {
            if (grid[col][row]){
                drawWall(row, col)}})})

return body.K('grid')}

w.badGuy=function(x,y){var that=this,w=this

    b=w.ball(x,y,60).bindSprite2(this.s.shape(x,y) )


    b.draw=function(frame){
        this.sprite.rG(['r','g'], [frame[0],frame[1]], 60).dc(0,0, 60)}

    b.h=b.health=100
    b.coll(function(){b.h--})
    b.K('badGuy')

    funcId = I(function update(){
        b.draw( frameByHealth(b) )
        if(b.h<=0){
            clearInterval(funcId)
            b.kill()}
        function frameByHealth(b){
            if(b.h<0){b.h=0}
            if(b.h>100){b.h=100}
            if(b.h<50){ return [ 1-((b.h/50)),1 ] }
            else {return [0, 1-((b.h-50)/50)  ]}}
    }, 300)




    return b}



w.marioWallsX=function(){

    var width=600, height=300, gravity=400

    w.left =  left = w.rect(0, height / 2, 40, height, 'pink').stat().K('leftWall').fric(.5).rest(.5)
    w.right = right = w.rect(width, height / 2, 40, height).K('rightWall')
    w.floor =  floor = w.rect(height, width / 2, width*5, 40, 'orange').stat().K('floor').fric(.2).rest(.2)
    w.ceiling =  ceiling = w.rect(height, 0, width*5, 40, 'orange').stat().K('ceiling').fric(.2).rest(.2)

return this}


w.goal=function(x,y){

    w.S(x-20,y-15, 'y',10,40)
    w.S(x,y,'y',40,10)
    w.S(x+20,y-15,'y',10,40)

}



w.sensorBucket=function(x,y,k){
    var w=this, sens

    x=N(x)?x:320
    y=N(y)?y:245

    k=k||'sensorBucket'


    w.S(x-150, y-15, 'r', 20, 200)

    w.S(x+150, y-15, 'r', 20, 200 )

    w.S(x-200, y-120 , 'r', 320, 20, 200,200 )

    sens = w.S(x,y,'d', [[280, 170 ,'-']]).K(k)

return sens}




cjs.stopWatch=function(){


    var watch = function self(reset){



        var res = new Date().getTime()  - self.time

        if(reset == '/'){self.reset()}

        return  res


    }



    watch.reset=function(){this.time = new Date().getTime()}
    watch.reset()

    return watch

}



_v = function (str) {
	return function () {
		eval(str)
	}
}
$L('player', 'relPos', 'zilla', 'goomba', 'coinWarp', 'orbit')
b.horizCenter = function () {
	var b = this;
	b.X(b.W().hW);
	return b
}   //-> b.X('hC')//b.g=function(){ return this.f().g }
w.bricks = function () {
	var w = this, g = G(arguments)
	_.e(g, function (g) {
		w.S.apply(w, g)
	})
	return w
}
w.rR = w.randRects = function (ob) {
	var w = this, g = G(arguments),
			o = g.O ? g.f : {y: g.f, z: g.s}
	o.y = N(o.y, 0)
	o.z = N(o.z, 1)
	_.t(20,
			function (i) {
				w.S(R(1100, 20), R(150, 40 + o.y), $r(),
						R(40, 15) * o.z, R(40, 15) * o.z).K('randomRect rR')
			})
	return w
}
w.goal = function (x, y) {
	w.S(x - 20, y - 15, 'y', 10, 40)
	w.S(x, y, 'y', 40, 10)
	w.S(x + 20, y - 15, 'y', 10, 40)
}
function player() {
	w.tim = w.addTim = function (n) {
		$l('w.tim')
		var w = this
		if (U(n)) {
			return w.D(300, 300, 'w', 15).K('tim').bS('guy', .3)
		}
		_.t(n, function () {
			w.addTim()
		})
		return w
	}
	w.me = function (x, y, Z) {
		var w = this, p
		Z = N(Z, 4)
		p = w.D(x, y)
		p.cir({c: 'X', C: 'X', l: 0, r: 1})
		p.rec('X', Z * 12, Z * 22).K('head')
		p.rec('X', Z * 10, Z * 20, 0, Z * 10, '-').K('feet')
		p.rec('X', Z * 2, Z * 6, 0, -Z * 12, '-').K('hat')
		p.rec('X', Z * 8, Z * 2, Z * 8, 0, '-').K('right')
		p.rec(Z * 8, Z * 2, -Z * 8, 0, '-').K('left')
		p.d(1).r(0).fr(.1).fixRot()
		p.bS({
			i: 'me',
			sc: Z / 10
		})
		return p.K('p player')
	}
	w.plat = function me(x, y, W, H) {
		var w = this, g = G(arguments)
		if (A(g[0])) {
			_.e(g, function (g) {
				me.apply(w, g)
			})
			return w
		}
		x = _.tN(x, 60)
		y = _.tN(y, x)
		W = _.tN(W, 30)
		H = _.tN(H, W)
		return w.S(x, y, 's', W, H)
				.r(0.3)
				.fr(2)
				.K('plat')
	}
	w.clod = w.clouds = function (lX, y) {
		var w = this
		lX = N(lX, 100)
		y = N(y, 75)
		_.t(100, function () {
			w.S(R(400) + lX, y, $r(), R(30))
		})
		return w
	}
	w.rub = w.rubber = function (x, y, len) {
		var w = this, rub
		len = N(len, 200)
		x += len / 2
		return w.S(x, y).rec({
			w: len, h: 20, c: 'r', s: 1
		}).fr(.3).r(.7)
	}
	w.grass = function (x, y, len) {
		var w = this
		len = N(len, 200)
		x += len / 2
		return w.S(x, y, 'g', len, 20).fr(.3).r(.3)
	}
	w.ice = function (x, y, len) {
		var w = this
		len = N(len, 200)
		x += len / 2
		return w.S(x, y, 'w', len, 20).fr(0).r(0)
	}
	w.p = function (x, y, sc, cn) {
		var w = this, g = G(arguments),
				p
		sc = N(sc, 1)
		cn = cn || 'jump'
		p = w.D(x, y).fR()
		p.cn(cn)
		p.SetBullet(true)
		p.rec({c: 'r', l: 5, C: 'r', w: 22 * sc, h: 40 * sc}).d(5).C('z')
		p.rec({
			s: 1,
			w: 8 * sc, h: 8 * sc,
			x: 0,
			y: 20 * sc,
		}).K('foot feet').C('w')//C('X')
		p.rec({
			s: 1,
			w: 10 * sc,
			h: 10 * sc,
			x: 0,
			y: -30 * sc,
		}).K('hat').C('g').mS()
		p.Bm('me', 0, 0, 0.25 * sc)
		// p.bS(   {i:'me', sc: .25*sc, x:-10,y:-110}  )
		if (g.p) {
			p.tr()
		}
		p.r(.4)
		p.lD(.5)
		return p
	}
	f.mS = function () {
		var f = this
		f.SetSensor(true)
		return f
	}
	b.inAir = function () {
		var b = this, onG = false
		this.cxs(function (cx) {
			if (cx.IsTouching()) {
				cx.w('feet',
						function () {
							if (this.of(b)) {
								onG = true
							}
						})
			}
		})
		return !onG
	}
	b2d.cn.j = b2d.cn.jump = function (p) {
		
		/* p.vX(
		 K.r?200 :
		 K.l?-200 :0)
		 if(K.u && p.onG){
		 p.vY(-1000)
		 }*/
		var m = p.mass()
		if (p.inAir()) {
			if ($.K.r) {
				p.I(m / 2, 0)
			}
			else if ($.K.l) {
				p.I(-m / 2, 0)
			}
			p.I(0, m * 3)
		}
		else {//on ground
			if ($.K.u) {//initiate a jump
				if ($.K.r) {
					p.lV(m, -m * 4)
				}
				else if ($.K.l) {
					p.lV(-m, -m * 4)
				}
				else {
					p.lV(0, -m * 8)
				}
			}
			else {//not jumping, may be running
				if ($.K.r) {
					p.lV(m * 2, 0)
				}
				else if ($.K.l) {
					p.lV(-m * 2, 0)
				}
				else {
					p.lV(0, 0)
				}
			}
		}
		if ($.K.d) {
			p.I(0, m * 3)
		}
	}
	w.P = function (x, y, sc) {
		var w = this,
				g = G(arguments)
		p = w.p(N(g.f, w.hW), N(g.s, w.H - 50), N(sc, 2))
		if (g.p) {
			p.tr()
		}
		return w
	}
	STOOGES = MARIOS = MARS = function () {
		W().P().P().P()
	}
	STREET = HIDESEEK = HEEK = function () {
		W([1200, 600, 1400, 1200], {g: 300, t: 0})
		w.S(700, 1000, 'r', 800, 20)
		w.S(500, 800, 'g', 200, 20)
		w.S(900, 600, 'x', 200, 20)
		p = w.p(700, 600)
		w.fg.A(p.sp())
		w.track(p, 600, 400,
				{x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
	}
}
function relPos() {
	w.ramps = function () {
		var w = this
		w.ramp(
				[400, 350, 200, 300, 100],
				[500, 350, 300, 300, 60],
				[600, 350, 200, 300, 100],
				[700, 350, 300, 300, 60],
				[800, 350, 200, 300, 100],
				[1000, 350, 300, 300, 60],
				[1030, 350, 200, 300, 100],
				[1200, 350, 300, 300, 60])
		return w
	}
	w.ramp = function me(x, y, W, H, a) {
		var w = this, g = G(arguments)
		if (A(g[0])) {
			_.e(g, function (g) {
				me.apply(w, g)
			})
			return w
		}
		o = O(g[0]) ? g[0] : {x: g[0], y: g[1], w: g[2], h: g[3], a: g[4]}
		o.x = N(o.x, 300)
		o.y = N(o.y, 300)
		o.w = N(o.w, 100)
		o.h = N(o.h, 100)
		o.a = N(o.h, 10)
		o.c = o.c || 'y'
		return w.S(o.x, o.y, o.c, o.w, o.h).rt(a).DFB(1, 0, 0)
	}
	b.relPos = function () {
		return this.X() + this.S().X()
	}
	AUTOGAME = RELPOS = function () {
		W({w: 0, t: 0}).P()
		setup = function () {
			score = 0
			p.XY(350, 100)
			p.lV(0, 0)
			p.cn('j')
			p.d(.1).r(1).fr(0)
			w.s.XY(0, 0)
		}
		setup()
		T.t(function () {
			w.s.X(4, '-');
			if (p.relPos() < -100) {
				setup()
			}
		})//.pen(score++)
		w.ramps()
	}
}
function zilla() {
	w.fireBall = function (x, y, vX, vY) {
		var v = 8
		if (vX == 'l') {
			vX = v;
			vY = 0
		}
		if (vX == 'r') {
			vX = -v;
			vY = 0
		}
		if (vX == 'u') {
			vX = 0;
			vY = -v
		}
		if (vX == 'd') {
			vX = 0;
			vY = v
		}
		if (vX == 'ul') {
			vX = v;
			vY = -v
		}
		if (vX == 'ur') {
			vX = -v;
			vY = -v
		}
		if (vX == 'dl') {
			vX = v;
			vY = v
		}
		if (vX == 'dr') {
			vX = -v;
			vY = v
		}
		vX = N(vX) ? vX : 0
		vY = N(vY) ? vY : 0
		return this.D(x, y, 'r', 18)//.bS('sun',.2)
				.lV(vX, vY)
	}
	w.zilla = function (x, y) {
		var w = this
		var z = w.S(x, y, 80, 140)  //make sensor?
				.fR()
				.bS('guy', [.8, 1])
				.moveInCircle('-')
				.cl('bul',
				function (bul) {
					bul.B().kill()
					z.hits++
				})
		z.hits = 0
		z.fireBalls = function () {
			var x = this.X(),
					y = this.Y()
			w.fireBall(x + 50, y - 80, 'ul')
			w.fireBall(x + 50, y + 80, 'dl')
			w.fireBall(x - 50, y - 80, 'ur')
			w.fireBall(x - 50, y + 80, 'dr')
			w.fireBall(x, y - 80, 'u')
			w.fireBall(x, y + 80, 'd')
			w.fireBall(x - 50, y, 'r')
			w.fireBall(x + 50, y, 'l')
		}
		z.fireBallsAtInt = function (ms) {
			var z = this
			setInterval(function () {
				z.fireBalls()
			}, ms)
			return this
		}
		return z
	}
	b.moveInCircle = function (rad, speed) {
		$l('b.moveInCircle')
		var g = G(arguments), rad = N(g[0]) ? g[0] : 100,
				speed = N(g[1]) ? g[1] : 2,
				toRad = Math.toRadians, cos = Math.cos, sin = Math.sin,
				b = this,
				ang = 0,
				x = b.X(),
				y = b.Y(),
				bX,
				bY
		T.t(function () {
			ang += toRad(speed)
			bX = rad * cos(ang)
			bY = rad * sin(ang)
			if (g.p) {
				bY *= 2
			}
			if (g.n) {
				bX *= 2
			}
			b.XY(bX + x, bY + y)
		})
		return this
	}
	ZIL = function () {
		W({g: 0, w: 0})
		health = 100
		y = w.ship().warp().cl(function () {
			health -= 5
		})
		z = w.zilla(600, 300).fireBallsAtInt(4000)
		w.show(function () {
			return 'health: ' + health + ', hits: ' + z.hits
		})
	}
}
function goomba() {
	w.goomba = function (x, y) {
		x = _.tN(x, 300)
		y = _.tN(y, 100)
		return w.D(x, y, 'w', 30, 30).bS('guy').K('goomba')
	}
	w.bobom = function (x, y) {
		var w = this,
				bobom = w.D(x, y, 'd', [
					[40, 'body'],
					[40, 5, 30, 0, 'bobomSens', '-']])
		w.b(function (cx) {
			cx.w('bobomSens', function () {
				this.B().kill()
			})
		})
		body = bobom.rec(20, 20).d(1).r(1)
		sen = bobom.rec({s: 1})
		sen.cl('player', function () {
			w.B().kill()
		})
		return bobom
	}
	GOOMBA = function () {
		W()
// could i automatically have body listen to their sens?
		w.ball().r(.3)
		workingGoomba = p = w.p(900, 450).cn('jump')
		p.my('hat', function () {
			p.bS('guy')
		})
		p.my('right');
		p.my('left')
		$.space(function () {
			if (p.my.right) {
				p.I(100, -400)
			}
			if (p.my.left) {
				p.I(-100, -400)
			}
		})
	}
}
function coinWarp() {
	w.coin = function (x, y) {
		var w = this, c
		x = _.tN(x, R(600))
		y = _.tN(y, R(300))
		c = w.D(x, y, 'y', 20).K('coin').bo(0).den(0).lD(0)
		c.I(R(15, -5), R(15, -5))
		c.warp()
		return c
	}
	b.warp = function (p) {
		$l('b.warp')
		var b = this, w = b.W()
		cjs.t(function () {
			if (b.Y() < 0) {
				b.Y(w.H)
			}
			if (b.Y() > w.W) {
				b.Y(0)
			}
			if (b.X() < 0) {
				b.X(w.W)
			}
			if (b.X() > w.W) {
				b.X(0)
			}
		})
		return b
	}
	w.gG = function (x, y) {
		var w = this,
				gG, core, shell, z
		z = 40
		gG = w.D(N(x, w.hW), N(y, w.hH)).K('gG')
		core = gG.cir({c: 'o', C: 'z', l: 10, r: 20}).K('core')
		shell = gG.rec({c: 'g', C: 'g', l: 5, w: z, h: z, s: 1, al: .5})
		core.cl('bul', function (bulF) {
			gG.lV(0).aV(0);
			z = 40;
		})
		_.ev(2, function () {
			z += 4
			if (shell) {
				shell.kill()
			}
			shell = gG.rec({c: 'g', C: 'g', l: 5, w: z, h: z, s: 1, al: .5})
			//shell=gG.rec('g',z,z,'-')//.bS( shell.img=w.s.rec('g',z,z) )
			//w.back(sh)
		})
		return gG
	}
	w.badGuy = function (x, y) {
		var that = this, w = this
		b = w.D(x, y, 'd', 60).K('badGuy').bS(
				w.s.h(x, y)
		)
		b.draw = function (frame) {
			var b = this
			b.sp().rf(['r', 'g'],
					[frame[0], frame[1]], 60).dc(60)
		}
		b.h = b.health = 100
		b.cl(function () {
			b.h--
		})
		funcId = I(function () {
			b.draw(frameByHealth(b))
			if (b.h <= 0) {
				clearInterval(funcId);
				b.kill()
			}
			function frameByHealth(b) {
				if (b.h < 0) {
					b.h = 0
				}
				if (b.h > 100) {
					b.h = 100
				}
				if (b.h < 50) {
					return [1 - ((b.h / 50)), 1]
				}
				else {
					return [0, 1 - ((b.h - 50) / 50)]
				}
			}
		}, 300)
		return b
	}
	GG = function () {
		W({g: 0}).Y()
		w.gG(100, 100);
		w.gG(200, 200);
		w.gG(300, 300)
	}
	GREEN = function () {
		W({w: '@', g: 0})
		y = w.y(400, 200).K('pop')
		w.gG(400, 400)
	}
	COINWARP = function () {
		W({g: 0, w: 0}).Y()
		y.warp()
		score = 0
		badScore = 0
		// p = w.ship().K('player pop').warp()
		//p= w.p(100,100, 'thrust').Y(200).horizCenter().aD( 10000 ).lD(0).K('pop').warp()
		gg = w.gG(300, 300).warp()
		_.ev(8, function () {
			w.coin().sen(1)
		})
		/*
		 w.beg(function(cx){var fixt
		 cx.with('coin','player', function(){this.B().kill()
		 score++})
		 cx.with('coin','greenGuy', function(){
		 this.B().kill()
		 badScore++
		 })
		 })
		 */
		// w.coll('coin','player', function(){this.B().kill(); score++})
		// w.coll('coin','gg', function(){this.B().kill();badScore++})
		/*
		 // w.class('coin')
		 //   .with('player', function(c){c.setDestroy();score++})
		 // .with('greenGuy', function(c){c.setDestroy();badScore++})
		 w.class('coin').with({
		 player: function(){score++; return true},
		 greenGuy: function(){badScore++; return true}
		 })
		
		 */
		_.ev(3, function () {
			w.pen(score + ' / ' + badScore)
		})
	}
}
function orbit() {
}

old = function () {
	refMakeWorldScrollCode = function () {
		w.t = w._t = w._t || w.S(w.hW, w.hH, 'w', [[20, 2, '-']]).r(.8) //trackee
		w.i.A(w.tSpr = $Ct().XY(w.t.X(), w.t.Y())) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)
		T.t(function () {
			if (F(w.t.cb)) {
				w.t.cb()
			} else if (F(w.tCb)) {
				w.tCb()
			} // actually calls the callbacks
			// i see w.sXCap and w.sYCap.. i think they limit the scroll distances
			//distances are simply calculated and assigned right to **** w.s *****
			//so it moves the actual stage... (dont worry, not the canvas)
			w.s.x = -w.sXCap((w.t.X() - w.hW + w.hW) * w.z - w.hW)
			w.s.y = -w.sYCap((w.t.Y() - w.hH + w.hH) * w.z - w.hH)
			if (w.t == w._t) {// if the trackee is the generic one that world provided...
				//have it bind to 'tSpr'.. some dumb tim graphic.. i think i can lose this part real soon
				w.t.XY(
						w.tSpr.X(),
						w.tSpr.Y()
				)
				w.s.rot(w.tSpr.rot())
			}
		})
	}
}
$L('scroll', 'player', 'relPos', 'zilla', 'goomba', 'coinWarp', 'orbit')
b.horizCenter = function () {
	var b = this;
	b.X(b.W().hW);
	return b
}   //-> b.X('hC')//b.g=function(){ return this.f().g }
w.bricks = function () {
	var w = this, g = G(arguments)
	_.e(g, function (g) {
		w.S.apply(w, g)
	})
	return w
}
w.rR = w.randRects = function (ob) {
	var w = this, g = G(arguments),
			o = g.O ? g.f : {y: g.f, z: g.s}
	o.y = N(o.y, 0)
	o.z = N(o.z, 1)
	_.t(20,
			function (i) {
				w.S(R(1100, 20), R(150, 40 + o.y), $r(),
						R(40, 15) * o.z, R(40, 15) * o.z).K('randomRect rR')
			})
	return w
}
w.goal = function (x, y) {
	w.S(x - 20, y - 15, 'y', 10, 40)
	w.S(x, y, 'y', 40, 10)
	w.S(x + 20, y - 15, 'y', 10, 40)
}
  