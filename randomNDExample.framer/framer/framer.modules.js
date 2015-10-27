require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"randomND":[function(require,module,exports){
var gaussRandom;

Utils.randomND = exports.randomND = function(min, max, std_dev, mean, amp) {
  var random;
  if (std_dev == null) {
    std_dev = (max / 10) + 2;
  }
  if (mean == null) {
    mean = 0;
  }
  if (amp == null) {
    amp = 2;
  }
  random = Math.round(Utils.modulate(mean + gaussRandom(amp) * std_dev, [max / 2 * -1, max / 2], [min, max], false));
  if (random < min || random > max) {
    return Math.round(Utils.randomNumber(min, max));
  } else {
    return random;
  }
};

gaussRandom = function(amp) {
  var c, r, u, v;
  u = 2 * Math.random() - 1;
  v = 2 * Math.random() - 1;
  r = u * u + v * v;
  if (r === 0 || r > 1) {
    return gaussRandom(amp);
  }
  c = Math.sqrt(amp * -1 * Math.log(r) / r);
  return u * c;
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWFyY2tyZW5uL0Ryb3Bib3gvZnJhbWVyX3Byb2plY3RzL3JhbmRvbU5ERXhhbXBsZS5mcmFtZXIvbW9kdWxlcy9yYW5kb21ORC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNNQSxJQUFBOztBQUFBLEtBQUssQ0FBQyxRQUFOLEdBQWlCLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLFNBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxPQUFYLEVBQWlDLElBQWpDLEVBQTJDLEdBQTNDO0FBRWhDLE1BQUE7O0lBRjJDLFVBQVUsQ0FBQyxHQUFBLEdBQUksRUFBTCxDQUFBLEdBQVM7OztJQUFHLE9BQU87OztJQUFHLE1BQU07O0VBRWpGLE1BQUEsR0FBUyxJQUFJLENBQUMsS0FBTCxDQUFXLEtBQUssQ0FBQyxRQUFOLENBQWUsSUFBQSxHQUFPLFdBQUEsQ0FBWSxHQUFaLENBQUEsR0FBbUIsT0FBekMsRUFBaUQsQ0FBQyxHQUFBLEdBQUksQ0FBSixHQUFNLENBQUMsQ0FBUixFQUFVLEdBQUEsR0FBSSxDQUFkLENBQWpELEVBQWtFLENBQUMsR0FBRCxFQUFLLEdBQUwsQ0FBbEUsRUFBNEUsS0FBNUUsQ0FBWDtFQUVULElBQUcsTUFBQSxHQUFTLEdBQVQsSUFBZ0IsTUFBQSxHQUFTLEdBQTVCO0FBQ0ksV0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLEtBQUssQ0FBQyxZQUFOLENBQW1CLEdBQW5CLEVBQXVCLEdBQXZCLENBQVgsRUFEWDtHQUFBLE1BQUE7QUFHSSxXQUFPLE9BSFg7O0FBSmdDOztBQVduQyxXQUFBLEdBQWMsU0FBQyxHQUFEO0FBRWIsTUFBQTtFQUFBLENBQUEsR0FBSSxDQUFBLEdBQUksSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFKLEdBQW9CO0VBQ3hCLENBQUEsR0FBSSxDQUFBLEdBQUksSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFKLEdBQW9CO0VBQ3hCLENBQUEsR0FBSSxDQUFBLEdBQUksQ0FBSixHQUFRLENBQUEsR0FBSTtFQUVoQixJQUFHLENBQUEsS0FBSyxDQUFMLElBQVUsQ0FBQSxHQUFJLENBQWpCO0FBQ0MsV0FBTyxXQUFBLENBQVksR0FBWixFQURSOztFQUdBLENBQUEsR0FBSSxJQUFJLENBQUMsSUFBTCxDQUFVLEdBQUEsR0FBTSxDQUFDLENBQVAsR0FBVyxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsQ0FBWCxHQUF5QixDQUFuQztTQUNKLENBQUEsR0FBSTtBQVZTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgJ3JhbmRvbU5EJyBtb2R1bGUgdjEuMFxuIyBieSBNYXJjIEtyZW5uLCBPY3QuIDI3dGgsIDIwMTUgfCBtYXJjLmtyZW5uQGdtYWlsLmNvbSB8IEBtYXJjX2tyZW5uXG4jXG4jIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyByYW5kb21ORCA9IHJlcXVpcmUgXCJyYW5kb21ORFwiXG5cblV0aWxzLnJhbmRvbU5EID0gZXhwb3J0cy5yYW5kb21ORCA9IChtaW4sIG1heCwgc3RkX2RldiA9IChtYXgvMTApKzIsIG1lYW4gPSAwLCBhbXAgPSAyKSAtPlxuXG4gICAgcmFuZG9tID0gTWF0aC5yb3VuZChVdGlscy5tb2R1bGF0ZShtZWFuICsgZ2F1c3NSYW5kb20oYW1wKSAqIHN0ZF9kZXYsW21heC8yKi0xLG1heC8yXSxbbWluLG1heF0sZmFsc2UpKVxuICAgICAgICBcbiAgICBpZiByYW5kb20gPCBtaW4gfHwgcmFuZG9tID4gbWF4XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKFV0aWxzLnJhbmRvbU51bWJlcihtaW4sbWF4KSlcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiByYW5kb21cbiAgICAgICAgXG5cbiAgICAjIHRoZSBmb2xsb3dpbmcgaXMgYmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTk2OTQxICwgQm94LU11bGxlciBUcmFuZm9ybWF0aW9uXG5cdGdhdXNzUmFuZG9tID0gKGFtcCkgLT5cblx0XG5cdFx0dSA9IDIgKiBNYXRoLnJhbmRvbSgpIC0gMVxuXHRcdHYgPSAyICogTWF0aC5yYW5kb20oKSAtIDFcblx0XHRyID0gdSAqIHUgKyB2ICogdlxuXHRcblx0XHRpZiByID09IDAgb3IgciA+IDFcblx0XHRcdHJldHVybiBnYXVzc1JhbmRvbShhbXApXG5cdCBcdFx0ICBcblx0XHRjID0gTWF0aC5zcXJ0KGFtcCAqIC0xICogTWF0aC5sb2cocikgLyByKVxuXHRcdHUgKiBjIl19
