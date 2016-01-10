Validate = function (verticesVec) {
	/**
	 * Checks whether the vertices in <code>verticesVec</code> can be properly distributed into the new fixtures
	 * (more specifically, it makes sure there are no overlapping segments and the vertices are in clockwise order).
	 * It is recommended that you use this method for debugging only, because it may cost more CPU usage.
	 * <p/>
	 * @param verticesVec The vertices to be validated.
	 * @return An integer which can have the following values:
	 * <ul>
	 * <li>0 if the vertices can be properly processed.</li>
	 * <li>1 If there are overlapping lines.</li>
	 * <li>2 if the points are <b>not</b> in clockwise order.</li>
	 * <li>3 if there are overlapping lines <b>and</b> the points are <b>not</b> in clockwise order.</li>
	 * </ul>
	 * */
	
	var i, n = verticesVec.length, j, j2, i2, i3, d, ret = 0;
	var fl, fl2 = false
	_.times(n, function (i) {
		i2 = (i < n - 1) ? i + 1 : 0
		i3 = (i > 0) ? i - 1 : n - 1
		fl = false
		_.times(n, function (j) {
			if (j != i && j != i2) {
				if (!fl) {
					d = det(verticesVec[i].x, verticesVec[i].y, verticesVec[i2].x, verticesVec[i2].y, verticesVec[j].x, verticesVec[j].y);
					if (d > 0) {
						fl = true
					}
				}
				if ((j != i3)) {
					j2 = (j < n - 1) ? j + 1 : 0;
					if (hitSegment(verticesVec[i].x, verticesVec[i].y, verticesVec[i2].x, verticesVec[i2].y, verticesVec[j].x, verticesVec[j].y, verticesVec[j2].x, verticesVec[j2].y)) {
						ret = 1;
					}
				}
			}
		})
		if (!fl) {
			fl2 = true
		}
	})
	if (fl2) {
		if (ret == 1) {
			ret = 3
		} else {
			ret = 2
		}
	}
	return ret
}
hitSegment = function (x1, y1, x2, y2, x3, y3, x4, y4) {
	var t1 = x3 - x1, t2 = y3 - y1, t3 = x2 - x1, t4 = y2 - y1, t5 = x4 - x3, t6 = y4 - y3, t7 = t4 * t5 - t3 * t6, a;
	a = (((t5 * t2) - t6 * t1) / t7);
	var px = x1 + a * t3, py = y1 + a * t4;
	var b1 = isOnSegment(px, py, x1, y1, x2, y2);
	var b2 = isOnSegment(px, py, x3, y3, x4, y4);
	if ((b1 && b2)) {
		return V(px, py);
	}
	return null;
}