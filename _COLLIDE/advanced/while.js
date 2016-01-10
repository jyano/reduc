WHEN = function () {
	w = b2d.W()
	b = w.ball(500, 200, 30).K('z')
	b.when('z',
			function () {
				$l('beg')
			},
			function () {
				$l('end')
			}
	)
}
WHILE = function () {
	w = b2d.W({g: 0}).debug()
	y = w.ship()
	//  w.beg(y, function(){$l('aha')}
	y.while(function () {
		$l('aha')
	})
}
  