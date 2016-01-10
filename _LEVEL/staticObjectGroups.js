function staticObjectGroups() {
	w.jukeBox = function () {
		var w = this
		w.S(500, 500, 'o', 200)
		w.S(500, 500, 'r', 10)
		w.S(200, 200, 'm', 40)
		w.S(800, 200, 'b', 60)
		w.S(800, 800, 'l', 80)
		w.S(200, 800, 'g', 100)
		return w
	}
}