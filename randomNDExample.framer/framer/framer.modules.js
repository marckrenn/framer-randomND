require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"randomND":[function(require,module,exports){
var gaussRandom;

Utils.randomND = exports.randomND = function(from, to, deviation, mean, amp) {
  var random;
  if (deviation == null) {
    deviation = (to / 10) + 2;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWFyY2tyZW5uL0RvY3VtZW50cy9naXRodWIvZnJhbWVyLW1vZHVsZXMvZnJhbWVyLXJhbmRvbU5EL3JhbmRvbU5ERXhhbXBsZS5mcmFtZXIvbW9kdWxlcy9yYW5kb21ORC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNNQSxJQUFBOztBQUFBLEtBQUssQ0FBQyxRQUFOLEdBQWlCLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLFNBQUMsSUFBRCxFQUFPLEVBQVAsRUFBVyxTQUFYLEVBQWtDLElBQWxDLEVBQTRDLEdBQTVDO0FBRWhDLE1BQUE7O0lBRjJDLFlBQVksQ0FBQyxFQUFBLEdBQUcsRUFBSixDQUFBLEdBQVE7OztJQUFHLE9BQU87OztJQUFHLE1BQU07O0VBRWxGLE1BQUEsR0FBUyxJQUFJLENBQUMsS0FBTCxDQUFXLEtBQUssQ0FBQyxRQUFOLENBQWUsSUFBQSxHQUFPLFdBQUEsQ0FBWSxHQUFaLENBQUEsR0FBbUIsU0FBekMsRUFBbUQsQ0FBQyxFQUFBLEdBQUcsQ0FBSCxHQUFLLENBQUMsQ0FBUCxFQUFTLEVBQUEsR0FBRyxDQUFaLENBQW5ELEVBQWtFLENBQUMsSUFBRCxFQUFNLEVBQU4sQ0FBbEUsRUFBNEUsS0FBNUUsQ0FBWDtFQUVULElBQUcsTUFBQSxHQUFTLElBQVQsSUFBaUIsTUFBQSxHQUFTLEVBQTdCO0FBQ0ksV0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLEtBQUssQ0FBQyxZQUFOLENBQW1CLElBQW5CLEVBQXdCLEVBQXhCLENBQVgsRUFEWDtHQUFBLE1BQUE7QUFHSSxXQUFPLE9BSFg7O0FBSmdDOztBQVVuQyxXQUFBLEdBQWMsU0FBQyxHQUFEO0FBRWIsTUFBQTtFQUFBLENBQUEsR0FBSSxDQUFBLEdBQUksSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFKLEdBQW9CO0VBQ3hCLENBQUEsR0FBSSxDQUFBLEdBQUksSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFKLEdBQW9CO0VBQ3hCLENBQUEsR0FBSSxDQUFBLEdBQUksQ0FBSixHQUFRLENBQUEsR0FBSTtFQUVoQixJQUFHLENBQUEsS0FBSyxDQUFMLElBQVUsQ0FBQSxHQUFJLENBQWpCO0FBQ0MsV0FBTyxXQUFBLENBQVksR0FBWixFQURSOztFQUdBLENBQUEsR0FBSSxJQUFJLENBQUMsSUFBTCxDQUFVLEdBQUEsR0FBTSxDQUFDLENBQVAsR0FBVyxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsQ0FBWCxHQUF5QixDQUFuQztTQUNKLENBQUEsR0FBSTtBQVZTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgJ3JhbmRvbU5EJyBtb2R1bGUgdjEuMFxuIyBieSBNYXJjIEtyZW5uLCBKYW4uIDJuZCwgMjAxNiB8IG1hcmMua3Jlbm5AZ21haWwuY29tIHwgQG1hcmNfa3Jlbm5cbiNcbiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIHJhbmRvbU5EID0gcmVxdWlyZSBcInJhbmRvbU5EXCJcblxuVXRpbHMucmFuZG9tTkQgPSBleHBvcnRzLnJhbmRvbU5EID0gKGZyb20sIHRvLCBkZXZpYXRpb24gPSAodG8vMTApKzIsIG1lYW4gPSAwLCBhbXAgPSAyKSAtPlxuXG4gICAgcmFuZG9tID0gTWF0aC5yb3VuZChVdGlscy5tb2R1bGF0ZShtZWFuICsgZ2F1c3NSYW5kb20oYW1wKSAqIGRldmlhdGlvbixbdG8vMiotMSx0by8yXSxbZnJvbSx0b10sZmFsc2UpKVxuXG4gICAgaWYgcmFuZG9tIDwgZnJvbSBvciByYW5kb20gPiB0b1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChVdGlscy5yYW5kb21OdW1iZXIoZnJvbSx0bykpXG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gcmFuZG9tXG5cblx0IyB0aGUgZm9sbG93aW5nIGlzIGJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE5Njk0MSAsIEJveC1NdWxsZXIgVHJhbmZvcm1hdGlvblxuXHRnYXVzc1JhbmRvbSA9IChhbXApIC0+XG5cblx0XHR1ID0gMiAqIE1hdGgucmFuZG9tKCkgLSAxXG5cdFx0diA9IDIgKiBNYXRoLnJhbmRvbSgpIC0gMVxuXHRcdHIgPSB1ICogdSArIHYgKiB2XG5cblx0XHRpZiByID09IDAgb3IgciA+IDFcblx0XHRcdHJldHVybiBnYXVzc1JhbmRvbShhbXApXG5cblx0XHRjID0gTWF0aC5zcXJ0KGFtcCAqIC0xICogTWF0aC5sb2cocikgLyByKVxuXHRcdHUgKiBjIl19
