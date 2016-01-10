bH.tP = bH.tPt = function (tf, v, y) {
	var bH = this
	//bH.test = h.point =
	function alt() {
	
		bH.testPoint = h.tP = function (tf, vec) {
			return this.TestPoint(tf, vec)
		}
		
		bH.TP = function (x, y) {
			return this.TestPoint(x, y)
		}
		
		bH.tPt = bH.tP = function (x, y) {
			var bH = this
			alert('bH.tPt tP')
			return bH.TP(x / 30, y / 30)
		}
	}
	
	return this.TestPoint(tf, V(v, y).div())
}

bH.C = function () {
	return this.Copy()
}

bH.seg = h.segment = function (xf, lamb, norm, seg, maxLamb) {//Perform a ray cast against this shape.
	return this.TestSegment(xf,
			lamb,//:Array, returns the hit fraction.
			// You can use this to compute the contact point p = (1 - lambda) segment.p1
			// + lambda segment.p2.
			norm,//:b2Vec2, returns the normal at the contact point.
			// If there is no intersection, the normal is not set.
			seg,//:b2Segment, defines the begin and end point of the ray cast
			maxLamb//:Numbera number typically in the range [0,1]
	)
}

bH.RC = function (fn, p1, p2) {
	return this.RayCast(fn, p1, p2)
}

bH.CAB = function (v1, v2) {
	var bH = this;
	return bH.ComputeAABB()
}

bH.CM = function (mass) {
	var bH = this;
	return bH.ComputeMass()
}

bH.CSA = function () {
	var bH = this
	var area = bH.ComputeSubmergedArea()
	return area
}
 