# 'randomND' module v1.0
# by Marc Krenn, Jan. 2nd, 2016 | marc.krenn@gmail.com | @marc_krenn
#
# Add the following line to your project in Framer Studio. 
# randomND = require "randomND"

Utils.randomND = exports.randomND = (from, to, deviation = (to/10)+2, mean = 0, amp = 2) ->

    random = Math.round(Utils.modulate(mean + gaussRandom(amp) * deviation,[to/2*-1,to/2],[from,to],false))

    if random < from or random > to
        return Math.round(Utils.randomNumber(from,to))
    else
        return random

	# the following is based on http://stackoverflow.com/a/196941 , Box-Muller Tranformation
	gaussRandom = (amp) ->

		u = 2 * Math.random() - 1
		v = 2 * Math.random() - 1
		r = u * u + v * v

		if r == 0 or r > 1
			return gaussRandom(amp)

		c = Math.sqrt(amp * -1 * Math.log(r) / r)
		u * c