calcShapes = function (vs) {
	var vec;
	var i, n, j;
	var d, t, dx, dy, minLen;
	var i1, i2, i3, p1, p2, p3;
	var j1, j2, v1, v2, k, h
	var vec1, vec2;
	var v, hitV;
	var isVex = false;
	var vexPols = []
	var qu = [vs]
	while (qu.length) {
		isVex = true;
		vec = qu[0];
		_.t(n = vec.length, function (i) {
			i1 = i;
			i2 = (i < n - 1) ? i + 1 : i + 1 - n;
			i3 = (i < n - 2) ? i + 2 : i + 2 - n;
			p1 = vec[i1];
			p2 = vec[i2];
			p3 = vec[i3]
			d = det(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
			if (d < 0) {
				///////////////////////////////////////////
				isVex = false;
				minLen = 1000000000000000000000000
				_.t(n, function (j) {
					if (j != i1 && j != i2) {
						hitRayFn$(p1, p2, v1 = vec[j1 = j], v2 = vec[j2 = (j < n - 1) ? j + 1 : 0], function (v) {
							if ((t = M.sumOfSqs(p2, v)) < minLen) {
								h = j1;
								k = j2;
								hitV = v;
								minLen = t
							}
						})
					}
				})
				vec1 = [];
				vec2 = [];
				v1 = vec[j1 = h];
				v2 = vec[
						j2 = k]
				if (!pointsMatch(hitV.x, hitV.y, v2.x, v2.y)) {
					vec1.push(hitV)
				}
				if (!pointsMatch(hitV.x, hitV.y, v1.x, v1.y)) {
					vec2.push(hitV)
				}
				h = -1;
				k = i1
				while (true) {
					if (k == j2) {
						if (!isOnSegment(v2.x, v2.y, vec[h].x, vec[h].y, p1.x, p1.y)) {
							vec1.push(vec[k])
						}
						//if( h<0|| h>=n ){err()}
						break
					}
					else {
						vec1.push(vec[k])
					}
					h = k;
					k = (k < 1) ? n - 1 : k - 1
				}
				vec1 = vec1.reverse();
				h = -1;
				k = i2
				while (true) {
					if (k == j1) {
						if (!isOnSegment(v1.x, v1.y, vec[h].x, vec[h].y, p2.x, p2.y)) {
							vec2.push(vec[k])
						}//  if   ( h<0  || h>=n)  {  err()   }
						break
					}
					else {
						vec2.push(vec[k])
					}
					h = k;
					k = (k + 1 > n - 1) ? 0 : k + 1
				}
				qu.push(vec1, vec2);
				qu.shift()
				///////////////////////////////////////////
			}
		})
		if (isVex) {
			vexPols.push(qu.shift())
		}
	}
	return vexPols
}





 