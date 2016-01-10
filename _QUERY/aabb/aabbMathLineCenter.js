function lineCenter() {
	f.cent = f.center = function () {
		var bounds = this.GetAABB()
		return M.lineCenter(bounds.lowerBound,
				bounds.upperBound).mult()
	}//center point of its BOUNDING BOX
}