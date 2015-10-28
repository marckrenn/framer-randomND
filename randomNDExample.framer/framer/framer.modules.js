require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"randomND":[function(require,module,exports){
var gaussRandom;

Utils.randomND = exports.randomND = function(from, to, deviation, mean, amp) {
  var random;
  if (deviation == null) {
    deviation = (max / 10) + 2;
  }
  if (mean == null) {
    mean = 0;
  }
  if (amp == null) {
    amp = 2;
  }
  random = Math.round(Utils.modulate(mean + gaussRandom(amp) * deviation, [to / 2 * -1, to / 2], [from, to], false));
  if (random < from || random > to) {
    return Math.round(Utils.randomNumber(from, to));
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWFyY2tyZW5uL0Ryb3Bib3gvZnJhbWVyX3Byb2plY3RzL3JhbmRvbU5ERXhhbXBsZS5mcmFtZXIvbW9kdWxlcy9yYW5kb21ORC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNNQSxJQUFBOztBQUFBLEtBQUssQ0FBQyxRQUFOLEdBQWlCLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLFNBQUMsSUFBRCxFQUFPLEVBQVAsRUFBVyxTQUFYLEVBQW1DLElBQW5DLEVBQTZDLEdBQTdDO0FBRWhDLE1BQUE7O0lBRjJDLFlBQVksQ0FBQyxHQUFBLEdBQUksRUFBTCxDQUFBLEdBQVM7OztJQUFHLE9BQU87OztJQUFHLE1BQU07O0VBRW5GLE1BQUEsR0FBUyxJQUFJLENBQUMsS0FBTCxDQUFXLEtBQUssQ0FBQyxRQUFOLENBQWUsSUFBQSxHQUFPLFdBQUEsQ0FBWSxHQUFaLENBQUEsR0FBbUIsU0FBekMsRUFBbUQsQ0FBQyxFQUFBLEdBQUcsQ0FBSCxHQUFLLENBQUMsQ0FBUCxFQUFTLEVBQUEsR0FBRyxDQUFaLENBQW5ELEVBQWtFLENBQUMsSUFBRCxFQUFNLEVBQU4sQ0FBbEUsRUFBNEUsS0FBNUUsQ0FBWDtFQUVULElBQUcsTUFBQSxHQUFTLElBQVQsSUFBaUIsTUFBQSxHQUFTLEVBQTdCO0FBQ0ksV0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLEtBQUssQ0FBQyxZQUFOLENBQW1CLElBQW5CLEVBQXdCLEVBQXhCLENBQVgsRUFEWDtHQUFBLE1BQUE7QUFHSSxXQUFPLE9BSFg7O0FBSmdDOztBQVVuQyxXQUFBLEdBQWMsU0FBQyxHQUFEO0FBRWIsTUFBQTtFQUFBLENBQUEsR0FBSSxDQUFBLEdBQUksSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFKLEdBQW9CO0VBQ3hCLENBQUEsR0FBSSxDQUFBLEdBQUksSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFKLEdBQW9CO0VBQ3hCLENBQUEsR0FBSSxDQUFBLEdBQUksQ0FBSixHQUFRLENBQUEsR0FBSTtFQUVoQixJQUFHLENBQUEsS0FBSyxDQUFMLElBQVUsQ0FBQSxHQUFJLENBQWpCO0FBQ0MsV0FBTyxXQUFBLENBQVksR0FBWixFQURSOztFQUdBLENBQUEsR0FBSSxJQUFJLENBQUMsSUFBTCxDQUFVLEdBQUEsR0FBTSxDQUFDLENBQVAsR0FBVyxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsQ0FBWCxHQUF5QixDQUFuQztTQUNKLENBQUEsR0FBSTtBQVZTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgJ3JhbmRvbU5EJyBtb2R1bGUgdjEuMFxuIyBieSBNYXJjIEtyZW5uLCBPY3QuIDI3dGgsIDIwMTUgfCBtYXJjLmtyZW5uQGdtYWlsLmNvbSB8IEBtYXJjX2tyZW5uXG4jXG4jIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyByYW5kb21ORCA9IHJlcXVpcmUgXCJyYW5kb21ORFwiXG5cblV0aWxzLnJhbmRvbU5EID0gZXhwb3J0cy5yYW5kb21ORCA9IChmcm9tLCB0bywgZGV2aWF0aW9uID0gKG1heC8xMCkrMiwgbWVhbiA9IDAsIGFtcCA9IDIpIC0+XG5cbiAgICByYW5kb20gPSBNYXRoLnJvdW5kKFV0aWxzLm1vZHVsYXRlKG1lYW4gKyBnYXVzc1JhbmRvbShhbXApICogZGV2aWF0aW9uLFt0by8yKi0xLHRvLzJdLFtmcm9tLHRvXSxmYWxzZSkpXG4gICAgICAgIFxuICAgIGlmIHJhbmRvbSA8IGZyb20gfHwgcmFuZG9tID4gdG9cbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoVXRpbHMucmFuZG9tTnVtYmVyKGZyb20sdG8pKVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHJhbmRvbSAgICAgXG5cbiAgICAjIHRoZSBmb2xsb3dpbmcgaXMgYmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTk2OTQxICwgQm94LU11bGxlciBUcmFuZm9ybWF0aW9uXG5cdGdhdXNzUmFuZG9tID0gKGFtcCkgLT5cblx0XG5cdFx0dSA9IDIgKiBNYXRoLnJhbmRvbSgpIC0gMVxuXHRcdHYgPSAyICogTWF0aC5yYW5kb20oKSAtIDFcblx0XHRyID0gdSAqIHUgKyB2ICogdlxuXHRcblx0XHRpZiByID09IDAgb3IgciA+IDFcblx0XHRcdHJldHVybiBnYXVzc1JhbmRvbShhbXApXG5cdCBcdFx0ICBcblx0XHRjID0gTWF0aC5zcXJ0KGFtcCAqIC0xICogTWF0aC5sb2cocikgLyByKVxuXHRcdHUgKiBjIl19
