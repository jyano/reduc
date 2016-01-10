w.pack = w.PackThruster = function (ani) {
	var th = w.th(600, 500, 'b', 100).C("X").r(1).fR()
	th.Sp(Pack, 0, 0, .8)
	return th.p(ani || 'f1')
}
  