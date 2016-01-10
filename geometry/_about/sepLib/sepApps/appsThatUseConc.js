 
TANGRAMS = function () {
	W({g: 0})
	b = w.B(300, 300, 't', 56, 56).rot(45).den(1).damp(1000, 1000)
	t = b2d.conc([V(-40, 20), V(0, -20), V(40, 20)]).XY(280, 260).rot(90).den(1).damp(1000, 1000)
	t2 = b2d.conc([V(-40, 20), V(0, -20), V(40, 20)]).XY(342, 321).den(1).damp(1000, 1000)
	bt = b2d.conc([V(-80, 40), V(0, -40), V(80, 40)]).XY(304, 220).rot(180).den(1).damp(1000, 1000)
	bt2 = b2d.conc([V(-80, 40), V(0, -40), V(80, 40)]).XY(346, 262).damp(1000, 1000)
			.rot(270).den(1).damp(1000, 1000)
	mt = b2d.conc([V(-56, 28), V(0, -28), V(56, 28)])
			.XY(237, 324).den(1).damp(1000, 1000)
	p = b2d.conc([V(-90, 20), V(-45, -20), V(45, -20), V(0, 20)]).XY(240, 267).den(1).damp(1000, 1000)
}  
UNION = function () {
	w = b2d.W()
	b = w.brick(300, 300, 50, 50)
	b2 = w.brick(320, 320, 50, 50)
	_.times(20, function () {
		u = b2d.conc(
				Math.poly(b.V()).union(Math.poly(b2.V())).verts()
		).XY(300, 100)
	})
}
TANGRAMSSTAT = function () {
	w = b2d.W()
	b = w.brick(300, 300, 56, 56).rot(45)
	t = b2d.conc([V(-40, 20), V(0, -20), V(40, 20)]).XY(280, 260).rot(90).fixedRot(true).stat()
	t2 = b2d.conc([V(-40, 20), V(0, -20), V(40, 20)]).XY(342, 321).fixedRot(true).stat()
	bt = b2d.conc([V(-80, 40), V(0, -40), V(80, 40)]).XY(304, 220).rot(180).fixedRot(true).stat()
	bt2 = b2d.conc([V(-80, 40), V(0, -40), V(80, 40)]).XY(346, 262).rot(270).fixedRot(true).stat()
	mt = b2d.conc([V(-56, 28), V(0, -28), V(56, 28)]).XY(237, 324).rot(225).fixedRot(true).stat()
	p = b2d.conc([
		V(-90, 20), V(-45, -20), V(45, -20), V(0, 20)
	]).XY(240, 267).rot(90)
			.fixedRot(true).stat()
}
POLYOPS = function () {
	w = b2d.W()
	p1 = Math.poly([[-50, 50], [-50, -50], [50, -50], [50, 50], [-45, 55]])
	p2 = Math.poly([[-100, 0], [-100, -100], [0, -100], [0, 0], [-98, 2]])
	w.S(300, 300).conc(p1)
	w.S(300, 300).conc(p2)
	w.B(500, 200).conc(p1.union(p2))
	w.B(500, 200).conc(p1.difference(p2))
	w.B(500, 200).conc(p1.intersection(p2))
	w.B(500, 200).conc(p1.xor(p2))
}
BODVERTS = function () {
	w = b2d.W()
	b = w.B(200, 200, 100, 100).stat()
	b.poly(20, 200)
	fs = b.fixts()
	f1 = fs[0]
	f2 = fs[1]
	p = f1.polyVerts().union(f2.polyVerts())
	b2d.polyDot(p)
	relP = b.rel(p)
	b2d.polyDot(relP)
	w.B(400, 200).conc(relP)
	w.B(500, 400, [-100, 0], [0, -100], [100, 50])
	w.B(500, 430).conc([[-100, 0], [0, -100], [100, 50]])
	//make conc happen automatically whenever array of points specified
	//conCAVE hull??
	//union of 2 non overlapping fixtures, can just result in a body with two fixtures.. yea, why are unions not just creating bodies with all the fixtures?  no need combine two fixtures into one, right???!
}
