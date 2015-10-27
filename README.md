## framer-randomND
‚randomND‘ returns a *Normally Distributed* random number - think *Bell-Curve* - where some numbers are more likely to be returned than others. Please see and play around with the provided randomNDExample.

Probs to Chris Camargo, Jordan Robert Dobson, stackoverflow’s user5084.

#### Demo

*Live Demo*: http://share.framerjs.com/ng768o396w3o/


#### Getting started

```CoffeeScript
# Copy ‚randomND.coffee’ into your project’s ‚modules‘-folder

# Include module
randomND = require „randomND“

# Returns a ND random number 
Utils.randomND(from,to,deviation,mean,amplitude)
# Optional: mean = shifts amplitude
# Optional: deviation = curve’s width
# Optional: amplitude = curve’s pointines
```