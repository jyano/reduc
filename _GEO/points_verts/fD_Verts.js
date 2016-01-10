fD.vrt = fD.verts = function () {
	var h = this.H()
	var verts = h.vs()
	return [vs[0].m(), vs[1].m(), vs[2].m(), vs[3].m()]
	function alt() {
		fD.vrt = fD.verts = function () {
			var shape = this.shape,
					verts = shape.m_vertices,
					verts = [
						verts[0].mult(),
						verts[1].mult(),
						verts[2].mult(),
						verts[3].mult()]
			return $l(verts)
		}
	}
}