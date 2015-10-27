# 'randomND' module v1.0
# by Marc Krenn, Oct. 27th, 2015 | marc.krenn@gmail.com | @marc_krenn
#
# Add the following line to your project in Framer Studio. 
# randomND = require "randomND"

Utils.randomND = exports.randomND = (min, max, std_dev = (max/10)+2, mean = 0, amp = 2) ->

    random = Math.round(Utils.modulate(mean + gaussRandom(amp) * std_dev,[max/2*-1,max/2],[min,max],false))
        
    if random < min || random > max
        return Math.round(Utils.randomNumber(min,max))
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