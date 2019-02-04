(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const fetchFactory = {
  getAllPets() {
    return fetch("http://localhost:8088/adoptablePets").then(response => response.json()).then(newPet => {
      console.log(newPet);
    });
  }

};
var _default = fetchFactory;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _fetchFactory = _interopRequireDefault(require("./fetchFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fetchFactory.default.getAllPets();

},{"./fetchFactory":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2ZldGNoRmFjdG9yeS5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLE1BQU0sWUFBWSxHQUFHO0FBRWpCLEVBQUEsVUFBVSxHQUFHO0FBQ1QsV0FBTyxLQUFLLENBQUMscUNBQUQsQ0FBTCxDQUNGLElBREUsQ0FDRyxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEZixFQUVGLElBRkUsQ0FFRyxNQUFNLElBQUk7QUFDWixNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksTUFBWjtBQUNILEtBSkUsQ0FBUDtBQUtIOztBQVJnQixDQUFyQjtlQVdlLFk7Ozs7OztBQ1hmOzs7O0FBRUEsc0JBQWEsVUFBYiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGZldGNoRmFjdG9yeSA9IHtcblxuICAgIGdldEFsbFBldHMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9hZG9wdGFibGVQZXRzXCIpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihuZXdQZXQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1BldClcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaEZhY3RvcnkiLCJpbXBvcnQgZmV0Y2hGYWN0b3J5IGZyb20gXCIuL2ZldGNoRmFjdG9yeVwiXG5cbmZldGNoRmFjdG9yeS5nZXRBbGxQZXRzKCkiXX0=
