function _gear(){
	function rat() {
		j.rat = j.r = function (ra) {
			this.ratio = ra
			return this
		}
		jD.rat = jD.r = function (a) {
			this.ratio = a;
			return this
		}
	}
	
	$L('rat')
	w.Gear = function (a, b, c) {
		return this.CJ(Gear(a, b, c))
		function Gear(bA, bB, ratio) {
			var gJD = new b2d.Joints.b2GearJointDef()
			gJD.joint1 = bA
			gJD.joint2 = bB
			gJD.bodyA = bA.GetBodyA()
			gJD.bodyB = bB.GetBodyA()
			gJD.ratio = N(ratio) ? ratio : 1
			return gJD
		}
	}
	DEMO_GEAR = DMG = function () {
		W().Gear(
				w.rev(w.baa(100, 220, 40), w.bi(100, 220, 100, 20)),
				w.rev(w.baa(250, 220), w.bi(250, 220, 100, 20)),
				.5
		)
	}
}
w.Gear = function (a, b, c) {
	return world.createJoint(Gear(a, b, c))
	function Gear(bA, bB, ratio) {
		var gearJoint = new b2d.Joints.b2GearJointDef()
		gearJoint.joint1 = bA
		gearJoint.joint2 = bB
		gearJoint.bodyA = bA.GetBodyA()
		gearJoint.bodyB = bB.GetBodyA()
		gearJoint.ratio = N(ratio) ? ratio : 1
		return gearJoint
	}
}
DEMOGEAR = GEAR=function () {
	W()
	
	
	w.Gear(
			
			
			w.rJ(
					w.S(100, 220).cir(40),
					w.D(100, 220).rec( 100, 20).C('b')
			),
			
				
						
			
			w.rJ(
					w.S(250, 220).cir(20),
					w.D(250, 220).rec( 100, 20).C('g')
			), 
			
			
			.5
					
	
	
	)




}


 function gear_(){
	 w.Gear = function (a, b, c) {
		 return world.createJoint(Gear(a, b, c))
		 function Gear(bA, bB, ratio) {
			 var gearJoint = new b2d.Joints.b2GearJointDef()
			 gearJoint.joint1 = bA
			 gearJoint.joint2 = bB
			 gearJoint.bodyA = bA.GetBodyA()
			 gearJoint.bodyB = bB.GetBodyA()
			 gearJoint.ratio = N(ratio) ? ratio : 1
			 return gearJoint
		 }
	 }
	 DEMOGEAR = GEAR = function () {
		 W()
		 w.Gear(
				 w.rJ(
						 w.S(100, 220).cir(40),
						 w.D(100, 220).rec(100, 20).C('b')
				 ),
				 w.rJ(
						 w.S(250, 220).cir(20),
						 w.D(250, 220).rec(100, 20).C('g')
				 ),
				 .5
		 )
	 }
 }