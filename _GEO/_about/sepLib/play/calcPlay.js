calcShapes = function (verts) {
	var vec
	var i, n, j
	var d, t, dx, dy, minLen
	var i1, i2, i3, p1, p2, p3
	var j1, j2, v1, v2, k, h
	var vec1, vec2
	var v, hitV
	var isConvex = true
	var figsVec = [], queue = [verts]
	while (queue.length) {
		/////////////////////////
		vec = queue[0]
		n = vec.length
		isConvex = true
		
		//each pt in vec
		_.times(n, function (i) {
			i1 = i
			i2 = (i < n - 1) ? i + 1 : i + 1 - n
			i3 = (i < n - 2) ? i + 2 : i + 2 - n
			p1 = vec[i1]
			p2 = vec[i2]
			p3 = vec[i3]
			d = det(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
			//det of 3 pts???
			if (d < 0) {
				minLen = Number.MAX_VALUE //100000000000000000000
				isConvex = false
				
				
				//each pt in vec again
				_.t(n, function (j) {
					if (j != i1 && j != i2) {
						j1 = j;j2 = (j < n - 1) ? j + 1 : 0;
						v1 = vec[j1]; v2 = vec[j2];
						if (v = hitRay(p1.x, p1.y, p2.x, p2.y, v1.x, v1.y, v2.x, v2.y)) {
							dx = p2.x - v.x;  dy = p2.y - v.y; t = dx * dx + dy * dy
							if (t < minLen) { h = j1; k = j2; hitV = v; minLen = t }
						}
					}
				})
				
				vec1 = []; vec2 = []; j1 = h;j2 = k;v1 = vec[j1];v2 = vec[j2]; 
				
				if (!pointsMatch(hitV.x, hitV.y, v2.x, v2.y)) {vec1.push(hitV)}
				if (!pointsMatch(hitV.x, hitV.y, v1.x, v1.y)) {vec2.push(hitV)}
				
				h = -1; k = i1
				
				
				while (true) {
					if (k == j2) { //if( h<0|| h>=n ){err()}
						if (!isOnSegment(v2.x, v2.y, vec[h].x, vec[h].y, p1.x, p1.y)) {
							vec1.push(vec[k])}
						break
					} else {
						vec1.push(vec[k])
					}
					h = k
					k = (k < 1) ? n - 1 : k - 1
				}
				
				
				
				vec1 = vec1.reverse()
				h = -1; k = i2
				
				
				
				while (true) {
				
						
					if (k == j1) {//  if   ( h<0  || h>=n)  {  err()   }
						if (k == j1 && !isOnSegment(v1.x, v1.y, vec[h].x, vec[h].y, p2.x, p2.y)) {
							vec2.push(vec[k])}
						break
					}
					
					else {vec2.push(vec[k]);}
					h = k
					if (k + 1 > n - 1) {
						k = 0
					} else {
						k++
					}
				}
				queue.push(vec1, vec2); queue.shift()
				
			}
			
			
			
			
			
			
			
			
			
			
			
		})
		
		
		
		if (isConvex) {figsVec.push(queue.shift())}
		/////////////////////////
	}
	return figsVec
}
//calcShapes returns figsVec
//has a LOT of vars
//iterates over a list (a qu) by maniping array
//
//might check determnae, ch
// checks if not 'isOnSegment'
// does some reversing
//
calcShapes = function (vs) {
	var v
	var i, n, j
	var d, t, dx, dy, minLen
	var i1, i2, i3, p1, p2, p3
	var j1, j2, v1, v2, k, h
	var v1, v2
	var v, hitV
	var isVex
	var figsVec = []
	var qu = [vs]
	while (_.z(qu)) {
		v = qu[0];
		isVex = true
		_.t(n = _.z(v), function (i) {
			math()
			d = det(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
			if (d < 0) {
				isVex = false;
				minLen = Number.MAX_VALUE;
				_.t(n, fn2)
				v1 = [];
				v2 = [];
				j1 = h;
				j2 = k;
				v1 = v[j1];
				v2 = v[j2];
				pushMismatch(v2, v1);
				pushMismatch(v1, v2)
				h = -1;
				k = i1
				while (true) {
					if (k == j2) {
						if (offSegment(v2, p1)) {
							vPu()
						}
						break
					}
					else {
						vPu()
					}
					h = k;
					k = (k < 1) ? n - 1 : k - 1
				}
				v1 = v1.reverse();
				h = -1;
				k = i2
				while (true) {
					if (k == j1) {
						if (k == j1 && offSegment(v1, p2)) {
							v2.push(v[k])
						}
						break
					}
					else {
						v2.push(v[k])
					}
					h = k;
					if (k + 1 > n - 1) {
						k = 0
					} else {
						k++
					}
				}
				qu.push(v1, v2);
				qu.shift()
			}
		})
		if (isVex) {
			figsVec.push(qu.shift())
		}
	}
	return figsVec
}
function offSegment(ve, pe) {
	return !isOnSegment(
			ve.x, ve.y,
			v[h].x, v[h].y,
			pe.x, pe.y
	)
}
function pushMismatch(vHit, vPush) {
	if (!pointsMatch(hitV.x, hitV.y, vHit.x, vHit.y)) {
		vPush.push(hitV)
	}
}
function fn2(j) {
	if (j != i1 && j != i2) {
		j1 = j;
		j2 = (j < n - 1) ? j + 1 : 0;
		v1 = v[j1];
		v2 = v[j2];
		v = hitRay(p1.x, p1.y, p2.x, p2.y, v1.x, v1.y, v2.x, v2.y);
		if (v) {
			dx = p2.x - v.x;
			dy = p2.y - v.y;
			t = dx * dx + dy * dy
			if (t < minLen) {
				h = j1
				k = j2
				hitV = v
				minLen = t
			}
		}
	}
}
function vPu() {
	v1.push(v[k])
}
function math() {
	i1 = i
	i2 = (i < n - 1) ? i + 1 : i + 1 - n
	i3 = (i < n - 2) ? i + 2 : i + 2 - n
	p1 = v[i1]
	p2 = v[i2]
	p3 = v[i3]
}