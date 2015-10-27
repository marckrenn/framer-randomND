# 'randomND' module example project v1.0
# by Marc Krenn, Oct. 27th, 2015 | marc.krenn@gmail.com | @marc_krenn

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
		
# Draw 10000 'normally distributed' random numbers
for i in [0..10000]	
	
	#randomBiased = Utils.randomND(from,to)
	#randomBiased = Utils.randomND(from,to,deviation)
	#randomBiased = Utils.randomND(from,to,deviation,mean)
	
	randomBiased = Utils.randomND(from,to,deviation,mean,amplitude)
	
	if randomBiased >= from and randomBiased <= to
		barsVis[randomBiased].scaleY = barsVis[randomBiased].scaleY + 0.02