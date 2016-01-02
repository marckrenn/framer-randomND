# 'randomND' module example project v1.0
# by Marc Krenn, Jan. 2nd, 2016 | marc.krenn@gmail.com | @marc_krenn

# Include module
randomND = require "randomND"

from = 0
to = 99
deviation = 17 # Curve's width
mean = 0 # Shifts amplitude
amplitude = 2 # Curve's pointines

# Visualization
barsVis = []

for i in [from..to]
	bar = barsVis[i] = new Layer
		height: to-from
		width: Screen.width/(to-from)
		x: (i * Screen.width/(to-from)) - (Screen.width/(to-from) * from)
		maxY: Screen.height - 160
		originY: 1
		scaleY: 0
		name: "bar: " + i
		
Events.wrap(window).addEventListener "resize", (event) ->
	for i in [from..to]
		barsVis[i].width = Screen.width/(to-from)
		barsVis[i].x = (i * Screen.width/(to-from)) - (Screen.width/(to-from) * from)

		
# Draw 10000 'normally distributed' random numbers
for i in [0..10000]	

	randomBiased = Utils.randomND(from,to)

	# Also valid ways to use Utils.randomND:
	
	#randomBiased = Utils.randomND(from,to)
	#randomBiased = Utils.randomND(from,to,deviation)
	#randomBiased = Utils.randomND(from,to,deviation,mean)
	
	barsVis[randomBiased].scaleY = barsVis[randomBiased].scaleY + 0.02