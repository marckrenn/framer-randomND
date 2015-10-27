require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"randomND":[function(require,module,exports){
var gaussRandom;

Utils.randomND = exports.randomND = function(min, max, std_dev, mean, amp) {
  if (std_dev == null) {
    std_dev = (max / 10) + 2;
  }
  if (mean == null) {
    mean = 0;
  }
  if (amp == null) {
    amp = 2;
  }
  return Math.round(Utils.modulate(mean + gaussRandom(amp) * std_dev, [max / 2 * -1, max / 2], [min, max], false));
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWFyY2tyZW5uL0Ryb3Bib3gvZnJhbWVyX3Byb2plY3RzL3JhbmRvbU5ERXhhbXBsZS5mcmFtZXIvbW9kdWxlcy9yYW5kb21ORC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNNQSxJQUFBOztBQUFBLEtBQUssQ0FBQyxRQUFOLEdBQWlCLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLFNBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxPQUFYLEVBQWlDLElBQWpDLEVBQTJDLEdBQTNDOztJQUFXLFVBQVUsQ0FBQyxHQUFBLEdBQUksRUFBTCxDQUFBLEdBQVM7OztJQUFHLE9BQU87OztJQUFHLE1BQU07O1NBRW5GLElBQUksQ0FBQyxLQUFMLENBQVcsS0FBSyxDQUFDLFFBQU4sQ0FBZSxJQUFBLEdBQU8sV0FBQSxDQUFZLEdBQVosQ0FBQSxHQUFtQixPQUF6QyxFQUFpRCxDQUFDLEdBQUEsR0FBSSxDQUFKLEdBQU0sQ0FBQyxDQUFSLEVBQVUsR0FBQSxHQUFJLENBQWQsQ0FBakQsRUFBa0UsQ0FBQyxHQUFELEVBQUssR0FBTCxDQUFsRSxFQUE0RSxLQUE1RSxDQUFYO0FBRmtDOztBQUtuQyxXQUFBLEdBQWMsU0FBQyxHQUFEO0FBRWIsTUFBQTtFQUFBLENBQUEsR0FBSSxDQUFBLEdBQUksSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFKLEdBQW9CO0VBQ3hCLENBQUEsR0FBSSxDQUFBLEdBQUksSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFKLEdBQW9CO0VBQ3hCLENBQUEsR0FBSSxDQUFBLEdBQUksQ0FBSixHQUFRLENBQUEsR0FBSTtFQUVoQixJQUFHLENBQUEsS0FBSyxDQUFMLElBQVUsQ0FBQSxHQUFJLENBQWpCO0FBQ0MsV0FBTyxXQUFBLENBQVksR0FBWixFQURSOztFQUdBLENBQUEsR0FBSSxJQUFJLENBQUMsSUFBTCxDQUFVLEdBQUEsR0FBTSxDQUFDLENBQVAsR0FBVyxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsQ0FBWCxHQUF5QixDQUFuQztTQUNKLENBQUEsR0FBSTtBQVZTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgJ3JhbmRvbU5EJyBtb2R1bGUgdjEuMFxuIyBieSBNYXJjIEtyZW5uLCBPY3QuIDI3dGgsIDIwMTUgfCBtYXJjLmtyZW5uQGdtYWlsLmNvbSB8IEBtYXJjX2tyZW5uXG4jXG4jIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyByYW5kb21ORCA9IHJlcXVpcmUgXCJyYW5kb21ORFwiXG5cblV0aWxzLnJhbmRvbU5EID0gZXhwb3J0cy5yYW5kb21ORCA9IChtaW4sIG1heCwgc3RkX2RldiA9IChtYXgvMTApKzIsIG1lYW4gPSAwLCBhbXAgPSAyKSAtPlxuXG5cdFx0TWF0aC5yb3VuZChVdGlscy5tb2R1bGF0ZShtZWFuICsgZ2F1c3NSYW5kb20oYW1wKSAqIHN0ZF9kZXYsW21heC8yKi0xLG1heC8yXSxbbWluLG1heF0sZmFsc2UpKVxuXG4gICAgIyB0aGUgZm9sbG93aW5nIGlzIGJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE5Njk0MSAsIEJveC1NdWxsZXIgVHJhbmZvcm1hdGlvblxuXHRnYXVzc1JhbmRvbSA9IChhbXApIC0+XG5cdFxuXHRcdHUgPSAyICogTWF0aC5yYW5kb20oKSAtIDFcblx0XHR2ID0gMiAqIE1hdGgucmFuZG9tKCkgLSAxXG5cdFx0ciA9IHUgKiB1ICsgdiAqIHZcblx0XG5cdFx0aWYgciA9PSAwIG9yIHIgPiAxXG5cdFx0XHRyZXR1cm4gZ2F1c3NSYW5kb20oYW1wKVxuXHQgXHRcdCAgXG5cdFx0YyA9IE1hdGguc3FydChhbXAgKiAtMSAqIE1hdGgubG9nKHIpIC8gcilcblx0XHR1ICogYyJdfQ==